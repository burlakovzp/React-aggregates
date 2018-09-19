import axios from 'axios';
import _ from 'lodash';

export const GET_AGGREGATES = 'GET_AGGREGATES';

export function GetAggregatesData() {

    return async(dispatch) => {

        axios.get('http://typeaheadaggregates.free.beeceptor.com').then(data => {

            // Spliting from response to array of strings
            let response = data.data.split('\n');
            // Getting first element of array with keys and splitting string to array
            const keys = response.shift().split(',');
            
            response = response.map(item => {
                // Creating empty object
                let obj = {};

                keys.forEach((key, i) => {
                    // Splitting the string element of array to array
                    let arr_item = item.split(',');
                    // Pushing value of 'arr_item' array to empty 'obj' object, using keys
                    obj[key] = arr_item[i];
                });
    
                return obj;
            });

            // Creating empty array for options
            let options = [];

            // Pushing all values to array
            response.forEach(item => {
                options.push({value: item['campaign'], label: item['campaign']});
                options.push({value: item['channel'], label: item['channel']});
            })

            // Checking for unique values

            options = _.uniqBy(options, 'value');

            dispatch({
                type: GET_AGGREGATES,
                data: response,
                options: options
            })
        }) 
  
    }
}