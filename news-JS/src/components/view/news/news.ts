import './news.css';
import { drawData } from '../../types/interfaces';
import tsQuerySelector from '../../function/function';

class News {
    draw(data: drawData[]): void {
        const news = data.length >= 10 ? data.filter((_item, idx: number) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = tsQuerySelector(document, '#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item: drawData, idx: number) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement;

            if (idx % 2) tsQuerySelector(newsClone, '.news__item').classList.add('alt');

            (tsQuerySelector(newsClone, '.news__meta-photo') as HTMLDivElement).style.backgroundImage = `url(${
                item.urlToImage || 'img/news_placeholder.jpg'
            })`;
            tsQuerySelector(newsClone, '.news__meta-author').textContent = item.author || item.source.name;
            tsQuerySelector(newsClone, '.news__meta-date').textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            tsQuerySelector(newsClone, '.news__description-title').textContent = item.title;
            tsQuerySelector(newsClone, '.news__description-source').textContent = item.source.name;
            tsQuerySelector(newsClone, '.news__description-content').textContent = item.description;
            tsQuerySelector(newsClone, '.news__read-more a').setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        tsQuerySelector(document, '.news').innerHTML = '';
        tsQuerySelector(document, '.news').appendChild(fragment);
    }
}

export default News;
