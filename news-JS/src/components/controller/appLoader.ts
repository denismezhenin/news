import Loader from './loader';
import { appBaseLink, appOptions } from '../constants/constants';

class AppLoader extends Loader {
    constructor() {
        super(appBaseLink, appOptions);
    }
}

export default AppLoader;
