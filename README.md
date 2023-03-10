# Software Engineering Summative 1

For Northeastern University


# Currency Converter App

[![codecov](https://codecov.io/gh/EDGENortheastern/dan-m-dec22/branch/main/graph/badge.svg?token=U9VzDbOBrF)](https://codecov.io/gh/EDGENortheastern/dan-m-dec22)

## About

Author: Daniel Mayers

GitHub Username: @dmayers96

![App screenshot](https://user-images.githubusercontent.com/120668199/209124042-18b14002-5e21-48ce-a7b6-30d07aa7d13a.png)

The Currency Converter App is an application that allows the user to convert any amount of currency to another currency of their choice. The input field cannot be left blank or have 0 as the amount, the value of 1 will be filled automatically in the input field. This app uses exchange rates that are updated on a daily basis via an API, therefore the conversion calculations are accurate in real-time. Below are some key features I aim to display:
* User can input any number to convert
* User can select any two countries currencies to convert to and from
* User can switch the conversion by selecting the arrow in between the to and from box
* A clickable button that displays the conversion amount

**Reason for creating the app**

Providing users with real-time exchange rates is something that my workplace desires as we currently have a day lag, meaning that our currency conversion calculations are always correct for the previous day. The app solves this problem and ensures that any currency conversion via this app will be highly accurate and in real-time. This can pose many benefits, some which include:
* More efficiency due to real-time calculations
* More Accurate results as data comes from a real-time API and not a fixed daily value
* Rely less on certain internal systems are liable to breaking
* Less collaboration with people who provide us with daily rates
* Use as a measure of accuracy for daily rates reporting

# Deployed App

The live app is continuously deployed here on a GitHub page. 
* [Live App](https://edgenortheastern.github.io/dan-m-dec22/)

Throughout the apps development I used continuous integration and continuous deployment.

**Continuous Integration** is the practice of automating the integration of code changes from multiple contributions into a single software project. It's a primary DevOps best practice, allowing developers to frequently merge code changes into a central repository where builds and tests then run.

**Continuous Deployment** is a strategy or methodology for software releases where any new code update or change made through the rigorous automated test process is deployed directly into the live production environment, where it will be visible to customers.

# User Documentation

This project requires npm to execute the files, so ensure that it is installed.

### 1. Ensure node and npm are installed by running the following commands in your terminal:

```sh
node -v
```
```sh
npm -v
```
If they are not installed, follow the steps on [npm Docs](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

### 2. Afterwards, clone this repo:

```sh
git clone https://github.com/EDGENortheastern/dan-m-dec22.git
```
Now, you should have everything that you need to proceed! Navigate into the folder you just cloned to find our code.

## Running all tests

### 3. Before running any code below, make sure npm is installed.

```sh
npm install
```

### 4. To run logic and unit tests for our app, run the following command:

```sh
npm test
```
```sh
a
```

Clicking on the 'a' key runs all tests (excluding End-to-End tests).

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### 5. To view full tests and code coverage for the code:

```sh
npm test -- --coverage --watchAll=false
```

# Project Management

![Project Management screenshot](https://user-images.githubusercontent.com/120668199/209140982-5375d2f5-de66-49d9-911f-beeca345adaf.png)
To manage my project, I used GitHub's Project Tracker. It allows me to use the Kanban methodology to manage issues and maintain a workflow where I could continuously improve, visualise my workflow on a regular basis and sort tasks in order of priority. I used this technique to compliment my agile way of working, which is an iterative approach to software development that emphasizes flexibility, interactivity, and a high level of transparency.

I followed the **Agile** principles and used the **Scrum** framework when developing this app. I worked in sprints, which is a short, time-boxed period when a team works to complete a set amount of work. This makes projects more manageable, allows teams to ship high-quality work faster and more frequently, and gives them more flexibility to adapt to change.

## Ticketing system

I ensured that one requirement relates to one ticket that has one feature corresponding to one branch and one pull request. I assigned a reviewer, a label and pull request to each ticket. I created some labels myself to best suit the issue, such as; testing, documentation, feature and exploration. Please see below for example of my ticketing system.

![image](https://user-images.githubusercontent.com/120668199/209148507-e3d8bc9a-b71e-4023-831f-0a62c9c5316a.png)


# Code and Design

## Technical Documentation

### Technical Stack
* [HMTL](https://devdocs.io/html/)
* [CSS](https://devdocs.io/css/)
* [JS](https://devdocs.io/javascript/)
* [jest](https://jestjs.io/docs/getting-started)

### Files used to run the app

* index.js
* country-list.js
* index.html
* index.css
* launch.json

### Files used in testing

* index.test.js
* logic.js
* package.json

### User End Links

* Repo name: dan-m-dec22
* Repo link: https://github.com/EDGENortheastern/dan-m-dec22
* Exchange rate API link: https://www.exchangerate-api.com/
* Country flags API link: https://countryflagsapi.com/

After cloning the project, open the JavaScript file and pass your API key in the API URL. You can get this key from the official ExchageRateAPI site for free. You can also use any other site API for this project. If you do so then you have to modify the JavaScript codes accordingly.

## Code Implementation

Step-by-step guide on how I produced the MVP.
1. In the country-list.js file, I stored all country codes and the corresponding currency codes as an object.
2. In the script.js file, I created an options tags and added the currency codes inside each option tag using a for-in loop and then inserted these tags in the select tag for the drop down box.
3. I created a function to get the user-input amount.
4. I get an exchange rate API which returns an object of all currency conversion rates and then pass the user selected 'from' currency code to get the specific exchange rate for that country.
5. The user then selects the 'to' currency and then I calculate it with the user-entered amount and show it in the exchange rate text when the action button is pressed.
6. To enable swapping the currency codes, I just reversed the 'from' currency to 'to' currency and then called the function. For flags, I used countryflags.io API to show the user-selected country flag.

## Coding Practice

I have continuously ensured that the code is easily readable and understandable, whilst still maintaining the correct naming conventions; by using the camelCase practice throughout the javascript files. On top of this, I have made sure that all lines are correctly indented, ensuring that any other programmer can read and understand the code. Furthermore, the code also has comments in plain English on every line of code to ensure that anyone can understand what is happening at every step of the code. See below for an example of this.

![image](https://user-images.githubusercontent.com/120668199/209159379-42f42628-59c9-4df2-927a-90966086adef.png)

## User Interface Design

[Figma Prototype](https://www.figma.com/proto/jSQexl4OPatKZwGQIM7ZG3/Currency-Converter-App?node-id=6%3A20&scaling=scale-down&page-id=0%3A1&starting-point-node-id=3%3A12&show-proto-sidebar=1)

I designed my prototype using Figma before writing any code, as the code will create the design. This software helped me design my app with ease as it is intuitive and user friendly, it allows for designers and non-designers to use the software and is fun to use. By designing and agreeing on a user interface before implementation reduces costs and the need for change in the future.
By designing a prototype first it lets me decide on the best design for this app taking users opinions into consideration. I have created two prototype designs that I will include in a survey sent to users about what they prefer.


# Testing

## Testing Logic

For testing the logic of my application I used nodes testing library, Jest. Jest (standalone) is utilised to test the logic of the application, this is because Jest is a javascript testing framework designed with simplicity in mind and supports projects coded in different ways, including node, making Jest an ideal testing framework for my project. Using Jest, I produced testing blocks that lead to 100% code coverage within a short period of time. Using Jest is beneficial for this project because unit testing using Jest allows me to make my project more agile as we are already confident that the code we have will not break easily as we've found and prevented bugs earlier in the development cycle.

## Unit Testing with Jest

I have used Jest to run unit tests on my code. Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.

Please see below for all the unit tests and code coverage tests passing.

![passed tests screenshot](https://user-images.githubusercontent.com/120668199/210143194-32b0e759-1999-4e53-a353-49338d2d3a3e.PNG)


## Performance and Accessibility Testing

In order to analyse and/or improve the quality of the webpage, I used the Google Lighthouse tool to generate a report containing a summary of the quality of my application. Lighthouse is a free and open-source tool that can be accessed through the development console for Chromium-based browsers. I have mainly concentrated on 4 metrics which are, performance, accessibility, best practices and SEO (Search Engine Optimization).

1. Performance - an aggregation of how the page progressed in aspects such as loading speed, time taken for loading basic frames and displaying meaningful content.
2. Accessibility - an aggregation of how accessible the website is through audio captions, button names and 'aria-' attributes.
3. Best Practices - an aggregation of many practices that have been deemed 'best' such as use of HTTPS and avoiding the use of deprecated code.
4. SEO - an aggregation of scores in features such as meta description, presence of titles, legible font sizes.

**Results**

The websites performance rating of 99 suggests it is very highly optimised, meaning that the online app will offer a streamlined and smooth experience giving the user a better experience as a whole when using it. On top of this it also decreases the bounce rate of users who attempt to access the app incase it takes too long to load. Poor performance dampens the overall user experience and offers less incentive to stay.

The accessibility rating of 84 is a good score which tells me that it has good search engine optimisation results and is relatively easy for each user to use the website regardless of age or disabililty. The online apps design also includes contrasting colours making it intuitive to use. Users will be able to interact with the website/app properly without any problems while accessing it.

The best practices rating of 100 suggests that the online apps design is simple and easy to navigate.

The search engine optimisation (SEO) rating of 92 suggests that the online app design attracts higher quality internet traffic and traffic will be directed to the website naturally without having to advertise it.

![Lighthouse screenshot](https://user-images.githubusercontent.com/120668199/209191813-c799bff4-47ff-4514-8d38-01c99a7188a1.PNG)

## Prototype Design A/B Testing

[User feedback form](https://docs.google.com/forms/d/e/1FAIpQLSc_W1E3jBh4tGIBv63l-5Ta9mwhvn8a4ZWe4JDVmWaEYRZEvw/viewform)

Please see the link to view the two prototypes that I designed in Figma and tested with end-users. To carry out the A/B testing, I used google forms to create a survey that gets circulated to my potential users so that I can interact with my stakeholders and get their opinion. I have displayed both the designs and have attached questions to each design asking the user what design they prefer, ensuring that the questions asked do not pose any bias to the user. The design with the most votes from this test will be the user interface design that I use in my project.

I went with the first design over the second, as this was preferred by the users.

## Continuous Integration Testing

When I commit and push code changes GitHub runs Continuous Integration tests and provides the results of each test in the pull request allowing me to see whether the change in my branch introduces an error. When all Continuous Integration tests in a workflow pass, the changes I have pushed are ready to be reviewed by a team member or merged. When a test fails, one of my changes may have caused the failure. This ensures that code changes are accurate and do not cause any errors when integrating into the existing code base.

## GitHub Actions

GitHub Actions is designed to help simplify workflows with flexible automation and offer easy-to-use CI/CD capabilities built by developers for developers and is used to automate the testing pipeline every time code is pushed or a request is made. This allowed me to create workflows that build and test every pull request to the repository, or deploy my merged pull requests to production. GitHub Actions also helped improve my workflow by automatically adding the appropriate labels.

![image](https://user-images.githubusercontent.com/120668199/209981630-2edf2792-51fe-460e-bd7e-7d49c7c7f9b8.png)

**For additional examples of GitHub Actions click [here](https://docs.github.com/en/actions)**

# Design Evaluation

Overall I am really pleased with the design of the application. It fulfils its purpose by enabling users to convert two currencies of their choice accurately. The design provides all the relevant information to communicate what is required to convert a currency, such as amount to convert, and what currencies to covert to and from with a stand out button to run the conversion. The results are clear and intuitive. The app is easy to understand, having a large, bold title is a focal point that will catch the users eye. Every input box has a title and a border making it easy to see where each box is and what it does. The conversion button is easy to find and highly contrasted against the apps colour, as well as the app being highly contrasted against the background. This makes the app easy to view and navigate. The app isn???t crowded and doesn???t pose information overload to the users, it is designed with visual hierarchy and has relevant spacing in between input boxes, titles and buttons. I knew the design was suitable for my audience as they voted for this, it???s been kept simple and only concentrates on its purpose to convert currency, giving it a professional design.

One thing that I'd implement for improving this app is hard coding average exchange rates so that when the API occasionally fails and therefore the currency conversion is displayed in the design as a NaN, it can use the hardcoded value and still produce a conversion result. When the API fails, it makes the app useless to all users as the currency cannot be converted. This doesn???t happen often but it is possible. To work around this flaw, I seek to hardcode all average exchange rates across a month to display a currency conversion result in case the API does fail. If this occurs, then the user will be notified that live exchange rates aren???t being used.
