from clean import fetch_general 

def avg_height_analysis(height, avg):
    if (abs(height - avg) <= (avg / 5)):
        return 1.0
    elif (abs(height - avg) <= (avg / 4)):
        return 0.75
    elif (abs(height - avg) <= (avg / 3)):
        return 0.25
    elif (abs(height - avg) <= (avg / 2)):
        return 0.25
    else: 
        return 0.0
    
def range_height_analysis(height, min, max):
    if(height <= max * 1.25 and height >= min * 0.8):
        return 1.0
    else:
        return 0.0

def stem_height_analysis(shroom, height):
    shroom_height = eval(shroom["stem-height"])
    if(len(shroom_height) == 1):
        avg = shroom_height[0]
        return avg_height_analysis(height, avg)
    else:
        min = shroom_height[0]
        max = shroom_height[1]
        return range_height_analysis(height, min, max)

data = fetch_general(column="name, stem-height")
for item in data:
    print(item)
    print(stem_height_analysis(item, 7))




# p_height_total = 0
# p_count = 0
# def increment_p(height):
#     p_height_total += height
#     p_count += 1

# e_height_total = 0
# e_count = 0
# def increment_e(height):
#     e_height_total += height
#     e_count += 1

# def find_averages():
#     for point in primary_correlation:
        

# find_averages()

# print(f"Poisonous average:   {p_height_total / p_count}\n")
# print(f"Edible average:   {e_height_total / e_count}\n")
