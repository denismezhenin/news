import './sources.css';
import { sourceData } from '../../types/interfaces';
import tsQuerySelector from '../../function/function';

class Sources {
    draw(data: sourceData[]): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = tsQuerySelector(document, '#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item: sourceData) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

            tsQuerySelector(sourceClone, '.source__item-name').textContent = item.name;
            tsQuerySelector(sourceClone, '.source__item').setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        tsQuerySelector(document, '.sources').append(fragment);
    }
}

export default Sources;
