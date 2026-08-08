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

let currentCategory = "Trending";
let currentSongIndex = 0;
let displayedList = [];

let playerA = new Audio();
let playerB = new Audio();
playerA.crossOrigin = "anonymous";
playerB.crossOrigin = "anonymous";

let activeAudio = playerA;
let nextAudio = playerB;

let globalVolume = 1;
let crossfadeTime = 10;
let crossfadeStarted = false;
let isKaraokeActive = false;

// Web Audio API Elements
let audioCtx, analyser, eqFilters = [], vocalFilter;
let srcNodeA, srcNodeB;
let canvas, ctx;

// Initialize Web Audio Graph
function initAudioEngine() {
  if (audioCtx) return;
  try {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    analyser = audioCtx.createAnalyser();
    analyser.fftSize = 128;

    // Create 5-Band Equalizer Filters
    const eqFrequencies = [60, 250, 1000, 4000, 16000];
    eqFilters = eqFrequencies.map(freq => {
      const filter = audioCtx.createBiquadFilter();
      filter.type = freq <= 250 ? 'lowshelf' : freq >= 4000 ? 'highshelf' : 'peaking';
      filter.frequency.value = freq;
      filter.gain.value = 0;
      return filter;
    });

    // Create Vocal Cut Filter for Karaoke Mode
    vocalFilter = audioCtx.createBiquadFilter();
    vocalFilter.type = 'notch';
    vocalFilter.frequency.value = 1000;
    vocalFilter.Q.value = 3;

    // Connect Audio Source Nodes
    srcNodeA = audioCtx.createMediaElementSource(playerA);
    srcNodeB = audioCtx.createMediaElementSource(playerB);

    // Chain Filter Graph
    let lastNodeA = srcNodeA;
    let lastNodeB = srcNodeB;

    eqFilters.forEach(filter => {
      lastNodeA.connect(filter);
      lastNodeB.connect(filter);
      lastNodeA = filter;
      lastNodeB = filter;
    });

    lastNodeA.connect(analyser);
    analyser.connect(audioCtx.destination);

    startVisualizer();
  } catch (e) {
    console.warn("Audio Context init warning:", e);
  }
}

function startVisualizer() {
  canvas = document.getElementById('ambient-canvas');
  if (!canvas) return;
  ctx = canvas.getContext('2d');

  function resizeCanvas() {
    canvas.width = window.innerWidth * window.devicePixelRatio;
    canvas.height = window.innerHeight * window.devicePixelRatio;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  const bufferLength = analyser ? analyser.frequencyBinCount : 0;
  const dataArray = new Uint8Array(bufferLength);
  const albumArt = document.getElementById('album-art-box');

  function renderFrame() {
    requestAnimationFrame(renderFrame);

    if (analyser) {
      analyser.getByteFrequencyData(dataArray);
    }

    let bassSum = 0;
    for (let i = 0; i < 5; i++) bassSum += dataArray[i] || 0;
    let bassAvg = bassSum / 5;

    if (albumArt && !activeAudio.paused) {
      let scaleFactor = 1 + (bassAvg / 255) * 0.08;
      let glowRadius = 15 + (bassAvg / 255) * 35;
      albumArt.style.transform = `scale(${scaleFactor})`;
      albumArt.style.boxShadow = `0 0 ${glowRadius}px rgba(0, 242, 254, 0.6)`;
    } else if (albumArt) {
      albumArt.style.transform = 'scale(1)';
      albumArt.style.boxShadow = 'none';
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (!activeAudio.paused) {
      let pulseRadius = (canvas.width * 0.2) + (bassAvg / 255) * (canvas.width * 0.3);
      let gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 10,
        canvas.width / 2, canvas.height / 2, pulseRadius
      );
      gradient.addColorStop(0, `rgba(0, 242, 254, ${0.15 + (bassAvg / 255) * 0.25})`);
      gradient.addColorStop(0.5, `rgba(121, 40, 202, ${0.1 + (bassAvg / 255) * 0.15})`);
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
  }
  renderFrame();
}

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
      loadAndPlaySong(currentSongIndex, true);
    };

    playlistView.appendChild(item);
  });
}

function playAudioWithFallback(audioElement, song) {
  audioElement.src = buildUrl(song, "m4a");
  audioElement.play().then(() => {
    updatePlaybackUI(true);
    updateMediaSession(song);
  }).catch(() => {
    audioElement.src = buildUrl(song, "mp3");
    audioElement.play().then(() => {
      updatePlaybackUI(true);
      updateMediaSession(song);
    }).catch(err => {
      console.error("Playback error:", err);
      updatePlaybackUI(false);
    });
  });
}

