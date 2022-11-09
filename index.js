const express = require('express')
const app = express()
const mongoose = require('mongoose')
const mongoUrl = 'mongodb://localhost:27017/tokogitar'

mongoose.connect(mongoUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log ('Berhasil Connect Ke Database')
}).catch((e)=>{
    console.log(e)
    console.log ('Gagal Connect Ke Database')
})

app.get('/test',(req,res)=>{
    const nama = 'anisa' 
    let prodi = ''
    if (nama==='anisa'){
        prodi = 'sistem informasi'
    }else{
        prodi = 'informatika'
    }

    const mahasiswa = {
        nama:'anisa',
        npm:20411016,
        prodi:'sistem informasi',
        hobi:'tidur',
        keluarga:{
            adik:1
        }
    }

    res.json({
        test:'Berhasil',
        nama:nama,
        prodi:prodi,
        coba:mahasiswa.keluarga.adik,
        biodata:mahasiswa
        
    })
})

app.get ('/mahasiswa/:npm',(req,res)=>{
    res.json({
        npm:req.params.npm
    })
})

app.listen(5000,()=>{
    console.log ('Berhasil Jalan')
})