from flask import *
from flask_cors import CORS
import json, time
import onefunctionalgorithm

app = Flask(__name__)
CORS(app)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/index/', methods=['GET'])
def home_page():
    data_set = onefunctionalgorithm.determine_optimal_location()
    json_dump = json.dumps(data_set)

    return json_dump


@app.route('/user/', methods=['GET'])
def request_page():
    user_query = str(request.args.get('user'))  # /user/?user=User_Name

    data_set = {'Message': f'{user_query}', 'Timestamp': time.time()}
    json_dump = json.dumps(data_set)

    return json_dump


@app.route("/userInfo/", methods=["POST"], strict_slashes=False)
def get_data():
    your_lat = request.json['yourLat']
    your_lng = request.json['yourLat']
    friend_lat = request.json['friendLat']
    friend_lng = request.json['friendLng']

    print(your_lat + " " + your_lng + " " + friend_lat + " " + friend_lng)


@app.route('/location/', methods=['POST'])
def request_page1():
    request_data = request.get_json()
    print(request_data)

    your_lat = request_data['yourLat']
    your_lng = request_data['yourLng']
    friend_lat = request_data['friendLat']
    friend_lng = request_data['friendLng']

    data_set = ({'status': 200, 'ok': True, 'Results': [{'your_lat': f'{your_lat}'}, {'your_lng': f'{your_lng}'},
                                                        {'friend_lat': f'{friend_lat}'},
                                                        {'friend_lng': f'{friend_lng}'}]})
    json_dump = json.dumps(data_set)

    return json_dump


if __name__ == '__main__':
    app.run(port=3541)
