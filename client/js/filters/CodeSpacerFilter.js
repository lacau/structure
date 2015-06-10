app.filter("codeSpacer", function($sce) {
	return function(codeLine) {
		var _numTabs = codeLine.split('\t').length - 1;
		var space = '';
		for(var i = 0; i < _numTabs; i++)
			space += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';

		return $sce.trustAsHtml(space);
  	}
});