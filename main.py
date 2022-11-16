import googlemaps
from googlemaps import convert
from datetime import datetime

# CONSTANT DEFINITIONS
locations = [{
                "lat" : 43.472107,
                "lng" : -80.543938
             }, {
                "lat" : 43.471593,
                "lng" : -80.550003
             }, {
                "lat" : 43.469592,
                "lng" : -80.542266
            }, {
                "lat" : 43.467925,
                "lng" : -80.541740
            }, {
                "lat" : 43.472329,
                "lng" : -80.542001
            }]
names = ['V1', 'MC', 'DP', 'HH', 'DC Library']

# Retrieves a Google Maps Object
gmaps = googlemaps.Client(key='AIzaSyDD4V7yHsGuEztB3sRbcQFfjAZYyZhBHm4')

# Request directions via walking
now = datetime.now()


directions_result = gmaps.directions({
                "lat" : 43.472107,
                "lng" : -80.543938
             }, {
                "lat" : 43.472329,
                "lng" : -80.542001
            }, mode="walking", departure_time=now)

# Path Finder Algorithm:
# Creates a list with all possible combinations of two locations (list of two dictionaries)
# Each list is passed into gmaps.directions() to retrieve data
#

distance = directions_result[0]['legs'][0]['distance']['value']
distance = distance / 1000
print(f'{distance} km')
duration = directions_result[0]['legs'][0]['duration']['value']
minutes = duration // 60
seconds = duration % 60
print(f'{minutes} minutes and {seconds} seconds')
print(directions_result[0]['legs'][0]['end_address'])
print(directions_result[0]['legs'][0]['start_address'])

