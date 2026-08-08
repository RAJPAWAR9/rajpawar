/**
 * BOOSTER V0.9 - Next-Gen Audio OS Engine
 * Dezained by raj pawar
 */

// Folder Paths
const BASE_FOLDER_2026 = "song/2026 music";
const BASE_FOLDER_90S = "song/2026 music/90s";

// Track Database
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

// State Variables
let currentCategory = "Trending";
let currentSongIndex = 0;
let displayedList = [];

let playerA = new Audio();
let playerB = new Audio();
let activeAudio = playerA;
let nextAudio = playerB;

let globalVolume = 0.8;
let crossfadeTime = 6;
let crossfadeStarted = false;

let audioCtx, analyser, srcNodeA, srcNodeB;

// URL Builder with Format Fallback
function buildUrl(song, extension = "m4a") {
  const is90s = playlist["90s"].some(s => s.file === song.file);
  const basePath = is90s ? BASE_FOLDER_90S : BASE_FOLDER_2026;
  const fullPath = `${basePath}/${song.file}.${extension}`;
  return fullPath.split('/').map(part => encodeURIComponent(part)).join('/');
}

function getActiveList() {
  if (currentCategory === "All") {
    return [...playlist["Trending"], ...playlist["90s"], ...playlist["3D Audio"]];
  }
  return playlist[currentCategory] || playlist["Trending"];
}

// Web Audio DSP Engine Setup
function initBeatSync() {
  if (audioCtx) return;
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContext();

    analyser = audioCtx.createAnalyser();
    analyser.fftSize = 128;

    srcNodeA = audioCtx.createMediaElementSource(playerA);
    srcNodeB = audioCtx.createMediaElementSource(playerB);

    srcNodeA.connect(analyser);
    srcNodeB.connect(analyser);
    analyser.connect(audioCtx.destination);

    renderBeatSyncVisualizer();
  } catch (e) {
    console.warn("Audio Context init warning:", e);
  }
}

