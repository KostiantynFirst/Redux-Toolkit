import { Button } from "components/Button/Button";
import { useDispatch, useSelector } from 'react-redux';
import { setStatusFilter } from "redux/actions";
import { statusFilters } from "redux/constants";
import { getStatusFilter } from "redux/selectors";
import { FilterContainer } from "./StatusFilter.styled";

export const StatusFilter = () => {

  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);

  const handleChange = value => dispatch(setStatusFilter(value));

  return (
    <FilterContainer>
      <Button 
        selected={filter === statusFilters.all}
        onClick={() => handleChange(statusFilters.all)}
      >
        All
      </Button>
      <Button 
        selected={filter === statusFilters.active}
        onClick={() => handleChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button 
        selected={filter === statusFilters.completed}
        onClick={() => handleChange(statusFilters.completed)}
      >
          Completed
      </Button>
    </FilterContainer>
  );
};