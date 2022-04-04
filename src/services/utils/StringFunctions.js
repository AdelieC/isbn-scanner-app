const capitalize = (s) => s && s[0].toUpperCase() + s.toLowerCase().slice(1);
const getSnippet = (text) => {
    return text.slice(0, 180) + '...';
};
export { capitalize, getSnippet };
