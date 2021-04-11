<template>
    <div class="container">
        <nav class="navbar sticky-top navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="#">work</a>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item">
                <a class="nav-link" href="#">contact</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">CV</a>
            </li>
            </ul>
            <span class="navbar-text active">
            Vincenzo Madaghiele
            </span>
        </div>
        </nav>
        <br><br>
        <div class="row text-center">
            <div class="col-5"></div>
            <div class="col-2">
                <img src="../assets/profile_photo.jpg" class="img-fluid" alt="Responsive image">
            </div>
            <div class="col-5"></div>
            <div class="col">
                <br><br>
                <h3>Vincenzo Madaghiele</h3>
                <h5 class="text-secondary">[Music / Nature / Code]</h5>
            </div>
        </div>
        <br><br>
        <div class="row text-center">
            <div class="col-4">
                <h4>MINGUS</h4>
                <h6 class="text-secondary">
                    Transformer deep neural network for jazz music modeling and generation
                </h6>
            </div>
            <div class="col-4">
                <h4>Regression of biodiversity indicator from satellite observations</h4>
                <h6 class="text-secondary">
                    Measuring the species richness in forest habitats
                    from satellite observations and environmental parameters only
                </h6>
            </div>
            <div class="col-4">
                <h4>Meditation Machine</h4>
                <h6 class="text-secondary">
                    Sonification of a particle system with a granular synthesizer
                </h6>
            </div>
        </div>
        <br>
        <div class="row text-center">
            <div class="col-4">
                <h4>Music</h4>
                <h6 class="text-secondary">Music I have composed</h6>
            </div>
            <div class="col-4">
                <h4>Revenge of the Goldfish (3D)</h4>
                <h6 class="text-secondary">
                    3D reconstruction of a picture by Sandy Skoglund
                </h6>
            </div>
            <div class="col-4">
                <h4>LEAF</h4>
                <h6 class="text-secondary">
                    IoT sensor for air quality measuring in home environment
                </h6>
            </div>
        </div>
        <br>
        <div class="row text-center">
            <div class="col-4">
                <h4></h4>
                <h6 class="text-secondary">
                </h6>
            </div>
            <div class="col-4">
                <h4>Shop Ordering Problem</h4>
                <h6 class="text-secondary">
                    Operational Research LP mathematical model
                </h6>
            </div>
            <div class="col-4">
                <h4></h4>
                <h6 class="text-secondary">
                </h6>
            </div>
        </div>
        <br><br>
    </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String,
  },
};
</script>

<style>
img {
  border-radius: 50%;
}
</style>
