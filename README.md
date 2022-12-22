# Software Engineering Summative 1

For Northeastern University


# Currency Converter App

## About

![App screenshot](https://user-images.githubusercontent.com/120668199/209124042-18b14002-5e21-48ce-a7b6-30d07aa7d13a.png)

The Currency Converter App is an application that allows the user to convert any amount of currency to another currency of their choice. The input field cannot be left blank or have 0 as the amount, the value of 1 will be filled automatically in the input field. This app uses exchange rates that are updated on a daily basis via an API, so the conversion calculations are accruate. Below are some key features I aim to display:
* User can input any number to convert
* User can select any two countries currencies to convert to and from
* User can switch the conversion by selecting the arrow inbetween the to and from box
* A clickable button that displays the conversion amount


# Deployed App

The live app is continously deployed here. 
* [Live App](https://edgenortheastern.github.io/dan-m-dec22/)

Continuous deployment is a strategy or methodology for software releases where any new code update or change made through the rigorous automated test process is deployed directly into the live production environment, where it will be visible to customers.


# Project Management

![Project Management screenshot](https://user-images.githubusercontent.com/120668199/209140982-5375d2f5-de66-49d9-911f-beeca345adaf.png)
To manage my project I used GitHub's Project Tracker. It allows me to use the Kanban methodology to manage issues and maintain a workflow where I could continuously improve, visualise my workflow on a regular basis and sort tasks in order of priority. I used this technique to compliment my agile way of working, which is an iterative approach to software development that emphasizes flexibility, interactivity, and a high level of transparency.

## Ticketing system

I ensured that one requirmeent relates to one ticket that has one feature corresponding to one branch and one pull request. I assigned a reviewer, a label and pull request to each ticket. Please see below for example of my ticketing system.
![image](https://user-images.githubusercontent.com/120668199/209148507-e3d8bc9a-b71e-4023-831f-0a62c9c5316a.png)


# Code and Design

## Technical Documentation

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

1. In the country-list.js file I stored all country codes and the corresponding currency codes as an object.
2. In the script.js file I created an options tags and added the currency codes inside each option tag using a for-in loop and then inserted these tags in the select tag for the drop down box.
3. I created a function to get the user-input amount.
4. I get an exchange rate API which returns an object of all crueency conversion rates and then pass the user selected 'from' currency code to get the specific exchange rate for that country.
5. The user then selects the 'to' currency and then I calculate it with the user-entered amount and show it in the exchange rate text when the action button is pressed.
6. To enable swapping the currency codes, I just reversed the 'from' currency to 'to' currency and then called the function. For flags, I used countryflags.io API to show the user-selected country flag.

## Coding Practice

I have continuously ensured that the code is easily readable and understandable, whilst still maintaining the correct naming conventions; by using the camelCase practice throughout the javascript files. On top of this, I have made sure that all lines are correctly indented, ensuring that any other programmer can read and understand the code. Furthermore, the code also has comments in plain English on every line of code to ensure that anyone can understand what is happening at every step of the code. See below for an example of this.
![image](https://user-images.githubusercontent.com/120668199/209159379-42f42628-59c9-4df2-927a-90966086adef.png)

## User Interface Design

[Figma Prototype](https://www.figma.com/proto/jSQexl4OPatKZwGQIM7ZG3/Currency-Converter-App?node-id=6%3A20&scaling=scale-down&page-id=0%3A1&starting-point-node-id=3%3A12&show-proto-sidebar=1)

I designed my protopye using Figma. This software helped me design my app with ease as it is intuitive and user friendly, allows for designers and non-designers to use the software and is fun to use. By designing and agreeing on a User interface before implementation reducing costs and the need for change further down the line.
By designing a prototype first it lets me decide on the best design for this app taking users opinions into consideration. I have created two prototype designs that I will include in a survey to users about what they prefer.


# Stakeholder Interactions

[User feedback form for design](https://docs.google.com/forms/d/e/1FAIpQLSc_W1E3jBh4tGIBv63l-5Ta9mwhvn8a4ZWe4JDVmWaEYRZEvw/viewform)



