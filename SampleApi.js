const express=require('express');
const cops = require('cors');
const PORT = 7001;
const app = express();
app.use(express.json());
app.use(cops());
const data = [{
    Name : 'Praveen',
    Age : '25'
}]
app.get('/app/data' , (req , res)=>{
    res.json(data);
})
const PORT = process.env.PORT || 7001;
app.listen(PORT,()=>{
    console.log('Successfully running on the port');
})
