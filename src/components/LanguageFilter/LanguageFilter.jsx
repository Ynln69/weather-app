import React, { useState } from "react";

import { LangContainer, LangSelect, LangOption } from "./LanguageFilter.styled";
import svgImg from "../../images/languageSvg.svg";

const FilterLang = () => {
  const options = [
    { value: "option1", label: "EN" },
    { value: "option2", label: "UA" },
    { value: "option3", label: "HE" },
  ];

  const [selectedOption, setSelectedOption] = useState(options[0].value);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <LangContainer>
        <LangSelect value={selectedOption} onChange={handleChange}>
          {options.map((option) => (
            <LangOption key={option.value} value={option.value}>
              {option.label}
            </LangOption>
          ))}
        </LangSelect>
        <img src={svgImg} alt="" width={13} height={13} />
      </LangContainer>
    </>
  );
};

export default FilterLang;
