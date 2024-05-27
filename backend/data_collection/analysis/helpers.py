def string_to_list(string):
    string = string.strip("[]")
    elements = string.split(", ")
    return elements
