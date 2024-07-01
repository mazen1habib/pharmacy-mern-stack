const express = require('express')
const app = express()
const productroutes =require('./routes/productRoutes.js')
const orderroutes =require('./routes/orderRoutes.js')
const userroutes = require('./routes/userRoutes.js')
const adminroutes = require('./routes/adminRoutes.js')
const copounroutes = require('./routes/copounRoutes.js')
const ag = require('./controller/agregationController.js')
const path = require('node:path')
const cors = require('cors')
const mongoose = require('mongoose')
app.listen(5000,()=>{
    console.log('server Started');

})
mongoose.connect('mongodb://localhost:27017/pharmacy')
.then(()=>{ console.log('DB Connected')}).catch((err)=>{console.log(err);})
app.use(cors())
app.use(express.json())
  app.use(express.static(path.join(__dirname , '/')))

 app.use('/api',orderroutes)
 app.use('/api',userroutes)
 app.use('/api',productroutes)
 app.use('/api',adminroutes)
 app.use('/api',copounroutes)
 app.get('/aggregation',ag.aggregation)
