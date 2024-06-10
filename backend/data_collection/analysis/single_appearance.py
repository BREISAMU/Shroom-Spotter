
from .helpers import string_to_list

## Replace gill_attachment, gill_spacing, gill_color, stem_root, bruise_bleed, cap_color

def sa_analysis(shroom, category, input_value):
    value = string_to_list(shroom[category])

    for iv in input_value:
        if(iv in value):
            return 1.0
        
    return 0.0
    