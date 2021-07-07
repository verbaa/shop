import { ducks as feature } from "./features/feature/ducks";
import * as SettingDuck from "./shared/ducks/setting.duck"

export const ducks = [
  SettingDuck,
  // put here features' ducks
  ...feature,
];
