from clean import fetch_general 
from helpers import string_to_list

def bruise_bleed_analysis(shroom, input_bruise_bleed):
    b_o_b = string_to_list(shroom["does-bruise-or-bleed"])
    if(b_o_b == input_bruise_bleed):
        return 1.0
    else:
        return 0.0

data = fetch_general(column="name, does-bruise-or-bleed")
for item in data:
    print(item)
    print(bruise_bleed_analysis(item, ["f"]))