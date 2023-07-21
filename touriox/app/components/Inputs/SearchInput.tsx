import { IoMenu } from "react-icons/io5";
import { TbSearch } from "react-icons/tb";
import { BiSolidDirectionRight } from "react-icons/bi";


const SearchInput = () => {
    return (
        <div className="rounded-lg p-4 bg-white shadow-md ">
            <div className="flex flex-row items-center justify-between w-[350px]">
                <IoMenu size={26} className="cursor-pointer text-neutral-600" />
                <input type="text" placeholder="Search TourioX Maps" 
                    className="outline-none border-none focus:outline-none px-2" />
                <TbSearch size={24} className="text-neutral-600 cursor-pointer" />
                <span className="h-full w-0.5 bg-neutral-600"></span>
                <BiSolidDirectionRight size={27} className="text-blue-500 hover:text-blue-700" />
            </div>
        </div>
    )
}

export default SearchInput;