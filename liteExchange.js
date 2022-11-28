// Inicilizar variable
let saldo = 0;
let cliente = prompt("Bienvenido a LiteExchange. \nIngrese su nombre:").toUpperCase();
let fondeoInicial = Number(prompt(`"Hola ${cliente},\nTransfiera un saldo inicial para comenzar a operar en LiteExchage."`));


//Moneda
let precioCoin = 10;
const nameCoin = 'CODERCOIN';
let cantidadCoin = 0;

const fee = 0.998


//Inicio Usuario
do {
    if (saldo < fondeoInicial) {
        alert(`Gracias ${cliente}, su deposito de $${fondeoInicial} han efectuado con exitosamente.`);
        saldo = + fondeoInicial;
        menuPrincipal();
        break

    } else {
        alert("Debes tranfrerir saldo para comenzar a operar");
        fondeoInicial = Number(prompt(`"Hola ${cliente},\nDebe realizar un depósito inicial."`));
        if (fondeoInicial > saldo) {
            alert(`Gracias por depositar. Su saldo es de $${fondeoInicial} Ahora puede comenzar a operar.`);
            saldo = + fondeoInicial;
            menuPrincipal();
            break
        }
    }

} while (saldo >= fondeoInicial);


//Menú principal

function menuPrincipal() {

    let opcion = Number(prompt(`User: ${cliente}
    Saldo $${saldo}  //  Cantidad ${nameCoin}: ${cantidadCoin}
    Precio ${nameCoin} es de $${precioCoin}\n    
    1. Comprar | 2. Vender | 3. Cerrar Sesión\n
    (escriba el número de la opción)`));

    switch (opcion) {
        case 1:
            comprar();
            break;
        case 2:
            vender();
            break;
        case 3:
            alert("Gracias por ultilizar el servicio. Vuelva pronto")
            break;
        default:
            alert(`"Ingrese un valor válido"`);
            break;
    }
}

function comprar() {

    let importeCompra = Number(prompt(`"${cliente},\ncuanto saldo va a utilizar para la compra de ${nameCoin}?"`));

    if (importeCompra <= saldo) {
        alert(`"Compra exitosa!\nUd compró ${(importeCompra / precioCoin)} ${nameCoin}\nFee: $${(importeCompra * fee)/100}`);
        saldo = (saldo - importeCompra) * fee;
        cantidadCoin = cantidadCoin + (importeCompra / precioCoin);
        alert(`"Su saldo actual es de $${saldo}`);
        menuPrincipal();
    } else {
        alert("No posee saldo suficiente");
        menuPrincipal();
    }
}

function vender() {
    let cantidadVenta = Number(prompt(`"${cliente},\ncuantos ${nameCoin} va a vender?"`));

    if (cantidadVenta <= cantidadCoin) {
        alert(`Venta exitosa!\nUd vendió ${cantidadVenta} ${nameCoin}\nFee: $${(cantidadVenta * precioCoin * fee)/100}`);
        saldo = (saldo + (precioCoin * cantidadVenta)) * fee;
        cantidadCoin = cantidadCoin - cantidadVenta;

        alert(`"Su saldo actual es de $${saldo}`);

        menuPrincipal();
    } else {
        alert(`"No posee tantos ${nameCoin}"`);
        menuPrincipal();
    }
}