import axios from 'axios';

export default function NutricianSearchAPICall(profileDataUpdateFunction, searchParams)
{
    axios.get(`http://localhost:3001/nutricians/?q=${searchParams ? searchParams : ''}`)
    .then(response => {
        console.log("Nutrician API Response: ", response.data);
        profileDataUpdateFunction(response.data);
    })
    .catch(error => {
        console.log(error);
    });
}
