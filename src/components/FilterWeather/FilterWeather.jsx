import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

import initAutocomplete from "../../utils/initAutocomplete";

import { Thumb, Input, Button } from "./FilterWeather.styled";

const FilterWeather = () => {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    initAutocomplete(inputRef, dispatch, setInput);
  }, [dispatch]);

  const handleAddCity = () => {
    // Можна додати додаткову логіку тут, якщо потрібно
  };

  return (
    <Thumb>
      <Input
        type="text"
        ref={inputRef}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button onClick={handleAddCity}>Add</Button>
    </Thumb>
  );
};

export default FilterWeather;
