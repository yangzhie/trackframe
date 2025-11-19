// TODO: KITGUNS
// TODO: ZAWS
// TODO: PLEXUS
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

	// Declare Amp arrays
	const amps = [];
	const ampBraces = [];
	const ampScaffolds = [];

	// Declare IG-variants array
	const incarnonGenesis = [];

	// Declare Kitgun and Zaw arrays + objects
	const kitguns = [];
	const kitgunComponents = [];
	const kitgunsObj = { kitguns, kitgunComponents };

	const zaws = [];
	const zawComponents = [];
	const zawsObj = { zaws, zawComponents };

	const temp = [];

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
	}

	return zaws;
};

module.exports = {
	sortResources,
};
