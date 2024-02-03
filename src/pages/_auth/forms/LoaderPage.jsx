import React from "react";
import PreLoader from "../../../components/PreLoader";
import logo from "../../../assets/dj-white.png";
// import PreLoader from '../components/PreLoader'
import PropTypes from 'prop-types';
import { Button, buttonClasses } from '@mui/base/Button';
import { styled } from '@mui/system';

const LoaderPage = () => {
  return (
    <>
      <div className=" bg-gray-900 w-full h-screen ">
        <div className=" flex w-full text-right text-white font-sans">
          <div className="flex ">

          <img src={logo} alt="nature image" />
          </div>
          
          <div className="flex-col">
          <div className="flex text-2xl mt-40">
            Elevate your career with the right job.
          </div>
          <div className="flex align-middle text-5xl">
            Your Future, Your Choice. 
          </div>
          </div>
          
        </div>

        <PreLoader />
      </div>
    </>
    );


  
};

const ButtonRoot = React.forwardRef(function ButtonRoot(props, ref) {
  const { children, } = props;
  return (
    <svg width="150" height="50" ref={ref}>
      <polygon points="0,50 0,0 150,0 150,50" className="bg" />
      <polygon points="0,50 0,0 150,0 150,50" className="borderEffect" />
      <foreignObject x="0" y="0" width="150" height="50">
        <div className="content">{children}</div>
      </foreignObject>
    </svg>
  );
});

ButtonRoot.propTypes = {
  children: PropTypes.node,
};

const SvgButton = React.forwardRef(function SvgButton(props, ref) {
  return <Button {...props} slots={{ root: CustomButtonRoot }} ref={ref} />;
});

function UnstyledButtonCustom() {
  return <SvgButton>Button</SvgButton>;
}

const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#99CCF3',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E6',
  700: '#0059B3',
  800: '#004C99',
  900: '#003A75',
};

const CustomButtonRoot = styled(ButtonRoot)(
  ({ theme }) => `
  overflow: visible;
  cursor: pointer;
  --main-color: ${theme.palette.mode === 'light' ? blue[600] : blue[200]};
  --hover-color: ${theme.palette.mode === 'light' ? blue[50] : blue[900]};
  --active-color: ${theme.palette.mode === 'light' ? blue[100] : blue[800]};

  & polygon {
    fill: transparent;
    transition: all 800ms ease;
    pointer-events: none;
  }

  & .bg {
    stroke: var(--main-color);
    stroke-width: 1;
    filter: drop-shadow(0 4px 16px rgba(0, 0, 0, 0.1));
    fill: transparent;
  }

  & .borderEffect {
    stroke: var(--main-color);
    stroke-width: 2;
    stroke-dasharray: 120 600;
    stroke-dashoffset: 120;
    fill: transparent;
  }

  &:hover,
  &.${buttonClasses.focusVisible} {
    .borderEffect {
      stroke-dashoffset: -600;
    }

    .bg {
      fill: var(--hover-color);
    }
  }

  &:focus,
  &.${buttonClasses.focusVisible} {
    outline: 2px solid ${theme.palette.mode === 'dark' ? blue[700] : blue[200]};
    outline-offset: 2px;
  }

  &.${buttonClasses.active} {
    & .bg {
      fill: var(--active-color);
      transition: fill 150ms ease-out;
    }
  }

  & foreignObject {
    pointer-events: none;

    & .content {
      font-size: 0.875rem;
      font-family: 'IBM Plex Sans', sans-serif;
      font-weight: 600;
      line-height: 1.5;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--main-color);
    }

    & svg {
      margin: 0 4px;
    }
  }`,
);
export default LoaderPage;
