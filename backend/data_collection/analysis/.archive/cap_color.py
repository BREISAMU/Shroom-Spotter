from clean import fetch_general 
from helpers import string_to_list

def cap_color_analysis(shroom, input_colors):
    colors = string_to_list(shroom["cap-color"])

    for c in input_colors:
        if(c in colors):
            return 1.0
        
    return 0.0

    
data = fetch_general(column="name, cap-color")
for item in data:
    print(item)
    print(cap_color_analysis(item, ["n", "g"]))