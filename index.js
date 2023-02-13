const express = require("express");
const PORT = 8080;

const app = express();

app.listen(PORT, (error) => {
  if (error) throw error;
  console.log(`Server Started On Localhost:${PORT}`);
});
