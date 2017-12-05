app.service('CarService', ['$http', function ($http) {
    var self = this; // self refers to the service. Inside the controller, self refers to the controller.
    
    self.car = { list: [] }; //turn this into object, one property which is an array
    self.newCar = {};

    self.getCar = function () {
        $http({
            method: 'GET',
            url: '/cars'
        }).then(function (response) {
            console.log('response', response);
            self.car.list = response.data; 

        });
    };
    self.getCar();

    self.addNewCar = function (newCar) {
        console.log('clicked');
        $http({
            method: 'POST',
            url: '/cars',
            data: newCar
        }).then(function (response) {
            console.log('response', response);


        })
    }

}]);