import React, { useEffect, useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import { toast } from "react-toastify";
import MenuMobile from "./MenuMobile";

function Inputs({ setQuery, units, setUnits }) {
  const [city, setCity] = useState("");

  const handleUnitsChange = (e) => {
    const selectedUnits = e.currentTarget.name;
    if (units !== selectedUnits) setUnits(selectedUnits);
  };

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  const handlePositionClick = () => {
    if (navigator.geolocation) {
      toast.info("Fetching user location.");
      navigator.geolocation.getCurrentPosition((position) => {
        toast.success("Location Fetched!");
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };

  const [isOpenMenu, setOpenMenu] = useState(false);
  useEffect(() => {
    var navbar = document.querySelector('.navbar-sticky');
    var menu_tab = document.querySelector('.menu-tab');
    if(isOpenMenu == true){
      navbar.classList.add('show');
      menu_tab.classList.add('active');
      return;
    }
    navbar.classList.remove('show');
    menu_tab.classList.remove('active');
  }, [isOpenMenu]);
  const handleOpenMenuMobile = () => {
    setOpenMenu(current => !current);
  };

  return (
    <>
      <div className="flex gap-2 items-center lg:my-6 sm:my-4">
        <div className="flex-row w-3/4 items-center space-x-4 relative sm:flex hidden">
          <input
            value={city}
            onChange={(e) => setCity(e.currentTarget.value)}
            type="text"
            className="text-[18px] font-light px-4 py-2 w-full shadow-xl capitalize focus:outline-none first-letter:capitalize placeholder:lowercase rounded-full"
            placeholder="Search..."
          />
          <UilSearch
            onClick={handleSearchClick}
            size={25}
            className="absolute top-[12px] right-[10px] text-[18px] w-5 h-5 text-orange-700 cursor-pointer transition ease-out hover:scale-125"
          />
        </div>
        <div className="sm:hidden">
          <UilSearch
            onClick={handleSearchClick}
            size={25}
            className="text-white cursor-pointer transition ease-out hover:scale-125"
          />
        </div>
        <UilLocationPoint
          onClick={handlePositionClick}
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
        <div className="flex flex-row items-center justify-center">
          <button
            onClick={handleUnitsChange}
            name="metric"
            className="text-xl text-white font-light transition ease-out hover:scale-125"
          >
            °C
          </button>
          <p className="text-xl text-white mx-1">|</p>
          <button
            onClick={handleUnitsChange}
            name="imperial"
            className="text-xl text-white font-light transition ease-out hover:scale-125"
          >
            °F
          </button>
        </div>
        <div className="lg:hidden" onClick={handleOpenMenuMobile}>
          <svg className="w-[40px] h-[40px]"
            xmlns="http://www.w3.org/2000/svg"
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M4 6H20M4 12H14M4 18H9"
              stroke="#FFFFFF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <MenuMobile handleOpenMenuMobile={handleOpenMenuMobile}/>
    </>
  );
}

export default Inputs;
