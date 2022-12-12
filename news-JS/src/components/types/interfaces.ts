export interface source {
    id: string;
    name: string;
}

export interface drawData {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: source;
    title: string;
    url: string;
    urlToImage: string;
}

export interface sourceData {
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
}
export interface drawNewsData {
    articles: [];
    status: string;
    totalResults: string;
}

export interface drawSourcesData extends drawNewsData {
    sources: [];
}

export type callbackFn = (obj?: drawSourcesData) => void;
