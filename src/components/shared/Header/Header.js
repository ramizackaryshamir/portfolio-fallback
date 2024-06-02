import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 0,
    marginBottom: 10,
    marginLeft: 0,

  },

  '@media (max-width: 505px)': {
    headerContainer: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: 15,
      marginRight: 15,
      marginBottom: -20
    }
  }
})

export default useStyles;