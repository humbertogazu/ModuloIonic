angular.module('modalController', [])

.controller('formController', function($scope, $ionicModal) {
  $ionicModal.fromTemplateUrl('templates/form.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });
  $scope.openModal = function(){
    $scope.modal.show();
  }
  $scope.closeModal = function(){
    $scope.modal.hide();
  }
});