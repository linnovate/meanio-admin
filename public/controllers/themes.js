'use strict';
angular.module('mean.admin').controller('MaterialThemesCtrl',
    function ($scope, $mdColorPalette, $window) {
        $scope.colors = Object.keys($mdColorPalette);
        $scope.mdURL = 'https://www.google.com/design/spec/style/color.html#color-color-palette';
        $scope.primary = localStorage.getItem('themePrimaryPalette') || 'purple';
        $scope.accent = localStorage.getItem('themeAccentPalette') || 'green';
        $scope.isPrimary = true;
        $scope.selectTheme = function (color) {
            if ($scope.isPrimary) {
                $scope.primary = color;
                $scope.isPrimary = false;
            }
            else {
                $scope.accent = color;
                $scope.isPrimary = true;
            }
        };
        $scope.applyTheme = function () {
            localStorage.setItem('themePrimaryPalette', $scope.primary);
            localStorage.setItem('themeAccentPalette', $scope.accent);
            $window.location.reload()
        };
        /*  function savePalette (name){
         localStorage.setItem('themePrimaryPalette', name);
         document.location.reload();
         }

         $scope.savePalette = savePalette;
         $scope.palettes = palettes;
         $scope.currentPalette = localStorage.getItem('themePrimaryPalette') || 'indigo';*/
    })
    .directive('themePreview', function () {
        console.log('ssssssss')
        return {
            restrict: 'E',
            templateUrl: 'admin/views/theme-preview.html',
                        scope: {
                            primary: '=',
                accent: '='
            },
            controller: function ($scope, $mdColors, $mdColorUtil) {
                $scope.getColor = function (color) {
                    return $mdColorUtil.rgbaToHex($mdColors.getThemeColor(color))
                };
            }
        }
    })
    .directive('mdJustified', function () {
        return {
            restrict: 'A',
            compile: function (element, attrs) {
                var layoutDirection = 'layout-' + (attrs.mdJustified || "row");
                element.removeAttr('md-justified');
                element.addClass(layoutDirection);
                element.addClass("layout-align-space-between-stretch");
                return angular.noop;
            }
        };
    });