import { createContext, useState } from "react";

export const FilterContext = createContext();

const FilterProvider = ({ children }) => {

  const [selectedProductCategory, setSelectedProductCategory] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [price, setPrice] = useState(100);

  return (
    <FilterContext.Provider
      value={{
        selectedProductCategory,
        setSelectedProductCategory,

        selectedCategory,
        setSelectedCategory,

        selectedType,
        setSelectedType,

        price,
        setPrice
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;