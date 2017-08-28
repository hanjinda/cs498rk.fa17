var angularTemplate = angular.module('angularTemplate', []);

angularTemplate.controller('AngularTemplateCtrl', function($scope, $http) {

  // initialize all the models (i.e., data structures) that you'll reference in the HTML
  $scope.courseInfo = '';

  // load data from json file
  $http.get('js/dataTemplate.json').then(function(d) {
    $scope.courseInfo = d.data;
  });

});