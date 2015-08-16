angular.module("saddle")
.controller("RootCtrl", [
  "$scope",
  "$state",
  function($scope, $state){

    // Define links to be seen on navbar
    function NavbarLink(state, text, iconClasses){
      this.state = state;
      this.text = text;
      this.iconClasses = iconClasses || "";
    }

    var navbarLinks = [
      new NavbarLink("reservations", "Reserves", "fa-book"),
      //new NavbarLink("day", "Reserves"),
      new NavbarLink("horses", "Cavalls", "saddlefont-horseshoe"),
      new NavbarLink("defaultOutings", "Excursions predefinides", "saddlefont-directions")
    ];

    $scope.menuHidden = true;
    $scope.toggleMenu = function(){
      $scope.menuHidden = !$scope.menuHidden;
    }
    $scope.hideMenu = function(){
      $scope.menuHidden = true;
    }

    /**
     * Transitions to previous state
     */
    function goBack(){
      $state.go($scope.$previousState, $scope.$previousStateParams);
    }

    $scope.navbarLinks = navbarLinks;
    $scope.goBack = goBack;

  }]);