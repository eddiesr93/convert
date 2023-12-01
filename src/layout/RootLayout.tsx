import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export const RootLayout: React.FC = () => {
  return (
    <div className="flex flex-col">
      <header className="bg-white">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8"
          aria-label="Global">
          <div className="flex lg:flex-1">
            <NavLink
              to="/"
              className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </NavLink>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {/*    {navigation.map((item) => (*/}
            {/*      <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">*/}
            {/*      {item.name}*/}
            {/*    </a>*/}
            {/*))}*/}
          </div>
          <div className="flex flex-1 items-center justify-end gap-x-6">
            <NavLink
              to="#"
              className="hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900">
              Log in
            </NavLink>
            <NavLink
              to="#"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Sign up
            </NavLink>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              // onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              {/*<Bars3Icon className="h-6 w-6" aria-hidden="true" />*/}
            </button>
          </div>
        </nav>
      </header>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8">
        <Outlet />
      </div>
    </div>
  );
};
