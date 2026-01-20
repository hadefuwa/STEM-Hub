// Real DiceBear 'adventurer' API customization options - using correct property names
export const AVATAR_CUSTOMIZATIONS = {
  level1: [
    { id: 'skin-light', name: 'Light Skin', category: 'Skin Tone', option: 'skinColor', value: ['ffdbb4'] },
    { id: 'skin-medium', name: 'Medium Skin', category: 'Skin Tone', option: 'skinColor', value: ['d08b5b'] },
    { id: 'skin-dark', name: 'Dark Skin', category: 'Skin Tone', option: 'skinColor', value: ['ae5d29'] },
  ],
  level2: [
    { id: 'hair-auburn', name: 'Auburn Hair', category: 'Hair Color', option: 'hairColor', value: ['c93305'] },
    { id: 'hair-black', name: 'Black Hair', category: 'Hair Color', option: 'hairColor', value: ['000000'] },
    { id: 'hair-blonde', name: 'Blonde Hair', category: 'Hair Color', option: 'hairColor', value: ['f59797'] },
    { id: 'hair-brown', name: 'Brown Hair', category: 'Hair Color', option: 'hairColor', value: ['6c4545'] },
    { id: 'hair-blue', name: 'Blue Hair', category: 'Hair Color', option: 'hairColor', value: ['3eac2c'] },
  ],
  level3: [
    { id: 'eyes-variant01', name: 'Eyes Style 1', category: 'Eyes', option: 'eyes', value: ['variant01'] },
    { id: 'eyes-variant02', name: 'Eyes Style 2', category: 'Eyes', option: 'eyes', value: ['variant02'] },
    { id: 'eyes-variant03', name: 'Eyes Style 3', category: 'Eyes', option: 'eyes', value: ['variant03'] },
    { id: 'eyes-variant04', name: 'Eyes Style 4', category: 'Eyes', option: 'eyes', value: ['variant04'] },
    { id: 'eyes-variant05', name: 'Eyes Style 5', category: 'Eyes', option: 'eyes', value: ['variant05'] },
    { id: 'skin-yellow', name: 'Golden Skin', category: 'Skin Tone', option: 'skinColor', value: ['ffd700'] },
  ],
  level4: [
    { id: 'glasses-variant01', name: 'Round Glasses', category: 'Glasses', option: 'glasses', value: ['variant01'] },
    { id: 'glasses-variant02', name: 'Square Glasses', category: 'Glasses', option: 'glasses', value: ['variant02'] },
    { id: 'glasses-variant03', name: 'Sunglasses', category: 'Glasses', option: 'glasses', value: ['variant03'] },
    { id: 'glasses-variant04', name: 'Cool Glasses', category: 'Glasses', option: 'glasses', value: ['variant04'] },
    { id: 'glasses-variant05', name: 'Sport Glasses', category: 'Glasses', option: 'glasses', value: ['variant05'] },
    { id: 'glassesProbability-100', name: 'Always Show Glasses', category: 'Glasses', option: 'glassesProbability', value: [100] },
    { id: 'skin-green', name: 'Emerald Skin', category: 'Skin Tone', option: 'skinColor', value: ['7cfc00'] },
  ],
  level5: [
    { id: 'mouth-variant01', name: 'Smile', category: 'Mouth', option: 'mouth', value: ['variant01'] },
    { id: 'mouth-variant02', name: 'Happy', category: 'Mouth', option: 'mouth', value: ['variant02'] },
    { id: 'mouth-variant03', name: 'Laughing', category: 'Mouth', option: 'mouth', value: ['variant03'] },
    { id: 'mouth-variant04', name: 'Nervous', category: 'Mouth', option: 'mouth', value: ['variant04'] },
    { id: 'mouth-variant05', name: 'Serious', category: 'Mouth', option: 'mouth', value: ['variant05'] },
    { id: 'mouth-variant06', name: 'Surprised', category: 'Mouth', option: 'mouth', value: ['variant06'] },
    { id: 'skin-purple', name: 'Purple Majesty', category: 'Skin Tone', option: 'skinColor', value: ['9370db'] },
  ],
};

export function getUnlockedAccessories(levelIndex) {
  const unlocked = [];
  const currentLevel = levelIndex + 1;
  
  for (const [levelKey, customizations] of Object.entries(AVATAR_CUSTOMIZATIONS)) {
    const requiredLevel = parseInt(levelKey.replace('level', ''));
    if (currentLevel >= requiredLevel) {
      unlocked.push(...customizations);
    }
  }
  
  return unlocked;
}

export function getAccessoriesByCategory(levelIndex) {
  const unlocked = getUnlockedAccessories(levelIndex);
  const categories = {};
  
  unlocked.forEach(custom => {
    if (!categories[custom.category]) {
      categories[custom.category] = [];
    }
    categories[custom.category].push(custom);
  });
  
  return categories;
}

export function getAccessoryRequirements(customId) {
  for (const [levelKey, customizations] of Object.entries(AVATAR_CUSTOMIZATIONS)) {
    const found = customizations.find(c => c.id === customId);
    if (found) {
      const level = parseInt(levelKey.replace('level', ''));
      const levelNames = ['Starter', 'Learner', 'Builder', 'Achiever', 'Master'];
      return `Level ${level} (${levelNames[level - 1]})`;
    }
  }
  return 'Unknown';
}

export function getAllAccessories() {
  return Object.values(AVATAR_CUSTOMIZATIONS).flat();
}

export function buildAvatarOptions(selectedCustomizations, backgroundColor) {
  const options = {
    backgroundColor: backgroundColor ? [backgroundColor] : undefined,
  };
  
  const allCustoms = getAllAccessories();
  
  // Build options object properly - each option type can have one value
  const optionValues = {};
  
  selectedCustomizations.forEach(customId => {
    const custom = allCustoms.find(c => c.id === customId);
    if (custom && custom.value && custom.option) {
      // Store the value for each option type
      optionValues[custom.option] = custom.value;
    }
  });
  
  // Merge all option values into the options object
  return { ...options, ...optionValues };
}
