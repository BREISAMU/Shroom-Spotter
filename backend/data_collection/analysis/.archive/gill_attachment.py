from clean import fetch_general 
from helpers import string_to_list

def cap_color_analysis(shroom, input_attachment):
    attachments = string_to_list(shroom["gill-attachment"])

    for a in input_attachment:
        if(a in attachments):
            return 1.0
        
    return 0.0

    
data = fetch_general(column="name, gill-attachment")
for item in data:
    print(item)
    print(cap_color_analysis(item, ["a"]))