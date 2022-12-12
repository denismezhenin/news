import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import tsQuerySelector from '../function/function';

class App {
    controller: AppController;
    view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
        tsQuerySelector(document, '.sources').addEventListener('click', (e) =>
            this.controller.getNews(e, (data) => {
                if (data != undefined) {
                    this.view.drawNews(data);
                }
            })
        );
        this.controller.getSources((data) => {
            if (data != undefined) {
                this.view.drawSources(data);
            }
        });
    }
}

export default App;
