import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  navContainer: {
    display: 'flex',
    flexDirection: 'row',
    listStyle: 'none',
    fontFamily: 'Bebas Neue',
    fontSize: 12,
    marginBottom: 10,
    letterSpacing: '4px'

  },

  navLink: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 30,
    color: 'white',
    outline: 'none',
    textDecoration: 'none',

  },

  leftNav: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  rightNav: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },

  '@media (max-width: 505px)': {
    navContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      listStyle: 'none',
      fontFamily: 'Bebas Neue',
      fontSize: 7,
      letterSpacing: '4px'

    },

    navLink: {
      display: 'flex',
      flexDirection: 'row',
      paddingLeft: 15,
      paddingRight: 15,
      color: 'white',
      outline: 'none',
      textDecoration: 'none',

    },

  }
})

export default useStyles;