const express=require('express');
const router=express.Router();
const {registerUser,loginUser,verifyOtp}=require('../controllers/authController');

router.post('/Register',registerUser);
router.post('/login',loginUser);
router.post('/verify-otp',verifyOtp);

module.exports=router;