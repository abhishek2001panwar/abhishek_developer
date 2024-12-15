"use client";
import React from "react";
import { PinContainer } from "../ui/3d-pin";

export default function fep() {
  return (
    <>
      <h1 className="text-4xl mb-10 text-center font-serif font-semibold text-black dark:text-white">
        Featured Projects
      </h1>
      <div className="flex flex-col justify-center gap-10">
        {/* E-Commerce Project */}
        <PinContainer
          title="/QuickBuy"
          href="https://github.com/abhishek2001panwar/QuickBuy"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[16rem] md:w-[20rem] h-[16rem] md:h-[20rem]">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
              E-Commerce Platform
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500">
                A full-stack e-commerce application with features like product
                search, cart management, and secure payments, built using MERN
                stack and deployed on AWS.
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-green-500 via-indigo-500 to-red-500" />
          </div>
        </PinContainer>

        {/* Connectify Job Portal */}
        <PinContainer
          title="/connectify"
          href="https://github.com/abhishek2001panwar/codsoft"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[16rem] md:w-[20rem] h-[16rem] md:h-[20rem]">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
              Connectify Job Portal
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500">
                A job portal platform connecting job seekers and employers,
                featuring secure authentication, job postings, advanced search,
                and real-time notifications. Built with React.js, Node.js, and
                MongoDB.
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-blue-500 via-cyan-500 to-green-500" />
          </div>
        </PinContainer>

        {/* Peer-to-Peer Communication */}
        <PinContainer
          title="/peer-to-peer"
          href="https://github.com/abhishek2001panwar/Peer2Peer"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[16rem] md:w-[20rem] h-[16rem] md:h-[20rem]">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
              Peer-to-Peer Communication
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500">
                A real-time peer-to-peer chat system enabling secure and
                efficient communication without centralized servers. Built using
                WebRTC and modern frontend frameworks.
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-purple-500 via-indigo-500 to-pink-500" />
          </div>
        </PinContainer>
      </div>
    </>
  );
}
