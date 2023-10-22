import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

const MobileToggle = ({ navbar, setNavbar }) => {
    return (
        <div className="md:hidden">
            <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
            >
                {navbar ? (
                    <RxCross1 className="text-white" />
                ) : (
                    <AiOutlineMenu className="text-white" />
                )}
            </button>
        </div>
    );
}

export default MobileToggle;


