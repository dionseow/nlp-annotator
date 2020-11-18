from flask import Flask, render_template
from flask_restful import Resource, Api, reqparse

import utils
import db
JSON_FILE = 'test.json'
DB_FILE = 'test.db'

# Read data and start db before starting flask server
data = utils.read_data(JSON_FILE)
TOTAL_ITEMS = len(data)
FIRST_ITEM = utils.append_p_tags(data.pop(0)['text'])
db.init_db(DB_FILE)

app = Flask(__name__)
api = Api(app)

@app.route('/')
def main():
    return render_template("index.html", text=FIRST_ITEM, total=TOTAL_ITEMS)

def get_next_item_to_annotate():
    global data
    res = {}
    if not data:
        res['done'] = True
        res['remaining'] = TOTAL_ITEMS
        res['text'] = '<p> Done! </p>'
        return res
    res['text'] = utils.append_p_tags(data.pop(0)['text'])
    items_remaining = len(data)
    res['remaining'] = TOTAL_ITEMS - items_remaining
    print(TOTAL_ITEMS - items_remaining)
    return res


annotated_text_parser = reqparse.RequestParser()
annotated_text_parser.add_argument('text', required=True)

class AnnotatedTextAPI(Resource):
    def post(self):
        args = annotated_text_parser.parse_args(strict=True)
        if args['text']:
            db.update_db(DB_FILE, utils.remove_p_tags(args['text']))
        results = get_next_item_to_annotate()
        if results:
            return results

api.add_resource(AnnotatedTextAPI, '/annotated-text')


if __name__ == "__main__":
    app.run()
