# Vegilicious (testing)

![Vegilicious home screen](./userdesign/vegelicious_screen.png)

An app for farmers to post pictures and descriptions of their produce and for users to notify farmers of their intention to buy these.
Users can then arrange to buy and collect produce and leave reviews on the produce they have bought. Reviews and produce can be seen by all users.

## Goal

Technology has meant that people can now access food online in a variety of apps. There is also a need for small local producers to have a space where they can showcase the produce they have so that people can purchase it.  
We worked hard to come up with a project idea during our first sprint and finally we decided on the idea of this app. The project was coded in React and Typescript and we used Node.js for the backend.

### User Interface

The user interface changed a bit from our original wireframes.
![User login ](./userdesign/user_login.png)

![User sign up](./userdesign/user_signup.png)

![Search Results](./userdesign/search_results.png)

### Collaboration

The app was designed and worked on by 7 team members. Tasks were divided into front end and back end. Valeria was the product owner and held meetings at least 3 times a week as well as doing some backend coding. Three members of the team, Valeria, Justin and Robi were engaged working the backend with Robi working on deployment. Four members of the team Jena, Shanis, Debbie and Becky worked on frontend tasks. Valeria created a Jira board where we could all enter and assign tasks to work on. People chose to work on whatever tasks they felt most comfortable with and they were also able to work on learning new technologies to extend their skills if they chose. Debbie needed to learn react and typescript as these were new to her having previously coded in Python using Flask and Django. Becky set up an agile stand up sheet in google docs where people could add accomplishments on a daily basis; this helped with sprint planning. Our main meeting was on a Friday afternoon where we talked about what had been accomplished in each sprint and planned for the next one, using the agile methodology to plan and manage our work.

## Team Documents

We used other time documents to help us plan and design the app, most of these were provided by Chingu and are listed below.

- [Team Project Ideas](./docs/team_project_ideas.md)
- [Team Decision Log](./docs/team_decision_log.md)

Meeting Agenda templates

- Meeting - Voyage Kickoff
- Meeting - App Vision & Feature Planning
- Meeting - Sprint Retrospective, Review, and Planning
- Meeting - Sprint Open Topic Session

## Running the project locally

To start the project locally type, please install the following software:

### Prerequisites

- npm

  ```sh
  npm install npm@latest -g
  ```

- MongoDB

### Installation

1. Clone the repo

```sh
git clone https://github.com/chingu-voyages/v46-tier3-team-33
```

2. Install NPM packages

Please install npm packages both in the frontend and backend folder seperately.

For example (frontend):

- type

`cd frontend`
then

`npm install`

3. Create .env both in the frontend and backend folder

4. Set up the following .env variable in the backend folder:

backend:
BACK_HOST=localhost
BACK_PORT=8081
MONGODB_URL = "mongodb://0.0.0.0/vegilicious"
JWT_SECRET= ""
NODE_ENV= "development"
FRONTEND_HOST="http://localhost:5173"

You may amend these variable basing on your setting.

5. You are ready to run the project locally.

### Installation

In the frontend directory, please type:

`npm run dev`

In the backend directory, please type:

`npm start`

- this will run the backend

## Tech

In the tech section, we provide information about the technology stack, dependencies, and any technical details related to the project.

### Tech Stack

To develop the Vegilicious app we made use of the following stack of technologies:

- Front-End
- [HTML3](https://www.w3schools.com/html/)
- [CSS5](https://www.w3schools.com/css/default.asp)
- [React](https://www.w3schools.com/react/default.asp)
- [Typescript](https://www.w3schools.com/typescript/typescript_intro.php)

- Back-End
- [nodejs](https://www.w3schools.com/nodejs/nodejs_intro.asp)
- [expressjs](https://expressjs.com/)

### Frontend design

- Home page
- About page
- Contact page
- Help page
- Login and Signup page
- Logout page
- Search page
- Results page

### Backend design

#### The Database Design

- The database was designed to allow CRUD functionality to be available to registered users, when signed in. When signed out users can only see list of produce but they cannot contact a farmer for details of the produce.
- We used MongoDb for our non relational database. Items in the database were:
  name,
  price,
  img,
  unit,
  expired_date,
  description,
  stock,
  farmer

- The database was set up with full CRUD functionality in mind.

| **path** | **method** |     data requested (json)     |    **function**     |
| :------: | :--------: | :---------------------------: | :-----------------: |
|  signup  |    post    | email:string, password:string | register an account |
|  login   |    post    | email:string, password:string |        login        |
|  logout  |    post    | email:string, password:string |       logout        |
| profile  |    put     |       any data changed        |    edit profile     |
|  delete  |   delete   |             none              |   delete account    |
| product  |    get     | display products on main page |  display products   |
| product  |    put     |  data id assigned to product  |     add product     |
| product  |   delete   |            data id            |   delete product    |
| product  |    get     |          name:string          | search for product  |

### Dependencies including deployment

- The front end for the app was deployed to [Vercel](https://vercel.com/)

### Testing

- testing was attempted at the start for the project using [Jest](https://jestjs.io/) but we didn't use it extensively in the project.

### Future improvements

- users get an email from a farmer when a new product is available , a user has previously registered interest in a new product.
- users are able to post reviews of products they have purchased from farmers.
- products are put into categories making it easier for a user to search.
- a forum for users and farmers to exchange comments and ideas on fruits and veggies.

## Credits

#### We would like to give credit to the following individuals, organizations, and resources that have contributed to the project or provided inspiration:

- we used Unsplash for many of the photos on the app. In particular:
- Root vegetable picture
  Photo by Nathan Dumlao on Unsplash

- Question mark picture
  Photo by Simone Secci on Unsplash

- A very big thank you to [Chingu](https://www.chingu.io/) for all the help and support, documentation and very useful articles during this project.
