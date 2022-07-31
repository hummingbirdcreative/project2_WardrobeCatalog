<div id="top"></div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#technical-requirements">Technical Requirements</a></li>
        <li><a href="#technologies-used">Technologies-Used</a></li>
      </ul>
    </li>
    <li>
      <a href="#user-stories">User Stories</a>
      <ul>
        <li><a href="#mvp">MVP</a></li>
        <li><a href="#stretch-goals">Stretch Goals</a></li>
      </ul>
    </li>
    <li>
      <a href="#developement">Planning, Research, and Future Developement</a>
      <ul>
        <li><a href="#initial-wireframes">Initial Wireframes</a></li>
        <li><a href="#tools-used">Tools Used</a></li>
        <li><a href="#future-features">Future Features</a></li>
        <li><a href="#helpful-links-for-this-project">Helpful Links</a></li>
        <li><a href="#contributing">Contributing</a></li>
      </ul>
    </li>
  </ol>
</details>

<div align="center">
<h1 align="center">Wardrobe Catalog</h1>

  <p align="center">
This application will allow the user to catalog their clothing in an organized online wardrobe. There will be flexibility to create, edit, or delete, making this application unique to each user.
    <br />
    <a href="https://github.com/hummingbirdcreative/project2_WardrobeCatalog"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://wardobe-catalog.herokuapp.com/users/login">View Live Site</a>
    ·
    <a href="https://github.com/hummingbirdcreative/project2_WardrobeCatalog/issues">Report Bug</a>
    ·
    <a href="https://github.com/hummingbirdcreative/project2_WardrobeCatalog/issues">Request Feature</a>
  </p>
</div>

## About The Project

My first Full-CRUD application using Node.js, MongoDb, Mongoose, Express and EJS.

Here are a few of the views as a login-in user.
![UserProfile](https://i.imgur.com/sA4gxsR.png)
![WardrobeIndex](https://i.imgur.com/bYQlMgb.png)

## Do you want to see what a live, exsisting user collection looks like? 
<b>For testing purposes, you can use the login with:</b> <br>
-- email: test@email.com <br>
-- password: testtest

<em>*You can add/edit anything you wish. However, please only delete an item if you added it. Thank you!</em>

## Technical Requirements

- A working full-stack application, built using Node.js, Mongoose, Express and EJS.
- Adhere to the MVC file structure: Models, Views, Controllers.
- At least one model with all 7 RESTful routes and full CRUD.
- Be deployed online and accessible to the public via Heroku
- Include wireframes that you designed during the planning process

## Technologies used
#### Frontend
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Bootstrap](https://getbootstrap.com/)
- [GoogleFonts](https://fonts.google.com/about)
- [EJS](https://www.npmjs.com/package/ejs)
- [Node.js](https://nodejs.org/dist./v6.16.0/docs/api/synopsis.html)
#### Backend
- [Express](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/docs/index.html)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
#### Deploymnet
- [Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [MongoDB Atlas](https://www.mongodb.com/atlas)
<p align="right">(<a href="#top">back to top</a>)</p>

## User stories

### MVP

- As a user I should be able to add entry for an item of clothing from my wardrobe by listing out the image, name, type, description, and notes
- As a user I should be able to edit my entry for a desired piece of clothing
- As a user I should be able to create new entries when needed
- As a user I should be able to delete entries when needed

### Stretch Goals

- User Login--hit
- Favorites option--hit
- Filter by Item Type
- Add Tags
- Filter by Tags
- Save entries in a group to form outfits
<p align="right">(<a href="#top">back to top</a>)</p>

## Developement
### Planning, Research, and Future Developement 

#### Tools used
- [Invision](https://www.invisionapp.com/)

### Initial Wireframes
![HomePage](https://i.imgur.com/8SQZLZm.png)
![ShowPage](https://i.imgur.com/K3CG0nO.png)
<p align="right">(<a href="#top">back to top</a>)</p>

## Getting Started
- Fork/Clone thie repository
- npm i to install all dependencies
- touch .env to set the environment variables
- add PORT=3000 to .env to set the port
- add MONGO_URL=YourMongoDBConnectionString to .env to set the database connection string
- nodemon to start the server

<p align="right">(<a href="#top">back to top</a>)</p>