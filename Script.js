let img_box = document.getElementById("img-box");
let qrcode = document.getElementById("qrcode");
let qrText = document.getElementById("qrText");
let GenerateBTN = document.getElementById("generateQRCode");
function generateQRCode() {
    if (qrText.value.length > 0) {
        qrcode.src =
            "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
            qrText.value;
        img_box.classList.add("show-img");
    }
    else {
        alert("Please Enter Something");
        // qrText.classList.add('error');
        img_box.classList.remove("show-img");
        qrcode.src = "";
    }
}
GenerateBTN.addEventListener('click', generateQRCode);
