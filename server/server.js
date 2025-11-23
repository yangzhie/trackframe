const express = require("express");
const { fetchWarframes } = require("./utils/fetch/fetchWarframes");
const { fetchWeapons } = require("./utils/fetch/fetchWeapons");
const { fetchResources } = require("./utils/fetch/fetchResources");
const {
	sortWarframes,
	sortArchwings,
	sortNecramechs,
} = require("./utils/helper/sortWarframes");
const {
	sortPrimaryWeapons,
	sortSecondaryWeapons,
	sortMeleeWeapons,
	sortArchGuns,
	sortArchMelee,
} = require("./utils/helper/sortWeapons");
const { sortResources } = require("./utils/helper/sortResources");

const app = express();
const PORT = 8881;

app.get("/warframes", async (req, res) => {
	const rawWarframes = await fetchWarframes();

	const warframes = sortWarframes(rawWarframes);
	const archwings = sortArchwings(rawWarframes);
	const necramechs = sortNecramechs(rawWarframes);

	res.json(archwings);
});

app.get("/weapons", async (req, res) => {
	const rawWeapons = await fetchWeapons();

	const primaryWeapons = sortPrimaryWeapons(rawWeapons);
	const secondaryWeapons = sortSecondaryWeapons(rawWeapons);
	const meleeWeapons = sortMeleeWeapons(rawWeapons);
	const archGuns = sortArchGuns(rawWeapons);
	const archMelees = sortArchMelee(rawWeapons);

	res.json(archMelees);
});

app.get("/resources", async (req, res) => {
	const rawResources = await fetchResources();

	const resources = sortResources(rawResources);

	res.json(resources);
});

app.listen(PORT, () => {
	console.log(`Server running at port: ${PORT}`);
});
