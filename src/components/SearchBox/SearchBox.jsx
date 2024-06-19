import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";

import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";
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
