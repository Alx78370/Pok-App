export interface Abilities {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface BaseExperience {
  base_experience: number;
}

export interface Cries {
  latest: string;
  legacy: string;
}

export interface Forms {
  name: string;
  url: string;
}

export interface GameIndices {
  game_index: number;
  version: {
    name: string;
    url: string;
  };
}

export interface Height {
  height: number;
}

export interface HeldItems {
  item: {
    name: string;
    url: string;
  };
  version_details: {
    rarity: number;
    version: {
      name: string;
      url: string;
    };
  };
}

export interface Id {
  id: number;
}

export interface IsDefault {
  is_default: boolean;
}

export interface LocationAreaEncounters {
  location_area_encounters: string;
}

export interface Moves {
  move: {
    name: string;
    url: string;
  };
  version_group_details: {
    level_learned_at: number;
    move_learn_method: {
      name: string;
      url: string;
    };
    version_group: {
      name: string;
      url: string;
    };
  };
}

export interface Name {
  name: string;
}

export interface Order {
  order: number;
}

export interface Species {
  name: string;
  url: string;
}

export interface Sprites {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
  other: {
    dream_world: {
      front_default: string;
      front_female: string;
    };
    home: {
      front_default: string;
      front_female: string;
      front_shiny: string;
      front_shiny_female: string;
    };
    official_artwork: {
      front_default: string;
      front_shiny: string;
    };
    showdown: {
      back_default: string;
      back_female: string;
      back_shiny: string;
      back_shiny_female: string;
      front_default: string;
      front_female: string;
      front_shiny: string;
      front_shiny_female: string;
    };
  };
  versions: {
    generation_i: {
      red_blue: {
        back_default: string;
        back_gray: string;
        back_transparent: string;
        front_default: string;
        front_gray: string;
        front_transparent: string;
      };
      yellow: {
        back_default: string;
        back_gray: string;
        back_transparent: string;
        front_default: string;
        front_gray: string;
        front_transparent: string;
      };
    };
    generation_ii: {
      crystal: {
        back_default: string;
        back_shiny: string;
        back_shiny_transparent: string;
        back_transparent: string;
        front_default: string;
        front_shiny: string;
        front_shiny_transparent: string;
        front_transparent: string;
      };
      gold: {
        back_default: string;
        back_shiny: string;
        front_default: string;
        front_shiny: string;
        front_transparent: string;
      };
      silver: {
        back_default: string;
        back_shiny: string;
        front_default: string;
        front_shiny: string;
        front_transparent: string;
      };
    };
    generation_iii: {
      emerald: {
        front_default: string;
        front_shiny: string;
      };
      firered_leafgreen: {
        back_default: string;
        back_shiny: string;
        front_default: string;
        front_shiny: string;
      };
      ruby_sapphire: {
        back_default: string;
        back_shiny: string;
        front_default: string;
        front_shiny: string;
      };
    };
    generation_iv: {
      diamond_pearl: {
        back_default: string;
        back_female: string;
        back_shiny: string;
        back_shiny_female: string;
        front_default: string;
        front_female: string;
        front_shiny: string;
        front_shiny_female: string;
      };
      heartgold_soulsilver: {
        back_default: string;
        back_female: string;
        back_shiny: string;
        back_shiny_female: string;
        front_default: string;
        front_female: string;
        front_shiny: string;
        front_shiny_female: string;
      };
      platinum: {
        back_default: string;
        back_female: string;
        back_shiny: string;
        back_shiny_female: string;
        front_default: string;
        front_female: string;
        front_shiny: string;
        front_shiny_female: string;
      };
    };
    generation_v: {
      black_white: {
        animated: {
          back_default: string;
          back_female: string;
          back_shiny: string;
          back_shiny_female: string;
          front_default: string;
          front_female: string;
          front_shiny: string;
          front_shiny_female: string;
        };
        back_default: string;
        back_female: string;
        back_shiny: string;
        back_shiny_female: string;
        front_default: string;
        front_female: string;
        front_shiny: string;
        front_shiny_female: string;
      };
    };
    generation_vi: {
      omegaruby_alphasapphire: {
        front_default: string;
        front_female: string;
        front_shiny: string;
        front_shiny_female: string;
      };
      x_y: {
        front_default: string;
        front_female: string;
        front_shiny: string;
        front_shiny_female: string;
      };
    };
    generation_vii: {
      icons: {
        front_default: string;
        front_female: string;
      };
      ultra_sun_ultra_moon: {
        front_default: string;
        front_female: string;
        front_shiny: string;
        front_shiny_female: string;
      };
    };
    generation_viii: {
      icons: {
        front_default: string;
        front_female: string;
      };
    };
  };
}

export interface Stats {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface Types {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface Weight {
  weight: number;
}

export interface Pokemon {
  abilities: Abilities[];
  base_experience: number;
  cries: Cries;
  forms: Forms[];
  game_indices: GameIndices[];
  height: number;
  held_items: HeldItems[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Moves[];
  name: string;
  order: number;
  species: Species;
  sprites: Sprites;
  stats: Stats[];
  types: Types[];
  weight: number;
}
