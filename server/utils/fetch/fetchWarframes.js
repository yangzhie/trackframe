const fetchWarframes = async () => {
	// Fetch data
	const response = await fetch("https://api.warframestat.us/warframes");
	const data = await response.json();

	// Data array
	const warframesArr = [];

	// Loop thru all data
	for (let i = 0; i < data.length; i++) {
		// Extract abilities data
		const abilitiesArr = [];
		const dataAbilities = data[i]["abilities"] || [];
		for (let j = 0; j < dataAbilities.length; j++) {
			// Construct abilities object
			const abilities = {
				abilityName: dataAbilities[j]["name"],
				abilityDescription: dataAbilities[j]["description"],
				abilityImage: dataAbilities[j]["imageName"],
			};

			// Push abilities object into main abilities array
			abilitiesArr.push(abilities);
		}

		// Extract components data
		const componentsArr = [];
		const dataComponents = data[i]["components"] || [];
		for (let j = 0; j < dataComponents.length; j++) {
			// Extract drops data
			const dropsArr = [];
			const dataDrops = dataComponents[j]["drops"] || [];
			for (let k = 0; k < dataDrops.length; k++) {
				// Construct drops object
				const drops = {
					type: dataDrops[k]["type"],
					relic: dataDrops[k]["location"],
					rarity: dataDrops[k]["rarity"],
					chance: dataDrops[k]["chance"],
				};

				// Push drops object into drops array
				dropsArr.push(drops);
			}

			// Construct components object
			const components = {
				componentType: dataComponents[j]["name"],
				componentDescription: dataComponents[j]["description"],
				ducatsWorth: dataComponents[j]["ducats"],
				componentImage: dataComponents[j]["imageName"],
				isTradable: dataComponents[j]["tradable"],
				componentImage: dataComponents[j]["imageName"],
				drops: dropsArr,
			};

			// Push components obejct into main components array
			componentsArr.push(components);
		}

		// Input data into temporary object
		const warframeObj = {
			category: data[i]["category"],
			type: data[i]["type"],
			name: data[i]["name"],
			image: data[i]["imageName"],
			description: data[i]["description"],
			abilities: abilitiesArr,
			components: componentsArr,
			masteryRequirement: data[i]["masteryReq"],
			health: data[i]["health"],
			shield: data[i]["shield"],
			power: data[i]["power"],
			stamina: data[i]["stamina"],
			buildPrice: data[i]["buildPrice"],
			buildTime: data[i]["buildTime"],
			skipBuildTimePrice: data[i]["skipBuildTimePrice"],
			isPrime: data[i]["isPrime"],
			isVaulted: data[i]["vaulted"],
			isTradable: data[i]["tradable"],
		};

		// Push object into main array for persistence
		warframesArr.push(warframeObj);
	}

	return warframesArr;
};

module.exports = {
	fetchWarframes,
};
