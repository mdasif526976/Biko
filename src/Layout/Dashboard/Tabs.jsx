import { Tabs } from "flowbite-react";
import { HiPlus } from "react-icons/hi";
import AddProduct from "../../Component/Add Product/AddProduct";
import Overview from "../../Component/Overview/Overview";

export default function TabsWithUnderline() {
  return (
    <Tabs.Group
      aria-label="Tabs with underline"
      className="py-5"
      style="underline"
    >
      <Tabs.Item active icon={HiPlus} title="Add Product">
        <AddProduct />
      </Tabs.Item>
      <Tabs.Item title="Overview">
        <Overview />
      </Tabs.Item>
    </Tabs.Group>
  );
}
