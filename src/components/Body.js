import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import bannerImageMobile from '../images/image-intro-mobile.jpg';
import bannerImageDesktop from '../images/image-intro-desktop.jpg';

const maxWidth = '999px';
const minWidth = '1000px';

const Container = styled.div`
  position: relative;
  z-index: 0;
  @media screen and (max-width: ${maxWidth}) {
    display: ${(prop) => (!prop.menuProp ? 'initial' : 'none')};
  }
`;

const Banner = styled.div`
  @media screen and (min-width: ${minWidth}) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    padding: 0 150px;
    height: 650px;
    background-color: hsl(256, 26%, 20%);
    padding-top: 100px;
    min-width: 800px;
  }
`;

const BannerImage = styled.div``;

const BannerImageMobile = styled.img`
  @media screen and (max-width: 375px) {
    display: block;
  }
  @media screen and (min-width: 376px) {
    display: none;
  }
`;

const BannerImageDesktop = styled.img`
  @media screen and (max-width: 375px) {
    display: none;
  }
  @media screen and (min-width: 376px) and (max-width: ${maxWidth}) {
    display: block;
    width: 100%;
    height: 500px;
    object-fit: cover;
    object-position: center 35%;
  }
  @media screen and (min-width: ${minWidth}) and (max-width: 1120px) {
    width: 100%;
  }
  @media screen and (min-width: ${minWidth}) {
    display: block;
  }
`;

const TextBox = styled.div`
  background-color: hsl(256, 26%, 20%);
  color: white;
  padding: 80px 25px;
  position: relative;
  @media screen and (min-width: ${minWidth}) {
    width: 540px;
    padding: 0 20px 0 0;
  }
`;

const BannerTitle = styled.h1`
  text-align: center;
  font-family: 'DM Serif Display', serif;
  font-size: 44px;
  font-weight: 400;
  line-height: 1;
  margin-bottom: 20px;
  position: relative;

  @media screen and (min-width: ${minWidth}) {
    text-align: left;
    font-size: 72px;
    line-height: 0.9;
    font-weight: 400;
    margin-bottom: 24px;
  }
`;

const BannerText = styled.p`
  font-size: 16px;
  text-align: center;
  line-height: 2;
  margin-bottom: 30px;
  position: relative;

  @media screen and (min-width: ${minWidth}) {
    text-align: left;
  }
`;

const BannerButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  @media screen and (min-width: ${minWidth}) {
    display: block;
  }
`;

const BannerButton = styled.button`
  text-transform: uppercase;
  background: none;
  text-align: center;
  color: white;
  background-color: hsl(256, 26%, 20%);
  border: 2px solid white;
  padding: 8px 35px;
  position: relative;
  z-index: 1;
  &:hover {
    cursor: pointer;
    background-color: white;
    color: hsl(256, 26%, 20%);
  }
