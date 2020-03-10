import axios from 'axios';
import * as Helper from '../components/helper';

const devMode = (process.env.NODE_ENV === 'development') ? true : false;
const releaseUrl = 'https://api.terapia.palikka.org/';
const devUrl = 'http://localhost:3001/';

export function search(callBack, params, data)
{
    const query = `?query=${params.searchparams.query}&expertises=[${params.searchparams.expertises}]`;
    console.log("search: ", query);
    
    
    const url = devMode ? `${devUrl}api/dieticians/${query}` : `${releaseUrl}api/dieticians/${query}`;

    axios.get(url)
    .then(response => {
        Helper.log(response.data);
        callBack(response.data);
    })
    .catch(error => {
        console.log(error);
    });
}

export function get(callBack, params, data)
{
    const url = devMode ? `${devUrl}api/dieticians/${params}` : `${releaseUrl}api/dieticians/${params}`;

    axios.get(url)
    .then(response => {
        console.log("dietician API Response: ", response.data);
        callBack(response.data);
    })
    .catch(error => {
        callBack(null);
        console.log(error);
    });
}

export function add(callBack, data)
{
    const url = devMode ? `${devUrl}api/dieticians` : `${releaseUrl}api/dieticians`;

    axios.post(url, data, {
        headers: {
            'Content-Type' : 'application/json'
        }
    })
    .then(response => {
        callBack(response.data);
    })
    .catch(error => {
        console.log(error);
    });
}

export function update(callBack, params, data)
{
    const url = devMode ? `${devUrl}api/dieticians/${params}` : `${releaseUrl}api/dieticians/${params}`;

    axios.put(url, data)
    .then(response => {
        console.log("dietician API Response: ", response.data);
        callBack(response.data);
    })
    .catch(error => {
        console.log(error);
    });
}

export function remove(callBack, params, data)
{
    const url = devMode ? `${devUrl}api/dieticians/${params}` : `${releaseUrl}api/dieticians/${params}`;

    axios.delete(url)
    .then(response => {
        console.log("dietician API Response: ", response.data);
        callBack(response.data);
    })
    .catch(error => {
        console.log(error);
    });
}
