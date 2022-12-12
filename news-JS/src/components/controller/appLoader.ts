import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.up.railway.app/', {
            apiKey: '78f36bf61fa84b27a488b49d2fb4407c', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
 