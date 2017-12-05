app.controller('CompanyController', ['CompanyService',function(CompanyService){ //dependency injection ('CompanyService' etc)
    var self = this;
    self.message = 'What up homie'
    self.companies = CompanyService.companies;//refers to whatever this company's service is
    self.addNewCompany = CompanyService.addNewCompany;
    self.newCompany = CompanyService.newCompany;
}])
