const exp = require('constants');
const express=require('express');
const path=require('path');
const persons = require('./Members');





const app=express();
const PORT=5001;
app.set('view engine','ejs')



app.get('/',(req,res)=>{

   
   res.render('about',{persons})
   

})

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use('/persons',require('./Routers/Api/members'))
// //setting static route 
// app.use(express.static(path.join(__dirname,'public'),{extensions:'html'}))

//creating a server 
app.listen(PORT,function(){

     console.log('server is running on port, ',+PORT)

});