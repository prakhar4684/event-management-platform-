const express=require('express');
const cors=require('cors');
const dotenv=require('dotenv');
const mongoose=require('mongoose');
const path=require('path');

const authRoutes=require('./routes/auth');
const eventRoutes=require('./routes/events');
const bookingRoutes=require('./routes/booking');

dotenv.config();

const app=express();

app.use(cors());
app.use(express.json());


// API Routes
app.use('/api/auth',authRoutes);
app.use('/api/events',eventRoutes);
app.use('/api/booking',bookingRoutes);


// React frontend
app.use(express.static(path.join(__dirname, "../client/dist")));

app.use((req,res)=>{
    res.sendFile(
        path.join(__dirname,"../client/dist/index.html")
    );
});


// Connect MongoDB
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("Connected to MongoDB");
})
.catch((err)=>{
    console.log("Error connecting MongoDB",err);
});


const PORT=process.env.PORT || 8000;

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});