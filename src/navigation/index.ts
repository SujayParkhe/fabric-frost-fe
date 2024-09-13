import navMenu from "@/navigation/navigation";

const getNavByRole = (role: string) => {
  return navMenu.filter((navItem) => navItem.role === role);
};

export default getNavByRole;
