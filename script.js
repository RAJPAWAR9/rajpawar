const BASE_FOLDER_2026 = "song/2026 music";
const BASE_FOLDER_90S = "song/2026 music/90s";

const playlist = {
  "Trending": [
    { title: "Aa Re Pritam Pyaare", artist: "Mamta Sharma, Sajid-Wajid", file: "Aa Re Pritam Pyaare" },
    { title: "Aapka Kya Hoga", artist: "Mika Singh, Sunidhi Chauhan", file: "Aapka Kya Hoga" },
    { title: "Apna Time Aayega", artist: "Ranveer Singh, DIVINE", file: "Apna Time Aayega - Ranveer Singh, DIVINE" },
    { title: "Badtameez Dil", artist: "Benny Dayal, Shefali Alvares", file: "Badtameez Dil - Benny Dayal, Shefali Alvares" },
    { title: "Balam Pichkari", artist: "Vishal Dadlani, Shalmali Kholgade", file: "Balam Pichkari" },
    { title: "Balma", artist: "Shriram Iyer, Shreya Ghoshal", file: "Balma - Shriram Iyer, Shriram Ghoshal" },
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

const sampleLyrics = [
  { time: 0, text: "🎵 Music Playing..." },
  { time: 10, text: "Feel the rhythmic beats" },
  { time: 20, text: "Sing along with the music!" },
  { time: 35, text: "Enjoying the instrumental vibe" },
  { time: 50, text: "Harmonies in the air" }
];

let currentCategory = "Trending";
let currentSongIndex = 0;
let displayedList = [];

// Single Audio Engine Instance
const activeAudio = new Audio();
activeAudio.crossOrigin = "anonymous";

let globalVolume = 1;
let crossfadeTime = 10; // Default 10s crossfade

let audioCtx, analyser, sourceNode, vocalFilterNode, eqFilters = [];
let isKaraokeOn = false;
let canvas, ctx;

function buildUrl(category, fileName, ext) {
  const base = (category === "90s") ? BASE_FOLDER_90S : BASE_FOLDER_2026;
  const fullPath = `${base}/${fileName}${ext}`;
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
      <div class="song-title-text">${index + 1}. ${song.title}</div>
      <div class="song-artist-text">${song.artist}</div>
    `;

    item.onclick = () => {
      currentSongIndex = index;
      loadAndPlaySong(currentSongIndex);
    };

    playlistView.appendChild(item);
  });
}

function getSongFolderCategory(song) {
  if (playlist["90s"].some(s => s.title === song.title)) return "90s";
  return "Trending";
}

function updatePlaybackUI(isPlaying) {
  const playBtn = document.getElementById('play-btn');
  const albumArt = document.getElementById('album-art-box');
  const waveBars = document.getElementById('wave-bars');

  if (isPlaying) {
    if (playBtn) playBtn.textContent = '❚❚';
    if (albumArt) albumArt.classList.add('playing');
    if (waveBars) waveBars.classList.add('playing');
  } else {
    if (playBtn) playBtn.textContent = '▶';
    if (albumArt) albumArt.classList.remove('playing');
    if (waveBars) waveBars.classList.remove('playing');
  }
}

/* Audio Graph Architecture */
function initAudioPipeline() {
  if (audioCtx) return;

  try {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    analyser = audioCtx.createAnalyser();
    analyser.fftSize = 64;

    sourceNode = audioCtx.createMediaElementSource(activeAudio);

    // Vocal Suppressor Notch
    vocalFilterNode = audioCtx.createBiquadFilter();
    vocalFilterNode.type = "peaking";
    vocalFilterNode.frequency.value = 1400;
    vocalFilterNode.Q.value = 3.0;
    vocalFilterNode.gain.value = 0;

    // Equalizer
    const freqs = [60, 250, 1000, 4000, 16000];
    eqFilters = freqs.map((freq) => {
      const filter = audioCtx.createBiquadFilter();
      filter.type = freq <= 250 ? 'lowshelf' : freq >= 4000 ? 'highshelf' : 'peaking';
      filter.frequency.value = freq;
      filter.gain.value = 0;
      return filter;
    });

    let lastNode = sourceNode;
    lastNode.connect(vocalFilterNode);
    lastNode = vocalFilterNode;

    eqFilters.forEach(filter => {
      lastNode.connect(filter);
      lastNode = filter;
    });

    lastNode.connect(analyser);
    analyser.connect(audioCtx.destination);
    
    startDynamicCanvas();
  } catch (e) {
    console.log("Audio Context local server restricts audio nodes:", e);
  }
}

function toggleKaraokeMode() {
  initAudioPipeline();
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  isKaraokeOn = !isKaraokeOn;
  const btn = document.getElementById('karaoke-btn');

  if (vocalFilterNode) {
    vocalFilterNode.gain.value = isKaraokeOn ? -28 : 0;
  }

  if (btn) {
    btn.textContent = isKaraokeOn ? "🎤 Karaoke Mode: ON" : "🎤 Karaoke Mode: OFF";
    btn.style.background = isKaraokeOn ? "#00f2fe" : "rgba(255, 255, 255, 0.08)";
    btn.style.color = isKaraokeOn ? "#000" : "#ccc";
  }
}

function loadAndPlaySong(index) {
  initAudioPipeline();
  if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();

  const list = displayedList.length > 0 ? displayedList : getActiveList();
  if (!list[index]) return;

  const song = list[index];

  document.getElementById('song-title').textContent = song.title;
  document.getElementById('artist-name').textContent = song.artist;
  document.getElementById('category-badge').textContent = `${currentCategory.toUpperCase()} HITS`;

  const folderCat = getSongFolderCategory(song);
  const songUrl = buildUrl(folderCat, song.file, '.m4a');

  if (crossfadeTime > 0 && !activeAudio.paused) {
    let fadeVol = activeAudio.volume;
    const fadeInterval = setInterval(() => {
      if (fadeVol > 0.1) {
        fadeVol -= 0.1;
        activeAudio.volume = fadeVol;
      } else {
        clearInterval(fadeInterval);
        startNewTrack(songUrl);
      }
    }, (crossfadeTime * 100) );
  } else {
    startNewTrack(songUrl);
  }

  renderPlaylist(displayedList);
}

function startNewTrack(url) {
  activeAudio.src = url;
  activeAudio.volume = globalVolume;
  
  const speedVal = parseFloat(document.getElementById('speed-slider').value);
  activeAudio.playbackRate = speedVal;

  renderLyrics(sampleLyrics);

  activeAudio.play().then(() => {
    updatePlaybackUI(true);
  }).catch(() => {
    updatePlaybackUI(false);
  });
}

function renderLyrics(lyrics) {
  const scrollContainer = document.getElementById('lyrics-scroll');
  scrollContainer.innerHTML = '';
  lyrics.forEach((line) => {
    const p = document.createElement('p');
    p.className = 'lyric-line';
    p.dataset.time = line.time;
    p.textContent = line.text;
    p.onclick = () => {
      if (activeAudio.duration) activeAudio.currentTime = line.time;
    };
    scrollContainer.appendChild(p);
  });
}

function syncLyrics(currentTime) {
  const lines = document.querySelectorAll('.lyric-line');
  let activeIndex = 0;
  lines.forEach((line, index) => {
    const lineTime = parseFloat(line.dataset.time);
    if (currentTime >= lineTime) activeIndex = index;
    line.classList.remove('active');
  });

  if (lines[activeIndex]) {
    lines[activeIndex].classList.add('active');
    const scrollContainer = document.getElementById('lyrics-scroll');
    scrollContainer.style.transform = `translateY(-${activeIndex * 26}px)`;
  }
}

activeAudio.addEventListener('timeupdate', () => {
  const progress = document.getElementById('progress');
  const currentTimeElem = document.getElementById('current-time');
  const durationElem = document.getElementById('total-duration');

  if (activeAudio.duration) {
    const percent = (activeAudio.currentTime / activeAudio.duration) * 100;
    progress.style.width = `${percent}%`;
    currentTimeElem.textContent = formatTime(activeAudio.currentTime);
    durationElem.textContent = formatTime(activeAudio.duration);
    syncLyrics(activeAudio.currentTime);
  }
});

activeAudio.addEventListener('ended', () => {
  const list = displayedList.length > 0 ? displayedList : getActiveList();
  currentSongIndex = (currentSongIndex + 1) % list.length;
  loadAndPlaySong(currentSongIndex);
});

function formatTime(seconds) {
  if (isNaN(seconds)) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

function startDynamicCanvas() {
  canvas = document.getElementById('ambient-canvas');
  if (!canvas) return;
  ctx = canvas.getContext('2d');
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  function drawCanvas() {
    requestAnimationFrame(drawCanvas);
    if (!analyser) return;

    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    analyser.getByteFrequencyData(dataArray);

    let sum = 0;
    for (let i = 0; i < bufferLength; i++) sum += dataArray[i];
    let avg = sum / bufferLength;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let gradient = ctx.createRadialGradient(
      canvas.width / 2, canvas.height / 2, 50,
      canvas.width / 2, canvas.height / 2, canvas.width / 1.5
    );

    let hue1 = (Date.now() / 30) % 360;
    let hue2 = (hue1 + 60) % 360;

    gradient.addColorStop(0, `hsla(${hue1}, 100%, 50%, ${0.15 + avg * 0.003})`);
    gradient.addColorStop(1, `hsla(${hue2}, 100%, 20%, 0)`);

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  drawCanvas();
}

async function togglePiP() {
  const video = document.getElementById('pip-video');
  if (!video) return;

  try {
    if (document.pictureInPictureElement) {
      await document.exitPictureInPicture();
    } else {
      const pipCanvas = document.createElement('canvas');
      pipCanvas.width = 400;
      pipCanvas.height = 225;
      const pCtx = pipCanvas.getContext('2d');

      function drawPiP() {
        if (!document.pictureInPictureElement && video.paused) return;

        pCtx.fillStyle = '#111218';
        pCtx.fillRect(0, 0, 400, 225);

        pCtx.fillStyle = '#00f2fe';
        pCtx.font = 'bold 18px sans-serif';
        const title = document.getElementById('song-title').textContent || 'Music Player';
        pCtx.fillText(title.substring(0, 24), 20, 70);

        pCtx.fillStyle = '#aaaaaa';
        pCtx.font = '14px sans-serif';
        const artist = document.getElementById('artist-name').textContent || 'Playing';
        pCtx.fillText(artist.substring(0, 28), 20, 100);

        pCtx.fillStyle = 'rgba(255,255,255,0.2)';
        pCtx.fillRect(20, 160, 360, 6);

        if (activeAudio.duration) {
          const progress = (activeAudio.currentTime / activeAudio.duration) * 360;
          pCtx.fillStyle = '#00f2fe';
          pCtx.fillRect(20, 160, progress, 6);
        }

        requestAnimationFrame(drawPiP);
      }

      const stream = pipCanvas.captureStream(30);
      video.srcObject = stream;
      await video.play();
      await video.requestPictureInPicture();
      drawPiP();
    }
  } catch (err) {
    console.error(err);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  displayedList = getActiveList();

  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      const currentList = getActiveList();
      const filtered = currentList.filter(song => 
        song.title.toLowerCase().includes(query) || 
        song.artist.toLowerCase().includes(query)
      );
      renderPlaylist(filtered);
    });
  }

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
        displayedList = getActiveList();
        loadAndPlaySong(currentSongIndex);
      };
    }
  });

  document.getElementById('play-btn').onclick = () => {
    initAudioPipeline();
    if (activeAudio.paused) {
      activeAudio.play();
      if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
      updatePlaybackUI(true);
    } else {
      activeAudio.pause();
      updatePlaybackUI(false);
    }
  };

  document.getElementById('next-btn').onclick = () => {
    const list = displayedList.length > 0 ? displayedList : getActiveList();
    currentSongIndex = (currentSongIndex + 1) % list.length;
    loadAndPlaySong(currentSongIndex);
  };

  document.getElementById('prev-btn').onclick = () => {
    const list = displayedList.length > 0 ? displayedList : getActiveList();
    currentSongIndex = (currentSongIndex - 1 + list.length) % list.length;
    loadAndPlaySong(currentSongIndex);
  };

  document.getElementById('progress-container').onclick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    if (activeAudio.duration) {
      activeAudio.currentTime = (clickX / rect.width) * activeAudio.duration;
    }
  };

  const speedSlider = document.getElementById('speed-slider');
  if (speedSlider) {
    speedSlider.oninput = (e) => {
      const val = parseFloat(e.target.value);
      document.getElementById('speed-val').textContent = `${val.toFixed(1)}x`;
      activeAudio.playbackRate = val;
    };
  }

  const crossSlider = document.getElementById('crossfade-slider');
  if (crossSlider) {
    crossSlider.oninput = (e) => {
      crossfadeTime = parseInt(e.target.value);
      document.getElementById('crossfade-val').textContent = `${crossfadeTime}s`;
    };
  }

  const karaokeBtn = document.getElementById('karaoke-btn');
  if (karaokeBtn) karaokeBtn.onclick = toggleKaraokeMode;

  const eqToggleBtn = document.getElementById('eq-toggle-btn');
  if (eqToggleBtn) {
    eqToggleBtn.onclick = () => {
      document.getElementById('eq-panel').classList.toggle('hidden');
    };
  }

  document.querySelectorAll('.eq-band-slider').forEach(slider => {
    slider.oninput = (e) => {
      const idx = parseInt(e.target.dataset.band);
      if (eqFilters[idx]) eqFilters[idx].gain.value = parseFloat(e.target.value);
    };
  });

  const presets = {
    flat: [0, 0, 0, 0, 0],
    bass: [8, 5, 0, 0, 0],
    pop: [-1, 2, 5, 3, -1],
    rock: [5, 3, -1, 3, 5],
    vocal: [-3, 0, 6, 4, 1]
  };

  const eqPresets = document.getElementById('eq-presets');
  if (eqPresets) {
    eqPresets.onchange = (e) => {
      const vals = presets[e.target.value] || presets.flat;
      document.querySelectorAll('.eq-band-slider').forEach((slider, idx) => {
        slider.value = vals[idx];
        if (eqFilters[idx]) eqFilters[idx].gain.value = vals[idx];
      });
    };
  }

  const pipBtn = document.getElementById('pip-btn');
  if (pipBtn) pipBtn.onclick = togglePiP;

  const volSlider = document.getElementById('volume-slider');
  if (volSlider) {
    volSlider.oninput = (e) => {
      globalVolume = parseFloat(e.target.value);
      activeAudio.volume = globalVolume;
    };
  }

  renderPlaylist();
});
