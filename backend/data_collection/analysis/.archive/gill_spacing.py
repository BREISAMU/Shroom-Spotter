from clean import fetch_general 
from helpers import string_to_list

def cap_color_analysis(shroom, input_spacing):
    spacings = string_to_list(shroom["gill-spacing"])

    for s in input_spacing:
        if(s in spacings):
            return 1.0
        
    return 0.0

    
data = fetch_general(column="name, gill-spacing")
for item in data:
    print(item)
    print(cap_color_analysis(item, ["c"]))