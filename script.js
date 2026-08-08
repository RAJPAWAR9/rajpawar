/**
 * AURA OS - Next-Gen Ambient Music Engine
 * Unified Audio Architecture, Web Audio DSP, & Dynamic UI State
 */

// Global Audio Engine Context
let audioCtx;
let analyser;
let eqFilters = [];
let stereoPanner;

// Dual Audio Nodes for Gapless & Crossfade Logic
let activePlayer = new Audio();
let standbyPlayer = new Audio();
activePlayer.crossOrigin = "anonymous";
standbyPlayer.crossOrigin = "anonymous";

let currentTrackIndex = 0;
let isPlaying = false;
let crossfadeDuration = 6; // Seconds

// Mock Database with Synced Lyrics
const trackDatabase = [
  {
    id: "tr-001",
    title: "Cybernetic Horizon",
    artist: "AURA Synthetics",
    album: "2026 Core",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    color: "#00f2fe",
    lyrics: [
      { time: 0, text: "Initializing quantum neural link..." },
      { time: 10, text: "Drifting through the digital neon rain..." },
      { time: 22, text: "Frequencies align in harmonic light..." },
      { time: 35, text: "Welcome to the future of sound." }
    ]
  },
  {
    id: "tr-002",
    title: "Starlight Echoes",
    artist: "Kavinsky Wave",
    album: "Deep Space",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    color: "#ff007f",
    lyrics: [
      { time: 0, text: "Signals lost in infinite void..." },
      { time: 15, text: "Echoes calling back from distant stars..." },
      { time: 30, text: "Resonating deep within the core." }
    ]
  }
];

// Initialize Web Audio DSP Graph
function initAudioDSP() {
  if (audioCtx) return;

  const AudioContext = window.AudioContext || window.webkitAudioContext;
  audioCtx = new AudioContext();

  analyser = audioCtx.createAnalyser();
  analyser.fftSize = 256;

  // 5-Band Equalizer Nodes Setup
  const freqs = [60, 250, 1000, 4000, 16000];
  eqFilters = freqs.map((freq) => {
    const filter = audioCtx.createBiquadFilter();
    filter.type = freq <= 250 ? "lowshelf" : freq >= 4000 ? "highshelf" : "peaking";
    filter.frequency.value = freq;
    filter.gain.value = 0;
    return filter;
  });

  // Stereo Panner Node
  stereoPanner = audioCtx.createStereoPanner ? audioCtx.createStereoPanner() : null;

  // Connect Active Player Source Node
  const source = audioCtx.createMediaElementSource(activePlayer);

  // Connect Audio Graph Pipeline
  let lastNode = source;
  eqFilters.forEach((filter) => {
    lastNode.connect(filter);
    lastNode = filter;
  });

  if (stereoPanner) {
    lastNode.connect(stereoPanner);
    lastNode = stereoPanner;
  }

  lastNode.connect(analyser);
  analyser.connect(audioCtx.destination);

  renderVisualizer();
}

// 60-FPS Ambient Visualizer Engine
function renderVisualizer() {
  const canvas = document.getElementById("visualizer-canvas");
  const ctx = canvas.getContext("2d");

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);

  function draw() {
    requestAnimationFrame(draw);
    analyser.getByteFrequencyData(dataArray);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let avgBass = 0;
    for (let i = 0; i < 10; i++) avgBass += dataArray[i];
    avgBass /= 10;

    // Reactively pulse background ambient radial glow
    const ambientGlow = document.getElementById("ambient-glow");
    if (ambientGlow) {
      const scale = 1 + (avgBass / 255) * 0.2;
      ambientGlow.style.transform = `translate(-50%, -50%) scale(${scale})`;
    }

    // Render Particle Waveform
    const barWidth = (canvas.width / bufferLength) * 2.5;
    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
      const barHeight = (dataArray[i] / 255) * (canvas.height * 0.3);

      ctx.fillStyle = `rgba(0, 242, 254, ${dataArray[i] / 255})`;
      ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);

      x += barWidth + 1;
    }
  }
  draw();
}

// Playback Logic Execution
function loadTrack(index) {
  initAudioDSP();
  if (audioCtx.state === "suspended") audioCtx.resume();

  const track = trackDatabase[index];
  currentTrackIndex = index;

  activePlayer.src = track.src;
  activePlayer.play();
  isPlaying = true;

  updateUI(track);
}

function updateUI(track) {
  document.getElementById("mini-title").textContent = track.title;
  document.getElementById("mini-artist").textContent = track.artist;
  document.getElementById("np-title").textContent = track.title;
  document.getElementById("np-artist").textContent = track.artist;

  // Dynamic Accent Color Shift
  document.documentElement.style.setProperty("--primary-glow", track.color);

  renderLyrics(track.lyrics);
}

// Synchronized Lyrics Engine
function renderLyrics(lyrics) {
  const container = document.getElementById("lyrics-scroll-container");
  if (!container) return;

  container.innerHTML = "";
  lyrics.forEach((line) => {
    const lineEl = document.createElement("div");
    lineEl.className = "lyric-line";
    lineEl.textContent = line.text;
    lineEl.dataset.time = line.time;
    container.appendChild(lineEl);
  });
}

// Live Time Updates & Synced Scrolling
activePlayer.addEventListener("timeupdate", () => {
  const curTime = activePlayer.currentTime;
  const duration = activePlayer.duration || 1;

  // Update Progress Bar
  const fill = document.getElementById("progress-fill");
  if (fill) fill.style.width = `${(curTime / duration) * 100}%`;

  document.getElementById("time-current").textContent = formatTime(curTime);
  document.getElementById("time-total").textContent = formatTime(duration);

  // Sync Lyrics Highlighting
  const track = trackDatabase[currentTrackIndex];
  if (track && track.lyrics) {
    const lines = document.querySelectorAll(".lyric-line");
    track.lyrics.forEach((line, idx) => {
      if (curTime >= line.time) {
        lines.forEach((l) => l.classList.remove("active"));
        if (lines[idx]) {
          lines[idx].classList.add("active");
          lines[idx].scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
    });
  }
});

function formatTime(secs) {
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60);
  return `${m}:${s < 10 ? "0" : ""}${s}`;
}

// Single-Page View Navigation Engine
document.addEventListener("DOMContentLoaded", () => {
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

  // Now Playing Quick Nav Trigger
  document.getElementById("btn-now-playing")?.addEventListener("click", () => {
    viewPanels.forEach((p) => p.classList.remove("active"));
    document.getElementById("view-now-playing").classList.add("active");
  });

  // Master Play Pause
  document.getElementById("master-play-btn").onclick = () => {
    if (!activePlayer.src) {
      loadTrack(0);
      return;
    }
    if (activePlayer.paused) {
      activePlayer.play();
      document.getElementById("master-play-btn").textContent = "❚❚";
    } else {
      activePlayer.pause();
      document.getElementById("master-play-btn").textContent = "▶";
    }
  };
});
