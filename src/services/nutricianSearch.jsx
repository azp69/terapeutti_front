import axios from 'axios';

export default function NutricianSearchAPICall(callBack, searchParams)
{
    const devMode = false;

    const url = !devMode ? `https://api.terapia.palikka.org/api/dieticians/?q=${searchParams ? searchParams : ''}` : `http://localhost:3001/nutricians/?q=${searchParams ? searchParams : ''}`;

    axios.get(url, {crossdomain: true})
    .then(response => {
        console.log("Nutrician API Response: ", response.data);
        callBack(response.data);
    })
    .catch(error => {
        console.log(error);
    });
}
