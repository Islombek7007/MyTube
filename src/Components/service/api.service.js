import React from "react";
import axios from "axios";

const BASE_URI = 'https://youtube-v31.p.rapidapi.com'


const options = {
    params: {
        maxResults: '50',
    },

    headers: {
        'X-RapidAPI-Key': '64e9aa909cmsh4ec1745c5acac65p164ce2jsn0e22faf14a7b',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const ApiService = {
    async fetching(url) {
        const response = await axios.get(`${BASE_URI}/${url}`, options)
        return response.data
    }
}
