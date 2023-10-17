import React from "react";
import Link from "next/link";

const Dropdown = ({ name, dropdownItems }) => {
  return (
    <div className="dropdown dropdown-hover">
      <label tabIndex={0}>
        {name}
      </label>
      <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-56 bg-slate-600">
        {dropdownItems.map(({ name, url, dropdown }, index) => (
          <li key={index}>
            <Link href={url}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Dropdown;