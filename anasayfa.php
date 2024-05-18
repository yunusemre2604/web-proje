<?php 
session_start();


?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet"  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>
    <div class="ust-kisim">
        <nav class="navbar navbar-expand-lg navbar-bg fixed-top  " >
            <div class="container p-0">
              <a class="navbar-brand " href="anasayfa.php" >
                <img class = "img-fluid logo" src="images/hitit.png" alt="">
              </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 " >
                  <li class="nav-item d-flex align-items-center p-3 ">
                    <a class="nav-link " aria-current="page" href="anasayfa.php">Hakkımda</a>
                    <span class = "seperator">|</span>
                  </li>
                  
                  <li class="nav-item d-flex align-items-center p-3">
                    <a class="nav-link" href="ozgecmis.html">Özgeçmiş</a>
                    <span class = "seperator">|</span>
                  </li>
                  <li class="nav-item d-flex align-items-center p-3">
                    <a class="nav-link" href="sehrim.html">Şehrim</a>
                    <span class = "seperator">|</span>
                  </li>
                  <li class="nav-item d-flex align-items-center p-3">
                    <a class="nav-link" href="takimim.html">Takımım</a>
                    <span class = "seperator">|</span>
                  </li>
                  <li class="nav-item d-flex align-items-center p-3" >
                    <a class="nav-link" href="ilgi-alanlarim.html">İlgi Alanlarım</a>
                    <span class = "seperator">|</span>
                  </li>
                  <li class="nav-item d-flex align-items-center p-3">
                    <a class="nav-link" href="iletisim.html">İletişim</a>
                    
                  </li>
                    
                </ul>
                
              </div>
            </div>
          </nav>

          <div class="card w-25 p-3 mt-5 mx-auto font-ayar hakkimda" style="letter-spacing: 3px; " id="hakkimda">
          
          <h2 class="text-light text-center">HAKKIMDA</h2>
          <img class="w-75 h-75 mx-auto" src = "images/fotom.jpg" alt="">
          <div class="card-body">
            <h3 class="text-light text-center">Yunus Emre YILDIZ</h3>
            <h5 class="text-light text-center">Bilgisayar Mühendisliği Öğrencisi</h5>
          </div>
          
      </div>
      <div class="row row-cols-1 row-cols-md-2 g-4 card-ayar me-1">
          <div class="col">
            <div class="card" >
              
              <div class="card-body">
                <h1 class="card-title text-light hakkimda-font ">Merhaba, <br> Ben Yunus</h1> 
                <hr>
                <p class="card-text hakkimda-font lh-lg text-light text-center">12 ekim 2004 tarihinde Eskişehir’de dünyaya geldim. Matematiğe ve bilgisayara duyduğum ilgi nedeniyle bilgisayar mühendisi olmaya karar verdim. Futbol oynamaktan, spor yapmaktan keyif alırım. Futbol maçlarını takip etmekten keyif alırım. Hobilerim ise; müzik dinlemek, film izlemek, bilgisayar oyunu oynamak. Ayrıca, arkadaşlarımla vakit geçirmeyi, tarihle alakalı videolar izlemeyi çok severim.</p>
              </div>
            </div>
          </div>
          <div class="col">
              <div class="row row-cols-1 row-cols-md-2 g-4 ">
                  <div class="col">
                    <div class="card">
                      <img src="images/yuzme.jpg" class="img-fluid hakkimda-border hakkimda-boyut" alt="...">
                      
                    </div>
                  </div>
                  <div class="col ">
                    <div class="card">
                      <img src="images/oyun.jpg" class="img-fluid hakkimda-border " alt="...">
                      
                    </div>
                  </div>
                  <div class="col">
                    <div class="card">
                      <img src="images/matematik.jpg" class="img-fluid hakkimda-border  hakkimda-boyut" alt="...">
                      
                    </div>
                  </div>
                  <div class="col">
                    <div class="card">
                      <img src="images/futbol.jpg" class=" img-fluid hakkimda-border" alt="...">
                     
                    </div>
                  </div>
                </div>
          </div>
          
        </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous">



       








    </script>
    
    
</body>
</html>
