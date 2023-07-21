import React, { useState, useEffect } from 'react'

import { DisplaySurveys, Sidebar, Navbar, CustomButton } from '../components';

const Profile = () => {
  const [isLoading, setIsLoading] = useState(false);
  
  return (
     <>
      <div className=" mr-10 hidden sm:block md:block lg:block xl:block">
        <Sidebar />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar placeholder="Search for Surveys"/>

        <DisplaySurveys
          title="All SURVEYS"
          isLoading={isLoading}
          surveys={""}
        />
      </div>
      <div className='fixed right-4 top-[90vh]  sm:right-16 '>
        <CustomButton
          btnType="button"
          title={'Create a new Survey'}
          styles={'bg-[#8c6dfd] hover:bg-[#313549] hover:transition-all duration-700 hover:shadow-gray-400 shadow-md'}
        />
      </div>
    </>
  )
}

export default Profile