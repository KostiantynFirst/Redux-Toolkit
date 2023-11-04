import { Button } from "components/Button/Button";
import { useDispatch } from "react-redux";
import { ActionsWrapper } from "./Actions.styled";
import { toggleAllCompleted, deleteAllCompleted } from "redux/tasksSlice";

export const Actions = () => {

    const dispatch = useDispatch();

    return (
        <ActionsWrapper>
          <Button onClick={() => dispatch(toggleAllCompleted())}>
            Mark all completed
          </Button>
          <Button onClick={() => dispatch(deleteAllCompleted())}>
            Clear all completed
          </Button>
        </ActionsWrapper>
      );
}