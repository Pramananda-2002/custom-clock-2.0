"use client";
import React, { useEffect, useRef, useState } from "react";

type Props = {};

const MyClock = (props: Props) => {
  const secRef = useRef<HTMLDivElement>(null);
  const minRef = useRef<HTMLDivElement>(null);
  const semiHourRef = useRef<HTMLDivElement>(null);
  const hourRef = useRef<HTMLDivElement>(null);
  const [time, setTime] = useState({
    hour: String(new Date().getHours()).padStart(2, "0"),
    min: String(new Date().getMinutes()).padStart(2, "0"),
    sec: String(new Date().getSeconds()).padStart(2, "0"),
  });

  useEffect(() => {
    const update = () => {
      const date = new Date();
      setTime({
        hour: String(date.getHours()).padStart(2, "0"),
        min: String(date.getMinutes()).padStart(2, "0"),
        sec: String(date.getSeconds()).padStart(2, "0"),
      });
      const sec = date.getSeconds();
      const min = date.getMinutes();
      const hour = date.getHours();
      const mSec = date.getMilliseconds();

      if (secRef.current) {
        secRef.current.style.transform = `rotate(${
          ((sec + mSec / 1000) * 360) / 5
        }deg)`;
      }
      if (minRef.current) {
        minRef.current.style.transform = `rotate(${
          ((min + (sec + mSec / 1000) / 60) % 10) * 36
        }deg)`;
      }
      if (semiHourRef.current) {
        semiHourRef.current.style.transform = `rotate(${
          (((hour + min / 60) % 4) * 360) / 6
        }deg)`;
      }
      if (hourRef.current) {
        hourRef.current.style.transform = `rotate(${
          (hour + min / 60) * 15
        }deg)`;
      }

      requestAnimationFrame(update);
    };
    update();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex h-[730px] w-[730px] bg-blue-900 shadow-md shadow-blue-400 rounded-t-full items-center justify-center">
        <div className="flex h-[700px] w-[700px] bg-black shadow-md rounded-full items-center justify-center">
          <div className="flex h-[660px] w-[660px] bg-blue-500 shadow-md rounded-full justify-center items-center">
            <div className="w-[640px] h-[640px] absolute bg-blue-800 rounded-full flex justify-center items-center">
              <div className="w-[600px] h-[600px] bg-blue-500 rounded-full flex justify-center items-center">
                <div className="w-[570px] h-[570px] bg-blue-800 rounded-full flex justify-center items-center">
                    <div className="w-[510px] h-[510px] bg-blue-500 rounded-full flex justify-center items-center">
                        <div className="w-[450px] h-[450px] bg-blue-700 rounded-full flex justify-center items-center">
                            <div className="w-[390px] h-[390px] bg-blue-400 rounded-full flex justify-center items-center">

                            </div>
                        </div>

                    </div>
                </div>
              </div>
            </div>
            <div className="h-[600px] w-[600px] flex justify-center">
              <div
                ref={secRef}
                className=" absolute w-[40px] h-[300px] origin-bottom flex justify-center items-end"
              >
                <div className="w-[20px] h-[150px] bg-black rounded-md"></div>
              </div>
              <div
                ref={minRef}
                className=" absolute w-[40px] h-[300px] origin-bottom flex justify-center items-end"
              >
                <div className="w-[10px] h-[200px] bg-black rounded-md"></div>
              </div>
              <div
                ref={semiHourRef}
                className=" absolute w-[40px] h-[300px]  origin-bottom flex justify-center items-end"
              >
                <div className="w-[10px] h-[260px] bg-black rounded-md"></div>
              </div>
              <div
                ref={hourRef}
                className=" absolute w-[40px] h-[300px] origin-bottom flex justify-center items-end"
              >
                <div className="w-[10px] h-[300px] bg-black rounded-md"></div>
              </div>
              <div className=" absolute w-10 h-10 bg-blue-900 mt-[280px] rounded-full"></div>

              <div className="w-full h-full flex items-center justify-center">
                {[...Array(24)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-[20px] h-[6px] bg-black "
                    style={{
                      transform: `rotate(${i * 15}deg) translate(310px)`,
                    }}
                  ></div>
                ))}
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-[30px] h-[5px] bg-black "
                    style={{
                      transform: `rotate(${i * 60 - 30}deg) translate(270px)`,
                    }}
                  ></div>
                ))}
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-[30px] h-[4px] bg-black "
                    style={{
                      transform: `rotate(${i * 36 - 18}deg) translate(210px)`,
                    }}
                  ></div>
                ))}
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-[15px] h-[15px] bg-red-600 rounded-full shadow-md"
                    style={{
                      transform: `rotate(${i * 72 - 18}deg) translate(150px)`,
                    }}
                  ></div>
                ))}
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>

      {/* DIGITAL CLOCK  */}
      <div className="w-[730px] h-[100px] bg-blue-700 flex justify-center items-center">
      <div className="h-[70px] w-[200px] bg-blue-600 text-white flex items-center justify-center rounded-lg gap-4 p-4">
        <div className="flex bg-blue-800 w-10 h-10 items-center shadow-md rounded-lg justify-center">
          <div className="flex bg-blue-700 w-8 h-8 items-center justify-center ">
            <span className="font-semibold">
              <p>{time.hour}</p>
            </span>
          </div>
        </div>
        <div className="flex bg-blue-800 w-10 h-10 items-center shadow-md rounded-lg justify-center">
          <div className="flex bg-blue-700 w-8 h-8 items-center justify-center">
            <span className="font-semibold">
              <p>{time.min}</p>
            </span>
          </div>
        </div>
        <div className="flex bg-blue-800 w-10 h-10 items-center shadow-md rounded-lg justify-center">
          <div className="flex bg-blue-700 w-8 h-8 items-center justify-center">
            <span className="font-semibold">
              <p>{time.sec}</p>
            </span>
          </div>
        </div>
      </div>
      </div>

      
    </div>
  );
};

export default MyClock;
