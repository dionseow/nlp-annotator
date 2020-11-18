import json

def read_data(file_name):
    try:
        f = open(file_name,)
        data = json.load(f)
        return data
    except Exception:
        print('Cant read input file')

def append_p_tags(text):
    return '<p>' + text + '</p>'

def remove_p_tags(text):
    return text.replace('<p>', '').replace('</p>', '')
