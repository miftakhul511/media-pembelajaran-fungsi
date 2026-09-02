import {
tampilkanTeoriKomposisi
}
from "./teoriKomposisi.js";

import {
mulaiAnimasi
}
from "./animasiPabrik.js";

import {
prosesFungsiKomposisi
}
from "./fungsiMesin.js";

export function tampilkanPabrik(){


const app =
document.getElementById("app");



app.innerHTML = `


<div class="pabrik-container">


<h1>
🏭 Simulasi Fungsi Komposisi
</h1>


<h2>
Pabrik Kertas
</h2>




<div class="fungsi-area">


<div>

<h3>
Mesin 1
</h3>


<label>

f(x)=

<input 
id="fungsiF"
value="2x+5">

</label>


</div>




<div>

<h3>
Mesin 2
</h3>


<label>

g(x)=

<input 
id="fungsiG"
value="3x-4">

</label>


</div>


</div>





<div class="alur-pabrik">



<div class="objek">

<img 
class="pohon"
src="./assets/pabrik_kertas/hutan.png">

<p>
Bahan Kayu
</p>

</div>



<div class="panah-pabrik">

→

</div>




<div class="mesin">

<img 
class="mesin-pulp"
src="./assets/pabrik_kertas/mesin_pulp.png">

<p>
Mesin Pulp
</p>


</div>




<div class="panah-pabrik">

→

</div>





<div class="objek">

<img 
class="gambar-pulp"
src="./assets/pabrik_kertas/pulp.png">


<p>
Pulp
</p>


</div>





<div class="panah-pabrik">

→

</div>




<div class="mesin">


<img 
class="mesin-kertas"
src="./assets/pabrik_kertas/mesin_kertas.png">

<p>
Mesin Kertas
</p>


</div>




<div class="panah-pabrik">

→

</div>





<div class="objek">

<img 
class="gambar-kertas"
src="./assets/pabrik_kertas/kertas.png">

<p>
Produk Kertas
</p>


</div>



</div>




<div class="input-produksi">


Jumlah bahan:

<input 
id="nilaiInput"
type="number"
value="10">


<button 
class="menu-button"
id="mulaiProduksi">

Mulai Produksi


</button>

<div 
id="rumusProses"
class="rumus-proses">

</div>
<div id="hasilProduksi"></div>


</div>





<button 
class="menu-button"
id="kembaliPabrik">

Kembali

</button>



</div>


`;

document
.getElementById("mulaiProduksi")
.onclick=()=>{


let input =
Number(
document.getElementById("nilaiInput").value
);


let fungsiF =
document
.getElementById("fungsiF")
.value;



let fungsiG =
document
.getElementById("fungsiG")
.value;



let hasil =
prosesFungsiKomposisi(
input,
fungsiF,
fungsiG
);


// tampilkan hasil matematika

document
.getElementById("hasilProduksi")
.innerHTML=`

<div class="hasil-produksi">


<h2>
🏭 Hasil Produksi
</h2>



<p>
🌲 Bahan Awal:
<b>${input}</b>
</p>



<p>
⚙️ Mesin Pulp
<br>

f(${input}) = ${hasil.hasilF}

</p>



<p>
🟤 Jumlah Pulp:
<b>${hasil.hasilF}</b>

</p>




<p>
⚙️ Mesin Kertas

<br>

g(${hasil.hasilF}) = ${hasil.hasilG}

</p>



<hr>



<h2>
📄 Produk Akhir:
${hasil.hasilG} lembar kertas
</h2>



</div>

`;




// jalankan animasi

mulaiAnimasi();

};
document
.getElementById("kembaliPabrik")
.onclick=()=>{

tampilkanTeoriKomposisi();

};

}