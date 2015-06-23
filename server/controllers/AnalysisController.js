var fs = require('fs');

module.exports.list = function(req, res) {
	var fileList = JSON.parse(req.query['0']);
    var fileCount = 0;
    var lineCount = 0;
    var lineCodeCount = 0;
    var functionCount = 0;
    var variableCount = 0;
    var ifCount = 0;
    var forCount = 0;
    var angularControllerCount = 0;
    var angularDirectiveCount = 0;
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
        var lines = data.split('\n');
        lines.forEach(function(line) {
            if(line.trim())
                lineCodeCount++;
        });
        lineCount += lines.length;
        var f = data.match(/function\(/g);
        functionCount += f ? f.length : 0;
        var v = data.match(/var\s/g);
        variableCount += v ? v.length : 0;
        var i = data.match(/if\(/g);
        ifCount += i ? i.length : 0;
        var fo = data.match(/for\(/g);
        forCount += fo ? fo.length : 0;
        fo = data.match(/forEach\(/g);
        forCount += fo ? fo.length : 0;
        var ac = data.match(/app\.controller\(/g);
        angularControllerCount += ac ? ac.length : 0;
        var ad = data.match(/app\.directive\(/g);
        angularDirectiveCount += ad ? ad.length : 0;

        fileCount++;
	}

    function _createAnalysisTable() {
        var _header = ['Path', 'Files', 'Lines', 'Lines of code', 'JS Functions'];
        _table.header = _header;
        _table.rows.push(_header);
        _table.rows.push(_header);
        _table.rows.push(_header);
        _table.rows.push(_header);
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