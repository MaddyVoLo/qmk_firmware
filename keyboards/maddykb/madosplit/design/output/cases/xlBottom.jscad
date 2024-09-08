function BigBoardL_extrude_1_outline_fn(){
    return new CSG.Path2D([[126.9513284,-27.5099584],[89.4990982,-35.1728188]]).appendArc([87.9,-37.1322263],{"radius":2,"clockwise":false,"large":false}).appendPoint([87.9,-109.0375643]).appendArc([89.2935926,-110.9434158],{"radius":2,"clockwise":false,"large":false}).appendPoint([97.7749041,-113.6420149]).appendArc([97.8248803,-113.6586443],{"radius":2,"clockwise":true,"large":false}).appendPoint([136.5883929,-127.1264801]).appendArc([137.0226291,-127.2248822],{"radius":2,"clockwise":false,"large":false}).appendPoint([221.6659649,-136.6850709]).appendArc([223.8639043,-135.0076818],{"radius":2,"clockwise":false,"large":false}).appendPoint([229.3970572,-99.768742]).appendArc([229.4025869,-99.7312048],{"radius":2,"clockwise":false,"large":false}).appendPoint([238.6871986,-32.272698]).appendArc([236.7058769,-30],{"radius":2,"clockwise":false,"large":false}).appendPoint([206.1441452,-30]).appendArc([205.8573444,-29.9793295],{"radius":2,"clockwise":true,"large":false}).appendPoint([157.2951438,-22.9427657]).appendArc([156.7052191,-22.9451997],{"radius":2,"clockwise":false,"large":false}).appendPoint([127.0491062,-27.4924704]).appendArc([126.9513284,-27.5099584],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
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

        