app.filter("sourceCode", function() {
	return function(plainCode) {
		var rows = [];
		if(plainCode) {
			var code = plainCode.split('\n');
			code.forEach(function(text, index) {
				rows.push({index: index, text: text});
			});
		}
		return rows;
  	}
});