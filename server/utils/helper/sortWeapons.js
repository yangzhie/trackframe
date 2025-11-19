// Filter out all primary weapons from weapons array
const sortPrimaryWeapons = (weapons) => {
	const sortedPrimaryWeapons = weapons.filter((weapon) => {
		return weapon["category"] === "Primary";
	});

	return sortedPrimaryWeapons;
};

// Filter out secondary weapons
const sortSecondaryWeapons = (weapons) => {
	const sortedSecondaryWeapons = weapons.filter((weapon) => {
		return weapon["category"] === "Secondary";
	});

	return sortedSecondaryWeapons;
};

// Filter out all melee
const sortMeleeWeapons = (weapons) => {
	const sortedMeleeWeapons = weapons.filter((weapon) => {
		return weapon["category"] === "Melee";
	});

	return sortedMeleeWeapons;
};

module.exports = {
	sortPrimaryWeapons,
	sortSecondaryWeapons,
	sortMeleeWeapons,
};
