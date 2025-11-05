
    (function() {
      var cdnOrigin = "https://cdn.shopify.com";
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills-legacy.CxAH3j_U.js","/cdn/shopifycloud/checkout-web/assets/c1/app-legacy.OJYP-RCn.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-nl-legacy.BclFzVCs.js","/cdn/shopifycloud/checkout-web/assets/c1/page-OnePage-legacy.B_ZfZdDh.js","/cdn/shopifycloud/checkout-web/assets/c1/LocalizationExtensionField-legacy.DyBrBblt.js","/cdn/shopifycloud/checkout-web/assets/c1/RememberMeDescriptionText-legacy.B9B2sfNp.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayOptInDisclaimer-legacy.C7wSCr8A.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentButtons-legacy.DScdqcVN.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblemsLineItemList-legacy.DNGWdBzv.js","/cdn/shopifycloud/checkout-web/assets/c1/DeliveryMethodSelectorSection-legacy.Bv8swC-j.js","/cdn/shopifycloud/checkout-web/assets/c1/useEditorShopPayNavigation-legacy.DxkBhiRZ.js","/cdn/shopifycloud/checkout-web/assets/c1/VaultedPayment-legacy.C0sDTDLm.js","/cdn/shopifycloud/checkout-web/assets/c1/SeparatePaymentsNotice-legacy.DQsfYFSK.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown-legacy.CmOULvJj.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal-legacy.CYO52ivv.js","/cdn/shopifycloud/checkout-web/assets/c1/StackedMerchandisePreview-legacy.DauLOeY3.js","/cdn/shopifycloud/checkout-web/assets/c1/component-ShopPayVerificationSwitch-legacy.sP8CBdmJ.js","/cdn/shopifycloud/checkout-web/assets/c1/useSubscribeMessenger-legacy.BuDGpkeU.js","/cdn/shopifycloud/checkout-web/assets/c1/index-legacy.Y9cRfR7v.js","/cdn/shopifycloud/checkout-web/assets/c1/PayButtonSection-legacy.D0hC4EzH.js"];
      var styles = [];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [cdnOrigin].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  