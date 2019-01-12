let style = {

  container: {
    position: 'relative',
    fontSize: '80%',
    fontWeight: 300,
    padding: '10px 0',
    width: '95%',
    margin: '0 auto'
  },
  containerBefore: {
    content: '',
    position: 'absolute',
    top: 0,
    height: '100%',
    width: 2,
    background: '#a0b2b8'
  },
  'containerBefore--left': {
    left: '16px'
  },
  'containerBefore--right': {
    right: '14px'
  },
  containerAfter: {
    content: '',
    display: 'table',
    clear: 'both'
  },
  event: {
    position: 'relative',
    margin: '10px 0'
  },
  'event--left': {
    paddingLeft: 45,
    textAlign: 'left'
  },
  'event--right': {
    paddingRight: 45,
    textAlign: 'right'
  },
  eventAfter: {
    clear: 'both',
    content: '',
    display: 'table'
  },
  eventType: {
    position: 'absolute',
    top: 0,
    borderRadius: '50%',
    width: 30,
    height: 30,
    marginLeft: 1,
    background: '#e9f0f5',
    border: '2px solid #6fba1c',
    display: 'flex'
  },
  'eventType--left': {
    left: 0
  },
  'eventType--right': {
    right: 0
  },
  materialIcons: {
    display: 'flex',
    width: 32,
    height: 32,
    position: 'relative',
    justifyContent: 'center',
    cursor: 'pointer',
    alignSelf: 'center',
    alignItems: 'center'
  },
  eventContainer: {
    position: 'relative'
  },
  eventContainerBefore: {
    top: 24,
    left: '100%',
    borderColor: 'transparent',
    borderLeftColor: '#ffffff'
  },
  time: {
    marginBottom: 3
  },
  subtitle: {
    marginTop: 2,
    fontSize: '85%',
    color: '#777'
  },
  message: {
    width: '98%',
    backgroundColor: '#ffffff',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    marginTop: '1em',
    marginBottom: '1em',
    lineHeight: 1.6,
    padding: '0.5em 1em'
  },
  messageAfter: {
    clear: 'both',
    content: '',
    display: 'table'
  },
  actionButtons: {
    marginTop: -20
  },
  'actionButtons--left': {
    float: 'left',
    textAlign: 'left'
  },
  'actionButtons--right': {
    float: 'right',
    textAlign: 'right'
  },
  card: {
    boxShadow: 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px',
    backgroundColor: 'rgb(255, 255, 255)'
  },
  cardTitle: {
    backgroundColor: '#7BB1EA',
    padding: 10,
    color: '#fff'
  },
  cardBody: {
    backgroundColor: '#ffffff',
    marginBottom: '1em',
    lineHeight: 1.6,
    padding: 10,
    minHeight: 40
  },
  blipStyle: {
    position: 'absolute',
    top: '50%',
    marginTop: '9px'
  },
  toggleEnabled: {
    cursor: 'pointer'
  }
}

export default style
