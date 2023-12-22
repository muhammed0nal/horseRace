const oyuncu_no_form_ = document.getElementById("oyuncu-no");
const oyuncu_no_giris = document.getElementById("oyuncu-no-giris")
const giris_ekrani = document.getElementById("giris-ekrani");
const isim_gir = document.getElementById("isim-gir");
const paragraf = document.getElementById("enter-ile-onay");
const saha = document.getElementById("saha");
const at1 = document.getElementById("at1");
const at2 = document.getElementById("at2");
const at3 = document.getElementById("at3");
const at4 = document.getElementById("at4");
const at5 = document.getElementById("at5");
const at6 = document.getElementById("at6");
const at7 = document.getElementById("at7");
const at8 = document.getElementById("at8");
const spiker = document.getElementById("sonuc");
const kontroller = document.getElementById("kontroller");
const dugme = document.getElementById("dugme");
const bitis = document.getElementById("bitis");
let x1 = 0; x2 = 0; x3 = 0; x4 = 0; x5 = 0; x6 = 0; x7 = 0; x8 = 0;  // atların sola olan uzaklıkları
let timerId = null;  // sure

oyuncu_no_form_.addEventListener("submit", (e) => { // oyuncu sayısını girince çalışır.
    e.preventDefault();

    const oyucuSayisi = oyuncu_no_giris.value;
    if (oyucuSayisi <= 8 && oyucuSayisi > 1) {
        oyuncuSayiGirisTamam(oyucuSayisi);

        // oyuncu ismini girince çalışır
        const oyuncu_isim = document.getElementById("oyuncu-isim");
        oyuncu_isim.addEventListener("submit", (e) => {
            e.preventDefault();
            saha.style.display = "block";
            spiker.style.display = "block"
            kontroller.style.display = "block"
            giris_ekrani.style.display = "none";

            let dizi = [];  // form içindeki inputları diziye ekleme
            for (i = 0; i < oyucuSayisi; i++) {
                const inputDiziPush = oyuncu_isim[i];
                dizi.push(inputDiziPush)
                // console.log(dizi[i].value);
            }

            // seçilen at sayısı kadar saha'nın children'ını aktif etme
            for (i = 0; i < oyucuSayisi; i++) {
                saha.children[i].style.display = "block";
            }

            // aktif edilen img'lara alt değeri atama
            for (i = 0; i < oyucuSayisi; i++) {
                let atIsim = "";
                for (i = 0; i < oyucuSayisi; i++) {
                    atIsim = dizi[i].value;
                    saha.children[i].alt = atIsim;
                }
            }
        })
    }
    else {  // uyarı
        alert("1 İLE 8 ARASINDA SAYI GİRİN");
    }
});

function oyuncuSayiGirisTamam(sayi) {  // yukarının fonk'u
    oyuncu_no_form_.style.display = "none"
    isim_gir.style.display = "block"
    // yeni form oluşturma
    const newForm = document.createElement("form");
    newForm.classList.add("oyuncu-isim");
    newForm.setAttribute("id", "oyuncu-isim");
    giris_ekrani.insertBefore(newForm, paragraf);

    // girilen sayi kadar formun içine input oluşturma
    for (i = 0; i < sayi; i++) {
        const oyuncuIsimInput = document.createElement("input");
        oyuncuIsimInput.classList.add(`oyuncu-isim-giris${i + 1}`);
        oyuncuIsimInput.setAttribute("id", `oyuncu-isim-giris${i + 1}`);
        oyuncuIsimInput.type = "text";
        newForm.appendChild(oyuncuIsimInput);
    }
    // oluşturduğumuz form submit olmuyordu. bir submit input ekledim
    const submitInput = document.createElement("input");
    submitInput.type = "submit";
    submitInput.value = "Onayla";
    submitInput.style.display = "none";
    newForm.appendChild(submitInput);
}

// rastgele sayi uretme

function rast() {
    return Math.floor(Math.random() * 7);
}

// at ilerletme
function git() {
    x1 += rast();  // atların sola uzaklığını rastegele arttırma
    x2 += rast();
    x3 += rast();
    x4 += rast();
    x5 += rast();
    x6 += rast();
    x7 += rast();
    x8 += rast();
    at1.style.left = x1 + "px";
    at2.style.left = x2 + "px";
    at3.style.left = x3 + "px";
    at4.style.left = x4 + "px";
    at5.style.left = x5 + "px";
    at6.style.left = x6 + "px";
    at7.style.left = x7 + "px";
    at8.style.left = x8 + "px";
    let onde = ondeki();
    spiker.textContent = onde.alt + " YARIŞI ÖNDE GÖTÜRÜYOR.";
    if (onde.offsetLeft + onde.width > bitis.offsetLeft) {
        spiker.textContent = onde.alt + " KAZANDI.";
        bitir();
    }
}

// spiker ondeki atın ismini söylesin

function ondeki() {
    let ondekiAt = at1; // meydan okuma algoritması 
    // ondeki at, at1 olmuş olsun
    if (at2.offsetLeft > ondekiAt.offsetLeft) {
        // at2 nin sola uzaklıüı at1 in sola uzaklığından büyükse ondekiAt=at2 olur
        ondekiAt = at2;
    }
    if (at3.offsetLeft > ondekiAt.offsetLeft) {
        // at2 nin sola uzaklıüı at1 in sola uzaklığından büyükse ondekiAt=at2 olur
        ondekiAt = at3;
    }
    if (at4.offsetLeft > ondekiAt.offsetLeft) {
        // at2 nin sola uzaklıüı at1 in sola uzaklığından büyükse ondekiAt=at2 olur
        ondekiAt = at4;
    }
    if (at5.offsetLeft > ondekiAt.offsetLeft) {
        // at2 nin sola uzaklıüı at1 in sola uzaklığından büyükse ondekiAt=at2 olur
        ondekiAt = at5;
    }
    if (at6.offsetLeft > ondekiAt.offsetLeft) {
        // at2 nin sola uzaklıüı at1 in sola uzaklığından büyükse ondekiAt=at2 olur
        ondekiAt = at6;
    }
    if (at7.offsetLeft > ondekiAt.offsetLeft) {
        // at2 nin sola uzaklıüı at1 in sola uzaklığından büyükse ondekiAt=at2 olur
        ondekiAt = at7;
    }
    if (at8.offsetLeft > ondekiAt.offsetLeft) {
        // at2 nin sola uzaklıüı at1 in sola uzaklığından büyükse ondekiAt=at2 olur
        ondekiAt = at8;
    }

    return ondekiAt;
}

// yarış kontrolü

dugme.onclick = function () {
    if (dugme.textContent == "YENİ YARIŞ") {
        x1 = 0; x2 = 0; x3 = 0; x4 = 0; x5 = 0; x6 = 0; x7 = 0; x8 = 0;
        at1.style.left = at2.style.left = at3.style.left = at4.style.left = at5.style.left = at6.style.left = at7.style.left = at8.style.left = "0px";
        dugme.textContent = "BAŞLAT";
        spiker.textContent = "ATLAR YARIŞA HAZIR";
    }
    else if (timerId == null) {
        timerId = setInterval(git, 100); // git metodunu 500 ms'de bir çağır
        dugme.textContent = "DURDUR";
    }
    else if (dugme.textContent == "DURDUR") {
        clearInterval(timerId);
        timerId = null;
        dugme.textContent = "DEVAM ET";
    }

}

function bitir() {
    clearInterval(timerId);
    timerId = null;
    dugme.textContent = "YENİ YARIŞ";
}