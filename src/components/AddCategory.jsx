import { useState } from "react";

export const AddCategory = ({setCategories,categories}) => {
  const [inputValue, setInputValue] = useState("");
  const [validation, setValidation] =useState(false);

  const handleInputValue = (event) => {
    setInputValue(event.target.value);
    setValidation(false)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(inputValue.trim().length <=1 || categories.includes(inputValue)) {
        return setValidation(true)
    }

    setCategories([inputValue,...categories]);
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar GIFs"
        value={inputValue}
        onChange={handleInputValue}
      />
      {(!validation) ? "" : <span>Categoria Inexistente o mal escrita</span>} 
    </form>

  );
};
