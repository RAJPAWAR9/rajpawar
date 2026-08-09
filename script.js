/**
 * BOOSTER V0.9 - Next-Gen Audio OS Engine
 * Designed by Raj Pawar
 */

const SECURITY_PASSWORD = "raj123";

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
let songHistory = [];
let customQueue = [];

let playerA = new Audio();
let playerB = new Audio();
let activeAudio = playerA;
let nextAudio = playerB;

let globalVolume = 1.0;
let crossfadeTime = 10;
let crossfadeStarted = false;
let audioCtx, analyser, srcNodeA, srcNodeB;

function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast-msg';
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => { toast.remove(); }, 3000);
}

function initPasswordLock() {
  const lockBtn = document.getElementById('unlock-btn');
  const passInput = document.getElementById('access-pass');
  const lockError = document.getElementById('lock-error');
  const lockScreen = document.getElementById('lock-screen');

  function tryUnlock() {
    if (passInput.value === SECURITY_PASSWORD) {
      lockScreen.style.opacity = '0';
      setTimeout(() => lockScreen.style.display = 'none', 300);
    } else {
      lockError.style.display = 'block';
    }
  }

  if (lockBtn) lockBtn.onclick = tryUnlock;
  if (passInput) {
    passInput.onkeypress = (e) => {
      if (e.key === 'Enter') tryUnlock();
    };
  }
}

function buildUrl(song, extension = "m4a") {
  const is90s = playlist["90s"].some(s => s.file === song.file);
  const basePath = is90s ? BASE_FOLDER_90S : BASE_FOLDER_2026;
  return `${basePath}/${song.file}.${extension}`.split('/').map(part => encodeURIComponent(part)).join('/');
}

function getActiveList() {
  if (currentCategory === "All") {
    return [...playlist["Trending"], ...playlist["90s"], ...playlist["3D Audio"]];
  }
  return playlist[currentCategory] || playlist["Trending"];
}

function updateMoodLighting(song) {
  const ambientGlow = document.getElementById('ambient-glow');
  if (!ambientGlow) return;

  const is90s = playlist["90s"].some(s => s.file === song.file);
  const is3D = playlist["3D Audio"].some(s => s.file === song.file);

  if (is90s) {
    ambientGlow.style.background = 'radial-gradient(circle, rgba(255, 170, 0, 0.2) 0%, rgba(255, 85, 0, 0.15) 40%, rgba(0,0,0,0) 70%)';
  } else if (is3D) {
    ambientGlow.style.background = 'radial-gradient(circle, rgba(255, 0, 128, 0.25) 0%, rgba(0, 242, 254, 0.2) 40%, rgba(0,0,0,0) 70%)';
  } else {
    ambientGlow.style.background = 'radial-gradient(circle, rgba(0, 242, 254, 0.15) 0%, rgba(121, 40, 202, 0.1) 40%, rgba(0,0,0,0) 70%)';
  }
}

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
    
    // Pure Untouched Audio Output
    analyser.connect(audioCtx.destination);
    
    renderBeatSyncVisualizer();
  } catch (e) {
    console.log("Audio Context Error:", e);
  }
}

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
    for (let i = 0; i < 10; i++) bassSum += dataArray[i] || 0;
    let bassAvg = bassSum / 10;

    const ambientGlow = document.getElementById("ambient-glow");
    if (ambientGlow && !activeAudio.paused) {
      ambientGlow.style.transform = `translate(-50%, -50%) scale(${1 + (bassAvg / 255) * 0.15})`;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (!activeAudio.paused) {
      let gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 20,
        canvas.width / 2, canvas.height / 2, 100 + (bassAvg / 255) * 400
      );
      gradient.addColorStop(0, `hsla(${(Date.now() / 25) % 360}, 100%, 50%, 0.2)`);
      gradient.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
  }
  renderFrame();
}

function playAudioWithFallback(audioElement, song) {
  audioElement.src = buildUrl(song, "m4a");
  const playPromise = audioElement.play();
  if (playPromise !== undefined) {
    playPromise.then(() => updatePlaybackUI(true)).catch(() => {
      audioElement.src = buildUrl(song, "mp3");
      audioElement.play().then(() => updatePlaybackUI(true)).catch(() => updatePlaybackUI(false));
    });
  }
}

