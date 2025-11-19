// Necramech array (only two exist)
const necramechs = ["Bonewidow", "Voidrig"];

// Filter Warframes from Necramechs, Archwings and the Helminth
const sortWarframes = (warframes) => {
	const sortedWarframes = warframes.filter((warframe) => {
		return (
			// Filter Archwings
			warframe["category"] === "Warframes" &&
			// Filter Helminth
			warframe["name"] !== "Helminth"
		);
	});

	return sortedWarframes;
};

// Filter Necramechs from Warframes
const sortNecramechs = (warframes) => {
	const sortedNecramechs = warframes.filter((warframe) => {
		return necramechs.includes(warframe["name"]);
	});

	return sortedNecramechs;
};

module.exports = {
	sortWarframes,
	sortNecramechs,
};
