import {
tampilkanTeoriKomposisi
}
from "./teoriKomposisi.js";


import {
tampilkanPabrik
}
from "./pabrik.js";



export function tampilkanInquiryKomposisi(){


const app =
document.getElementById("app");


let tahap = 1;



function tampilkanTahap(){



// ======================
// TAHAP 1
// ======================


if(tahap===1){


app.innerHTML=`


<div class="materi-container">


<h2>
🔎 Pemantik Fungsi Komposisi
</h2>



<p class="materi-text">

Perhatikan proses produksi kertas berikut.

Apakah kayu langsung menjadi kertas?

</p>




<div class="alur-pabrik-inquiry">


🌲 Pohon


<br>

↓

<br>


⚙ Mesin Pulp


<br>

↓

<br>


🟤 Pulp


<br>

↓

<br>


⚙ Mesin Kertas


<br>

↓

<br>


📄 Kertas


</div>




<h3>
Pertanyaan 1
</h3>


<p>

Apakah produk akhir dihasilkan
melalui satu proses saja?

</p>




<button 
class="pilihan-inquiry"
data-jawaban="salah">

Ya, langsung menjadi kertas

</button>



<button 
class="pilihan-inquiry"
data-jawaban="benar">

Tidak, melalui beberapa proses

</button>



<button 
class="pilihan-inquiry"
data-jawaban="salah">

Tidak memiliki hubungan

</button>



<div id="feedbackInquiry"></div>



</div>


`;


buatPilihan();


}





// ======================
// TAHAP 2
// ======================


if(tahap===2){



app.innerHTML=`


<div class="materi-container">


<h2>
Mengamati Dua Mesin
</h2>



<p>

Misalkan sebuah pabrik memiliki:

</p>



<div class="mesin-fungsi">


<div>

<h3>
Mesin 1
</h3>


⚙️

<br>

f(x)=2x+5


</div>



<div>

↓

</div>



<div>

<h3>
Mesin 2
</h3>


⚙️

<br>

g(x)=3x-4


</div>



</div>




<p>

Bahan awal yang masuk:

</p>



<h2>

x=10

</h2>




<h3>
Pertanyaan 2
</h3>


<p>

Setelah melewati mesin pertama,
nilai yang masuk ke mesin kedua adalah...

</p>



<button 
class="pilihan-inquiry"
data-jawaban="salah">

10

</button>


<button 
class="pilihan-inquiry"
data-jawaban="benar">

25

</button>


<button 
class="pilihan-inquiry"
data-jawaban="salah">

30

</button>



<div id="feedbackInquiry"></div>



</div>


`;


buatPilihan();


}





// ======================
// TAHAP 3
// ======================


if(tahap===3){


app.innerHTML=`


<div class="materi-container">


<h2>
Menemukan Ide Komposisi Fungsi
</h2>



<p class="materi-text">

Perhatikan perjalanan bahan:

</p>



<div class="alur-konsep">


x

↓

f(x)

↓

g(f(x))


</div>




<p class="materi-text">

Hasil dari fungsi pertama menjadi
masukan untuk fungsi berikutnya.

</p>



<h3>

Bagaimana menuliskan proses tersebut?

</h3>



<button
class="pilihan-inquiry"
data-jawaban="benar">


(g ∘ f)(x)

</button>



<button
class="pilihan-inquiry"
data-jawaban="salah">


(f ∘ g)(x)

</button>



<button
class="pilihan-inquiry"
data-jawaban="salah">


f(x)+g(x)

</button>




<div id="feedbackInquiry"></div>



</div>


`;


buatPilihan();



}





// ======================
// TAHAP 4
// ======================


if(tahap===4){



app.innerHTML=`


<div class="materi-container">


<h2>
Kesimpulan Inquiry
</h2>



<p class="materi-text">

Dari proses dua mesin kita menemukan:

</p>




<div class="alur-konsep">


Input

↓

Fungsi f

↓

Hasil f(x)

↓

Fungsi g

↓

g(f(x))


</div>



<h2>

Inilah Fungsi Komposisi

</h2>



<p class="materi-text">


Fungsi komposisi adalah penggabungan
dua fungsi atau lebih secara berurutan.


</p>




<button
class="menu-button"
id="teoriKomposisi">

Pelajari Rumus Komposisi

</button>



<button
class="menu-button"
id="simulasiPabrik">

Coba Simulasi Pabrik

</button>




</div>


`;



document
.getElementById("teoriKomposisi")
.onclick=()=>{


tampilkanTeoriKomposisi();


};



document
.getElementById("simulasiPabrik")
.onclick=()=>{


tampilkanPabrik();


};



}



}





function buatPilihan(){



document
.querySelectorAll(".pilihan-inquiry")
.forEach(button=>{


button.onclick=()=>{


let feedback =
document.getElementById("feedbackInquiry");



if(button.dataset.jawaban==="benar"){



feedback.innerHTML=`

<div class="benar">


✅ Benar!


<br><br>


Amati bagaimana proses
berpindah dari satu mesin
ke mesin berikutnya.


<br><br>


<button
id="lanjutInquiry"
class="menu-button">

Lanjut

</button>


</div>

`;



document
.getElementById("lanjutInquiry")
.onclick=()=>{


tahap++;

tampilkanTahap();


};



}

else{


feedback.innerHTML=`

<div class="salah">


❌ Belum tepat.

Coba amati kembali hubungan
antar proses.


</div>

`;

}


};


});


}




tampilkanTahap();



}