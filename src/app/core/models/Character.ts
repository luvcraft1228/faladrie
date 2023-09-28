import CharacterInterface, {
  CharacterSkillInterface,
  Equipment, Mod,
  PropertyInterface
} from "./interfaces/character.interface";
import {Race} from "./Race.model";

const newEquip = {
  name: '',
  mods: [
    { name: '' } as Mod,
    { name: '' } as Mod,
    { name: '' } as Mod
  ],
  type: ''
};

export default class Character implements CharacterInterface{
  name!: string;
  player!: string;
  Race!: Race;
  properties?: PropertyInterface[];
  totalHealth!: number;
  totalEssence!: number;
  status1?: string;
  status2?: string;
  epuisement?: string;
  PhysicalSkills?: CharacterSkillInterface[];
  SocialSkills?: CharacterSkillInterface[];
  TechSkills?: CharacterSkillInterface[];
  SpiritSkills?: CharacterSkillInterface[];
  inventory!: { name : string }[];
  weapon1!: Equipment;
  weapon2!: Equipment;
  defense1!: Equipment;
  defense2!: Equipment;
  defense3!: Equipment;
  notes!: string;



  constructor(values?: CharacterInterface) {
    if (values) {
      Object.assign(this, values);
      if (!values.name) { this.name = '' }
      if (!values.player) { this.player = '' }
      if (!values.properties) { this.properties = [] }
      if (!values.inventory) { this.inventory = [] }
      if (!values.weapon1) {  this.weapon1 = { ...newEquip } }
      if (!values.weapon2) {  this.weapon2 = { ...newEquip } }
      if (!values.defense1) {  this.defense1 = { ...newEquip } }
      if (!values.defense2) {  this.defense2 = { ...newEquip } }
      if (!values.defense3) {  this.defense3 = { ...newEquip } }
      if (!values.notes) { this.notes = '' }
    }
  }
}
