var meliHelperInfo_obj;

function showMeliResult(resultsArr, $scope) {
    for (var i = 0; i < resultsArr.length; i++) {
    	meliHelperInfo_obj

        $scope.meliHelperInfo = {
            thumbnail: resultsArr[i].thumbnail,
            permalink: resultsArr[i].permalink
        };
        $scope.meliHelperInfoList.push($scope.meliHelperInfo);
    };
}

myModule.controller("Section2Ctrl", function($scope, $state, $stateParams, $http) {
    $scope.nameReceived = (typeof $stateParams.name !== 'undefined')?$stateParams.name:'pepe';
    $scope.kewordReceived = (typeof $stateParams.keyword !== 'undefined')?$stateParams.keyword:'ipod';

    $scope.meliHelperInfo;
    $scope.meliHelperInfoList = [];

    $scope.section2BtnClickHndl = function() {
        $http.get('https://api.mercadolibre.com/sites/MLA/search?q=' + $scope.kewordReceived)
            .then(function(respuesta) {
                showMeliResult(respuesta.data.results, $scope);
            });
    };

});
