import { createTheme } from '@mui/material/styles';
import colors from '../assets/scss/_themes-vars.module.scss';
import themePalette from './palette';
import themeTypography from './typography';
import componentStyleOverrides from './compStyleOverride';

export interface themeOptionType {
  palette: object;
  typography: object;
}

export const theme = () => {
  const color = colors;
  const themeOption = {
    colors: color,
    heading: color.grey900,
    paper: color.paper,
    backgroundDefault: color.paper,
    background: color.primaryLight,
    darkTextPrimary: color.grey700,
    darkTextSecondary: color.grey500,
    textDark: color.grey900,
    menuSelected: color.secondaryDark,
    menuSelectedBack: color.secondaryLight,
    divider: color.grey200
  };

  const themeOptions: themeOptionType = {
    palette: themePalette(themeOption),
    typography: themeTypography(themeOption)
  };

  const themes = createTheme(themeOptions);

  //override the components  of materil ui
  themes.components = componentStyleOverrides(themeOption);
  return themes;
};
