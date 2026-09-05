import {
tampilkanMenu
}
from "./js/menu.js";

const app = document.getElementById("app");

app.innerHTML = `

<section class="tujuan-pembelajaran">

<h2>Tujuan Pembelajaran</h2>

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


`;



tampilkanMenu();