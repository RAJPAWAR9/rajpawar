const BASE_FOLDER_2026 = "song/2026 music";
const BASE_FOLDER_90S = "song/2026 music/90s";

const playlist = {
  "Trending": [
    { title: "Aa Re Pritam Pyaare", artist: "Mamta Sharma, Sajid-Wajid", file: "Aa Re Pritam Pyaare" },
    { title: "Aapka Kya Hoga", artist: "Mika Singh, Sunidhi Chauhan", file: "Aapka Kya Hoga" },
    { title: "Apna Time Aayega", artist: "Ranveer Singh, DIVINE", file: "Apna Time Aayega - Ranveer Singh, DIVINE" },
    { title: "Badtameez Dil", artist: "Benny Dayal, Shefali Alvares", file: "Badtameez Dil - Benny Dayal, Shefali Alvares" },
    { title: "Balam Pichkari", artist: "Vishal Dadlani, Shalmali Kholgade", file: "Balam Pichkari" },
    { title: "Balma", artist: "Shriram Iyer, Shreya Ghoshal", file: "Balma - Shriram Iyer, Shreya Ghoshal" },
    { title: "Beedi", artist: "Sukhwinder Singh, Sunidhi Chauhan", file: "Beedi - Sukhwinder Singh, Sunidhi Chauhan" },
    { title: "Blue Eyes", artist: "Yo Yo Honey Singh", file: "Blue Eyes - Yo Yo Honey Singh" },
    { title: "Chaar Botal Vodka", artist: "Yo Yo Honey Singh", file: "Chaar Botal Vodka - Yo Yo Honey Singh" },
    { title: "Character Dheela", artist: "Neeraj Shridhar, Amrita Kak", file: "Character Dheela" },
    { title: "Chikni Chameli", artist: "Shreya Ghoshal", file: "Chikni Chameli - Shreya Ghoshal" },
    { title: "Chinta Ta Ta Chita Chita", artist: "Mika Singh, Wajid", file: "Chinta Ta Ta Chita Chita - Mika Singh, Wajid" },
    { title: "Dagabaaz Re", artist: "Rahat Fateh Ali Khan, Shreya Ghoshal", file: "Dagabaaz Re" },
    { title: "Desi Kalakaar", artist: "Yo Yo Honey Singh", file: "Desi Kalakaar - Yo Yo Honey Singh" },
    { title: "Dhinka Chika", artist: "Amrita Kak, Mika Singh", file: "Dhinka Chika - Amrita Kak, Mika Singh" },
    { title: "Dil Ka Jo Haal Hai", artist: "Abhijeet, Shreya Ghoshal", file: "Dil Ka Jo Haal Hai - Abhijeet, Shreya Ghoshal" },
    { title: "Dilliwaali Girlfriend", artist: "Sunidhi Chauhan, Arijit Singh", file: "Dilliwaali Girlfriend" },
    { title: "Fevicol Se", artist: "Mamta Sharma, Wajid", file: "Fevicol Se" },
    { title: "Ghagra", artist: "Vishal Dadlani, Rekha Bhardwaj", file: "Ghagra - Vishal Dadlani, Rekha Bhardwaj" },
    { title: "Gulabi Sadi", artist: "Sanju Rathod, G-SPXRK", file: "Gulabi Sadi - Sanju Rathod, G-SPXRK" },
    { title: "Hud Hud Dabangg", artist: "Sukhwinder Singh, Wajid", file: "Hud Hud Dabangg" },
    { title: "Hum Pyaar Karne", artist: "Shashwat Sachdev, Atsana", file: "Hum Pyaar Kame" },
    { title: "Jadoo Ki Jhappi", artist: "Mika Singh, Neha Kakkar", file: "Jadoo Ki Jhappi - Mika Singh, Neha Kakkar" },
    { title: "Jungle Hai", artist: "Kumar Sanu, Hema Sardesai", file: "Jungle Hai" },
    { title: "Lallati Bhandar", artist: "Ajay-Atul", file: "Lallati Bhandar - Ajay-Atul" },
    { title: "Love Dose", artist: "Yo Yo Honey Singh", file: "Love Dose - Yo Yo Honey Singh" },
    { title: "Lungi Dance", artist: "Yo Yo Honey Singh", file: "Lungi Dance - Yo Yo Honey Singh" },
    { title: "Maan Meri Jaan", artist: "King", file: "Maan Meri Jaan - King" },
    { title: "Mujhko Yaad Sataye", artist: "Himesh Reshammiya", file: "Mujhko Yaad Sataye" },
    { title: "Munni Badnaam", artist: "Mamta Sharma, Aishwarya", file: "Munni Badnaam" },
    { title: "Naal Nachna", artist: "Shashwat Sachdev, Atsana", file: "Naal Nachna" },
    { title: "Nusta Paisa", artist: "MC STAN", file: "Nusta Paisa - MC STAN" },
    { title: "One Two Three Four", artist: "Get on the Dance Floor", file: "One Two Three Four" },
    { title: "Party All Night", artist: "Yo Yo Honey Singh", file: "Party All Night - Yo Yo Honey Singh" },
    { title: "Shaky", artist: "Sanju Rathod", file: "Shaky - Sanju Rathod" },
    { title: "Shararat", artist: "Shashwat Sachdev, Madhubanti", file: "Shararat" },
    { title: "Tera Rastaa", artist: "Anusha Mani, Amitabh Bhattacharya", file: "Tera Rastaa" },
    { title: "Tere Liye", artist: "Atif Aslam", file: "Tere Liye - Atif Aslam" },
    { title: "Tinku Jiya", artist: "Mamta Sharma, Javed Ali", file: "Tinku Jiya" },
    { title: "Vazan", artist: "SAMBATA, Karan Kanchan", file: "Vazan" },
    { title: "Yeh Dil Deewana", artist: "Sonu Nigam, Hema Sardesai", file: "Yeh Dil Deewana" }
  ],
  "90s": [
    { title: "Aise Na Mujhe", artist: "Kishore Kumar", file: "Aise_Na_Mujhe" },
    { title: "Gulabi Ankhen", artist: "Mohd. Rafi", file: "gulabi aahken" },
    { title: "Kehdoon Tumhen", artist: "Kishore Kumar & Asha Bhosle", file: "Kehdoon_Tumhen" },
    { title: "Kiska Rasta Dekhe", artist: "Kishore Kumar", file: "Kiska_Rasta_Dekhe_" },
    { title: "Mehbooba Mehbooba", artist: "R.D. Burman", file: "Mehbooba Mehbooba" },
    { title: "Pal Bhar Ke Liye", artist: "Kishore Kumar & Asha Bhosle", file: "Pal_Bhar_Ke_Liye_" },
    { title: "Pal Pal Dil Ke Paas", artist: "Kishore Kumar", file: "Pal_Pal_Dil_Ke_Paas" },
    { title: "Yunhi Tum Mujhse", artist: "Mohd. Rafi & Lata Mangeshkar", file: "Yunhi_Tum_Mujhse" }
  ],
  "3D Audio": [
    { title: "Dil Ka Jo Haal Hai (3D)", artist: "Abhijeet, Shreya Ghoshal", file: "Dil Ka Jo Haal Hai - Abhijeet, Shreya Ghoshal" },
    { title: "Blue Eyes (3D Remaster)", artist: "Yo Yo Honey Singh", file: "Blue Eyes - Yo Yo Honey Singh" },
    { title: "Badtameez Dil (3D Experience)", artist: "Benny Dayal", file: "Badtameez Dil - Benny Dayal, Shefali Alvares" }
  ]
};

