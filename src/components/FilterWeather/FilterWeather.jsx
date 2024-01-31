import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

import utils from "../../utils/initAutocomplete";

import { Thumb, Input, Button } from "./FilterWeather.styled";

const { initAutocomplete, handleSubmit } = utils;

const FilterWeather = () => {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    initAutocomplete(inputRef, dispatch, setInput);
  }, [dispatch]);

  const handleAddCity = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      handleSubmit(dispatch, setInput);
      setInput("");
    }
  };

  return (
    <Thumb onSubmit={handleAddCity}>
      <Input
        type="text"
        ref={inputRef}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button type="submit">Add</Button>
    </Thumb>
  );
};

export default FilterWeather;
