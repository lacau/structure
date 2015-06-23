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
    var jsFileCount = 0;
    var pngFileCount = 0;
    var _table = { header: [], rows: [] };

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
        htmlFileCount += html ? html.length : 0;
        var js = path.match(/\.js/g);
        jsFileCount += js ? js.length : 0;
        var png = path.match(/\.png/g);
        pngFileCount += png ? png.length : 0;

        fileCount++;
	}

    function _createAnalysisTable() {
        var _header = ['File type', 'Quantity', 'Lines of code', 'Average size(Kb)'];
        _table.header = _header;
        _table.rows.push(['CSS', cssFileCount, cssLineCount, (cssFileSize / cssFileCount / 1024).toFixed(2)]);
        _table.rows.push(['HTML', htmlFileCount, 0, 1]);
        _table.rows.push(['JS', jsFileCount, 0, 2]);
        _table.rows.push(['PNG', pngFileCount, 0, 2]);
    }

    _iterateFiles(fileList);
    _createAnalysisTable();

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