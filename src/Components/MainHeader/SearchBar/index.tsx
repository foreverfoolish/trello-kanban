import { useState } from "react";
import * as Styles from './Search.Styles'
import { SearchIcon } from "../../Common/icons/SearchIcon";

const SearchBar = () => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }

  return (
    <Styles.InputContainer>
      <SearchIcon/>
      <Styles.InputTextField
        value={value}
        placeholder="Search for anything..."
        onChange={(event) => {
          handleChange(event);
        }}
      />
    </Styles.InputContainer>
  );
}

export default SearchBar