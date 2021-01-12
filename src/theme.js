import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#2774AE',
      dark: '#003B5C',
      light: '#8BB8E8',
    },
    secondary: {
      main: '#FFD100',
    },
    error: {
      main: red.A400,
    },

  },
});

export default theme;
