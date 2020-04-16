const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=34159dda1472b804ca7f8aeb4a4ff50b&units=metric`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}