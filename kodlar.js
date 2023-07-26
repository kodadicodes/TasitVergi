let aracTipiSelectList = document.getElementById("aracTipi")
const btnVergiHesapla = document.getElementById("btnVergiHesapla")
let sonuc = document.getElementById("sonuc")
let aracGucuSelectList = document.getElementsByName("motorGucu")
let aracModeliSelectList = document.getElementById("aracModeli")

let aracModeli;
var aracTipi;
var aracGucu;
var odenecekVergi;
var i;
// `new Date()` JavaScript'de kullanılan bir tarih ve saat nesnesini temsil eder ve şu anki zamanı ve tarihi içeren bir nesne oluşturur.
// `getFullYear()`, JavaScript Date nesnesinin bir metodu olup, şu anki tarihin yılını dört basamaklı bir sayı olarak döndürür.
let date = new Date().getFullYear();

// `DOMContentLoaded`, HTML belgesi yüklendiğinde DOM yapısının hazır olduğu ve JavaScript kodlarının çalışabileceği olaydır.
// Bu kod, sayfa tamamen yüklendiğinde veya içerik oluşturulduğunda belirtilen işlev çalıştırır.
document.addEventListener('DOMContentLoaded', function () {
    for (i = 1950; i <= date; i++) {
        let option = document.createElement("option")
        aracModeliSelectList.options.add(option)
        option.innerText = i
    }
});


btnVergiHesapla.addEventListener("click", function () {

    // ARAÇ TİPİ SEÇİMİ

    for (i = 0; i < aracTipiSelectList.length; i++) {

        // Dizeleri temsil eden `options[]` ifadesi, JavaScript'te birden çok değeri sıralı bir şekilde depolamak ve erişmek için kullanılan dizi veri yapısını ifade eder.
        // Bu kod parçası, `aracTipiSelectList` adındaki bir `<select>` elemanındaki `i` indeksine sahip `<option>` elemanının seçili olup olmadığını kontrol eder.
        if (aracTipiSelectList.options[i].selected) {
            aracTipi = aracTipiSelectList.options[i].value;
        }
    }

    // ARAÇ GÜCÜ SEÇİMİ

    for (i = 0; i < aracGucuSelectList.length; i++) {

        // Bu JavaScript kodu, `aracGucuSelectList` adındaki bir HTML koleksiyonundaki belirli bir indeksteki seçim kutusunun işaretli (checked) olup olmadığını kontrol eder.
        if (aracGucuSelectList[i].checked) {
            aracGucu = aracGucuSelectList[i].value;
        }
    }

    // ARAÇ MODELİ SEÇİMİ

    for (i = 0; i < aracModeliSelectList.length; i++) {

        if (aracModeliSelectList.options[i].selected) {
            aracModeli = aracModeliSelectList.options[i].value;
        }
    }

    // ARAÇ TİPİNE GÖRE VERGİ

    if (aracTipi == "motorsiklet") {
        odenecekVergi = 100;
    } else if (aracTipi == "otomobil") {
        odenecekVergi = 200;
    }


    // ARAÇ GÜCÜNE GÖRE VERGİ

    if (aracGucu == "1000cc-1600cc") {
        odenecekVergi = odenecekVergi + 50
    } else if (aracGucu == "1601cc-2000cc") {
        odenecekVergi = odenecekVergi + 100
    } else if (aracGucu == "2001cc") {
        odenecekVergi = odenecekVergi + 150
    }

    // MODELE GÖRE İNDİRİM

    if (aracModeli >= 2005) {
        odenecekVergi = odenecekVergi - 25;
    }

    sonuc.innerText = "Ödenecek tutar : " + odenecekVergi + " TL";
})

