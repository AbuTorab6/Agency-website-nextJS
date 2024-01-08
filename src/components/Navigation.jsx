"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, Container, Nav, NavLink, Navbar } from "react-bootstrap";

const Navigation = () => {
  const [v1, v2] = useState({
    navigationBackground: "navigation-background",
    navigationBrand: "navigation-brand",
    navigationList: "navigation-list",
  });

  var jubo = () => {
    if (window.scrollY > 100) {
      v2({
        navigationBackground: "navigation-background-scroll",
        navigationBrand: "navigation-brand",
        navigationList: "navigation-list",
      });
    } else if (window.scrollY < 100) {
      v2({
        navigationBackground: "navigation-background",
        navigationBrand: "navigation-brand",
        navigationList: "navigation-list",
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", jubo);
  });

  let path = usePathname();
  return (
    <>
      <Navbar
        className={v1.navigationBackground}
        fixed="top"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
      >
        <div className="nav-row">
          <Navbar.Brand>
            {" "}
            <Link className={v1.navigationBrand} href={"/"}>
              <img className="navLogo" src="atis-mono-black.svg" />
            </Link>{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Link
                className={
                  path == "/" ? "navigation-list-active" : "navigation-list"
                }
                href={"/"}
                end
              >
                <span className="navigation-icon"></span>Home
              </Link>
              <Link
                className={
                  path == "/team" ? "navigation-list-active" : "navigation-list"
                }
                href={"/team"}
              >
                <span className="navigation-icon"></span>Team
              </Link>

              <Link
                className={
                  path == "/services"
                    ? "navigation-list-active"
                    : "navigation-list"
                }
                href={"/services"}
              >
                <span className="navigation-icon"></span>Services
              </Link>
              <Link
                className={
                  path == "/testimonial"
                    ? "navigation-list-active"
                    : "navigation-list"
                }
                href={"/testimonial"}
              >
                <span className="navigation-icon"></span>Testimonial
              </Link>
              <Link
                className={
                  path == "/projects"
                    ? "navigation-list-active"
                    : "navigation-list"
                }
                href={{ pathname: "/projects" }}
              >
                <span className="navigation-icon"></span>Project
              </Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default Navigation;
