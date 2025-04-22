import React from "react";

const SelectPassType = ({ value, onChange }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="w-full p-2 border rounded-md mt-2"
    >
      <option value="">Sélectionnez un type de pass</option>
      <option value="visiteur">Visiteur</option>
      <option value="invité">Invité</option>
      <option value="conference">Conference</option>
      <option value="exposant">Exposant</option>
      <option value="speaker">Speaker</option>
      <option value="formation">Formation</option>
    </select>
  );
};

export default SelectPassType;
