/**
 * Bài 3:
 * n
 * K2 : 
 * Cho i chạy từ 0 đến 10000
 * 
 * i < 10000 => i+=1 và ngược lại
 * 
 * K3:
 * in ra số nguyên dương nhỏ nhất
 * 
 */

function timSoND() {
    var n = 0;
    for (var sum = 0; sum < 10000;) {
        n++;
        sum += n;
    }
    document.getElementById("txtSoND").innerHTML = "Số nguyên dương nhỏ nhất: " + n;
}
document.getElementById("btn-soND").onclick = timSoND;