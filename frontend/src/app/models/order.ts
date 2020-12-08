export class Order {

    constructor(){

        this._id='';
        this.clientName = '';
        this.productList = [];
        this.payed = false;
       

    }


    _id: string ;
    clientName: string ;
    productList:  Array<String>;
    payed: boolean ;
    
}





/**const orderSchema = new Schema({
    id:{type:String, require:true},
    clientName:{type:String, require:true},
    productList:{type:Array, require:true},
    payed:{type:Boolean, require:true}
});
*/