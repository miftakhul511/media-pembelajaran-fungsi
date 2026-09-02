export function buatInteraksiFungsi(){


return `


<div class="interaksi-fungsi">


<h3>
Coba Fungsi f(x)=2x
</h3>



<p>
Masukkan nilai x:
</p>


<input 
type="number"
id="inputX"
value="3">



<button 
id="prosesFungsi"
class="menu-button">

Proses

</button>




<div class="mesin">


<div class="kotak">

<span id="nilaiInput">
3
</span>

</div>



<div class="panah">
↓
</div>



<div class="mesin-fungsi">

⚙

<br>

f(x)=2x

</div>



<div class="panah">
↓
</div>



<div class="kotak hasil">

<span id="nilaiOutput">
6
</span>

</div>


</div>



<h3 id="hasilFungsi">

f(3)=6

</h3>



</div>


`;

}