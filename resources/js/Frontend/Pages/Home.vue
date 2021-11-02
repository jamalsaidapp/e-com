<template>
  <div>
    <!--== Start Hero Area Wrapper ==-->
    <section class="home-slider-area">
      <div
        class="
          swiper-container swiper-slide-gap
          home-slider-container
          default-slider-container
        "
      >
        <div class="swiper-wrapper home-slider-wrapper slider-default">
          <div class="swiper-slide">
            <div
              class="slider-content-area"
              data-bg-img="frontend/assets/img/slider/slider-01.jpg"
            >
              <div class="slider-content">
                <h5 class="sub-title">BEST PRICE : $8226</h5>
                <h2 class="title">NEW ARRIVAL</h2>
                <h4>70% OFF THIS WINTER</h4>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  availables, but the majority have suffered alteration in some
                  form.
                </p>
                <a class="btn-slider" href="shop.html">Shop Now</a>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div
              class="slider-content-area"
              data-bg-img="frontend/assets/img/slider/slider-02.jpg"
            >
              <div class="slider-content">
                <h5 class="sub-title">BEST PRICE : $336</h5>
                <h2 class="title">NEW ARRIVAL</h2>
                <h4>70% OFF THIS WINTER</h4>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  availables, but the majority have suffered alteration in some
                  form.
                </p>
                <a class="btn-slider" href="shop.html">Shop Now</a>
              </div>
            </div>
          </div>
        </div>

        <!--== Add Swiper Arrows ==-->
        <div class="swiper-button-next">
          <i class="ion-ios7-arrow-right"></i>
        </div>
        <div class="swiper-button-prev">
          <i class="ion-ios7-arrow-left"></i>
        </div>
      </div>
    </section>
    <!--== End Hero Area Wrapper ==-->

  </div>
</template>

<script>
import { slideHero }  from '../../VanilaJs/slider.js'
export default {
  name: "home",
  mounted() {
        slideHero()
  },
    methods: {
    }
};
</script>

<style lang="scss" scoped>
</style>
