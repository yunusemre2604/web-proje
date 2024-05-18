<?php
session_start();

require "yonlendirmeFonksiyonlari.php";
if($_SERVER["REQUEST_METHOD"]=="POST"){
    $email=$_POST["email"];
    $password=$_POST["password"];
    $Password="b231210378";
    $Email="b231210378@sakarya.edu.tr";
    $username = explode('@', $email)[0];
    if(empty($email) || empty($password)){
        echo ("Lütfen boş yerleri doldurunuz.");
        siteyeGitme(3);
    }else if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
        echo ("Lütfen geçerli bir e-posta adresi giriniz.");
        siteyeGitme(3);

    }else{
        
        if(($Email) != $email || ($Password != $password)){
            echo("Kullanıcı adı ya da şifreyi yanlış girdiniz.");
            siteyeGitme(3);
        }else{
            $_SESSION["LogedIn"]=true;
            $_SESSION["username"]=$email;
            echo 'Hoşgeldiniz '. $username .  ', siteye yönlendiriliyorsunuz.';
            siteyeGit("anasayfa.php",3);
        }
    
    }

}




?>