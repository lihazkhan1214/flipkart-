import products from "./module/Product-schema.js";
import { productsdata } from "./constants/data.js";

const DefaultData = async () => {
    try {
       await products.deleteMany({});
        await products.insertMany(productsdata);

        console.log('Data imported Successfully');
        
    } catch (error) {
        console.log('Error: in database ');
    }
}

export default DefaultData;