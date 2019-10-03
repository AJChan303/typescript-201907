function factorial(a:number):number{
    var total:number = 1;
    for (let i = 1;i<=a; i++ ){
    
        total *=i;
        console.log(total , i)
    }
    return total;
}