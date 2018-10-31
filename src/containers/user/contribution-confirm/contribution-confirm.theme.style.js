const styles = theme => ({
  background: {
    background: theme.palette.secondary.main,
    width: 'auto',
    height: '100%',
    display: 'flex',
    overflow: 'auto'
  },
  'primary-card': {
    background: theme.palette.primary.light,
  },

  'line-break': {
    border: '0',
    height: '1px',
    background: theme.palette.text.primary,
  }
});

export default styles;