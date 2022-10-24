import "./styles.css";

//EN LA LINEA 5 INGRSO PROPMPT

//let condition: any = prompt("Es culpable? Ingrese si o no");
const resultado = document.getElementById("resultado");


//De la linea 10 a la 16 ingreso por imput de html
let dato = document.getElementById("dato");
let btn = document.getElementById("btn");

//ESCUCHO EL BOTON Y ALMACENO LOS DATOS CAPTURADOS DEL INPUT PARA SER USADOS
btn.addEventListener("click", () => {
  let condition: string = String(dato.value);
  const resultado = document.getElementById("resultado");

switch (condition) {
  case "1":
    console.log("paga $1,90");
    resultado.innerText = "Ud eligio sin gratinado paga 1.90$";
    break;
  case "2":
    console.log("paga $1,00");
    resultado.innerText = "Ud eligio gratinado de KitKat paga 1.50$.";
    break;
  case "3":
    console.log("paga $1,50");
    resultado.innerText = "Ud eligio gratinado de oreo paga 1$.";
    break;
  case "4":
    console.log("paga $0,75");
    resultado.innerText = "Ud eligio gratinado de brownie paga 0.75$.";
    break;
  case "5":
    console.log("paga 0.95");
    resultado.innerText =
      "Ud eligio gratinado de chips de chocolate paga 0.95$.";
    break;
  default:
  case "":
    console.log("sin definir");
    resultado.innerText = "NO EXISTE LA OPCION INGRESADA";
    break;
}
