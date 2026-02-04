const router = require('express').Router()
const MenuItem = require('../models/MenuItem')
const Reservation = require('../models/Reservation')
const Order = require('../models/Order')

// MENU
router.get('/menu', async (req,res)=>{
  res.json(await MenuItem.find())
})

router.post('/menu', async (req,res)=>{
  const item = new MenuItem(req.body)
  await item.save()
  res.json(item)
})

// RESERVATION
router.post('/reservation', async (req,res)=>{
  const r = new Reservation(req.body)
  await r.save()
  res.json({message:"Reservation saved"})
})

// ORDER
router.post('/order', async (req,res)=>{
  const o = new Order(req.body)
  await o.save()
  res.json({message:"Order saved"})
})

module.exports = router
