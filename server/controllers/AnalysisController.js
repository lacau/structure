var fs = require('fs');

module.exports.list = function(req, res) {
	var fileList = JSON.parse(req.query['0']);
	var fileCount = 0;
	var lineCount = 0;
	var lineCodeCount = 0;
	var functionCount = 0;
	var cssFileCount = 0;
	var cssFileSize = 0;
	var cssLineCount = 0;
	var htmlFileCount = 0;
	var htmlFileSize = 0;
	var htmlLineCount = 0;
	var jsFileCount = 0;
	var jsFileSize = 0;
	var jsLineCount = 0;
	var pngFileCount = 0;
	var pngFileSize = 0;

	var _iterateFiles = function(file) {
		if(file.children) {
			file.children.forEach(function(child) {
				_iterateFiles(child);
			});
		} else {
			_analyseFile(file.path + file.name);
		}
	}

	var _analyseFile = function(path) {
		var data = fs.readFileSync('./' + path, 'utf-8');
		var size = fs.statSync('./' + path)['size'];
		var lines = data.split('\n');
		lines.forEach(function(line) {
			if(line.trim())
				lineCodeCount++;
		});
		lineCount += lines.length;
		var f = data.match(/function\(/g);
		functionCount += f ? f.length : 0;
		var css = path.match(/\.css/g);
		if(css) {
			cssFileCount += css.length;
			cssFileSize += size;
			cssLineCount += lines.length;
		}
		var html = path.match(/\.html/g);
		if(html) {
			htmlFileCount += html.length;
			htmlFileSize += size;
			htmlLineCount += lines.length;
		}
		var js = path.match(/\.js/g);
		if(js) {
			jsFileCount += js.length;
			jsFileSize += size;
			jsLineCount += lines.length;
		}
		var png = path.match(/\.png/g);
		if(png) {
			pngFileCount += png.length;
			pngFileSize += size;
		}

		fileCount++;
	}

	function _createAnalysisTable() {
		var table = {
			rows: []
		};
		var _header = ['File type', 'Quantity', 'Lines', 'Average size(Kb)', 'Total size(Kb)'];
		table.header = _header;
		table.rows.push(['CSS', cssFileCount, cssLineCount, _getAverageInKb(cssFileCount, cssFileSize), _getInKb(cssFileSize)]);
		table.rows.push(['HTML', htmlFileCount, htmlLineCount, _getAverageInKb(htmlFileCount, htmlFileSize), _getInKb(htmlFileSize)]);
		table.rows.push(['JS', jsFileCount, jsLineCount, _getAverageInKb(jsFileCount, jsFileSize), _getInKb(jsFileSize)]);
		table.rows.push(['PNG', pngFileCount, '-', _getAverageInKb(pngFileCount, pngFileSize), _getInKb(pngFileSize)]);
		table.footer = _getFooter(table.rows);

		return table;
	}

	function _getFooter(rows) {
		var footer = ['Total'];
		footer.push(cssFileCount + htmlFileCount + jsFileCount + pngFileCount);
		footer.push(cssLineCount + htmlLineCount + jsLineCount);
		var _averageSizeSum = 0;
		var _totalSizeSum = 0;
		rows.forEach(function(row) {
			_averageSizeSum += parseFloat(row[3]);
			_totalSizeSum += parseFloat(row[4]);
		});
		footer.push(_averageSizeSum.toFixed(2));
		footer.push(_totalSizeSum.toFixed(2));

		return footer;
	}

	function _getAverageInKb(count, totalSize) {
		return _getInKb(totalSize / count);
	}

	function _getInKb(num) {
		return (num / 1024).toFixed(2);
	}

	_iterateFiles(fileList);
	var _table = _createAnalysisTable();

	var data = {
		analysisTable: _table,
		columnChart: {
			chart: {
				type: 'column'
			},
			title: {
				text: 'Project analysis'
			},
			subtitle: {
				text: ''
			},
			//colors: ['#7cb5ec', '#7cb5ec', '#7cb5ec', '#7cb5ec'],
			xAxis: {
				categories: [
					'Statictics'
				],
				crosshair: true
			},
			yAxis: {
				min: 0,
				title: {
					text: ''
				}
			},
			tooltip: {
				pointFormat: '<tr><td style="white-space:nowrap;color:{series.color};padding:0">{series.name}: </td>' +
					'<td style="padding:0"><b>{point.y}</b></td></tr>',
				footerFormat: '</table>',
				shared: false,
				useHTML: true
			},
			plotOptions: {
				column: {
					pointPadding: 0.2,
					borderWidth: 0
				}
			},
			series: [{
				name: 'Files',
				data: [fileCount]
			}, {
				name: 'Lines',
				data: [lineCount]
			}, {
				name: 'Lines of code',
				data: [lineCodeCount]
			}, {
				name: 'JS Functions',
				data: [functionCount]
			}]
		}
	};

	res.json([data]);
}