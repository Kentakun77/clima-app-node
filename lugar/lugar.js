const axios = require('axios');

const getLugarLatLng = async(direccion1) => {
    const encodedUrl = encodeURI(direccion1);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUrl }`,
        timeout: 1000,
        headers: { 'X-RapidAPI-Key': 'a01BmkIsSlmshPUAIWy0oJGXOCkyp1ylODujsnEctmjwPYSzkf' }
    });

    const resp = await instance.get();
    if (resp.data.Results.lenght === 0) {
        throw new Error(`No hay resultados para ${ direccion1 }`);
    }
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}