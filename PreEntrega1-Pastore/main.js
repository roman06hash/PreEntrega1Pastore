
let usar_programa = true

while (usar_programa) {
    alert("Bienvenido a PastoreBAR! 🍻")

    let nombre_cliente = prompt("Introduzca su nombre")

    while (!isNaN(nombre_cliente)) {
        nombre_cliente = (prompt("Intente de nuevo, Introduzca su nombre porfavor"))
    }

    let edad_cliente = Number(prompt("Introduzca su edad"))

    while (isNaN(edad_cliente)) {
        edad_cliente = Number(prompt("Intente de nuevo, Introduzca su edad porfavor"))
    }

    if (edad_cliente >= 18) {
        alert("Bienvenido al bar " + nombre_cliente + "!")

        let saldo_usuario = Number(prompt("Ingrese cuanto dinero porta"))

        while (isNaN(saldo_usuario)) {
            saldo_usuario = Number(prompt("Intente de nuevo, Ingrese cuanto dinero porta porfavor"))
        }

        let ingreso = prompt("La entrada tiene un valor de $2000, desea entrar? si/no").toLowerCase()

        while (ingreso !== "si" && ingreso !== "no") {

            ingreso = prompt("Intente de nuevo, La entrada tiene un valor de $2000, desea entrar? responda si/no porfavor").toLowerCase()

        }
        if (saldo_usuario >= 2000 && ingreso == "si") {

            saldo_usuario = saldo_usuario - 2000
            alert("Entraste al bar, te quedan $" + saldo_usuario)

            let consumicion = prompt("Llegaste a la barra del bar, deseas consumir algo? si/no").toLowerCase()

            while (consumicion !== "si" && consumicion !== "no") {

                consumicion = prompt("Intente de nuevo, Llegaste a la barra del bar, deseas consumir algo? responda si/no porfavor").toLowerCase()
            }

            if (consumicion === "si") {

                let seguir_comprando = true

                while (seguir_comprando) {
                    let compra_trago = prompt("Elija su trago: \n1🍺Lata de Cerveza $2500 \n2🥤Vaso de fernet $3200 \n3🍷Copa de vino $5000 \nBebidas sin alcohol: \n4🧃Lata de Coca-cola $2000 \n5💦Botella de agua sin gas $1800 \n6❗Salir de la barra \nIntroduzca el numero del trago/bebida a consumir \nSaldo de " + nombre_cliente + ": $ 💵" + saldo_usuario)
                    switch (compra_trago) {
                        case "1":
                            if (saldo_usuario >= 2500) {
                                saldo_usuario = saldo_usuario - 2500

                                tragos("lata de cerveza", saldo_usuario)

                            } else {
                                tragos_saldo_insuf("lata de cerveza")
                            }
                            break;
                        case "2":
                            if (saldo_usuario >= 3200) {
                                saldo_usuario = saldo_usuario - 3200
                                tragos("vaso de fernet", saldo_usuario)

                            } else {
                                tragos_saldo_insuf("vaso de fernet")
                            }
                            break;
                        case "3":
                            if (saldo_usuario >= 5000) {
                                saldo_usuario = saldo_usuario - 5000
                                tragos("copa de vino", saldo_usuario)

                            } else {
                                tragos_saldo_insuf("copa de vino")
                            }
                            break;
                        case "4":
                            if (saldo_usuario >= 2000) {
                                saldo_usuario = saldo_usuario - 2000
                                tragos("lata de Coca-cola", saldo_usuario)

                            } else {
                                tragos_saldo_insuf("lata de Coca-cola")
                            }
                            break;
                        case "5":
                            if (saldo_usuario >= 1800) {
                                saldo_usuario = saldo_usuario - 1800
                                tragos("botella de agua sin gas", saldo_usuario)

                            } else {
                                tragos_saldo_insuf("botella de agau sin gas")
                            }
                            break;
                        case "6":
                            alert("Decidiste salir de la barra, disfruta del bar")
                            seguir_comprando = false
                            break;
                        default:
                            alert("No seleccionaste una opcion valida")

                    }
                }




            } else {

                if (consumicion === "no") {
                    alert("Decidiste no consumir nada. ¡Disfruta del bar sin tu bebida!💃🎶")
                }
            }

        } else {
            alert("No te alcanza para pagar la entrada/Decidiste no entrar al bar")
        }


    } else {
        alert("Solo los mayores de 18 años tienen premitido el ingreso, lo esperamos cuando sea mayor de edad")
    }

    let repetir_programa = prompt("Desea volver a utilizar el programa de PastoreBAR? si/no")

    while (repetir_programa !== "si" && repetir_programa !== "no") {
        repetir_programa = prompt("¿Quieres volver a usar el programa? responde si/no, porfavor").toLowerCase();
    }

    if (repetir_programa === "si") {
        usar_programa = true
    }

    if (repetir_programa === "no") {
        usar_programa = false
    }
}


function tragos(trago, saldo_usuario) {

    alert("Compraste un/una " + trago + ". Te quedan $" + saldo_usuario)
}

function tragos_saldo_insuf(trago) {
    alert("No tenes suficiente saldo para comprar " + trago)
}



