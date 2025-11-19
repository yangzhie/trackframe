const express = require("express");
const { fetchWarframes } = require("./utils/fetch/fetchWarframes");
const { fetchWeapons } = require("./utils/fetch/fetchWeapons");
const { fetchResources } = require("./utils/fetch/fetchResources");
const {
	sortWarframes,
	sortNecramechs,
} = require("./utils/helper/sortWarframes");
const {
	sortPrimaryWeapons,
	sortSecondaryWeapons,
	sortMeleeWeapons,
} = require("./utils/helper/sortWeapons");

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
	const weapons = await fetchWeapons();
	const primaryWeapons = sortPrimaryWeapons(weapons);
	// TODO: add kitguns
	const secondaryWeapons = sortSecondaryWeapons(weapons);
	// TODO: add zaws
	const meleeWeapons = sortMeleeWeapons(weapons);
	res.json(meleeWeapons);
});

app.get("/resources", async (req, res) => {
	const data = await fetchResources();
	res.json(data);
});

app.listen(PORT, () => {
	console.log(`Server running at port: ${PORT}`);
});
