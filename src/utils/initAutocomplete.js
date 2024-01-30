import operations from "../redux/operations";

const { fetchCurrentWeather } = operations;

const initAutocomplete = (inputRef, dispatch, setInput) => {
  if (window.google && inputRef.current) {
    const options = {
      types: ["(cities)"],
    };
    const autocomplete = new window.google.maps.places.Autocomplete(
      inputRef.current,
      options
    );

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      if (!place.geometry) {
        console.log("No details available for input: '" + place.name + "'");
        return;
      }

      const lat = place.geometry.location.lat();
      const lon = place.geometry.location.lng();
      dispatch(
        fetchCurrentWeather({ lat, lon, lang: "uk", scaleType: "metric" })
      );
      setInput(place.name);
    });
  }
};

export default initAutocomplete;
