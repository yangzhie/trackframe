const buildComponents = (components = []) => {
	const result = components.map((component) => ({
		name: component["name"],
		howManyToBeConsumed: component["itemCount"],
		description: component["description"],
		image: component["imageName"],
		drops: buildDrops(component["drops"]),
	}));

	return result;
};

const buildDrops = (drops = []) => {
	const result = drops.map((drop) => ({
		type: drop["type"],
		location: drop["location"],
		chance: drop["chance"],
		rarity: drop["rarity"],
	}));

	return result;
};

const buildAttacks = (attacks = []) => {
	const result = attacks.map((attack) => {
		const damage = {
			impact: attack["damage"]["impact"],
			slash: attack["damage"]["slash"],
			puncture: attack["damage"]["puncture"],
		};

		return {
			name: attack["name"] ?? null,
			speed: attack["speed"] ?? null,
			criticalChance: attack["crit_chance"] ?? null,
			criticalMultiplier: attack["crit_mult"] ?? null,
			statusChance: attack["status_chance"] ?? null,
			damage: damage ?? null,
		};
	});

	return result;
};

const buildParentComponents = (parentComponents = []) => {
	return parentComponents.slice();
};

const buildDamages = (damages = []) => {
	const result = {
		total: damages["total"],
		impact: damages["impact"],
		puncture: damages["puncture"],
		slash: damages["slash"],
		heat: damages["heat"],
		cold: damages["cold"],
		electricity: damages["electricity"],
		toxin: damages["toxin"],
		blast: damages["blast"],
		radiation: damages["radiation"],
		gas: damages["gas"],
		magnetic: damages["magnetic"],
		viral: damages["viral"],
		corrosive: damages["corrosive"],
		void: damages["void"],
		tau: damages["tau"],
		shieldDrain: damages["shieldDrain"],
		healthDrain: damages["healthDrain"],
		energyDrain: damages["energyDrain"],
	};

	return result;
};

const buildRewards = (rewards = []) => {
	const result = rewards.map((reward) => ({
		name: reward["item"]["name"],
		chance: reward["chance"],
		rarity: reward["rarity"],
	}));

	return result;
};

module.exports = {
	buildComponents,
	buildDrops,
	buildParentComponents,
	buildAttacks,
	buildDamages,
	buildRewards,
};
