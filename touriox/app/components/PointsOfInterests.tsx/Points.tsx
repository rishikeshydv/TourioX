import { GiForkKnifeSpoon } from "react-icons/gi";
import { FaBed } from "react-icons/fa";
import { BiCamera } from "react-icons/bi";
import { HiOutlineLibrary } from "react-icons/hi";
import { IoBusOutline } from "react-icons/io5";
import { RiFirstAidKitLine } from "react-icons/ri";
import { MdAtm } from "react-icons/md";
import Interests from "./Interests";
import { IconType } from "react-icons";

interface InterestProps {
    name: string;
    icon: IconType;
    href: string;
}


const interests = [
    {
        name: "restaurants",
        href: "/restaurants",
        icon: GiForkKnifeSpoon
    },
    {
        name: "hotels",
        href: "/hotels",
        icon: FaBed
    },
    {
        name: "things to do",
        href: "/things-to-do",
        icon: BiCamera
    },
    {
        name: "museums",
        href: "/museums",
        icon: HiOutlineLibrary
    },
    {
        name: "transit",
        href: "/transit",
        icon: IoBusOutline
    },
    {
        name: "pharmacies",
        href: "/pharmacies",
        icon: RiFirstAidKitLine
    },
    {
        name: "ATMS",
        href: "/atms",
        icon: MdAtm
    }
]

// component for points of interests
const Points = () => {
    return (
        <div className="flex flex-row items-center w-full justify-between">
            {
                interests && interests.map((interest) => (
                    <Interests 
                    key={interest.name} 
                    name={interest.name}
                    icon={interest.icon}
                    href={interest.href} />
                ))
            }
        </div>
    )
}




export default Points;