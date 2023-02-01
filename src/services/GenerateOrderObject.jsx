

const GenerateOrderObject = ({
    nombre = "",
    apellido = "",
    elEmail = "",
    phone = "",
    cart = [],
    total = 0
}) => {
    return {
        buyer: {
            nombre: nombre,
            apellido: apellido,
            email: elEmail,
            phone: phone,
        },
        item: cart
        ,
        total: total,
        createdAd: new Date().toLocaleString()
    }
}

export default GenerateOrderObject