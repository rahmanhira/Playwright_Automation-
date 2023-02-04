let i;

for(i=1; i<=10;i++){
    console.log('Value of i is :' +i);
}

let Names = [ 'Symun','Biplop','Arif','Ripon','Bishaal','Jishan','Faiek'];
let x;
for(x in Names) {       //for/in
    console.log(Names[x])
}

for(x of Names){       //for/of
    console.log(x);
}