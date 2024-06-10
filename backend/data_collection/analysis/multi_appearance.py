from .helpers import string_to_list

def ma_analysis(shroom, category, input_datapoints):
    scoring = 0.0
    ctr = 0.0

    datapoints = string_to_list(shroom[category])
    for s in datapoints:
        if(s in input_datapoints):
            ctr += 1.0
            scoring += 1.0
        else:
            scoring -= 1 / (len(datapoints))
            ctr += 1.0

    for s in input_datapoints:
        if(s in datapoints):
            ctr += 1.0
            scoring += 1.0
        else:
            scoring -= 1 / (len(input_datapoints))
            ctr += 1.0

    if(ctr == 0 or scoring <= 0):
        return 0.0
    else:
        return scoring / ctr