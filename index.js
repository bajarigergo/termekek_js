import { GYUMOLCSOK } from "./adatok.js";
const vasarolt = [];

letrehozTablazat();
vasarol(GYUMOLCSOK);
torolEsemeny();

// 1. feladat
function letrehozTablazat() {
  const feladat1_ELEM = document.querySelector("#feladat_1");
  let txt = "<table>";
  for (let index = 0; index < GYUMOLCSOK.length; index++) {
    txt += `<tr>
                <td>${GYUMOLCSOK[index].nev}</td>
                <td>${GYUMOLCSOK[index].tomeg}</td>
                <td>${GYUMOLCSOK[index].ar}</td>
            </tr>`;
  }
  txt += "</table>";
  feladat1_ELEM.innerHTML = txt;
}

// 2. feladat
function osszesit() {}
let suly = 0;
let ar = 0;
for (let index = 0; index < GYUMOLCSOK.length; index++) {
  suly += GYUMOLCSOK[index].tomeg;
  ar += GYUMOLCSOK[index].ar;
}
const feladat2_ELEM = document.querySelector("#feladat_2");
feladat2_ELEM.innerHTML = `<p>A gyümölcsök súlya összesen: ${suly}g</p>
                                <p>A gyümölcsök ára összesen: ${ar}Ft</p>`;
// 3. feladat
function vasarol(zoldseg) {
  const sor_ELEM = document.querySelectorAll("tr");
  const feladat3_ELEM = document.querySelector("#feladat_3");
  for (let index = 0; index < GYUMOLCSOK.length; index++) {
    sor_ELEM[index].addEventListener("click", function () {
      console.log(index);
      if (vasarolt.indexOf(GYUMOLCSOK[index].nev) < 0) {
        vasarolt.push(GYUMOLCSOK[index].nev);
        feladat3_ELEM.innerHTML += `<p>${vasarolt[vasarolt.length - 1]}</p>`;
      }
    });
  }
}

// 4. feladat
function torolEsemeny() {
  const feladat4_ELEM = document.querySelector("#feladat_4");
  feladat4_ELEM.innerHTML += `<button>Törlés</button>`;
  const gomb_ELEM = document.querySelector("button");
  const torles_ELEM = document.querySelector("#torles");
  gomb_ELEM.addEventListener("click", function () {
    for (let index = vasarolt.length; index > 0; index--) {
      vasarolt.pop();
    }
    const feladat3_ELEM = document.querySelector("#feladat_3");
    feladat3_ELEM.innerHTML = ""
    });
}
