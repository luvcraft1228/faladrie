export interface SkillInterface {
  freeSlots: number;
  maxSlots: number;
}

export interface physicalProperty {
  name: string;
  short: boolean;
}

export default interface RaceInterface {
  name: string;
  healthMin: number;
  healthMax: number;
  essenceNat: number;
  tech: SkillInterface;
  social: SkillInterface;
  physical: SkillInterface;
  spirit: SkillInterface;
  physicalProperties: physicalProperty[];
}
