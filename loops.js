// For Loops

for(let i=5; i<51; i=i+5){
    console.log(i)
}


for(i=2; i<21; i=i+2){
    console.log(i);
}

for(i=3; i<31; i=i+3){
    console.log(i);
}

for(i=4; i<41; i=i+4){
    console.log(i);
}

for(i=6; i<61; i=i+6){
    console.log(i);
}

for (let i=0; i<10; i++){
    if(i%2==0)
        console.log(i)
}



// While Loops

let i = 1;
while(i<=5){
    console.log(i)
    i++;

}


let i = 10;
while(i>=0){
    console.log(i)
    i--;
}



// Do while Loop

let i = 20;
do {
    console.log("Amit Gupta");
    i++;
}while(1 <= 10);



// For In Loops

let animal = {
    name : "zebra",
    leg : 4
};
for (let key in animal){

}
console.log(animal["leg"])
