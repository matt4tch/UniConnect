from flask import *
# from flask import Flask, render_template
import json, time
import onefunctionalgorithm

app = Flask(__name__)


@app.route('/index/')
def index():
    #data_set = {'Message': f'{message}', 'Timestamp': time.time()}
    #json_dump = json.dumps(data_set)
    return render_template('index.html')


@app.route('/', methods=['GET'])
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


if __name__ == '__main__':
    app.run(port=3541)
