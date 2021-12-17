/** 
 * Bài 7: In số nguyên tố
 * K1: Input
 * số n
 * K2:
 * + Nếu n<2 => Không có số nguyên tố
 * + Nếu n>=2 :
 * Cho i chạy 2 -> n 
 * kiểm tra từng giá trị i :
 * - Cho j chạy từ 2 đến sqrt(i) 
 * - Nếu i%j = 0 => count++
 * - Nếu count = 0 => số i là số nguyên tố => ketQua += " " + i;
 * - Xét lại count =0;
 * K3: 
 * Output
 * In ra các số nguyên tố
 * 
 */
function timSoNt() {
    var n = document.getElementById("inpNum").value;
    var soNguyenTo = "";
    var count = 0;
    if (n < 2) {
        soNguyenTo = "";
    } else {
        for (var i = 2; i <= n; i++) {
            for (var j = 2; j <= Math.sqrt(i); j++) {
                if (i % j == 0) {
                    count++;
                }
            }
            if (count == 0) {
                soNguyenTo += " " + i;
            }
            count = 0;
        }
    }
    document.getElementById("txtTim").innerHTML = "Số nguyên tố là: " + soNguyenTo;
}