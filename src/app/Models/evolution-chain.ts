export interface EvolutionChain {
  baby_trigger_item: string;
  chain: chain;
  id: number;
}

export interface baby_trigger_item {
  baby_trigger_item: string;
}

export interface chain {
  is_baby: boolean;
  species: {
    name: string;
    url: string;
  };
  evolution_details: {
    item: baby_trigger_item;
    trigger: {
      name: string;
      url: string;
    };
  };
  evolves_to: chain[];
}


