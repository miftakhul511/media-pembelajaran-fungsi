import {
tampilkanMateriFungsi
}
from "./materi.js";


export function tampilkanInquiryFungsi(){


const app =
document.getElementById("app");



let tahap = 1;



function tampilkanTahap(){



if(tahap===1){


app.innerHTML = `


<div class="materi-container">


<h2>
🔎 Pemantik Konsep Fungsi
</h2>



<p class="materi-text">

Perhatikan proses pada mesin berikut.

Menurut kamu bagaimana sebuah mesin
dapat mengubah bahan menjadi produk?

</p>



<div class="mesin-inquiry">


<img 
src="./assets/pabrik_kertas/mesin_kertas.png">


</div>



<div class="alur-inquiry">


🌲 Bahan Masuk

<br>

↓

<br>

⚙ Mesin Kertas

<br>

↓

<br>

📄 Produk


</div>




<h3>

Pertanyaan 1

</h3>



<p>

Jika sebuah mesin menerima:

</p>


<h2>

5 kg bahan

</h2>


<p>

dan menghasilkan:

</p>


<h2>

15 lembar kertas

</h2>


<p>

Menurut kamu bagaimana mesin tersebut
menentukan hasil akhirnya?

</p>




<button class="pilihan-inquiry"
data-jawaban="salah">

A. Mesin bekerja secara acak

</button>



<button class="pilihan-inquiry"
data-jawaban="benar">

B. Mesin memiliki aturan tertentu

</button>



<button class="pilihan-inquiry"
data-jawaban="salah">

C. Mesin tidak memiliki hubungan

</button>




<div id="feedbackInquiry"></div>



</div>


`;



buatPilihan();



}




if(tahap===2){


app.innerHTML=`


<div class="materi-container">


<h2>
Menemukan Pola Mesin
</h2>



<p>

Perhatikan hasil produksi mesin:

</p>




<table class="tabel-fungsi">


<tr>

<th>
Bahan Masuk
</th>

<th>
Produk
</th>

</tr>


<tr>
<td>1</td>
<td>2</td>
</tr>


<tr>
<td>2</td>
<td>4</td>
</tr>


<tr>
<td>3</td>
<td>6</td>
</tr>


<tr>
<td>4</td>
<td>8</td>
</tr>


</table>




<h3>

Pola apa yang terjadi?

</h3>



<button class="pilihan-inquiry"
data-jawaban="salah">

Ditambah 2

</button>


<button class="pilihan-inquiry"
data-jawaban="benar">

Dikalikan 2

</button>


<button class="pilihan-inquiry"
data-jawaban="salah">

Dikurangi 2

</button>



<div id="feedbackInquiry"></div>



</div>


`;


buatPilihan();



}





if(tahap===3){


app.innerHTML=`


<div class="materi-container">


<h2>
Kesimpulan Pengamatan
</h2>




<p class="materi-text">

Dari mesin tersebut kita menemukan:

</p>



<div class="alur-konsep">


INPUT

<br>

↓

<br>

ATURAN

<br>

↓

<br>

OUTPUT


</div>




<p class="materi-text">

Setiap bahan yang masuk memiliki
satu hasil keluaran.


</p>



<h2>

Inilah konsep dasar FUNGSI

</h2>




<button
class="menu-button"
id="masukMateri">

Pelajari Konsep Fungsi

</button>



</div>


`;



document
.getElementById("masukMateri")
.onclick=()=>{


tampilkanMateriFungsi();


};


}



}





function buatPilihan(){



document
.querySelectorAll(".pilihan-inquiry")
.forEach(button=>{


button.onclick=()=>{


const feedback =
document.getElementById("feedbackInquiry");



if(button.dataset.jawaban==="benar"){


feedback.innerHTML=`

<div class="benar">

✅ Tepat!

Mesin memiliki aturan tertentu
yang menghubungkan input dan output.

<br><br>

<button id="lanjutInquiry"
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

❌ Coba pikirkan kembali.

Apakah mesin bekerja tanpa aturan?

</div>

`;


}



};


});


}



tampilkanTahap();


}