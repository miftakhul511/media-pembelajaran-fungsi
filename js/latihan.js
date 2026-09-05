import {
tampilkanMenu
}
from "./menu.js";


export function tampilkanLatihan(){


const app =
document.getElementById("app");



let nomorSoal = 0;

let skor = 0;



const soal = [



{


pertanyaan:

`
Diketahui:

Domain = {1,2,3}

Kodomain = {2,4,6,8,10}

Jika f(x)=2x,

maka range fungsi adalah...
`,



pilihan:[

"{1,2,3}",

"{2,4,6}",

"{2,4,6,8,10}",

"{4,6,8}"

],


jawaban:1,


pembahasan:

`
f(1)=2

f(2)=4

f(3)=6


Jadi range:

{2,4,6}
`

},




{


pertanyaan:

`
Diketahui tabel:

x : 1  2  3

f(x):5 7 9


Rumus fungsi yang sesuai adalah...
`,


pilihan:[

"f(x)=2x+3",

"f(x)=3x+2",

"f(x)=x+4",

"f(x)=2x+5"

],


jawaban:0,


pembahasan:

`
Coba:

x=1
2(1)+3=5
Jadi:

f(x)=2x+3
`

},




{


pertanyaan:

`
Diketahui:

f(x)=x²

Nilai:

f(-3)

adalah...
`,


pilihan:[

"-9",

"6",

"9",

"-6"

],


jawaban:2,


pembahasan:

`
f(-3)=(-3)²

=9

Bilangan negatif jika dikuadratkan
menjadi positif.
`

},


{


pertanyaan:

`
Diketahui:

f(x)=2x+3

g(x)=x²

Tentukan:

(g ∘ f)(2)
`,


pilihan:[

"25",

"36",

"49",

"64"

],


jawaban:2,


pembahasan:

`
Langkah 1:

f(2)=2(2)+3

=7


Langkah 2:

g(7)=7²

=49
`

},





{


pertanyaan:

`
Sebuah pabrik kertas memiliki 2 mesin yang berfungsi sebagai berikut:
mesin pertama
f(x)=2x+5

mesin kedua
g(x)=3x-4
Jika bahan awal:
x=10
Maka produk akhir adalah...
`,


pilihan:[

"65",

"71",

"75",

"81"

],


jawaban:1,


pembahasan:

`
Mesin 1:

f(10)=2(10)+5

=25


Mesin 2:

g(25)=3(25)-4

=71
`

}



];





function tampilkanSoal(){



app.innerHTML=`

<div class="materi-container">


<h2>
Latihan Fungsi
</h2>



<h3>

Soal ${nomorSoal+1} / ${soal.length}

</h3>



<div class="soal-box">

${soal[nomorSoal].pertanyaan}


</div>




<div class="pilihan">

${

soal[nomorSoal].pilihan.map(

(p,index)=>

`

<button

class="pilihan-button"

data-index="${index}">

${p}

</button>

`

).join("")

}


</div>




<div id="hasilJawaban"></div>



<button

class="menu-button"

id="cekJawaban">

Cek Jawaban

</button>



<button

class="menu-button"

id="lanjutSoal"

style="display:none">

Soal Berikutnya

</button>



</div>

`;



let pilihanUser = null;



document
.querySelectorAll(".pilihan-button")
.forEach(button=>{


button.onclick=()=>{


document
.querySelectorAll(".pilihan-button")
.forEach(b=>{

b.style.background="";

});


button.style.background="#90caf9";


pilihanUser =
Number(button.dataset.index);



};


});





document
.getElementById("cekJawaban")
.onclick=()=>{


if(pilihanUser===null){

alert("Pilih jawaban terlebih dahulu");

return;

}



let hasil =
document.getElementById("hasilJawaban");



if(
pilihanUser===
soal[nomorSoal].jawaban
){


skor +=20;



hasil.innerHTML=`

<div class="benar">

🎉 Jawaban Benar

<br><br>

Pembahasan:

<br>

${soal[nomorSoal].pembahasan}

</div>

`;



}

else{


hasil.innerHTML=`

<div class="salah">


❌ Jawaban Belum Tepat


<br><br>


Pembahasan:

<br>

${soal[nomorSoal].pembahasan}


</div>

`;

}



document
.getElementById("lanjutSoal")
.style.display="inline-block";



};





document
.getElementById("lanjutSoal")
.onclick=()=>{


nomorSoal++;



if(nomorSoal < soal.length){


tampilkanSoal();


}

else{


tampilkanHasil();


}


};



}


function tampilkanHasil(){



app.innerHTML=`

<div class="materi-container">


<h2>

Hasil Latihan

</h2>


<h1>

Skor Anda:

${skor}

</h1>



<p>

${

skor>=80

?

"🎉 Sangat Baik"

:

"👍 Terus Belajar"

}

</p>




<button

class="menu-button"

id="kembaliMenu">

Kembali Menu

</button>



</div>

`;



document
.getElementById("kembaliMenu")
.onclick=()=>{


tampilkanMenu();


};


}



tampilkanSoal();


}