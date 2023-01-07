import googlemaps
from googlemaps import convert
from datetime import datetime, time

from googlemaps.geolocation import geolocate

# CONSTANT DEFINITIONS
locations = [{
    "lat": 43.4716099,
    "lng": -80.54986579999999  # Village 1 Waterloo
}, {
    "lat": 43.4721517,
    "lng": -80.5439318  # Mathematics and Computer
}, {
    "lat": 43.4697504,
    "lng": -80.5423533  # Dana Porter Library
}, {
    "lat": 43.4677637,
    "lng": -80.5415616  # Hagey Hall
}, {
    "lat": 43.4729293,
    "lng": -80.5420011  # Davis Centre Library
},
    {
        "lat": 43.4703443,
        "lng": -80.5362798  # Claudette Miller Hall
    }, {
        "lat": 43.4730414,
        "lng": -80.53952389999999  # Engineering 7 Waterloo
    },
    {
        "lat": 43.4717226,
        "lng": -80.55248859999999  # Mackenzie King Village
    },

    {
        "lat": 43.4716415,
        "lng": -80.5453385  # Student Life Centre Waterloo
    }]

names = ['Village 1 Waterloo', 'Mathematics and Computer Waterloo', 'Dana Porter Library', 'Hagey Hall',
         'Davis Centre Library',
         'Claudette Miller Hall', 'Engineering 7 Waterloo', 'Mackenzie King Village', 'SLC Waterloo']

alternate_names = {'v1': names[0],
                   'mc': names[1],
                   'dp': names[2],
                   'hh': names[3],
                   'dc': names[4],
                   'cmh': names[5],
                   'e7': names[6],
                   'mkv': names[7],
                   'slc': names[8]}

now = datetime.now()

# Retrieves a Google Maps Object
gmaps = googlemaps.Client(key='AIzaSyDD4V7yHsGuEztB3sRbcQFfjAZYyZhBHm4')


def determine_optimal_location(lng1, lng2, lat1, lat2, string_prefs):
    prefs = []
    for i in string_prefs:
        integer = int(i)
        prefs.append(integer)

    # Variables to return
    optimal_value_index = 0
    minutes1 = 0
    seconds1 = 0
    minutes2 = 0
    seconds2 = 0

    algorithm_values = []
    duration1s = []
    duration2s = []

    for index in range(0, len(locations)):
        # Get Directions from both users to loc
        directions = gmaps.directions(
            locations[index], {"lat": lat1, "lng": lng1}, mode="walking")
        directions2 = gmaps.directions(
            locations[index], {"lat": lat2, "lng": lng2}, mode="walking")

        # Extract Duration for both users to loc (duration taken in seconds)
        duration = directions[0]['legs'][0]['duration']['value']
        duration2 = directions2[0]['legs'][0]['duration']['value']

        # Place-matching algorithm based off duration and inputted weightings
        abs_diff_weighting = 0.5
        sum_weighting = 0.5
        user_pref_weighting = 0.25
        print(((abs(duration2 - duration)) * abs_diff_weighting))
        print(((duration + duration2) * sum_weighting))
        print(user_pref_weighting * (11 - prefs[index]) * 450)
        calc = ((abs(duration2 - duration)) * abs_diff_weighting) + ((duration + duration2)
                                                                     * sum_weighting) + (
                       user_pref_weighting * (11 - prefs[index]) * 50)

        # Store the duration data for each prospective trip for both users and the algorithm result for each loc
        algorithm_values.append(calc)
        duration1s.append(duration)
        duration2s.append(duration2)

        # Determine the best location
        optimal_value = min(algorithm_values)

        # Find the related index of the optimal location in terms of the lists, duration data were stored in
        # so we can extract necessary information for output
        optimal_value_index = algorithm_values.index(optimal_value)
        optimal_duration1 = duration1s[optimal_value_index]
        optimal_duration2 = duration2s[optimal_value_index]
        minutes1 = optimal_duration1 // 60
        seconds1 = optimal_duration1 % 60
        minutes2 = optimal_duration2 // 60
        seconds2 = optimal_duration2 % 60

    return {'Study_Location': f'{names[optimal_value_index]}',
            'User_1_Time': f'{minutes1}:{seconds1}', 'User_2_Time': f'{minutes2}:{seconds2}'}
