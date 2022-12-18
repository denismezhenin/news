import { errors } from '../constants/constants';
import { callbackFn, objString, responseArguments, responseErrors } from '../types/interfaces';

class Loader {
    readonly baseLink: string;
    readonly options: objString;

    constructor(baseLink: string, options: objString) {
        this.baseLink = baseLink;
        this.options = options;
    }

    protected getResponse(
        { endpoint, options = {} }: responseArguments,
        callback: callbackFn = () => {
            console.error(errors.badGetResponse);
        }
    ): void {
        this.load('GET', endpoint, callback, options);
    }

    protected errorHandler(response: Response): Response {
        if (!response.ok) {
            if (response.status === responseErrors.unauthorized || response.status === responseErrors.notFound)
                console.log(`Sorry, but there is ${response.status} error: ${response.statusText}`);
            throw Error(response.statusText);
        }

        return response;
    }

    protected makeUrl(options: { sources?: string }, endpoint: string): string {
        const urlOptions: { [key: string]: string } = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;
        Object.keys(urlOptions).forEach((key: string) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    protected load(method: string, endpoint: string, callback: callbackFn, options = {}): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
