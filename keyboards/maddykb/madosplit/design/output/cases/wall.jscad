function BigBoardL_extrude_12_outline_fn(){
    return new CSG.Path2D([[125.9175355,-26.5168295],[88.40008,-34.1734531]]).appendArc([86.8,-36.1330612],{"radius":2,"clockwise":false,"large":false}).appendPoint([86.8,-110.0393225]).appendArc([88.1914088,-111.9444778],{"radius":2,"clockwise":false,"large":false}).appendPoint([97.5676174,-114.9396555]).appendArc([97.6320113,-114.9614387],{"radius":2,"clockwise":true,"large":false}).appendPoint([135.5822149,-128.5221789]).appendArc([136.0297977,-128.6260644],{"radius":2,"clockwise":false,"large":false}).appendPoint([222.9211488,-138.4816132]).appendArc([225.1222051,-136.8054691],{"radius":2,"clockwise":false,"large":false}).appendPoint([230.7988983,-100.7569963]).appendArc([230.8011555,-100.7429861],{"radius":2,"clockwise":true,"large":false}).appendPoint([242.6169276,-29.025124]).appendArc([240.643531,-26.7],{"radius":2,"clockwise":false,"large":false}).appendPoint([207.0768858,-26.7]).appendArc([206.9233404,-26.6940972],{"radius":2,"clockwise":true,"large":false}).appendPoint([157.1940873,-22.8649447]).appendArc([156.8066735,-22.8727626],{"radius":2,"clockwise":false,"large":false}).appendPoint([126.0835871,-26.4901583]).appendArc([125.9175355,-26.5168295],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 12] });
}


function InnerWallOutlineL_extrude_12_outline_fn(){
    return new CSG.Path2D([[127.4176819,-28.0168641],[90.0486056,-35.6725008]]).appendArc([88.45,-37.6318074],{"radius":2,"clockwise":false,"large":false}).appendPoint([88.45,-108.5365584]).appendArc([89.8448418,-110.442807],{"radius":2,"clockwise":false,"large":false}).appendPoint([97.8783589,-112.9931298]).appendArc([97.9214811,-113.0073602],{"radius":2,"clockwise":true,"large":false}).appendPoint([137.0913686,-126.4285146]).appendArc([137.5191939,-126.5243093],{"radius":2,"clockwise":false,"large":false}).appendPoint([221.0384153,-135.7868644]).appendArc([223.2347335,-134.108833],{"radius":2,"clockwise":false,"large":false}).appendPoint([228.6939991,-99.2882751]).appendArc([228.7045137,-99.2115245],{"radius":2,"clockwise":false,"large":false}).appendPoint([236.7380331,-30.7330308]).appendArc([234.7516553,-28.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([205.5823344,-28.5]).appendArc([205.417944,-28.4932325],{"radius":2,"clockwise":true,"large":false}).appendPoint([157.2003732,-24.5165256]).appendArc([156.8003474,-24.5236876],{"radius":2,"clockwise":false,"large":false}).appendPoint([127.5834409,-27.9901002]).appendArc([127.4176819,-28.0168641],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 12] });
}




                function _outerWall_case_fn() {
                    

                // creating part 0 of case _outerWall
                let _outerWall__part_0 = BigBoardL_extrude_12_outline_fn();

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
                let _innerWall__part_0 = InnerWallOutlineL_extrude_12_outline_fn();

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

        