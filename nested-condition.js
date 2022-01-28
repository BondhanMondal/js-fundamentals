var danishPrice = 50;
var butterBreadPrice = 25;
var toastBiscutPrice =10;
var myBudget = 100;
var packedWell = false;

// if (danishPrice < myBudget) {
//     console.log('Danish kheye danish jabo');
// }
// else if (butterBreadPrice < myBudget) {
//     console.log('butter bon diye cha khamu');
// }
// else if (toastBiscutPrice < myBudget) {
//     console.log('toast biscut khamu');
// }
// else {
//     console.log('batasha diye cha khamu');
// }

if (danishPrice < myBudget){
    if(packedWell == true){
        console.log('damish khamu');
    }
    else {
        console.log('machi kheye felche');
    }
}