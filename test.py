import googlemaps
from googlemaps import convert
from datetime import datetime

from googlemaps.geolocation import geolocate

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
            },
                {
                "lat" : 43.458290,
                 "lng": -80.53950
            },  {
                "lat": 43.478710,
                "lng": -80.562100
            },
                {
                "lat": 43.452760,
                "lng": -80.552790
             }]
names = ['V1', 'MC', 'DP', 'HH', 'DC Library', 'CMH', 'E7', 'MKV']

now = datetime.now()

# Retrieves a Google Maps Object
gmaps = googlemaps.Client(key='AIzaSyDD4V7yHsGuEztB3sRbcQFfjAZYyZhBHm4')


algorithm_values = []
duration1s = []
duration2s = []
for loc in locations[2:]:
    directions = gmaps.directions(loc, locations[0], mode="walking", departure_time=now)
    directions2 = gmaps.directions(loc, locations[1], mode="walking", departure_time=now)
    duration = directions[0]['legs'][0]['duration']['value']
    duration2 = directions2[0]['legs'][0]['duration']['value']
    abs_diff_weighting = 0.5
    sum_weighting = 0.5
    calc = ((abs(duration2 - duration)) * abs_diff_weighting) + ((duration + duration2) * sum_weighting)
    algorithm_values.append(calc)
    duration1s.append(duration)
    duration2s.append(duration2)
    optimal_value = min(algorithm_values)
    optimal_value_index = algorithm_values.index(optimal_value)
    optimal_duration1 = duration1s[optimal_value_index]
    optimal_duration2 = duration2s[optimal_value_index]
    minutes1 = optimal_duration1 // 60
    seconds1 = minutes1 % 60
    minutes2 = optimal_duration2 // 60
    seconds2 = minutes2 % 60
    print(duration)
    print(duration2)
print(f'From {names[optimal_value_index]} to {names[0]} it takes User 1 {minutes1} minutes and {seconds1} seconds and User 2 {minutes2} minutes and {seconds2} seconds')
