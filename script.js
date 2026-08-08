// Master Songs List (Isme apne gaano ke path aur details add kar sakte ho)
let songs = [
  {
    songName: "Dil Ka Jo Haal Hai",
    category: "90s",
    filePath: "song/2026 music/90s/Dil Ka Jo Haal Hai - Abhijeet, Shreya Ghoshal.m4a",
    vibeColor: "linear-gradient(135deg, #1e3c72, #2a5298)"
  },
  {
    songName: "Aapke Pyaar Mein",
    category: "90s",
    filePath: "song/2026 music/90s/Aapke Pyaar Mein.m4a",
    vibeColor: "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)"
  },
  {
    songName: "2026 Track 1",
    category: "2026 Music",
    filePath: "song/2026 music/track1.mp3",
    vibeColor: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)"
  },
  {
    songName: "3D Audio Experience",
    category: "3D",
    filePath: "song/3d_song.mp3",
    vibeColor: "linear-gradient(135deg, #11998e, #38ef7d)"
  }
];

let filteredSongs = [...songs];
let songIndex = 0;
let crossfadeDuration = 3;
let isPlaying = false;

let currentAudio = new Audio();
let nextAudio = new Audio();

// Audio Visualizer Variables
let audioCtx, analyser, source;

// DOM Elements
const songTitle = document.getElementById("songTitle");
const songCategory = document.getElementById("songCategory");
const playBtn = document.getElementById("playBtn");
const playlistUI = document.getElementById("playlist");
const visualizerCanvas = document.getElementById("visualizerCanvas");
const canvasCtx = visualizerCanvas ? visualizerCanvas.getContext("2d") : null;

// Playlist Render Function
function renderPlaylist(list) {
  if (!playlistUI) return;
  playlistUI.innerHTML = "";
  list.forEach((song, i) => {
    let li = document.createElement("li");
    li.innerText = `${i + 1}. ${song.songName}`;
    li.onclick = () => playSong(i);
    if(i === songIndex) li.classList.add("playing");
    playlistUI.appendChild(li);
  });
}

// Play Song Function
function playSong(index) {
  songIndex = index;
  let track = filteredSongs[songIndex];

  if(!track) return;

  if (songTitle) songTitle.innerText = track.songName;
  if (songCategory) songCategory.innerText = `Category: ${track.category}`;
  document.body.style.background = track.vibeColor || "#0f2027";

  currentAudio.src = track.filePath;
  currentAudio.play().then(() => {
    isPlaying = true;
    if(playBtn) playBtn.innerText = "⏸️";
    setupVisualizer();
  }).catch(e => console.log("User click required for auto-play"));

  renderPlaylist(filteredSongs);

  // Auto Next & Crossfade Trigger
  currentAudio.ontimeupdate = () => {
    let timeLeft = currentAudio.duration - currentAudio.currentTime;
    if (timeLeft <= crossfadeDuration && crossfadeDuration > 0 && !currentAudio.crossfading) {
      currentAudio.crossfading = true;
      triggerCrossfade();
    }
  };

  currentAudio.onended = () => {
    if (crossfadeDuration === 0) playNextSong();
  };
}

// Crossfade Engine
function triggerCrossfade() {
  let nextIndex = (songIndex + 1) % filteredSongs.length;
  let nextTrack = filteredSongs[nextIndex];

  nextAudio.src = nextTrack.filePath;
  nextAudio.volume = 0;
  nextAudio.play();

  let step = 0.05;
  let intervalTime = (crossfadeDuration * 1000) * step;

  let fadeInterval = setInterval(() => {
    if (currentAudio.volume > step) currentAudio.volume -= step;
    if (nextAudio.volume < 1 - step) nextAudio.volume += step;
  }, intervalTime);

  setTimeout(() => {
    clearInterval(fadeInterval);
    currentAudio.pause();
    currentAudio.volume = 1;
    currentAudio.crossfading = false;

    let temp = currentAudio;
    currentAudio = nextAudio;
    nextAudio = temp;

    songIndex = nextIndex;
    if (songTitle) songTitle.innerText = filteredSongs[songIndex].songName;
    document.body.style.background = filteredSongs[songIndex].vibeColor;
    renderPlaylist(filteredSongs);
  }, crossfadeDuration * 1000);
}

