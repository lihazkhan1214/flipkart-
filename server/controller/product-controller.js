import products from "../module/Product-schema.js";


export const getproducts=async(req,res)=>{
try {
    const data=await products.find({});
    res.status(200).json(data);
    
} catch (error) {
    res.status(401).json({message:error});
    
}
};
export const getproductbyid=async(req,res)=>{
    try {
       
    const product=await products.findOne({'id':req.params.id});
    res.status(200).json(product);
  

    } catch (error) {
        res.status(401).json({message:"eror in the req"});
    }
}