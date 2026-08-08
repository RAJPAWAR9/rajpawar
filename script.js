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

// DUAL AUDIO ENGINE FOR SEAMLESS DYNAMIC CROSS-REMIX
let playerA = new Audio();
let playerB = new Audio();
let activeAudio = playerA;
let nextAudio = playerB;

let globalVolume = 1;
let crossfadeTime = 10; // 10 Seconds Crossfade
let crossfadeStarted = false;

let audioCtx, analyser, sourceNode, vocalFilterNode, eqFilters = [];
let isKaraokeOn = false;

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

function getSongFolderCategory(song) {
  if (playlist["90s"].some(s => s.title === song.title)) return "90s";
  return "Trending";
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
      loadAndPlaySong(currentSongIndex, true); // true = INSTANT MANUAL SWITCH
    };

    playlistView.appendChild(item);
  });
}

// MAIN FUNCTION TO LOAD & PLAY WITH FAST SWITCH + REMIX SUPPORT
function loadAndPlaySong(index, isManualTrigger = true) {
  const list = displayedList.length > 0 ? displayedList : getActiveList();
  if (!list[index]) return;

  const song = list[index];
  document.getElementById('song-title').textContent = song.title;
  document.getElementById('artist-name').textContent = song.artist;
  document.getElementById('category-badge').textContent = `${currentCategory.toUpperCase()} HITS`;

  const folderCat = getSongFolderCategory(song);
  const songUrl = buildUrl(folderCat, song.file, '.m4a');

  // CASE 1: INSTANT MANUAL CLICK (0 DELAY)
  if (isManualTrigger) {
    crossfadeStarted = false;
    
    // Stop both players instantly
    playerA.pause();
    playerB.pause();
    playerA.currentTime = 0;
    playerB.currentTime = 0;

    activeAudio = playerA;
    nextAudio = playerB;

    activeAudio.src = songUrl;
    activeAudio.volume = globalVolume;
    activeAudio.playbackRate = parseFloat(document.getElementById('speed-slider').value || 1);

    activeAudio.play().then(() => updatePlaybackUI(true)).catch(() => updatePlaybackUI(false));
  } 
  // CASE 2: AUTOMATIC CROSS-REMIX TRIGGERED BY TIMEUPDATE
  else {
    activeAudio = nextAudio;
    nextAudio = (activeAudio === playerA) ? playerB : playerA;
    crossfadeStarted = false;
  }

  renderPlaylist(displayedList);
}

// 10s DYNAMIC CROSSFADE ENGINE
function handleCrossfadeCheck() {
  if (crossfadeStarted || !activeAudio.duration || crossfadeTime <= 0) return;

  const remainingTime = activeAudio.duration - activeAudio.currentTime;

  // Jab gaane me exactly 10 Seconds bachhe honge tab Remix start hoga
  if (remainingTime <= crossfadeTime && remainingTime > 0) {
    crossfadeStarted = true;

    const list = displayedList.length > 0 ? displayedList : getActiveList();
    const nextIndex = (currentSongIndex + 1) % list.length;
    currentSongIndex = nextIndex;

    const nextSong = list[nextIndex];
    const folderCat = getSongFolderCategory(nextSong);
    const nextUrl = buildUrl(folderCat, nextSong.file, '.m4a');

    // Agla audio background me low volume par play kar do
    nextAudio.src = nextUrl;
    nextAudio.volume = 0;
    nextAudio.playbackRate = parseFloat(document.getElementById('speed-slider').value || 1);
    nextAudio.play();

    // Fade Out current audio & Fade In next audio over 10 seconds
    const intervalTime = 100;
    const steps = (crossfadeTime * 1000) / intervalTime;
    const volumeStep = globalVolume / steps;

    let currentStep = 0;
    const fadeTimer = setInterval(() => {
      currentStep++;

      // Active player ko dhire dhire silent karo
      if (activeAudio.volume > volumeStep) {
        activeAudio.volume = Math.max(0, activeAudio.volume - volumeStep);
      } else {
        activeAudio.volume = 0;
      }

      // Next player ki aawaz badhao (REMIX MIXING EFFECT)
      if (nextAudio.volume < globalVolume - volumeStep) {
        nextAudio.volume = Math.min(globalVolume, nextAudio.volume + volumeStep);
      } else {
        nextAudio.volume = globalVolume;
      }

      if (currentStep >= steps) {
        clearInterval(fadeTimer);
        activeAudio.pause();
        activeAudio.currentTime = 0;
        
        // Swap players
        loadAndPlaySong(currentSongIndex, false);
      }
    }, intervalTime);
  }
}

// Global Progress & Time Tracker
function attachAudioEvents(audioPlayer) {
  audioPlayer.addEventListener('timeupdate', () => {
    if (audioPlayer === activeAudio) {
      if (activeAudio.duration) {
        const percent = (activeAudio.currentTime / activeAudio.duration) * 100;
        document.getElementById('progress').style.width = `${percent}%`;
        document.getElementById('current-time').textContent = formatTime(activeAudio.currentTime);
        document.getElementById('total-duration').textContent = formatTime(activeAudio.duration);
      }
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

function formatTime(seconds) {
  if (isNaN(seconds)) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

document.addEventListener('DOMContentLoaded', () => {
  displayedList = getActiveList();

  // Search Bar Event
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      const filtered = getActiveList().filter(song => 
        song.title.toLowerCase().includes(query) || 
        song.artist.toLowerCase().includes(query)
      );
      renderPlaylist(filtered);
    });
  }

  // Category Switchers
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
        loadAndPlaySong(currentSongIndex, true);
      };
    }
  });

  // Play/Pause Button
  document.getElementById('play-btn').onclick = () => {
    if (activeAudio.paused) {
      activeAudio.play();
      updatePlaybackUI(true);
    } else {
      activeAudio.pause();
      nextAudio.pause();
      updatePlaybackUI(false);
    }
  };

  // Next Button -> FAST MANUAL CHANGE
  document.getElementById('next-btn').onclick = () => {
    const list = displayedList.length > 0 ? displayedList : getActiveList();
    currentSongIndex = (currentSongIndex + 1) % list.length;
    loadAndPlaySong(currentSongIndex, true);
  };

  // Prev Button -> FAST MANUAL CHANGE
  document.getElementById('prev-btn').onclick = () => {
    const list = displayedList.length > 0 ? displayedList : getActiveList();
    currentSongIndex = (currentSongIndex - 1 + list.length) % list.length;
    loadAndPlaySong(currentSongIndex, true);
  };

  // Progress Bar Seek Event
  document.getElementById('progress-container').onclick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    if (activeAudio.duration) {
      activeAudio.currentTime = (clickX / rect.width) * activeAudio.duration;
    }
  };

  // Crossfade Time Adjustment Slider
  const crossSlider = document.getElementById('crossfade-slider');
  if (crossSlider) {
    crossSlider.oninput = (e) => {
      crossfadeTime = parseInt(e.target.value);
      const crossVal = document.getElementById('crossfade-val');
      if (crossVal) crossVal.textContent = `${crossfadeTime}s`;
    };
  }

  // Master Volume Control
  const volSlider = document.getElementById('volume-slider');
  if (volSlider) {
    volSlider.oninput = (e) => {
      globalVolume = parseFloat(e.target.value);
      activeAudio.volume = globalVolume;
    };
  }

  renderPlaylist();
});
