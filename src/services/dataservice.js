import Axios from 'axios';
Axios.defaults.baseURL = 'https://art-of-ai-auction.jedlik.cloud';

export default {
    getAllCategories(){
        return Axios.get('/api/categories')  
    },
    getPaintingsByCategory(categoryId){
        return Axios.get('/api/paintings/'+categoryId)
    }

    // kivalasztottGyartoAutoi(manufacturerid){
    //     return Axios.get(`/api/cars/${manufacturerid}`)
    // },
    // saveUser(user){
    //     return Axios.post('/users',user).then(()=>{});
    // },
    // updateUser(user,id){
    //     return Axios.put(`/users/${id}`,user).then(()=>{});
    // }


}