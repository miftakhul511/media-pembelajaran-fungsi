export function mulaiAnimasi(){


const pohon =
document.querySelector(".pohon");


const mesinPulp =
document.querySelector(".mesin-pulp");


const pulp =
document.querySelector(".gambar-pulp");


const mesinKertas =
document.querySelector(".mesin-kertas");

console.log(
"CEK MESIN KERTAS:",
document.querySelector(".mesin-kertas")
);


const kertas =
document.querySelector(".gambar-kertas");



const rumus =
document.getElementById("rumusProses");


// reset dulu

pohon.classList.remove("bergerak");


mesinPulp.classList.remove("aktif");


pulp.classList.remove("muncul");


mesinKertas.classList.remove("aktif");


kertas.classList.remove("muncul");


rumus.innerHTML="";




// tahap 1
setTimeout(()=>{

pohon.classList.add("bergerak");


rumus.innerHTML=

"🌲 Bahan kayu masuk ke mesin pulp";


},500);




// tahap 2

setTimeout(()=>{


mesinPulp.classList.add("aktif");


rumus.innerHTML=

"⚙ Mesin pulp bekerja ";


},2500);





// tahap 3

setTimeout(()=>{


pulp.classList.add("muncul");


rumus.innerHTML=

"🟤 Pulp terbentuk";


},4500);





// tahap 4

setTimeout(()=>{


pulp.classList.add("bergerak");


rumus.innerHTML=

"🟤 Pulp masuk mesin kertas";


},6000);





// tahap 5

setTimeout(()=>{


mesinKertas.classList.add("aktif");


rumus.innerHTML=

"⚙ Mesin kertas bekerja";


},8000);





// tahap 6

setTimeout(()=>{


kertas.classList.add("muncul");


rumus.innerHTML=

"📄 Produk akhir berhasil dibuat";


},10000);



}