const kDrivesArr = [
	"Bad Baby",
	"Feverspine",
	"Flatbelly",
	"Needlenose",
	"Runway",
];
const kitgunsArr = [
	"Catchmoon",
	"Gaze",
	"Rattleguts",
	"Tombfinger",
	"Sporelacer",
	"Vermisplicer",
];
const zawArr = [
	"Balla",
	"Cyath",
	"Dehtat",
	"Dokrahm",
	"Kronsh",
	"Mewan",
	"Ooltha",
	"Rabvee",
	"Sepfahn",
	"Plague Keewar",
	"Plague Kripath",
];

const sortResources = (resourcesObj) => {
	// Extract values and get rid of nested arrays
	const resources = Object.values(resourcesObj).flat();

	// Declare Robotic arrays
	const sentinelWeapons = [];
	const hounds = [];
	const sentinels = [];
	const moas = [];
	const robotics = { sentinelWeapons, hounds, sentinels, moas };

	// Declare Companion arrays
	const kavats = [];
	const kubrows = [];
	const vulpaphylas = [];
	const helminthCharger = [];
	const predasites = [];
	const companions = { kavats, kubrows, vulpaphylas, predasites };

	// Declare K-Drive and relevant Component arrays
	const kDrives = [];
	const kDriveComponents = [];
	const kDriveObj = { kDrives, kDriveComponents };

	// Declare Amp arrays
	const amps = [];
	const ampBraces = [];
	const ampScaffolds = [];
	const ampObj = { amps, ampBraces, ampScaffolds };

	// Declare IG-variants array
	const incarnonGenesis = [];

	// Declare Kitgun and Zaw arrays + objects
	const kitguns = [];
	const kitgunComponents = [];
	const kitgunsObj = { kitguns, kitgunComponents };

	const zaws = [];
	const zawComponents = [];
	const zawsObj = { zaws, zawComponents };

	// Declare Alloys array
	const alloys = [];

	// Declare Fish-related arrays
	const actualFishes = [];
	const fishParts = [];
	const fishBaits = [];
	const fishesObj = { actualFishes, fishParts, fishBaits };

	// Declare Plants array
	const plants = [];

	// Declare Gems array
	const gems = [];
	const cutGems = [];
	const gemsObj = { gems, cutGems };

	// Declare Eidolon Shard array
	const eidolonShards = [];

	// Declare Relic array
	const relics = [];

	// Declare Misc array
	const misc = [];

	// Loop resources
	for (let i = 0; i < resources.length; i++) {
		const type = resources[i]["resourceType"];
		const name = resources[i]["resource"];

		// Extract Sentinels
		if (type === "Sentinel") {
			sentinels.push(resources[i]);
		}

		// Extract Sentinel Weapons
		if (type === "Companion Weapon") {
			sentinelWeapons.push(resources[i]);
		}

		// Extract Pets
		if (type === "Pets") {
			// Extract Robotics
			if (name.includes("Hound")) {
				hounds.push(resources[i]);
			} else if (name.includes("Moa")) {
				moas.push(resources[i]);
			}

			// Extract Companions
			if (name.includes("Kavat")) {
				kavats.push(resources[i]);
			} else if (name.includes("Kubrow")) {
				kubrows.push(resources[i]);
			} else if (name.includes("Vulpaphyla")) {
				vulpaphylas.push(resources[i]);
			} else if (name.includes("Helminth")) {
				helminthCharger.push(resources[i]);
			} else if (name.includes("Predasite")) {
				predasites.push(resources[i]);
			}
		}

		// Extract K-Drives + Components
		if (type === "K-Drive Component") {
			if (kDrivesArr.includes(name)) {
				kDrives.push(resources[i]);
			} else {
				kDriveComponents.push(resources[i]);
			}
		}

		// Extract Amps
		if (type === "Amp") {
			if (name.includes("Prism")) {
				amps.push(resources[i]);
			} else if (name.includes("Brace")) {
				ampBraces.push(resources[i]);
			} else if (name.includes("Scaffold")) {
				ampScaffolds.push(resources[i]);
			}
		}

		// Extract Incarnon Genesis Weapons
		if (type === "Equipment Adapter") {
			incarnonGenesis.push(resources[i]);
		}

		// Extract Kitguns + their components
		if (type === "Kitgun Component") {
			if (kitgunsArr.includes(name)) {
				kitguns.push(resources[i]);
			} else {
				kitgunComponents.push(resources[i]);
			}
		}

		// Extract Zaws + their components
		if (type === "Zaw Component") {
			if (zawArr.includes(name)) {
				zaws.push(resources[i]);
			} else {
				zawArr.push(resources[i]);
			}
		}

		// Extract Alloys
		if (type === "Alloy") {
			alloys.push(resources[i]);
		}

		// Extract Fish + Fish data
		if (type === "Fish" || type === "Fish Part" || type === "Fish Bait") {
			if (type === "Fish") {
				actualFishes.push(resources[i]);
			} else if (type === "Fish Part") {
				fishParts.push(resources[i]);
			} else if (type === "Fish Bait") {
				fishBaits.push(resources[i]);
			}
		}

		// Extract Plant data
		if (type === "Plant") {
			plants.push(resources[i]);
		}

		// Extract Gem data
		if (type === "Gem" || type === "Cut Gem") {
			if (type === "Gem") {
				gems.push(resources[i]);
			} else if (type === "Cut Gem") {
				cutGems.push(resources[i]);
			}
		}

		// Extract Eidolon Shard data
		if (type === "Eidolon Shard") {
			eidolonShards.push(resources[i]);
		}

		// Extract Relic data
		if (type === "Relic") {
			relics.push(resources[i]);
		}

		// Extract Misc. data (work on more later)
		if (type === "Misc") {
			misc.push(resources[i]);
		}
	}

	return {
		robotics: robotics,
		companions: companions,
		kDrives: kDriveObj,
		amps: ampObj,
		incarnonGenesis: incarnonGenesis,
		kitguns: kitgunsObj,
		zaws: zawsObj,
		alloys: alloys,
		fishes: fishesObj,
		plants: plants,
		gems: gemsObj,
		eidolonShards: eidolonShards,
		relics: relics,
		misc: misc,
	};
};

module.exports = {
	sortResources,
};
