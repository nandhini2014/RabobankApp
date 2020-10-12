
 var app = angular.module('customerApp', ['ngFileUpload'])
    app.controller('customerCtrl', function ($scope, $window) {
        $scope.SelectFile = function (file) {
            $scope.SelectedFile = file;
        };
        $scope.Upload = function () {
                if (typeof (FileReader) != "undefined") {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        var customers = new Array();
                        var rows = e.target.result.split("\r\n");
                        for (var i = 1; i < rows.length; i++) {
                            var cells = rows[i].split(",");
                           if (cells.length > 1) {
                                var customer = {};
                                customer.firstName = cells[0].slice(1,-1);
                                customer.surName = cells[1].slice(1,-1);
                                customer.issueCnt = cells[2];
                                customer.dob = cells[3].slice(1,-1);
                                customers.push(customer);
                                $scope.$apply(function () {
                                    $scope.Customers = customers;
                                    $scope.IsVisible = true;
                                });
                            }
                        }
 
                    }
                    reader.readAsText($scope.SelectedFile);
                } 
           
        }
    });

