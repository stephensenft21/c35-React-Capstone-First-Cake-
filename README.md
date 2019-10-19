# Welcome to First Cake! app.

> So, you’ve finally done it. You’ve made a genuine connection with another person, you’ve established a mutual interest, you’ve followed each other on Instagram and accidentally liked each other’s selfies from 2013. What comes next is the tricky part: going on an actual date.

> Now the hard part begins, every idea you will have is rife with potential disaster. Dinner and a movie? The movie could be terrible. A hike? Too sweaty. A picnic? Be serious. What if a hawk swoops down and steals all the food, and then there’s a tornado? I rest my case.

> Instead, keep it casual and use my app to find your next date spot at the click of a button. All I need from you is to ask your new date what they like for dessert! Awesome! Once you have their response, enter the answer by keyword search and my app will do all the heavy lifting for you... Lets be honest you've already done the hard part, use this revolutionary tool to help you find your "First Cake" spot.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine

###Installing

First, you'll need to clone down the repo into a directory. Open your terminal and enter

```
git clone git@github.com:stephensenft21c35-React-Capstone-First-Cake-.git
```

After that, open up your editor. You're going to need to do the following: You need to be in the main part of the app by entering in:

```
cd c35-React-Capstone-First-Cake-
```

Since we will be using some pre-populated data at the time, database.json has been set up for you, go to your terminal, enter the command

```
cd api
```

You will need to run the local json-server, run the command

```
json-server -p 5002 -w database.json
```

Before we run the application, you must run the command for the React app. In the terminal, run the following command to go back to the main directory

```
cd ../
```

Then enter the following command into the terminal to start using the application

```
npm start
```

####Built With
[<img src="./img/react-library-logo-README.png" height="50">](https://reactjs.org/)    - _*The web framework used*_
[<img src="./img/json-logo-ReadME..jpg" height="50" style="">](https://www.json.org) - _*Dependency Management*_
[<img src="../c-35-REACT-Capstone/img/reactstrap-logo-README.md.png" style="margin-top: 10px;" height="50"> ](https://www.npmjs.com/package/reactstrap) <div style="">-_*Component Based styling*_<div>

[css](https://www.w3schools.com/html/html_css.asp) - _*Secondary styling*_
[]()
[]()
[]()
[]()

Contributing
Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests to us.

Versioning
We use SemVer for versioning. For the versions available, see the tags on this repository.

#### Authors

- **_Stephen Senft_** - Initial work - FirstCake (_IMPORTANT_!!) **"insert logo here"**

### Users

```json
{ "id": int, "username": "varChar", "email": "varchar", "password": "varChar" }
```

### Comments

```json
{ "id": 1, "userId": 1, "comments": "What's ups?" }
```

### FavoriteCakes

```json
{
  "id": 1,
  "userId": 2,
  "image": "varChar",
  "responseId": int
}
```

### Friends **_\_\_\_"Stretch Goal"_**

```json
{ "id": 1, "userId": 1, "loggedInUserId": 3 }
```

#### User Stories

- ##### The Problem

_*A guy asks a girl out and suggests they go somewhere for dessert and coffee.*_

\*_She mentions that she loves chocolate cake.
He puts in a google search for places that serve chocolate cake.. He can't find any reliable results without a lot of research. It takes a decent bit of time and he still can't find a good place to go. Since He is a student of Nashville Software School the guy has learned to be a problem solver and navigate google. Once of his search results ends up being a local favorite and he decides to go there. He picks up some TO-GO dessert. They have a great time and the rest is history...._\*\*

_*The next day He thinks to himself. I wish I had an app to find local dessert spots in the surrounding area that gave the user description, location, and user rating.*_

_*He would like to save these spots for future use and add comments ie notes on how the experience was*_
