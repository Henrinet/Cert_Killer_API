import { Router } from 'express';
var UsersModel = require('../models/users.js');
var router = Router();

/* GET users listing. */
router.get('/', async (req, res, next)=> {
  try{
    const users = await UsersModel.find()
    res.json(users)
  }catch(err){
    res.status(500).json({message:err.message})
  }
});

router.get('/:id', getUsers, (req,res)=>{
  res.send(res.users);
});

router.post('/', async (req,res)=>{
  const aaa = new UsersModel({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });

  try{
    const newUser = await aaa.save()
    res.status(201).json(newUser)
  }catch(err){
    res.status(400).json({ message: err.message })
  }

});

router.patch('/:id', getUsers, async (req,res)=>{
  if(req.body.name!=null){
    const tempName = res.users.name
    res.users.name=req.body.name
    res.json({message: 'Name: '+tempName+' is changed to '+res.users.name})
  }
  if(req.body.email!=null){
    const tempEmail = res.users.email
    res.users.email=req.body.email
    res.json({message: 'Email: '+tempEmail+' is changed to '+res.users.email})
  }
  if(req.body.password!=null){
    const tempPassword = res.users.password
    res.users.password=req.body.password
    res.json({message: 'Password: '+tempPassword+' is changed to '+res.users.password})
  }
  try{
    const updatedUsers = await res.users.save()    
    res.json(updatedUsers)
  }catch(err){res.status(400).json({message: err.message})}
});

router.delete('/:id', getUsers, async (req,res)=>{
  try{
    var userName = res.users.name;
    await res.users.remove()
    res.json({message: 'The user '+ userName + ' is deleted!'})
  }catch(err){
    res.status(500).json({message: err.message})
  }
});

async function getUsers(req, res, next){
  try{
    var users = await UsersModel.findById(req.params.id)
    if(users==null){return res.status(404).json({message: "no such user"})}
  }catch(err){
    return res.status(500).json({message: err.message})
  }
  res.users = users
  next()
}

export default router;
