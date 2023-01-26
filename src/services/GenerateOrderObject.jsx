

const GenerateOrderObject = ({
    nombre = "",
    email = "",
    telefono = "",
    cart = [],
    total = 0
}) => {
    return {
        buyer: {
            nombre: nombre,
            email: email,
            telefono: telefono,
        },
        item: cart
        ,
        total: total,
        createdAd: new Date().toLocaleString()

    }
}

export default GenerateOrderObject