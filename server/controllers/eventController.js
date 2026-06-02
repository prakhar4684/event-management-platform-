const Event=require('../models/Event');

//getall events with filters
exports.getAllEvents=async(req,res)=>{
    try{
        const filters={};
        if(req.query.category){
            filters.category=req.query.category;
        }
        if(req.query.location){
            filters.location=req.query.location;
        }
        if(req.query.ticketPrice){
            filters.ticketPrice=req.query.ticketPrice;
        }
        const events=await Event.find(filters);
        res.json(events);
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
}
//get event by id
exports.getEventById=async(req,res)=>{
    try{
        
        const event=await Event.findById(req.params.id);
        if(!event){
            return res.status(404).json({message:'Event not found'});
        }   
        res.json(event)
    }catch(error){
        res.status(500).json({error:error.message});
    }
}

//create event
exports.createEvent = async (req, res) => {
    try {
        const {
            title,
            description,
            date,
            location,
            category,
            totalSeats,
            ticketPrice,
            image
        } = req.body;

        const event = await Event.create({
            title,
            description,
            date,
            location,
            category,
            totalSeats,
            availableSeats: totalSeats,
            ticketPrice,
            image,
            createdBy: req.user?._id
        });

        res.status(201).json(event);

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: error.message
        });
    }
};
//update event
exports.updateEvent=async(req,res)=>{
    const {name,description,date,location,category,ticketPrice}=req.body;
    try{
        const event=await Event.findByIdAndUpdate(req.params.id,{
            name,
            description,
            date,
            location,
            category,
            ticketPrice
        },{new:true});
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
    }
    catch(error){
        res.status(500).json({error:error.message});    
    }
}

//delete event
exports.deleteEvent=async(req,res)=>{
    try{
        const event=await Event.findByIdAndDelete(req.params.id);  
        if(!event){
            return res.status(404).json({message:'Event not found'});
        }   
        res.json({message:'Event deleted successfully'});
    }
        catch(error){
            res.status(500).json({error:error.message});    
        }   
};