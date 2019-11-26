import { Router } from 'express';
var UsersModel = require('../models/users.js');
var router = Router();

/* GET users listing. */
router.get('/', async (req, res, next)=> {
  try{
    const users = await users.find()
    res.json(users)
  }catch(err){
    res.status(500).json({message:err.message})
  }
});

router.get('/:id', (req,res)=>{
  res.send('');
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

router.patch('/:id', (req,res)=>{

});

router.delete('/:id', (req,res)=>{
  
});

export default router;
