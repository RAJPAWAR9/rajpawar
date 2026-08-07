// Base Folders Configuration based on local directory
const BASE_FOLDER_2026 = "song/2026 music";
const BASE_FOLDER_90S = "song/2026 music/90s";

// Theme Configuration
const themes = {
  "2026": {
    badge: "2026 HITS",
    accentColor: "#00f2fe",
    glow: "radial-gradient(circle, rgba(0, 242, 254, 0.35) 0%, rgba(111, 0, 255, 0.2) 50%, transparent 80%)"
  },
  "90s": {
    badge: "90s CLASSICS",
    accentColor: "#ff4b91",
    glow: "radial-gradient(circle, rgba(255, 75, 145, 0.35) 0%, rgba(255, 145, 0, 0.2) 50%, transparent 80%)"
  }
};

const playlist = {
  "2026": [
    { title: "Aa Re Pritam Pyaare", artist: "Mamta Sharma, Sajid-Wajid", file: "Aa Re Pritam Pyaare" },
    { title: "Aapka Kya Hoga", artist: "Mika Singh, Sunidhi Chauhan", file: "Aapka Kya Hoga" },
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
    { title: "Dope Shope", artist: "Deep Money, Yo Yo Honey Singh", file: "dobshob honney" },
    { title: "Fevicol Se", artist: "Mamta Sharma, Wajid", file: "Fevicol Se" },
    { title: "Ghagra", artist: "Vishal Dadlani, Rekha Bhardwaj", file: "Ghagra - Vishal Dadlani, Rekha Bhardwaj" },
    { title: "Goli Maar Bheje", artist: "DJ Song Roadshow Mix", file: "Goli Maar Bheje }" },
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
    { title: "Sheila Ki Jawani", artist: "Sunidhi Chauhan, Vishal Dadlani", file: "Sheila Ki Jawani" },
    { title: "Tera Rastaa", artist: "Anusha Mani, Amitabh Bhattacharya", file: "Tera Rastaa" },
    { title: "Tere Liye", artist: "Atif Aslam", file: "Tere Liye - Atif Aslam" },
    { title: "Tinku Jiya", artist: "Mamta Sharma, Javed Ali", file: "Tinku Jiya" },
    { title: "Ud-daa Punjab", artist: "Udta Punjab", file: "Ud-daa Punjab" },
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
  ]
};

let currentCategory = "2026";
let currentSongIndex = 0;
let testedExtensionIndex = 0;

const possibleFormats = ['.mp3', '.m4a', '.wav', '.aac', '.ogg', '.flac', '.mp4'];

const audio = document.getElementById('audio');
const playBtn = document.getElementById('play-btn');
const disc = document.getElementById('disc');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const lyricsContent = document.getElementById('lyrics-content');
const playlistView = document.getElementById('playlist-view');
const trackCount = document.getElementById('track-count');
const bgGlow = document.getElementById('bg-glow');
const categoryBadge = document.getElementById('category-badge');

function buildUrl(category, fileName, extension) {
  const base = (category === "2026") ? BASE_FOLDER_2026 : BASE_FOLDER_90S;
  const fullPath = `${base}/${fileName}${extension}`;
  return fullPath.split('/').map(part => encodeURIComponent(part)).join('/');
}

// Extension Fallback
audio.addEventListener('error', () => {
  testedExtensionIndex++;
  if (testedExtensionIndex < possibleFormats.length) {
    const song = playlist[currentCategory][currentSongIndex];
    audio.src = buildUrl(currentCategory, song.file, possibleFormats[testedExtensionIndex]);
    audio.load();
    audio.play().catch(() => {});
  } else {
    if (lyricsContent) {
      lyricsContent.textContent = `⚠️ Check file: "${playlist[currentCategory][currentSongIndex].file}"`;
      lyricsContent.style.color = "#ff4d4d";
    }
  }
});

