export class Student {
  constructor({ id, name, age, createdAt, characterId = null, avatarConfig = null, selectedAccessories = [] }) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.createdAt = createdAt instanceof Date ? createdAt : new Date(createdAt);
    this.characterId = characterId;
    this.avatarConfig = avatarConfig;
    this.selectedAccessories = selectedAccessories;
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      age: this.age,
      createdAt: this.createdAt.toISOString(),
      characterId: this.characterId,
      avatarConfig: this.avatarConfig,
      selectedAccessories: this.selectedAccessories,
    };
  }

  static fromJSON(json) {
    return new Student({
      id: json.id,
      name: json.name,
      age: json.age,
      createdAt: json.createdAt,
      characterId: json.characterId ?? null,
      avatarConfig: json.avatarConfig ?? null,
      selectedAccessories: json.selectedAccessories ?? [],
    });
  }

  copyWith({ id, name, age, createdAt, characterId, avatarConfig, selectedAccessories } = {}) {
    return new Student({
      id: id ?? this.id,
      name: name ?? this.name,
      age: age ?? this.age,
      createdAt: createdAt ?? this.createdAt,
      characterId: characterId ?? this.characterId,
      avatarConfig: avatarConfig ?? this.avatarConfig,
      selectedAccessories: selectedAccessories ?? this.selectedAccessories,
    });
  }
}