`;

const BannerImagesMobile = styled.div`
  @media screen and (max-width: ${maxWidth}) {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  @media screen and (min-width: ${minWidth}) {
    display: none;
  }
`;

const BannerImagesMobileOne = styled.div``;

const BannerImagesMobileTwo = styled.div`
  position: absolute;
  right: 0;
  bottom: -180px;
`;

const BannerImagesDesktop = styled.div`
  @media screen and (min-width: ${minWidth}) {
    display: block;
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const BannerImagesDesktopOne = styled.div`
  @media screen and (max-width: ${maxWidth}) {
    display: none;
  }
  @media screen and (min-width: ${minWidth}) {
    position: absolute;
    bottom: -150px;
  }
`;

const BannerImagesDesktopTwo = styled.div`
  @media screen and (max-width: ${maxWidth}) {
    display: none;
  }
  @media screen and (min-width: ${minWidth}) {
    position: absolute;
    right: 0;
  }
`;

const BannerLine = styled.div`
  @media screen and (max-width: ${maxWidth}) {
    display: none;
  }
  @media screen and (min-width: ${minWidth}) {
    width: 150px;
    border-top: 1px solid hsl(273, 4%, 51%);
    margin-bottom: 50px;
  }
`;

const Mid = styled.div``;

const Bottom = styled.div``;

const Body = () => {
  const navOpen = useSelector((state) => state.nav.navOpen);

  return (
    <Container menuProp={navOpen}>
      <Banner>
        <BannerImage>
          <BannerImageMobile src={bannerImageMobile} alt='hi' />
          <BannerImageDesktop src={bannerImageDesktop} alt='hi' />
        </BannerImage>
        <TextBox>
          <BannerImagesMobile>
            <BannerImagesMobileOne>
              <svg xmlns='http://www.w3.org/2000/svg' width='168' height='165'>
                <g fill='none' fillRule='evenodd' stroke='#96A9C6'>
                  <path d='M-20.97-256.987c-52.677-16.501-106.841-44.025-162.294 6.247-55.453 50.272-90.316 94.31-67.803 151.29 22.514 56.979 114.411 21.488 141.113 72.415 26.7 50.926-31.968 97.145-6.674 142.469 25.293 45.324 44.742 74.373 126.027 45.554C90.684 132.17 83.189 58.843 145.002 15.904c61.814-42.94 128.692-107.221 36.912-221.924-91.78-114.702-150.207-34.465-202.884-50.967z' />
                  <path d='M-13.955-230.22c-42.902-13.399-87.015-35.746-132.178 5.072-45.163 40.818-73.556 76.574-55.22 122.838 18.335 46.265 93.18 17.449 114.926 58.798 21.747 41.349-26.035 78.877-5.435 115.677 20.6 36.801 36.44 60.387 102.64 36.988 66.201-23.399 60.098-82.937 110.44-117.8 50.343-34.865 104.81-87.059 30.062-180.19C76.532-281.97 28.947-216.823-13.955-230.22z' />
                  <path d='M-1.61-212.607c-34.755-10.916-70.492-29.123-107.08 4.132-36.587 33.255-59.59 62.386-44.735 100.078 14.854 37.693 75.487 14.216 93.105 47.903 17.617 33.688-21.092 64.263-4.404 94.245 16.689 29.982 29.52 49.197 83.152 30.134 53.631-19.064 48.686-67.57 89.47-95.974 40.785-28.405 84.91-70.927 24.355-146.803-60.556-75.876-99.106-22.8-133.862-33.715z' />
                  <path d='M11.09-190.546c-28.022-8.762-56.835-23.376-86.334 3.317-29.498 26.693-48.044 50.076-36.068 80.33 11.976 30.255 60.862 11.41 75.066 38.451 14.204 27.04-17.005 51.582-3.55 75.647 13.455 24.066 23.8 39.49 67.041 24.188 43.24-15.301 39.253-54.236 72.136-77.035 32.882-22.8 68.458-56.932 19.635-117.836-48.823-60.904-79.904-18.3-107.926-27.062z' />
                  <path d='M14.12-176.738c-22.917-7.155-46.481-19.09-70.606 2.71-24.125 21.799-39.292 40.895-29.498 65.602 9.795 24.708 49.775 9.319 61.391 31.402C-12.976-54.941-38.5-34.9-27.496-15.245-16.492 4.408-8.031 17.005 27.332 4.508 62.695-7.988 59.435-39.785 86.327-58.405c26.892-18.62 55.987-46.494 16.058-96.232s-65.348-14.945-88.265-22.1z' />
                </g>
              </svg>
            </BannerImagesMobileOne>
            <BannerImagesMobileTwo>
              <svg xmlns='http://www.w3.org/2000/svg' width='124' height='330'>
                <g fill='none' fillRule='evenodd' stroke='#9E96C6'>
                  <path d='M185.248 17.983c-40.947-12.815-83.05-34.188-126.155 4.85C15.99 61.874-11.11 96.07 6.39 140.318c17.5 44.247 88.934 16.687 109.69 56.234 20.755 39.547-24.85 75.438-5.188 110.635 19.661 35.196 34.779 57.753 97.963 35.374 63.185-22.378 57.359-79.32 105.408-112.665 48.048-33.344 100.034-83.262 28.692-172.334-71.342-89.072-116.76-26.764-157.706-39.578z' />
                  <path d='M190.037 40.695c-33.343-10.405-67.629-27.759-102.73 3.94-35.101 31.697-57.17 59.464-42.918 95.392 14.25 35.927 72.42 13.55 89.322 45.66s-20.235 61.253-4.224 89.831c16.01 28.578 28.321 46.894 79.774 28.723 51.452-18.17 46.708-64.405 85.835-91.48 39.128-27.074 81.46-67.606 23.365-139.93-58.096-72.323-95.08-21.73-128.424-32.136z' />
                  <path d='M200.203 54.055c-26.936-8.47-54.632-22.596-82.988 3.207-28.355 25.803-46.182 48.407-34.67 77.653 11.512 29.246 58.503 11.03 72.157 37.169 13.653 26.139-16.347 49.862-3.413 73.126 12.934 23.263 22.878 38.173 64.443 23.381 41.564-14.791 37.732-52.428 69.34-74.468 31.607-22.04 65.804-55.034 18.874-113.907-46.93-58.874-76.807-17.69-103.743-26.16z' />
                  <path d='M210.233 71.814c-21.831-6.827-44.279-18.214-67.26 2.585-22.982 20.798-37.43 39.017-28.1 62.59 9.33 23.574 47.416 8.89 58.482 29.96 11.066 21.069-13.248 40.19-2.766 58.942 10.482 18.751 18.543 30.769 52.23 18.846 33.687-11.922 30.581-42.259 56.198-60.024 25.618-17.764 53.334-44.359 15.298-91.813-38.037-47.454-62.251-14.259-84.082-21.086z' />
                </g>
              </svg>
            </BannerImagesMobileTwo>
          </BannerImagesMobile>

          <BannerLine></BannerLine>
          <BannerTitle>Humanizing your insurance.</BannerTitle>
          <BannerText>
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that’s right for
            you. Ensure you and your loved ones are protected.
          </BannerText>
          <BannerButtonContainer>
            <BannerButton>View plans</BannerButton>
          </BannerButtonContainer>
        </TextBox>
        <BannerImagesDesktop>
          <BannerImagesDesktopOne>
            <svg xmlns='http://www.w3.org/2000/svg' width='195' height='504'>
              <g fill='none' fill-rule='evenodd' stroke='#9E96C6'>
                <path d='M-162.361 17.325c-75.703-23.693-153.543-63.212-233.235 8.97-79.693 72.182-129.794 135.414-97.44 217.227 32.354 81.814 164.422 30.855 202.794 103.977 38.373 73.122-45.94 139.485-9.591 204.563 36.35 65.078 64.3 106.787 181.115 65.409C-1.902 576.092-12.673 470.807 76.16 409.153c88.833-61.654 184.944-153.953 53.046-318.647S-86.659 41.02-162.36 17.326z' />
                <path d='M-152.895 55.249c-61.583-19.24-124.905-51.33-189.734 7.283-64.828 58.614-105.585 109.959-79.266 176.393 26.32 66.434 133.755 25.055 164.971 84.43 31.216 59.377-37.372 113.266-7.802 166.11 29.57 52.845 52.306 86.713 147.334 53.113 95.028-33.6 86.267-119.094 158.53-169.158 72.265-50.064 150.45-125.012 43.153-258.747S-91.312 74.489-152.895 55.249z' />
                <path d='M-135.188 80.417C-185.15 64.72-236.522 38.535-289.117 86.36c-52.594 47.825-85.66 89.72-64.307 143.926 21.353 54.206 108.513 20.443 133.838 68.89 25.325 48.448-30.32 92.418-6.33 135.536 23.99 43.117 42.436 70.752 119.531 43.336 77.095-27.415 69.987-97.173 128.614-138.022 58.627-40.85 122.058-102.003 35.009-211.122-87.049-109.12-142.465-32.788-192.426-48.487z' />
                <path d='M-116.684 111.184c-40.295-12.596-81.728-33.603-124.147 4.768-42.419 38.371-69.087 71.984-51.865 115.475 17.221 43.491 87.518 16.402 107.943 55.273 20.425 38.87-24.453 74.148-5.105 108.743s34.225 56.767 96.404 34.77c62.179-21.996 56.446-77.965 103.73-110.739 47.284-32.774 98.442-81.839 28.236-169.388-70.207-87.55-114.901-26.307-155.196-38.902z' />
                <path d='M-111.917 131.046c-32.91-10.295-66.749-27.467-101.393 3.897-34.643 31.365-56.424 58.84-42.358 94.389 14.065 35.549 71.477 13.407 88.158 45.179 16.682 31.772-19.971 60.609-4.17 88.886 15.803 28.277 27.953 46.4 78.735 28.42 50.782-17.979 46.1-63.727 84.718-90.516 38.617-26.79 80.398-66.895 23.06-138.457-57.339-71.562-93.841-21.503-126.75-31.798z' />
                <path d='M-102.775 145.406c-26.718-8.36-54.191-22.305-82.318 3.165-28.127 25.47-45.81 47.78-34.39 76.649 11.419 28.868 58.03 10.887 71.574 36.688 13.544 25.8-16.214 49.217-3.385 72.18 12.83 22.963 22.694 37.68 63.923 23.08 41.229-14.6 37.428-51.75 68.78-73.505C12.762 261.908 46.684 229.34.132 171.228c-46.553-58.112-76.188-17.462-102.907-25.822z' />
              </g>
            </svg>
          </BannerImagesDesktopOne>
          <BannerImagesDesktopTwo>
            <svg xmlns='http://www.w3.org/2000/svg' width='436' height='593'>
              <g fill='none' fill-rule='evenodd' stroke='#96A9C6'>
                <path d='M341.639-24.675c-75.703-23.693-153.543-63.212-233.235 8.97C28.71 56.477-21.39 119.709 10.964 201.522c32.354 81.814 164.422 30.855 202.794 103.977 38.373 73.122-45.94 139.485-9.591 204.563 36.35 65.078 64.3 106.787 181.115 65.409 116.816-41.379 106.045-146.664 194.878-208.318 88.833-61.654 184.944-153.953 53.046-318.647S417.341-.98 341.64-24.674z' />
                <path d='M351.105 13.249c-61.583-19.24-124.905-51.33-189.734 7.283C96.543 79.146 55.786 130.491 82.105 196.925c26.32 66.434 133.755 25.055 164.971 84.43 31.216 59.377-37.372 113.266-7.802 166.11 29.57 52.845 52.306 86.713 147.334 53.113 95.028-33.6 86.267-119.094 158.53-169.158 72.265-50.064 150.45-125.012 43.153-258.747S412.688 32.489 351.105 13.249z' />
                <path d='M368.812 38.417C318.85 22.72 267.478-3.465 214.883 44.36c-52.594 47.825-85.66 89.72-64.307 143.926 21.353 54.206 108.513 20.443 133.838 68.89 25.325 48.448-30.32 92.418-6.33 135.536 23.99 43.117 42.436 70.752 119.531 43.336 77.095-27.415 69.987-97.173 128.614-138.022 58.627-40.85 122.058-102.003 35.009-211.122-87.049-109.12-142.465-32.788-192.426-48.487z' />
                <path d='M387.316 69.184c-40.295-12.596-81.728-33.603-124.147 4.768-42.419 38.371-69.087 71.984-51.865 115.475 17.221 43.491 87.518 16.402 107.943 55.273 20.425 38.87-24.453 74.148-5.105 108.743s34.225 56.767 96.404 34.77c62.179-21.996 56.446-77.965 103.73-110.739 47.284-32.774 98.442-81.839 28.236-169.388-70.207-87.55-114.901-26.307-155.196-38.902z' />
                <path d='M392.083 89.046c-32.91-10.295-66.749-27.467-101.393 3.897-34.643 31.365-56.424 58.84-42.358 94.389 14.065 35.549 71.477 13.407 88.158 45.179 16.682 31.772-19.971 60.609-4.17 88.886 15.803 28.277 27.953 46.4 78.735 28.42 50.782-17.979 46.1-63.727 84.718-90.516 38.617-26.79 80.398-66.895 23.06-138.457-57.339-71.562-93.841-21.503-126.75-31.798z' />
                <path d='M401.225 103.406c-26.718-8.36-54.191-22.305-82.318 3.165-28.127 25.47-45.81 47.78-34.39 76.649 11.419 28.868 58.03 10.887 71.574 36.688 13.544 25.8-16.214 49.217-3.385 72.18 12.83 22.963 22.694 37.68 63.923 23.08 41.229-14.6 37.428-51.75 68.78-73.505 31.353-21.755 65.275-54.323 18.723-112.435-46.553-58.112-76.188-17.462-102.907-25.822z' />
              </g>
            </svg>
          </BannerImagesDesktopTwo>
        </BannerImagesDesktop>
      </Banner>
      <Mid>
        <h2>We're different</h2>
        <h3>Snappy Process</h3>
        <p>
          Our application process can be completed in minutes, not hours. Don’t
          get stuck filling in tedious forms.
        </p>
        <h3>Affordable Prices</h3>
        <p>
          We don’t want you worrying about high monthly costs. Our prices may be
          low, but we still offer the best coverage possible.
        </p>
        <h3>People First</h3>
        <p>
          Our plans aren’t full of conditions and clauses to prevent payouts. We
          make sure you’re covered when you need it.
        </p>
      </Mid>
      <Bottom>
        <p>Find out more about how we work</p>
        <button>How we work</button>
      </Bottom>
    </Container>
  );
};

export default Body;
