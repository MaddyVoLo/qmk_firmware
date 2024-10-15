function BigBoardR_extrude_1_outline_fn(){
    return new CSG.Path2D([[363.0824645,-26.5168295],[400.59992,-34.1734531]]).appendArc([402.2,-36.1330612],{"radius":2,"clockwise":true,"large":false}).appendPoint([402.2,-110.0393225]).appendArc([400.8085912,-111.9444778],{"radius":2,"clockwise":true,"large":false}).appendPoint([391.4323826,-114.9396555]).appendArc([391.3679887,-114.9614387],{"radius":2,"clockwise":false,"large":false}).appendPoint([353.4177851,-128.5221789]).appendArc([352.9702023,-128.6260644],{"radius":2,"clockwise":true,"large":false}).appendPoint([266.0788512,-138.4816132]).appendArc([263.8777949,-136.8054691],{"radius":2,"clockwise":true,"large":false}).appendPoint([258.2011017,-100.7569963]).appendArc([258.1988445,-100.7429861],{"radius":2,"clockwise":false,"large":false}).appendPoint([246.3830724,-29.025124]).appendArc([248.356469,-26.7],{"radius":2,"clockwise":true,"large":false}).appendPoint([281.9231142,-26.7]).appendArc([282.0766596,-26.6940972],{"radius":2,"clockwise":false,"large":false}).appendPoint([331.8059127,-22.8649447]).appendArc([332.1933265,-22.8727626],{"radius":2,"clockwise":true,"large":false}).appendPoint([362.9164129,-26.4901583]).appendArc([363.0824645,-26.5168295],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function xlBottomR_case_fn() {
                    

                // creating part 0 of case xlBottomR
                let xlBottomR__part_0 = BigBoardR_extrude_1_outline_fn();

                // make sure that rotations are relative
                let xlBottomR__part_0_bounds = xlBottomR__part_0.getBounds();
                let xlBottomR__part_0_x = xlBottomR__part_0_bounds[0].x + (xlBottomR__part_0_bounds[1].x - xlBottomR__part_0_bounds[0].x) / 2
                let xlBottomR__part_0_y = xlBottomR__part_0_bounds[0].y + (xlBottomR__part_0_bounds[1].y - xlBottomR__part_0_bounds[0].y) / 2
                xlBottomR__part_0 = translate([-xlBottomR__part_0_x, -xlBottomR__part_0_y, 0], xlBottomR__part_0);
                xlBottomR__part_0 = rotate([0,0,0], xlBottomR__part_0);
                xlBottomR__part_0 = translate([xlBottomR__part_0_x, xlBottomR__part_0_y, 0], xlBottomR__part_0);

                xlBottomR__part_0 = translate([0,0,0], xlBottomR__part_0);
                let result = xlBottomR__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return xlBottomR_case_fn();
            }

        