import React, { useState } from 'react';
import styled from 'styled-components';

const maxWidth = '999px';
const minWidth = '1000px';

const NavContainer = styled.div`
  @media screen and (min-width: ${minWidth}) {
    display: flex;
  }
  @media screen and (max-width: ${maxWidth}) {
    width: 100vw;
    background-color: white;
    position: ${(prop) => (prop.menuProp ? 'fixed' : 'static')};
  }
`;

const NavBar = styled.div`
  @media screen and (max-width: ${maxWidth}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
  }

  @media screen and (min-width: ${minWidth}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 70px;
    background-color: white;
  }
`;

const NavLogo = styled.div`
  @media screen and (max-width: ${maxWidth}) {
    margin-left: 20px;
  }
  @media screen and (min-width: ${minWidth}) {
    margin-left: 150px;
  }
`;

const HamburgerMenu = styled.a`
  margin-right: 35px;
  &:hover {
    cursor: pointer;
  }

  @media screen and (min-width: ${minWidth}) {
    display: none;
  }
`;

const OpenMenu = styled.a`
  display: ${(prop) => (prop.menuProp ? 'none' : 'block')};
`;

const CloseMenu = styled.a`
  display: ${(prop) => (prop.menuProp ? 'block' : 'none')};
`;

const NavMenu = styled.div`
  @media screen and (max-width: ${maxWidth}) {
    background-color: hsl(270, 9%, 17%);
    width: 100vw;
    height: 100vh;
    list-style-type: none;
    display: ${(prop) => (prop.menuProp ? 'flex' : 'none')};
    flex-direction: column;
  }
  @media screen and (min-width: ${minWidth}) {
    display: initial;
    list-style-type: none;
  }
`;

const NavList = styled.ul`
  @media screen and (max-width: ${maxWidth}) {
    text-align: center;
    font-size: 18px;
    padding-top: 30px;
    list-style-type: none;
  }
  @media screen and (min-width: ${minWidth}) {
    height: 100%;
    display: initial;
    list-style-type: none;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 450px;
    margin-right: 150px;
  }
`;

const ListItem = styled.div`
  @media screen and (max-width: ${maxWidth}) {
    border: 1px solid hsl(270, 9%, 17%);
    padding: 14px 0;
    margin: 0px 30px 8px 30px;
    &:hover {
      border: 1px solid white;
      cursor: pointer;
    }
  }
  @media screen and (min-width: ${minWidth}) {
    margin: 0 10px;
  }
`;

const Link = styled.a`
  @media screen and (max-width: ${maxWidth}) {
    text-decoration: none;
    color: white;
    text-transform: uppercase;
  }

  @media screen and (min-width: ${minWidth}) {
    text-decoration: none;
    color: hsl(273, 4%, 51%);
    text-transform: uppercase;
  }
`;

const NavMenuLogo = styled.div`
  @media screen and (max-width: ${maxWidth}) {
    margin-top: 45px;
    flex-grow: 1;
  }
  @media screen and (min-width: ${minWidth}) {
    display: none;
  }
`;

