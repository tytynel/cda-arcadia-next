/*import mongoose from "mongoose";
//const mongoose = require("mongoose");
const {Schema} = mongoose;

mongoose.Promise = global.Promise;

export const statAnimalModel = {
    "StatAnimal": statModel()
};

function statModel(){
    const statisticSchema = new Schema({
        _id:{type:String},
        mysqlAnimalId:{type:String},
        name:{type:String},
        stat:{type:Number}
    });

    return mongoose.models.StatAnimal || mongoose.model("StatAnimal",statisticSchema,"animalsStats") ;
}*/

import mongoose from 'mongoose'

const statisticSchema = new mongoose.Schema({
    _id:{type:String},
    mysqlAnimalId:{type:String},
    name:{type:String},
    stat:{type:Number}
})

export default mongoose.models.StatAnimal || mongoose.model("StatAnimal",statisticSchema,"animalsStats") ;



//const Stat =  mongoose.model('Stat',statistisSchema,'animalsStats');

//const MySchemaStats = {'Stat':Stat};
//console.log(mongoose.models.StatAnimal );
//module.exports =  mongoose.models.StatAnimal || mongoose.model("StatAnimal",statisticSchema,"animalsStats");