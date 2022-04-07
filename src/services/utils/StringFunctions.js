const capitalize = (s) => s && s[0].toUpperCase() + s.toLowerCase().slice(1);

const getSnippet = (text) => {
    return text.slice(0, 180) + '...';
};

const formatSynopsis = (rawText) => {
    if (rawText) {
        const deTagged = rawText.replace(/<\/?("[^"]*"|'[^']*'|[^>])*(>|$)/g, '');
        return deTagged.replace(/\n/g, '');
    } else return '';
};

const formatCategory = (category) => {
    if (category) {
        return category.toLowerCase();
    } else return '';
};
export { capitalize, getSnippet, formatSynopsis, formatCategory };
