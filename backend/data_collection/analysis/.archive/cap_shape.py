from clean import fetch_general 
from helpers import string_to_list

def cap_shape_analysis(shroom, input_shapes):
    scoring = 0.0
    ctr = 0.0

    shapes = string_to_list(shroom["cap-shape"])
    for s in shapes:
        if(s in input_shapes):
            ctr += 1.0
            scoring += 1.0
        else:
            scoring -= 1 / (len(shapes))
            ctr += 1.0

    for s in input_shapes:
        if(s in shapes):
            ctr += 1.0
            scoring += 1.0
        else:
            scoring -= 1 / (len(input_shapes))
            ctr += 1.0

    if(ctr == 0 or scoring <= 0):
        return 0.0
    else:
        return scoring / ctr

    
data = fetch_general(column="name, cap-shape")
for item in data:
    print(item)
    print(cap_shape_analysis(item, ["f"]))