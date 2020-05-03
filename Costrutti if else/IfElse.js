function controllo(x) {
    if(x==true){
        console.log('schiacciato');
    }else{
        console.log('false');
        console.log(x);
    }
    //si può anche usare l'operatore ternario
    x=='true' ? console.log('Ora va') : console.log('non va lo stesso');
    //ci sono anche altri costrutti : switch ecc...
}