from clean import fetch_general 

def avg_width_analysis(width, avg):
    if (abs(width - avg) <= (avg / 5)):
        return 1.0
    elif (abs(width - avg) <= (avg / 4)):
        return 0.75
    elif (abs(width - avg) <= (avg / 3)):
        return 0.25
    elif (abs(width - avg) <= (avg / 2)):
        return 0.25
    else: 
        return 0.0
    
def range_width_analysis(width, min, max):
    if(width <= max * 1.25 and width >= min * 0.8):
        return 1.0
    else:
        return 0.0

def stem_width_analysis(shroom, width):
    shroom_width = eval(shroom["stem-width"])
    if(len(shroom_width) == 1):
        avg = shroom_width[0]
        return avg_width_analysis(width, avg)
    else:
        min = shroom_width[0]
        max = shroom_width[1]
        return range_width_analysis(width, min, max)

data = fetch_general(column="name, stem-width")
for item in data:
    print(item)
    print(stem_width_analysis(item, 0.9))




# p_width_total = 0
# p_count = 0
# def increment_p(width):
#     p_width_total += width
#     p_count += 1

# e_width_total = 0
# e_count = 0
# def increment_e(width):
#     e_width_total += width
#     e_count += 1

# def find_averages():
#     for point in primary_correlation:
        

# find_averages()

# print(f"Poisonous average:   {p_width_total / p_count}\n")
# print(f"Edible average:   {e_width_total / e_count}\n")
