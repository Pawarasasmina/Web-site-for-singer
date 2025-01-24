import { motion } from "framer-motion";
import { FaPlay, FaPause } from "react-icons/fa";
import { useState, useRef } from "react";
import logo from "../assets/logo.jpg";

// Import image and audio files
import dasedurinphoto from "../assets/dase_durin.jpg";
import mawilaphoto from "../assets/mawila.jpg";
import madihaphoto from "../assets/madiha.jpg";
import nethmanemaphoto from "../assets/nethmanema.jpg";
import numbahaphoto from "../assets/numbahaphoto.jpg";

import ma_diha from "../assets/maa-diha.mp3";
import nethmanema from "../assets/neth-manema.mp3";
import dasedurin from "../assets/dase-durin.mp3";
import mawila from "../assets/mawila.mp3";
import numbaha from "../assets/numbaha.mp3";

const Music = () => {
  const [activeTab, setActiveTab] = useState("Originals");
  const [playing, setPlaying] = useState(null);
  const [progress, setProgress] = useState({});
  const audioRefs = useRef({});

  const originals = [
    {
      id: 1,
      title: "Ma Diha",
      duration: "3:12",
      audioUrl: ma_diha,
      image: madihaphoto,
    },
    {
      id: 2,
      title: "Neth Manema",
      duration: "3:06",
      audioUrl: nethmanema,
      image: nethmanemaphoto,
    },
    {
      id: 3,
      title: "Dase Durin",
      duration: "2:35",
      audioUrl: dasedurin,
      image: dasedurinphoto,
    },
    {
      id: 4,
      title: "Mawila",
      duration: "3:53",
      audioUrl: mawila,
      image: mawilaphoto,
    },
    {
      id: 5,
      title: "NUmba Ha",
      duration: "2:38",
      audioUrl: numbaha,
      image: numbahaphoto,
    },
  ];

  const featurings = [
   
  ];

  const productions = [
   
  ];

  const tracks = {
    Originals: originals,
    Featurings: featurings,
    Productions: productions,
  };

  const handlePlayPause = (id) => {
    if (playing === id) {
      audioRefs.current[id].pause();
      setPlaying(null);
    } else {
      if (playing !== null) {
        audioRefs.current[playing].pause();
      }
      audioRefs.current[id].play();
      setPlaying(id);
    }
  };

  const handleTimeUpdate = (id) => {
    const audio = audioRefs.current[id];
    if (audio) {
      setProgress((prev) => ({
        ...prev,
        [id]: (audio.currentTime / audio.duration) * 100,
      }));
    }
  };

  const handleSeek = (id, event) => {
    const audio = audioRefs.current[id];
    const progressBar = event.target;
    const newTime =
      (event.nativeEvent.offsetX / progressBar.offsetWidth) * audio.duration;
    audio.currentTime = newTime;
  };

  return (
    <div
      name="music"
      className="relative min-h-screen w-full bg-gradient-to-b from-primary to-secondary py-20"
    >
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-white tracking-wide mb-2">
            Explore My Musical Journey
          </h1>
          <p className="text-lg text-gray-400">
            Originals, collaborations, and productions crafted with passion.
          </p>
        </motion.div>
        <div className="flex flex-col items-center justify-center pb-4">
  {/* For mobile view (small screens) */}
  <div className="grid grid-cols-2 gap-4 sm:hidden">
    {["Originals", "Featurings"].map((tab) => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`w-full px-6 py-2 text-lg font-semibold rounded-full ${
          activeTab === tab
            ? "bg-gradient-to-r from-accent to-accent-light text-white"
            : "bg-gray-700/30 text-gray-300 hover:bg-gray-700/50"
        } transition-all duration-200`}
      >
        {tab}
      </button>
    ))}
  </div>

  {/* For mobile view (small screens) - center the Productions button */}
  <div className="mt-4 flex justify-center sm:hidden">
    <button
      onClick={() => setActiveTab("Productions")}
      className={`w-full max-w-xs px-6 py-2 text-lg font-semibold rounded-full ${
        activeTab === "Productions"
          ? "bg-gradient-to-r from-accent to-accent-light text-white"
          : "bg-gray-700/30 text-gray-300 hover:bg-gray-700/50"
      } transition-all duration-200`}
    >
      Productions
    </button>
  </div>

  {/* For larger screens, display all buttons in one row */}
  <div className="hidden sm:flex sm:space-x-4 sm:space-y-0 sm:pb-4">
    {["Originals", "Featurings", "Productions"].map((tab) => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`px-6 py-2 text-lg font-semibold rounded-full ${
          activeTab === tab
            ? "bg-gradient-to-r from-accent to-accent-light text-white"
            : "bg-gray-700/30 text-gray-300 hover:bg-gray-700/50"
        } transition-all duration-200`}
      >
        {tab}
      </button>
    ))}
  </div>
</div>


        {/* Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tracks[activeTab].map(({ id, title, duration, audioUrl, image }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`glass-effect bg-gray-800/70 rounded-2xl p-6 transform transition-all duration-300 sm:max-w-xs ${
                playing === id
                  ? "shadow-lg shadow-accent/50"
                  : "hover:shadow-md hover:shadow-accent/20"
              }`}
            >
              <div className="flex items-center">
                <div className="w-24 h-24 mr-6 rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
                  <img
                    src={image || logo}
                    alt={title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {title}
                  </h3>
                  <p className="text-gray-300 text-sm">Duration: {duration}</p>
                </div>
                <button
                  onClick={() => handlePlayPause(id)}
                  className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-accent to-accent-light rounded-full text-white hover:scale-110 transition-transform duration-200"
                >
                  {playing === id ? <FaPause /> : <FaPlay />}
                </button>
              </div>

              {/* Audio Player */}
              <audio
                ref={(el) => (audioRefs.current[id] = el)}
                src={audioUrl}
                onTimeUpdate={() => handleTimeUpdate(id)}
              ></audio>

              {/* Progress Bar */}
              <div
                className="mt-4 w-full bg-gray-700/30 rounded-full h-1"
                onClick={(event) => handleSeek(id, event)}
              >
                <div
                  className="bg-gradient-to-r from-accent to-accent-light h-1 rounded-full transition-all duration-200"
                  style={{ width: `${progress[id] || 0}%` }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Music;
