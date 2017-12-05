var app = angular.module('CarApp',['ngRoute']);
//$routeProvider is one piece of ng route that does a lot

app.config(function($routeProvider){
    $routeProvider.when('/', { //giving home page an object
        templateUrl: '/views/company.html',
        controller: 'CompanyController as vm'
    }).when('/cars',{
        templateUrl: '/views/cars.html', //another object
        controller: 'CarController as vm' 
    }).otherwise({
        template: '<h1>OH MY 404!</h1>'
    });
})

// app.controller('MyController', function(){
//     var self = this;
//     self.myMessage = 'This my message to me';
// })

app.controller('CompanyController', function(){
    var self = this;
    self.message = 'What up homie'
})

