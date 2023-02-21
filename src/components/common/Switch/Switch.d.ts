export interface ISwitch {
  id: string;
  type?: 'default' | 'darkmode';
  defaultValue?: boolean;
  handleToggle: Function;
}