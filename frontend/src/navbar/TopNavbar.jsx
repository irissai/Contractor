import React, { useEffect, useState } from "react";
import "./TopNavbar.css";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const TopNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <>
      <header className={isScrolled ? "top-navbar scroll" : "top-navbar"}>
        <div className="logo" onClick={handleLogoClick} style={{ cursor: "pointer" }}>
          <img src="https://www.supalai.com/images/layout/logo.svg" alt="Logo" />
        </div>
        <FaUserCircle className="icon-user" cursor="pointer" />
      </header>

      {/* ตัวนี้คือที่ดันเนื้อหาให้ไม่ชน navbar เวลา fixed */}
      {isScrolled && <div style={{ height: "65px" }} />}
    </>
  );
};

export default TopNavbar;
