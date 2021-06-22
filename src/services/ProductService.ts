import axios from 'axios';

const baseUrl = 'localhost/products'
const getAllProducts = async ()=>{
    const products = await axios.get(baseUrl);
    return products;
    console.log(products)
}



export {getAllProducts}