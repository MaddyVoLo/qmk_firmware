function standoff_extrude_3_outline_fn(){
    return CAG.circle({"center":[228.5,-52.4],"radius":2.5})
.union(
    CAG.circle({"center":[199,-108.95],"radius":2.5})
).union(
    CAG.circle({"center":[128,-111.6],"radius":2.5})
).union(
    CAG.circle({"center":[124,-32.44],"radius":2.5})
).extrude({ offset: [0, 0, 3] });
}


function mounting_extrude_3_outline_fn(){
    return CAG.circle({"center":[228.5,-52.4],"radius":1.5})
.union(
    CAG.circle({"center":[199,-108.95],"radius":1.5})
).union(
    CAG.circle({"center":[128,-111.6],"radius":1.5})
).union(
    CAG.circle({"center":[124,-32.44],"radius":1.5})
).extrude({ offset: [0, 0, 3] });
}


function BigBoardL_extrude_1_outline_fn(){
    return new CSG.Path2D([[125.9175355,-26.5168295],[88.40008,-34.1734531]]).appendArc([86.8,-36.1330612],{"radius":2,"clockwise":false,"large":false}).appendPoint([86.8,-110.0393225]).appendArc([88.1914088,-111.9444778],{"radius":2,"clockwise":false,"large":false}).appendPoint([97.5676174,-114.9396555]).appendArc([97.6320113,-114.9614387],{"radius":2,"clockwise":true,"large":false}).appendPoint([135.5822149,-128.5221789]).appendArc([136.0297977,-128.6260644],{"radius":2,"clockwise":false,"large":false}).appendPoint([222.9211488,-138.4816132]).appendArc([225.1222051,-136.8054691],{"radius":2,"clockwise":false,"large":false}).appendPoint([230.7988983,-100.7569963]).appendArc([230.8011555,-100.7429861],{"radius":2,"clockwise":true,"large":false}).appendPoint([242.6169276,-29.025124]).appendArc([240.643531,-26.7],{"radius":2,"clockwise":false,"large":false}).appendPoint([207.0768858,-26.7]).appendArc([206.9233404,-26.6940972],{"radius":2,"clockwise":true,"large":false}).appendPoint([157.1940873,-22.8649447]).appendArc([156.8066735,-22.8727626],{"radius":2,"clockwise":false,"large":false}).appendPoint([126.0835871,-26.4901583]).appendArc([125.9175355,-26.5168295],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}


function BigBoardL_extrude_5_outline_fn(){
    return new CSG.Path2D([[125.9175355,-26.5168295],[88.40008,-34.1734531]]).appendArc([86.8,-36.1330612],{"radius":2,"clockwise":false,"large":false}).appendPoint([86.8,-110.0393225]).appendArc([88.1914088,-111.9444778],{"radius":2,"clockwise":false,"large":false}).appendPoint([97.5676174,-114.9396555]).appendArc([97.6320113,-114.9614387],{"radius":2,"clockwise":true,"large":false}).appendPoint([135.5822149,-128.5221789]).appendArc([136.0297977,-128.6260644],{"radius":2,"clockwise":false,"large":false}).appendPoint([222.9211488,-138.4816132]).appendArc([225.1222051,-136.8054691],{"radius":2,"clockwise":false,"large":false}).appendPoint([230.7988983,-100.7569963]).appendArc([230.8011555,-100.7429861],{"radius":2,"clockwise":true,"large":false}).appendPoint([242.6169276,-29.025124]).appendArc([240.643531,-26.7],{"radius":2,"clockwise":false,"large":false}).appendPoint([207.0768858,-26.7]).appendArc([206.9233404,-26.6940972],{"radius":2,"clockwise":true,"large":false}).appendPoint([157.1940873,-22.8649447]).appendArc([156.8066735,-22.8727626],{"radius":2,"clockwise":false,"large":false}).appendPoint([126.0835871,-26.4901583]).appendArc([125.9175355,-26.5168295],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 5] });
}


