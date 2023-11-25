const evn = require('dotenv').config();
const express = require('express')
const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser');
const database = require('./config/database.js');
database.connect();
const port = process.env.PORT

app.set("views","views");
app.set('view engine', 'pug');

const system = require('./config/system.js');
// Tạo biến toàn cục sử dụng được trong toàn file.pug
app.locals.prefixAdmin = system.prefixAdmin;
app.use(bodyParser.urlencoded({ extended: true }));
const routerAdmin = require('./routers/admin/index.route.js');
routerAdmin.login(app);
app.get('/',() =>{
  console.log('Welcome');
})

http.listen(port, () =>{
   console.log('Connection');
})