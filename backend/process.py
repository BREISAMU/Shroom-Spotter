from data_collection.analysis.congregation import predict

tst_shroom = {
              'cap-diameter': '[1.25]', 
              'cap-shape': '[x, f, s]', 
              'Cap-surface': '[s]', 
              'cap-color': '[y]', 
              'does-bruise-or-bleed': '[f]', 
              'gill-attachment': '[f]', 
              'gill-spacing': '[f]', 
              'gill-color': '[f]', 
              'stem-height': '[4]', 
              'stem-width': '[7]', 
              'stem-root': '', 
              'stem-surface': '', 
              'stem-color': '[y]', 
              'veil-type': '', 
              'veil-color': '', 
              'has-ring': '[f]', 
              'ring-type': '[f]', 
              'Spore-print-color': '', 
              'habitat': '[d]', 
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

# data = predict(tst_shroom)
# sorted_data = insertion_sort(data)

# for i in range(10):
#     print(sorted_data[i])

