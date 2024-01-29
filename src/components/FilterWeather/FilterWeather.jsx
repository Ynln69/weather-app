import { Thumb, Input, Button } from "./FilterWeather.styled";

const FilterWeather = () => {
  const handleAddCity = () => {
    // Можна додати додаткову логіку тут, якщо потрібно
  };

  return (
    <Thumb>
      <Input type="text" />
      <Button onClick={handleAddCity}>Add</Button>
    </Thumb>
  );
};

export default FilterWeather;
