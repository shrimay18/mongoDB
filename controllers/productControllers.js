const productModel = require("../models/product");


exports.createProduct = async (req, res) => {
    const product = productModel.create({
      product_name: req.body.product_name,
      product_price: req.body.product_price,
      isInStock: req.body.isInStock,
      category: req.body.category,
    });
  
    console.log(product);
  
    return res.status(201).json({ message: "Product Created" });
}

exports.getAllProducts = async (req, res) => {
    //
    const allProducts = await productModel.find();
    return res.json({ data : allProducts});
}

exports.getById = async (req, res) => {
    const product = await productModel.findById(req.params.id);
    return res.json(product);
}

exports.updateById = async (req, res) => {
    const product = await productModel.findByIdAndUpdate
    (req.params.id, req.body, {new: true});
    return res.json(product);
}

exports.deleteById = async (req, res) => {
    const product = await productModel.findByIdAndDelete(req.params.id);
    return res.json(product);
}