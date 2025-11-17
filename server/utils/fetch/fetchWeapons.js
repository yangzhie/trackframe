const fetchWeapons = async () => {
	const response = await fetch("https://api.warframestat.us/weapons");
	const data = await response.json();

	const weapons = [];

	for (let i = 0; i < data.length; i++) {
		// Extract weapon's damage data
		const dmg = data[i].damage || {};
		const damageTypes = {
			total: dmg["total"] ?? null,
			impact: dmg["impact"] ?? null,
			puncture: dmg["puncture"] ?? null,
			slash: dmg["slash"] ?? null,
			heat: dmg["heat"] ?? null,
			cold: dmg["cold"] ?? null,
			electricity: dmg["electricity"] ?? null,
			toxin: dmg["toxin"] ?? null,
			blast: dmg["blast"] ?? null,
			radiation: dmg["radiation"] ?? null,
			gas: dmg["gas"] ?? null,
			magnetic: dmg["magnetic"] ?? null,
			viral: dmg["viral"] ?? null,
			corrosive: dmg["corrosive"] ?? null,
			void: dmg["void"] ?? null,
			tau: dmg["tau"] ?? null,
			shieldDrain: dmg["shieldDrain"] ?? null,
			healthDrain: dmg["healthDrain"] ?? null,
			energyDrain: dmg["energyDrain"] ?? null,
		};

		// Extract weapon attacks
		const attacks = [];
		const a = data[i]["attacks"] || [];
		for (let j = 0; j < a.length; j++) {
			// Attack name
			const attackName = a[j]["name"];

			// Attack damages
			const damages = {
				impact: a[j]["damage"]["impact"],
				puncture: a[j]["damage"]["puncture"],
				slash: a[j]["damage"]["slash"],
			};

			attacks.push({
				attack: attackName,
				attackDamage: damages,
			});
		}

		// Extract weapon component data
		const components = [];
		const c = data[i]["components"] || [];
		for (let j = 0; j < c.length; j++) {
			// Component drop information
			const drop = [];
			const d = c[j]["drops"] || [];
			for (let k = 0; k < d.length; k++) {
				const dropObj = {
					chance: d[k]["chance"],
					location: d[k]["location"],
					rarity: d[k]["rarity"],
				};

				drop.push(dropObj);
			}

			// Component object
			const component = {
				type: c[j]["name"],
				description: c[j]["description"],
				image: c[j]["imageName"],
				isTradable: c[j]["tradable"],
				drops: drop,
				ducatsWorth: c[j]["ducats"],
			};

			components.push(component);
		}

		// Build weapon information component
		const weapon = {
			name: data[i]["name"],
			category: data[i]["category"],
			description: data[i]["description"],
			type: data[i]["type"],
			marketCost: data[i]["marketCost"],
			masteryRequirement: data[i]["masteryReq"],
			buildPrice: data[i]["buildPrice"],
			buildTime: data[i]["buildTime"],
			skipBuildTimePrice: data[i]["skipBuildTimePrice"],
			components: components,
			fireRate: data[i]["fireRate"],
			magazineSize: data[i]["magazineSize"],
			reloadTime: data[i]["reloadTime"],
			multishot: data[i]["multishot"],
			attacks: attacks,
			procChance: data[i]["procChance"],
			triggerType: data[i]["trigger"],
			criticalChance: data[i]["criticalChance"],
			criticalMultiplier: data[i]["criticalMultiplier"],
			damages: damageTypes,
			rivenDisposition: data[i]["disposition"],
			isPrime: data[i]["isPrime"],
			isTradable: data[i]["tradable"],
		};

		// Push weapon details into main array for persistence
		weapons.push(weapon);
	}

	return weapons;
};

module.exports = {
	fetchWeapons,
};
