const axios = require("axios");

const HttpError = require('../models/http-error');

const API_KEY = process.env.GOOGLE_API_KEY;

async function getCoordsForAddress(address) {
    return {
        lat: 40.7484,
        lng: -73.9857
    };
    // const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${API_KEY}`);
    // const data = response.data;

    // if(!data || data.status === 'ZERO_RESULTS')
    // {
    //     const error = new HttpError('Could not find location for specific address.', 422);
    //     throw error;
    // }
    // console.log(data.results);
    // const coordinates = data.results[0].geometry.location;

    // return coordinates;
}

module.exports = getCoordsForAddress;