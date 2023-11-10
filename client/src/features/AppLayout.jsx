import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div >
      {/* {isLoading && <Loader />} */}

      <Header />

      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl ">
          <Outlet />
        </main>
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default AppLayout;