let currentCategory = "Trending";
let currentSongIndex = 0;
let crossfadeDuration = 10;
let isCrossfading = false;
let displayedList = [];

let activeAudio = new Audio();
let nextAudio = new Audio();

let globalVolume = 1;

let audioCtx;
let analyser;
let sourceNode;
let animationFrameId;

function buildUrl(category, fileName, extension) {
  const base = (category === "90s") ? BASE_FOLDER_90S : BASE_FOLDER_2026;
  const fullPath = `${base}/${fileName}${extension}`;
  return fullPath.split('/').map(part => encodeURIComponent(part)).join('/');
}

function getActiveList() {
  if (currentCategory === "All") {
    return [...playlist["Trending"], ...playlist["90s"], ...playlist["3D Audio"]];
  }
  return playlist[currentCategory] || playlist["Trending"];
}

function renderPlaylist(songsToRender = null) {
  const playlistView = document.getElementById('playlist-view');
  const trackCount = document.getElementById('track-count');
  displayedList = songsToRender || getActiveList();
  
  if (trackCount) trackCount.textContent = `${displayedList.length} Songs`;
  if (!playlistView) return;
  
  playlistView.innerHTML = '';

  displayedList.forEach((song, index) => {
    const item = document.createElement('div');
    const isActive = index === currentSongIndex;
    item.className = `song-item ${isActive ? 'active' : ''}`;

    item.innerHTML = `
      <div style="font-weight: 600; font-size: 13px; color: #fff;">${index + 1}. ${song.title}</div>
      <div style="font-size: 11px; color: #888; margin-top:2px;">${song.artist}</div>
    `;

    item.onclick = () => {
      currentSongIndex = index;
      isCrossfading = false;
      loadAndPlaySong(currentSongIndex);
    };

    playlistView.appendChild(item);
  });
}

