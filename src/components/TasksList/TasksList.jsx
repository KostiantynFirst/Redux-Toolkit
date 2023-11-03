import { StyledUl, TaskListItem } from "./TaskLists.styled"
import { useVisibleTasks } from "redux/hooks/useVisibleTasks";
import { Task } from "components/Task/Task";

export const TaskList = () => {

    const tasks = useVisibleTasks();

    return (
        <StyledUl>
            {tasks.map(task => (
                <TaskListItem key={task.id}>
                    <Task task={task} />
                </TaskListItem>
            ))}
        </StyledUl>
    )
}