const Nav = () => {
  const [navMenuOpen, setNavMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    if (navMenuOpen === false) setNavMenuOpen(true);
    else setNavMenuOpen(false);
  };

  return (
    <NavContainer menuProp={navMenuOpen}>
      <NavBar>
        <NavLogo>
          <svg xmlns='http://www.w3.org/2000/svg' width='112' height='18'>
            <path
              fill='#2C2830'
              d='M0 .224h3.578v17.53H0V.223zm8.086 0h3.555l10.923 5.72V.224h3.556v17.53h-3.556V9.711L11.641 4.026v13.727H8.086V.224zm23.81 12.314c.635.36 1.28.683 1.934.97.654.288 1.333.531 2.035.73.703.198 1.442.349 2.215.454.774.104 1.599.157 2.473.157 1.054 0 1.952-.07 2.692-.208.74-.138 1.344-.329 1.811-.572.467-.243.808-.533 1.02-.869.214-.336.32-.703.32-1.1 0-.635-.265-1.137-.796-1.507-.53-.37-1.35-.556-2.456-.556-.486 0-.998.032-1.537.096l-.811.1-.82.107a97.03 97.03 0 01-1.626.208c-.535.063-1.038.095-1.509.095-.785 0-1.538-.1-2.26-.303a5.98 5.98 0 01-1.917-.908 4.5 4.5 0 01-1.33-1.514c-.328-.606-.493-1.312-.493-2.12 0-.478.066-.953.196-1.424.131-.471.34-.922.628-1.352.288-.43.66-.83 1.116-1.2a6.682 6.682 0 011.655-.958c.646-.27 1.394-.48 2.243-.634.848-.153 1.814-.23 2.899-.23.785 0 1.573.043 2.366.129.792.086 1.564.207 2.316.364.751.157 1.475.346 2.17.567.695.22 1.342.465 1.94.734l-1.559 2.871a16.689 16.689 0 00-1.592-.6 18.789 18.789 0 00-1.783-.476 20.428 20.428 0 00-1.924-.32 17.169 17.169 0 00-2.024-.118c-.98 0-1.785.071-2.417.213-.632.143-1.135.324-1.508.544-.374.221-.634.468-.78.74a1.714 1.714 0 00-.219.814c0 .523.236.951.707 1.284.471.333 1.189.499 2.153.499.39 0 .836-.028 1.34-.084l.777-.089.816-.096a72.218 72.218 0 011.705-.185c.58-.056 1.142-.084 1.688-.084 1.031 0 1.945.115 2.742.347.796.232 1.463.563 2.001.993.539.43.946.95 1.223 1.559.277.609.415 1.291.415 2.046 0 1.01-.234 1.909-.701 2.698-.467.788-1.133 1.454-1.996 1.996-.864.542-1.905.953-3.124 1.233-1.218.28-2.575.421-4.07.421-.988 0-1.952-.062-2.894-.185a21.57 21.57 0 01-2.709-.527 20.3 20.3 0 01-2.467-.819A17.998 17.998 0 0130 15.421l1.895-2.883zM53.382.224h3.555V9.88c0 .793.109 1.498.326 2.114.216.617.54 1.139.97 1.565.43.426.962.75 1.598.97.635.22 1.375.33 2.22.33.838 0 1.576-.11 2.215-.33.64-.22 1.174-.544 1.604-.97.43-.426.753-.948.97-1.565.217-.616.325-1.321.325-2.114V.224h3.555v10.083c0 1.15-.194 2.198-.583 3.14a6.668 6.668 0 01-1.693 2.422c-.74.673-1.647 1.193-2.72 1.559-1.073.366-2.297.55-3.673.55-1.375 0-2.6-.184-3.673-.55-1.072-.366-1.979-.886-2.72-1.559a6.668 6.668 0 01-1.693-2.422c-.388-.942-.583-1.99-.583-3.14V.224zm21.667 0h8.916c1.346 0 2.513.14 3.5.42.986.281 1.805.687 2.455 1.218a4.907 4.907 0 011.453 1.94c.318.762.476 1.626.476 2.59 0 .651-.078 1.27-.235 1.857a5.512 5.512 0 01-.723 1.62 5.526 5.526 0 01-1.228 1.318 6.677 6.677 0 01-1.739.959l3.813 5.607h-4.351l-3.297-4.98-5.484-.01v4.99H75.05V.224zm9.006 9.466c.673 0 1.262-.079 1.766-.236.505-.157.928-.377 1.268-.661.34-.285.594-.63.762-1.038a3.54 3.54 0 00.253-1.362c0-.98-.337-1.737-1.01-2.272-.673-.534-1.686-.801-3.039-.801h-5.45v6.37h5.45zm12-9.466h14.927v3.118H99.611v3.5h10.071v2.926h-10.07v4.879h11.607v3.106H96.056V.224z'
            />
          </svg>
        </NavLogo>
        <HamburgerMenu onClick={handleMenuToggle}>
          <OpenMenu menuProp={navMenuOpen}>
            <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32'>
              <g fill='none' fillRule='evenodd'>
                <path
                  fill='#FFF'
                  stroke='#2C2830'
                  strokeWidth='1.5'
                  d='M.75.75h30.5v30.5H.75z'
                />
                <g fill='#2C2830'>
                  <path d='M8 10h16v1.5H8zM8 15h16v1.5H8zM8 20h16v1.5H8z' />
                </g>
              </g>
            </svg>
          </OpenMenu>
          <CloseMenu menuProp={navMenuOpen}>
            <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32'>
              <g fill='none' fill-rule='evenodd'>
                <path
                  fill='#FFF'
                  stroke='#2C2830'
                  stroke-width='1.5'
                  d='M.75.75h30.5v30.5H.75z'
                />
                <g fill='#2C2830'>
                  <path d='M10.873 9.563l11.314 11.314-1.06 1.06L9.813 10.623z' />
                  <path d='M9.813 20.877L21.127 9.563l1.06 1.06-11.314 11.314z' />
                </g>
              </g>
            </svg>
          </CloseMenu>
        </HamburgerMenu>
      </NavBar>
      <NavMenu menuProp={navMenuOpen}>
        <NavList>
          <ListItem>
            <Link href='/'>How we work</Link>
          </ListItem>
          <ListItem>
            <Link href='/'>Blog</Link>
          </ListItem>
          <ListItem>
            <Link href='/'>Account</Link>
          </ListItem>
          <ListItem>
            <Link href='/'>View plans</Link>
          </ListItem>
        </NavList>
        <NavMenuLogo>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='375'
            height='218'
            style={{ width: '100%', height: '100%' }}
          >
            <g fill='none' fill-rule='evenodd' stroke='#96A9C6'>
              <path d='M309.564 41.343C213.876 11.406 115.487-38.526 14.757 52.675c-100.73 91.202-164.058 171.093-123.163 274.463 40.896 103.37 207.827 38.985 256.33 131.373 48.503 92.388-58.069 176.237-12.123 258.462 45.945 82.225 81.274 134.924 228.927 82.643 147.654-52.282 134.04-185.308 246.324-263.207 112.283-77.898 233.767-194.516 67.05-402.604C511.383-74.283 405.25 71.28 309.563 41.343z' />
              <path d='M321.902 90.672c-77.983-24.314-158.17-64.869-240.262 9.205C-.454 173.95-52.065 238.837-18.736 322.794c33.33 83.956 169.376 31.663 208.905 106.7 39.529 75.037-47.325 143.14-9.88 209.922C217.732 706.2 246.524 749 366.86 706.538c120.335-42.463 109.24-150.506 200.75-213.775 91.509-63.269 190.516-157.985 54.644-326.993C486.382-3.238 399.885 114.986 321.902 90.672z' />
              <path d='M344.947 122.546c-63.103-19.824-127.99-52.889-194.418 7.504-66.43 60.393-108.193 113.297-81.223 181.748s137.057 25.816 169.044 86.995c31.986 61.178-38.296 116.703-7.996 171.152 30.3 54.449 53.599 89.346 150.973 54.725 97.374-34.62 88.396-122.71 162.445-174.293 74.048-51.584 154.164-128.808 44.218-266.603C478.043 45.98 408.05 142.37 344.947 122.546z' />
              <path d='M368.21 162.166c-50.939-15.88-103.316-42.369-156.94 6.012-53.623 48.382-87.336 90.763-65.565 145.6 21.77 54.836 110.636 20.68 136.457 69.691 25.82 49.01-30.913 93.492-6.454 137.111 24.459 43.62 43.266 71.576 121.87 43.841 78.603-27.734 71.355-98.303 131.13-139.628 59.774-41.324 124.445-103.188 35.693-213.576-88.752-110.388-145.252-33.17-196.19-49.05z' />
              <path d='M373.18 187.232c-41.598-12.997-84.371-34.675-128.162 4.92-43.79 39.594-71.321 74.28-53.543 119.157 17.779 44.877 90.35 16.925 111.435 57.035 21.086 40.11-25.244 76.513-5.27 112.21 19.974 35.698 35.332 58.577 99.522 35.88 64.19-22.699 58.272-80.452 107.085-114.27 48.814-33.82 101.627-84.45 29.149-174.79-72.478-90.34-118.617-27.146-160.216-40.142z' />
              <path d='M384.992 205.895c-33.778-10.551-68.51-28.15-104.069 3.994-35.558 32.143-57.914 60.3-43.477 96.731 14.436 36.432 73.365 13.74 90.486 46.3 17.122 32.562-20.498 62.114-4.28 91.093 16.22 28.98 28.691 47.552 80.814 29.127 52.123-18.426 47.317-65.31 86.954-92.765 39.637-27.454 82.522-68.555 23.67-141.893-58.853-73.338-96.32-22.037-130.098-32.587z' />
            </g>
          </svg>
        </NavMenuLogo>
      </NavMenu>
    </NavContainer>
  );
};

export default Nav;
