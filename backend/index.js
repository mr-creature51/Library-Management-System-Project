const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
require('./db/config');
const User = require('./db/User');
const Product = require('./db/Product');
const cors = require('cors');
app.use(express.json());
app.use(cors());

app.post("/register", async(req, resp) => {
    try { 

    
        const hashPassword= await bcrypt.hash(req.body.password, 10);
        const user = {name:req.body.name , email:req.body.email , password:hashPassword}
        const createDb = new User(user);
        let result = await createDb.save();
        result = result.toObject();
        delete result.password;
        resp.send(result);
        console.log(result);
    }
    catch (err) {
        console.log(err);
     }
})


app.post('/login',async(res, resp) => {
    let result = await User.findOne(res.body).select("-password")
    if (res.body.email && res.body.password) {
        if (result) {
            resp.send(result);
        }
        else {
            resp.send("not added")
        }
    } else { 
        resp.send("data incomplete")

    }
 })


 app.post("/addproduct", async(req, resp) => {
    try { 
        const createProd = new Product(req.body);
        let result = await createProd.save();
        resp.send(result);
        console.log(result);
    }
    catch (err) {
        console.log(err);
     }
 })

app.get('/find' , async(req, res)=> {
    let product = await Product.find();
    if (product.length > 0) {
        res.send(product);
    }
    else {  
        res.send("no product found");
     }
})
 
app.delete('/product/:id', async(req, res) => { 
    const result = await Product.deleteOne({ _id: req.params.id })
    res.send(result);
})

app.get('/product/:id', async (req, res) => {
    let result = await Product.findOne({ _id: req.params.id });
    if (result) {
        res.send(result); }
    else { 
        res.send("not found");
    }
 })

app.put('/product/:id', async(req, res) => {
    let result = await Product.updateOne({ _id: req.params.id }, { $set: req.body });
    
    res.send(result);
})

app.get('/search/:key', async(req , res)=>{
    let result = await Product.find({
        '$or': [
            { name: { $regex: req.params.key } },
            { price: { $regex: req.params.key } },
            { company: { $regex: req.params.key } },
           
        ]
    });
    res.send(result)
})

const port = process.env.PORT || 3000;
app.listen(port, () => { 
    console.log(`server is listening on ${port}`)
});
// app.listen(5000);