function updateQueueAndHistoryUI() {
  const upnextList = document.getElementById('upnext-list');
  const historyList = document.getElementById('history-list');
  const list = displayedList.length > 0 ? displayedList : getActiveList();

  if (upnextList) {
    upnextList.innerHTML = '';
    let queueToShow = customQueue.length > 0 ? customQueue : [];
    if (customQueue.length === 0) {
      for (let i = 1; i <= 5; i++) {
        let idx = (currentSongIndex + i) % list.length;
        if (list[idx]) queueToShow.push(list[idx]);
      }
    }

    queueToShow.forEach((song, idx) => {
      const item = document.createElement('div');
      item.style.cssText = "padding:10px 14px; background:rgba(255,255,255,0.03); border-radius:12px; border:1px solid var(--glass-border); display:flex; justify-content:space-between; align-items:center;";
      item.innerHTML = `
        <div>
          <div style="font-size:13px; font-weight:600; color:#fff;">${song.title}</div>
          <div style="font-size:11px; color:var(--text-secondary);">${song.artist}</div>
        </div>
        <div style="display:flex; align-items:center; gap:8px;">
          <span style="font-size:11px; color:var(--primary-glow);">#${idx + 1}</span>
          ${customQueue.length > 0 ? `<button onclick="removeFromQueue(${idx})" style="background:none; border:none; color:#ff0055; cursor:pointer; font-size:14px;">✕</button>` : ''}
        </div>
      `;
      upnextList.appendChild(item);
    });
  }

  if (historyList) {
    historyList.innerHTML = '';
    songHistory.forEach((song) => {
      const item = document.createElement('div');
      item.style.cssText = "padding:10px 14px; background:rgba(255,255,255,0.03); border-radius:12px; border:1px solid var(--glass-border);";
      item.innerHTML = `
        <div style="font-size:13px; font-weight:600; color:#fff;">${song.title}</div>
        <div style="font-size:11px; color:var(--text-secondary);">${song.artist}</div>
      `;
      historyList.appendChild(item);
    });
  }
}

function removeFromQueue(index) {
  customQueue.splice(index, 1);
  updateQueueAndHistoryUI();
}

function getNextSong() {
  if (customQueue.length > 0) {
    return customQueue.shift();
  }
  const list = displayedList.length > 0 ? displayedList : getActiveList();
  currentSongIndex = (currentSongIndex + 1) % list.length;
  return list[currentSongIndex];
}

function loadAndPlaySong(songToPlay = null, isManualTrigger = true) {
  initBeatSync();
  if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();

  const list = displayedList.length > 0 ? displayedList : getActiveList();
  let song = songToPlay || list[currentSongIndex];

  if (!song) return;

  if (!songHistory.some(s => s.file === song.file)) {
    songHistory.unshift(song);
    if (songHistory.length > 10) songHistory.pop();
  }

  document.getElementById('mini-title').textContent = song.title;
  document.getElementById('mini-artist').textContent = song.artist + " • Designed by Raj Pawar";
  document.getElementById('modal-title').textContent = song.title;
  document.getElementById('modal-artist').textContent = song.artist + " • Designed by Raj Pawar";
  
  if (document.getElementById('np-title')) document.getElementById('np-title').textContent = song.title;
  if (document.getElementById('np-artist')) document.getElementById('np-artist').textContent = song.artist + " • Designed by Raj Pawar";

  updateMoodLighting(song);
  showToast(`Now Playing: ${song.title}`);

  if (isManualTrigger) {
    crossfadeStarted = false;
    playerA.pause(); playerB.pause();
    playerA.currentTime = 0; playerB.currentTime = 0;

    activeAudio = playerA; nextAudio = playerB;
    activeAudio.volume = globalVolume;
    playAudioWithFallback(activeAudio, song);
  }

  updateQueueAndHistoryUI();
  renderTrendingGrid();
}

