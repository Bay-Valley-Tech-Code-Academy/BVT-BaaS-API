const { createServer } = require("./server");

require("dotenv").config();
const port = process.env.PORT || 4000;

const app = createServer();

app.listen(port, async () => {
  console.log(`server started at http://localhost:${port}`);
});
