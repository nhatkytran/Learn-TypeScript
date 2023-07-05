import React, { FC, ReactElement } from 'react';
import { Box, Typography } from '@mui/material';
import ITaskDescription from './interfaces/ITaskDescription';
import PropTypes from 'prop-types';

const TaskDescription: FC<ITaskDescription> = (props): ReactElement => {
  const { description = 'Lorem ipsum dolor set amet' } = props;

  return (
    <Box>
      <Typography>{description}</Typography>
    </Box>
  );
};

TaskDescription.propTypes = {
  description: PropTypes.string,
};

export default TaskDescription;
