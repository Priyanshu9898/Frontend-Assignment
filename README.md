
# Dynamic Form Maker

## Live Website: https://frontend-assignment-alpha.vercel.app/

#### Example form JSON Schema 1: https://drive.google.com/file/d/1RUU_ueF9BbQRLReuX88w8PWe2jsz3Z3C/view

#### Example form JSON Schema 2: https://drive.google.com/file/d/19_E6dSDUbiDR31wNSSvUARHxh1HeT6L4/view

## Project Description:

    The goal of this project is to create a React application using Chakra UI that allows users to paste a UI schema on the left side and preview the rendered form on the right-hand side. The UI schema is a JSON array that contains all the information required to generate dynamic forms. The application will have a single screen divided into two equal sections. The left section will contain a JSON editor where users can paste the UI schema, and the right section will automatically render a form based on the pasted UI schema.

    The UI schema will contain objects with various fields that define the form's structure and functionalities. Each object in the UI schema will have properties such as "sort" for determining the sequence of form sections, "label" for displaying the section label, "description" for holding the description of the section or field, "validate" for defining field validations like "required" and "immutable", "jsonKey" for holding a unique key for each field/section, "uiType" for specifying the type of form element (e.g., input, number, group, select, switch), "level" for determining the nesting of fields, and "placeholder" for adding placeholder/hint text in the form fields.

    The UI schema can contain different types of form elements, such as text input fields, group fields, and radio fields. Text input fields can be used to capture user input for fields such as pizza name, and group fields can contain multiple fields nested within them, such as pizza type and toppings. Radio fields can be used to present options to the user, such as different types of pizza.

    The application will also have advanced fields that can be toggled on and off. These fields will be hidden by default and will only be displayed when the user clicks on the "Show advanced fields" toggle button. The visibility of these advanced fields will be controlled by the "validate" property in the UI schema.


## Tech Stack

**Frontend:** React, JavaScript, Chakra UI

## Project Description
    The React application will have two main components: the JSON editor component and the form preview component. The JSON editor component will allow users to paste the UI-Schema in JSON format on the left-hand side. The form preview component will automatically render the form based on the pasted UI-Schema and display it on the right-hand side.

## Features - (JSON Editor)

    - Ability to detect changes in the pasted JSON and update the form preview component in real-time.
    - Validation of the UI-Schema to ensure that it follows the required structure and properties.
## Features - (Form Preview)

    - Automatically render the form based on the pasted UI-Schema.
    - Dynamically update the form based on changes in the UI-Schema in the JSON editor component.
    - Handle different field types such as text input, radio, switch, group, etc., and render them accordingly with their respective properties.
    - Handle nested fields inside groups and show/hide them based on the user's interaction with the form.
    - Show tooltips for fields with descriptions when hovered.
    - Handle form submissions and show the form data to the user which is going to send to the backend using the jsonKey values as keys and the entered values as values.

## Getting Started
    These instructions will help you set up and run the project on your local machine for development and testing purposes.

## Prerequisites
- Node.js (v14.x.x or higher recommended)
- npm (v6.x.x or higher recommended)

## Installation

    1. Clone the repository
```bash
  git clone https://github.com/Priyanshu9898/Frontend-Assignment.git

```

    2. Install dependencies 
```bash
  cd Frontend-Assignment
  npm install
```


    3. Start the development server
```bash
  npm start
```

    This will run the app in development mode. Open http://localhost:3000 to view it in the browser. The page will reload if you make edits.

## Building for production
    To create a production build, run:

```bash
npm run build
```

    This will build the app for production and output the files to the build folder. The build is minified, and the filenames include the hashes for efficient caching.




## Screenshots

![App Screenshot 1](https://i.postimg.cc/FH9QNtQG/React-App-Brave-25-04-2023-13-22-09.png)

![App Screenshot 4](https://i.postimg.cc/zG0YfdzN/React-App-Brave-25-04-2023-13-22-13.png)

![App Screenshot 6](https://i.postimg.cc/kgdgShPt/Priyanshu9898-Frontend-Assignment-Brave-25-04-2023-13-22-32.png)

![App Screenshot 2](https://i.postimg.cc/FK6ty7kn/React-App-Brave-25-04-2023-13-23-12.png)

![App Screenshot 3](https://i.postimg.cc/SKRFYWRM/React-App-Brave-25-04-2023-13-23-19.png)

![App Screenshot 5](https://i.postimg.cc/nz9y0pvV/React-App-Brave-25-04-2023-13-23-26.png)




## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/Priyanshu9898/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/priyanshumalaviya/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/Priyanshu2281)
[![Medium](https://img.shields.io/badge/medum-1DA1F2?style=for-the-badge&logo=medium&logoColor=black)](https://medium.com/@priyanshumalaviya9210)
## Demo

Insert gif or link to demo


## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)


## License

[MIT](https://choosealicense.com/licenses/mit/)

