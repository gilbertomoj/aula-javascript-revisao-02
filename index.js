// Atividade 1
function tipoCarro(tipo){
    if(tipo == "hatch"){
        return "Compra efetuada com sucesso"
    }else if(tipo=="sedans"){
        return "Tem certeza que não prefere esse modelo ?"
    }else if(tipo=="motocicletas"){
        return "Tem certeza que não prefere esse modelo ?"
    }else if(tipo=="caminhonetes"){
        return "Tem certeza que não prefere esse modelo ?"
    }else{
        return "Não trabalhamos com esse tipo de automóvel aqui"
    }
}

//Atividade 2 
function triangulo(a, b, c){
    if(a == b && b == c){
        return "Triangulo equilátero"
    }else if(a != b && b != c){
        return "Triangulo escaleno"
    }else{
        return "Triangulo isósceles"
    }
}

// Atividade 3
function num(n){
    if(n >= 0 ){
        return ("Número positivo")
    }else{
        return ("Número negativo")
    }
}

