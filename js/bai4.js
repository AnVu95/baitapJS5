/**
 * Bai 4 :
 * K1
 * Input :nhập vào 2 số x, n tính tổng
 * sum
 * K2 :
 * Cho i chạy từ 1 đến n
 *  sum = x + Math.pow(x,i)
 * 
 * K3 :
 * sum
 */

function tinhTongLt(){
    var x = Number(document.getElementById("inpX").value);
    var n = Number(document.getElementById("inpN").value);
    
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += Math.pow(x, i);
    }
    document.getElementById("txtKq").innerHTML = sum;
}

