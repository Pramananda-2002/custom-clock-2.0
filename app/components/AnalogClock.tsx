"use client";
import React, { useEffect, useRef } from "react";

type Props = {};

function Clock({}: Props) {
  const clockRef = useRef<HTMLCanvasElement>(null);
  const secRef = useRef<HTMLDivElement>(null);
  const minRef = useRef<HTMLDivElement>(null);
  const semihourRef = useRef<HTMLDivElement>(null);
  const hourRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateClock = () => {
      const date = new Date();
      const milliSec = date.getMilliseconds();
      const sec = date.getSeconds();
      const min = date.getMinutes();
      const hour = date.getHours();
      const total = (hour * 60 * 60 *1000 + min*60 *1000 + sec + milliSec)/1000;
      const TOTAL = 86400;
       

      if (secRef.current) {
        secRef.current.style.transform = `rotate(${
            
          (sec+ milliSec/1000) * 360/5
        }deg)`;
      }
      if (minRef.current) {
        minRef.current.style.transform = `rotate(${
          ((min+ (sec+ milliSec/1000)/60 )%10) *36
        }deg)`;
      }
      if (semihourRef.current) {
        semihourRef.current.style.transform = `rotate(${
          ((hour+ min/60) % 4) *60
        }deg)`;
      }
      if (hourRef.current) {
        hourRef.current.style.transform = `rotate(${
          (total/TOTAL) *360
        }deg)`;
      }
      requestAnimationFrame(updateClock);
    };
    updateClock();
  }, []);
  return (
    <div className="flex bg-teal-100 h-[400px] w-[400px] border-none relative ">
      {/* <div
        ref={secRef}
        className="h-full w-1 bg-blue-600 absolute left-1/2"
      ></div> */}
      <div className="flex h-1/2 w-full bg-green-200 justify-center ">
        <div
          ref={secRef}
          className=" absolute h-[180px] w-1 bg-red-600 mt-[20px] origin-bottom"
        ></div>
        <div
          ref={minRef}
          className=" absolute h-[150px] w-1 bg-green-600 mt-[50px] origin-bottom"
        ></div>
        <div
          ref={semihourRef}
          className=" absolute h-[120px] w-1 bg-blue-600 mt-[80px] origin-bottom"
        ></div>
        <div
          ref={hourRef}
          className=" absolute h-[90px] w-1 bg-black mt-[110px] origin-bottom"
        ></div>
      </div>
      <div className="w-4 h-4 bg-gray-900 absolute m-[192px]"></div>
      <div className=" absolute mt-[168px] ml-[196px] ">
        {[...Array(24)].map((_, i) => (
          <div
            key={i}
            className="absolute text-center bg-red-200 w-5 h-5"
            style={{
              transform: `rotate(${i * 15 -1}deg) translateY(-300px)`,
              transformOrigin: "center bottom",
            }}
          >
            {i }
          </div>
        ))}
      </div>
      <div className=" absolute mt-[176px] ml-[194px]">
        {[...Array(24)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[6px] h-[24px] bg-black origin-bottom"
            style={{ transform: `rotate(${i * 15}deg) translateY(-260px)` }}
          ></div>
        ))}
      </div>
      <div className=" absolute mt-[168px] ml-[196px]">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[4px] h-[32px] bg-blue-600 origin-bottom"
            style={{ transform: `rotate(${i * 60 }deg) translateY(-220px)` }}
          ></div>
        ))}
      </div>
      <div className=" absolute mt-[160px] ml-[198px]">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[2px] h-[40px] bg-green-600 origin-bottom"
            style={{ transform: `rotate(${i * 36}deg) translateY(-180px)` }}
          ></div>
        ))}
      </div>
      <div className=" absolute mt-[192px] ml-[192px]">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 bg-red-600 origin-bottom"
            style={{ transform: `rotate(${i * 72}deg) translateY(-120px)` }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Clock;
