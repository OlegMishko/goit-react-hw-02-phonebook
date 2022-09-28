import PropTypes from 'prop-types';
import { FilterLabel, FilterInput } from './Filter.styled';


export const Filter = ({ filter, onFilter }) => {
  return (
    <FilterLabel htmlFor="">
      Find contacts by name
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={onFilter}
        placeholder="enter name"
        autoComplete="off"
      />
    </FilterLabel>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  onFilter: PropTypes.func,
};
