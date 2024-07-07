const db = require("../../database/dbConfig");

const getAll = () => {
  return db("cars");
}

const getById = () => {
  return db("cars")
  .where('id', id)
  .first();
}

const create = () => {
  return db("cars")
  .insert(car)
  .then(([id]) => getById(id));
}

module.exports = {
  getAll,
  getById,
  create
}
