


### Features

* Read News Headlines from All different countries like a ( US, UK, IN, FR, DE, AU, CA).
* Switch between news categories easily.
* Three different reading Modes (Comfortable, Compact and Image free).
* Night mode for a pleasant news reading experience.
* Responsive and built from the ground up to run seamlessly on mobiles, tablets and desktop.
* QuickPreview for instantly viewing News articles.
* Powered by News API, Search for articles from over 30,000 news sources and blogs.

### Getting Started

Clone the project locally and the follow the steps below for dev/build.

### Installing

Get started by installing the project dependencies. You can alternatively use npm for dev & build.

```javascript
npm install
```

### Running in dev mode

```javascript
npm run start
```



### Built With

The NewsCrack website is built using  best in class framework

* [React](https://github.com/facebook/react) -  JavaScript library for building user interfaces.

### Architecture

* **Web** - This is the front end app hosted on NGINX and is where all the action starts.
* **Newsapi** - Apollo-Server is responsible for handling all the requests coming from the web app. The server talks to the news API and caches the data on a MYSQL db for a faster data retrieval.
