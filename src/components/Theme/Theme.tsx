import { createTheme } from '@material-ui/core';
import theme from './theme.json'

// When updating the theme colors also update its respective color from 
// style/colors.scss
export const Theme = createTheme(theme);

