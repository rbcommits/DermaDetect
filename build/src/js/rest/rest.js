import axios from 'axios';

const server_address = "https://dermadetect.azurewebsites.net/api/"//"https://dermadetect.appspot.com/api/"  //"http://localhost:3000/" // 
const localhost = "https://dermadetect.azurewebsites.net/api/"
//"https://dermadetect.azurewebsites.net/api/" //


export function get(args, page, limit)
{
    /*
    return fetch(server_address + args + "?_page="+page + "&_limit="+limit+"&_sort=id&_order=desc")
    .then(response => response.json())
    .then(data => { console.log(data);  return data } );
*/

        return axios.get( localhost + args).then( (data) => {
            return data.data;
        } ).catch( error => {
            return axios.get( server_address + args).then( (data) => {
                return data.data;
            } ).catch( error => { return {} })
        } )
    

    
}

export function post(target, args)
{
    return axios.post( localhost + target, args ).then( (response) => {
        return true;
    } )
}

export function patch(target, args)
{
    return axios.patch( localhost + target, args ).then( (response) => {
        return true;
    } ).catch(error => {
        return axios.get( server_address + args).then( (data) => {
            return true;
        } ).catch( error => { console.log(error) })
    } )
}

export function upload_image(image)
{
    const formData = new FormData();
    formData.append("file", image);
    formData.append("tags", `derma detect`);
    formData.append("upload_preset", "c5wnphhi"); // Replace the preset name with your own
    formData.append("api_key", "586272113386492"); // Replace API key with your own Cloudinary key
    formData.append("timestamp", (Date.now() / 1000) | 0);
    
    // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
    return axios.post(" https://api.cloudinary.com/v1_1/dtqw4udhj/image/upload", formData, {
      headers: { "X-Requested-With": "XMLHttpRequest" },
    }).then(response => {
      const data = response.data;
      const fileURL = data.secure_url // You should store this URL for future references in your app
      return fileURL
    })
    
}

/* 
picture of a bunny: https://res.cloudinary.com/dtqw4udhj/image/upload/v1509702572/Cute-Red-Bunny_gjn3k8.jpg

*/