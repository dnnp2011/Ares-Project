const styles = theme => ({
  background: {
    display: 'flex',
    background: theme.palette.secondary.main,
    width: '100%',
    height: '100%',
  },

  'primary-card': {
    background: theme.palette.primary.light,
  },

  root: {
    // display: 'flex',
    // flexWrap: 'wrap',
    // justifyContent: 'space-around',
    // overflow: 'hidden',
    // backgroundColor: theme.palette.background.paper,
    flexGrow: 1,
  },


  gridList: {

    width: 1000,
    height: 1000,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});
export default styles;
