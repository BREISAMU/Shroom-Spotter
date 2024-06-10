from .helpers import string_to_list

## Replace gill_color, stem_color

def color_analysis(shroom, category, input_colors):
    scoring = 0.0
    ctr = 0.0

    colors = string_to_list(shroom[category])
    for c in colors:
        if(c in input_colors):
            ctr += 1.0
            scoring += 1.0
        else:
            scoring -= 1 / (len(colors))
            ctr += 1.0

    for c in input_colors:
        if(c in colors):
            ctr += 1.0
            scoring += 1.0
        else:
            scoring -= 1 / (len(input_colors))
            ctr += 1.0

    if(ctr == 0 or scoring <= 0):
        return 0.0
    else:
        return scoring / ctr