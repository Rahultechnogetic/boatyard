// import { themeOptionType } from './theme';
const themeTypography = (theme: any): any => {
  return {
    fontFamily: 'Public Sans',
    // Tell MUI what's the font-size on the html element is.
    htmlFontSize: 10,
    h6: {
      fontWeight: 500,
      color: theme.heading,
      fontSize: '1.2rem'
    },
    h5: {
      fontSize: '1.3rem',
      color: theme.heading,
      fontWeight: 500
    },
    h4: {
      fontSize: '1.6rem',
      color: theme.heading,
      fontWeight: 600
    },
    h3: {
      fontSize: '2rem',
      color: theme.heading,
      fontWeight: 600
    },
    h2: {
      fontSize: '2.4rem',
      color: theme.heading,
      fontWeight: 700
    },
    h1: {
      fontSize: '3.6rem',
      color: theme.heading,
      fontWeight: 700
    },
    subtitle1: {
      fontSize: '1.4rem',
      fontWeight: 500,
      color: theme.textDark
    },
    subtitle2: {
      fontSize: '1.2rem',
      fontWeight: 400,
      color: theme.darkTextSecondary
    },
    caption: {
      fontSize: '1.2rem',
      color: theme.darkTextSecondary,
      fontWeight: 400
    },
    body1: {
      fontSize: '1.34rem',
      fontWeight: 400,
      lineHeight: '1.334em'
    },
    body2: {
      letterSpacing: '0em',
      fontWeight: 400,
      lineHeight: '1.5em',
      color: theme.darkTextPrimary
    },
    button: {
      textTransform: 'capitalize'
    },
    customInput: {
      marginTop: 1,
      marginBottom: 1,
      '& > label': {
        top: -10,
        left: 0,
        color: theme.grey500,
        fontSize: '1.5rem',
        '&[data-shrink="false"]': {
          top: 5
        }
      },
      '& > div > input': {
        padding: '30.5px 14px 11.5px !important'
      },
      '& legend': {
        display: 'none'
      },
      '& fieldset': {
        top: 0
      }
    }
  };
};

export default themeTypography;
