# Getting Started with Micro Front End 

An example host application that provides the container for multiple micro-front-end applications. 

Read more about MFE [here](https://micro-frontends.org/). 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Usage

`yarn` - to install the node packages. 

`yarn start` - to run the application. It uses the port 3000. 


## Micro-frontend Remotes
This host container is configured to consume remote MFE application `mfe-remote-cats`. See `modulefederation.config.js` file in this repo to see the configuration. You can create other remote MFE application and change the modulefederation config file. See the corresponding modulefederation config file in the mfe-remote-cats application.
