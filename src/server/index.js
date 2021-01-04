import express from "express"
import cors from "cors"
import React from "react"
import { renderToString } from "react-dom/server"
import { StaticRouter, matchPath } from "react-router-dom"
import serialize from "serialize-javascript"
import routes from '../shared/routes'
import App from '../shared/App'
import Top from '../shared/Top'

const app = express()

app.use(cors())
app.use(express.static("public"))

app.get("/test", (req, res, next) => {
  res.status(200).json({
    "test1": '1',
    "test2": '2',
  });
});

app.get("/allowedRoutes", (req, res, next) => {
  res.status(200).json({
    "Pages": [{"name":"Page1","endpoint":"/page1"},{"name":"Page2","endpoint":"/page2"}],
    "User": [{"name":"UserPage1","endpoint":"/userpage1"},{"name":"UserPage2","endpoint":"/userpage2"}],
    "Account": [{"name":"Profile","endpoint":"/profile"},{"name":"Settings","endpoint":"/settings"}]
  });
});

app.get("/userData/:id", (req, res, next) => {
  var userID = req.params['id'];
  var userSettings = getUserSettings(userID);
  var allowedRoutes = {
    "Pages": [{"name":"Page1","endpoint":"/page1"},{"name":"Page2","endpoint":"/page2"}],
    "User": [{"name":"UserPage1","endpoint":"/userpage1"},{"name":"UserPage2","endpoint":"/userpage2"}],
    "Account": [{"name":"Profile","endpoint":"/profile"},{"name":"Settings","endpoint":"/settings"}]
  }
  var responsePayload = {
    "userSettings":userSettings,
    "allowedRoutes":allowedRoutes
  }
  res.status(200).json(responsePayload);
});

app.get("*", (req, res, next) => {
  const activeRoute = routes.find((route) => matchPath(req.url, route)) || {}
  const promise = activeRoute.fetchInitialData
    ? activeRoute.fetchInitialData(req.path)
    : Promise.resolve()

  promise.then((data) => {
    const context = { data }
    const markup = renderToString(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    )

    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Stan's React</title>
          <link rel="stylesheet" href="style.css">
          <script src="/bundle.js" defer></script>
          <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
        </head>

        <body>
          <div id="app">${markup}</div>
        </body>
      </html>
    `);
  }).catch(next)
});

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`)
})

function getUserSettings(user = "default"){
  var userSettings = {
    "theme":"dark",
    "favoriteFruit":"raspberry"
  };
  if (user != "default"){
    // eventually
  }
  return userSettings;
}

/*
  1) Just get shared App rendering to string on server then taking over on client.
  2) Pass data to <App /> on server. Show diff. Add data to window then pick it up on the client too.
  3) Instead of static data move to dynamic data (github gists)
  4) add in routing.
*/
