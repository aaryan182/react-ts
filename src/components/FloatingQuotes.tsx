import React, { useEffect, useState, useMemo } from 'react';

const FloatingQuotes: React.FC = () => {
    const quotes = useMemo(() => [
        "Time management is life management.",
        "The key is in not spending time, but in investing it.",
        "Time is what we want most, but what we use worst.",
        "The bad news is time flies. The good news is you’re the pilot.",
        "Lost time is never found again.",
        "Time is a created thing. To say 'I don't have time,' is like saying, 'I don't want to.'",
        "The future is something which everyone reaches at the rate of sixty minutes an hour, whatever he does, whoever he is.",
        "Your time is limited, so don't waste it living someone else's life.",
        "Time is more valuable than money. You can get more money, but you cannot get more time.",
        "The trouble is, you think you have time.",
        "Time flies over us, but leaves its shadow behind.",
        "To achieve great things, two things are needed: a plan and not quite enough time."
    ], []);
    

  const [quote, setQuote] = useState(quotes[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }, 5000); 

    return () => clearInterval(interval);
  }, [quotes]);

  return (
    <div className="fixed top-0 w-full text-center p-4 bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-lg">
      <p className="animate-bounce text-lg font-semibold">{quote}</p>
    </div>
  );
};

export default FloatingQuotes;
