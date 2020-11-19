const { stringify } = require('querystring');
const dish = require('../models/dish');

const dishController = {};


dishController.getDishes = async (req,res)=>{
   const dishes = await dish.find();
   res.json(dishes);

}

dishController.createDish = async (req,res) =>{
    const newDish = new dish (req.body);
    console.log(newDish);
    await newDish.save();
    res.json({
        'status':'Platillo guardado'
    });

}

dishController.getDish = async (req,res) =>{

  const foundDish = await dish.findById(req.params.id);
  res.json(foundDish);
 
}

dishController.updateDish = (req,res) =>{
    
}

dishController.deleteDish = (req,res) =>{
    
}


module.exports = dishController;