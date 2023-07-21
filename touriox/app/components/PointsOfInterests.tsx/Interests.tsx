import { IconType } from "react-icons";

interface InterestsProps {
    name: string;
    icon: IconType;
    href: string;
}

// component for each interest
const Interests: React.FC<InterestsProps> = ({ name, icon: Icon, href }) => {
    return (
        <div className="rounded-2xl p-2 flex flex-row 
        items-center justify-center gap-2 bg-white shadow-md">
            <Icon size={22} className="text-neutral-600" />
            <span className="text-sm capitalize text-neutral-600">
                {name}
            </span>
        </div>
    )
}


export default Interests;