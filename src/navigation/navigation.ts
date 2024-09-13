import {
  MdOutlineSpaceDashboard,
  MdOutlineMarkChatUnread,
  MdOutlinePayment,
  MdOutlineShoppingCart,
} from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { LuUsers } from "react-icons/lu";
import { LiaUserTimesSolid } from "react-icons/lia";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import Nav from "@/types/nav";

const navMenu: Nav[] = [
  {
    id: 1,
    title: "Dashboard",
    icon: MdOutlineSpaceDashboard,
    role: "admin",
    path: "/admin/dashboard",
  },
  {
    id: 2,
    title: "Orders",
    icon: MdOutlineShoppingCart,
    role: "admin",
    path: "/admin/dashboard/orders",
  },
  {
    id: 3,
    title: "Category",
    icon: BiCategory,
    role: "admin",
    path: "/admin/dashboard/category",
  },
  {
    id: 4,
    title: "Sellers",
    icon: LuUsers,
    role: "admin",
    path: "/admin/dashboard/sellers",
  },
  {
    id: 5,
    title: "Payment Request",
    icon: MdOutlinePayment,
    role: "admin",
    path: "/admin/dashboard/payment-request",
  },
  {
    id: 6,
    title: "Inactive Sellers",
    icon: LiaUserTimesSolid,
    role: "admin",
    path: "/admin/dashboard/inactive-sellers",
  },
  {
    id: 7,
    title: "Seller Request",
    icon: VscGitPullRequestGoToChanges,
    role: "admin",
    path: "/admin/dashboard/seller-request",
  },
  {
    id: 8,
    title: "Live Chat",
    icon: MdOutlineMarkChatUnread,
    role: "admin",
    path: "/admin/dashboard/chat-seller",
  },
];

export default navMenu;
