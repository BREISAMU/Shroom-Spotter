from clean import fetch_general 
from helpers import string_to_list

def cap_color_analysis(shroom, input_color):
    colors = string_to_list(shroom["gill-color"])

    for c in input_color:
        if(c in colors):
            return 1.0
        
    return 0.0

    
data = fetch_general(column="name, gill-color")
for item in data:
    print(item)
    print(cap_color_analysis(item, ["w"]))