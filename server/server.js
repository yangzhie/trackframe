const express = require("express");
const { fetchWarframes } = require("./fetch/fetchWarframes");
const app = express();
const PORT = 8881;

app.get("/test", (req, res) => {
	res.json({ hello: "ei" });
});

app.get("/warframes", async (req, res) => {
	const data = await fetchWarframes();
	res.json(data);
});

app.listen(PORT, () => {
	console.log(`Server running at port: ${PORT}`);
});
