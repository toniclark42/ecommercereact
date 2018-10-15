const express = require("express");
const bodyParser = require("body-parser");
require("./db/mongoose");
var { ProductModel } = require("./models/products");
var cors = require("cors");
const app = express();
const {contactInfo} = require("./models/contactModel")

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ //For contact form info
    extended: true
  }));

app.get("/products", (req, res, next) => {
    ProductModel
      .find({})
      .then(product => res.send(product))
      .catch(err => res.status(400).send(err));
  });



  app.get('/products/:id', (req, res) => {   
    const id = req.params.id;
    ProductModel.findById(id).then(product => {
        if(product) {
            res.send(product);
        } else {
            res.status(404).send('Unable to find id');
        }
    }).catch(err => res.status(400).send(err.message))
})

app.get("/form_submission/", (req, res, next) => {
    contactInfo
      .find({})
      .then(returnedContacts => res.send(returnedContacts))
      .catch(err => res.status(400).send(err));
  });


app.delete('/products/:id', (req,res) => {
    const id = req.params.id;
    ProductModel.findByIdAndDelete(id).then(productDeleted => {
        if(productDeleted) {
            res.send(productDeleted)
        } else {
            res.status(404).send('Unable to find id')
        }
    }).catch(err => res.status(400).send(err.message))
})

app.post('/products/', (req,res) => {
   const {title, description, price, quantity, productType, productCategory, imagePath} = req.body;
  
   const product = new ProductModel({
        title, 
        description, 
        price, 
        quantity, 
        productType, 
        productCategory, 
        imagePath
   })
   product
   .save()
   .then(productAdded => res.redirect ("http://localhost:3000/admin"))
   .catch(err => res.status(400).send(err));
})

app.post('/form_submission',(req,res) => {
    const {firstName, lastName, emailInput, comments} = req.body;
  
   const formInfo = new contactInfo({
    firstName, 
    lastName, 
    emailInput, 
    comments
   })
   formInfo.save().then(() => {
       res.status(200).redirect("http://localhost:3000/contact")
   }).catch(err => console.log(err))
} )



app.put('/product/:id', (req, res) => {
    const id = req.params.id;
    const {title, description, price, quantity, productType, productCategory, imagePath} = req.body;
    ProductModel.findById(id).then(product => {
        if (!product) {
            return res.status(404).send('unable to find id');
        }
        if (title !== '') {
            product.set ({
                title
            })
        }
        if (description !== '') {
            product.set ({
                description
            })
        }
        if (price !== '') {
            product.set ({
                price
            })
        }
        if (quantity) {
            product.set ({
                quantity
            })
        }
        if (productType) {
            product.set ({
                productType
            })
        }
        if (productCategory) {
            product.set ({
                productCategory
            })
        }
        if (imagePath !== '') {
            product.set ({
                imagePath
            })
        }
        product.save()
        .then(updatedProduct => res.send(updatedProduct))
        .catch(err => res.status(400).send(err));
    })
})


  app.listen(3001)