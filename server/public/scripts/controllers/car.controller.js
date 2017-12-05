app.controller('CarController', ['CarService', 'CompanyService',function(CarService, CompanyService){
    var self = this;
    self.car = CarService.car;
    self.addNewCar = CarService.addNewCar;
    self.newCar = CarService.newCar;
    self.companies = CompanyService.companies;
}]);