/**
 * Bài 2 :
 * K1:
 * Input : Đếm có bao nhiêu số / hết cho 3 - 0->1000
 * 
 * K2:
 * Cho i chạy từ 0 đến 1000
 * num % 3 == 0
 * 
 * K3:
 * output : in ra tất cả các số chia hết cho 3
 * 
 */

/*While*/
function timSo() {
    var dem = 0;
    var i = 0;
    while (i < 1000) {
        if (i % 3 == 0) {
            dem++;
        }
        i++;
    }
    document.getElementById("txtChiaHet").innerHTML = "Có " + dem + " Số chia hết cho 3";
}
document.getElementById("btn-chiaHet").onclick = timSo;

/*For*/
function timSo1() {
    var dem = 0;
    for (var i = 0; i < 1000; i++) {
        if (i % 3 == 0) {
            dem++;
        }
    }
    document.getElementById("txtChiaHet1").innerHTML = "Có " + dem + " Số chia hết cho 3";
}
document.getElementById("btn-chiaHet1").onclick = timSo1;