// Beat Sync Visualizer Render Cycle
function renderBeatSyncVisualizer() {
  const canvas = document.getElementById("visualizer-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);

  function renderFrame() {
    requestAnimationFrame(renderFrame);
    if (analyser) analyser.getByteFrequencyData(dataArray);

    let bassSum = 0;
    const bassBins = Math.floor(bufferLength * 0.3) || 1;
    for (let i = 0; i < bassBins; i++) bassSum += dataArray[i] || 0;
    let bassAvg = bassSum / bassBins;

    const ambientGlow = document.getElementById("ambient-glow");
    if (ambientGlow && !activeAudio.paused) {
      const scaleFactor = 1 + (bassAvg / 255) * 0.15;
      ambientGlow.style.transform = `translate(-50%, -50%) scale(${scaleFactor})`;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (!activeAudio.paused) {
      let hue1 = (Date.now() / 25) % 360;
      let pulseRadius = 100 + (bassAvg / 255) * (canvas.width * 0.35);

      let gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 20,
        canvas.width / 2, canvas.height / 2, pulseRadius
      );

      gradient.addColorStop(0, `hsla(${hue1}, 100%, 50%, ${0.15 + (bassAvg / 255) * 0.25})`);
      gradient.addColorStop(1, 'rgba(0,0,0,0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
  }
  renderFrame();
}

function playAudioWithFallback(audioElement, song) {
  const m4aUrl = buildUrl(song, "m4a");
  audioElement.src = m4aUrl;

  const playPromise = audioElement.play();
  if (playPromise !== undefined) {
    playPromise.then(() => {
      updatePlaybackUI(true);
    }).catch(() => {
      const mp3Url = buildUrl(song, "mp3");
      audioElement.src = mp3Url;
      audioElement.play().then(() => {
        updatePlaybackUI(true);
      }).catch((err) => {
        console.error("Audio Load Error:", err);
        updatePlaybackUI(false);
      });
    });
  }
}

function loadAndPlaySong(index, isManualTrigger = true) {
  initBeatSync();
  if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();

  const list = displayedList.length > 0 ? displayedList : getActiveList();
  if (!list[index]) return;

  const song = list[index];

  // UI Updates (BOOSTER V0.9 + Dezained by raj pawar)
  document.getElementById('mini-title').textContent = song.title;
  document.getElementById('mini-artist').textContent = song.artist + " • Dezained by raj pawar";
  if (document.getElementById('np-title')) document.getElementById('np-title').textContent = song.title;
  if (document.getElementById('np-artist')) document.getElementById('np-artist').textContent = song.artist + " • Dezained by raj pawar";

  if (isManualTrigger) {
    crossfadeStarted = false;
    playerA.pause();
    playerB.pause();
    playerA.currentTime = 0;
    playerB.currentTime = 0;

    activeAudio = playerA;
    nextAudio = playerB;
    activeAudio.volume = globalVolume;

    playAudioWithFallback(activeAudio, song);
  } else {
    activeAudio = nextAudio;
    nextAudio = (activeAudio === playerA) ? playerB : playerA;
    crossfadeStarted = false;
  }

  renderTrendingGrid();
}

function handleCrossfadeCheck() {
  if (crossfadeStarted || !activeAudio.duration || crossfadeTime <= 0) return;

  const remainingTime = activeAudio.duration - activeAudio.currentTime;

  if (remainingTime <= crossfadeTime && remainingTime > 0) {
    crossfadeStarted = true;
    const list = displayedList.length > 0 ? displayedList : getActiveList();
    const nextIndex = (currentSongIndex + 1) % list.length;
    currentSongIndex = nextIndex;

    const nextSong = list[nextIndex];
    nextAudio.volume = 0;
    playAudioWithFallback(nextAudio, nextSong);

    const intervalTime = 100;
    const steps = (crossfadeTime * 1000) / intervalTime;
    const volumeStep = globalVolume / steps;

    let currentStep = 0;
    const fadeTimer = setInterval(() => {
      currentStep++;

      if (activeAudio.volume > volumeStep) {
        activeAudio.volume = Math.max(0, activeAudio.volume - volumeStep);
      } else {
        activeAudio.volume = 0;
      }

      if (nextAudio.volume < globalVolume - volumeStep) {
        nextAudio.volume = Math.min(globalVolume, nextAudio.volume + volumeStep);
      } else {
        nextAudio.volume = globalVolume;
      }

      if (currentStep >= steps) {
        clearInterval(fadeTimer);
        activeAudio.pause();
        activeAudio.currentTime = 0;
        loadAndPlaySong(currentSongIndex, false);
      }
    }, intervalTime);
  }
}

function attachAudioEvents(audioPlayer) {
  audioPlayer.addEventListener('timeupdate', () => {
    if (audioPlayer === activeAudio && activeAudio.duration) {
      const percent = (activeAudio.currentTime / activeAudio.duration) * 100;
      const fill = document.getElementById('progress-fill');
      if (fill) fill.style.width = `${percent}%`;

      document.getElementById('time-current').textContent = formatTime(activeAudio.currentTime);
      document.getElementById('time-total').textContent = formatTime(activeAudio.duration);

      handleCrossfadeCheck();
    }
  });

  audioPlayer.addEventListener('ended', () => {
    if (audioPlayer === activeAudio && !crossfadeStarted) {
      const list = displayedList.length > 0 ? displayedList : getActiveList();
      currentSongIndex = (currentSongIndex + 1) % list.length;
      loadAndPlaySong(currentSongIndex, true);
    }
  });
}

attachAudioEvents(playerA);
attachAudioEvents(playerB);

function updatePlaybackUI(isPlaying) {
  const masterPlayBtn = document.getElementById('master-play-btn');
  if (masterPlayBtn) masterPlayBtn.textContent = isPlaying ? '❚❚' : '▶';
}

function formatTime(secs) {
  if (isNaN(secs)) return "0:00";
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60);
  return `${m}:${s < 10 ? '0' : ''}${s}`;
}

function renderTrendingGrid() {
  const grid = document.getElementById('trending-grid');
  if (!grid) return;

  grid.innerHTML = '';
  displayedList.forEach((song, index) => {
    const card = document.createElement('div');
    card.className = `glass-panel ${index === currentSongIndex ? 'active' : ''}`;
    card.style.padding = '14px';
    card.style.borderRadius = '16px';
    card.style.cursor = 'pointer';
    card.style.marginBottom = '8px';

    card.innerHTML = `
      <div style="font-weight:700; font-size:14px; color:#fff;">${index + 1}. ${song.title}</div>
      <div style="font-size:12px; color:var(--text-secondary); margin-top:4px;">${song.artist}</div>
    `;

    card.onclick = () => {
      currentSongIndex = index;
      loadAndPlaySong(currentSongIndex, true);
    };

    grid.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  displayedList = getActiveList();
  renderTrendingGrid();

  const navItems = document.querySelectorAll(".nav-item");
  const viewPanels = document.querySelectorAll(".view-panel");

  navItems.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetView = btn.dataset.target;
      navItems.forEach((i) => i.classList.remove("active"));
      viewPanels.forEach((p) => p.classList.remove("active"));

      btn.classList.add("active");
      const targetPanel = document.getElementById(targetView);
      if (targetPanel) targetPanel.classList.add("active");
    });
  });

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
        renderTrendingGrid();
      };
    }
  });

  const searchInput = document.getElementById('global-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      displayedList = getActiveList().filter(song =>
        song.title.toLowerCase().includes(query) ||
        song.artist.toLowerCase().includes(query)
      );
      renderTrendingGrid();
    });
  }

  document.getElementById('master-play-btn').onclick = () => {
    initBeatSync();
    if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();

    if (!activeAudio.src) {
      loadAndPlaySong(0, true);
      return;
    }

    if (activeAudio.paused) {
      activeAudio.play();
      updatePlaybackUI(true);
    } else {
      activeAudio.pause();
      nextAudio.pause();
      updatePlaybackUI(false);
    }
  };

  document.getElementById('next-btn').onclick = () => {
    const list = displayedList.length > 0 ? displayedList : getActiveList();
    currentSongIndex = (currentSongIndex + 1) % list.length;
    loadAndPlaySong(currentSongIndex, true);
  };

  document.getElementById('prev-btn').onclick = () => {
    const list = displayedList.length > 0 ? displayedList : getActiveList();
    currentSongIndex = (currentSongIndex - 1 + list.length) % list.length;
    loadAndPlaySong(currentSongIndex, true);
  };

  const progressContainer = document.getElementById('progress-bar-container');
  if (progressContainer) {
    progressContainer.onclick = (e) => {
      const rect = progressContainer.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      if (activeAudio.duration) {
        activeAudio.currentTime = (clickX / rect.width) * activeAudio.duration;
      }
    };
  }

  const crossSlider = document.getElementById('crossfade-slider');
  if (crossSlider) {
    crossSlider.oninput = (e) => {
      crossfadeTime = parseInt(e.target.value);
      const crossVal = document.getElementById('crossfade-val');
      if (crossVal) crossVal.textContent = `${crossfadeTime}s`;
    };
  }

  const volSlider = document.getElementById('master-volume');
  if (volSlider) {
    volSlider.oninput = (e) => {
      globalVolume = parseFloat(e.target.value);
      activeAudio.volume = globalVolume;
    };
  }
});
