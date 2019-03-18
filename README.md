# Would You Rather

Please run this command before lunching to install dependencies:

### `npm install`

To run the app in the development mode, run this command:

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Store Structure:

We have three reducers hence the general structure is:

```sh
{
    user_id, // String: id of logged in user
    users, // Object with users id as keys
    questions, // Object with questions as keys
}
```

In some cases, we rather prefer having some of the state as an array, so we have helper methods in the reducers aka 'selectors':

```sh
    getUsers: transform users to array of users,
    getQuestions: transform questions to array of questions
```

