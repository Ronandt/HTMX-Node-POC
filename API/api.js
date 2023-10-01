const express = require("express")
const app = express()

app.set("view engine", "ejs")
app.set("views", "./templates")


//This is the main page. You can swap out all the elements within the body so that it can be like a new page
app.get("/", (req, res) => {
   const data = {
      pageTitle: 'My EJS Example',
      fruits: ['Apple', 'Banana', 'Cherry', 'Date']
  };
  res.render('index', data);
})


//This page should only be for swapping out the html (like a part of it is possible)
app.get("/a", (req, res) => {
   const data = {
      pageTitle: 'Hello! This content has been swapped using HTMX. Notice that the website does not reload and no JSON is required!',
  
  };
  res.render('swapped', data)
})

//rednering entire page by swapping out the content of the index.ejs
app.get("/anotherEntirePage", (req, res) => {
   res.render("newpage")
})

app.listen(5000, () => {
   console.log("Port listening at 5000")
})