function getSongFolderCategory(song) {
  if (playlist["90s"].some(s => s.title === song.title)) return "90s";
  return "Trending";
}

function loadAndPlaySong(index) {
  const list = displayedList.length > 0 ? displayedList : getActiveList();
  if (!list[index]) return;

  const song = list[index];

  document.getElementById('song-title').textContent = song.title;
  document.getElementById('artist-name').textContent = song.artist;
  document.getElementById('category-badge').textContent = `${currentCategory.toUpperCase()} HITS`;

  const folderCat = getSongFolderCategory(song);
  
  activeAudio.pause();
  activeAudio = new Audio();
  activeAudio.src = buildUrl(folderCat, song.file, '.m4a');
  activeAudio.volume = globalVolume;
  
  setupAudioEvents(activeAudio);
  
  const playPromise = activeAudio.play();
  if (playPromise !== undefined) {
    playPromise.then(() => {
      document.getElementById('play-btn').textContent = '❚❚';
      initAudioVisualizer(activeAudio);
    }).catch(() => {
      document.getElementById('play-btn').textContent = '▶';
    });
  }

  renderPlaylist(displayedList);
}

function triggerCrossfade() {
  if (isCrossfading) return;
  isCrossfading = true;

  const list = displayedList.length > 0 ? displayedList : getActiveList();
  let nextIndex = (currentSongIndex + 1) % list.length;
  const nextSong = list[nextIndex];
  if (!nextSong) return;

  const folderCat = getSongFolderCategory(nextSong);
  nextAudio = new Audio();
  nextAudio.src = buildUrl(folderCat, nextSong.file, '.m4a');
  nextAudio.volume = 0;

  nextAudio.play().then(() => {
    let fadeSteps = 20;
    let stepTime = (crossfadeDuration * 1000) / fadeSteps;
    let stepCount = 0;

    let fadeInterval = setInterval(() => {
      stepCount++;
      let progress = stepCount / fadeSteps;

      activeAudio.volume = Math.max(0, globalVolume * (1 - progress));
      nextAudio.volume = Math.min(globalVolume, globalVolume * progress);

      if (stepCount >= fadeSteps) {
        clearInterval(fadeInterval);
        activeAudio.pause();
        activeAudio = nextAudio;
        currentSongIndex = nextIndex;
        isCrossfading = false;

        document.getElementById('song-title').textContent = nextSong.title;
        document.getElementById('artist-name').textContent = nextSong.artist;
        setupAudioEvents(activeAudio);
        initAudioVisualizer(activeAudio);
        renderPlaylist(displayedList);
      }
    }, stepTime);
  }).catch(() => { isCrossfading = false; });
}

function setupAudioEvents(audioObj) {
  audioObj.addEventListener('timeupdate', () => {
    if (audioObj !== activeAudio) return;

    const progress = document.getElementById('progress');
    const currentTimeElem = document.getElementById('current-time');
    const durationElem = document.getElementById('total-duration');

    if (audioObj.duration) {
      const percent = (audioObj.currentTime / audioObj.duration) * 100;
      progress.style.width = `${percent}%`;
      currentTimeElem.textContent = formatTime(audioObj.currentTime);
      durationElem.textContent = formatTime(audioObj.duration);

      const timeLeft = audioObj.duration - audioObj.currentTime;
      if (timeLeft <= crossfadeDuration && crossfadeDuration > 0 && !isCrossfading) {
        triggerCrossfade();
      }
    }
  });

  audioObj.addEventListener('ended', () => {
    if (!isCrossfading) {
      const list = displayedList.length > 0 ? displayedList : getActiveList();
      currentSongIndex = (currentSongIndex + 1) % list.length;
      loadAndPlaySong(currentSongIndex);
    }
  });
}

