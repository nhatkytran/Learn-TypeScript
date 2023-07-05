import { Status } from '../../createTaskForm/enums/Status';

export const emitCorrectLabel = (status: Status) => {
  if (status === Status.todo) return `Todo's`;
  if (status === Status.inProgress) return 'In Progress';
  if (status === Status.completed) return 'Completed';
};
