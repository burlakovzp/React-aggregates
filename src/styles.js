const styles = theme => ({
    drawerPaper: {
        height: '100%',
        [theme.breakpoints.up('md')]: {
          position: 'absolute',
        },
    },
    header_button: {
        color: 'white'
    },
    header_margin: {
        marginTop: 74
    },
    container: {
        maxWidth: 800,
        margin: '20px auto',
        textAlign: 'center'
    },
    red_count: {
        background: '#e4e2e2',
        border: '1px solid lightgrey',
        padding: '0 3px',
        color: 'red'
    }
})

export default styles;