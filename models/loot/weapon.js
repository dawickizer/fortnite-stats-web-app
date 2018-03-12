var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var WeaponSchema = new Schema(
  {
    image: {type: String, required: true},
    name: {type: String, required: true},
    type: {type: String, required: true},
    tier: {type: String, required: true},
    closeRange: {type: Number, required: true},
    midrange: {type: Number, required: true},
    longRange: {type: Number, required: true},
    maxRange: {type: Number, required: true},
    damagePerSecond: {type: Number, required: true},
    bodyDamageClose: {type: Number, required: true},
    headDamageClose: {type: Number, required: true},
    bodyDamageMid: {type: Number, required: true},
    headDamageMid: {type: Number, required: true},
    bodyDamageLong: {type: Number, required: true},
    headDamageLong: {type: Number, required: true},
    bodyDamageMax: {type: Number, required: true},
    headDamageMax: {type: Number, required: true},
    impactDamageClose: {type: Number, required: true},
    impactDamageMid: {type: Number, required: true},
    impactDamageLong: {type: Number, required: true},
    impactDamageMax: {type: Number, required: true},
    environmentalDamageClose: {type: Number, required: true},
    environmentalDamageMid: {type: Number, required: true},
    environmentalDamageLong: {type: Number, required: true},
    environmentalDamageMax: {type: Number, required: true},
    baseSpread: {type: Number, required: true},
    sprintSpread: {type: Number, required: true},
    fallingJumpingSpread: {type: Number, required: true},
    adsSpread: {type: Number, required: true},
    standingSpread: {type: Number, required: true},
    crouchingSpread: {type: Number, required: true},
    horizontalRecoil: {type: Number, required: true},
    horizontalRecoilGamepad: {type: Number, required: true},
    verticalRecoil: {type: Number, required: true},
    verticalRecoilGamepad: {type: Number, required: true},
    angleMax: {type: Number, required: true},
    angleMin: {type: Number, required: true},
    adsRecoil: {type: Number, required: true},
    interpSpeed: {type: Number, required: true},
    interpSpeedRecovery: {type: Number, required: true},
    fireRate: {type: Number, required: true},
    reloadTime: {type: Number, required: true},
    magazineSize: {type: Number, required: true},
    floorLootChance: {type: Number, required: true},
    chestLootChance: {type: Number, required: true},
    supplyDropLootChance: {type: Number, required: true}
  }
);

//Export model
module.exports = mongoose.model('Weapon', WeaponSchema);