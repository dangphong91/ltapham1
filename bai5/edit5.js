let arr1 = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"];
let arr2 = ["Ursa Minor", "Tarurus", "Cygnus", "Lyra", "Aquila", "Ursa Major", "Leo"];
let ten = "";
function nhapten() {
    ten = prompt("Nhập tên ngôi sao:");
    document.getElementById("hienthiten").innerHTML = ten;
    return ten;
}
function sao() {
    let i = arr1.indexOf(ten);
    if (i >= 0) {
        document.getElementById("hienthisao").innerHTML = arr2[i];
    } else {
        document.getElementById("hienthisao").innerHTML = "Chưa cập nhật!";
    }
}