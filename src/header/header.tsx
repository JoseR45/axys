import React from "react";

export const Header: React.FC<{}> = ({}) => {
  return (
    <>
      <header className="bg-tertiary">
        <div>LOGO</div>
        <div>
          <nav>
            <div>
              <a href="">
                <p>ABOUT</p>
              </a>
              <a href="">
                <p>SERVICES</p>
              </a>
              <a href="">
                <p>CONTACT</p>
              </a>
            </div>
            <div>
              <div></div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};
