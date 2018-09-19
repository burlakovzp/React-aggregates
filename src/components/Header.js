import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import history from './partials/history';
import styles from '../styles';


class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    render() {

        const { classes } = this.props;

        const drawer = (
          <div>
            <ListItem button component="a" onClick={()=>history.push('/')}>
                <ListItemText primary="Home"/>
            </ListItem>
          </div>
        );
    
        return (
          <div>
            <AppBar>
              <Grid container>
                <Toolbar style={{padding: '0 5px 0 5px'}}>
                  <Hidden smDown>
                    <Grid container>
                      <Button 
                        className={classes.header_button}
                        onClick={()=>history.push('/')}>
                        Home
                      </Button>
                    </Grid> 
                  </Hidden>
                  <Hidden mdUp>
                    <IconButton
                        aria-label="open drawer"
                        onClick={()=>this.setState({open: !this.state.open})}
                        style={{color: 'white'}}>
                        <MenuIcon />
                    </IconButton>
                  </Hidden>
                </Toolbar>
              </Grid>
            </AppBar>
            <Hidden mdUp>
              <Drawer
                variant="temporary"
                anchor='left'
                open={this.state.open}
                onClose={()=>this.setState({open: !this.state.open})}
                classes={{paper: classes.drawerPaper }}
                ModalProps={{keepMounted: true}}>
                {drawer}
              </Drawer>
            </Hidden>
          </div>
        );
    }
}

export default connect(state => ({
  redux: state
}))(withStyles(styles, { withTheme: true })(Header));