function formatTime(seconds) {
  if (isNaN(seconds)) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

function initAudioVisualizer(audioElement) {
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      analyser = audioCtx.createAnalyser();
      analyser.fftSize = 64;
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    if (sourceNode) sourceNode.disconnect();
    sourceNode = audioCtx.createMediaElementSource(audioElement);
    sourceNode.connect(analyser);
    analyser.connect(audioCtx.destination);

    startGlowSync();
  } catch (e) {}
}

function startGlowSync() {
  if (!analyser) return;

  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);
  const targetElem = document.getElementById('glow-wrapper');

  function updateGlow() {
    animationFrameId = requestAnimationFrame(updateGlow);
    analyser.getByteFrequencyData(dataArray);

    let sum = 0;
    for (let i = 0; i < bufferLength; i++) {
      sum += dataArray[i];
    }
    let average = sum / bufferLength;

    let glowRadius = Math.min(35, 10 + average * 0.2);
    let hue = (Date.now() / 25) % 360;

    if (targetElem) {
      targetElem.style.boxShadow = `0 0 ${glowRadius}px hsl(${hue}, 100%, 50%)`;
    }
  }

  if (animationFrameId) cancelAnimationFrame(animationFrameId);
  updateGlow();
}

document.addEventListener('DOMContentLoaded', () => {
  displayedList = getActiveList();

  const catButtons = {
    'btn-2026': 'Trending',
    'btn-90s': '90s',
    'btn-3d': '3D Audio',
    'btn-all': 'All'
  };

  Object.keys(catButtons).forEach(id => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.onclick = (e) => {
        currentCategory = catButtons[id];
        currentSongIndex = 0;
        document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        
        const searchInput = document.getElementById('search-input');
        if (searchInput) searchInput.value = '';
        
        displayedList = getActiveList();
        loadAndPlaySong(currentSongIndex);
      };
    }
  });

  document.getElementById('play-btn').onclick = () => {
    if (activeAudio.paused) {
      activeAudio.play();
      if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
      document.getElementById('play-btn').textContent = '❚❚';
    } else {
      activeAudio.pause();
      document.getElementById('play-btn').textContent = '▶';
    }
  };

  document.getElementById('next-btn').onclick = () => {
    const list = displayedList.length > 0 ? displayedList : getActiveList();
    currentSongIndex = (currentSongIndex + 1) % list.length;
    isCrossfading = false;
    loadAndPlaySong(currentSongIndex);
  };

  document.getElementById('prev-btn').onclick = () => {
    const list = displayedList.length > 0 ? displayedList : getActiveList();
    currentSongIndex = (currentSongIndex - 1 + list.length) % list.length;
    isCrossfading = false;
    loadAndPlaySong(currentSongIndex);
  };

  document.getElementById('progress-container').onclick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    if (activeAudio.duration) {
      activeAudio.currentTime = (clickX / rect.width) * activeAudio.duration;
    }
  };

  const crossfadeSlider = document.getElementById('crossfade-slider');
  const crossfadeVal = document.getElementById('crossfade-val');
  if (crossfadeSlider) {
    crossfadeSlider.oninput = (e) => {
      crossfadeDuration = parseInt(e.target.value);
      if (crossfadeVal) crossfadeVal.textContent = `${crossfadeDuration}s`;
    };
  }

  const volSlider = document.getElementById('volume-slider');
  if (volSlider) {
    volSlider.oninput = (e) => {
      globalVolume = parseFloat(e.target.value);
      activeAudio.volume = globalVolume;
    };
  }

  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.oninput = (e) => {
      const query = e.target.value.toLowerCase().trim();
      const allSongs = [...playlist["Trending"], ...playlist["90s"], ...playlist["3D Audio"]];

      if (query === "") {
        displayedList = getActiveList();
      } else {
        displayedList = allSongs.filter(s => 
          s.title.toLowerCase().includes(query) || 
          s.artist.toLowerCase().includes(query)
        );
      }
      currentSongIndex = 0;
      renderPlaylist(displayedList);
    };
  }

  renderPlaylist();
});
