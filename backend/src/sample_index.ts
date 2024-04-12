import express from "express"

const app = express();

// Parse JSON bodies :: middleware
app.use(express.json());

// POST method route
app.post('/', (req, res, next) => {
    console.log(req.body.message);
    return res.send('POST request to the homepage');
});

//GET method route
app.get('/hello', (req, res, next) =>{
    res.send("Hello World!");
})

//Connections and listeners
app.listen(4000, () => {
    console.log('Server running on port 4000');
});

