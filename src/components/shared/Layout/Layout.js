import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  layout: {
    display: 'flex',
    flexDirection: 'column',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgb(0,0,0)',
    overflowX: 'hidden',
    overflowY: 'auto',
  },

  header: {
    display: 'flex',
    flexDirection: 'column',
  },

  layoutChildren: {

  },

});

export default useStyles;
