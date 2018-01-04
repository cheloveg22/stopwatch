function Stopwatch() {
    var result = document.getElementsByClassName('result');
    var s = 0;
    var m = 0;

    function tick() {
        s++;
        if (s == 60) {s = 0; m++}
        if (m == 60) {m = 0}
        console.log((m < 10?'0' + m:m) + ':' + (s < 10?'0' + s:s))
     }

    return {
		start: function() {
			tm = setInterval(tick, 1000);
		},
		stop: function() {
			clearInterval(tm);
		},
		reset: function() {
			s=0; m=0;
		}
	};
}

var object = {
    a: 1,
    b: '2',
    c: {
        d: 3,
        e: 4
    }
};

function parse(obj) {
    for (key in obj) {
        console.log(key + ' = ' + obj[key]);
        if (typeof obj[key] == 'object') {
            parse(obj[key]);
        }
    }
}

parse(object);
