function BigBoardR_extrude_5_outline_fn(){
    return new CSG.Path2D([[363.0824645,-26.5168295],[400.59992,-34.1734531]]).appendArc([402.2,-36.1330612],{"radius":2,"clockwise":true,"large":false}).appendPoint([402.2,-110.0393225]).appendArc([400.8085912,-111.9444778],{"radius":2,"clockwise":true,"large":false}).appendPoint([391.4323826,-114.9396555]).appendArc([391.3679887,-114.9614387],{"radius":2,"clockwise":false,"large":false}).appendPoint([353.4177851,-128.5221789]).appendArc([352.9702023,-128.6260644],{"radius":2,"clockwise":true,"large":false}).appendPoint([266.0788512,-138.4816132]).appendArc([263.8777949,-136.8054691],{"radius":2,"clockwise":true,"large":false}).appendPoint([258.2011017,-100.7569963]).appendArc([258.1988445,-100.7429861],{"radius":2,"clockwise":false,"large":false}).appendPoint([246.3830724,-29.025124]).appendArc([248.356469,-26.7],{"radius":2,"clockwise":true,"large":false}).appendPoint([281.9231142,-26.7]).appendArc([282.0766596,-26.6940972],{"radius":2,"clockwise":false,"large":false}).appendPoint([331.8059127,-22.8649447]).appendArc([332.1933265,-22.8727626],{"radius":2,"clockwise":true,"large":false}).appendPoint([362.9164129,-26.4901583]).appendArc([363.0824645,-26.5168295],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 5] });
}


function InnerWallOutlineR_extrude_5_outline_fn(){
    return new CSG.Path2D([[361.5823181,-28.0168641],[398.9513944,-35.6725008]]).appendArc([400.55,-37.6318074],{"radius":2,"clockwise":true,"large":false}).appendPoint([400.55,-108.5365584]).appendArc([399.1551582,-110.442807],{"radius":2,"clockwise":true,"large":false}).appendPoint([391.1216411,-112.9931298]).appendArc([391.0785189,-113.0073602],{"radius":2,"clockwise":false,"large":false}).appendPoint([351.9086314,-126.4285146]).appendArc([351.4808061,-126.5243093],{"radius":2,"clockwise":true,"large":false}).appendPoint([267.9615847,-135.7868644]).appendArc([265.7652665,-134.108833],{"radius":2,"clockwise":true,"large":false}).appendPoint([260.3060009,-99.2882751]).appendArc([260.2954863,-99.2115245],{"radius":2,"clockwise":true,"large":false}).appendPoint([252.2619669,-30.7330308]).appendArc([254.2483447,-28.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([283.4176656,-28.5]).appendArc([283.582056,-28.4932325],{"radius":2,"clockwise":false,"large":false}).appendPoint([331.7996268,-24.5165256]).appendArc([332.1996526,-24.5236876],{"radius":2,"clockwise":true,"large":false}).appendPoint([361.4165591,-27.9901002]).appendArc([361.5823181,-28.0168641],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 5] });
}




                function _outerWallR_case_fn() {
                    

                // creating part 0 of case _outerWallR
                let _outerWallR__part_0 = BigBoardR_extrude_5_outline_fn();

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
                let _innerWallR__part_0 = InnerWallOutlineR_extrude_5_outline_fn();

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

        