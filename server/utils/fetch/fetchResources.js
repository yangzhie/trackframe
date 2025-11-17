const { fetchTemplate } = require("../helper/fetchTemplate");

const fetchResources = async () => {
	// Fetch relevant data
	const response = await fetch("https://api.warframestat.us/items/");
	const data = await response.json();

	// Initialize different arrays
	const kitgunComponentArr = fetchTemplate(data, "Kitgun Component");
	const zawComponentArr = fetchTemplate(data, "Zaw Component");
	const alloyArr = fetchTemplate(data, "Alloy");
	const fishArr = fetchTemplate(data, "Fish");
	const fishPartArr = fetchTemplate(data, "Fish Part");
	const fishBaitArr = fetchTemplate(data, "Fish Bait");
	const plantArr = fetchTemplate(data, "Plant");
	const gemArr = fetchTemplate(data, "Gem");
	const cutGemArr = fetchTemplate(data, "Cut Gem");
	const petArr = fetchTemplate(data, "Pets");
	const petPartArr = fetchTemplate(data, "Pet Parts");
	const petResourceArr = fetchTemplate(data, "Pet Resource");
	const sentinelArr = fetchTemplate(data, "Sentinel");
	const companionWeaponArr = fetchTemplate(data, "Companion Weapon");
	const ampArr = fetchTemplate(data, "Amp");
	const eidolonShardArr = fetchTemplate(data, "Eidolon Shard");
	const kdriveComponentArr = fetchTemplate(data, "K-Drive Component");
	const conservationPreyArr = fetchTemplate(data, "Conservation Prey");
	const equipmentAdapterArr = fetchTemplate(data, "Equipment Adapter");
	const relicArr = fetchTemplate(data, "Relic");
	const miscArr = fetchTemplate(data, "Misc");

	return {
		kitgunComponent: kitgunComponentArr,
		zawComponent: zawComponentArr,
		alloy: alloyArr,
		fish: fishArr,
		fishPart: fishPartArr,
		fishbait: fishBaitArr,
		plant: plantArr,
		gem: gemArr,
		cutGem: cutGemArr,
		pet: petArr,
		petPart: petPartArr,
		petResource: petResourceArr,
		sentinel: sentinelArr,
		companionWeapon: companionWeaponArr,
		amp: ampArr,
		eidolonShard: eidolonShardArr,
		kdriveComponent: kdriveComponentArr,
		conservationPrey: conservationPreyArr,
		equipmentAdapter: equipmentAdapterArr,
		relic: relicArr,
		misc: miscArr,
	};
};

module.exports = {
	fetchResources,
};
