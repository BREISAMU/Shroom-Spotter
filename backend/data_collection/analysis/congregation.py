from .clean import fetch_general
from .helpers import string_to_list
from .color_data import color_analysis
from .multi_appearance import ma_analysis
from .single_appearance import sa_analysis
from .numerical import num_analysis
from .surface import surf_analysis

color_cats = ["Spore-print-color", "veil-color", "stem-color", "gill-color", "cap-color"]
ma_cats = ["stem-root",  "gill-spacing", "gill-attachment", "cap-shape", "ring-type"]
sa_cats = ["does-bruise-or-bleed", "veil-type", "has-ring", "habitat", "season"]
num_cats = ["cap-diameter", "stem-height", "stem-width", ]
surf_cats = ["Cap-surface", "stem-surface", ]

def group_color(shroom, info_provided):
    similarity = 0
    for cat in color_cats:
        similarity += color_analysis(shroom, cat, string_to_list(info_provided[cat]))
    return similarity

def group_ma(shroom, info_provided):
    similarity = 0
    for cat in ma_cats:
        similarity += ma_analysis(shroom, cat, string_to_list(info_provided[cat]))
    return similarity

def group_sa(shroom, info_provided):
    similarity = 0
    for cat in sa_cats:
        similarity += sa_analysis(shroom, cat, string_to_list(info_provided[cat]))
    return similarity

def group_num(shroom, info_provided):
    similarity = 0
    for cat in num_cats:
        similarity += num_analysis(shroom, cat, info_provided)
    return similarity

def group_surf(shroom, info_provided):
    similarity = 0
    for cat in surf_cats:
        similarity += surf_analysis(shroom, cat, string_to_list(info_provided[cat]))
    return similarity
    
def predict(info_provided):
    data = fetch_general()
    similarities = []
    sim_total = 0
    for shroom in data:
        
        sim_total += group_color(shroom, info_provided)
        sim_total += group_ma(shroom, info_provided)
        sim_total += group_sa(shroom, info_provided)
        sim_total += group_num(shroom, info_provided)
        sim_total += group_surf(shroom, info_provided)


        similarities.append({"Name": shroom["name"],
                             "Similarity": sim_total / 21})
        sim_total = 0

    return similarities