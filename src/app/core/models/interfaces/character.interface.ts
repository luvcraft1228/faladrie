import { Race } from "../Race.model";

export interface PropertyInterface {
  name: string;
  value: string;
}

export interface CharacterSkillInterface {
  name: string;
  level1Points: number;
  level2Points: number;
  level3Points: number;
}

export interface Mod {
  name: string;
}

export interface Equipment {
  name: string;
  mods: Mod[];
  type: string;
}

export default interface CharacterInterface {
  name: string;
  player: string;
  Race: Race;
  properties?: PropertyInterface[];
  totalHealth: number;
  totalEssence: number;
  status1?: string;
  status2?: string;
  epuisement?: string;
  PhysicalSkills?: CharacterSkillInterface[];
  SocialSkills?: CharacterSkillInterface[];
  TechSkills?: CharacterSkillInterface[];
  SpiritSkills?: CharacterSkillInterface[];
  inventory: { name : string }[];
  weapon1: Equipment;
  weapon2: Equipment;
  defense1: Equipment;
  defense2: Equipment;
  defense3: Equipment;
  notes: string;

}
