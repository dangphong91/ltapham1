function kiemtra() {
    let a = Number(prompt("Nhập số đầu tiên:"));
    let b = Number(prompt("Nhập số thứ hai:"));
    if ( a > b) {
        alert("Số đầu tiên lớn hơn số thứ hai.")
    } else {
        document.getElementById("hienthi").innerHTML = a+b;
    }
}