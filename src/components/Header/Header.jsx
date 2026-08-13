import React, { useState } from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Sign Up",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Create Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <Container>
        <nav className="flex min-h-[76px] items-center justify-between">
          
          {/* Logo */}
          <NavLink to="/" onClick={closeMobileMenu}>
            <Logo width="170px" />
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-2 md:flex">
            {navItems.map(
              (item) =>
                item.active && (
                  <NavLink
                    key={item.name}
                    to={item.slug}
                    className={({ isActive }) =>
                      `
                      rounded-lg
                      px-4
                      py-2
                      text-sm
                      font-medium
                      transition-all
                      duration-200
                      ${
                        isActive
                          ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                          : "text-slate-600 hover:bg-indigo-50 hover:text-indigo-600"
                      }
                      `
                    }
                  >
                    {item.name}
                  </NavLink>
                )
            )}

            {authStatus && (
              <div className="ml-2 border-l border-slate-200 pl-3">
                <LogoutBtn />
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:bg-slate-100 md:hidden"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6 6L18 18M6 18L18 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M4 7H20M4 12H20M4 17H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="border-t border-slate-100 py-4 md:hidden">
            <div className="flex flex-col gap-1">
              {navItems.map(
                (item) =>
                  item.active && (
                    <NavLink
                      key={item.name}
                      to={item.slug}
                      onClick={closeMobileMenu}
                      className={({ isActive }) =>
                        `
                        rounded-lg
                        px-4
                        py-3
                        text-left
                        text-sm
                        font-medium
                        transition
                        ${
                          isActive
                            ? "bg-indigo-600 text-white"
                            : "text-slate-700 hover:bg-indigo-50 hover:text-indigo-600"
                        }
                        `
                      }
                    >
                      {item.name}
                    </NavLink>
                  )
              )}

              {authStatus && (
                <div className="mt-2 border-t border-slate-100 pt-3">
                  <LogoutBtn />
                </div>
              )}
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}

export default Header;