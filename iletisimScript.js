var isimHata = document.getElementById('isim-hata');
var soyisimHata = document.getElementById('soyisim-hata');
var numaraHata = document.getElementById('numara-hata');
var emailHata = document.getElementById('email-hata');
var bolgeHata = document.getElementById('bolge-hata');
var cinsiyetHata = document.getElementById('cinsiyet-hata');
var soruHata = document.getElementById('soru-hata');
var konuHata = document.getElementById('konu-hata');
var mesajHata = document.getElementById('mesaj-hata');
var onaylamaHata =document.getElementById('onaylama-hata');


function onaylamaAd(){
    
    var isim = document.getElementById('Name').value;
    if(isim.length==0){
        isimHata.innerHTML = 'isim girmek zorunludur.';
        return false;
    }
    isimHata.innerHTML = '';
    return true;

}
function onaylamaSoyad(){
    
    var soyisim = document.getElementById('Surname').value;
    if(soyisim.length==0){
        soyisimHata.innerHTML = 'Soyisim girmek zorunludur.';
        return false;
    }
    soyisimHata.innerHTML = '';
    return true;
}
function onaylamaEmail(){
    
    var email = document.getElementById('Email').value;
    if(email.length == 0){
        emailHata.innerHTML = 'Email girmek zorunludur.';
        return false;
    }
    if(!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
        emailHata.innerHTML = 'Email formatında giriniz.';
        return false;
    }
    emailHata.innerHTML = '';
    return true;
        
}
function onaylamaNumara(){
    
    var numara = document.getElementById('Numara').value;
    if(numara.length == 0){
        numaraHata.innerHTML = 'Numara girmek zorunludur.';
        return false;
    }
    
    if(!numara.match(/^[0-9]{10}$/)){
        numaraHata.innerHTML = 'Numara rakamlardan oluşmalıdır ve 10 hane uzunluğunda olmalıdır.';
        return false;
    }
    
    numaraHata.innerHTML = '';
    return true;
        
}
function onaylamaBolge(){
    
    var bolge= document.getElementById('Bolge').value;
    var seciliMi = bolge.selectedOptions;
    if(bolge.length === 0){
       bolgeHata.innerHTML = 'bölge seçmek zorunludur.';
       return false;
    }
    bolgeHata.innerHTML = ''; 
    return true;
}
function onaylamaCinsiyet() {
    var erkekRadio = document.getElementById('Radio1');
    var kadinRadio = document.getElementById('Radio2');

    if (!erkekRadio.checked && !kadinRadio.checked) {
        cinsiyetHata.innerHTML = 'Cinsiyet seçmek zorunludur.';
        return false;
    } 
    cinsiyetHata.innerHTML = '';
    return true;
}
function onaylamaSoru() {
    var check1 = document.getElementById('Check1');
    var check2 = document.getElementById('Check2');
    var check3 = document.getElementById('Check3');

    if (!check1.checked && !check2.checked && !check3.checked) {
        soruHata.innerHTML = 'En az bir seçenek seçmek zorunludur.';
        return false;
    } 
    soruHata.innerHTML = '';
    return true;
}
function onaylamaKonu(){
    
    var konu = document.getElementById('Konu').value;
    if(konu.length==0){
        konuHata.innerHTML = 'Konu girmek zorunludur.';
        return false;
    }
    konuHata.innerHTML = '';
    return true;

}
function onaylamaMesaj(){
    
    var mesaj = document.getElementById('Mesaj').value;
    if(mesaj.length<15){
        mesajHata.innerHTML = 'Mesaj 15 karakterden fazla olmalıdır.';
        return false;
    }
    mesajHata.innerHTML = '';
    return true;

}

function onaylamaButon(){
    if(!onaylamaAd()|| !onaylamaSoyad()||  !onaylamaNumara()|| !onaylamaEmail() ||!onaylamaBolge() || !onaylamaCinsiyet() || !onaylamaSoru() || !onaylamaKonu() || !onaylamaMesaj()){
        
        onaylamaHata.innerHTML= 'Lütfen hataları düzeltiniz.';
        
        return false;
        
 
    }
   
    
}
