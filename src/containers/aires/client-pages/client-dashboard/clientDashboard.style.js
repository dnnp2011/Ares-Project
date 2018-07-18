const styles = theme => ({
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
  portalWidgetContent: {
    flex: '1 1 100%',
    textDecoration: 'none',
    color: 'unset',
    height: '100px',
    color: 'white',
    transition: '.3s',
    background: 'url(https://www.esmt.org/sites/default/files/styles/presentation_slider/public/digital-strategy-and-business.jpg)  no-repeat',
    '&:hover': {
      background: 'rgba(0,0,0,.7)',
      color: 'white',
      transition: '.3s',
    }
  },
  button1: {    background: 'url(https://iliad-solutions.com/wp-content/uploads/2016/06/Blockchain-1-y.jpg) no-repeat',
},
  button2: {    background: 'url(https://publichealthmatters.blog.gov.uk/wp-content/uploads/sites/33/2016/07/digital.jpg) center no-repeat',
},
  button3: {    background: 'url(https://www.esmt.org/sites/default/files/styles/presentation_slider/public/digital-strategy-and-business.jpg) center no-repeat',
},
  card: {
    height: '40vh',
  }
});

export default styles;
