import React from 'react';
import {useSelector} from "react-redux";

function Profile() {

    const loggedInUser = useSelector(state => state.loggedInUser);


  return (
    <>
    {
        loggedInUser && <section className="py-16">
        <div className="w-full lg:w-4/12 px-4 mx-auto">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
            <div className="px-6">
            <div className="flex flex-wrap justify-center">
                <div className="w-full px-4 flex justify-center">
                <div className="relative w-[150px] h-[150px]">
                    <img 
                    alt="profile" 
                    src={loggedInUser.profilePic?.url} 
                    className="shadow-xl  rounded-full align-middle border-none absolute left-[42%] w-[150px] h-[150px] -m-16 -ml-20 lg:-ml-16 "/>
                </div>
                </div>
                <div className="w-full px-4 text-center">
                <div className="flex justify-center py-4 lg:pt-4 pt-8">
                    <div className="mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        22
                    </span>
                    <span className="text-sm text-blueGray-400">Friends</span>
                    </div>
                    <div className="mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        10
                    </span>
                    <span className="text-sm text-blueGray-400">Photos</span>
                    </div>
                    <div className="lg:mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        89
                    </span>
                    <span className="text-sm text-blueGray-400">Comments</span>
                    </div>
                </div>
                </div>
            </div>
            <div className="text-center mt-12">
                <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                {loggedInUser.name}
                </h3>
                <div className="mb-2 text-blueGray-600 mt-10">
                <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                Solution Manager - Creative Tim Officer
                </div>
                <div className="mb-2 text-blueGray-600">
                <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                University of Computer Science
                </div>
            </div>
            <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-9/12 px-4">
                    <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                    An artist of considerable range, Jenna the name taken
                    by Melbourne-raised, Brooklyn-based Nick Murphy
                    writes.
                    </p>
                    <a href="/" className="font-normal text-pink-500">
                    Show more
                    </a>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
      </section> 
    }
      
    </>
  )
}

export default Profile