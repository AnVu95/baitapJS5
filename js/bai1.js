/**
 * K1 :
 * input : In số chẵn và lẽ < 100
 * soLe
 * soChan
 * K2 :
 * Cho i chạy từ 0 đến 100
 * % 2 == 0 => số chẵn
 * % 2 != 0 => số lẽ 
 * 
 * K3:
 * output : in tất cả số chẳng và lẻ < 100
 * 
 */

/* while*/
function timChanLe() {
    var soChan = "";
    var soLe = "";
    var i = 1;
    while (i < 100) {
        if (i % 2 == 0) {
            soChan += " " + i;
        } else {
            soLe += " " + i;
        }
        i++;
    }
    document.getElementById("txtChanLe").innerHTML = "Số chẵn là: " + soChan + "<br>" + "Số lẻ là: " + soLe;
}
document.getElementById("btn-taoThe").onclick = timChanLe;
    


/*For*/
function timChanLe1(){
    var soChan = "";
    var soLe = "";
    for (var i = 1; i < 100; i++) {
        if (i % 2 == 0) {
            soChan += " " + i;
        } else {
            soLe += " " + i;
        }
    }
    document.getElementById("txtChanLe1").innerHTML = "Số chẵn là: " + soChan + "<br>" + "Số lẻ là: " + soLe;
}
document.getElementById("btn-taoThe1").onclick = timChanLe1;
