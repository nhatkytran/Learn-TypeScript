import React, { FC, ReactElement } from 'react';
import { TextField } from '@mui/material';
import { ITextField } from './interfaces/ITextField';
import PropTypes from 'prop-types';

const TaskDescriptionField: FC<ITextField> = (props): ReactElement => {
  const {
    disabled = false,
    onChange = event => {
      console.log(event.target.value);
    },
  } = props;

  return (
    <TextField
      id="description"
      label="Description"
      placeholder="Description"
      variant="outlined"
      size="small"
      name="description"
      multiline
      rows={4}
      fullWidth
      disabled={disabled}
      onChange={onChange}
    />
  );
};

TaskDescriptionField.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

export default TaskDescriptionField;
