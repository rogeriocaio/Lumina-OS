import { LucideIcon } from "lucide-react";

interface ButtonProps {
  label: string;
  Icon?: LucideIcon;
  IsActive?: boolean;
}

export function Button({ label, Icon, IsActive }: ButtonProps) {
  return (
    <button className={` ${IsActive ? "transition-all ease-in duration-300 flex justify-center min-w-fit px-4 py-2 rounded-full bg-white text-[#16122a]" : ""}`}>
      {Icon && <Icon className="block md:hidden w-6 h-6" />}
      <span className="hidden md:block">{label}</span>
      {IsActive && <span className="md:hidden pl-1">{label}</span>}
    </button>
  );
}