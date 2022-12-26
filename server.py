from flask import *
# from flask import Flask, render_template
import json, time
import onefunctionalgorithm

app = Flask(__name__)

message = onefunctionalgorithm.determine_optimal_location()


#@app.route('/')
#def index():
#    data_set = {'Message': f'{message}', 'Timestamp': time.time()}
#    json_dump = json.dumps(data_set)
#    return json_dump #render_template('index.html')

#@app.route('/')
#def algorithm_page():
#    return onefunctionalgorithm.determine_optimal_location()
# url_for('static', filename='style.css')
# @app.route('/', methods=['GET'])
# def home_page():
#    data_set = {'Message': 'Succsesfully loaded the Home page', 'Timestamp': time.time()}
#    json_dump = json.dumps(data_set)
#
#    return json_dump
# url_for('static', filename='style.css')
# @app.route('/reports/<path:path>')
# def send_report(path):
#    return send_from_directory('reports', path)

@app.route('/', methods=['GET'])
def request_page():
    user_query = str(request.args.get('user'))  # /user/?user=User_Name

    data_set = {'Message': f'{message}', 'Timestamp': time.time()}
    json_dump = json.dumps(data_set)

    return json_dump


if __name__ == '__main__':
    app.run(port=3541)
