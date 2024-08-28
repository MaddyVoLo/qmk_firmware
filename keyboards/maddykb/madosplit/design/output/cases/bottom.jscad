function combo_extrude_2_outline_fn(){
    return new CSG.Path2D([[127.9492977,-28.5104005],[90.5981118,-36.1721822]]).appendArc([89,-38.1313876],{"radius":2,"clockwise":false,"large":false}).appendPoint([89,-108.0354508]).appendArc([90.3962166,-109.9421352],{"radius":2,"clockwise":false,"large":false}).appendPoint([97.9816827,-112.3441995]).appendArc([98.0182044,-112.356152],{"radius":2,"clockwise":true,"large":false}).appendPoint([137.5942696,-125.7304755]).appendArc([138.015858,-125.8237483],{"radius":2,"clockwise":false,"large":false}).appendPoint([220.4108959,-134.8887032]).appendArc([222.6055486,-133.2100161],{"radius":2,"clockwise":false,"large":false}).appendPoint([227.9919054,-98.8017086]).appendArc([228.005379,-98.6979388],{"radius":2,"clockwise":false,"large":false}).appendPoint([234.7721205,-33.2055478]).appendArc([232.782711,-31],{"radius":2,"clockwise":false,"large":false}).appendPoint([205.1430151,-31]).appendArc([204.8584403,-30.9796508],{"radius":2,"clockwise":true,"large":false}).appendPoint([157.2924633,-24.1420416]).appendArc([156.7078737,-24.1443227],{"radius":2,"clockwise":false,"large":false}).appendPoint([128.0511711,-28.4922361]).appendArc([127.9492977,-28.5104005],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[206.8208705,-106.0832062],[199.425051,-121.9435925]]).appendPoint([214.3791295,-128.9167938]).appendPoint([221.774949,-113.0564075]).appendPoint([206.8208705,-106.0832062]).close().innerToCAG()
