import axios from 'axios';

export default function NutricianSearchAPICall(callBack, searchParams)
{
    axios.get(`http://localhost:3001/nutricians/?q=${searchParams ? searchParams : ''}`)
    .then(response => {
        console.log("Nutrician API Response: ", response.data);
        callBack(response.data);
    })
    .catch(error => {
        console.log(error);
    });
}
