const express=require('express');

const route=express.Router();

const deleteItem=require('../../controllers/product-controller')

route.get('/admin/delete-item', deleteItem.deleteItem);

module.exports=route;