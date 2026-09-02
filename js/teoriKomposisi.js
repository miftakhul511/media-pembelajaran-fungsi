import {
tampilkanPabrik
}
from "./pabrik.js";

export function tampilkanTeoriKomposisi(){


const app =
document.getElementById("app");



app.innerHTML = `


<div class="materi-container">


<h2>
Fungsi Komposisi
</h2>



<p class="materi-text">


Fungsi komposisi adalah penggabungan
dua fungsi atau lebih yang dilakukan
secara berurutan.


</p>




<h3>
Notasi Fungsi Komposisi
</h3>



<div class="rumus-besar">


(g ∘ f)(x) = g(f(x))


</div>




<p class="materi-text">


Artinya hasil dari fungsi pertama
f(x) digunakan sebagai masukan
untuk fungsi kedua g(x).


</p>





<h3>
Contoh Penyelesaian
</h3>



<div class="contoh-rumus">


<p>
Diketahui:
</p>


<p>
f(x)=2x+3
</p>


<p>
g(x)=x²
</p>


<hr>


<p>
Cari:
</p>


<p>
(g ∘ f)(2)
</p>



<p>

Langkah 1:

</p>


<p>

f(2)=2(2)+3=7

</p>



<p>

Langkah 2:

</p>


<p>

g(7)=7²=49

</p>



<h2>

(g ∘ f)(2)=49

</h2>


</div>





<div class="alur-konsep">


x

↓

f(x)

↓

g(x)

↓

g(f(x))


</div>


<button
class="menu-button"
id="mulaiPabrik">

🏭 Simulasi Pabrik Kertas

</button>


<button
class="menu-button"
id="kembaliTeori">

Kembali

</button>



</div>


`;



document
.getElementById("kembaliTeori")
.onclick=()=>{

location.reload();

};

document
.getElementById("mulaiPabrik")
.onclick=()=>{

tampilkanPabrik();

};

}