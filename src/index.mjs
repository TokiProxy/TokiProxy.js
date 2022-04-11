import EventEmitter from 'events';

import fetch from 'node-fetch';

class TokiProxy extends EventEmitter {
    getProxies(type, token) {
        let ENDPOINT = 'https://tokiproxy.co.uk/api/proxies/' + type.toLowerCase()


        fetch(ENDPOINT, {
            method: 'GET',
            headers: { "Authorization": `Bearer ${token}` }
        }).then(res => res.json())
            .then(json => {
                let i;
                for(i=0; i<json.length; i++) {
                    this.emit('request', {proxies: json[i].ip})
                }
            });
    }

}

export default TokiProxy
