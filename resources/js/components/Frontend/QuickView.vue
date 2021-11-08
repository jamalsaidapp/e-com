<template>
  <div>
    <!--== Start Quick View Menu ==-->
    <aside class="product-quick-view-modal">
      <div class="product-quick-view-inner">
        <div class="product-quick-view-content">
          <button type="button" class="btn-close">
            <span class="close-icon"><i class="fa fa-close"></i></span>
          </button>
          <div class="row">
            <div class="col-lg-6 col-md-6 col-12">
              <div class="thumb">
                <img v-if="product.image"
                  :src="product.image.url"
                  :alt="product.image.nom"
                />
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-12">
              <div class="content">
                <h4 class="title">{{ product.nom }}</h4>
                <div class="prices">
                  <del class="price-old">{{ product.prix }} DH</del>
                  <span class="price">{{ product.old_prix }} DH</span>
                </div>
                <p>{{ product.description }}</p>
                <div class="quick-view-select">
                  <div class="quick-view-select-item">
                    <label for="forSizes" class="form-label">Size:</label>
                    <select class="form-select" id="forSizes" required>
                      <option selected value="">s</option>
                      <option>m</option>
                      <option>l</option>
                      <option>xl</option>
                    </select>
                  </div>
                  <div class="quick-view-select-item">
                    <label for="forColors" class="form-label">Color:</label>
                    <select class="form-select" id="forColors" required>
                      <option selected value="">red</option>
                      <option>green</option>
                      <option>blue</option>
                      <option>yellow</option>
                      <option>white</option>
                    </select>
                  </div>
                </div>
                <div class="action-top">
                  <div class="pro-qty">
                    <input
                      type="text"
                      id="quantity4"
                      title="Quantity"
                      value="1"
                    />
                  </div>
                  <button class="btn btn-black">Add to cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="canvas-overlay"></div>
    </aside>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {},
    };
  },
  mounted() {
    this.$root.$on("fillQuickview", (product) => {
      this.product = product;
    });
  },
};
</script>

<style lang="scss" scoped>
</style>
