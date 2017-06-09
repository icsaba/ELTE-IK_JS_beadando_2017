# ELTE-IK_JS_beadando_2017
JS midterm project on University of ELTE
Technologies:
 - npm
 - webpack
 - angularjs
 - babel
 - koajs - (Koa2)
 - mondogdb - (mongoose)

Just an update about Koa
https://github.com/koajs/koa/blob/master/docs/migration.md

## Start the application
```
npm install
```
##### To build:
```
npm run build
```
##### start mongodb:
For example:
```
mongod.exe --dbpath D:\Documents\Beadando\ELTE-IK_JS_beadando_2017\data
```
##### start koa server:
Starts the Koa server. It is responsible for handling the requests. 
```
npm run src/server
```
##### Continuous development:
```
npm start
```
This will open the browser automatically, and if there are any code changes, the browser will be realoded.
There is a proxy set up for the API calls, for example: get/save/update persona.