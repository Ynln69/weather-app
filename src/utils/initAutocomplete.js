import actions from "../redux/weatherSlice";

let instance;
const { setLocationForSearch } = actions;
const initAutocomplete = (inputRef) => {
  if (window.google && inputRef.current) {
    const options = {
      types: ["(cities)"],
    };
    instance = new window.google.maps.places.Autocomplete(
      inputRef.current,
      options
    );
  }
};

const handleSubmit = (dispatch, setInput) => {
  const place = instance.getPlace();
  if (!place.geometry) {
    return;
  }
  const lat = place.geometry.location.lat();
  const lon = place.geometry.location.lng();
  dispatch(setLocationForSearch({ lat, lon }));
  setInput(place.name);
};

const data = {
  initAutocomplete,
  handleSubmit,
};
export default data;
