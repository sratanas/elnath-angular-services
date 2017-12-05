app.service('CompanyService',['$http', function($http){
    var self = this; // self refers to the service. Inside the controller, self refers to the controller.
    
    
    self.companies = {list: []} ; //turn this into object, one property which is an array
    self.newCompany = {};

    self.getCompanies = function () { 
        $http({
            method: 'GET',
            url: '/companies'
        }).then(function(response){ 
            console.log('response', response); 
            self.companies.list = response.data; //blowing away entirely?

        });   
    };
self.getCompanies();

self.addNewCompany = function(newCompany){
    console.log('clicked');
    $http({
        method: 'POST',
        url: '/companies',
        data: newCompany
    }).then(function(response){
        console.log('response', response);
        // self.newCompany.push(self.companies.list)
        // self.newCompany = {};
        // self.getCompanies();
        
    })
}
}]);