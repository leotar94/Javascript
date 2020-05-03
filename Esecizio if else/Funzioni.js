function controllo() {
    var x = document.getElementById("numero").value;
    console.log(x);
    if(x==0){
        console.log('hai inserito uno zero');
    }else{
        x>0 ? console.log('numero positivo') : console.log('numero negativo');
        x%2 ? console.log('ed è anche dispari') : console.log('ed è anche pari');
    }
//nota per operatore ternario condizione ? vero : falso
//allora perchè la logica è al contrario?
//semplicemente vero ->1 falso->0
//quindi x%2 restituisce 0 se pari(falso) 1 se dispari(vero)
}