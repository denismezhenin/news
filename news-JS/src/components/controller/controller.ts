import AppLoader from './appLoader';
import { callbackFn } from '../types/interfaces';
import { ENDPOINTS } from '../constants/endpoints';

class AppController extends AppLoader {
    getSources(callback: callbackFn): void {
        super.getResponse(
            {
                endpoint: ENDPOINTS.sources,
            },
            callback
        );
    }

    getNews(e: Event, callback: callbackFn): void {
        let target = <HTMLElement>e.target;
        const newsContainer = <HTMLElement>e.currentTarget;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    if (sourceId) {
                        newsContainer.setAttribute('data-source', sourceId);
                        super.getResponse(
                            {
                                endpoint: ENDPOINTS.everything,
                                options: {
                                    sources: sourceId,
                                },
                            },
                            callback
                        );
                    }
                }
                return;
            }
            target = <HTMLElement>target.parentNode;
        }
    }
}

export default AppController;
