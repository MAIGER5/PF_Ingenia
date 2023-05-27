const {Bill,Buy,Assessment} = require('../../../database')

const facturacion = async (info,user)=>{
    console.log(info.id);
    const {email_address,name} = info.payer
    const {seller_receivable_breakdown} = info.purchase_units[0].payments.captures[0]
    const {gross_amount,paypal_fee}=seller_receivable_breakdown

    const newBill = await Bill.create({
        idBill:info.id,
        email_paypal:email_address,
        name_paypal:name.given_name,
        lastname_paypal:name.surname,
        total_billed:parseInt(gross_amount.value),
        fee_paypal:parseInt(paypal_fee.value),
        UserIdUser:user
    })

    const carrito = await Buy.findAll({
        where:{
            UserIdUser:user
        }
    })
    const courses = carrito.map((obj)=> obj.idCor)
    newBill.addCourses(courses)

    Buy.destroy({
        where:{
            UserIdUser:user
        }
    })

    for(let i=0;i<courses.length;i++){
       const asses = await Assessment.create({
            idCor:courses[i],
            UserIdUser:user
        })
    };

}
const billsControllers = async ()=>{
    const response = await Bill.findAll()
    return response
}
module.exports = {
    facturacion,
    billsControllers
};