import express from "express";
const router=express.Router();
import { getproducts ,getproductbyid} from "../controller/product-controller.js";
import { signup,login } from "../controller/usercontroller.js";
router.post("/signup",signup);
router.post("/login",login);
router.get("/products",getproducts);
router.get("/product/:id",getproductbyid);


export default router;