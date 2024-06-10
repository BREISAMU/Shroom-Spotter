
from .helpers import string_to_list

## Replace cap_surface, stem_surface

def surf_analysis(shroom, category, input_surfaces):
    scoring = 0.0
    ctr = 0.0

    surfaces = string_to_list(shroom[category])

    for s in surfaces:
        if(s in input_surfaces):
            ctr += 1.0
            scoring += 1.0
        else:
            1 / (len(surfaces))
            ctr += 1.0

    for s in input_surfaces:
        if(s in surfaces):
            ctr += 1.0
            scoring += 1.0
        else:
            scoring -= 1 / (len(input_surfaces))
            ctr += 1.0

    if(ctr == 0 or scoring <= 0):
        return 0.0
    else:
        return scoring / ctr
