import React, {useRef, useState} from 'react';
import {Button, FormControlLabel, MenuItem, Radio, Typography} from '@material-ui/core';
import {TextFieldFormsy, CheckboxFormsy, RadioGroupFormsy, SelectFormsy} from '@fuse';
import Formsy from 'formsy-react';

function SimpleFormExample()
{
    const [isFormValid, setIsFormValid] = useState(false);
    const formRef = useRef(null);

    function disableButton()
    {
        setIsFormValid(false);
    }

    function enableButton()
    {
        setIsFormValid(true);
    }

    function handleSubmit(model)
    {
        console.info('submit', model);
    }

    return (
        <div className="max-w-sm">
            <Typography className="h2 mb-24">Example Formsy Form</Typography>
            <Formsy
                onValidSubmit={handleSubmit}
                onValid={enableButton}
                onInvalid={disableButton}
                ref={formRef}
                className="flex flex-col justify-center"
            >

                <TextFieldFormsy
                    className="mb-16"
                    type="text"
                    name="name"
                    label="Name"
                    validations={{
                        minLength: 4
                    }}
                    validationErrors={{
                        minLength: 'Min character length is 4'
                    }}
                    required
                />

                <TextFieldFormsy
                    className="my-16"
                    type="text"
                    name="email"
                    label="Email"
                    validations="isEmail"
                    validationError="This is not a valid email"
                    required
                />

                <TextFieldFormsy
                    className="my-16"
                    type="text"
                    name="name"
                    label="Name (Outlined)"
                    validations={{
                        minLength: 4
                    }}
                    validationErrors={{
                        minLength: 'Min character length is 4'
                    }}
                    required
                    variant="outlined"
                />

                <TextFieldFormsy
                    className="my-16"
                    type="text"
                    name="email"
                    label="Email (Outlined)"
                    validations="isEmail"
                    validationError="This is not a valid email"
                    required
                    variant="outlined"
                />

                <TextFieldFormsy
                    className="my-16"
                    type="text"
                    name="name"
                    label="Name (Filled)"
                    validations={{
                        minLength: 4
                    }}
                    validationErrors={{
                        minLength: 'Min character length is 4'
                    }}
                    required
                    variant="filled"
                />

                <TextFieldFormsy
                    className="my-16"
                    type="text"
                    name="email"
                    label="Email (Filled)"
                    validations="isEmail"
                    validationError="This is not a valid email"
                    required
                    variant="filled"
                />

                <RadioGroupFormsy
                    className="my-16"
                    name="gender"
                    label="Gender"
                    validations="equals:female"
                    validationError="Only ladies are accepted"
                    required
                >
                    <FormControlLabel value="male" control={<Radio color="primary"/>} label="Male"/>
                    <FormControlLabel value="female" control={<Radio color="primary"/>} label="Female"/>
                    <FormControlLabel value="other" control={<Radio color="primary"/>} label="Other"/>
                    <FormControlLabel
                        value="disabled"
                        disabled
                        control={<Radio/>}
                        label="(Disabled option)"
                    />
                </RadioGroupFormsy>

                <SelectFormsy
                    className="my-16"
                    name="related"
                    label="Related with"
                    value="none"
                    validations="equals:none"
                    validationError="Must be None"
                >
                    <MenuItem value="none">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value="hai">Hai</MenuItem>
                    <MenuItem value="olivier">Olivier</MenuItem>
                    <MenuItem value="kevin">Kevin</MenuItem>
                </SelectFormsy>

                <SelectFormsy
                    className="my-16"
                    name="related"
                    label="Related with (Outlined)"
                    value="none"
                    validations="equals:none"
                    validationError="Must be None"
                    variant="outlined"
                >
                    <MenuItem value="none">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value="hai">Hai</MenuItem>
                    <MenuItem value="olivier">Olivier</MenuItem>
                    <MenuItem value="kevin">Kevin</MenuItem>
                </SelectFormsy>

                <SelectFormsy
                    className="my-16"
                    name="related"
                    label="Related with (Filled)"
                    value="none"
                    validations="equals:none"
                    validationError="Must be None"
                    variant="filled"
                >
                    <MenuItem value="none">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value="hai">Hai</MenuItem>
                    <MenuItem value="olivier">Olivier</MenuItem>
                    <MenuItem value="kevin">Kevin</MenuItem>
                </SelectFormsy>

                <CheckboxFormsy
                    className="my-16"
                    name="accept"
                    value={false}
                    label="Accept"
                    validations="equals:true"
                    validationError="You need to accept"
                />

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className="mx-auto my-16"
                    aria-label="LOG IN"
                    disabled={!isFormValid}
                >
                    Can submit
                </Button>
            </Formsy>
        </div>
    );
}

export default SimpleFormExample;
