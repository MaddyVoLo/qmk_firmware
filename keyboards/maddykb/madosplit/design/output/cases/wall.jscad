function BigBoardL_extrude_4_outline_fn(){
    return new CSG.Path2D([[126.9513284,-27.5099584],[89.4990982,-35.1728188]]).appendArc([87.9,-37.1322263],{"radius":2,"clockwise":false,"large":false}).appendPoint([87.9,-109.0375643]).appendArc([89.2935926,-110.9434158],{"radius":2,"clockwise":false,"large":false}).appendPoint([97.7749041,-113.6420149]).appendArc([97.8248803,-113.6586443],{"radius":2,"clockwise":true,"large":false}).appendPoint([136.5883929,-127.1264801]).appendArc([137.0226291,-127.2248822],{"radius":2,"clockwise":false,"large":false}).appendPoint([221.6659649,-136.6850709]).appendArc([223.8639043,-135.0076818],{"radius":2,"clockwise":false,"large":false}).appendPoint([229.3970572,-99.768742]).appendArc([229.4025869,-99.7312048],{"radius":2,"clockwise":false,"large":false}).appendPoint([238.6871986,-32.272698]).appendArc([236.7058769,-30],{"radius":2,"clockwise":false,"large":false}).appendPoint([206.1441452,-30]).appendArc([205.8573444,-29.9793295],{"radius":2,"clockwise":true,"large":false}).appendPoint([157.2951438,-22.9427657]).appendArc([156.7052191,-22.9451997],{"radius":2,"clockwise":false,"large":false}).appendPoint([127.0491062,-27.4924704]).appendArc([126.9513284,-27.5099584],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 4] });
}


function board_extrude_4_outline_fn(){
    return new CSG.Path2D([[127.9492977,-28.5104005],[90.5981118,-36.1721822]]).appendArc([89,-38.1313876],{"radius":2,"clockwise":false,"large":false}).appendPoint([89,-108.0354508]).appendArc([90.3962166,-109.9421352],{"radius":2,"clockwise":false,"large":false}).appendPoint([97.9816827,-112.3441995]).appendArc([98.0182044,-112.356152],{"radius":2,"clockwise":true,"large":false}).appendPoint([137.5942696,-125.7304755]).appendArc([138.015858,-125.8237483],{"radius":2,"clockwise":false,"large":false}).appendPoint([220.4108959,-134.8887032]).appendArc([222.6055486,-133.2100161],{"radius":2,"clockwise":false,"large":false}).appendPoint([227.9919054,-98.8017086]).appendArc([228.005379,-98.6979388],{"radius":2,"clockwise":false,"large":false}).appendPoint([234.7721205,-33.2055478]).appendArc([232.782711,-31],{"radius":2,"clockwise":false,"large":false}).appendPoint([205.1430151,-31]).appendArc([204.8584403,-30.9796508],{"radius":2,"clockwise":true,"large":false}).appendPoint([157.2924633,-24.1420416]).appendArc([156.7078737,-24.1443227],{"radius":2,"clockwise":false,"large":false}).appendPoint([128.0511711,-28.4922361]).appendArc([127.9492977,-28.5104005],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 4] });
}




                function _outerWall_case_fn() {
                    

                // creating part 0 of case _outerWall
                let _outerWall__part_0 = BigBoardL_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _outerWall__part_0_bounds = _outerWall__part_0.getBounds();
                let _outerWall__part_0_x = _outerWall__part_0_bounds[0].x + (_outerWall__part_0_bounds[1].x - _outerWall__part_0_bounds[0].x) / 2
                let _outerWall__part_0_y = _outerWall__part_0_bounds[0].y + (_outerWall__part_0_bounds[1].y - _outerWall__part_0_bounds[0].y) / 2
                _outerWall__part_0 = translate([-_outerWall__part_0_x, -_outerWall__part_0_y, 0], _outerWall__part_0);
                _outerWall__part_0 = rotate([0,0,0], _outerWall__part_0);
                _outerWall__part_0 = translate([_outerWall__part_0_x, _outerWall__part_0_y, 0], _outerWall__part_0);

                _outerWall__part_0 = translate([0,0,0], _outerWall__part_0);
                let result = _outerWall__part_0;
                
            
                    return result;
                }
            
            

                function _innerWall_case_fn() {
                    

                // creating part 0 of case _innerWall
                let _innerWall__part_0 = board_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _innerWall__part_0_bounds = _innerWall__part_0.getBounds();
                let _innerWall__part_0_x = _innerWall__part_0_bounds[0].x + (_innerWall__part_0_bounds[1].x - _innerWall__part_0_bounds[0].x) / 2
                let _innerWall__part_0_y = _innerWall__part_0_bounds[0].y + (_innerWall__part_0_bounds[1].y - _innerWall__part_0_bounds[0].y) / 2
                _innerWall__part_0 = translate([-_innerWall__part_0_x, -_innerWall__part_0_y, 0], _innerWall__part_0);
                _innerWall__part_0 = rotate([0,0,0], _innerWall__part_0);
                _innerWall__part_0 = translate([_innerWall__part_0_x, _innerWall__part_0_y, 0], _innerWall__part_0);

                _innerWall__part_0 = translate([0,0,0], _innerWall__part_0);
                let result = _innerWall__part_0;
                
            
                    return result;
                }
            
            

                function wall_case_fn() {
                    

                // creating part 0 of case wall
                let wall__part_0 = _outerWall_case_fn();

                // make sure that rotations are relative
                let wall__part_0_bounds = wall__part_0.getBounds();
                let wall__part_0_x = wall__part_0_bounds[0].x + (wall__part_0_bounds[1].x - wall__part_0_bounds[0].x) / 2
                let wall__part_0_y = wall__part_0_bounds[0].y + (wall__part_0_bounds[1].y - wall__part_0_bounds[0].y) / 2
                wall__part_0 = translate([-wall__part_0_x, -wall__part_0_y, 0], wall__part_0);
                wall__part_0 = rotate([0,0,0], wall__part_0);
                wall__part_0 = translate([wall__part_0_x, wall__part_0_y, 0], wall__part_0);

                wall__part_0 = translate([0,0,0], wall__part_0);
                let result = wall__part_0;
                
            

                // creating part 1 of case wall
                let wall__part_1 = _innerWall_case_fn();

                // make sure that rotations are relative
                let wall__part_1_bounds = wall__part_1.getBounds();
                let wall__part_1_x = wall__part_1_bounds[0].x + (wall__part_1_bounds[1].x - wall__part_1_bounds[0].x) / 2
                let wall__part_1_y = wall__part_1_bounds[0].y + (wall__part_1_bounds[1].y - wall__part_1_bounds[0].y) / 2
                wall__part_1 = translate([-wall__part_1_x, -wall__part_1_y, 0], wall__part_1);
                wall__part_1 = rotate([0,0,0], wall__part_1);
                wall__part_1 = translate([wall__part_1_x, wall__part_1_y, 0], wall__part_1);

                wall__part_1 = translate([0,0,0], wall__part_1);
                result = result.subtract(wall__part_1);
                
            
                    return result;
                }
            
            
        
            function main() {
                return wall_case_fn();
            }

        