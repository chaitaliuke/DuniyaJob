import React from "react";
import PreLoader from "../../../components/PreLoader";
import logo from "../../../assets/dj-white.png";
// import PreLoader from '../components/PreLoader'
import Button from "@mui/material/Button";
// import {navigate} from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const LoaderPage = () => {
  const navigate = useNavigate();
  const navigateToDuniya = () => {
    navigate('/Duniya');
  };
  
  return (
    <>
      <div className=" bg-gray-900 w-full h-screen ">
        <div className=" flex w-full text-right text-white font-mono">
          <div className="flex ">
            <img src={logo} alt="image" />
          </div>

          <div className="flex-col ">
            <div className="flex text-2xl mt-40">
              Elevate your career with the right job.
            </div>
            <div className="flex align-middle text-5xl">
              Your Future, Your Choice.
            </div>

            <div className=" mt-28">
              <Button variant="contained" onClick={navigateToDuniya}>
                Get Started
              </Button>
            </div>
          </div>
        </div>

        <PreLoader />
      </div>
    </>
  );
};

export default LoaderPage;
