import React from "react";

const SelectPassType = ({ value, onChange }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="w-full p-2 border rounded-md mt-2"
    >
      <option value="">Sélectionnez un type de pass</option>
      <option value="Visiteur">Visitor</option>
      <option value="Invité">Invited</option>
      <option value="conference">Conferencer</option>
      <option value="Exposant">Exposant</option>
      <option value="Speaker">Speaker</option>
      <option value="Formation">Formation</option>
    </select>
  );
};

export default SelectPassType;
