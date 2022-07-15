console.log('----------1---------');
/*1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)*/

let a = 10;
let b = 8;
function palyginimas(a,b){
if(a > b && a != b){
    return a + ' a - didesnis skaicius';
    }else if (b > a && b != a) {
    return b + ' b - didesnins skaicius';
    }else{
    return 'a = b'
    }
}
const palyginus = palyginimas(a,b);

console.log(palyginus);

console.log('----------2---------');
//2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)//

for(let i = 1; i < 11; i++){
    console.log(i);
} 

console.log('----------3---------');
//3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)
for(let i = 0; i < 11; i+=2){
    console.log(i);
}

console.log('----------4---------');
//4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const mas = []

for(let i = 0; i < 5; i++){
    mas.push(rand(1, 10));
}
console.log(mas);

//panaudojau is praktiniu uzduociu 

console.log('----------5---------');


//5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)

let c = 0;
while(c !== 5){
    c = rand(1, 10);
    console.log(c);
}

console.log('----------6---------');
//6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, 
//NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)

let maxvalue = 0;
const masyvas = [];
for (let i = 0; i < rand(20, 30); i++){
    masyvas.push(rand(10, 30));
    if(masyvas[i] > maxvalue){
        maxvalue = masyvas[i];
    }
}
console.log(masyvas);
console.log(maxvalue);

console.log('----------7---------');
//7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)

const nmas = [];
let raides = ['A', 'B', 'C', 'D'];
for(let i = 0; i < 100; i++){
    nmas.push(raides[rand(0, 3)]);
}
let kiekis1 = 0;
let kiekis2 = 0;
let kiekis3 = 0;
let kiekis4 = 0;
for (let i = 0; i < nmas.length; i++){
    if (nmas[i] === raides[0]){
        kiekis1 += 1;
    }else if (nmas[i] === raides[1]){
        kiekis2 += 1;
    }else if (nmas[i] === raides[2]){
        kiekis3 += 1;
    }else if (nmas[i] === raides[3]){
        kiekis4 += 1;
    }
}

console.log(nmas);
console.log(kiekis1, raides[0]);
console.log(kiekis2, raides[1]);
console.log(kiekis3, raides[2]);
console.log(kiekis4, raides[3]);

console.log('----------8---------');
/*8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)*/






/*9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)
10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - 
"(XXX) XXX-XXXX". (10 taškų)*/