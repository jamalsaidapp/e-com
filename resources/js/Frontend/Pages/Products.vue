<template>
    <div>
         <!--== Start Page Header Area Wrapper ==-->
    <div class="page-header-area">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <div class="page-header-content">
              <nav class="breadcrumb-area">
                <ul class="breadcrumb">
                  <li><a href="#">Home</a></li>
                  <li class="breadcrumb-sep">/</li>
                  <li>Products</li>
                </ul>
              </nav>
              <h4 class="title">Products</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--== End Page Header Area Wrapper ==-->

    <!--== Start Product Area Wrapper ==-->
    <section class="product-area product-inner-area">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="product-header-wrap d-md-flex justify-content-md-between align-items-center">
              <div class="grid-list-option">
                <nav>
                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <button class="nav-link active" id="nav-grid-tab" data-bs-toggle="tab" data-bs-target="#nav-grid" type="button" role="tab" aria-controls="nav-grid" aria-selected="false"><i class="fa fa-th"></i></button>
                    <button class="nav-link" id="nav-list-tab" data-bs-toggle="tab" data-bs-target="#nav-list" type="button" role="tab" aria-controls="nav-list" aria-selected="true"><i class="fa fa-th-list"></i></button>
                  </div>
                </nav>
              </div>
              <div class="nav-short-area d-md-flex align-items-center">
                <p class="show-product">Showing 1 - 18 of 33 result</p>
                <div class="toolbar-shorter">
                  <label for="SortBy">Sort by</label>
                  <select id="SortBy" class="form-select" aria-label="Sort by">
                    <option value="manual">Featured</option>
                    <option value="best-selling">Best Selling</option>
                    <option value="title-ascending" selected>Alphabetically, A-Z</option>
                    <option value="title-descending">Alphabetically, Z-A</option>
                    <option value="price-ascending">Price, low to high</option>
                    <option value="price-descending">Price, high to low</option>
                    <option value="created-descending">Date, new to old</option>
                    <option value="created-ascending">Date, old to new</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="product-body-wrap">
              <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade active show" id="nav-grid" role="tabpanel" aria-labelledby="nav-grid-tab">
                  <div class="row">
                    <div v-for="product in products" :key="product.id_prd" class="col-lg-3">
                      <!--== Start Shop Item ==-->
                      <div class="product-item">
                        <div class="inner-content">
                          <div class="product-thumb">
                            <a href="#">
                              <img class="w-100" src="frontend/assets/img/shop/2.jpg" alt="Image-HasTech">
                            </a>
                            <span v-if="product.sale" class="sale-title sticker">Sale</span>
                            <span v-if="product.remise" class="percent-count sticker">-{{product.remise.pourcentage}}%</span>
                            <div class="product-action">
                              <div class="addto-wrap">
                                <a class="add-cart" href="#">
                                  <i class="zmdi zmdi-shopping-cart-plus icon"></i>
                                </a>
                                <a class="add-wishlist" href="#">
                                  <i class="zmdi zmdi-favorite-outline zmdi-hc-fw icon"></i>
                                </a>
                                <a class="add-quick-view" href="#">
                                  <i class="zmdi zmdi-search icon"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div class="product-desc">
                            <div class="product-info">
                              <h4 class="title"><a href="#"> {{product.nom}}</a></h4>
                              <div class="star-content">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-half-o"></i>
                              </div>
                              <div class="prices">
                                <span class="price">{{product.prix}} DH</span>
                                <span class="price-old">{{product.old_prix}} DH</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!--== End Shop Item ==-->
                    </div>

                  </div>
                  <!--== Start Pagination Wrap ==-->
                  <div class="row">
                    <div class="col-12">
                      <div class="pagination-content-wrap border-top">
                        <nav class="pagination-nav">
                          <ul class="pagination justify-content-center">
                            <li><a class="disabled active prev" href="shop.html">Prev</a></li>
                            <li><a class="disabled active" href="shop.html">1</a></li>
                            <li><a href="shop.html">2</a></li>
                            <li><a class="next" href="shop.html">Next</a></li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                  <!--== End Pagination Wrap ==-->
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--== End Product Area Wrapper ==-->
    </div>
</template>

<script>
    export default {
    data() {
        return {
            products: []
        }
    },
    created () {
        this.getProducts()
    },
    methods: {
       async getProducts(){
           let request = await axios.get('/api/products')
           this.products = request.data
        }
    }
    }
</script>

<style lang="scss" scoped>

</style>
