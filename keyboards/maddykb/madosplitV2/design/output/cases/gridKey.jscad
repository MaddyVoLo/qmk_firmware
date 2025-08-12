function Combo_extrude_2_outline_fn(){
    return new CSG.Path2D([[127.9492977,-28.5104005],[90.5981118,-36.1721822]]).appendArc([89,-38.1313876],{"radius":2,"clockwise":false,"large":false}).appendPoint([89,-108.0354508]).appendArc([90.3962166,-109.9421352],{"radius":2,"clockwise":false,"large":false}).appendPoint([97.9816827,-112.3441995]).appendArc([98.0182044,-112.356152],{"radius":2,"clockwise":true,"large":false}).appendPoint([137.5942696,-125.7304755]).appendArc([138.015858,-125.8237483],{"radius":2,"clockwise":false,"large":false}).appendPoint([220.4108959,-134.8887032]).appendArc([222.6055486,-133.2100161],{"radius":2,"clockwise":false,"large":false}).appendPoint([227.9432696,-99.1123967]).appendArc([227.9244333,-98.3910581],{"radius":2,"clockwise":false,"large":false}).appendPoint([224.2800338,-81.0801605]).appendArc([222.6601418,-79.5208137],{"radius":2,"clockwise":false,"large":false}).appendPoint([206.6627924,-76.784425]).appendArc([205,-74.8130572],{"radius":2,"clockwise":true,"large":false}).appendPoint([205,-32.7330584]).appendArc([203.2845748,-30.7534076],{"radius":2,"clockwise":false,"large":false}).appendPoint([157.2924633,-24.1420416]).appendArc([156.7078737,-24.1443227],{"radius":2,"clockwise":false,"large":false}).appendPoint([128.0511711,-28.4922361]).appendArc([127.9492977,-28.5104005],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    CAG.circle({"center":[199,-108.95],"radius":1.5})
.union(
    CAG.circle({"center":[128,-111.6],"radius":1.5})
).union(
    CAG.circle({"center":[124,-32.44],"radius":1.5})
).union(
    new CSG.Path2D([[207.2625423,-108.3304103],[201.4304103,-120.8374577]]).appendPoint([213.9374577,-126.6695897]).appendPoint([219.7695897,-114.1625423]).appendPoint([207.2625423,-108.3304103]).close().innerToCAG()
).union(
    new CSG.Path2D([[112.1,-68.9],[125.9,-68.9]]).appendPoint([125.9,-55.1]).appendPoint([112.1,-55.1]).appendPoint([112.1,-68.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[112.1,-86.9],[125.9,-86.9]]).appendPoint([125.9,-73.1]).appendPoint([112.1,-73.1]).appendPoint([112.1,-86.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[112.1,-104.9],[125.9,-104.9]]).appendPoint([125.9,-91.1]).appendPoint([112.1,-91.1]).appendPoint([112.1,-104.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[93.1,-70.9],[106.9,-70.9]]).appendPoint([106.9,-57.1]).appendPoint([93.1,-57.1]).appendPoint([93.1,-70.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[93.1,-88.9],[106.9,-88.9]]).appendPoint([106.9,-75.1]).appendPoint([93.1,-75.1]).appendPoint([93.1,-88.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[93.1,-106.9],[106.9,-106.9]]).appendPoint([106.9,-93.1]).appendPoint([93.1,-93.1]).appendPoint([93.1,-106.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[112.1,-50.9],[125.9,-50.9]]).appendPoint([125.9,-37.1]).appendPoint([112.1,-37.1]).appendPoint([112.1,-50.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[93.1,-52.9],[106.9,-52.9]]).appendPoint([106.9,-39.1]).appendPoint([93.1,-39.1]).appendPoint([93.1,-52.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[178.4,-121.4],[192.2,-121.4]]).appendPoint([192.2,-107.6]).appendPoint([178.4,-107.6]).appendPoint([178.4,-121.4]).close().innerToCAG()
).union(
    new CSG.Path2D([[159.4,-119.4],[173.2,-119.4]]).appendPoint([173.2,-105.6]).appendPoint([159.4,-105.6]).appendPoint([159.4,-119.4]).close().innerToCAG()
).union(
    new CSG.Path2D([[140.4,-119.4],[154.2,-119.4]]).appendPoint([154.2,-105.6]).appendPoint([140.4,-105.6]).appendPoint([140.4,-119.4]).close().innerToCAG()
).union(
    new CSG.Path2D([[207.1,-96.15],[220.9,-96.15]]).appendPoint([220.9,-82.35]).appendPoint([207.1,-82.35]).appendPoint([207.1,-96.15]).close().innerToCAG()
).union(
    new CSG.Path2D([[188.1,-65.4],[201.9,-65.4]]).appendPoint([201.9,-51.6]).appendPoint([188.1,-51.6]).appendPoint([188.1,-65.4]).close().innerToCAG()
).union(
    new CSG.Path2D([[188.1,-83.4],[201.9,-83.4]]).appendPoint([201.9,-69.6]).appendPoint([188.1,-69.6]).appendPoint([188.1,-83.4]).close().innerToCAG()
).union(
    new CSG.Path2D([[188.1,-101.4],[201.9,-101.4]]).appendPoint([201.9,-87.6]).appendPoint([188.1,-87.6]).appendPoint([188.1,-101.4]).close().innerToCAG()
).union(
    new CSG.Path2D([[169.1,-44.9],[182.9,-44.9]]).appendPoint([182.9,-31.1]).appendPoint([169.1,-31.1]).appendPoint([169.1,-44.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[169.1,-98.9],[182.9,-98.9]]).appendPoint([182.9,-85.1]).appendPoint([169.1,-85.1]).appendPoint([169.1,-98.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[150.1,-42.4],[163.9,-42.4]]).appendPoint([163.9,-28.6]).appendPoint([150.1,-28.6]).appendPoint([150.1,-42.4]).close().innerToCAG()
).union(
    new CSG.Path2D([[150.1,-78.4],[163.9,-78.4]]).appendPoint([163.9,-64.6]).appendPoint([150.1,-64.6]).appendPoint([150.1,-78.4]).close().innerToCAG()
).union(
    new CSG.Path2D([[150.1,-96.4],[163.9,-96.4]]).appendPoint([163.9,-82.6]).appendPoint([150.1,-82.6]).appendPoint([150.1,-96.4]).close().innerToCAG()
).union(
    new CSG.Path2D([[131.1,-44.9],[144.9,-44.9]]).appendPoint([144.9,-31.1]).appendPoint([131.1,-31.1]).appendPoint([131.1,-44.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[131.1,-80.9],[144.9,-80.9]]).appendPoint([144.9,-67.1]).appendPoint([131.1,-67.1]).appendPoint([131.1,-80.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[131.1,-98.9],[144.9,-98.9]]).appendPoint([144.9,-85.1]).appendPoint([131.1,-85.1]).appendPoint([131.1,-98.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[188.1,-47.4],[201.9,-47.4]]).appendPoint([201.9,-33.6]).appendPoint([188.1,-33.6]).appendPoint([188.1,-47.4]).close().innerToCAG()
).union(
    new CSG.Path2D([[169.1,-62.9],[182.9,-62.9]]).appendPoint([182.9,-49.1]).appendPoint([169.1,-49.1]).appendPoint([169.1,-62.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[150.1,-60.4],[163.9,-60.4]]).appendPoint([163.9,-46.6]).appendPoint([150.1,-46.6]).appendPoint([150.1,-60.4]).close().innerToCAG()
).union(
    new CSG.Path2D([[131.1,-62.9],[144.9,-62.9]]).appendPoint([144.9,-49.1]).appendPoint([131.1,-49.1]).appendPoint([131.1,-62.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[169.1,-80.9],[173.8,-80.9]]).appendArc([176.2,-80.9],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([182.9,-80.9]).appendPoint([182.9,-67.1]).appendPoint([169.1,-67.1]).appendPoint([169.1,-80.9]).close().innerToCAG()
)).extrude({ offset: [0, 0, 2] });
}




                function gridKey_case_fn() {
                    

                // creating part 0 of case gridKey
                let gridKey__part_0 = Combo_extrude_2_outline_fn();

                // make sure that rotations are relative
                let gridKey__part_0_bounds = gridKey__part_0.getBounds();
                let gridKey__part_0_x = gridKey__part_0_bounds[0].x + (gridKey__part_0_bounds[1].x - gridKey__part_0_bounds[0].x) / 2
                let gridKey__part_0_y = gridKey__part_0_bounds[0].y + (gridKey__part_0_bounds[1].y - gridKey__part_0_bounds[0].y) / 2
                gridKey__part_0 = translate([-gridKey__part_0_x, -gridKey__part_0_y, 0], gridKey__part_0);
                gridKey__part_0 = rotate([0,0,0], gridKey__part_0);
                gridKey__part_0 = translate([gridKey__part_0_x, gridKey__part_0_y, 0], gridKey__part_0);

                gridKey__part_0 = translate([0,0,0], gridKey__part_0);
                let result = gridKey__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return gridKey_case_fn();
            }

        