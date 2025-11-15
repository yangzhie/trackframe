const express = require("express");
const app = express();
const PORT = 8881;

app.get("/test", (req, res) => {
	res.json({ hello: "ei" });
});

app.listen(PORT, () => {
	console.log(`Server running at port: ${PORT}`);
});
