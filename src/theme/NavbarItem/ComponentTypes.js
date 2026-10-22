import React, { useEffect, useState } from "react";
import DefaultNavbarItem from "@theme-original/NavbarItem/ComponentTypes";

function DashboardBackButton() {
  const [dashboardUrl, setDashboardUrl] = useState("https://uniteyourdata.com/app");

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Default target based on environment domain
    let defaultUrl = "https://uniteyourdata.com/app";
    if (window.location.hostname.includes("development")) {
      defaultUrl = "https://development.uniteyourdata.com/app";
    }

    const referrer = document.referrer;
    if (referrer) {
      try {
        const referrerUrl = new URL(referrer);
        if (referrerUrl.origin !== window.location.origin) {
          sessionStorage.setItem("dashboard_origin", referrerUrl.origin);
        }
      } catch (e) {}
    }

    const storedOrigin = sessionStorage.getItem("dashboard_origin");
    if (storedOrigin) {
      const cleanOrigin = storedOrigin.replace(/\/$/, "").replace(/\/app$/, "");
      setDashboardUrl(`${cleanOrigin}/app`);
    } else {
      setDashboardUrl(defaultUrl);
    }
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    window.location.href = dashboardUrl;
  };

  return (
    <a
      href={dashboardUrl}
      onClick={handleClick}
      className="navbar__item navbar__link navbar-launch-unite-btn"
    >
      <span>Launch Unite</span>
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
      </svg>
    </a>
  );
}

function NavbarDocTitle() {
  return <span className="navbar-docs-title">Documentation</span>;
}

export default {
  ...DefaultNavbarItem,
  "custom-dashboard-back": DashboardBackButton,
  "custom-doc-title": NavbarDocTitle,
};
