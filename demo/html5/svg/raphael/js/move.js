
var r = Raphael("draw", 800, 600);

var movers = r.set();

movers.push(r.circle(100, 100, 20),
            r.circle(100, 150, 18),
            r.circle(100, 200, 16),
            r.circle(100, 250, 14),
            r.circle(100, 300, 12),
            r.circle(100, 350, 10),
            r.circle(100, 400, 8),
            r.circle(100, 450, 6));

movers.forEach(function( object,n) {

    this.attr({fill: "rgb(64, 218, 75)", stroke: "#fff", "fill-opacity": 1});

    this.click(function () {
        this.cx = 400;
        this.animate({cx: this.cx }, 1000);
    });                 
} , movers );
