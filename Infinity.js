let x = 10;
let y = 20;

Infinity > 100500; //Infinity всгда больше или меньше любого числа.
Infinity === Infinity //true

if (Infinity > Infinity || Infinity < Infinity) {
    return true; //false
}

Infinity + Infinity //Infinity
-Infinity - Infinity //-Infinity

Infinity - Infinity; //NaN Infinity не подчиняется расчётам
-Infinity + Infinity; //NaN
Infinity / Infinity; //NaN

Infinity ** 10; //Infinity
Infinity ** -Infinity; //0
(-Infinity) ** Infinity; //Infinity
10 / 0; //Infinity

