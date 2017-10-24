import axios from 'axios';

const server_address = "http://localhost:3000/"

export function get(args, page, limit)
{
    return axios.get( server_address + args + "?_page="+page + "&_limit="+limit).then( (data) => {
        return data.data;
    } )
}

export function post(args)
{
    axios.post( server_address + args )
}