import { IconType } from "react-icons";

interface AdminNavItemProps {
  selected?: boolean;
  icon: IconType;
  label: string;
}

const AdminNavItem: React.FC<AdminNavItemProps> = ({
  selected,
  icon: Icon,
  label,
}) => {
  return (
    <div className={`flex items-center justify-center text-center gap-1 p-2 border-b-2 hover:text-neutral-800 transition cursor-pointer ${selected ? "border-b-neutral-800 text-neutral-800" : "border-transparent text-neutral-500"}`}
    >
      <Icon size={20} />
      <div className="font-medium text-sm text-center break-normal">{label}</div>
    </div>
  );
}

export default AdminNavItem;