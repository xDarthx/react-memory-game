import { useState, useEffect } from 'react';
import './App.css';

const images = 
[
  { src:"https://media.giphy.com/media/Cmr1OMJ2FN0B2/giphy.gif?cid=82a1493bl70rg39vahfy8okqxkes0pf34a272jxpo9p5pfqn&ep=v1_gifs_trending&rid=giphy.gif&ct=g", id:"0"},
  { src:"https://media.giphy.com/media/GRPy8MKag9U1U88hzY/giphy.gif?cid=82a1493b9w2hcrne9tbrw2kk3h4rnnvwzmjy6s07rsi2c0zg&ep=v1_gifs_trending&rid=giphy.gif&ct=g", id:"1"},
  { src:"https://media.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy.gif?cid=82a1493b9w2hcrne9tbrw2kk3h4rnnvwzmjy6s07rsi2c0zg&ep=v1_gifs_trending&rid=giphy.gif&ct=g", id:"2"},
  { src:"https://media.giphy.com/media/bcKmIWkUMCjVm/giphy.gif?cid=790b7611g60y8rr27hw72vcd0j11rb3pjn00sgvvpshjkbjl&ep=v1_gifs_trending&rid=giphy.gif&ct=g", id:"3"},
  { src:"https://media.giphy.com/media/2eLAwdushm3cI/giphy.gif?cid=82a1493br393u5lbsoqa65oqyokww7a6p9w4wwmij8sruvlu&ep=v1_gifs_trending&rid=giphy.gif&ct=g", id:"4"},
  { src:"https://media.giphy.com/media/MWSRkVoNaC30A/giphy.gif?cid=82a1493bgokeepvi3dekbxtdckadcekam614ygbzkppofo56&ep=v1_gifs_trending&rid=giphy.gif&ct=g", id:"5"},
  { src:"https://media.giphy.com/media/Z9b1fsq2P9RQXnfZgZ/giphy.gif?cid=82a1493bevfxqeehd3drt2b6dbgy19n9vh5vi59jlth1m7n0&ep=v1_gifs_trending&rid=giphy.gif&ct=g", id:"6"},
  { src:"https://media.giphy.com/media/PfHrNe1cSKAjC/giphy.gif?cid=82a1493b60niyuna5sahayx4tyzdkumwhiyyh0t83uh8evdb&ep=v1_gifs_trending&rid=giphy.gif&ct=g", id:"7"},
  { src:"https://media.giphy.com/media/oC5V6VFUiwPjjMN4Xe/giphy.gif?cid=82a1493b4ofsp50t6y5ue1f7r3dw1fm3gcmrvzt2n0tjc2x6&ep=v1_gifs_trending&rid=giphy.gif&ct=g", id:"8"},
  { src:"https://media.giphy.com/media/rlkpAmX3gaLWE/giphy.gif?cid=82a1493bfj1m8w4kmqiekuplfxmd72o2ndtymfkda4loq4cq&ep=v1_gifs_trending&rid=giphy.gif&ct=g", id:"9"},
  { src:"https://media.giphy.com/media/3o7aCV2Be0Cfk4H8nC/giphy.gif?cid=82a1493b8vnmkv3011ypw0no4wjv46pcj84pp89jpd5goomn&ep=v1_gifs_trending&rid=giphy.gif&ct=g", id:"10"},
  { src:"https://media.giphy.com/media/rYF2P0P5RWw4Jz0x3L/giphy.gif?cid=82a1493b1309i4n6gfo2am16apis2h13szax4z8uazv2eu6z&ep=v1_gifs_trending&rid=giphy.gif&ct=g", id:"11"},
  { src:"https://media.giphy.com/media/EEq4P6RNIyb04/giphy.gif?cid=82a1493bevfxqeehd3drt2b6dbgy19n9vh5vi59jlth1m7n0&ep=v1_gifs_trending&rid=giphy.gif&ct=g", id:"12"},
  { src:"https://media.giphy.com/media/P7yvNPkWttcQg/giphy.gif?cid=82a1493bl70rg39vahfy8okqxkes0pf34a272jxpo9p5pfqn&ep=v1_gifs_trending&rid=giphy.gif&ct=g", id:"13"},
  { src:"https://media.giphy.com/media/26FPzgftlRfgwkEw0/giphy.gif?cid=82a1493bl70rg39vahfy8okqxkes0pf34a272jxpo9p5pfqn&ep=v1_gifs_trending&rid=giphy.gif&ct=g", id:"14"},
  { src:"https://media.giphy.com/media/IThjAlJnD9WNO/giphy.gif?cid=82a1493bmjswesqwynfg70jz8th9pynapmwwf24wjp0lkxun&ep=v1_gifs_trending&rid=giphy.gif&ct=g", id:"15"}
];

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function Card({ image }) {
  return (
    <div className='card-body'>
      <div className='card'>
        <img id={image.id} src={image.src} alt="GIF" />
      </div>
    </div>
  );
}

function WorldTime({ timezone = "UTC" }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval); 
  }, []);

  const formattedTime = time.toLocaleTimeString("en-US", { timeZone: timezone });

  return (
    <div>
      <h1>World Clock</h1>
      <p>{formattedTime}</p>
    </div>
  );
}

function App() {
  const [shuffledImages, setShuffledImages] = useState([]);

  useEffect(() => {
    setShuffledImages(shuffleArray([...images])); // Shuffle images on mount
  }, []);

  return (
    <>
      <WorldTime timezone="America/New_York" /> {/* Pass timezone as a prop */}
      <hr />
      <div className='score-box'>
        <h1 id='high-score'>High Score: </h1>
        <h1 id="score">Current Score: </h1> 
      </div>
      <div className='grid-box'>
        {shuffledImages.slice(0, 8).map((image) => (
          <Card key={image.id} image={image} />
        ))}
      </div>
    </>
  );
}

export default App
