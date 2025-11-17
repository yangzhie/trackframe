const {
	buildComponents,
	buildAttacks,
	buildParentComponents,
	buildDrops,
	buildDamages,
	buildRewards,
} = require("./builders");

// Template function to sort resources by types
const fetchTemplate = (data, inputResourceType) => {
	// Main persistent array
	const result = [];

	const tryPush = (type, object) => {
		if (type === inputResourceType) {
			result.push(object);
		}
	};

	// Main loop
	for (let i = 0; i < data.length; i++) {
		// Boilerplate data
		const type = data[i]["type"];
		const base = {
			resource: data[i]["name"],
			resourceType: type,
			image: data[i]["imageName"],
			description: data[i]["description"],
			masteryRequirement: data[i]["masteryReq"],
			isTradeable: data[i]["tradeable"],
		};

		// Kitgun Components
		if (type === "Kitgun Component") {
			const object = {
				...base,
				yield: data[i]["buildQuantity"],
				buildTime: data[i]["buildTime"],
				buildPrice: data[i]["buildPrice"],
				skipBuildTimePrice: data[i]["skipBuildTimePrice"],
				criticalChance: data[i]["crit_chance"],
				criticalMultiplier: data[i]["crit_mult"],
				fireRate: data[i]["fireRate"],
				procChance: data[i]["procChance"],
				components: buildComponents(data[i]["components"]),
			};

			tryPush(type, object);
			continue;
		}

		// Zaw Components
		if (type === "Zaw Component") {
			const object = {
				...base,
				isPrime: data[i]["isPrime"],
				buildQuantity: data[i]["buildQuantity"],
				buildTime: data[i]["buildTime"],
				buildPrice: data[i]["buildPrice"],
				skipBuildTimePrice: data[i]["skipBuildTimePrice"],
				criticalChance: data[i]["criticalChance"],
				criticalMultiplier: data[i]["criticalMultiplier"],
				fireRate: data[i]["fireRate"],
				procChance: data[i]["procChance"],
				components: buildComponents(data[i]["components"]),
				attacks: buildAttacks(data[i]["attacks"]),
			};

			tryPush(type, object);
			continue;
		}

		// Alloys
		if (type === "Alloy") {
			const object = {
				...base,
				yield: data[i]["itemCount"],
				buildTime: data[i]["buildTime"],
				buildPrice: data[i]["buildPrice"],
				skipBuildTimePrice: data[i]["skipBuildTimePrice"],
				components: buildComponents(data[i]["components"]),
				parentComponents: buildParentComponents(data[i]["parents"]),
			};

			tryPush(type, object);
			continue;
		}

		// Fish + Fish Part + Fish Bait
		if (["Fish", "Fish Part", "Fish Bait"].includes(type)) {
			// Case: Fish + Fish Part
			const object = {
				...base,
				yield: data[i]["itemCount"],
				drops: buildDrops(data[i]["drops"]),
				parentComponents: buildParentComponents(data[i]["parents"]),
			};

			// Case: Fish Bait
			if (type === "Fish Bait") {
				object["yield"] = data[i]["buildQuantity"];
				object["buildTime"] = data[i]["buildTime"];
				object["buildPrice"] = data[i]["buildPrice"];
				object["skipBuildTimePrice"] = data[i]["skipBuildTimePrice"];
				object["components"] = buildComponents(data[i]["components"]);
			}

			tryPush(type, object);
			continue;
		}

		// Plants
		if (type === "Plant") {
			const object = {
				...base,
				yield: data[i]["itemCount"],
				parentComponents: buildParentComponents(data[i]["parents"]),
			};

			tryPush(type, object);
			continue;
		}

		// Gems + Cut Gems
		if (["Gem", "Cut Gem"].includes(type)) {
			const object = {
				...base,
				yield: data[i]["itemCount"],
				buildTime: data[i]["buildTime"],
				buildPrice: data[i]["buildPrice"],
				skipBuildTimePrice: data[i]["skipBuildTimePrice"],
				drops: buildDrops(data[i]["drops"]),
				components: buildComponents(data[i]["components"]),
				parentComponents: buildParentComponents(data[i]["parents"]),
			};

			tryPush(type, object);
			continue;
		}

		// Pets + Pet Parts + Pet Resource
		if (["Pets", "Pet Parts", "Pet Resource"].includes(type)) {
			const object = {
				...base,
				health: data[i]["health"],
				armor: data[i]["armor"],
				shield: data[i]["shield"],
				power: data[i]["power"],
				stamina: data[i]["stamina"],
				yield: data[i]["buildQuantity"],
				buildTime: data[i]["buildTime"],
				buildPrice: data[i]["buildPrice"],
				skipBuildTimePrice: data[i]["skipBuildTimePrice"],
				criticalChance: data[i]["criticalChance"],
				criticalMultiplier: data[i]["criticalMultiplier"],
				fireRate: data[i]["fireRate"],
				procChance: data[i]["procChance"],
				components: buildComponents(data[i]["components"]),
			};

			tryPush(type, object);
			continue;
		}

		// Sentinel
		if (type === "Sentinel") {
			const object = {
				...base,
				isPrime: data[i]["isPrime"],
				health: data[i]["health"],
				armor: data[i]["armor"],
				shield: data[i]["shield"],
				power: data[i]["power"],
				stamina: data[i]["stamina"],
				yield: data[i]["buildQuantity"],
				buildTime: data[i]["buildTime"],
				buildPrice: data[i]["buildPrice"],
				skipBuildTimePrice: data[i]["skipBuildTimePrice"],
				components: buildComponents(data[i]["components"]),
			};

			tryPush(type, object);
			continue;
		}

		// Companion Weapons
		if (type === "Companion Weapon") {
			const object = {
				...base,
				isPrime: data[i]["isPrime"],
				yield: data[i]["buildQuantity"],
				buildTime: data[i]["buildTime"],
				buildPrice: data[i]["buildPrice"],
				skipBuildTimePrice: data[i]["skipBuildTimePrice"],
				totalDamage: data[i]["totalDamage"],
				criticalChance: data[i]["criticalChance"],
				criticalMultiplier: data[i]["criticalMultiplier"],
				fireRate: data[i]["fireRate"],
				procChance: data[i]["procChance"],
				attacks: buildAttacks(data[i]["attacks"]),
				damages: buildDamages(data[i]["damage"]),
				components: buildComponents(data[i]["components"]),
			};

			if (data[i]["tags"].includes("Vaulted")) {
				object["isVaulted"] = true;
			}

			tryPush(type, object);
			continue;
		}

		// Amp
		if (type === "Amp") {
			const object = {
				...base,
				yield: data[i]["buildQuantity"],
				buildTime: data[i]["buildTime"],
				buildPrice: data[i]["buildPrice"],
				skipBuildTimePrice: data[i]["skipBuildTimePrice"],
				criticalChance: data[i]["criticalChance"],
				criticalMultiplier: data[i]["criticalMultiplier"],
				fireRate: data[i]["fireRate"],
				procChance: data[i]["procChance"],
				components: buildComponents(data[i]["components"]),
			};

			tryPush(type, object);
			continue;
		}

		// Eidolon Shard
		if (type === "Eidolon Shard") {
			const object = {
				...base,
				yield: data[i]["itemCount"],
				drops: buildDrops(data[i]["drops"]),
				parentComponents: buildParentComponents(data[i]["parents"]),
			};

			tryPush(type, object);
			continue;
		}

		// K-Drive Component
		if (type === "K-Drive Component") {
			const object = {
				...base,
				yield: data[i]["buildQuantity"],
				buildTime: data[i]["buildTime"],
				buildPrice: data[i]["buildPrice"],
				skipBuildTimePrice: data[i]["skipBuildTimePrice"],
				criticalChance: data[i]["criticalChance"],
				criticalMultiplier: data[i]["criticalMultiplier"],
				fireRate: data[i]["fireRate"],
				procChance: data[i]["procChance"],
				components: buildComponents(data[i]["components"]),
			};

			tryPush(type, object);
			continue;
		}

		// Pedasites
		if (type === "Conservation Prey") {
			const object = {
				...base,
				criticalChance: data[i]["criticalChance"],
				criticalMultiplier: data[i]["criticalMultiplier"],
				fireRate: data[i]["fireRate"],
				procChance: data[i]["procChance"],
			};

			tryPush(type, object);
			continue;
		}

		// Incarnon Genesis Weapons
		if (type === "Equipment Adapter") {
			if (data[i]["name"].includes("Incarnon Genesis")) {
				tryPush(type, base);
			}

			continue;
		}

		// Relic
		if (type === "Relic") {
			const object = {
				...base,
				isVaulted: data[i]["vaulted"],
				rewards: buildRewards(data[i]["rewards"]),
				drops: buildDrops(data[i]["drops"]),
			};

			tryPush(type, object);
			continue;
		}

		// Misc (sort later)
		if (type === "Misc") {
			const object = {
				...base,
				drops: buildDrops(data[i]["drops"]),
				parentComponents: buildParentComponents(data[i]["parents"]),
			};

			tryPush(type, object);
			continue;
		}
	}

	return result;
};

module.exports = {
	fetchTemplate,
};
