app.filter("codeSpacer", function($sce) {
	return function(codeLine) {
		var numTabs = codeLine.split('\t').length - 1;
		var space = '';
		for(var i = 0; i < numTabs; i++)
			space += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';

		return $sce.trustAsHtml(space);
  	}
});