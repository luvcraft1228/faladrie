import RaceInterface, {physicalProperty, SkillInterface} from "./interfaces/race.interface";

export class Race implements RaceInterface {
  essenceNat!: number;
  healthMax!: number;
  healthMin!: number;
  name!: string;
  physical!: SkillInterface;
  social!: SkillInterface;
  spirit!: SkillInterface;
  tech!: SkillInterface;
  physicalProperties!: physicalProperty[];

  constructor(values?: RaceInterface) {
    if (values) {
      console.log('values: ', values);
      Object.assign(this, values);
    }
  }
}
