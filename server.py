import flask
from flask import *
from flask_cors import CORS, cross_origin
import json
import onefunctionalgorithm
import location_config

app = Flask(__name__)
CORS(app)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/location_info/', methods=['POST'])
def request_page():
    user_query = request.args.get('id')

    print(user_query)
    if user_query is None:
        location_details = location_config.location_details
    else:
        location_details = location_config.location_details['locations'][int(user_query) - 1]

    json_dump = json.dumps(location_details)

    return json_dump


@app.route('/location/', methods=['POST'])
def request_page1():
    request_data = request.get_json()
    print(request_data)

    your_lat = request_data['yourLat']
    your_lng = request_data['yourLng']
    friend_lat = request_data['friendLat']
    friend_lng = request_data['friendLng']
    preferences = request_data['preferences']

    data = ({'status': 200, 'ok': True, 'Results': [{'your_lat': f'{your_lat}'}, {'your_lng': f'{your_lng}'},
                                                        {'friend_lat': f'{friend_lat}'},
                                                        {'friend_lng': f'{friend_lng}'}]})
    json_dump = json.dumps(data)

    return json_dump


if __name__ == '__main__':
    app.run(port=3541)
