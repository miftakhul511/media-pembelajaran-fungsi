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
1. Apa yang dimaksud dengan fungsi?
</label>

<textarea id="ref1"></textarea>




<label>
2. Apa perbedaan domain, kodomain, dan range?
</label>

<textarea id="ref2"></textarea>




<label>
3. Bagaimana hubungan fungsi dengan grafik?
</label>

<textarea id="ref3"></textarea>




<label>
4. Apa arti (g ∘ f)(x)=g(f(x))?
</label>

<textarea id="ref4"></textarea>




<label>
5. Apa yang kamu pelajari dari simulasi pabrik kertas?
</label>

<textarea id="ref5"></textarea>



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
document.getElementById("ref5").value

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