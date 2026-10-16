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
Menjelaskan konsep fungsi melalui hubungan domain, fungsi, dan range.
</li>


<li>
Menyajikan fungsi dalam berbagai bentuk representasi 
(diagram, tabel, rumus, dan grafik).
</li>

<li>
Menjelaskan hubungan nilai domain-range melalui grafik fungsi.
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
