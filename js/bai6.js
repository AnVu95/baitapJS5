/**
 * Bài 6 :Tạo thẻ div chẳn và lẻ
 * K1 : tạo input
 * 
 * K2 
 * Cho i chạy từ 0 đến 10
 * i%2=0 => div chẵn và ngược lại div lẽ
 * 
 * K3
 * in ra 10 div chẵn và lẽ
 */


function taoThe() {
    var content = "";
    for (var i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            content += "<div style='background-color: red;color:#3fff00;margin-bottom:0;'>Div chẵn</div>";
        } else {
            content += "<div style='background-color: blue;color:#3fff00;margin-bottom:0;'>Div lẻ</div>";
        }
    }
    document.getElementById("xuatThe").innerHTML = content;
}