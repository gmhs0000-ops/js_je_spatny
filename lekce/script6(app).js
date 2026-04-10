let counter = 0;

while (counter < 100) {
    console.log(counter)
    counter++;
}

let i = 1;
while (i <= 100) {
    let message = i;
    if(i===67) {
        message = "67 je super číslo"
        console.log(message)
    }
    console.log(i);
    i++;
}

    for (let a = 0; a <100; a++) {
    console.log(a);
}

for (let b =0; b<100; b++) {
    if (b===5) break;
    console.log(b);
} 

for (let c =0; c<100; c++) {
    if (c===5) continue;
    console.log(c);
} 
