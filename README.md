# Social Network
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

## Description

This repository contains code mimicking the backend of a social network application. While the application is active, a user can access GET, POST, DELETE, and PUT routes to add/update/delete users, their thoughts, and reactions to those thoughts. Users may also add other users as friends.

## Table of Contents 

- [Installation](#installation)

- [Usage](#usage)

- [License](#license)

- [Contributing](#contributing)

- [Tests](#tests)

- [Questions](#questions)

## Installation

Before running the application, make sure you have installed the packages listed in the package.json file. Navigate to the repository in the terminal and run 'npm i' to install. Make sure you have MongoDB installed locally. No seeds have been provided, so the user must add users, thoughts, and reactions to test the application. To start the application, navigate to the repository in the terminal and execute 'npm run start'.

## Usage

After running the application with 'npm run start', the user can access the predefined routes through an application such as Postman or Insomnia. 

### API Routes

**`/api/users`**

* `GET` all users

* `GET` a single user by its `_id` and populated thought and friend data (`/api/users/:userId`)

* `POST` a new user:

```json
// example data
{
  "username": "lernantino",
  "email": "lernantino@gmail.com"
}
```

* `PUT` to update a user by its `_id` (`/api/users/:userId`)

* `DELETE` to remove user by its `_id`

---

**`/api/users/:userId/friends/:friendId`**

* `POST` to add a new friend to a user's friend list

* `DELETE` to remove a friend from a user's friend list

---

**`/api/thoughts`**

* `GET` to get all thoughts

* `GET` to get a single thought by its `_id` (`/api/thoughts/:thoughtId`)

* `POST` to create a new thought

```json
// example data
{
  "thoughtText": "Here's a cool thought...",
  "username": "lernantino",
  "userId": "5edff358a0fcb779aa7b118b"
}
```

* `PUT` to update a thought by its `_id` (`/api/thoughts/:thoughtId`)

* `DELETE` to remove a thought by its `_id` (`/api/thoughts/:thoughtId`)

---

**`/api/thoughts/:thoughtId/reactions`**

* `POST` to create a reaction stored in a single thought's `reactions` array field

* `DELETE` to pull and remove a reaction by the reaction's `reactionId` value (`/api/thoughts/:thoughtId/reactions/:reactionId`)


### Video Tutorial:


## License

This project is covered under the MIT license.

## Contributing

N/A

## Tests

N/A

## Questions

Github Profile: https://github.com/agarfar

Please address all questions regarding this project to the following email: antfar67@gmail.com