function InnerWallOutlineL_extrude_5_outline_fn(){
    return new CSG.Path2D([[127.4176819,-28.0168641],[90.0486056,-35.6725008]]).appendArc([88.45,-37.6318074],{"radius":2,"clockwise":false,"large":false}).appendPoint([88.45,-108.5365584]).appendArc([89.8448418,-110.442807],{"radius":2,"clockwise":false,"large":false}).appendPoint([97.8783589,-112.9931298]).appendArc([97.9214811,-113.0073602],{"radius":2,"clockwise":true,"large":false}).appendPoint([137.0913686,-126.4285146]).appendArc([137.5191939,-126.5243093],{"radius":2,"clockwise":false,"large":false}).appendPoint([221.0384153,-135.7868644]).appendArc([223.2347335,-134.108833],{"radius":2,"clockwise":false,"large":false}).appendPoint([228.6939991,-99.2882751]).appendArc([228.7045137,-99.2115245],{"radius":2,"clockwise":false,"large":false}).appendPoint([236.7380331,-30.7330308]).appendArc([234.7516553,-28.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([205.5823344,-28.5]).appendArc([205.417944,-28.4932325],{"radius":2,"clockwise":true,"large":false}).appendPoint([157.2003732,-24.5165256]).appendArc([156.8003474,-24.5236876],{"radius":2,"clockwise":false,"large":false}).appendPoint([127.5834409,-27.9901002]).appendArc([127.4176819,-28.0168641],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 5] });
}




                function _standoffs_case_fn() {
                    

                // creating part 0 of case _standoffs
                let _standoffs__part_0 = standoff_extrude_3_outline_fn();

                // make sure that rotations are relative
                let _standoffs__part_0_bounds = _standoffs__part_0.getBounds();
                let _standoffs__part_0_x = _standoffs__part_0_bounds[0].x + (_standoffs__part_0_bounds[1].x - _standoffs__part_0_bounds[0].x) / 2
                let _standoffs__part_0_y = _standoffs__part_0_bounds[0].y + (_standoffs__part_0_bounds[1].y - _standoffs__part_0_bounds[0].y) / 2
                _standoffs__part_0 = translate([-_standoffs__part_0_x, -_standoffs__part_0_y, 0], _standoffs__part_0);
                _standoffs__part_0 = rotate([0,0,0], _standoffs__part_0);
                _standoffs__part_0 = translate([_standoffs__part_0_x, _standoffs__part_0_y, 0], _standoffs__part_0);

                _standoffs__part_0 = translate([0,0,0], _standoffs__part_0);
                let result = _standoffs__part_0;
                
            
                    return result;
                }
            
            

                function _holes_case_fn() {
                    

                // creating part 0 of case _holes
                let _holes__part_0 = mounting_extrude_3_outline_fn();

                // make sure that rotations are relative
                let _holes__part_0_bounds = _holes__part_0.getBounds();
                let _holes__part_0_x = _holes__part_0_bounds[0].x + (_holes__part_0_bounds[1].x - _holes__part_0_bounds[0].x) / 2
                let _holes__part_0_y = _holes__part_0_bounds[0].y + (_holes__part_0_bounds[1].y - _holes__part_0_bounds[0].y) / 2
                _holes__part_0 = translate([-_holes__part_0_x, -_holes__part_0_y, 0], _holes__part_0);
                _holes__part_0 = rotate([0,0,0], _holes__part_0);
                _holes__part_0 = translate([_holes__part_0_x, _holes__part_0_y, 0], _holes__part_0);

                _holes__part_0 = translate([0,0,0], _holes__part_0);
                let result = _holes__part_0;
                
            
                    return result;
                }
            
            

                function xlBottom_case_fn() {
                    

                // creating part 0 of case xlBottom
                let xlBottom__part_0 = BigBoardL_extrude_1_outline_fn();

                // make sure that rotations are relative
                let xlBottom__part_0_bounds = xlBottom__part_0.getBounds();
                let xlBottom__part_0_x = xlBottom__part_0_bounds[0].x + (xlBottom__part_0_bounds[1].x - xlBottom__part_0_bounds[0].x) / 2
                let xlBottom__part_0_y = xlBottom__part_0_bounds[0].y + (xlBottom__part_0_bounds[1].y - xlBottom__part_0_bounds[0].y) / 2
                xlBottom__part_0 = translate([-xlBottom__part_0_x, -xlBottom__part_0_y, 0], xlBottom__part_0);
                xlBottom__part_0 = rotate([0,0,0], xlBottom__part_0);
                xlBottom__part_0 = translate([xlBottom__part_0_x, xlBottom__part_0_y, 0], xlBottom__part_0);

                xlBottom__part_0 = translate([0,0,0], xlBottom__part_0);
                let result = xlBottom__part_0;
                
            
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
            
            

                function _outerWall_case_fn() {
                    

                // creating part 0 of case _outerWall
                let _outerWall__part_0 = BigBoardL_extrude_5_outline_fn();

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
                let _innerWall__part_0 = InnerWallOutlineL_extrude_5_outline_fn();

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
            
            

                function case_case_fn() {
                    

                // creating part 0 of case case
                let case__part_0 = _standoffs_case_fn();

                // make sure that rotations are relative
                let case__part_0_bounds = case__part_0.getBounds();
                let case__part_0_x = case__part_0_bounds[0].x + (case__part_0_bounds[1].x - case__part_0_bounds[0].x) / 2
                let case__part_0_y = case__part_0_bounds[0].y + (case__part_0_bounds[1].y - case__part_0_bounds[0].y) / 2
                case__part_0 = translate([-case__part_0_x, -case__part_0_y, 0], case__part_0);
                case__part_0 = rotate([0,0,0], case__part_0);
                case__part_0 = translate([case__part_0_x, case__part_0_y, 0], case__part_0);

                case__part_0 = translate([0,0,0], case__part_0);
                let result = case__part_0;
                
            

                // creating part 1 of case case
                let case__part_1 = _holes_case_fn();

                // make sure that rotations are relative
                let case__part_1_bounds = case__part_1.getBounds();
                let case__part_1_x = case__part_1_bounds[0].x + (case__part_1_bounds[1].x - case__part_1_bounds[0].x) / 2
                let case__part_1_y = case__part_1_bounds[0].y + (case__part_1_bounds[1].y - case__part_1_bounds[0].y) / 2
                case__part_1 = translate([-case__part_1_x, -case__part_1_y, 0], case__part_1);
                case__part_1 = rotate([0,0,0], case__part_1);
                case__part_1 = translate([case__part_1_x, case__part_1_y, 0], case__part_1);

                case__part_1 = translate([0,0,0], case__part_1);
                result = result.subtract(case__part_1);
                
            

                // creating part 2 of case case
                let case__part_2 = xlBottom_case_fn();

                // make sure that rotations are relative
                let case__part_2_bounds = case__part_2.getBounds();
                let case__part_2_x = case__part_2_bounds[0].x + (case__part_2_bounds[1].x - case__part_2_bounds[0].x) / 2
                let case__part_2_y = case__part_2_bounds[0].y + (case__part_2_bounds[1].y - case__part_2_bounds[0].y) / 2
                case__part_2 = translate([-case__part_2_x, -case__part_2_y, 0], case__part_2);
                case__part_2 = rotate([0,0,0], case__part_2);
                case__part_2 = translate([case__part_2_x, case__part_2_y, 0], case__part_2);

                case__part_2 = translate([0,0,0], case__part_2);
                result = result.union(case__part_2);
                
            

                // creating part 3 of case case
                let case__part_3 = wall_case_fn();

                // make sure that rotations are relative
                let case__part_3_bounds = case__part_3.getBounds();
                let case__part_3_x = case__part_3_bounds[0].x + (case__part_3_bounds[1].x - case__part_3_bounds[0].x) / 2
                let case__part_3_y = case__part_3_bounds[0].y + (case__part_3_bounds[1].y - case__part_3_bounds[0].y) / 2
                case__part_3 = translate([-case__part_3_x, -case__part_3_y, 0], case__part_3);
                case__part_3 = rotate([0,0,0], case__part_3);
                case__part_3 = translate([case__part_3_x, case__part_3_y, 0], case__part_3);

                case__part_3 = translate([0,0,0], case__part_3);
                result = result.union(case__part_3);
                
            
                    return result;
                }
            
            
        
            function main() {
                return case_case_fn();
            }

        