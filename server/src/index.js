import app from './app.js'
import connectDB from './db/index.js';

const port = process.env.PORT || 3000;

connectDB().then(()=>{
    app.get('/', (req, res, err) => {
        res.send("at root route")
    })
    
    app.listen(port, ()=>{
        console.log(`server started running on port : ${port}`)
    })    
})
