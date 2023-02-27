import { IReadmeGeneratorState } from "../ReadmeGenerator/ReadmeGenerator.d";

export interface IReadmeConfig {
  darkMode: boolean;
  state: IReadmeGeneratorState;
  handleChangeState: Function;
}