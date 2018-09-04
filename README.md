# txt2img

See [txt2img.surge.sh](http://txt2img.surge.sh/) for live demo.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them

```
Node
```
[Click to download Node.js](https://nodejs.org/en/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.

Installing node.js will automatically install npm(dependency management tool)

Check verison
```
node -v
npm -v
```

### Installing

A step by step series of examples that tell you how to get a development env running

All the fonts used in this project are from google. Please create an google font API key https://developers.google.com/fonts/docs/developer_api

```
git clone https://github.com/parwat08/txt2img.git
```

Navigate to the project directory `cd txt2img/`

Create a `.env` file in root directory

- Add a `REACT_APP_GOOGLE_FONT_API`=`API_KEY`


```
npm install

npm start
```

`npm start` will open the app in `3000` port `http://localhost:3000`
