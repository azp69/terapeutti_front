import React from 'react';
import axios from 'axios';

export default function NutricianSearchAPICall(profileDataUpdateFunction, searchParams)
{
    axios.get('https://terapia.palikka.org/api.php')
    .then(response => {
        console.log(response.data);
        profileDataUpdateFunction(response.data);
    })
    .catch(error => {
        console.log(error);
    });
}
