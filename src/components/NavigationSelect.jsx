import { useNavigate } from "react-router-dom";

export default function NavigationSelect() {
    const navigate = useNavigate();

    const handleNavigation = (e) => {
        const selectedValue = e.target.value;
        if (selectedValue) {
            navigate(selectedValue);
        }
    };

    return (
        <select
            onChange={handleNavigation}
            className="capitalize p-2 cursor-pointer outline-none bg-blue-300 rounded-md"
            defaultValue=""
        >
            <option value="" className="text-lg" disabled>Select a category</option>
            <option value="/humans" className="text-2xl font-black text-white cursor-pointer">
                Humans
            </option>
            <option value="/aliens" className="text-2xl font-black text-white cursor-pointer">
                Aliens
            </option>
        </select>
    );
};

