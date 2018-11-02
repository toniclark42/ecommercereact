const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
var mysql = require('mysql');
const app = express();
const connection = mysql.createConnection({
    host: 'road2hire.ninja',
    user: 'r2hstudent',
    password: 'SbFaGzNgGIE8kfP',
    database: 'tclark'
});

app.use(cors()); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ //For contact form info
    extended: true
  })); 

app.get("/products", (req, res) => {
   connection.query('SELECT * from cakes', (error, results) => {
       if (error) throw error;
       res.send(JSON.stringify(results));
   });
  });
  app.get("/products/:id", (req, res) => {
      const id = req.params.id
    connection.query('SELECT * from cakes WHERE productID=?', [id], (error, results) => {
        if (error) throw error;
        res.send(JSON.stringify(results));
    });
   });
 
app.get("/form_submission", (req, res) => {
    connection.query('SELECT * from contacts', (error, results) => {
        if (error) throw error;
        res.send(JSON.stringify(results));
    });
  });

app.delete('/products/:id', (req,res) => {
    const id = req.params.id;
    connection.query(`DELETE from cakes WHERE productID=${id}`, (error, results) => { 
        if (error) throw error;
        res.send(JSON.stringify(results));
    }); 
})

app.post('/products/', (req,res) => {
    const {title, price, quantity, productType, productCategory, imagePath, description} = req.body;
    var mysqlQuery = `INSERT INTO cakes (title, price, quantity, productType, productCategory, imagePath, description)
    VALUES("?", "?", "?", "?", "?", "?", "?")`;
    connection.query(mysqlQuery, [title, price, quantity, productType, productCategory, imagePath, description], (error, results) => { 
        if (error) throw error;
        res.redirect('http://localhost:3000/admin');
    });  
}) 

app.post('/form_submission',(req,res) => {
    const {firstName, lastName, emailInput, comments} = req.body;
    var mysqlQuery = `INSERT INTO contacts (firstName, lastName, emailInput, comments)
    VALUES("?", "?", "?", "?")`;
    connection.query(mysqlQuery, [firstName, lastName, emailInput, comments], (error, results) => { 
        if (error) throw error;
        res.redirect('http://localhost:3000/admin');
    });  
} )

//rest api to update record into mysql database
 
 app.put('/products/:id', function (req, res) {
    const id = req.params.id;
    const {title, price, imagePath, description, productCategory, productType, caption, quantity} = req.body;
    connection.query(`UPDATE cakes SET title title=?, price=?, imagePath=?, description=?, productCategory=?, productType=?, caption=?, quantity=? WHERE productID=?`, 
    [title, price, imagePath, description, productCategory, productType, caption, quantity], (error, results) => { 
        if (error) throw error;
        res.send(results)
        res.redirect('http://localhost:3000/admin');
    });   
 });


  app.listen(3001)