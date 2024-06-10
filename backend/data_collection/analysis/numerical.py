
## Replace stem_height, stem_width, cap_diameter

def avg_analysis(datapoint, avg):
    if (abs(datapoint - avg) <= (avg / 5)):
        return 1.0
    elif (abs(datapoint - avg) <= (avg / 4)):
        return 0.75
    elif (abs(datapoint - avg) <= (avg / 3)):
        return 0.25
    elif (abs(datapoint - avg) <= (avg / 2)):
        return 0.25
    else: 
        return 0.0
    
def range_analysis(datapoint, min, max):
    if(datapoint <= max * 1.25 and datapoint >= min * 0.8):
        return 1.0
    else:
        return 0.0

def num_analysis(shroom, category, datapoint):
    shroom_datapoint = shroom[category]
    if(type(shroom[category]) == str):
        shroom_datapoint = eval(shroom[category])

    input_datapoint = datapoint[category][0]
    if(type(datapoint[category]) == str):
        input_datapoint = eval(datapoint[category])[0]

    if(len(shroom_datapoint) == 1):
        avg = shroom_datapoint[0]
        return avg_analysis(input_datapoint, avg)
    else:
        min = shroom_datapoint[0]
        max = shroom_datapoint[1]
        return range_analysis(input_datapoint, min, max)