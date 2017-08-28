export const setQuery = ({ commit }, query) => {
	commit('QUERY', query)
}

export const setBasicMeta = ({ commit }, {title, description}) => {
    window.document.title = title;
    document.head.querySelector('meta[name=description]').content = description;
}

export const setFacebookMeta = ({ commit }, {title, url, image, description}) => {
    document.head.querySelector('meta[property="og:title"]').content = title;
    document.head.querySelector('meta[property="og:url"]').content = url;
    document.head.querySelector('meta[property="og:image"]').content = image;
    document.head.querySelector('meta[property="og:description"]').content = description;
}

export const setTwitterMeta = ({ commit }, {title, url, image, description}) => {
    document.head.querySelector('meta[name="twitter:title"]').content = title;
    document.head.querySelector('meta[name="twitter:image"]').content = image;
    document.head.querySelector('meta[name="twitter:description"]').content = description;
}