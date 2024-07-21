//"use server"
//import db from "./../db";
// get the client
import mysql from "mysql2/promise";
import  { NextApiRequest, NextApiResponse } from 'next';
//const mysql = require('mysql2/promise');
export default async function handler(req,res){

    const localhost = "localhost";
    const myusername = "arcadia";
    const mypassword = "1234";
console.log("test");
        const dbconnect = await mysql.createConnection({
            host: "localhost",
            database: "arcadia",
            user: "arcadia",
            password: "1234",
            port: "3000",
            socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
        });





    try{
        const query = "SELECT * FROM Users"; 
        const values = [];
        const [data] = await dbconnect.execute(query,values);
        dbconnect.end();
        console.log(data);
        
        return res.status(200).json({results: data});
    }catch (error){
        return  {results: error.message};
    }
}



/*export default async function handler(req, res) {
    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*', // replace this with your actual origin
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });

    res.json({ message: 'Hello Next.js!' });
}*/
