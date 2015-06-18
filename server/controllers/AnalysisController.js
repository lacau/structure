var fs = require('fs');

module.exports.list = function(req, res) {
	console.log(JSON.parse(req.query['0']));

	var _analyseFile = function(path) {

	}

	var data = {
        "title": {
            "text": "My text"
        },
        "subtitle": {
            "text": "Subtitle"
        },
        "xAxis": {
            "labels": {}
        },
        "tooltip": {},
        "plotOptions": {
            "area": {
                "pointStart": 1940,
                "marker": {
                    "enabled": false,
                    "symbol": "circle",
                    "radius": 2,
                    "states": {
                        "hover": {
                            "enabled": true
                        }
                    }
                }
            }
        },
        "series": [{
            "name": "Lacau",
            "data": [
                400,
                194,
                301,
                130,
                300
            ]
        }, {
            "name": "Teste",
            "data": [
                123,
                325,
                120,
                300,
                300
            ]
        }]
    };

	res.json([data]);
}