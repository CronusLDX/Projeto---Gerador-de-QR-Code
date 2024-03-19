class QR {
    constructor(input, button, img,btn,section) {
        this.input = input;
        this.button = button;
        this.img = img;
        this.btn=btn
        this.section=section
        button.addEventListener("click", () => this.GerarQRCode());
        btn.addEventListener("click", () => this.Limpar());
    }

    GerarQRCode() {
        if (!isNaN(parseFloat(this.input.value))) {
            return;
        }

        let entrada = this.input.value;
        if (entrada === '') {
            return;
        } else {
            this.img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${entrada}`;
            this.section.style.display = "block";
        }
    }

    Limpar(){
        this.input.value =''
        this.section.style.display=''
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector("#Input1");
    const button = document.querySelector("#Button");
    const img = document.querySelector("#qr-code");
    const btn = document.querySelector("#Clean")
    const section =document.querySelector(".Container-Active")
    const qr = new QR(input, button, img,btn,section);
});
