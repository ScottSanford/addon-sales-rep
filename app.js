angular.module("intTemplatesApp", [
        'ngRoute', 
        'ui.bootstrap',
        'ngAnimate', 
        'growlNotifications'
        ])

        .config(function ($routeProvider, $compileProvider) { 

              $compileProvider.imgSrcSanitizationWhitelist(/^(mfly:\/\/data\/entry|https:\/\/)/);  
              $routeProvider
                .when('/', {
                    templateUrl: 'categories/categories.html',
                    controller: 'CategoriesCtrl'
                })
                .when('/templates', {
                    templateUrl: 'templates/templates.html',
                    controller: 'TemplatesCtrl'
                })
                .when('/item', {
                    templateUrl: 'item/item.html',
                    controller: 'ItemCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                });
                
          });
        