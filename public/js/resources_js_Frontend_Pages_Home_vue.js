"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Frontend_Pages_Home_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Frontend/Pages/Home.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Frontend/Pages/Home.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VanilaJs_slider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../VanilaJs/slider.js */ "./resources/js/VanilaJs/slider.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "home",
  mounted: function mounted() {
    (0,_VanilaJs_slider_js__WEBPACK_IMPORTED_MODULE_0__.slideHero)();
  },
  methods: {}
});

/***/ }),

/***/ "./resources/js/VanilaJs/slider.js":
/*!*****************************************!*\
  !*** ./resources/js/VanilaJs/slider.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "slideHero": () => (/* binding */ slideHero)
/* harmony export */ });
function backgroundStyle() {
  var bgSelector = $("[data-bg-img]");
  bgSelector.each(function (index, elem) {
    var element = $(elem),
        bgSource = element.data('bg-img');
    element.css('background-image', 'url(' + bgSource + ')');
  });
}

var slideHero = function slideHero() {
  backgroundStyle();
  new Swiper(".default-slider-container", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: true,
    speed: 500,
    spaceBetween: 0,
    effect: "fade",
    fadeEffect: {
      crossFade: true
    },
    autoplay: {
      delay: 4000
    },
    navigation: {
      nextEl: ".default-slider-container .swiper-button-next",
      prevEl: ".default-slider-container .swiper-button-prev"
    }
  });
};

/***/ }),

/***/ "./resources/js/Frontend/Pages/Home.vue":
/*!**********************************************!*\
  !*** ./resources/js/Frontend/Pages/Home.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Home_vue_vue_type_template_id_51fde00e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=51fde00e&scoped=true& */ "./resources/js/Frontend/Pages/Home.vue?vue&type=template&id=51fde00e&scoped=true&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/Frontend/Pages/Home.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_51fde00e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Home_vue_vue_type_template_id_51fde00e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "51fde00e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Frontend/Pages/Home.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Frontend/Pages/Home.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/Frontend/Pages/Home.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Frontend/Pages/Home.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Frontend/Pages/Home.vue?vue&type=template&id=51fde00e&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Frontend/Pages/Home.vue?vue&type=template&id=51fde00e&scoped=true& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_51fde00e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_51fde00e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_51fde00e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=template&id=51fde00e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Frontend/Pages/Home.vue?vue&type=template&id=51fde00e&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Frontend/Pages/Home.vue?vue&type=template&id=51fde00e&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Frontend/Pages/Home.vue?vue&type=template&id=51fde00e&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("section", { staticClass: "home-slider-area" }, [
        _c(
          "div",
          {
            staticClass:
              "\n        swiper-container swiper-slide-gap\n        home-slider-container\n        default-slider-container\n      ",
          },
          [
            _c(
              "div",
              {
                staticClass:
                  "swiper-wrapper home-slider-wrapper slider-default",
              },
              [
                _c("div", { staticClass: "swiper-slide" }, [
                  _c(
                    "div",
                    {
                      staticClass: "slider-content-area",
                      attrs: {
                        "data-bg-img":
                          "frontend/assets/img/slider/slider-01.jpg",
                      },
                    },
                    [
                      _c("div", { staticClass: "slider-content" }, [
                        _c("h5", { staticClass: "sub-title" }, [
                          _vm._v("BEST PRICE : $8226"),
                        ]),
                        _vm._v(" "),
                        _c("h2", { staticClass: "title" }, [
                          _vm._v("NEW ARRIVAL"),
                        ]),
                        _vm._v(" "),
                        _c("h4", [_vm._v("70% OFF THIS WINTER")]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "\n                There are many variations of passages of Lorem Ipsum\n                availables, but the majority have suffered alteration in some\n                form.\n              "
                          ),
                        ]),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "btn-slider",
                            attrs: { href: "shop.html" },
                          },
                          [_vm._v("Shop Now")]
                        ),
                      ]),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "swiper-slide" }, [
                  _c(
                    "div",
                    {
                      staticClass: "slider-content-area",
                      attrs: {
                        "data-bg-img":
                          "frontend/assets/img/slider/slider-02.jpg",
                      },
                    },
                    [
                      _c("div", { staticClass: "slider-content" }, [
                        _c("h5", { staticClass: "sub-title" }, [
                          _vm._v("BEST PRICE : $336"),
                        ]),
                        _vm._v(" "),
                        _c("h2", { staticClass: "title" }, [
                          _vm._v("NEW ARRIVAL"),
                        ]),
                        _vm._v(" "),
                        _c("h4", [_vm._v("70% OFF THIS WINTER")]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "\n                There are many variations of passages of Lorem Ipsum\n                availables, but the majority have suffered alteration in some\n                form.\n              "
                          ),
                        ]),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "btn-slider",
                            attrs: { href: "shop.html" },
                          },
                          [_vm._v("Shop Now")]
                        ),
                      ]),
                    ]
                  ),
                ]),
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "swiper-button-next" }, [
              _c("i", { staticClass: "ion-ios7-arrow-right" }),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "swiper-button-prev" }, [
              _c("i", { staticClass: "ion-ios7-arrow-left" }),
            ]),
          ]
        ),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);