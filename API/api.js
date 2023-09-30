const express = require("express")
const app = express()

app.set("view engine", "ejs")
app.set("views", "./templates")


//This is the main page
app.get("/", (req, res) => {
   const data = {
      pageTitle: 'My EJS Example',
      fruits: ['Apple', 'Banana', 'Cherry', 'Date']
  };
  res.render('index', data);
})


//This page should only be for swapping out the html
app.get("/a", (req, res) => {
   const data = {
      pageTitle: 'Hello! This content has been swapped using HTMX. Notice that the website does not reload and no JSON is required!',
  
  };
  res.render('swapped', data)
})

app.listen(5000, () => {
   console.log("Port listening at 5000")
})