import Link from "next/link";
import Dropdown from "./Dropdown";

const NavMenu = ({ menu, navbar }) => {
    return (
        <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}
        >
            <ul className="items-center justify-end space-y-8 md:flex md:space-x-6 md:space-y-0 gap-[4vw]">
                {menu.map(({ name, url, dropdown }, index) => (
                    <li key={index} className="text-white">
                        {dropdown ? (
                            <Dropdown name={name} dropdownItems={dropdown} />
                        ) : (
                            <Link href={url} className="text-sm">{name}</Link>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NavMenu;


