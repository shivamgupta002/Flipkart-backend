import express from "express";
import { userSignUp, userLogin } from "../controller/user-controller.js";
import {
  addProduct,
  getProducts,
  getProductById,
  deleteProduct,
  editProduct,
} from "../controller/product-controller.js";

const router = express.Router();

// ################## User Route ##################
router.post("/signUp", userSignUp);
router.post("/login", userLogin);

//################## Product Route ##################
router.post("/addProduct", addProduct);

router.get("/products", getProducts);
router.get("/product/:id", getProductById);

router.put("/editProduct/:id", editProduct);
router.delete("/deleteProduct/:id", deleteProduct);

export default router;
