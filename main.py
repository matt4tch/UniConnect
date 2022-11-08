import googlemaps
from datetime import datetime

gmaps = googlemaps.Client(key='AIzaSyDD4V7yHsGuEztB3sRbcQFfjAZYyZhBHm4')

# Geocoding an address
geocode_result = gmaps.geocode('Village 1, Waterloo ON')
# Look up an address with reverse geocoding
reverse_geocode_result = gmaps.reverse_geocode((40.714224, -73.961452))

# Request directions via public transit
now = datetime.now()
directions_result = gmaps.directions("Ron Eydt Village",
                                     "Waterloo, ON",
                                     mode="walking",
                                     departure_time=now)
print(directions_result[0]['legs'][0]['distance'])
