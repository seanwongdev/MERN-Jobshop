import {
  Outlet,
  redirect,
  useLoaderData,
  useNavigate,
  useNavigation,
} from "react-router-dom";

import Header from "./Header";
import SmallNavBar from "./SmallNavBar";
import BigNavBar from "./BigNavBar";
import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import Loading from "../ui/Loading";

const DashboardContext = createContext();

export const loader = async function () {
  try {
    const res = await fetch("/api/v1/users/current-user");
    if (!res.ok) throw new Error("You need to be logged in");
    const { data } = await res.json();
    return data;
  } catch (error) {
    toast.error(error.message);
    return redirect("/login");
  }
};

function DashboardLayout() {
  const { user } = useLoaderData();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const [showLogout, setShowLogout] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [active, setActive] = useState(null);

  const navigate = useNavigate();
  const handleToggleSidebar = () => {
    setShowSidebar((showSidebar) => !showSidebar);
  };

  const logoutUser = async () => {
    navigate("/");
    const res = await fetch("/api/v1/users/logout");
    const data = res.json();
    console.log(data);
    toast.success("Successfully logged out");
  };

  return (
    <DashboardContext.Provider
      value={{
        active,
        setActive,
        handleToggleSidebar,
        showSidebar,
        setShowSidebar,
        logoutUser,
        showLogout,
        setShowLogout,
        user,
      }}
    >
      <div className="md:grid md:grid-cols-[auto,1fr]   w-screen h-screen ">
        <div className="">
          <div className="md:hidden h-full">
            {showSidebar && <SmallNavBar />}
          </div>
          <div className="hidden md:grid h-full">
            <BigNavBar />
          </div>
        </div>
        <div className="overflow-x-auto">
          <Header />
          {isLoading ? <Loading /> : <Outlet context={{ user }} />}
        </div>
      </div>
    </DashboardContext.Provider>
  );
}

export const useDashboardContext = () => useContext(DashboardContext);

export default DashboardLayout;
