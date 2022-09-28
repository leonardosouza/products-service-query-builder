// const dbClient = require("../infra/dbClient");
const dbQueryBuilder = require("../infra/dbQueryBuilder");
const ProductDAO = require("../dao/productDao")(dbQueryBuilder);

// Abordagem 1 - Classes
class ProductsController {
  createProduct(req, res) {
    ProductDAO.save(req.body, (id, err, result) => {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(201).json({ ...result, id });
      }
    });
  }

  getAllProducts(req, res) {
    ProductDAO.findAll((err, result) => {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json(result);
      }
    });
  }

  getProductById(req, res) {
    ProductDAO.findOne(req.params.id, (err, result) => {
      if (err) {
        res.status(500).json({ error: err });
      } else if (result.length) {
        res.status(200).json(result[0]);
      } else {
        res.status(404).json({ message: `product not found` });
      }
    });
  }

  updateProduct(req, res) {
    ProductDAO.updateOne(req.params.id, req.body, (err, result) => {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(204).end();
      }
    });
  }

  removeProduct(req, res) {
    ProductDAO.removeOne(req.params.id, (err, result) => {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(204).end();
      }
    });
  }
}

module.exports = new ProductsController();
