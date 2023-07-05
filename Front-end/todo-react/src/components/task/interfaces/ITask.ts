import ITaskHeader from './ITaskHeader';
import ITaskDescription from './ITaskDescription';
import ITaskFooter from './ITaskFooter';

interface ITask extends ITaskHeader, ITaskDescription, ITaskFooter {
  id?: string;
  priority?: string;
  status?: string;
}

export default ITask;
