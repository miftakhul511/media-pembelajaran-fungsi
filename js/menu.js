import {
tampilkanInquiryKomposisi
}

from "./inquiryKomposisi.js";

import {
tampilkanInquiryGrafik
}
from "./inquiryGrafik.js";

import {
tampilkanInquiryFungsi
}
from "./inquiryFungsi.js";

import {
tampilkanRefleksi
}
from "./refleksi.js";

import {
tampilkanLatihan
}
from "./latihan.js";

import {
tampilkanTeoriKomposisi
}
from "./teoriKomposisi.js";

import {
tampilkanPabrik
}
from "./pabrik.js";

import {
tampilkanRepresentasi
}
from "./representasi.js";

import {
tampilkanGrafik
}
from "./grafik.js";

import {
tampilkanMateriFungsi
}
from "./materi.js";



export function tampilkanMenu(){


const app =
document.getElementById("app");

app.innerHTML = `


<section class="tujuan-pembelajaran">

<h2>
Tujuan Pembelajaran
</h2>


<ol>

<li>
Menjelaskan konsep fungsi melalui hubungan input, aturan, dan output.
</li>


<li>
Mengidentifikasi domain, kodomain, dan range suatu fungsi.
</li>


<li>
Menyajikan fungsi dalam berbagai bentuk representasi 
(diagram, tabel, rumus, dan grafik).
</li>


<li>
Menjelaskan hubungan nilai input-output melalui grafik fungsi.
</li>


<li>
Menemukan konsep fungsi komposisi melalui simulasi dua mesin 
pada proses produksi kertas.
</li>


<li>
Menentukan hasil komposisi fungsi sederhana.
</li>

</ol>


</section>



<div class="menu-container">


<h2>
Menu Pembelajaran
</h2>



<div class="menu-container">


<h2>
Menu Pembelajaran
</h2>



<button 
class="menu-button"
id="btnFungsi">

Konsep Fungsi

</button>



<button 
class="menu-button"
id="btnRepresentasi">

Representasi Fungsi

</button>



<button 
class="menu-button"
id="btnGrafik">

Grafik Fungsi

</button>



<button 
class="menu-button"
id="btnKomposisi">

Fungsi Komposisi

</button>



<button 
class="menu-button"
id="btnLatihan">

Latihan Soal

</button>



<button 
class="menu-button"
id="btnRefleksi">

Refleksi

</button>



</div>


`;



// tombol konsep fungsi

document
.getElementById("btnFungsi")
.onclick = ()=>{

tampilkanInquiryFungsi();


};
document
.getElementById("btnGrafik")
.onclick=()=>{


tampilkanInquiryGrafik();


};

document
.getElementById("btnRepresentasi")
.onclick=()=>{

tampilkanRepresentasi();

};

document
.getElementById("btnKomposisi")
.onclick=()=>{

tampilkanInquiryKomposisi();

};

document
.getElementById("btnLatihan")
.onclick=()=>{

tampilkanLatihan();

};

document
.getElementById("btnRefleksi")
.onclick=()=>{

tampilkanRefleksi();

};

}