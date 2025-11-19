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

// Extract Arch-Gun data
const sortArchGuns = (weapons) => {
	const sortedArchGuns = weapons.filter((weapon) => {
		return weapon["category"] === "Arch-Gun";
	});

	return sortedArchGuns;
};

// Extract Arch-Melee data
const sortArchMelee = (weapons) => {
	const sortedArchMelee = weapons.filter((weapon) => {
		return weapon["category"] === "Arch-Melee";
	});

	return sortedArchMelee;
};

module.exports = {
	sortPrimaryWeapons,
	sortSecondaryWeapons,
	sortMeleeWeapons,
	sortArchGuns,
	sortArchMelee,
};
