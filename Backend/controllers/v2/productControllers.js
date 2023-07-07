const ProductSchema = require('../../models/v2/barangModels')

const view = async (req, res) => {
    try {
        const product = await ProductSchema.find();
        res.json(product)
    }
    catch(error) {
        res.status(500).json({message: error.message});
    }
}

const filter = async (req, res) => {
    try {
        const productID = await ProductSchema.findById(req.params.id);
        res.json(productID)
    }
    catch(error) {
        res.status(404).json({message: error.message});
    }
}

const addProduct = async (req, res) => {
    const product = new ProductSchema(req.body)
    try {
        const addproduct = await product.save();
        res.status(200).json(addproduct)
    }
    catch(error) {
        res.status(400).json({message: error.message});
    }
}

const updateProduct = async (req, res) => {
    try {
        const productUpdate = await ProductSchema.updateOne({_id:req.params.id}, {$set:req.body})
        res.status(200).json(productUpdate)
    }
    catch(error) {
        res.status(400).json({message: error.message});
    }
}

const deleteProduct = async (req, res) => {
    try {
        const productDelete = await ProductSchema.deleteOne({_id:req.params.id})
        res.status(200).json(productDelete)
    }
    catch(error) {
        res.status(400).json({message: error.message});
    }
}

module.exports = {
    view,
    filter,
    addProduct,
    updateProduct,
    deleteProduct
}
