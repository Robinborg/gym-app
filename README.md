# Gym App
Web app to keep track of your gym training.<br/>
>Try it yourself: https://robinborg.github.io/gym-app/

## Reason
Wanted to make an app that uses the information provided in this podcast:
>https://hubermanlab.com/dr-andy-galpin-how-to-build-strength-muscle-size-and-endurance/
- Main timer 60:00 minutes<br/>
- 3 to 5 exercises<br/>
- 3 to 5 times a week<br/>
- 3 to 5 sets<br/>
- 3 to 5 repetitions<br/>
- 3 to 5 minutes rest<br/>
If you are working for strength use 85 % of maximum weight<br/>
If you are working for power use 40% to 70 % of maximum weight, because power = speed * strength

## Gym app layout
- Main timer keeping track of time, default 60 minutes
- Track workouts and highlight current workout, show current set of sets
- Show current repetitions, increments sets
- Pause button: 3 to 5 minutes rest

## Internal layout
- Following "ducks" pattern to structure the program<br/>
- src/features/sets contain the redux setup and the setList that displays the user entered exercises<br/>
- src/features/timers contain the redux setup for the break timer (3, 4 or 5 minute timer) and the 60 minute timer<br/>
- src/app contain all the visual Components and react-hook-form Component<br/>
	
## App structure
- React for building the frontend<br/>
- Redux for controling state<br/>
- react-hook-form for getting user data<br/>
- Jest for testing<br/>

## Run App locally and Test
- git clone https://github.com/Robinborg/gym-app.git <br/>
- cd /your-path-to-program/gym-app<br/>
- npm start to run app<br/>
- npm test to run tests<br/>
