myModule.controller('IndexCtrl', function($scope, $state) {
    $scope.sectionBtnClickHndl = function($event) {
        var targetId = $event.target.id;

        if (targetId === 'sect1')
            $state.go('Section1Ctrl', {});
        else
            $state.go('Section2Ctrl', {});
    }
});
