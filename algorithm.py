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
            },

                {
                "lat":43.458290,
                "lng":-80.539581
            }]

names = ['Village 1 Waterloo', 'Mathematics and Computer', 'Dana Porter Library', 'Hagey Hall', 'Davis Centre Library',
         'Claudette Miller Hall', 'Engineering 7 Waterloo', 'Mackenzie King Village', 'Student Life Centre Waterloo' ]

now = datetime.now()

# Retrieves a Google Maps Object
gmaps = googlemaps.Client(key='AIzaSyDD4V7yHsGuEztB3sRbcQFfjAZYyZhBHm4')



def rate_preferences():
    possible_ratings = ['1','2','3','4','5','6','7','8','9','10']
    preference_ranks = []
    for name in names:
        preference_rank = input(f'Please enter a personal preference ranking on a scale of 1-10 on {name}')
        while preference_rank not in possible_ratings:
            print("Please enter a valid integer between 1 and 10")
            preference_rank = input(f'Please enter a personal preference ranking on a scale of 1-10 on {name}')
        if preference_rank in possible_ratings:
            preference_ranks.append(int(preference_rank))
    return preference_ranks

def determine_optimal_location():
    user1_name = input("Enter Your Name")
    user2_name = input("Enter Your Friend's Name")
    user1_location = input("Enter Your Address")
    while user1_location not in names:
        print("Please enter the given names one of the following loations: 'Village 1', \n 'Mathematics and Computer', 'Dana Porter Library', 'Hagey Hall', 'Davis Centre Library', \n "
               "'Claudette Miller Hall', 'Engineering 7', 'Mackenzie King Village', 'Student Life Centre', Ron Eydt Village")
        user1_location = input("Enter Your Friend's Name")

    user2_location = input("Enter Your Friend's Address")
    while user2_location not in names:
        print("Please enter the given names one of the following loations: 'Village 1', \n 'Mathematics and Computer', 'Dana Porter Library', 'Hagey Hall', 'Davis Centre Library', \n "
               "'Claudette Miller Hall', 'Engineering 7', 'Mackenzie King Village', 'Student Life Centre', Ron Eydt Village")
        user2_location = input("Enter Your Friend's Name")

    preference_ranks = rate_preferences()

    algorithm_values = []
    duration1s = []
    duration2s = []

    for index in range(0, len(locations)):
        ##Get Directions from both users to loc
        directions = gmaps.directions(locations[index], user1_location, mode="walking", departure_time=now)
        directions2 = gmaps.directions(locations[index], user2_location, mode="walking", departure_time=now)

        #Extract Duration for both users to loc (duration taken in seconds)
        duration = directions[0]['legs'][0]['duration']['value']
        duration2 = directions2[0]['legs'][0]['duration']['value']

        #Place-matching algorithm based off duration and inputted weightings
        abs_diff_weighting = 0.35
        sum_weighting = 0.35
        user_pref_weighting = 0.30
        calc = ((abs(duration2 - duration)) * abs_diff_weighting) + ((duration + duration2) * sum_weighting) + (user_pref_weighting * (11 - preference_ranks[index]) * 50)

        #Store the duration data for each prospective trip for both users and the algorithm result for each loc
        algorithm_values.append(calc)
        duration1s.append(duration)
        duration2s.append(duration2)

        #Determine the best location
        optimal_value = min(algorithm_values)

        #Find the related index of the optimal location in terms of the lists, duration data were stored in
        #so we can extract necessary information for output
        optimal_value_index = algorithm_values.index(optimal_value)
        optimal_duration1 = duration1s[optimal_value_index]
        optimal_duration2 = duration2s[optimal_value_index]
        minutes1 = optimal_duration1 // 60
        seconds1 = minutes1 % 60
        minutes2 = optimal_duration2 // 60
        seconds2 = minutes2 % 60

    print(f'The optimal common study location is: {names[optimal_value_index]}')
    print (f'It will take {user1_name} {minutes1} minutes and {seconds1} seconds to get to {names[optimal_value_index]}')
    print (f'It will take {user2_name} {minutes2} minutes and {seconds2} seconds to get to {names[optimal_value_index]}')

#Main
determine_optimal_location()
