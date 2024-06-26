import { usePathname, useSearchParams } from "next/navigation";
import categories from "../constants/categories";
import CategoryBox from "./CategoryBox";

const Categories = () => {
  const params = useSearchParams();

  const category = params?.get("category");
  const pathname = usePathname();

  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <div className="flex flex-row items-center justify-between overflow-x-auto pt-4">
      {categories.map((item) => (
        <CategoryBox
          key={item.label}
          label={item.label}
          selected={category === item.label}
          icon={item.icon}
        />
      ))}
    </div>
  );
};

export default Categories;
