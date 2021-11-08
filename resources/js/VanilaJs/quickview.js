export const InitQuickView = () => {
    var popupProduct = $(".product-quick-view-modal");
    $(".add-quick-view").on("click", function () {
      popupProduct.addClass("active");
      $("body").addClass("fix");
    });

    $(".btn-close, .canvas-overlay").on("click", function () {
      popupProduct.removeClass("active");
      $("body").removeClass("fix");
    });
  }
