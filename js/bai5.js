/**
 * Bài 5 :Nhập vào n. Tính giai thừa
 * K1
 * input :
 * n
 * 
 * K2 :
 * Cho i chạy từ 1 đến n
 * 
 * K3 
 * output :
 * in ra gia thừa
 * 
 */

function tinhLt(){
    var n = document.getElementById("inpNumber").value;
    var giaiThua = 1;
    for (var i = 1; i <= n; i++) {
        giaiThua *= i;
    }
    document.getElementById("txtTinh").innerHTML = "Kết quả: " + giaiThua;
}