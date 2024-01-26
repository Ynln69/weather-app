import { LangContainer, LangSelect, LangOption } from "./LanguageFilter.styled";
import svgImg from "../../images/languageSvg.svg";

const FilterLang = () => {
  return (
    <>
      <LangContainer>
        <LangSelect>
          <LangOption value="option1" selected>
            EN
          </LangOption>
          <LangOption value="option2">UA</LangOption>
          <LangOption value="option3">HE</LangOption>
        </LangSelect>
        <img src={svgImg} alt="" width={13} height={13} />
      </LangContainer>
    </>
  );
};

export default FilterLang;