// Play / Pause Toggle
function togglePlayPause() {
  if (isPlaying) {
    currentAudio.pause();
    isPlaying = false;
    if(playBtn) playBtn.innerText = "▶️";
  } else {
    if (!currentAudio.src) {
      playSong(0);
    } else {
      currentAudio.play();
      isPlaying = true;
      if(playBtn) playBtn.innerText = "⏸️";
      setupVisualizer();
    }
  }
}

function playNextSong() {
  let nextIndex = (songIndex + 1) % filteredSongs.length;
  playSong(nextIndex);
}

function playPrevSong() {
  let prevIndex = (songIndex - 1 + filteredSongs.length) % filteredSongs.length;
  playSong(prevIndex);
}

// Filter Categories
function filterCategory(cat) {
  document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
  if (event && event.target) event.target.classList.add('active');

  if (cat === 'All') {
    filteredSongs = [...songs];
  } else {
    filteredSongs = songs.filter(s => s.category === cat);
  }
  renderPlaylist(filteredSongs);
  if(filteredSongs.length > 0) playSong(0);
}

// Search Filter
function filterSongs() {
  let q = document.getElementById("searchInput").value.toLowerCase();
  filteredSongs = songs.filter(s => s.songName.toLowerCase().includes(q));
  renderPlaylist(filteredSongs);
}

// Volume Controls
function changeVolume(val) {
  currentAudio.volume = val;
}

function toggleMute() {
  currentAudio.muted = !currentAudio.muted;
  const muteBtn = document.getElementById("muteBtn");
  if (muteBtn) muteBtn.innerText = currentAudio.muted ? "🔇" : "🔊";
}

// Crossfade Slider Listener
document.getElementById("crossfadeSlider")?.addEventListener("input", (e) => {
  crossfadeDuration = parseInt(e.target.value);
  const crossfadeVal = document.getElementById("crossfadeVal");
  if (crossfadeVal) crossfadeVal.innerText = crossfadeDuration;
});

// Audio Visualizer Setup
function setupVisualizer() {
  if (audioCtx) return;
  try {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    analyser = audioCtx.createAnalyser();
    source = audioCtx.createMediaElementSource(currentAudio);
    source.connect(analyser);
    analyser.connect(audioCtx.destination);
    analyser.fftSize = 64;

    let bufferLength = analyser.frequencyBinCount;
    let dataArray = new Uint8Array(bufferLength);

    function drawVisualizer() {
      requestAnimationFrame(drawVisualizer);
      analyser.getByteFrequencyData(dataArray);

      if(!canvasCtx || !visualizerCanvas) return;
      canvasCtx.clearRect(0, 0, visualizerCanvas.width, visualizerCanvas.height);

      let barWidth = (visualizerCanvas.width / bufferLength) * 2;
      let barHeight;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i] / 2;
        canvasCtx.fillStyle = '#00ffff';
        canvasCtx.fillRect(x, visualizerCanvas.height - barHeight, barWidth, barHeight);
        x += barWidth + 2;
      }
    }
    drawVisualizer();
  } catch(e) {
    console.log("Visualizer init error: ", e);
  }
}

// Particles Canvas Animation
const pCanvas = document.getElementById("particleCanvas");
if (pCanvas) {
  const pCtx = pCanvas.getContext("2d");
  pCanvas.width = window.innerWidth;
  pCanvas.height = window.innerHeight;

  let particles = Array.from({ length: 40 }, () => ({
    x: Math.random() * pCanvas.width,
    y: Math.random() * pCanvas.height,
    radius: Math.random() * 3 + 1,
    speedY: Math.random() * 1 + 0.2
  }));

  function animateParticles() {
    pCtx.clearRect(0, 0, pCanvas.width, pCanvas.height);
    pCtx.fillStyle = "rgba(255, 255, 255, 0.3)";

    particles.forEach(p => {
      p.y -= p.speedY;
      if (p.y < 0) p.y = pCanvas.height;
      pCtx.beginPath();
      pCtx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      pCtx.fill();
    });

    requestAnimationFrame(animateParticles);
  }
  animateParticles();
}

// Initialize Playlist on load
renderPlaylist(filteredSongs);
