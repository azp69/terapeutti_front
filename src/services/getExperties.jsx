import axios from 'axios';

export default function ExpertiesAPICall(callBack, searchParams)
{
    const debugMode = false;

    const url = debugMode ? `http://palikka.org:3001/experties/?q=${searchParams ? searchParams : ''}` : `http://localhost:3001/experties/?q=${searchParams ? searchParams : ''}`;

    axios.get(url)
    .then(response => {
        console.log("Experties API Response: ", response.data);
        callBack(response.data);
    })
    .catch(error => {
        console.log(error);
    });
}