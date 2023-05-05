const {order_list}=require('../controller/order_list')
const {product_details}=require('../controller/product_details')
const {product_list}=require('../controller/product_list')
const {profile}=require('../controller/profile')




module.exports=(app)=>{
    app.get('/:username/order-list',order_list)
    app.get('/:username/',profile)
    app.get('/:username/product-list',product_list)
    app.get('/:username/product_details',product_details)
    app.get('/:username/cart',product_details)
}