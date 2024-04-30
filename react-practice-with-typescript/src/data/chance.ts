import Chance from "chance";

const chance = new Chance();

export const randomName = () => chance.name();
export const randomProfession = () => chance.profession();
export const randomDate = () =>
  chance.date({ string: true, year: 2024 }).toString();
