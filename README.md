# cuili-takeout-service

an SPA supplys takeout service


## Quick Start

This project is start from [create-react-app](https://create-react-app.dev/) cli.

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run mockserver`

Runs the mock server, which can supply data if there is no avaiable back-end service.


## Requirement Brief

This is an SPA, which supplys takeout service. Customers can see the menu and select their favorite foods.

They can select at most 1 of each kind of food to make up a set meal. For example, they can select 1 dish of fires, 1 dish of burger and 1 cup of latte.

As they select or deselect food, the price will be re-calculated and refreshed on the bottom of page.

What they have already selected will be shown.


## Storage Design

According to the requirement and UI/UX design, the data access layer should include: 3 kinds of food, shop infomation, and customer infomation.

The actions to access store should at least include: add food, remove food, calculate total price, get shop info.

This part is implemented by [Redux](https://www.redux.org.cn/).

![avatar](/docs/store.png)


## Component Design

According to the UI/UX design, the page should at least contain: navigation bar, menu, order, shop infomation, bottom bar.

Except the Menu component is implemented by [Carousel of Ant Design](https://ant-design.antgroup.com/components/carousel-cn) for efficiency, the others are implemented by native Javascript and Html.

![avatar](/docs/component-design.png)


## Auto Testing Design

Most of primary components are ensured stable by auto testing, based on [testing-library/react](https://testing-library.com/docs/react-testing-library/intro).