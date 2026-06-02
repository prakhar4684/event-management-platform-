const mongoose = require("mongoose");
const dotenv = require("dotenv");

const User = require("./models/User");
const Event = require("./models/Event");
const Booking = require("./models/Bookings");

dotenv.config();


const createRequests = async()=>{

try{

await mongoose.connect(process.env.MONGO_URL);

console.log("Mongo connected");


// jis admin ne events banaye

const admin = await User.findOne({
    email:"admin@eventora.com"
});


if(!admin){
    console.log("Admin not found");
    process.exit();
}


// sirf admin ke events

const events = await Event.find({
    createdBy: admin._id
});


console.log(
`${events.length} admin events found`
);


if(events.length===0){
    process.exit();
}


// booking karne wale users

const users = await User.find({
    role:"user"
});


console.log(
`${users.length} users found`
);



let bookings=[];


// har user admin ke har event par request marega

for(const event of events){


    for(const user of users){


        bookings.push({

            userId:user._id,

            eventId:event._id,

            status:"pending",

            paymentStatus:"non_paid",

            amount:event.ticketPrice || 0

        });


    }


}


await Booking.insertMany(bookings);


console.log(
`${bookings.length} booking requests created`
);


process.exit();


}
catch(error){

console.log(error);

process.exit(1);

}

}


createRequests();
