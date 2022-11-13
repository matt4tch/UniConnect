import googlemaps
from datetime import datetime

from googlemaps import convert

gmaps = googlemaps.Client(key='AIzaSyDD4V7yHsGuEztB3sRbcQFfjAZYyZhBHm4')

from datetime import datetime
# Request directions via public transit
now = datetime.now()
directions_result = gmaps.directions({
                   "lat" : 43.472107,
                   "lng" : -80.543938
                }, {
                   "lat" : 43.471593,
                   "lng" : -80.550003
                }, mode="walking", departure_time=now)

distance = directions_result[0]['legs'][0]['distance']['value']
distance = distance / 1000
print(f'{distance} km')
duration = directions_result[0]['legs'][0]['duration']['value']
minutes = duration // 60
seconds = duration % 60
print(f'{minutes} minutes and {seconds} seconds')
print(directions_result[0]['legs'][0]['end_address'])
print(directions_result[0]['legs'][0]['start_address'])
