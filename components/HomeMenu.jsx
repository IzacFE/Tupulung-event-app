import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getCategories } from "../service/category";

export default function HomeMenu() {
  const [category, setCategory] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchDataCategory();
  }, []);

  const fetchDataCategory = async () => {
    const response = await getCategories();
    if (response.code === 200) {
      setCategory(response.data);
      setIsLoading(false);
    } else {
      alert("Something error, in category : " + response.error);
    }
  };
  const categoryConvert = (title) => {
    if (title === "Education") {
      return "Edukasi";
    }
    if (title === "Technology") {
      return "Teknologi";
    }
    if (title === "Health") {
      return "Kesehatan";
    }
    if (title === "Games") {
      return "Permainan";
    }
    if (title === "Celebrity") {
      return "Selebriti";
    }
  };

  const populatingCategory = () => {
    if (category.length > 0) {
      return category.map((item, index) => (
        <Link key={index} href={`/?c=${item.id}`}>
          <a className=" text-emerald-900 hover:text-orange-400 dark:text-slate-100 dark:hover:text-orange-400 ">
            {categoryConvert(item.title)}
          </a>
        </Link>
      ));
    }
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap justify-around mx-auto  gap-4 ">
        <Link key={"semua"} href={`/`}>
          <a className="text-emerald-900 hover:text-orange-400 dark:text-slate-100 dark:hover:text-orange-400">
            Semua
          </a>
        </Link>
        {populatingCategory()}
      </div>
    </div>
  );
}
