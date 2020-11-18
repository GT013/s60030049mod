var mongoose=require('./config/mongoose');
var express=require('./config/express');
var cors=require('cors');
var modbusRTU=require('./config/modbus');
var db=mongoose();
var modbusModel=db.model('modbus');
var app=express();
app.use(cors());
app.listen(3049);

setInterval(()=>{
    modbusRTU.readInputRegisters(1,2)
    .then((data)=>{
        var allData=data.data;
        var model={
            temperature: allData[0]/10,
            humidity: allData[1]/10,
            datetime: Date.now()
        }
        modbusModel.insertMany(model,(err,docs)=>{
            if(err)console.log(err);
        });
    }).catch((e)=>{
        console.log(e.message);
    })
},60000);

module.exports=app;

console.log('Server running at http://localhost:3049');