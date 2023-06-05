const express = require('express');
const morgan = require ('morgan');
const mongoose = require ('mongoose');
const blogRoutes = require('./routes/blogRoutes');
const router = require('./routes/blogRoutes');



//express app
const app = express()

//view engine 
app.set('view engine', 'ejs')

//middleware & static files
app.use(express.static('Views/Public'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

//mongoose & mongo routes

app.get('/add-blog', (req, res) =>{
    const blog = new Blog ({
        title: 'new blog',
        snippet: 'about my blog',
        body: 'more about my new blog'

    });
    
    blog.save()
    .then((result) =>{
        res.send(result)
    })
    .catch((err) =>{
        console.log(err);
    })

})


//connect to mongodb
const dbURI ='mongodb+srv://blogposts:38021544@cluster0.pwcbxwc.mongodb.net/'
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));


app.get('/', (req, res) =>{
    res.redirect('/blogs')
});

app.get('/about', (req, res) =>{
    res.render('about', {title: 'About'});
});

//blog routes
app.use('/blogs', blogRoutes)

//404 page
app.use((req, res)=>{
    res.status(404).render('404',{title: '404'});
});







