import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import {makeStyles} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Icon from'@material-ui/core/Icon';
import * as Actions from '../../apps/profile/store/actions';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(3),
    },
    typography: {
        marginTop: 6,
    },
    }));    

function Settings()
{
    const { t, i18n } = useTranslation();
    const classes = useStyles();
    const [value, setValue] = useState(i18n.translator.language);

    const handleChange = event => {
        setValue(event.target.value);
        i18n.changeLanguage(event.target.value);
        moment.locale(event.target.value);
        Actions.updateDefaultLanguage(event.target.value);
    };

    return (
        <Card>
            <Icon></Icon>
             <FormControl component="fieldset" className={classes.formControl}>
                <RadioGroup aria-label="translation" name="translation" value={value} onChange={handleChange}>
                <FormControlLabel value="en" control={<Radio />} label="English" />
                <FormControlLabel value="pt" control={<Radio />} label="Português" />
                </RadioGroup>
            </FormControl>
        </Card>
                        
    )
}

export default Settings;
