require("dotenv").config();

const { createServer } = require("./server");
const port = process.env.PORT || 4000;

const app = createServer();

app.listen(port, async () => {
  console.log(`server started at http://localhost:${port}`);
});
