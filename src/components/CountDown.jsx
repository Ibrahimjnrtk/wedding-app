import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const targetDate = "2024-12-21T00:00:00";

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = new Date(targetDate) - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup the timer on component unmount
    return () => clearInterval(timer);
  }, [targetDate]);

  // Check if countdown is over
  const countdownEnded =
    !timeLeft.days && !timeLeft.hours && !timeLeft.minutes && !timeLeft.seconds;

  return (
    <div className="w-full rounded-md p-2">
      {countdownEnded ? (
        <h1>Countdown Ended!</h1>
      ) : (
        <div className="grid text-[#d48207] grid-cols-4 gap-1">
          <div className="flex flex-col justify-center items-center">
            <span className="font-bold text-3xl">{timeLeft.days || 0}</span>
            <span className="font-bold">Days</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="font-bold text-3xl">{timeLeft.hours || 0}</span>
            <span className="font-bold">Hours</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="font-bold text-3xl">{timeLeft.minutes || 0}</span>
            <span className="font-bold">Minutes</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="font-bold text-3xl">{timeLeft.seconds || 0}</span>
            <span className="font-bold">Seconds</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;
