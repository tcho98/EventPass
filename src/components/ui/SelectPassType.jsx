import React from "react";

const SelectPassType = ({ value, onChange }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="w-full p-2 border rounded-md mt-2"
    >
      <option value="">Sélectionnez un type de pass</option>
      <option value="visitor">Visitor</option>
      <option value="invited">Invited</option>
      <option value="conferencer">Conferencer</option>
      <option value="exposant">Exposant</option>
    </select>
  );
};

export default SelectPassType;
