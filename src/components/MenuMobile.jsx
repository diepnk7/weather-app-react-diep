import React from "react";

function MenuMobile({ handleOpenMenuMobile, isOpenMenu, setQuery }) {
  const citis = [
    {
      id: 1,
      title: "Hanoi",
    },
    {
      id: 2,
      title: "London",
    },
    {
      id: 3,
      title: "Sydney",
    },
    {
      id: 4,
      title: "Tokyo",
    },
    {
      id: 5,
      title: "Italy",
    },
  ];
  return (
    <div className={`navbar-sticky fixed top-0 left-[-100%] z-50 w-full h-screen bg-black bg-opacity-20 ${isOpenMenu ? 'show' : ''}`}>
      <div className="menu-hide w-full max-w-[350px] h-full bg-white px-4">
        <div className="flex justify-between items-center py-[5px] border-b-[1px] border-b-[#216BB4]">
          <p>DIEP</p>
          <div className={`menu-tab ${isOpenMenu ? 'active' : ''}`} onClick={handleOpenMenuMobile}>
            <div id="one"></div>
            <div id="two"></div>
            <div id="three"></div>
          </div>
        </div>
        <div id="menu-mobile" className="py-4 grid text-left space-y-3">
          {citis?.map((city) => (
            <button
              key={city.id}
              className="text-left text-lg font-normal transition ease-out hover:scale-125 text-black"
              onClick={() => {
                setQuery({ q: city.title });
                handleOpenMenuMobile();
              }}
            >
              {city.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MenuMobile;
