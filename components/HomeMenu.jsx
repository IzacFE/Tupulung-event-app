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

  const populatingCategory = () => {
    if (category.length > 0) {
      return category.map((item, index) => (
        <Link key={index} href={`/?category=${item.id}`}>
          <a className=" hover:text-orange-400 ">{item.title}</a>
        </Link>
      ));
    }
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap justify-around mx-auto  gap-4 ">
        <Link key={"semua"} href={`/?category=semua`}>
          <a className=" hover:text-orange-400 ">semua</a>
        </Link>
        {populatingCategory()}
      </div>
    </div>
  );
}
