const express = require("express");
const { getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails} = require("../controllers/productController");
const { isAunthenticatedUser, authorizeRoles } = require("../middlewares/auth");

const router = express.Router();


router.route("/products").get(getAllProducts);


router.route("/product/new").post(isAunthenticatedUser,authorizeRoles("admin"), createProduct);

router.route("/product/:id")
.put(isAunthenticatedUser,authorizeRoles("admin"), updateProduct)
.delete(isAunthenticatedUser,authorizeRoles("admin"), deleteProduct)
.get(getProductDetails);


module.exports = router