function loadAndPlaySong(index, isManualTrigger = true) {
  initAudioEngine();
  if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();

  const list = displayedList.length > 0 ? displayedList : getActiveList();
  if (!list[index]) return;

  const song = list[index];
  document.getElementById('song-title').textContent = song.title;
  document.getElementById('artist-name').textContent = song.artist;
  document.getElementById('category-badge').textContent = `${currentCategory.toUpperCase()} HITS`;

  if (isManualTrigger) {
    crossfadeStarted = false;
    playerA.pause();
    playerB.pause();
    playerA.currentTime = 0;
    playerB.currentTime = 0;

    activeAudio = playerA;
    nextAudio = playerB;
    activeAudio.volume = globalVolume;
    activeAudio.playbackRate = parseFloat(document.getElementById('speed-slider')?.value || 1);

    playAudioWithFallback(activeAudio, song);
  } else {
    activeAudio = nextAudio;
    nextAudio = (activeAudio === playerA) ? playerB : playerA;
    crossfadeStarted = false;
  }

  renderPlaylist(displayedList);
}

function updateMediaSession(song) {
  if ('mediaSession' in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: song.title,
      artist: song.artist,
      album: 'AURA Music OS 2026'
    });

    navigator.mediaSession.setActionHandler('play', () => { activeAudio.play(); updatePlaybackUI(true); });
    navigator.mediaSession.setActionHandler('pause', () => { activeAudio.pause(); updatePlaybackUI(false); });
    navigator.mediaSession.setActionHandler('previoustrack', () => { document.getElementById('prev-btn').click(); });
    navigator.mediaSession.setActionHandler('nexttrack', () => { document.getElementById('next-btn').click(); });
  }
}

function updatePlaybackUI(isPlaying) {
  const playBtn = document.getElementById('play-btn');
  const waveBars = document.getElementById('wave-bars');

  if (isPlaying) {
    if (playBtn) playBtn.textContent = '❚❚';
    if (waveBars) waveBars.classList.add('playing');
  } else {
    if (playBtn) playBtn.textContent = '▶';
    if (waveBars) waveBars.classList.remove('playing');
  }
}

function formatTime(seconds) {
  if (isNaN(seconds)) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

document.addEventListener('DOMContentLoaded', () => {
  displayedList = getActiveList();

  // Search Logic
  document.getElementById('search-input')?.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    const filtered = getActiveList().filter(song => 
      song.title.toLowerCase().includes(query) || 
      song.artist.toLowerCase().includes(query)
    );
    renderPlaylist(filtered);
  });

  // Category Buttons
  const catButtons = { 'btn-2026': 'Trending', 'btn-90s': '90s', 'btn-3d': '3D Audio', 'btn-all': 'All' };
  Object.keys(catButtons).forEach(id => {
    document.getElementById(id)?.addEventListener('click', (e) => {
      currentCategory = catButtons[id];
      currentSongIndex = 0;
      document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      displayedList = getActiveList();
      loadAndPlaySong(currentSongIndex, true);
    });
  });

  // Playback Control Triggers
  document.getElementById('play-btn').onclick = () => {
    initAudioEngine();
    if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();

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

  // Timeline Progress Seek
  document.getElementById('progress-container').onclick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    if (activeAudio.duration) {
      activeAudio.currentTime = (clickX / rect.width) * activeAudio.duration;
    }
  };

  // Audio Timers
  activeAudio.addEventListener('timeupdate', () => {
    if (activeAudio.duration) {
      const percent = (activeAudio.currentTime / activeAudio.duration) * 100;
      document.getElementById('progress').style.width = `${percent}%`;
      document.getElementById('current-time').textContent = formatTime(activeAudio.currentTime);
      document.getElementById('total-duration').textContent = formatTime(activeAudio.duration);
    }
  });

  // Equalizer Drawer Toggle & Presets
  document.getElementById('eq-toggle-btn').onclick = () => {
    document.getElementById('eq-panel').classList.toggle('hidden');
  };

  document.querySelectorAll('.eq-band-slider').forEach(slider => {
    slider.oninput = (e) => {
      const bandIndex = parseInt(e.target.dataset.band);
      if (eqFilters[bandIndex]) {
        eqFilters[bandIndex].gain.value = parseFloat(e.target.value);
      }
    };
  });

  // Karaoke Mode Toggle
  document.getElementById('karaoke-btn').onclick = (e) => {
    isKaraokeActive = !isKaraokeActive;
    if (isKaraokeActive) {
      e.target.textContent = "🎤 Karaoke: ON";
      e.target.classList.add('active');
      eqFilters[2].gain.value = -12; // Lower vocal mid-frequencies
    } else {
      e.target.textContent = "🎤 Karaoke: OFF";
      e.target.classList.remove('active');
      eqFilters[2].gain.value = 0;
    }
  };

  renderPlaylist();
});
