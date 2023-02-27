import { IDropdownOption } from "../../common/Dropdown/Dropdown.d";

export interface IReadmeGenerator {
  darkMode: boolean;
}

export interface IReadmeGeneratorState {
  framework: IDropdownOption | null;
  node: IDropdownOption | null;
  customNode: string;
  language: IDropdownOption;
}