from clean import fetch_general 

def avg_diameter_analysis(diameter, avg):
    if (abs(diameter - avg) <= (avg / 5)):
        return 1
    elif (abs(diameter - avg) <= (avg / 4)):
        return 0.75
    elif (abs(diameter - avg) <= (avg / 3)):
        return 0.25
    elif (abs(diameter - avg) <= (avg / 2)):
        return 0.25
    else: 
        return 0
    
def range_diameter_analysis(diameter, min, max):
    if(diameter <= max * 1.25 and diameter >= min * 0.8):
        return 1
    else:
        return 0

def cap_diameter_analysis(shroom, diameter):
    shroom_diameter = eval(shroom["cap-diameter"])
    if(len(shroom_diameter) == 1):
        avg = shroom_diameter[0]
        # d = avg_diameter_analysis(diameter, avg)
        # print(d)
        return avg_diameter_analysis(diameter, avg)
    else:
        min = shroom_diameter[0]
        max = shroom_diameter[1]
        return range_diameter_analysis(diameter, min, max)

data = fetch_general(column="name, cap-diameter")
for item in data:
    cap_diameter_analysis(item, 39)




# p_diameter_total = 0
# p_count = 0
# def increment_p(diameter):
#     p_diameter_total += diameter
#     p_count += 1

# e_diameter_total = 0
# e_count = 0
# def increment_e(diameter):
#     e_diameter_total += diameter
#     e_count += 1

# def find_averages():
#     for point in primary_correlation:
        

# find_averages()

# print(f"Poisonous average:   {p_diameter_total / p_count}\n")
# print(f"Edible average:   {e_diameter_total / e_count}\n")
