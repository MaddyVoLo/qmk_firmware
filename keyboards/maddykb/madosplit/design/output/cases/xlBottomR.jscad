function BigBoardR_extrude_1_outline_fn(){
    return new CSG.Path2D([[362.0486716,-27.5099584],[399.5009018,-35.1728188]]).appendArc([401.1,-37.1322263],{"radius":2,"clockwise":true,"large":false}).appendPoint([401.1,-109.0375643]).appendArc([399.7064074,-110.9434158],{"radius":2,"clockwise":true,"large":false}).appendPoint([391.2250959,-113.6420149]).appendArc([391.1751197,-113.6586443],{"radius":2,"clockwise":false,"large":false}).appendPoint([352.4116071,-127.1264801]).appendArc([351.9773709,-127.2248822],{"radius":2,"clockwise":true,"large":false}).appendPoint([267.3340351,-136.6850709]).appendArc([265.1360957,-135.0076818],{"radius":2,"clockwise":true,"large":false}).appendPoint([259.6029428,-99.768742]).appendArc([259.5974131,-99.7312048],{"radius":2,"clockwise":true,"large":false}).appendPoint([250.3128014,-32.272698]).appendArc([252.2941231,-30],{"radius":2,"clockwise":true,"large":false}).appendPoint([282.8558548,-30]).appendArc([283.1426556,-29.9793295],{"radius":2,"clockwise":false,"large":false}).appendPoint([331.7048562,-22.9427657]).appendArc([332.2947809,-22.9451997],{"radius":2,"clockwise":true,"large":false}).appendPoint([361.9508938,-27.4924704]).appendArc([362.0486716,-27.5099584],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
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

        