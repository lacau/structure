app.factory('httpInterceptor', function($q, $rootScope){
	var numLoadings = 0;
	return {
		'request': function(config) {
			numLoadings++;
			$rootScope.$broadcast("loading_show");
			
			return config || $q.when(config);
		},
		'response': function(response) {
			numLoadings--;
			if(numLoadings === 0)
				$rootScope.$broadcast("loading_hide");
			
			return response || $q.when(response);;
		}
	};
});