app.factory('httpInterceptor', function($q, $rootScope){
	var _numLoadings = 0;
	return {
		'request': function(config) {
			_numLoadings++;
			$rootScope.$broadcast("loading_show");
			
			return config || $q.when(config);
		},
		'response': function(response) {
			_numLoadings--;
			if(_numLoadings === 0)
				$rootScope.$broadcast("loading_hide");
			
			return response || $q.when(response);
		},
		'responseError': function(response) {
			if (!(--_numLoadings))
				$rootScope.$broadcast("loading_hide");
			
			return $q.reject(response);
		}
	};
});