const jwt=require('jsonwebtoken');
const User=require('../models/User');``

//user authentication middleware
const protect = async (req, res, next) => {
    try {
        const authHeader =
            req.headers.authorization ||
            req.headers.Authorization;

        if (!authHeader) {
            return res.status(401).json({
                message: 'Not authorized, no token'
            });
        }

        const token = authHeader.split(' ')[1];

        if (!token) {
            return res.status(401).json({
                message: 'Not authorized, token missing'
            });
        }

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        req.user = await User.findById(decoded.id)
            .select('-password');

        if (!req.user) {
            return res.status(401).json({
                message: 'User not found'
            });
        }

        next();

    } catch (err) {
        return res.status(401).json({
            message: 'Not authorized, token failed'
        });
    }
};


const admin=(req,res,next)=>{

    console.log("USER AFTER PROTECT:", req.user);
    console.log("ROLE:", req.user?.role);

    if(req.user && req.user.role==='admin'){
        next();
    }
    else{
        return res.status(403).json({
            message:'forbidden, admin only access'
        });
    }
}



exports.protect=protect;
exports.admin=admin;