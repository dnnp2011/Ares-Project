const styles = theme => ({
<<<<<<< HEAD
  portalDashboardPageWrapper: {
    padding: 16,
    minHeight: '100%',
    boxSizing: 'border-box'
  },
  portalWidget: {
    flex: '1 1 100%',
    display: 'flex',
    flexDirection: 'column'
  },
  portalWidgetHeading: {
    textTransform: 'uppercase',
    paddingLeft: 12,
    borderLeftWidth: 2,
    borderLeftStyle: 'solid',
    marginTop: 16,
    marginBottom: 16,
    borderColor: theme.palette.primary.main,
    '&:after': {
      content: '""',
      width: 2,
      height: '0%',
      position: 'absolute',
      bottom: 0,
      left: -2,
      transition: 'height .5s',
      backgroundColor: theme.palette.secondary.main
    }
  },
  portalWidgetContent: {
    flex: '1 1 100%'
=======
  background: {
    background: theme.palette.secondary.main,
    width: '100%',
    height: '100%',
  },
  'primary-card': {
    background: theme.palette.primary.light,
>>>>>>> master
  }
});

export default styles;
