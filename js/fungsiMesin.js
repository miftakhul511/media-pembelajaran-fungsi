export function prosesFungsiKomposisi(
x,
fungsiF,
fungsiG
){



// ambil angka dari fungsi f

let a =
Number(
fungsiF.match(/[-]?\d+/)[0]
);



let b =
0;


// cari konstanta setelah +

if(
fungsiF.includes("+")
){

b =
Number(
fungsiF.split("+")[1]
);

}
else if(
fungsiF.includes("-")
){

b =
-Number(
fungsiF.split("-")[1]
);

}



// f(x)

let hasilF =
a*x+b;




// ambil fungsi g


let c =
Number(
fungsiG.match(/[-]?\d+/)[0]
);



let d=0;


if(
fungsiG.includes("+")
){

d =
Number(
fungsiG.split("+")[1]
);

}
else if(
fungsiG.includes("-")
){

d =
-Number(
fungsiG.split("-")[1]
);

}



// g(f(x))

let hasilG =
c*hasilF+d;



return {

hasilF,
hasilG

};


}