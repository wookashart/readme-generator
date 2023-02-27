export interface IDropdown {
  label: string;
  darkMode: boolean;
  name: string;
  options: IDropdownOption[];
  value: IDropdownOption | null;
  handleChange: Function;
}

export interface IDropdownOption {
  value: string | number;
  label: string;
}