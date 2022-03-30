const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const createConfig = (method = '', data, isAuth, isMultipart) => {
    const config = { method: method };
    if (method === ('POST' || 'PATCH')) {
        if (data) config.body = JSON.stringify(data);
    }
    return config;
};

const get = async (url) => {
    const rawResponse = await fetch(BASE_URL + url, createConfig('GET'));
    const response = handleErrors(rawResponse);
    return response.json();
};

const post = async (url, data = null, isAuth = true, isMultipart = false) => {
    const rawResponse = await fetch(
        BASE_URL + url,
        createConfig('POST', data, isAuth, isMultipart)
    );
    const response = handleErrors(rawResponse);
    return response.json();
};

const patch = async (url, data) => {
    const rawResponse = await fetch(BASE_URL + url, createConfig('PATCH', data));
    const response = handleErrors(rawResponse);
    return response.json();
};

const remove = async (url, data) => {
    const rawResponse = await fetch(BASE_URL + url, createConfig('DELETE', data));
    const response = handleErrors(rawResponse);
    return response.json();
};

const handleErrors = (response) => {
    const res = response.status;
    switch (res) {
        case 400:
            throw new Error('La requète a échoué.');
        case 404:
            throw new Error("La ressource demandée n'existe pas.");
        case 406:
            throw new Error(
                "Impossible d'effectuer l'opération car la ressource n'est plus disponible."
            );
        case 500:
            throw new Error('Erreur serveur.');
        case 401:
            throw new Error('Unauthorized');
        case 403:
            throw new Error("Vous n'êtes pas autorisé à accéder à cette ressouce.");
        case 422:
            throw new Error('Requête incorrecte.');
        case 504:
            throw new Error('La requète à mis trop de temps à aboutir.');
        case 503:
            throw new Error('Service temporairement indisponible ou en maintenance.');
        default:
            return response;
    }
};

export { get, post, remove, patch };