function attachAudioEvents(audioPlayer) {
  audioPlayer.addEventListener('timeupdate', () => {
    if (audioPlayer === activeAudio && activeAudio.duration) {
      const percent = (activeAudio.currentTime / activeAudio.duration) * 100;
      
      const fill = document.getElementById('progress-fill');
      const modalFill = document.getElementById('modal-progress-fill');
      if (fill) fill.style.width = `${percent}%`;
      if (modalFill) modalFill.style.width = `${percent}%`;

      const formattedCurrent = formatTime(activeAudio.currentTime);
      const formattedTotal = formatTime(activeAudio.duration);

      document.getElementById('time-current').textContent = formattedCurrent;
      document.getElementById('time-total').textContent = formattedTotal;
      document.getElementById('modal-time-current').textContent = formattedCurrent;
      document.getElementById('modal-time-total').textContent = formattedTotal;

      const timeLeft = activeAudio.duration - activeAudio.currentTime;
      if (timeLeft <= crossfadeTime && !crossfadeStarted && crossfadeTime > 0) {
        crossfadeStarted = true;
        const nextSong = getNextSong();
        if (nextSong) {
          nextAudio.currentTime = 0;
          nextAudio.volume = 0;
          playAudioWithFallback(nextAudio, nextSong);

          let fadeInterval = setInterval(() => {
            let step = 0.05;
            if (activeAudio.volume > step) activeAudio.volume -= step;
            if (nextAudio.volume < globalVolume - step) nextAudio.volume += step;

            if (activeAudio.volume <= step) {
              clearInterval(fadeInterval);
              activeAudio.pause();
              let temp = activeAudio;
              activeAudio = nextAudio;
              nextAudio = temp;
              crossfadeStarted = false;
              updateQueueAndHistoryUI();
            }
          }, 200);
        }
      }
    }
  });

  audioPlayer.addEventListener('ended', () => {
    if (audioPlayer === activeAudio && !crossfadeStarted) {
      const nextSong = getNextSong();
      loadAndPlaySong(nextSong, true);
    }
  });
}

attachAudioEvents(playerA);
attachAudioEvents(playerB);

