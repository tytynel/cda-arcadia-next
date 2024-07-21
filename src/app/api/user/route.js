// In this file, we can define any type of request as follows:
// export async function GET(Request) {}
// export async function HEAD(Request) {}
// export async function POST(Request) {}
// export async function PUT(Request) {}
// export async function DELETE(Request) {}
//  A simple GET Example
import mysql from "mysql2/promise";
export async function GET(Request) {

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
      
      return Response.json({data});
  }catch (error){
      return  Response.json({ error });
  }

}