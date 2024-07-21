import mysql from 'mysql2/promise';

const localhost = "127.0.0.1";
const myusername = "arcadia";
const mypassword = "1234";

const db = mysql.createConnection({
        host: localhost,
        user: myusername,
        password: mypassword,
        //port: "30000",
        socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
});

/*db.connect(function(err) {
         //if (err) throw err;
         if (err) {
            console.error("erreur de connection");
         } else {
            console.error("connecté");
         }
        
});*/

export default db;