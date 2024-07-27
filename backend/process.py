from .data_collection.analysis.congregation import predict

tst_shroom = {
            'stem-height': '[3]',
            'stem-width': '[1]', 
            'cap-diameter': '[2]', 
            'does-bruise-or-bleed': '[t]',
            'has-ring': '[f]', 
            'cap-shape': '[s]', 
            'Cap-surface': '[s]', 
            'cap-color': '[u]', 
            'gill-attachment': '[f]', 
            'gill-spacing': '[f]', 
            'gill-color': '[e]', 
            'stem-root': '[c]', 
            'stem-surface': '[k]', 
            'stem-color': '[y]', 
            'veil-type': '[p]', 
            'veil-color': '[n]', 
            'ring-type': '[f]', 
            'Spore-print-color': '[n]', 
            'habitat': '[u]', 
            'season': '[u, a]'}

sample = tst_shroom

tstData = [{"Name": "six", "Similarity":6.111111111},
           {"Name": "three", "Similarity":3.111111111},
           {"Name": "one", "Similarity":1.111111111},
           {"Name": "two", "Similarity":2.111111111},
           {"Name": "seven", "Similarity":7.111111111},
           {"Name": "four", "Similarity":4.111111111},
           {"Name": "five", "Similarity":5.111111111}
           ] 

def insertion_sort(A):
    for j in range(1, len(A)):
        key = A[j]
        i = j - 1
        while i >= 0 and key["Similarity"] > A[i]["Similarity"]:
            A[i + 1] = A[i]
            i -= 1
        A[i + 1] = key
    return A

data = predict(tst_shroom)
sorted_data = insertion_sort(data)

print(type(sorted_data[0]))
print(sorted_data[0]['Name'])
print(sorted_data[0]['Similarity'])

# for i in range(10):
#     print(sorted_data[i])

def get_similarity_info(
    cap_diameter: float,
    stem_height: float,
    stem_width: float,
    bruise_or_bleed: bool,
    has_ring: bool,
    cap_shape: list,
    cap_surface: list,
    cap_color: list,
    gill_attachment: list,
    gill_spacing: list,
    gill_color: list,
    stem_root: list,
    stem_surface: list,
    stem_color: list,
    veil_color: list,
    ring_type: list,
    spore_print_color: list,
    habitat: list,
    season: list,
    veil_type: list):
        b_o_b = ["f"]
        h_ring = ["f"]

        if(bruise_or_bleed):
             b_o_b = ["t"]
        if(has_ring):
             h_ring = ["t"]

        shroom = {
                'cap-diameter': [cap_diameter], 
                'cap-shape': cap_shape, 
                'Cap-surface': cap_surface, 
                'cap-color': cap_color, 
                'does-bruise-or-bleed': b_o_b, 
                'gill-attachment': gill_attachment, 
                'gill-spacing': gill_spacing, 
                'gill-color': gill_color, 
                'stem-height': [stem_height], 
                'stem-width': [stem_width], 
                'stem-root': stem_root, 
                'stem-surface': stem_surface, 
                'stem-color': stem_color, 
                'veil-type': veil_type, 
                'veil-color': veil_color, 
                'has-ring': h_ring, 
                'ring-type': ring_type, 
                'Spore-print-color': spore_print_color, 
                'habitat': habitat, 
                'season': season}

        data = predict(shroom)
        sorted_data = insertion_sort(data)
        return sorted_data[0]

        
        



