var mysql = require('mysql');

var con = mysql.createConnection({
  host: "db-mysql-sgp1-15496-do-user-9581486-0.b.db.ondigitalocean.com",
  user: "doadmin",
  password: "AVNS_yc5Fdf3hPsCczn-",
  port: 25060,
  dialect: 'mysql',
  force: true,
  ssl: { cert: fs.readFileSync(__dirname + '/ca-certificate.crt'),}
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  /*Create a database named "mydb":*/
  con.query("CREATE DATABASE gamedb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});
