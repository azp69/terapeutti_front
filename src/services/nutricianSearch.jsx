import axios from 'axios';

export default function NutricianSearchAPICall(callBack, searchParams)
{
    const debugMode = false;

    const url = debugMode ? `http://palikka.org:3001/nutricians/?q=${searchParams ? searchParams : ''}` : `http://localhost:3001/nutricians/?q=${searchParams ? searchParams : ''}`;

    axios.get(url)
    .then(response => {
        console.log("Nutrician API Response: ", response.data);
        callBack(response.data);
    })
    .catch(error => {
        console.log(error);
    });
}
