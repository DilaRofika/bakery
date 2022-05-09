require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
//const cors = require('cors');


//app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) =>{res.json({message: "welcome to Bakery API"})});
    const ItemRoutes = require('./routes/itemRoute');
app.use('/items', ItemRoutes);
    const BrandRoutes = require('./routes/brandRoute');
app.use('/brands', BrandRoutes);
    const UserRoutes = require('./routes/userRoute');
app.use('/users', UserRoutes);

/*const routes = require('./routes')
app.use(routes)*/

app.listen(port,()=>{
    console.log(`port : ${port}`);
});