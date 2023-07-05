import { Priority } from '../../createTaskForm/enums/Priority';

export const renderPriorityBorderColor = (priority: string): string => {
  if (priority === Priority.normal) return 'grey.900';
  if (priority === Priority.low) return 'info.light';
  if (priority === Priority.high) return 'error.light';
  return 'grey.900';
};
