
export class State {
  count: number;
  foreignCountry: boolean | false;
  letter: string;
  name: string;
  schoolCount: number;
  stadtStaat: boolean;
  url: string;

  constructor(
    count: number,
    foreignCountry: boolean,
    letter: string,
    name: string,
    schoolCount: number,
    stadtStaat: boolean,
    url: string) {
    this.count = count;
    this.foreignCountry = foreignCountry;
    this.letter = letter;
    this.name = name;
    this.schoolCount = schoolCount;
    this.stadtStaat = stadtStaat;
    this.url = url;
  }
}




