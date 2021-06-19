const express = require('express')
const path = require('path')

const app = express();

// whenever the path has /static, we are going to serve the static diredtory as usual
app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.listen(process.env.PORT || 2121, () => console.log("Serving is doing it's thang!"));