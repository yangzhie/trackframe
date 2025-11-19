// TODO: KITGUNS
// TODO: ZAWS
// TODO: ARCHWINGS + PLEXUS
// TODO: ARCHGUNS
// TODO: ARCHMELEES
// TODO: AMPS
const kDrivesArr = [
	"Bad Baby",
	"Feverspine",
	"Flatbelly",
	"Needlenose",
	"Runway",
];

const sortResources = (resourcesObj) => {
	// Extract values and get rid of nested arrays
	const resources = Object.values(resourcesObj).flat();

	// Declare robotic arrays
	const sentinelWeapons = [];
	const hounds = [];
	const sentinels = [];
	const moas = [];
	const robotics = { sentinelWeapons, hounds, sentinels, moas };

	// Declare companion arrays
	const kavats = [];
	const kubrows = [];
	const vulpaphylas = [];
	const helminthCharger = [];
	const predasites = [];
	const companions = { kavats, kubrows, vulpaphylas, predasites };

	// Declare k-drive and relevant component arrays
	const kDrives = [];
	const kDriveComponents = [];

	const temp = [];

	// Loop resources
	for (let i = 0; i < resources.length; i++) {
		const type = resources[i]["resourceType"];
		const name = resources[i]["resource"];

		// Extract sentinels
		if (type === "Sentinel") {
			sentinels.push(resources[i]);
		}

		// Extract sentinel weapons
		if (type === "Companion Weapon") {
			sentinelWeapons.push(resources[i]);
		}

		// Extract pets
		if (type === "Pets") {
			// Extract robotics
			if (name.includes("Hound")) {
				hounds.push(resources[i]);
			} else if (name.includes("Moa")) {
				moas.push(resources[i]);
			}

			// Extract companions
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

		// Extract k-drives + components
		if (type === "K-Drive Component") {
			if (kDrivesArr.includes(resources[i]["resource"])) {
				kDrives.push(resources[i]);
			} else {
				kDriveComponents.push(resources[i]);
			}
		}
	}

	return temp;
};

module.exports = {
	sortResources,
};