function applyTheme(category) {
  const theme = themes[category];
  
  bgGlow.style.background = theme.glow;
  categoryBadge.textContent = theme.badge;
  categoryBadge.style.color = theme.accentColor;
  categoryBadge.style.borderColor = theme.accentColor;
  categoryBadge.style.background = `${theme.accentColor}1d`;

  document.querySelector('.disc-center').style.background = theme.accentColor;
  document.querySelector('.disc-center').style.boxShadow = `0 0 12px ${theme.accentColor}`;
  progress.style.background = theme.accentColor;
  
  playBtn.style.background = theme.accentColor;
  playBtn.style.boxShadow = `0 8px 25px ${theme.accentColor}66`;
}

function renderPlaylist() {
  if (!playlistView) return;
  playlistView.innerHTML = '';
  const currentList = playlist[currentCategory];
  if (trackCount) trackCount.textContent = `${currentList.length} Songs`;

  currentList.forEach((song, index) => {
    const item = document.createElement('div');
    const isActive = index === currentSongIndex;
    item.className = `song-item ${isActive ? 'active' : ''}`;
    
    if (isActive) {
      item.style.borderColor = themes[currentCategory].accentColor;
    }

    item.innerHTML = `
      <div class="song-info">
        <div class="song-item-title">${index + 1}. ${song.title}</div>
        <div class="song-item-artist">${song.artist}</div>
      </div>
      ${isActive ? `<span class="playing-icon" style="color: ${themes[currentCategory].accentColor}">♫</span>` : ''}
    `;

    item.onclick = () => {
      currentSongIndex = index;
      loadSong(currentCategory, currentSongIndex);
      playAudio();
    };

    playlistView.appendChild(item);
  });
}

function loadSong(category, index) {
  testedExtensionIndex = 0;
  const song = playlist[category][index];
  
  document.getElementById('song-title').textContent = song.title;
  document.getElementById('artist-name').textContent = song.artist;
  
  applyTheme(category);

  if (lyricsContent) {
    lyricsContent.textContent = `Playing: ${song.title}`;
    lyricsContent.style.color = themes[category].accentColor;
  }

  audio.src = buildUrl(category, song.file, possibleFormats[testedExtensionIndex]);
  audio.load();
  renderPlaylist();
}

function playAudio() {
  audio.play().then(() => {
    playBtn.textContent = '❚❚';
    if (disc) disc.classList.add('playing');
  }).catch(() => {});
}

function pauseAudio() {
  audio.pause();
  playBtn.textContent = '▶';
  if (disc) disc.classList.remove('playing');
}

playBtn.addEventListener('click', () => {
  if (audio.paused) {
    playAudio();
  } else {
    pauseAudio();
  }
});

function switchCategory(categoryName, btnElement) {
  currentCategory = categoryName;
  currentSongIndex = 0;
  
  document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
  if (btnElement) btnElement.classList.add('active');

  loadSong(currentCategory, currentSongIndex);
  pauseAudio();
}

document.getElementById('next-btn').addEventListener('click', () => {
  currentSongIndex = (currentSongIndex + 1) % playlist[currentCategory].length;
  loadSong(currentCategory, currentSongIndex);
  playAudio();
});

document.getElementById('prev-btn').addEventListener('click', () => {
  currentSongIndex = (currentSongIndex - 1 + playlist[currentCategory].length) % playlist[currentCategory].length;
  loadSong(currentCategory, currentSongIndex);
  playAudio();
});

audio.addEventListener('ended', () => {
  currentSongIndex = (currentSongIndex + 1) % playlist[currentCategory].length;
  loadSong(currentCategory, currentSongIndex);
  playAudio();
});

audio.addEventListener('timeupdate', (e) => {
  const { duration, currentTime } = e.target;
  if (duration) {
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
    document.getElementById('current-time').textContent = formatTime(currentTime);
    document.getElementById('total-duration').textContent = formatTime(duration);
  }
});

function formatTime(secs) {
  let min = Math.floor(secs / 60);
  let sec = Math.floor(secs % 60);
  if (sec < 10) sec = `0${sec}`;
  return `${min}:${sec}`;
}

progressContainer.addEventListener('click', (e) => {
  const width = progressContainer.clientWidth;
  const clickX = e.offsetX;
  if (audio.duration) {
    audio.currentTime = (clickX / width) * audio.duration;
  }
});

loadSong(currentCategory, currentSongIndex);