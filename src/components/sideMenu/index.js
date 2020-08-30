import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../avatar";
import { AVATAR_SIZE_MAP, NAVIGATION_LINKS } from "../../helpers/constants";

const SideMenu = (props) => {
  const { companyName, closeMenu } = props;

  return (
    <div className="d-flex flex-column bg-primary h-100 justify-content-between">
      <div>
        <div className="d-flex align-items-center justify-content-center bg-secondary header-block">
          <div className="d-flex align-items-center">
            <Avatar size={AVATAR_SIZE_MAP.LG} className="mr-2" />
            <h4 className="m-0 text-muted">{companyName || "Company"}</h4>
          </div>
        </div>
        <div className="d-flex flex-column py-4 px-3">
          {NAVIGATION_LINKS.map(({ title, link, icon }, idx) => {
            const TagName = icon;
            return (
              <Link 
                key={idx} 
                to={link} 
                className="d-flex text-muted nav-item pb-2"
                onClick={closeMenu}
              >
                {TagName ? <TagName className="mr-2" /> : null}
                <div>{title}</div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center bg-secondary header-block text-muted">
        {`${companyName || "Company"} 2020`}
      </div>
    </div>
  );
};

export default SideMenu;
