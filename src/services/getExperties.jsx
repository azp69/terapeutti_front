import axios from 'axios';

export default function ExpertiesAPICall(callBack, searchParams)
{
    axios.get(`http://localhost:3001/experties/`)
    .then(response => {
        console.log("Experties API Response: ", response.data);
        callBack(response.data);
    })
    .catch(error => {
        console.log(error);
    });
}