import {
tampilkanGrafik
}
from "./grafik.js";



export function tampilkanInquiryGrafik(){


const app =
document.getElementById("app");


let tahap = 1;



function tampilkanTahap(){


if(tahap===1){


app.innerHTML = `


<div class="materi-container">


<h2>
🔎 Pemantik Grafik Fungsi
</h2>



<p class="materi-text">

Perhatikan hubungan antara nilai
masukan dan keluaran berikut.

</p>




<table class="tabel-fungsi">


<tr>

<th>
x (Input)
</th>

<th>
f(x) (Output)
</th>

</tr>


<tr>
<td>1</td>
<td>3</td>
</tr>


<tr>
<td>2</td>
<td>5</td>
</tr>


<tr>
<td>3</td>
<td>7</td>
</tr>


<tr>
<td>4</td>
<td>9</td>
</tr>


</table>




<h3>

Pertanyaan 1

</h3>


<p>

Apa pola hubungan antara nilai x
dan f(x)?

</p>



<button 
class="pilihan-inquiry"
data-jawaban="salah">

Nilai output selalu sama

</button>


<button 
class="pilihan-inquiry"
data-jawaban="benar">

Output bertambah dengan pola tertentu

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





if(tahap===2){



app.innerHTML=`


<div class="materi-container">


<h2>

Mengubah Tabel Menjadi Titik

</h2>



<p class="materi-text">

Dalam grafik fungsi:

</p>



<div class="alur-konsep">


INPUT (x)

↓

OUTPUT (y)

↓

TITIK (x,y)


</div>




<p>

Maka tabel sebelumnya menjadi:

</p>



<div class="contoh-titik">


(1,3)

<br>

(2,5)

<br>

(3,7)

<br>

(4,9)


</div>




<h3>

Apa yang terjadi jika titik-titik tersebut
digambar pada bidang koordinat?

</h3>



<button
class="pilihan-inquiry"
data-jawaban="benar">

Membentuk pola grafik tertentu

</button>



<button
class="pilihan-inquiry"
data-jawaban="salah">

Tidak memiliki hubungan

</button>



<button
class="pilihan-inquiry"
data-jawaban="salah">

Selalu membentuk lingkaran

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

Menemukan Konsep Grafik Fungsi

</h2>




<p class="materi-text">

Nilai fungsi dapat ditampilkan dalam
beberapa bentuk:

</p>




<div class="alur-konsep">


Rumus

↓

Tabel

↓

Pasangan Berurutan

↓

Grafik


</div>




<p class="materi-text">

Grafik fungsi adalah kumpulan titik
koordinat yang menunjukkan hubungan
antara input dan output.

</p>




<button

class="menu-button"

id="masukGrafik">

Lihat Grafik Fungsi

</button>




</div>


`;



document
.getElementById("masukGrafik")
.onclick=()=>{


tampilkanGrafik();


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



if(
button.dataset.jawaban==="benar"
){


feedback.innerHTML=`

<div class="benar">


✅ Benar!


<br><br>


Nilai output berubah mengikuti
aturan fungsi.


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

❌ Coba amati kembali pola
perubahan nilai.


</div>

`;

}


};


});


}




tampilkanTahap();



}
