import React from "react";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { useLocation, Link } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import "./customBreadcrumbs.css";

export const CustomBreadcrumbs = () => {
  const location = useLocation();
  const data = location.state;

  const PhoneModelBreadcrumb = () => (
    <span>{data?.from?.brand + " " + data?.from?.model}</span>
  );

  const routes = [
    { path: "/", breadcrumb: "Home" },
    { path: "/:id", breadcrumb: PhoneModelBreadcrumb },
  ];
  const breadcrumbsroutes = useBreadcrumbs(routes);

  return (
    <>
      <Breadcrumbs
        separator="›"
        aria-label="breadcrumb"
        className="breadcrumbs"
      >
        {breadcrumbsroutes.map(({ breadcrumb }, idx) => {
          return idx === 0 ? (
            <Link key={idx} to={"/"}>
              {breadcrumb}
            </Link>
          ) : (
            <span key={idx}>{breadcrumb}</span>
          );
        })}
      </Breadcrumbs>
    </>
  );
};
