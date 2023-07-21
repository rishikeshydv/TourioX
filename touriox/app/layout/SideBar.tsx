import { IoMenu } from "react-icons/io5";
import { HiOutlineBookmark } from "react-icons/hi";
import { PiClockCounterClockwiseBold } from "react-icons/pi";

// Sidebar component
const Sidebar = () => {
    return (
        <div className="left-0 h-screen shadow-md fixed px-6 py-5 bg-white">
            <div className="flex flex-col items-center justify-center gap-7">
                    <IoMenu size={26} className="cursor-pointer text-neutral-600" />
                    <HiOutlineBookmark size={26} className="cursor-pointer text-neutral-600" />
                    <PiClockCounterClockwiseBold size={26} className="cursor-pointer text-neutral-400" />
            </div>
        </div>
    )
}

export default Sidebar;