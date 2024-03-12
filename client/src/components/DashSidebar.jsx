import { Sidebar, SidebarItem, SidebarItemGroup } from "flowbite-react";
import { useEffect, useState } from "react";
import { HiArrowSmRight, HiDocumentText, HiUser } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { signoutSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

export default function DashSidebar() {
  const location = useLocation();
  const dispatch = useDispatch();
  const {currentUser} = useSelector(state => state.user)
  const navigate = useNavigate();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  const handleSignOut = async () => {
    try {
      const res = await fetch("api/user/signout", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
        navigate("/SignIn");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Sidebar className="w-full md:w-56">
      <SidebarItemGroup className=" flex flex-col gap-1">

        <Link to="/dashboard?tab=profile">
          <SidebarItem
            active={tab === "profile"}
            icon={HiUser}
            label={currentUser.isAdmin ? 'Admin' : 'User'}
            labelColor="dark"
            as="div"
          >
            Profile
          </SidebarItem>
        </Link>

        {currentUser.isAdmin && (
          <Link to="/dashboard?tab=posts">
          <SidebarItem active={tab === "posts"} icon={HiDocumentText} as="div">
            Post
          </SidebarItem>
        </Link>
        )}

        <SidebarItem
          active
          icon={HiArrowSmRight}
          className="cursor-pointer"
          onClick={handleSignOut}
        >
          Sign Out
        </SidebarItem>
      </SidebarItemGroup>
    </Sidebar>
  );
}
