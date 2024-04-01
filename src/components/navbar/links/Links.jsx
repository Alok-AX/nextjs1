import React, { useState } from 'react';
import NavLink from "./navLink/navLink";
import  "./navLink/navLink.module.css"

const Links = () => {
  const [open, setOpen] = useState(false); // Define open state variable and its setter function

  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Products",
      path: "/product",
    },
  ];

  // Temporary
  const session = true;
  const isAdmin = true;

  return (
    <div className="styles.mainmenu">
      <ul className="navbar-nav nav-list">
        {links.map(link => (
          <li className="nav-item" key={link.title}> {/* Added key prop */}
            <NavLink items={link} />
          </li>
        ))}
        {session ? (
          <>
            {isAdmin && (
              <li className="nav-item" key="admin"> {/* Added key prop */}
                <NavLink items={{ title: "Admin", path: "/admin" }} />
              </li>
            )}
            <button className=''>logout</button>
          </>
        ) : (
          <li className="nav-item" key="login"> {/* Added key prop */}
            <NavLink items={{ title: "Login", path: "/login" }} />
          </li>
        )}
      </ul>
      <button type="button" className='mobile-view' onClick={() => setOpen(prev => !prev)}>
        <span className="navbar-toggler-icon"></span>
      </button>
      {open && (
        <div className="mobileLinks">
          {links.map(link => (
            <li className="nav-item" key={link.title}> {/* Added key prop */}
              <NavLink items={link} />
            </li>
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
