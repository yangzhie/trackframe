const express = require("express");
const { fetchWarframes } = require("./utils/fetch/fetchWarframes");
const { fetchWeapons } = require("./utils/fetch/fetchWeapons");
const { fetchResources } = require("./utils/fetch/fetchResources");
const {
	sortWarframes,
	sortNecramechs,
} = require("./utils/helper/sortWarframes");
const app = express();
const PORT = 8881;

app.get("/test", (req, res) => {
	res.json({ hello: "ei" });
});

app.get("/warframes", async (req, res) => {
	const warframes = await fetchWarframes();
	const sortedWarframes = sortWarframes(warframes);
	const sortedNecramechs = sortNecramechs(warframes);
	res.json(sortedNecramechs);
});

app.get("/weapons", async (req, res) => {
	const data = await fetchWeapons();
	res.json(data);
});

app.get("/resources", async (req, res) => {
	const data = await fetchResources();
	res.json(data);
});

app.listen(PORT, () => {
	console.log(`Server running at port: ${PORT}`);
});
