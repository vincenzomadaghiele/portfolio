<template>
<!-- eslint-disable max-len -->
    <div class="container">
        <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-white">
        <a class="navbar-brand" href="#work">work</a>
        <a class="navbar-brand" href="#contact">contact</a>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item">
                <a class="nav-link" href="https://raw.githubusercontent.com/vincenzomadaghiele/portfolio/master/Vincenzo%20Madaghiele%20CV.pdf" target="_blank" rel="noopener noreferrer">CV</a>
            </li>
            </ul>
            <a class="navbar-text active" href="#">
                Vincenzo Madaghiele
            </a>
        </div>
        </nav>
        <br>
        <div class="row text-center" >
            <div class="col-5"></div>
            <div class="col-2">
                <img src="../assets/profile_photo.jpg" class="img-fluid" alt="Responsive image" style="border-radius: 50%">
            </div>
            <div class="col-5"></div>
            <div class="col">
                <br>
                <h3><strong>Vincenzo Madaghiele</strong></h3>
                <h5 class="text-secondary">[Music / Nature / Code]</h5>
            </div>
        </div>
        <div id="work">
        <br><br>
        <div class="row text-center">
            <div class="col-3">
                <div class="position-relative pic">
                    <img src="../assets/mingus.jpg" class="img-fluid my-3" alt="Responsive image">
                    <a href="https://github.com/vincenzomadaghiele/MINGUS" class="text-dark stretched-link" target="_blank" rel="noopener noreferrer">
                    <h5><strong>MINGUS</strong></h5>
                    </a>
                    <p class="text-secondary">
                        Transformer deep neural network for jazz music modeling and generation
                    </p>
                </div>
            </div>
            <div class="col-3">
                <div class="position-relative pic">
                <img src="../assets/biodiversity.png" class="img-fluid my-3" alt="Responsive image">
                <a href="https://github.com/vincenzomadaghiele/Regression-of-biodiversity-indicators" class="text-dark stretched-link" target="_blank" rel="noopener noreferrer">
                    <h5><strong>Regression of biodiversity species richness</strong></h5>
                </a>
                <p class="text-secondary ">
                    Measuring the species richness in forests from satellite observations
                </p>
                </div>
            </div>
            <div class="col-3">
                <div class="position-relative pic">
                <img src="../assets/meditation.png" class="img-fluid my-3" alt="Responsive image">
                <a href="https://github.com/vincenzomadaghiele/Meditation-machine" class="text-dark stretched-link" target="_blank" rel="noopener noreferrer">
                    <h5><strong>Meditation Machine</strong></h5>
                </a>
                <p class="text-secondary">
                    Sonification of a particle system with a granular synthesizer
                </p>
                </div>
            </div>
            <div class="col-3">
                <div class="position-relative pic">
                <img src="../assets/music.jpg" class="img-fluid my-3" alt="Responsive image">
                <a href="https://soundcloud.com/vincenzo-madaghiele" class="text-dark stretched-link" target="_blank" rel="noopener noreferrer">
                    <h5><strong>Short compositions</strong></h5>
                </a>
                <p class="text-secondary">My music</p>
                </div>
            </div>
        </div>
        <br>
        <div class="row text-center">
            <div class="col-3">
                <div class="position-relative pic">
                <img src="../assets/goldfish2.png" class="img-fluid my-3" alt="Responsive image">
                <a href="https://drive.google.com/drive/folders/1PyN-m7A7hWVaCYv9jLPslvot5T1rKrsk" class="text-dark stretched-link" target="_blank" rel="noopener noreferrer">
                    <h5><strong>Revenge of the Goldfish</strong></h5>
                </a>
                <p class="text-secondary">
                    3D reconstruction of a picture by Sandy Skoglund
                </p>
                </div>
            </div>
            <div class="col-3">
                <div class="position-relative pic">
                <img src="../assets/leaf.jpg" class="img-fluid my-3" alt="Responsive image">
                <a href="https://github.com/tommasocarluccio/IOT_Leaf" class="text-dark stretched-link" target="_blank" rel="noopener noreferrer">
                    <h5><strong>LEAF</strong></h5>
                </a>
                <p class="text-secondary">
                    IoT sensor for air quality measuring in home environment
                </p>
                </div>
            </div>
            <div class="col-3">
                <div class="position-relative pic">
                <img src="../assets/shop.png" class="img-fluid my-3" alt="Responsive image">
                <a href="https://github.com/tommasocarluccio/2020_ORTA_ShopOrderingProblem" class="text-dark stretched-link" target="_blank" rel="noopener noreferrer">
                    <h5><strong>Shop Ordering Problem</strong></h5>
                </a>
                <p class="text-secondary">
                    Operational Research LP mathematical model
                </p>
                </div>
            </div>
            <div class="col-3">
                <div class="position-relative pic">
                <img src="../assets/photos.jpg" class="img-fluid my-3" alt="Responsive image">
                <a href="https://www.instagram.com/vincenzo_madaghiele/" class="text-dark stretched-link" target="_blank" rel="noopener noreferrer">
                    <h5><strong>Pictures</strong></h5>
                </a>
                <p class="text-secondary">
                    Travel photographs
                </p>
                </div>
            </div>
        </div>
        <br><br>
    </div>
    <br>
    <div id="contact">
        <div class="row text-center">
            <div class="col-3">
            </div>
            <div class="col-6">
                <h4>Contact</h4><br>
                <h6>email:
                <a href = "mailto: vincenzo.madaghiele@gmail.com" class="text-dark" target="_blank" rel="noopener noreferrer">
                vincenzo.madaghiele@gmail.com
                </a>
                </h6>
                <h6>linkedin:
                <a href="https://www.linkedin.com/in/vincenzo-madaghiele/" class="text-dark" target="_blank" rel="noopener noreferrer">
                vincenzo-madaghiele
                </a>
                </h6>
                <a href="https://github.com/vincenzomadaghiele" class="text-dark" target="_blank" rel="noopener noreferrer">
                <font-awesome-icon :icon="['fab', 'github']" size="2x" class="cursor-change m-3 p-1" />
                </a>
                <a href="https://www.instagram.com/vincenzo_madaghiele/" class="text-dark" target="_blank" rel="noopener noreferrer">
                <font-awesome-icon :icon="['fab', 'instagram']" size="2x" class="cursor-change m-3 p-1" />
                </a>
                <a href="https://vimeo.com/user86737112" class="text-dark" target="_blank" rel="noopener noreferrer">
                <font-awesome-icon :icon="['fab', 'vimeo-v']" size="2x" class="cursor-change m-3 p-1" />
                </a>
            </div>
            <div class="col-3">
            </div>
        </div>
    </div>
    <br><br><br>
</div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String,
  },
  created() {
    document.title = 'Vincenzo Madaghiele - portfolio';
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Raleway');

html, body {
  font-family: 'Raleway', sans-serif;
}

#app {
  font-family: 'Raleway', sans-serif;
}

html {
  scroll-behavior: smooth;
}
.cursor-change {
  cursor: pointer;
}
.pic img{
  opacity: 1;
  filter: alpha(opacity=100);
}
.pic:hover img{
  opacity: 0.8;
  filter: alpha(opacity=30);
}
</style>
