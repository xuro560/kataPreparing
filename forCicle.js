let i = 10;

/* for (; ; ) {
    
    console.log('Бесконечный цикл!');
} */
for (; i > 8;) {
    console.log(i);
    i--;
}

for (let i = 0; ; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}