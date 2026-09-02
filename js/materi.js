import {
buatInteraksiFungsi
}

from "./interaksiFungsi.js";

export function tampilkanMateriFungsi(){


const app =
document.getElementById("app");



app.innerHTML = `

<div class="materi-container">

<h2>
Konsep Fungsi
</h2>


<p class="materi-text">
Fungsi adalah Aturan yang memasangkan setiap anggota domain
dengan tepat satu anggota kodomain.

</p>


<h3>
Domain, Kodomain, dan Range
</h3>


<p class="materi-text">

Dalam suatu fungsi terdapat tiga bagian penting:

</p>



<div class="konsep-fungsi-box">


<p>

<b>Domain</b>

<br>

Domain adalah himpunan nilai masukan
(input) yang akan diproses oleh fungsi.

</p>



<p>

<b>Kodomain</b>

<br>

Kodomain adalah himpunan nilai tujuan
atau kemungkinan hasil keluaran fungsi.

</p>



<p>

<b>Range</b>

<br>

Range adalah anggota kodomain yang
benar-benar menjadi hasil fungsi.

</p>


</div>

<div class="domain-kodomain">


<div class="himpunan">


<h3>
Domain
</h3>


<p>
1
</p>

<p>
2
</p>

<p>
3
</p>


</div>




<div class="panah-domain">

→

</div>




<div class="himpunan">


<h3>
Kodomain
</h3>


<p>
2
</p>

<p>
4
</p>

<p>
6
</p>

<p>
8
</p>


</div>



</div>

<h3>
Contoh Diagram Fungsi
</h3>


<div class="diagram-fungsi">


1 ─────────> 2

<br>

2 ─────────> 4

<br>

3 ─────────> 6


</div>



<h3>
Bentuk Fungsi
</h3>


<p>

f(x)=2x

</p>


${buatInteraksiFungsi()}
<button 
class="menu-button"
id="kembali">

Kembali

</button>


</div>


`;

document
.getElementById("prosesFungsi")
.onclick=()=>{


let x =
document
.getElementById("inputX")
.value;



let hasil =
2*x;



document
.getElementById("nilaiInput")
.innerHTML=x;



document
.getElementById("nilaiOutput")
.innerHTML=hasil;



document
.getElementById("hasilFungsi")
.innerHTML=

"f("+x+")="+hasil;


};



document
.getElementById("kembali")
.onclick=()=>{


location.reload();


};


}