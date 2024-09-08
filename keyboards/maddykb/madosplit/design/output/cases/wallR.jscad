function BigBoardR_extrude_4_outline_fn(){
    return new CSG.Path2D([[362.0486716,-27.5099584],[399.5009018,-35.1728188]]).appendArc([401.1,-37.1322263],{"radius":2,"clockwise":true,"large":false}).appendPoint([401.1,-109.0375643]).appendArc([399.7064074,-110.9434158],{"radius":2,"clockwise":true,"large":false}).appendPoint([391.2250959,-113.6420149]).appendArc([391.1751197,-113.6586443],{"radius":2,"clockwise":false,"large":false}).appendPoint([352.4116071,-127.1264801]).appendArc([351.9773709,-127.2248822],{"radius":2,"clockwise":true,"large":false}).appendPoint([267.3340351,-136.6850709]).appendArc([265.1360957,-135.0076818],{"radius":2,"clockwise":true,"large":false}).appendPoint([259.6029428,-99.768742]).appendArc([259.5974131,-99.7312048],{"radius":2,"clockwise":true,"large":false}).appendPoint([250.3128014,-32.272698]).appendArc([252.2941231,-30],{"radius":2,"clockwise":true,"large":false}).appendPoint([282.8558548,-30]).appendArc([283.1426556,-29.9793295],{"radius":2,"clockwise":false,"large":false}).appendPoint([331.7048562,-22.9427657]).appendArc([332.2947809,-22.9451997],{"radius":2,"clockwise":true,"large":false}).appendPoint([361.9508938,-27.4924704]).appendArc([362.0486716,-27.5099584],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 4] });
}


function boardR_extrude_4_outline_fn(){
    return new CSG.Path2D([[361.0507023,-28.5104005],[398.4018882,-36.1721822]]).appendArc([400,-38.1313876],{"radius":2,"clockwise":true,"large":false}).appendPoint([400,-108.0354508]).appendArc([398.6037834,-109.9421352],{"radius":2,"clockwise":true,"large":false}).appendPoint([391.0183173,-112.3441995]).appendArc([390.9817956,-112.356152],{"radius":2,"clockwise":false,"large":false}).appendPoint([351.4057304,-125.7304755]).appendArc([350.984142,-125.8237483],{"radius":2,"clockwise":true,"large":false}).appendPoint([268.5891041,-134.8887032]).appendArc([266.3944514,-133.2100161],{"radius":2,"clockwise":true,"large":false}).appendPoint([261.0080946,-98.8017086]).appendArc([260.994621,-98.6979388],{"radius":2,"clockwise":true,"large":false}).appendPoint([254.2278795,-33.2055478]).appendArc([256.217289,-31],{"radius":2,"clockwise":true,"large":false}).appendPoint([283.8569849,-31]).appendArc([284.1415597,-30.9796508],{"radius":2,"clockwise":false,"large":false}).appendPoint([331.7075367,-24.1420416]).appendArc([332.2921263,-24.1443227],{"radius":2,"clockwise":true,"large":false}).appendPoint([360.9488289,-28.4922361]).appendArc([361.0507023,-28.5104005],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 4] });
}




                function _outerWallR_case_fn() {
                    

                // creating part 0 of case _outerWallR
                let _outerWallR__part_0 = BigBoardR_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _outerWallR__part_0_bounds = _outerWallR__part_0.getBounds();
                let _outerWallR__part_0_x = _outerWallR__part_0_bounds[0].x + (_outerWallR__part_0_bounds[1].x - _outerWallR__part_0_bounds[0].x) / 2
                let _outerWallR__part_0_y = _outerWallR__part_0_bounds[0].y + (_outerWallR__part_0_bounds[1].y - _outerWallR__part_0_bounds[0].y) / 2
                _outerWallR__part_0 = translate([-_outerWallR__part_0_x, -_outerWallR__part_0_y, 0], _outerWallR__part_0);
                _outerWallR__part_0 = rotate([0,0,0], _outerWallR__part_0);
                _outerWallR__part_0 = translate([_outerWallR__part_0_x, _outerWallR__part_0_y, 0], _outerWallR__part_0);

                _outerWallR__part_0 = translate([0,0,0], _outerWallR__part_0);
                let result = _outerWallR__part_0;
                
            
                    return result;
                }
            
            

                function _innerWallR_case_fn() {
                    

                // creating part 0 of case _innerWallR
                let _innerWallR__part_0 = boardR_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _innerWallR__part_0_bounds = _innerWallR__part_0.getBounds();
                let _innerWallR__part_0_x = _innerWallR__part_0_bounds[0].x + (_innerWallR__part_0_bounds[1].x - _innerWallR__part_0_bounds[0].x) / 2
                let _innerWallR__part_0_y = _innerWallR__part_0_bounds[0].y + (_innerWallR__part_0_bounds[1].y - _innerWallR__part_0_bounds[0].y) / 2
                _innerWallR__part_0 = translate([-_innerWallR__part_0_x, -_innerWallR__part_0_y, 0], _innerWallR__part_0);
                _innerWallR__part_0 = rotate([0,0,0], _innerWallR__part_0);
                _innerWallR__part_0 = translate([_innerWallR__part_0_x, _innerWallR__part_0_y, 0], _innerWallR__part_0);

                _innerWallR__part_0 = translate([0,0,0], _innerWallR__part_0);
                let result = _innerWallR__part_0;
                
            
                    return result;
                }
            
            

                function wallR_case_fn() {
                    

                // creating part 0 of case wallR
                let wallR__part_0 = _outerWallR_case_fn();

                // make sure that rotations are relative
                let wallR__part_0_bounds = wallR__part_0.getBounds();
                let wallR__part_0_x = wallR__part_0_bounds[0].x + (wallR__part_0_bounds[1].x - wallR__part_0_bounds[0].x) / 2
                let wallR__part_0_y = wallR__part_0_bounds[0].y + (wallR__part_0_bounds[1].y - wallR__part_0_bounds[0].y) / 2
                wallR__part_0 = translate([-wallR__part_0_x, -wallR__part_0_y, 0], wallR__part_0);
                wallR__part_0 = rotate([0,0,0], wallR__part_0);
                wallR__part_0 = translate([wallR__part_0_x, wallR__part_0_y, 0], wallR__part_0);

                wallR__part_0 = translate([0,0,0], wallR__part_0);
                let result = wallR__part_0;
                
            

                // creating part 1 of case wallR
                let wallR__part_1 = _innerWallR_case_fn();

                // make sure that rotations are relative
                let wallR__part_1_bounds = wallR__part_1.getBounds();
                let wallR__part_1_x = wallR__part_1_bounds[0].x + (wallR__part_1_bounds[1].x - wallR__part_1_bounds[0].x) / 2
                let wallR__part_1_y = wallR__part_1_bounds[0].y + (wallR__part_1_bounds[1].y - wallR__part_1_bounds[0].y) / 2
                wallR__part_1 = translate([-wallR__part_1_x, -wallR__part_1_y, 0], wallR__part_1);
                wallR__part_1 = rotate([0,0,0], wallR__part_1);
                wallR__part_1 = translate([wallR__part_1_x, wallR__part_1_y, 0], wallR__part_1);

                wallR__part_1 = translate([0,0,0], wallR__part_1);
                result = result.subtract(wallR__part_1);
                
            
                    return result;
                }
            
            
        
            function main() {
                return wallR_case_fn();
            }

        