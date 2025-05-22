import React from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { LuLogOut } from "react-icons/lu";
import "./navbar.css";

const navItems = [
  { label: "หน้าหลัก", to: "/" },
  { label: "ยื่นคำขอตรวจงาน", to: "/request" },
  { label: "เอกสารเบิกงวด", to: "/document" },
];

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav>
      <ul>
        {navItems.map(({ label, to }) => {
          // active ถ้า path ปัจจุบันขึ้นต้นด้วย to
          const isActive = location.pathname === to || location.pathname.startsWith(to + "/");

          return (
            <li
              key={to}
              className={isActive ? "active" : ""}
              onClick={() => navigate(to)}
              style={{ cursor: "pointer" }}
            >
              {/* ใช้ NavLink เพื่อให้ semantic ถูกต้องและคีย์บอร์ดใช้งานได้ */}
              <NavLink to={to} end={to === "/"} style={{ pointerEvents: "none" }}>
                {label}
              </NavLink>
            </li>
          );
        })}

        <li className="logout">
          <NavLink to="/logout" style={{ display: "flex", alignItems: "center" }}>
  <LuLogOut style={{ marginRight: 4 }} />
  ออกจากระบบ
</NavLink>

        </li>
      </ul>
    </nav>
  );
}
