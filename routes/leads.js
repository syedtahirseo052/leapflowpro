const express=require('express'),mongoose=require('mongoose'),router=express.Router(),auth=require('../middleware/auth');
const Lead=mongoose.model('Lead',new mongoose.Schema({userId:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},name:String,phone:String,website:String,email:String,rating:Number,score:Number,whatsapp:String,city:String,country:String,status:{type:String,default:'new'},notes:{type:String,default:''},savedAt:{type:Date,default:Date.now}}));
router.get('/',auth,async(req,res)=>{try{res.json(await Lead.find({userId:req.user.id}).sort({savedAt:-1}));}catch(err){res.status(500).json({error:err.message});}});
router.post('/',auth,async(req,res)=>{try{res.status(201).json(await Lead.create({...req.body,userId:req.user.id}));}catch(err){res.status(500).json({error:err.message});}});
router.delete('/:id',auth,async(req,res)=>{try{await Lead.findOneAndDelete({_id:req.params.id,userId:req.user.id});res.json({success:true});}catch(err){res.status(500).json({error:err.message});}});
module.exports=router;
