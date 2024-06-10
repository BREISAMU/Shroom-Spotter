def string_to_list(string):
    if(type(string) == str):
        string = string.strip("[]")
        elements = string.split(", ")
        return elements
    else:
        return string
