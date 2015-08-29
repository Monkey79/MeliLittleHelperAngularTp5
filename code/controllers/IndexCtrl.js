myModule.controller('IndexCtrl', function($scope, $state) {
	console.log("==SOY INDEX CTRL====");

    $scope.sectionBtnClickHndl = function($event) {
        var targetId = $event.target.id;

        if (targetId === 'sect1')
            $state.go('Section1State', {});
        else
            $state.go('Section2State', {});
    }
});
