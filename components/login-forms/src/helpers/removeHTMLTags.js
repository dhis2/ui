export const removeHTMLTags = (text) =>
    text ? text.replace(/(<([^>]+)>)/gi, '') : ''
