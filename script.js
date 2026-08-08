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
    { title: "Blue Eyes", artist: "Yo Yo Honey Singh", file: "Blue Eyes - Yo Yo Honey Singh" },
    { title: "Gulabi Sadi", artist: "Sanju Rathod, G-SPXRK", file: "Gulabi Sadi - Sanju Rathod, G-SPXRK" },
    { title: "Maan Meri Jaan", artist: "King", file: "Maan Meri Jaan - King" },
    { title: "Tere Liye", artist: "Atif Aslam", file: "Tere Liye - Atif Aslam" }
  ],
  "90s": [
    { title: "Aise Na Mujhe", artist: "Kishore Kumar", file: "Aise_Na_Mujhe" },
    { title: "Gulabi Ankhen", artist: "Mohd. Rafi", file: "gulabi aahken" },
    { title: "Kehdoon Tumhen", artist: "Kishore Kumar & Asha Bhosle", file: "Kehdoon_Tumhen" },
    { title: "Pal Pal Dil Ke Paas", artist: "Kishore Kumar", file: "Pal_Pal_Dil_Ke_Paas" }
  ],
  "3D Audio": [
    { title: "Blue Eyes (3D Remaster)", artist: "Yo Yo Honey Singh", file: "Blue Eyes - Yo Yo Honey Singh" }
  ]
};

// Sample Synced Lyrics DB
const sampleLyrics = [
  { time: 0, text: "🎵 Audio Playing..." },
  { time: 10, text: "Feel the beats & rhythm" },
  { time: 20, text: "Singing along with the song" },
  { time: 30, text: "Music connects everyone" },
  { time: 45, text: "Enjoying the favorite track" },
  { time: 60, text: "Harmonies in the air" }
];

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
let eqFilters = [];

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
  
  const speedVal = parseFloat(document.getElementById('speed-slider').value);
  activeAudio.playbackRate = speedVal;

  const primaryUrl = buildUrl(folderCat, song.file, '.m4a');
  activeAudio.src = primaryUrl;
  activeAudio.volume = globalVolume;
  
  setupAudioEvents(activeAudio);
  renderLyrics(sampleLyrics);
  
  const playPromise = activeAudio.play();
  if (playPromise !== undefined) {
    playPromise.then(() => {
      updatePlaybackUI(true);
      initAudioVisualizer(activeAudio);
    }).catch(() => {
      const fallbackUrl = buildUrl(folderCat, song.file, '.mp3');
      activeAudio.src = fallbackUrl;
      activeAudio.play().then(() => {
        updatePlaybackUI(true);
        initAudioVisualizer(activeAudio);
      }).catch(() => {
        updatePlaybackUI(false);
      });
    });
  }

  renderPlaylist(displayedList);
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
    if (currentTime >= lineTime) {
      activeIndex = index;
    }
    line.classList.remove('active');
  });

  if (lines[activeIndex]) {
    lines[activeIndex].classList.add('active');
    const scrollContainer = document.getElementById('lyrics-scroll');
    scrollContainer.style.transform = `translateY(-${activeIndex * 26}px)`;
  }
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

      syncLyrics(audioObj.currentTime);
    }
  });

  audioObj.addEventListener('ended', () => {
    const list = displayedList.length > 0 ? displayedList : getActiveList();
    currentSongIndex = (currentSongIndex + 1) % list.length;
    loadAndPlaySong(currentSongIndex);
  });
}

function formatTime(seconds) {
  if (isNaN(seconds)) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

/* Web Audio API Equalizer */
function initAudioVisualizer(audioElement) {
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      analyser = audioCtx.createAnalyser();
      analyser.fftSize = 64;

      const freqs = [60, 250, 1000, 4000, 16000];
      eqFilters = freqs.map((freq) => {
        const filter = audioCtx.createBiquadFilter();
        filter.type = freq <= 250 ? 'lowshelf' : freq >= 4000 ? 'highshelf' : 'peaking';
        filter.frequency.value = freq;
        filter.gain.value = 0;
        return filter;
      });
    }

    if (audioCtx.state === 'suspended') audioCtx.resume();

    if (sourceNode) sourceNode.disconnect();
    sourceNode = audioCtx.createMediaElementSource(audioElement);

    // Connect filters in chain
    let current = sourceNode;
    eqFilters.forEach((filter) => {
      current.connect(filter);
      current = filter;
    });

    current.connect(analyser);
    analyser.connect(audioCtx.destination);

    startDynamicCanvas();
  } catch (e) {}
}

/* Dynamic Ambient Gradient Canvas */
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

    gradient.addColorStop(0, `hsla(${hue1}, 100%, 50%, ${0.2 + avg * 0.003})`);
    gradient.addColorStop(1, `hsla(${hue2}, 100%, 20%, 0)`);

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  drawCanvas();
}

/* Mini Floating Player (Picture in Picture) */
async function togglePiP() {
  const video = document.getElementById('pip-video');
  try {
    if (document.pictureInPictureElement) {
      await document.exitPictureInPicture();
    } else {
      const streamCanvas = document.createElement('canvas');
      streamCanvas.width = 300;
      streamCanvas.height = 150;
      const cCtx = streamCanvas.getContext('2d');
      cCtx.fillStyle = '#121216';
      cCtx.fillRect(0,0,300,150);
      cCtx.fillStyle = '#00f2fe';
      cCtx.font = '16px sans-serif';
      cCtx.fillText('🎵 Playing Music', 20, 80);

      video.srcObject = streamCanvas.captureStream();
      await video.play();
      await video.requestPictureInPicture();
    }
  } catch (err) {}
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
        displayedList = getActiveList();
        loadAndPlaySong(currentSongIndex);
      };
    }
  });

  document.getElementById('play-btn').onclick = () => {
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

  // Speed Slider
  const speedSlider = document.getElementById('speed-slider');
  speedSlider.oninput = (e) => {
    const val = parseFloat(e.target.value);
    document.getElementById('speed-val').textContent = `${val.toFixed(1)}x`;
    activeAudio.playbackRate = val;
  };

  // Equalizer UI Controls
  document.getElementById('eq-toggle-btn').onclick = () => {
    document.getElementById('eq-panel').classList.toggle('hidden');
  };

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

  document.getElementById('eq-presets').onchange = (e) => {
    const vals = presets[e.target.value] || presets.flat;
    document.querySelectorAll('.eq-band-slider').forEach((slider, idx) => {
      slider.value = vals[idx];
      if (eqFilters[idx]) eqFilters[idx].gain.value = vals[idx];
    });
  };

  document.getElementById('pip-btn').onclick = togglePiP;

  const volSlider = document.getElementById('volume-slider');
  if (volSlider) {
    volSlider.oninput = (e) => {
      globalVolume = parseFloat(e.target.value);
      activeAudio.volume = globalVolume;
    };
  }

  renderPlaylist();
});
