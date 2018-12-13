# Linkr
CUNY Tech Prep 2018 | Full Stack Web Application

## Frontend ([Source Code](https://github.com/crisjimenez120/Linkr-Client))

* Cristopher Jimenez ([GitHub](https://github.com/crisjimenez120))

## Backend ([Source Code](https://github.com/crisjimenez120/Linkr-server))

* Ismail Kheir ([GitHub](https://github.com/Ishmaelk))
* Saif Shakur ([GitHub](https://github.com/SaifShakur))

## Usage

### NOTE: PostgreSQL must be installed. To configure the database, username, and password, adjust the config.json file (located within the "config" folder) to a Postgres database of your choosing.
### ANOTHER NOTE: The client occupies port 3000 and the server occupies port 3001. These ports should be available for use when using Linkr

1) Clone the following repositories: 
crisjimenez120/Linkr-Client ([Frontend](https://github.com/crisjimenez120/Linkr-Client)) 
crisjimenez120/Linkr-server ([Backend](https://github.com/crisjimenez120/Linkr-server))

2) Install dependencies 
When the repositories are cloned onto your machine, change directory to .../Linkr-Client
and type:
```
npm install
```
Repeat the same for Linkr-server.

3) Start the application
In each of the directories (Linkr-Client & Linkr-server) type:
```
npm start
```
This will launch the frontend (when executed in the Linkr-Client directory) and the backend (when executed in the Linkr-server directory)


## Inspiration
Have you ever found yourself free one day, then you hit up your friends to go see a movie? Perhaps go get some food? Maybe a movie? So have we! We'd go to our phones, open the group chat, then as "Is anyone free X-day?" Then we'd wait....and wait....oh look! One person is free! So you wait longer...and longer...oh man, another person can't make it. Dang it, the whole crew can't make it. __If only there were an application that allowed myself and my friends to input our schedules and it'd overlay my group's schedule so we can see when we are/aren't free.__ 

## Features
__Creating Events__
- Users can add events that pertain to their personal schedules that pertain to whichever date they choose



__Creating groups__
- Users are able create groups. This includes the name of the group, and a description about the group.

![](creating_groups.gif)


__Add users to groups__
- The user is able to add other users to any group that they choose

![](add_to_groups.gif)

__Toggle between personal/group schedule__
- The user is able to switch between their schedule and his/her selected group's schedule




### Special Thanks: Edgardo Molina | Joelle Bernabo 
