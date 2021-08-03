export const doFormDataRequest = (endpoint: string, method: string, parameters?: Record<string, object>) => {
    const formData = new FormData();
    parameters && Object.keys(parameters).forEach(key => formData.append(key, parameters[key].toString()))
    return fetch(endpoint, parameters ? {
        method: method,
        body: formData
    } : {
        method: method
    });
}

export const doPostRequest = (endpoint: string, parameters: Record<string, object>) => doFormDataRequest(endpoint, 'post', parameters);

export const doGetRequest = (endpoint: string, parameters?: Record<string, object>) => doFormDataRequest(endpoint, 'get', parameters);