function updatePlaybackUI(isPlaying) {
  const btn = document.getElementById('master-play-btn');
  const modalBtn = document.getElementById('modal-play-btn');
  if (btn) btn.textContent = isPlaying ? '❚❚' : '▶';
  if (modalBtn) modalBtn.textContent = isPlaying ? '❚❚' : '▶';
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
    card.style.cssText = "padding:12px 14px; border-radius:14px; cursor:pointer; display:flex; justify-content:space-between; align-items:center;";

    card.innerHTML = `
      <div style="overflow:hidden; max-width:75%;">
        <div style="font-weight:700; font-size:13px; color:#fff; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${index + 1}. ${song.title}</div>
        <div style="font-size:11px; color:var(--text-secondary); margin-top:2px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${song.artist}</div>
      </div>
      <button class="add-queue-btn" style="background:rgba(255,255,255,0.06); border:1px solid var(--glass-border); color:var(--primary-glow); padding:6px 10px; border-radius:8px; cursor:pointer; font-size:11px; flex-shrink:0;">+ Queue</button>
    `;

    card.onclick = (e) => {
      if (e.target.classList.contains('add-queue-btn')) {
        e.stopPropagation();
        customQueue.push(song);
        updateQueueAndHistoryUI();
        showToast(`Added to Queue: ${song.title}`);
        return;
      }
      currentSongIndex = index;
      loadAndPlaySong(song, true);
    };

    grid.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initPasswordLock();
  displayedList = getActiveList();
  renderTrendingGrid();

  const crossInputs = document.querySelectorAll('.crossfade-slider-input');
  const crossDisps = document.querySelectorAll('.crossfade-val-disp');

  crossInputs.forEach(input => {
    input.value = crossfadeTime;
    input.oninput = (e) => {
      crossfadeTime = parseInt(e.target.value);
      crossInputs.forEach(i => i.value = crossfadeTime);
      crossDisps.forEach(d => d.textContent = `${crossfadeTime}s`);
    };
  });

  const masterBar = document.getElementById('master-player-bar');
  const playerModal = document.getElementById('player-modal');
  const modalClose = document.getElementById('modal-close-btn');

  if (masterBar && playerModal) {
    masterBar.onclick = (e) => {
      if (e.target.closest('button') || e.target.closest('input')) return;
      playerModal.classList.add('active');
    };
  }

  if (modalClose && playerModal) {
    modalClose.onclick = () => { playerModal.classList.remove('active'); };
  }

  let touchStartY = 0;
  if (playerModal) {
    playerModal.addEventListener('touchstart', (e) => { touchStartY = e.touches[0].clientY; }, {passive: true});
    playerModal.addEventListener('touchend', (e) => {
      let touchEndY = e.changedTouches[0].clientY;
      if (touchEndY - touchStartY > 80) playerModal.classList.remove('active');
    }, {passive: true});
  }

  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT') return;
    if (e.code === 'Space') {
      e.preventDefault();
      document.getElementById('master-play-btn').click();
    } else if (e.code === 'ArrowRight') {
      activeAudio.currentTime = Math.min(activeAudio.currentTime + 5, activeAudio.duration);
    } else if (e.code === 'ArrowLeft') {
      activeAudio.currentTime = Math.max(activeAudio.currentTime - 5, 0);
    } else if (e.key === 'm' || e.key === 'M') {
      activeAudio.muted = !activeAudio.muted;
      showToast(activeAudio.muted ? "Muted" : "Unmuted");
    } else if (e.key === 'Escape') {
      if (playerModal) playerModal.classList.remove('active');
    }
  });

  const catBtns = [
    { id: 'btn-2026', cat: 'Trending' },
    { id: 'btn-90s', cat: '90s' },
    { id: 'btn-3d', cat: '3D Audio' },
    { id: 'btn-all', cat: 'All' }
  ];

  catBtns.forEach(item => {
    const btn = document.getElementById(item.id);
    if (btn) {
      btn.onclick = () => {
        const grid = document.getElementById('trending-grid');
        if (grid) grid.classList.add('animating');

        setTimeout(() => {
          document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          currentCategory = item.cat;
          displayedList = getActiveList();
          currentSongIndex = 0;
          renderTrendingGrid();
          if (grid) grid.classList.remove('animating');
        }, 150);
      };
    }
  });

  const handleSeek = (e, container) => {
    if (!activeAudio.duration) return;
    const rect = container.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    activeAudio.currentTime = (clickX / rect.width) * activeAudio.duration;
  };

  const progressContainer = document.getElementById('progress-bar-container');
  const modalProgressContainer = document.getElementById('modal-progress-container');

  if (progressContainer) progressContainer.onclick = (e) => handleSeek(e, progressContainer);
  if (modalProgressContainer) modalProgressContainer.onclick = (e) => handleSeek(e, modalProgressContainer);

  const searchInput = document.getElementById('global-search');
  if (searchInput) {
    searchInput.oninput = (e) => {
      const query = e.target.value.toLowerCase().trim();
      const fullList = getActiveList();
      displayedList = fullList.filter(s => 
        s.title.toLowerCase().includes(query) || s.artist.toLowerCase().includes(query)
      );
      renderTrendingGrid();
    };
  }

  const volSlider = document.getElementById('master-volume');
  if (volSlider) {
    volSlider.oninput = (e) => {
      globalVolume = parseFloat(e.target.value);
      activeAudio.volume = globalVolume;
    };
  }

  const tabUpNext = document.getElementById('tab-upnext');
  const tabHistory = document.getElementById('tab-history');
  const upnextCont = document.getElementById('upnext-container');
  const historyCont = document.getElementById('history-container');

  if (tabUpNext && tabHistory) {
    tabUpNext.onclick = () => {
      tabUpNext.classList.add('active');
      tabHistory.classList.remove('active');
      upnextCont.style.display = 'block';
      historyCont.style.display = 'none';
    };
    tabHistory.onclick = () => {
      tabHistory.classList.add('active');
      tabUpNext.classList.remove('active');
      historyCont.style.display = 'block';
      upnextCont.style.display = 'none';
    };
  }

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

  const togglePlay = () => {
    initBeatSync();
    if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
    if (!activeAudio.src) { loadAndPlaySong(null, true); return; }

    if (activeAudio.paused) {
      activeAudio.play();
      updatePlaybackUI(true);
    } else {
      activeAudio.pause();
      nextAudio.pause();
      updatePlaybackUI(false);
    }
  };

  document.getElementById('master-play-btn').onclick = togglePlay;
  document.getElementById('modal-play-btn').onclick = togglePlay;

  const playNext = () => {
    const nextSong = getNextSong();
    loadAndPlaySong(nextSong, true);
  };

  document.getElementById('next-btn').onclick = playNext;
  document.getElementById('modal-next-btn').onclick = playNext;

  const playPrev = () => {
    const list = displayedList.length > 0 ? displayedList : getActiveList();
    currentSongIndex = (currentSongIndex - 1 + list.length) % list.length;
    loadAndPlaySong(list[currentSongIndex], true);
  };

  document.getElementById('prev-btn').onclick = playPrev;
  document.getElementById('modal-prev-btn').onclick = playPrev;
});
