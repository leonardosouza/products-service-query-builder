const { ulid } = require("ulid");

class ProductDAO {
  constructor(queryBuilder) {
    this.queryBuilder = queryBuilder;
  }

  async save(body, callback) {
    try {
      const id = ulid();
      const data = { ...body, id };
      await this.queryBuilder("products").insert(data);
      callback(id, null, data);
    } catch (error) {
      callback(null, null, result);
    }
  }

  async findAll(callback) {
    try {
      const result = await this.queryBuilder("products").select("*");
      callback(null, result);
    } catch (error) {
      callback(error, null);
    }
  }

  async findOne(id, callback) {
    try {
      const result = await this.queryBuilder("products")
        .select("*")
        .where("id", id);
      callback(null, result);
    } catch (error) {
      callback(error, null);
    }
  }

  async updateOne(id, body, callback) {
    try {
      const result = await this.queryBuilder("products")
        .update(body)
        .where("id", id);
      callback(null, result);
    } catch (error) {
      callback(error, null);
    }
  }

  async removeOne(id, callback) {
    try {
      const result = await this.queryBuilder("products").del().where("id", id);
      callback(null, result);
    } catch (error) {
      callback(error, null);
    }
  }
}

module.exports = (dbClient) => new ProductDAO(dbClient);
