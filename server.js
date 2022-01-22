const express = require('express')
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')
const app = express()

mongoose.connect('mongodb://localhost/blog',{useNewUrlParser: true,useUnifiedTopology: true})

app.set('view engine','ejs')

app.use(express.urlencoded({extended: false}))

app.get('/',(req,res)=>{
    const articles =[{
        title: 'text Article',
        createdAt: new Date(),
        description: 'Text description'
    },
    {
        title: 'text Article 2',
        createdAt: new Date(),
        description: 'Text description 2'
    }]
    res.render('articles/views',{articles: articles})})

    app.use('/articles', articleRouter)

app.listen(5000)