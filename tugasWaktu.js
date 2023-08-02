// let steve = [
//     {hari: 'Senin',     jam: 2},       
//     {hari: 'Selasa',    jam: 2},  
//     {hari: 'Rabu',      jam: 3},  
//     {hari: 'Kamis',     jam: 3},  
//     {hari: 'Jumat',     jam: 1},  
//     {hari: 'Sabtu',     jam: 4},  
//     {hari: 'Minggu',    jam: 5},  
// ];

// let jumlah = 0;

// for(i = 0; i<= steve.jam; i++){
//     console.log(jumlah += steve[jam]);
// }


let jam = [2, 2, 3, 3, 1, 4, 5]
let totalJam = 0;
let totalMelebihi = 0;

for(let i=0; i < jam.length; i++){
    totalJam += jam[i];

    if(jam[i] > 2){
        totalMelebihi++
    }
}

console.log(`Total Waktu Bermain : ${totalJam} jam`)
console.log(`Jumlah melebihi batas waktu bermain : ${totalMelebihi} hari`);