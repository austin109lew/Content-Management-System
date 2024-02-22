const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'your_password',
  database: 'employee_tracker'
});
connection.on("error", (err) => {
   
console.log("- STATS Mysql2 connection died:", err);
});

module.exports=connection