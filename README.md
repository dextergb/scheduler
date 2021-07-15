!["Interview Scheduler Logo"](docs/logo.png)

## Interview Scheduler is a React application that allows users to book and cancel interviews in real time!

## Skills on Display

- [x] React
- [x] Webpack
- [x] Babel
- [x] Axios
- [x] WebSockets
- [x] Storybook
- [x] Jest
- [x] Cypress

## Features

- Interviews can be booked between Monday and Friday.
- A user can switch between weekdays.
- A user can book an interview in an empty appointment slot.
- Interviews are booked by typing in a student name and clicking on an interviewer from a list of available interviewers.
- A user can cancel an existing interview.
- A user can edit the details of an existing interview.
- The list of days informs the user how many slots are available for each day.
- The expected day updates the number of spots available when an interview is booked or canceled.
- A user is presented with a confirmation when they attempt to cancel an interview.
- A user is shown a status indicator while asynchronous operations are in progress.
- A user is shown an error if an interview cannot be saved or deleted.
- When the user presses the close button of the error they are returned to the Form or - Show view (skipping Status and Confirm).
- The application makes API requests to load and persist data. We do not lose data after a browser refresh.

## Getting Started

1. Install dependencies using the `npm install` command.
2. Run the [scheduler-api](https://github.com/dextergb/scheduler-api) using the `npm start` command in scheduler-api.
3. Run the Webpack Development Server using the `npm start` command in scheduler.
   The app will be served at <http://localhost:8000/>.

### Running Jest Test Framework

```sh
npm test
```

### Running Storybook Visual Testbed

```sh
npm run storybook
```

### Dependencies

- "axios": "^0.21.1",
- "classnames": "^2.2.6",
- "normalize.css": "^8.0.1",
- "react": "^16.9.0",
- "react-dom": "^16.9.0",
- "react-scripts": "3.0.0"

### Dev Dependencies

- "@babel/core": "^7.4.3",
- "@storybook/addon-actions": "^5.0.10",
- "@storybook/addon-backgrounds": "^5.0.10",
- "@storybook/addon-links": "^5.0.10",
- "@storybook/addons": "^5.0.10",
- "@storybook/react": "^5.0.10",
- "@testing-library/jest-dom": "^4.0.0",
- "@testing-library/react": "^8.0.7",
- "@testing-library/react-hooks": "^7.0.1",
- "babel-loader": "^8.0.5",
- "node-sass": "^4.14.0",
- "prop-types": "^15.7.2",
- "react-test-renderer": "^16.14.0"
