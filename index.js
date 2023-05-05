const express =require('express')
const app=express()
//all middleware
const path = require('path')
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine','ejs')


//routes
app.get('/',(req,res)=>{
res.render('home')
})

require('./routes/routes')(app)
app.listen(3000,()=>{
    console.log('server running on 3000............')
})  