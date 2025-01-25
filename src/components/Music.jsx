import { motion } from 'framer-motion';
import { FaPlay, FaPause } from 'react-icons/fa';
import { useState, useRef } from 'react';
import logo from '../assets/logo.jpg';

// Import image and audio files
import dasedurinphoto from '../assets/dase_durin.jpg';
import mawilaphoto from '../assets/mawila.jpg';
import madihaphoto from '../assets/madiha.jpg';
import nethmanemaphoto from '../assets/nethmanema.jpg';
import numbahaphoto from '../assets/numbahaphoto.jpg';

import ma_diha from '../assets/maa-diha.mp3';
import nethmanema from '../assets/neth-manema.mp3';
import dasedurin from '../assets/dase-durin.mp3';
import mawila from '../assets/mawila.mp3';
import numbaha from '../assets/numbaha.mp3';

const Music = () => {
  const [playing, setPlaying] = useState(null);
  const [progress, setProgress] = useState({});
  const audioRefs = useRef({});

  const tracks = [
    {
      id: 1,
      title: "Ma Diha",
      duration: "3:12",
      audioUrl: ma_diha,
      image: madihaphoto,
      isNew: true, // Mark this as a newly released track
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
    const newTime = (event.nativeEvent.offsetX / progressBar.offsetWidth) * audio.duration;
    audio.currentTime = newTime;
  };

  const newRelease = tracks.find((track) => track.isNew);
  const otherTracks = tracks.filter((track) => !track.isNew);

  return (
    <div
      name="music"
      className="relative min-h-screen w-full bg-gradient-to-b from-primary to-secondary py-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-accent rounded-full filter blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-accent-light rounded-full filter blur-[100px] animate-pulse-slow delay-1000"></div>
      </div>

      {/* Music Section */}
      <div className="relative max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="pb-12 text-center"
        >
          <h2 className="text-5xl font-bold text-white mb-4">Latest Tracks</h2>
          <p className="text-gray-300">Experience the fusion of cultures through sound</p>
        </motion.div>

        {/* Newly Released Track */}
        {newRelease && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative bg-gray-800/90 glass-effect rounded-xl p-6 mb-8 mx-auto max-w-sm shadow-lg"
          >
            {/* New Release Badge */}
            <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
              New Release
            </div>

            <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg mb-4">
              <img
                src={newRelease.image || logo}
                alt={newRelease.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => handlePlayPause(newRelease.id)}
                className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-accent to-accent-light rounded-full text-white hover:scale-110 transition-transform duration-200"
              >
                {playing === newRelease.id ? <FaPause /> : <FaPlay />}
              </button>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 text-center">
              {newRelease.title}
            </h3>
            <p className="text-gray-300 text-sm mb-3 text-center">
              Duration: {newRelease.duration}
            </p>

            {/* Audio Player */}
            <audio
              ref={(el) => (audioRefs.current[newRelease.id] = el)}
              src={newRelease.audioUrl}
              onTimeUpdate={() => handleTimeUpdate(newRelease.id)}
            ></audio>

            {/* Progress Bar */}
            <div
              className="mt-3 w-full bg-gray-700/30 rounded-full h-1"
              onClick={(event) => handleSeek(newRelease.id, event)}
            >
              <div
                className="bg-gradient-to-r from-accent to-accent-light h-1 rounded-full transition-all duration-200"
                style={{ width: `${progress[newRelease.id] || 0}%` }}
              ></div>
            </div>
          </motion.div>
        )}

        {/* Other Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {otherTracks.map(({ id, title, duration, audioUrl, image }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`glass-effect bg-gray-800/70 rounded-2xl p-6 transition-all duration-300 ${
                playing === id ? "shadow-lg shadow-accent/50" : "hover:shadow-md hover:shadow-accent/20"
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
                  <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
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
