import axios from 'axios';


const server_address = "https://dermadetect.appspot.com/api/"  //"http://localhost:3000/" // "http://dermadetect.azurewebsites.net/api/"

export function get(args, page, limit)
{
    
    return fetch(server_address + args + "?_page="+page + "&_limit="+limit+"&_sort=id&_order=desc")
    .then(response => response.json())
    .then(data => { console.log(data);  return data } );

    /*
    return axios.get( server_address + args + "?_page="+page + "&_limit="+limit+"&_sort=id&_order=desc").then( (data) => {
        return data.data;
    } )
    */
}

export function post(target, args)
{
    return axios.post( server_address + target, args ).then( (response) => {
        return true;
    } )
}