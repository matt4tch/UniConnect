from flask import *
import json
import time
import algorithm

app = Flask(__name__)


@app.route('/')
def algorithm_page():
    return onefunctionalgorithm.determine_optimal_location()

@app.route('/', methods=['GET'])
def home_page():
    data_set = {'Message': 'Succsesfully loaded the Home page',
                'Timestamp': time.time()}
    json_dump = json.dumps(data_set)

    return json_dump


@app.route('/', methods=['GET'])
def request_page():
    user_query = str(request.args.get('user'))  # /user/?user=User_Name

    data_set = {'Message': f'Succsesfully got the request for {user_query}',
                'Timestamp': time.time()}
    json_dump = json.dumps(data_set)

    return json_dump


if __name__ == '__main__':
    app.run(port=3541)
