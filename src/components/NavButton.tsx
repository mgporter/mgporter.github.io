import { Button } from "@headlessui/react";
import { NavOption } from "./Nav";

interface NavButtonProps {
  isSelected: boolean;
  option: NavOption;
  handler: () => void;
}

export default function NavButton({ isSelected, option, handler}: NavButtonProps) {
  return (
    <Button
      key={option.optionName}
      aria-selected={isSelected}
      aria-label="NavButton"
      onClick={handler}
      className={`project_type_selection tracking-wide py-[2px] px-4 w-full text-left
        border-l-2 border-transparent bg-gradient-to-r to-transparent
        data-[hover]:from-blue-300/20 data-[hover]:text-white data-[hover]:border-white
        data-[active]:from-blue-200/50
        ${isSelected ? "from-blue-300/40 to-transparent text-white font-bold border-white" : ""}`}
    >
      {option.optionName}
    </Button>
  )
}