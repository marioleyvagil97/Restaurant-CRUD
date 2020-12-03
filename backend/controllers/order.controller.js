const order = require("../models/order");

const orderController = {};

orderController.getOrders = async (req, res) => {
  const orders = await order.find();
  res.json(orders);
};

orderController.createOrder = async (req, res) => {
  const newOrder = new order(req.body);
  console.log(newOrder);
  await newOrder.save();
  res.json({
    status: "Orden Guardada",
  });
};

orderController.getOrder = async (req, res) => {
  const _id = req.params.id;
  const ord = await order.findOne({ _id: _id });
  console.log(ord);

  res.json(ord);
};

orderController.updateOrder = async (req, res) => {
    const _id = req.params.id;
    const upOrder = {
        clientName: req.body.clientName,
        productList: req.body.productList,
        payed: req.body.payed,
    };

    await order.findByIdAndUpdate(_id, {$set: upOrder});

    res.json({status: "Orden Actualizada"});
}

orderController.deleteOrder = async (req, res) => {
    const _id = req.params.id;

    await order.findByIdAndDelete(_id);

    res.json({status: "Orden eliminada"});

}

module.exports = orderController;
