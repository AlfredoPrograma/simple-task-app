import { useQuery } from '@apollo/client';
import { GetAllTasksQuery } from '../../graphql/resources/Task';

export function TasksPage() {
  const { loading, error, data } = useQuery(GetAllTasksQuery);

  return (
    <div className="TasksPage">
      <h1>Tasks</h1>
    </div>
  );
}
