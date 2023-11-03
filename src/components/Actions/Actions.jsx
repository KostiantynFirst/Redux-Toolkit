import { Button } from "components/Button/Button";
import { useDispatch } from "react-redux";
import { toggleAllCompleted, deleteAllCompleted } from "redux/actions";
import { ActionsWrapper } from "./Actions.styled";

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