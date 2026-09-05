export function tampilkanRepresentasi(){


const app =
document.getElementById("app");



app.innerHTML = `


<div class="materi-container">


<h2>
Representasi Fungsi
</h2>



<p class="materi-text">

Sebuah fungsi dapat disajikan dalam beberapa
bentuk, yaitu diagram panah, tabel, pasangan
berurutan, dan grafik.

</p>



<h3>
1. Diagram Panah
</h3>



<div class="diagram-fungsi">


Domain
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Range

<br><br>


1
&nbsp;&nbsp;────────→&nbsp;&nbsp;
3

<br>

2
&nbsp;&nbsp;────────→&nbsp;&nbsp;
5

<br>

3
&nbsp;&nbsp;────────→&nbsp;&nbsp;
7


</div>





<h3>
2. Tabel Fungsi
</h3>



<table class="tabel-fungsi">


<tr>

<th>
x
</th>

<th>
f(x)=2x+1
</th>

</tr>


<tr>

<td>
1
</td>

<td>
3
</td>

</tr>


<tr>

<td>
2
</td>

<td>
5
</td>

</tr>


<tr>

<td>
3
</td>

<td>
7
</td>

</tr>


</table>





<h3>
3. Pasangan Berurutan
</h3>



<p class="pasangan">

(1,3), (2,5), (3,7)

</p>




<button
class="menu-button"
id="kembaliRepresentasi">

Kembali

</button>



</div>


`;



document
.getElementById("kembaliRepresentasi")
.onclick=()=>{

location.reload();

};


}