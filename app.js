function pregunta1() {
    const formu = document.getElementById('form1');
            formu.addEventListener('submit',(e)=>{
            e.preventDefault();
            let numero=document.querySelector('#inputPreg1').value;
            console.log(numero);
            var palabra="";
            var aux="";
            for (let index = 1; index <= numero; index++) {
                if (numero==1) {
                    aux+=index;
                }
                else{
                    aux+=index+"  ";}
                    
                    palabra+=aux+"<br>";
            }
            document.getElementById("Respuesta1").innerHTML = palabra;  
        })
}
function pregunta2() {
    var numero=document.getElementById('inputPreg2').value;
    var lista2=[]
    lista2[0]=1
    var a;
    console.log(lista2)

    for (let index = 0; index < numero-1; index++) {
        for (let index = 0; index <lista2; index++) {
            // const element = array[index];
            if (index==0){a=0;}
            else{
                a=lista2[index-1]
            }
            lista2[index]=lista2[index]+a;
            lista2.push(1)
    
            // console.log(index)
            console.log(lista2)
            // if(index==numero-1){break;}
        }
    }
    // console.log(lista2)
}

var lista3=[];
var lista3Pri=[];
function pregunta3() {
    var numeros=document.getElementById('inputPreg3').value;

    if(numeros!="")
    {

        console.log("lllaaamando")

        if(lista3.length==0){document.getElementById("PreRespuesta3").innerHTML="";
            document.getElementById("Respuesta3").innerHTML = "";}

        if (numeros==-1) {
            for (let index = 0; index < lista3.length; index++) {
                // const element = array[index];
                var n=lista3[index]
                if (esPrimo(n)!=false) {
                    lista3Pri.push(n);   
                }
            }
            console.log(lista3Pri);
            document.getElementById("Respuesta3").innerHTML = lista3Pri;
            
            lista3=[]
            lista3Pri=[]
            console.log(lista3+"aaaaaaaaaaaaaaaaaaaa")

        }else{lista3.push(numeros)
            document.getElementById("PreRespuesta3").innerHTML += "["+numeros+"] ";}
        //numeros.reset();
        console.log(lista3)
        document.getElementById('inputPreg3').value='';
    }
}

function esPrimo(numero) {
    if (numero <= 1) {return false;}
    for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {return false;}
    }
}

function pregunta4() {
    
}