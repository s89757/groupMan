// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  })
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.homepage', {
    url: '/homepage',
    views: {
      'tab-homepage': {
        templateUrl: 'templates/tab-homepage.html',
        controller: 'homepageCtrl'
      }
    }
  })

  .state('tab.activitys', {
      url: '/activitys',
      views: {
        'tab-activitys': {
          templateUrl: 'templates/tab-activitys.html',
          controller: 'activitysCtrl'
        }
      }
    })
	  .state('tab.products', {
	    url: '/products',
	    views: {
	      'tab-products': {
	        templateUrl: 'templates/tab-products.html',
	        controller: 'productsCtrl'
	      }
	    }
	  })
	  //商品详情页
	  .state('tab.productList', {
	    url: '/productList',
	    views: {
	      'tab-products': {
	        templateUrl: 'templates/tab-productList.html',
	        controller: 'productListCtrl'
	      }
	    }
	  })
		.state('tab.shoppings', {
	    url: '/shoppings',
	    views: {
	      'tab-shoppings': {
	        templateUrl: 'templates/tab-shoppings.html',
	        controller: 'shoppingsCtrl'
	      }
	    }
	 })
	  .state('tab.personals', {
	    url: '/personals',
	    views: {
	      'tab-personals': {
	        templateUrl: 'templates/tab-personals.html',
	        controller: 'personalsCtrl'
	      }
	    }
	  })
	  .state('myLocation.html', {
	        templateUrl: 'myLocation.html',
	        controller: 'myLocationnCrl'
	  })

	  .state('tab.registers', {
	    url: '/registers',
	    views: {
	      'tab-registers': {
	        templateUrl: 'templates/tab-registers.html',
	        controller: 'registersCtrl'
	      }
	    }
	  })
	  
	  
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/homepage');

});





		
