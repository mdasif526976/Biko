import React, { createContext, useContext, useEffect, useState } from "react";
import Drawer from "../../Component/Drawer/Drawer";
import { UserContext } from "../../AuthProvider/Authprovider";
import { useNavigate } from "react-router-dom";
export const productContext = createContext();
const Dashboard = () => {
  const [product, setProduct] = useState("");
  const [productimges, setImage] = useState([]);
  const { user } = useContext(UserContext);
  const [userData, setUserData] = useState("");
  useEffect(() => {
    fetch(`http://localhost:5000/user/${user.email}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, [user.email]);
  const Admin = [
    { title: "All Users", src: "https://iili.io/HPivNyP.png", to: "users" },
    { title: "All Sellers", src: "https://iili.io/HPikcXa.png", to: "sellers" },
    {
      title: "Report Iteams",
      src: "https://iili.io/HPiv0u9.png",
      to: "reportIteams",
    },
  ];
  const SellerMenu = [
    {
      title: "My Products",
      src: "https://iili.io/HPiSFJp.png",
      to: "products",
    },
    {
      title: "Add A Product",
      src: "https://iili.io/HPieYP4.png",
      to: "addProduct",
    },
  ];
  const navigate = useNavigate();
  const type = userData.account;

  console.log(type);
  const productValue = { product, setProduct, productimges, setImage };
  return (
    <productContext.Provider value={productValue}>
      <div>
        {userData && (
          <Drawer
            menu={
              type == "Seller"
                ? SellerMenu
                : type == "Admin"
                ? Admin
                : "good bye"
            }
            userData={userData}
          />
        )}
      </div>
    </productContext.Provider>
  );
};

export default Dashboard;
