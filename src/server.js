const express = require("express")
const mongoose = require("mongoose")
const collection = require("./connection")
const collection1 = require("./connection1")
const cors = require("cors")
const { json } = require("react-router-dom")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

mongoose.connect("mongodb://0.0.0.0:27017/lib")
             .then(()=>{
                 console.log("mongodb connected")
                     }
                 )
                 .catch((err)=>{
                     console.log(err)
                 });

app.post("/addbook",async(req,res)=>{
    const{name,aname,value,num,price,quan} = req.body
    console.log(name,aname,value,num,price,quan);
    data={
        bookname:name,
        authorname:aname,
        category:value,
        isbn:parseInt(num),
        price:price,
        quantity:parseInt(quan),
    }
    try{
        
        const check = await collection.findOne({bookname:name,isbn:num})
        if (check){
            res.json("exists")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
            
        }

    }
    catch{
        res.json("not exist")
    }
})
app.get("/viewbook",async(req,res)=>{
    try{
        const doc= await collection.find()
        if(doc){
            res.status(200).send(doc)
        }
        else{
            res.status(500).send("Page not found")
        }
    }
    catch{
        res.status(500).send("Page not found")
    }
})
app.post("/editbook",async(req,res)=>{
    const{item,name,aname,value,num,price,quan} = req.body
    console.log(name,aname,value,num,price,quan);
    try{
        await collection.updateOne({bookname:item.bookname},{$set:{ bookname:name,
            authorname:aname,
            category:value,
            isbn:parseInt(num),
            price:price,
            quantity:parseInt(quan)}})
    }
    catch{
        res.status(500).send("err");
    }
})
app.post("/registerstudent",cors(), async(req,res)=>{
    const {Name,regno,Password}=req.body
    data={
        name:Name,
        regno:regno,
        password:Password
    }
    try{
        const check = await collection1.findOne({regno:regno})
        if (check){
            res.json("exists")
        }
        else{
            res.json("notexist")
            await collection1.insertMany([data])
            
        }
        
    }
    catch{
        res.status(500).send("Err")
    }
})
app.post("/issuebook/",cors(),async(req,res)=>{
    const {regno}=req.body
    console.log(regno);
    try{
        const doc=await collection1.find({regno:regno})
        if(doc){
            res.status(200).send(doc)
        } 
        else{
            res.status(200).send("Not Found")
        }
    }
    catch{
        res.status(500).send("Error occurred");
    }
})
app.post("/getbook/",cors(),async(req,res)=>{
    const {bname}=req.body
    console.log(bname);
    
    try{
        const doc=await collection.find({bookname:bname})
        if(doc){
            res.status(200).send(doc)
        } 
        else{
            res.status(200).send("Not Found")
        }
    }
    catch{
        res.status(500).send("Error occurred");
    }
})
app.post("/issue/",cors(),async(req,res)=>{
    const {regno,bname}=req.body
    console.log(regno,bname);
    const doc= await collection.findOne({bookname:bname})
    const isbn = doc.isbn;
   console.log(isbn);
   await collection.updateOne({isbn:isbn},{ $inc: { quantity: -1 } })
   
    try{
        if(doc.quantity==0){
            res.send("can't issue")
        }

        await collection1.updateOne({regno:regno},{$push:{issued:[{bookname: bname,flag: 0},],},},),(error, result) => {
            if (error) {
              console.log(error);
            } else {
              console.log("Document updated successfully:", result);
            }
          }
          await collection.updateOne({bookname:bname},{$push:{issued:[{bookname: bname,isbnn: isbn,regno:regno},],},},),(error, result) => {
            if (error) {
              console.log(error);
            } else {
              console.log("Document updated successfully:", result);
            }
          }
        
    }
    
    catch{
        res.status(500).send("Error occurred");
    }
})
app.post("/login",async(req,res)=>{
    const{regno,Password}=req.body
    try{
        const user=await collection1.find({regno:regno,password:Password})
        if(user){
            res.status(200).send("exist")
        }
        else{
            res.send("Not Exist")
        }
        
    }
    catch{
        res.status(500).send(err);
    }
})
app.post("/issuedbook",cors(),async(req,res)=>{
    try {
        const doc = await collection1.findOne({ regno:"21CSR120"});
        console.log(doc); // Check the value of doc
    
        const orders = doc ? doc.issued : null;
        console.log(orders); // Check the value of orders
    
        if (orders) {
          res.status(200).send(orders);
        } else {
          res.status(404).send("No orders found");
        }
      } catch (error) {
        console.log(error); // Log any error that occurs
        res.status(500).send("Internal server error");
      }
})
app.post("/delete",async(req,res)=>{
    const {bname}=req.body
    try{
        await collection.deleteOne({bookname:bname})
    }
    catch{

    }
})
// app.post("/managebook",cors(),async(req,res)=>{
//     try {
//         await collection.find({}).then(function(err, documents) {
//             if (err) {
//               console.error(err);
//               return;
//             }
            
//             for await(const doc of documents) {
//               const issuedArray = doc.issued;
//               console.log(issuedArray);
//               res.status(200).send(issuedArray) // Or perform any other desired operations with the issuedArray
//             }
//           });
//       } catch (error) {
//         console.log(error); // Log any error that occurs
//         res.status(500).send("Internal server error");
//       }
// })
app.listen(8000,()=>{
    console.log("part connected")
})