.union(
    new CSG.Path2D([[176.55,-122.75],[194.05,-122.75]]).appendPoint([194.05,-106.25]).appendPoint([176.55,-106.25]).appendPoint([176.55,-122.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[157.55,-120.75],[175.05,-120.75]]).appendPoint([175.05,-104.25]).appendPoint([157.55,-104.25]).appendPoint([157.55,-120.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[138.55,-120.75],[156.05,-120.75]]).appendPoint([156.05,-104.25]).appendPoint([138.55,-104.25]).appendPoint([138.55,-120.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[205.25,-97.5],[222.75,-97.5]]).appendPoint([222.75,-81]).appendPoint([205.25,-81]).appendPoint([205.25,-97.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[186.25,-48.75],[203.75,-48.75]]).appendPoint([203.75,-32.25]).appendPoint([186.25,-32.25]).appendPoint([186.25,-48.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[186.25,-66.75],[203.75,-66.75]]).appendPoint([203.75,-50.25]).appendPoint([186.25,-50.25]).appendPoint([186.25,-66.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[186.25,-84.75],[203.75,-84.75]]).appendPoint([203.75,-68.25]).appendPoint([186.25,-68.25]).appendPoint([186.25,-84.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[186.25,-102.75],[203.75,-102.75]]).appendPoint([203.75,-86.25]).appendPoint([186.25,-86.25]).appendPoint([186.25,-102.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[167.25,-46.25],[184.75,-46.25]]).appendPoint([184.75,-29.75]).appendPoint([167.25,-29.75]).appendPoint([167.25,-46.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[167.25,-64.25],[184.75,-64.25]]).appendPoint([184.75,-47.75]).appendPoint([167.25,-47.75]).appendPoint([167.25,-64.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[167.25,-82.25],[184.75,-82.25]]).appendPoint([184.75,-65.75]).appendPoint([167.25,-65.75]).appendPoint([167.25,-82.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[167.25,-100.25],[184.75,-100.25]]).appendPoint([184.75,-83.75]).appendPoint([167.25,-83.75]).appendPoint([167.25,-100.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[148.25,-43.75],[165.75,-43.75]]).appendPoint([165.75,-27.25]).appendPoint([148.25,-27.25]).appendPoint([148.25,-43.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[148.25,-61.75],[165.75,-61.75]]).appendPoint([165.75,-45.25]).appendPoint([148.25,-45.25]).appendPoint([148.25,-61.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[148.25,-79.75],[165.75,-79.75]]).appendPoint([165.75,-63.25]).appendPoint([148.25,-63.25]).appendPoint([148.25,-79.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[148.25,-97.75],[165.75,-97.75]]).appendPoint([165.75,-81.25]).appendPoint([148.25,-81.25]).appendPoint([148.25,-97.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[129.25,-46.25],[146.75,-46.25]]).appendPoint([146.75,-29.75]).appendPoint([129.25,-29.75]).appendPoint([129.25,-46.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[129.25,-64.25],[146.75,-64.25]]).appendPoint([146.75,-47.75]).appendPoint([129.25,-47.75]).appendPoint([129.25,-64.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[129.25,-82.25],[146.75,-82.25]]).appendPoint([146.75,-65.75]).appendPoint([129.25,-65.75]).appendPoint([129.25,-82.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[129.25,-100.25],[146.75,-100.25]]).appendPoint([146.75,-83.75]).appendPoint([129.25,-83.75]).appendPoint([129.25,-100.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[110.25,-52.25],[127.75,-52.25]]).appendPoint([127.75,-35.75]).appendPoint([110.25,-35.75]).appendPoint([110.25,-52.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[110.25,-70.25],[127.75,-70.25]]).appendPoint([127.75,-53.75]).appendPoint([110.25,-53.75]).appendPoint([110.25,-70.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[110.25,-88.25],[127.75,-88.25]]).appendPoint([127.75,-71.75]).appendPoint([110.25,-71.75]).appendPoint([110.25,-88.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[110.25,-106.25],[127.75,-106.25]]).appendPoint([127.75,-89.75]).appendPoint([110.25,-89.75]).appendPoint([110.25,-106.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[91.25,-54.25],[108.75,-54.25]]).appendPoint([108.75,-37.75]).appendPoint([91.25,-37.75]).appendPoint([91.25,-54.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[91.25,-72.25],[108.75,-72.25]]).appendPoint([108.75,-55.75]).appendPoint([91.25,-55.75]).appendPoint([91.25,-72.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[91.25,-90.25],[108.75,-90.25]]).appendPoint([108.75,-73.75]).appendPoint([91.25,-73.75]).appendPoint([91.25,-90.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[91.25,-108.25],[108.75,-108.25]]).appendPoint([108.75,-91.75]).appendPoint([91.25,-91.75]).appendPoint([91.25,-108.25]).close().innerToCAG()
)).extrude({ offset: [0, 0, 2] });
}




                function bottom_case_fn() {
                    

                // creating part 0 of case bottom
                let bottom__part_0 = combo_extrude_2_outline_fn();

                // make sure that rotations are relative
                let bottom__part_0_bounds = bottom__part_0.getBounds();
                let bottom__part_0_x = bottom__part_0_bounds[0].x + (bottom__part_0_bounds[1].x - bottom__part_0_bounds[0].x) / 2
                let bottom__part_0_y = bottom__part_0_bounds[0].y + (bottom__part_0_bounds[1].y - bottom__part_0_bounds[0].y) / 2
                bottom__part_0 = translate([-bottom__part_0_x, -bottom__part_0_y, 0], bottom__part_0);
                bottom__part_0 = rotate([0,0,0], bottom__part_0);
                bottom__part_0 = translate([bottom__part_0_x, bottom__part_0_y, 0], bottom__part_0);

                bottom__part_0 = translate([0,0,0], bottom__part_0);
                let result = bottom__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottom_case_fn();
            }

        