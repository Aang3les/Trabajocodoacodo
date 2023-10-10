let ticketsResumen = document.querySelector("#ticketsResumen");
ticketsResumen.addEventListener("click",ticketsPrice);

let ticketsBorrar = document.querySelector("#ticketsBorrar");
ticketsBorrar.addEventListener("click", clearOutput);

let ticketsQuantity = document.querySelector(".ticketsQuantity");
ticketsQuantity.addEventListener("click".clearInput);

let ticketsCategory = document.querySelector(".ticketsCategory");
ticketsCategory.addEventListener("click",descuento);

let discountStudent = document.querySelector(".estudiante");
discountStudent.addEventListener("click",updateCategory);

let discountTrainee = document.querySelector(".trainee");
discountTrainee.addEventListener("click",updateCategory);

let discountJunior = document.querySelector(".junior");
discountJunior.addEventListener("click",updateCategory);

function ticketsPrice(evento) {
    console.log(evento);
    evento.preventDefault();
    let ticketsQuantity = document.querySelector(".ticketsQuantity");
    if (Number(ticketsQuantity.value)){
        let ticketsCategory = document.querySelector(".ticketsCategory");
        let totalPayment;
        switch(ticketsCategory.value){
            case "Estudiante": {
                totalPayment = 200 * ticketsQuantity.value * 0.2;
                break;
            }
             case "Trainee": {
            totalPayment = 200 * ticketsQuantity.value * 0.5;
            break;
            }
            case "Junior":{
            totalPayment = 200 * ticketsQuantity.value * 0.85;
            break;
             }


        }
    }
     document.querySelector(".ticketsOutput").textContent = 'total a pagar: $${totalPayment}';
     let outputNode = document.querySelector(".ticketsOutput");
     let spanNode = document.createElement("span");
     spanNode.className = "ticketsBuy";
     let texNode = document.createTextNode("comprar");
     spanNode.aprrend(texNode);
     outputNode.aprrend(spanNode);
    let ticketsBuy = document.querySelector(".ticketsBuy");
    ticketsBuy.addEventListener("click",ticketsSubmit);
}  
{
        document.querySelector("ticketsQUantity").style.border = "2px solid red"
        ticketsQuantity.value = "";
        ticketsQuantity.placeholder = "ingrese una cantidad valida";
}

function borrarOutput(){
    document.querySelector(".ticketsOutput").textContent = "total a pagar";
    let form = document.querySelector(".ticketsForm");
    for(i=0;i<4;i++) {
        document.querySelector ("." + form[i].className).style.border = "1px solid var(--gray--300) ";
    }
} 
function updateCategory(evento){
    let categoria = evento.target.parentNode.className;
    switch(categoria){
        case "estudiante": {
            console.log("es estudiante");
            document.querySelector(".ticketsCategory").options.selectedIndex = 0;
            document.querySelector(".estudiante").style.backgroundColor = "#f2f2f2";
            document.querySelector(".trainee").style.backgroundColor = "transparent";
            Document.querySelector("junior").style.backgroundColor = "trasnparent";
            break;

    
        }
        case "trainee":{
            console.log("es trainee");
            document.querySelector(".ticketsCategory").options.selectedIndex = 1;
            document.querySelector(".estudiante").style.backgroundColor = "transparent";
            document.querySelector(".trainee").style.backgroundColor = "#f2f2f2";
            Document.querySelector("junior").style.backgroundColor = "trasnparent";
            break;

            
        } 
        case ("junior"):{
            console.log("es junior");
            document.querySelector(".ticketsCategory").options.selectedIndex = 2;
            document.querySelector(".estudiante").style.backgroundColor = "transparent";
            document.querySelector(".trainee").style.backgroundColor = "transparent";
            Document.querySelector("junior").style.backgroundColor = "#f2f2f2";
            break;

        }
    }
}
 











