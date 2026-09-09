import {
tampilkanMenu
}
from "./menu.js";



export function tampilkanRefleksi(){


const app =
document.getElementById("app");


app.innerHTML = `


<div class="materi-container">


<h2>
Refleksi Pembelajaran
</h2>



<p class="materi-text">

Tuliskan pemahamanmu setelah mempelajari
materi fungsi dan fungsi komposisi.

</p>



<div class="refleksi-box">


<label>
1. Apa hal baru yang saya pahami tentang konsep fungsi sebagai hubungan antara input, aturan, dan output?
</label>

<textarea id="ref1" placeholder="Tuliskan refleksi Anda..."></textarea>



<label>
2. Bagaimana cara saya menentukan domain, kodomain, dan range dari suatu fungsi?
</label>

<textarea id="ref2" placeholder="Tuliskan refleksi Anda..."></textarea>



<label>
3. Representasi fungsi (diagram, tabel, rumus, atau grafik) mana yang paling membantu saya memahami hubungan input dan output? Mengapa?
</label>

<textarea id="ref3" placeholder="Tuliskan refleksi Anda..."></textarea>



<label>
4. Apa hubungan antara perubahan nilai input dengan perubahan output pada grafik fungsi?
</label>

<textarea id="ref4" placeholder="Tuliskan refleksi Anda..."></textarea>



<label>
5. Bagaimana simulasi dua mesin produksi kertas membantu saya memahami konsep fungsi komposisi?
</label>

<textarea id="ref5" placeholder="Tuliskan refleksi Anda..."></textarea>



<label>
6. Bagian mana dari materi fungsi atau komposisi fungsi yang masih membingungkan bagi saya?
</label>

<textarea id="ref6" placeholder="Tuliskan refleksi Anda..."></textarea>



<label>
7. Bagaimana penerapan konsep fungsi dapat ditemukan dalam kehidupan sehari-hari?
</label>

<textarea id="ref7" placeholder="Tuliskan refleksi Anda..."></textarea>



</div>





<button
class="menu-button"
id="simpanRefleksi">

Simpan Refleksi

</button>




<button
class="menu-button"
id="kembaliRefleksi">

Kembali

</button>




<div id="pesanRefleksi"></div>



</div>


`;

document
.getElementById("simpanRefleksi")
.onclick=()=>{


localStorage.setItem(
"refleksiFungsi",
JSON.stringify({

r1:
document.getElementById("ref1").value,

r2:
document.getElementById("ref2").value,

r3:
document.getElementById("ref3").value,

r4:
document.getElementById("ref4").value,

r5:
document.getElementById("ref5").value,

r6:
document.getElementById("ref6").value,

r7:
document.getElementById("ref7").value

})
);



document
.getElementById("pesanRefleksi")
.innerHTML=`

<div class="benar">

✅ Refleksi berhasil disimpan

</div>

`;



};





document
.getElementById("kembaliRefleksi")
.onclick=()=>{


tampilkanMenu();


};


}