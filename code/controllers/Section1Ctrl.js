myModule.controller("Section1Ctrl", function($scope, $state) {
    $scope.myName   = "";
    $scope.myKeword = "";

    $scope.sect1FormSubmHndl = function(){
    	if($scope.myKeword.length > 0){
    		$state.go('Section2Ctrl',{name:$scope.myName, keyword:$scope.myKeword});
    	}   	
    }
});
