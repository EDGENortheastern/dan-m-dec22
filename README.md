# Software Engineering Summative 1

For Northeastern University


# Currency Converter App

## About

Author: Daniel Mayers

GitHub Username: @dmayers96

![App screenshot](https://user-images.githubusercontent.com/120668199/209124042-18b14002-5e21-48ce-a7b6-30d07aa7d13a.png)

The Currency Converter App is an application that allows the user to convert any amount of currency to another currency of their choice. The input field cannot be left blank or have 0 as the amount, the value of 1 will be filled automatically in the input field. This app uses exchange rates that are updated on a daily basis via an API, so the conversion calculations are accurate. Below are some key features I aim to display:
* User can input any number to convert
* User can select any two countries currencies to convert to and from
* User can switch the conversion by selecting the arrow in between the to and from box
* A clickable button that displays the conversion amount


# Deployed App

The live app is continuously deployed here on a GitHub page. 
* [Live App](https://edgenortheastern.github.io/dan-m-dec22/)

Throughout this apps development I used continuous integration and continuous deployment.

Continuous Integration is the practice of automating the integration of code changes from multiple contributions into a single software project. It's a primary DevOps best practice, allowing developers to frequently merge code changes into a central repository where builds and tests then run.

Continuous Deployment is a strategy or methodology for software releases where any new code update or change made through the rigorous automated test process is deployed directly into the live production environment, where it will be visible to customers.


# Project Management

![Project Management screenshot](https://user-images.githubusercontent.com/120668199/209140982-5375d2f5-de66-49d9-911f-beeca345adaf.png)
To manage my project, I used GitHub's Project Tracker. It allows me to use the Kanban methodology to manage issues and maintain a workflow where I could continuously improve, visualise my workflow on a regular basis and sort tasks in order of priority. I used this technique to compliment my agile way of working, which is an iterative approach to software development that emphasizes flexibility, interactivity, and a high level of transparency.

I followed the Agile principles and used the Scrum framework when developing this app. I worked in sprints, which is a short, time-boxed period when a team works to complete a set amount of work. This makes projects more manageable, allows teams to ship high-quality work faster and more frequently, and gives them more flexibility to adapt to change.

## Ticketing system

I ensured that one requirement relates to one ticket that has one feature corresponding to one branch and one pull request. I assigned a reviewer, a label and pull request to each ticket. Please see below for example of my ticketing system.
![image](https://user-images.githubusercontent.com/120668199/209148507-e3d8bc9a-b71e-4023-831f-0a62c9c5316a.png)


# Code and Design

## Technical Documentation


ADD INSECTION TO RUN APP AND RUN TESTS LOCALLY FOR USERS

* Repo name: dan-m-dec22
* Repo link: https://github.com/EDGENortheastern/dan-m-dec22
* Exchange rate API link: https://www.exchangerate-api.com/
* Country flags API link: https://countryflagsapi.com/

## Files within this project

* index.js
* country-list.js
* index.html
* index.css
* launch.json

## Code Implementation

Step-by-step guide on how I produced the MVP.
1. In the country-list.js file I stored all country codes and the corresponding currency codes as an object.
2. In the script.js file I created an options tags and added the currency codes inside each option tag using a for-in loop and then inserted these tags in the select tag for the drop down box.
3. I created a function to get the user-input amount.
4. I get an exchange rate API which returns an object of all currency conversion rates and then pass the user selected 'from' currency code to get the specific exchange rate for that country.
5. The user then selects the 'to' currency and then I calculate it with the user-entered amount and show it in the exchange rate text when the action button is pressed.
6. To enable swapping the currency codes, I just reversed the 'from' currency to 'to' currency and then called the function. For flags, I used countryflags.io API to show the user-selected country flag.

## Coding Practice

I have continuously ensured that the code is easily readable and understandable, whilst still maintaining the correct naming conventions; by using the camelCase practice throughout the javascript files. On top of this, I have made sure that all lines are correctly indented, ensuring that any other programmer can read and understand the code. Furthermore, the code also has comments in plain English on every line of code to ensure that anyone can understand what is happening at every step of the code. See below for an example of this.
![image](https://user-images.githubusercontent.com/120668199/209159379-42f42628-59c9-4df2-927a-90966086adef.png)

## User Interface Design

[Figma Prototype](https://www.figma.com/proto/jSQexl4OPatKZwGQIM7ZG3/Currency-Converter-App?node-id=6%3A20&scaling=scale-down&page-id=0%3A1&starting-point-node-id=3%3A12&show-proto-sidebar=1)

I designed my prototype using Figma before writing any code, as the code will create the design. This software helped me design my app with ease as it is intuitive and user friendly, allows for designers and non-designers to use the software and is fun to use. By designing and agreeing on a User interface before implementation reducing costs and the need for change further down the line.
By designing a prototype first it lets me decide on the best design for this app taking users opinions into consideration. I have created two prototype designs that I will include in a survey to users about what they prefer.


# Testing

## Performance and Accessibility Testing

In order to analyse and/or improve the quality of the webpage, I used the Google Lighthouse tool to generate a report containing a summary of the quality of our application. Lighthouse is a free and open-source tool that can be accessed through the development console for Chromium-based browsers. I have mainly concentrated on 4 metrics which are, performance, accessibility, best practices and SEO (Search Engine Optimization).

1. Performance - an aggregation of how the page progressed in aspects such as loading speed, time taken for loading basic frames and displaying meaningful content.
2. Accessibility - an aggregation of how accessible the website is through audio captions, button names and 'aria-' attributes.
3. Best Practices - an aggregation of many practices that have been deemed 'best' such as use of HTTPS and avoiding the use of deprecated code.
4. SEO - an aggregation of scores in features such as meta description, presence of titles, legible font sizes.

*Results*

The websites performance rating of 99 suggests it is very highly optimised, meaning that the online app will offer a streamlined and smooth experience giving the user a better experience as a whole when using it. On top of this it also decreases the bounce rate of users who attempt to access the app incase it takes too long to load. Poor performance dampens the overall user experience and offers less incentive to stay.

The accessibility rating of 84 is a good score and tells me that it has good search engine optimisation results and is relatively easy for each user to use the website regardless of age or disabililty. The online apps design also includes contrasting colours making it intuitive to use. Users will be able to interact with the website/app properly without any problems while accessing it.

The best practices rating of 100 suggests that the online apps design is simple and easy to navigate.

The search engine optimisation (SEO) rating of 92 suggests that the online app design attracts higher quality internet traffic and traffic will be directed to the website naturally without having to advertise it.

![Lighthouse screenshot](https://user-images.githubusercontent.com/120668199/209191813-c799bff4-47ff-4514-8d38-01c99a7188a1.PNG)

## Prototype Design A/B Testing

[User feedback form for design](https://docs.google.com/forms/d/e/1FAIpQLSc_W1E3jBh4tGIBv63l-5Ta9mwhvn8a4ZWe4JDVmWaEYRZEvw/viewform)

Please see the link to view the two prototypes that I designed in Figma and tested with end-users. To carry out the A/B testing, I used google forms to create a survey that gets circulated to my potential users so that I can interact with my stakeholders and get their opinion. I have displayed both the designs and have attached questions to each design asking the user what design they prefer. The design with most votes from this test will be the user interface design that I will use in my project.

I went with the first design over the second, as this was prefered by the users.

## Unit Tests using Jest

ADD IN SECION ON TESTING HERE



## Continous Intergration testing

Everytime I commit and push code changes GitHub runs Continuous Intergration tests and provides the results of each test in the pull request, allowing me to see whether the change in my branch introduces an error. When all Continuous Intergration tests in a workflow pass, the changes I have pushed are ready to be reviewed by a team member or merged. When a test fails, one of your changes may have caused the failure. This ensure that code changes are accruate and dont cause any errors wen intergrating into the existing code base.




# Design Evaluation
