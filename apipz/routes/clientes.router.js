const express = require("express")
const clienteServices = require("../services/clientes.service")
const validatorHandler = require('../middlewares/validator.handler')
const {getDataClientSchema,createSchemaCliente}= require("../schemas/clientes.schema")
const router = express.Router()

const clientes = new clienteServices();

router.get('/',async(req,res,next)=>{


    try {
      const clientesList =await clientes.find();
      res.json(clientesList)
    } catch (error) {
      next(error)

    }
})

router.get('/:clienteId'
,validatorHandler(getDataClientSchema,'params')
    ,async(req,res,next)=>{
        try {
            const {clienteId} = req.params
            const clientesList = await clientes.findOne(clienteId);
            res.json(clientesList)

        } catch (error) {
            next(error)
        }





})

router.post("/",
validatorHandler(createSchemaCliente,'body'),
async(req,res)=> {

    const body = req.body;
    const newCliente = await clientes.create(body)
    res.status(201).json(newCliente)

})
router.patch("/:clienteId",
validatorHandler(getDataClientSchema,'params'),
validatorHandler(createSchemaCliente,'body'),
async(req,res,next)=>{
    try {
        const {clienteId} = req.params;
        const body = req.body;
        const clientesList = await clientes.update(clienteId,body)
        res.json(clientesList)

    } catch (error) {
        next(error)
    }
})

router.delete("/:clienteId",
validatorHandler(getDataClientSchema,'params'),
async(req,res)=>{
    const {clienteId} = req.params;
    const clientesList = await clientes.delete(clienteId)
    res.json(clientesList)
})

module.exports = router
