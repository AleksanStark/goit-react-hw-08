import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";

import { selectNameFilter } from "../../redux/selectors";
import { changeFilter } from "../../redux/filtersSlice";
const SearchBox = () => {
  const name = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.container}>
      <p>Find contacts by name</p>
      <input type="text" value={name} onChange={handleChange} />
    </div>
  );
};
export default SearchBox;
