function myexternaljsfiles() {
    var app = angular.module("myApp", ["slickCarousel"]);
  
  app.run([
    "slickCarouselConfig", "$compile", "$rootScope",
    function(slickCarouselConfig, $compile, $rootScope){
      slickCarouselConfig.event.init = function(event) {
        var clones = angular.element(event.currentTarget).find('.slick-cloned');
        if (clones.length > 0) {
          angular.forEach(clones, function(clone) {
            var slide = angular.element(clone);
            var scope = slide.scope();
            $compile(slide)(scope);
            $rootScope.$digest();
          })
        }
      };
    }
  ]);
  
  app.controller("mainCtrl", function($scope, $timeout) {
    
    $scope.setActive = function(item, items) {
        console.log(item);
      angular.forEach(items, function(obj) {
        obj.active = item.name === obj.name;
      });
      $timeout(function() {
        $scope.$apply();
      });
    };
    
    $scope.slickConfig = {
      enabled: true,
      autoplay: false,
      draggable: true,
      arrows: true,
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoSpeed: 3000,
      centerMode: true,
      method: {}
    };
    
    $scope.items = {
      1: {
        name: "one",
        active: false
      },
      2: {
        name: "two",
        active: false
      },
      3: {
        name: "three",
        active: false
      },
      4: {
        name: "four",
        active: false
      },
      5: {
        name: "five",
        active: false
      },
      6: {
        name: "six",
        active: false
      }
    };
  });
  
  }