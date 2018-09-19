import React, { Component } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { GetAggregatesData } from '../store/actions/aggregates.action';

class Aggregates extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clicks: 0,
            impressions: 0
        }

        this.onChangeValue = this.onChangeValue.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(GetAggregatesData())
    }

    onChangeValue = value => {
        // Declaring a variable of aggregates (from API) and value of selected option
        const aggregates = this.props.store.Aggregates.aggregates;
        const val = value.value;
        
        let clicks = 0;
        let impressions = 0;

        aggregates.forEach(item => {
            // Checking of value of selector is equal to value of channels and campaigns (from aggregates variable)
            if (item.campaign === val || item.channel === val) {
                clicks += parseInt(item.clicks, 10);
                impressions += parseInt(item.impressions, 10);
            }
        });

        this.setState({clicks: clicks, impressions: impressions});
    }

    render() {

        const {classes} = this.props;

        const options = this.props.store.Aggregates.options;

        return (
            <Grid container>
                <Grid item xs={10} md={4} className={classes.container}>
                    <Typography>
                        Choose channel or campaign
                    </Typography>
                    <Select
                        onChange={this.onChangeValue}
                        name="dropdown"
                        options={options}
                    />
                    <Grid container>
                        <Grid item xs={6} className={classes.container}>
                            <Typography>
                                Clicks: <span className={classes.red_count}>{this.state.clicks}</span>
                            </Typography>
                        </Grid>
                        <Grid item xs={6} className={classes.container}>
                            <Typography>
                                Impressions: <span className={classes.red_count}>{this.state.impressions}</span>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}


export default connect(
    state => ({ store: state })
  )(withStyles(styles)(Aggregates)); 