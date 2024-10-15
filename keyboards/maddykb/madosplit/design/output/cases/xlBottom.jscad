function BigBoardL_extrude_1_outline_fn(){
    return new CSG.Path2D([[125.9175355,-26.5168295],[88.40008,-34.1734531]]).appendArc([86.8,-36.1330612],{"radius":2,"clockwise":false,"large":false}).appendPoint([86.8,-110.0393225]).appendArc([88.1914088,-111.9444778],{"radius":2,"clockwise":false,"large":false}).appendPoint([97.5676174,-114.9396555]).appendArc([97.6320113,-114.9614387],{"radius":2,"clockwise":true,"large":false}).appendPoint([135.5822149,-128.5221789]).appendArc([136.0297977,-128.6260644],{"radius":2,"clockwise":false,"large":false}).appendPoint([222.9211488,-138.4816132]).appendArc([225.1222051,-136.8054691],{"radius":2,"clockwise":false,"large":false}).appendPoint([230.7988983,-100.7569963]).appendArc([230.8011555,-100.7429861],{"radius":2,"clockwise":true,"large":false}).appendPoint([242.6169276,-29.025124]).appendArc([240.643531,-26.7],{"radius":2,"clockwise":false,"large":false}).appendPoint([207.0768858,-26.7]).appendArc([206.9233404,-26.6940972],{"radius":2,"clockwise":true,"large":false}).appendPoint([157.1940873,-22.8649447]).appendArc([156.8066735,-22.8727626],{"radius":2,"clockwise":false,"large":false}).appendPoint([126.0835871,-26.4901583]).appendArc([125.9175355,-26.5168295],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
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
            
            
        
            function main() {
                return xlBottom_case_fn();
            }

        