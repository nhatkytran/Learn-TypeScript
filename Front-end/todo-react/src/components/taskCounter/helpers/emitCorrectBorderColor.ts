import { Status } from '../../createTaskForm/enums/Status';

export const emitCorrectBorderColor = (status: Status) => {
  if (status === Status.todo) return 'error.light';
  if (status === Status.inProgress) return 'warning.light';
  if (status === Status.completed) return 'success.light';
};
