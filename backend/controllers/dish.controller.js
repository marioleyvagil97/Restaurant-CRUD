const { stringify } = require("querystring");
const dish = require("../models/dish");

const dishController = {};

dishController.getDishes = async (req, res) => {
  const dishes = await dish.find();
  res.json(dishes);
};

dishController.createDish = async (req, res) => {
  const newDish = new dish(req.body);
  console.log(newDish);
  await newDish.save();
  res.json({
    status: "Platillo guardado",
  });
};

dishController.getDish = async (req, res) => {
  const id = req.params.id;

  const d = await dish.findOne({ id: id });

  console.log(d);
  // const foundDish = await dish.findById(req.params.id);
  res.json(d);
};

dishController.updateDish = async (req, res) => {
  const _id = req.params.id;

  const upDish = {
    type: req.body.type,
    name: req.body.name,
    cost: req.body.cost,
    description: req.body.description,
    benefict: req.body.benefict,
  };

  await dish.findByIdAndUpdate(_id, { $set: upDish });

  res.json({ status: "Platillo actualizado" });
};

dishController.deleteDish = async (req, res) => {
  const _id = req.params.id;

  await dish.findByIdAndDelete(_id);

  res.json({ status: "Platillo eliminado" });
};

module.exports = dishController;
