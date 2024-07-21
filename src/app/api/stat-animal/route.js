const mongoose = require("mongoose");
//import {dotenv} from "dotenv/config";
//import statSchemas from "./statisticSchema"
//statSchemas = require("./statisticSchema");
//const statSchemas = require("./statisticSchema");
//import { statAnimalModel } from "./statisticSchema";
import statisticSchema from "./statisticSchema";
//const {statAnimal} = statAnimalModel;
//console.log(statAnimal);
/*export const statAction = {
    getAllStats,
    getStatByMysqlId
};*/

//const mongoose = require('mongoose');

// Database connection
//mongoose.connect(process.env.MONGO_DB_URI);

// User model
/*const SS = mongoose.models.SS || mongoose.model('SS', {
    _id:{type:String},
    mysqlAnimalId:{type:String},
    name:{type:String},
    stat:{type:Number}
});*/

async function getAllStats() {

    async function getAll(){
        mongoose.connect(process.env.MONGO_DB_URI)
        .then(async () => {
            console.log('Connected to MongoDB');
            
        })
        .catch((err) => {
            console.error(err);
            return err;
        });

        const statObj = await statisticSchema.find().then((a) => {
            console.log("aaaa" + a);
            return a;
        });

        console.log("statObj" + statObj);
        return statObj;
    };
    
    const result = await getAll();

    console.log("after" + result);
    return Response.json({result});
}

async function updStatByMysqlId(mysqlId) {

    async function getByMysqlId(mysqlId){
        mongoose.connect(process.env.MONGO_DB_URI)
        .then(async () => {
            console.log('Connected to MongoDB');
            
        })
        .catch((err) => {
            console.error(err);
            return err;
        });

        const statObj = await statisticSchema.find({mysqlAnimalId:mysqlId}).then((a) => {
            console.log("aaaa" + a);
            return a;
        });

        console.log("statObj" + statObj);
        return statObj;
    };
    
    const result = await getByMysqlId(mysqlId);
    let objStat = {};

    result.map((field, index) => (
        objStat._id = field._id,
        objStat.mysqlAnimalId = field.mysqlAnimalId,
        objStat.name = field.name,
        objStat.stat = Number(field.stat) + 1 ,
        console.log("in" + field.name)
    ));
    console.log("after" + objStat.stat);
    const stat = await statisticSchema.findOneAndReplace(
        { "mysqlAnimalId": objStat.mysqlAnimalId },
        { "mysqlAnimalId": objStat.mysqlAnimalId,"name": objStat.name,"stat": objStat.stat},
        {
            upsert: true,
            returnNewDocument: true
         }
     );
   /* const stat = await statisticSchema.findByIdAndUpdate(
        {_id: _id}, 
        {stat: nb},
        {new: true}
     );*/
    //await result.save();

    //console.log("update" + stat);
    return Response.json({stat});
}


async function create(req) {
    //const body = await req.json();
    //await usersRepo.create(body);
}

/*module.exports = apiHandler({
GET: getAllStats(),
POST: updateStats()
});*/
export async function GET(Request) {
   //return await getAllStats();
   return await updStatByMysqlId("1");

 /*   let mdb = mongoose.createConnection(process.env.MONGO_DB_URI);
            db.on('error', console.error.bind(console, 'connection error:'));
            var a1= mdb.once('open',function(){
                statSchemas.find({},{},function (err, StatAnimal) {
                mongoose.connection.close();
                console.log(StatAnimal);
                //doSomethingHere 
              })
            });   
    async function getByMysqlId(mysqlAnimalId) {
        try {


            //return await statSchemas.findOne({ mysqlAnimalId: '1' }).exec();
            return await statSchemas.find();

            //return await statSchemas.findById(mysqlAnimalId);
        } catch {
            throw 'Stats Not Found';
        }
    }
try{
    let data = {};
    mongoose.connect(process.env.MONGO_DB_URI)
    .then(async () => {
        console.log('Connected to MongoDB');
        
        
        //data = localStat;
    })
    .catch((err) => {
        console.error(err);
    });
    console.log(process.env.MONGO_DB_USER);
    const localStat = await getByMysqlId("1");
    console.log(localStat);
    return Response.json({data});
}catch (error){
    return  Response.json({ error });
}
*/
}