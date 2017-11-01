import axios from 'axios';


const server_address = "https://dermadetect.azurewebsites.net/api/"//"https://dermadetect.appspot.com/api/"  //"http://localhost:3000/" // 
const localhost = "http://localhost:1337/api/"
export function get(args, page, limit)
{
    /*
    return fetch(server_address + args + "?_page="+page + "&_limit="+limit+"&_sort=id&_order=desc")
    .then(response => response.json())
    .then(data => { console.log(data);  return data } );
*/

        return axios.get( server_address + args + "?_page="+page + "&_limit="+limit+"&_sort=id&_order=desc").then( (data) => {
            return data.data;
        } ).catch( error => {
            return axios.get( localhost + args + "?_page="+page + "&_limit="+limit+"&_sort=id&_order=desc").then( (data) => {
                return data.data;
            } ).catch( error => { return "" })
        } )
    

    
}

export function post(target, args)
{
    return axios.post( server_address + target, args ).then( (response) => {
        return true;
    } )
}