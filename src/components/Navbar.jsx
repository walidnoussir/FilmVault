import { Plus } from "lucide-react";
import Button from "../ui/Button";
import Logo from "./Logo";

function Navbar() {
  return (
    <nav className="py-2.5 px-1 md:px-2 lg:px-4 flex items-center justify-between">
      <Logo />
      <Button type="primary">
        <Plus className="text-white" />
        <p className="text-white">Add New Film</p>
      </Button>
    </nav>
  );
}

export default Navbar;
