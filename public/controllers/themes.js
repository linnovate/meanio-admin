(function() {
  'use strict';

  angular.module('mean.admin').controller('ThemesController', ['$scope', 'Global', '$rootScope', '$http',
    function ($scope, Global, $rootScope, $http) {
      $scope.global = Global;
      $scope.themes = [];

      $scope.init = function () {
        $http({
          method: 'GET',
          url: 'https://bootswatch.com/api/3.json',
          skipAuthorization: true
        }).then(function (response) {
          $scope.themes = response.data.themes;
        }).catch(function (response) {
        });
      };

      $scope.changeTheme = function (theme) {
        // Will add preview options soon
        // $('link').attr('href', theme.css)
        // $scope.selectedTheme = theme
        $('.progress-striped').show();

        $http.get('/api/admin/themes?theme=' + theme.css).then(function (response) {
          if (response.data) {
            window.location.reload();
          }
        }).catch(function (response) {
          alert('error');
          $('.progress-striped').hide();
        });
      };

      $scope.defaultTheme = function () {
        $http.get('/api/admin/themes/defaultTheme').then(function (response) {
          if (response.data) {
            window.location.reload();
          }
        }).catch(function (response) {
          alert('error');
        });
      };
    }
  ]);
})();
