myModule.controller("Section1Ctrl", function($scope, $state) {
	console.log("==SOY SECTION 1 CTRL====");

    $scope.myName   = "";
    $scope.myKeword = "";

    $scope.sect1FormSubmHndl = function(){
    	if($scope.myKeword.length > 0){
    		$state.go('Section2State',{name:$scope.myName, keyword:$scope.myKeword});
    	}   	
    }
});
