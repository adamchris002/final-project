const express = require("express");
const app = expresss();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended : true}));

const routes = require('./routes')
app.use(routes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
