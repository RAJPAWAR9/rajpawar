/**
 * BOOSTER V0.9 - Complete Apple Music UI Engine
 * All user tracks preserved without any missing items
 */

const SECURITY_PASSWORD = "raj123";

const BASE_FOLDER_2026 = "song/2026 music";
const BASE_FOLDER_90S = "song/2026 music/90s";

// COMPLETE UNTOUCHED PLAYLIST ARRAY
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

const gradients = [
  "linear-gradient(135deg, #ff0844 0%, #ffb199 100%)",
  "linear-gradient(135deg, #b122e0 0%, #ff63de 100%)",
  "linear-gradient(135deg, #00c6fb 0%, #005bea 100%)",
  "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
  "linear-gradient(135deg, #fc4a1a 0%, #f7b733 100%)"
];

let activeList = [];
let currentIndex = 0;
let audioPlayer = new Audio();

function getGradient(title) {
  const code = title.charCodeAt(0) || 0;
  return gradients[code % gradients.length];
}

function buildUrl(song, ext = "m4a") {
  const is90s = playlist["90s"].some(s => s.file === song.file);
  const basePath = is90s ? BASE_FOLDER_90S : BASE_FOLDER_2026;
  return `${basePath}/${song.file}.${ext}`.split('/').map(part => encodeURIComponent(part)).join('/');
}

function loadAndPlay(index) {
  if (index < 0 || index >= activeList.length) return;
  currentIndex = index;
  const song = activeList[currentIndex];

  const letter = song.title.charAt(0).toUpperCase();
  const bgGradient = getGradient(song.title);

  // Update Mini Player UI
  document.getElementById('mini-title').textContent = song.title;
  document.getElementById('mini-artist').textContent = song.artist;
  const miniArt = document.getElementById('mini-art');
  miniArt.textContent = letter;
  miniArt.style.background = bgGradient;

  // Update Full Screen Player Overlay
  document.getElementById('full-title').textContent = song.title;
  document.getElementById('full-artist').textContent = song.artist;
  const fullArt = document.getElementById('full-cover-art');
  fullArt.textContent = letter;
  fullArt.style.background = bgGradient;

  // Set Dynamic Blur Background for Full Player
  document.getElementById('full-player-overlay').style.background = bgGradient;

  // Play Audio with MP3 Fallback
  audioPlayer.src = buildUrl(song, "m4a");
  audioPlayer.play().catch(() => {
    audioPlayer.src = buildUrl(song, "mp3");
    audioPlayer.play();
  });

  updatePlayIcons(true);
}

function updatePlayIcons(isPlaying) {
  const icon = isPlaying ? '❚❚' : '▶';
  document.getElementById('mini-play-btn').textContent = icon;
  document.getElementById('full-play-btn').textContent = icon;
}

function renderSongsGrid(songsToRender) {
  const grid = document.getElementById('trending-grid');
  if (!grid) return;
  grid.innerHTML = '';

  songsToRender.forEach((song, idx) => {
    const letter = song.title.charAt(0).toUpperCase();
    const bgGradient = getGradient(song.title);

    const item = document.createElement('div');
    item.className = 'track-item';
    item.innerHTML = `
      <div class="track-thumb" style="background:${bgGradient}">${letter}</div>
      <div class="track-meta">
        <div class="title">${song.title}</div>
        <div class="artist">${song.artist}</div>
      </div>
      <button class="icon-btn" style="color: var(--accent-red); font-size:14px;">▶</button>
    `;

    item.onclick = () => {
      activeList = songsToRender;
      loadAndPlay(idx);
    };

    grid.appendChild(item);
  });
}

function filterCategory(cat) {
  if (cat === 'All') {
    activeList = [...playlist["Trending"], ...playlist["90s"], ...playlist["3D Audio"]];
  } else {
    activeList = playlist[cat] || playlist["Trending"];
  }
  renderSongsGrid(activeList);
}

function formatTime(s) {
  if (isNaN(s)) return "0:00";
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec < 10 ? '0' : ''}${sec}`;
}

document.addEventListener('DOMContentLoaded', () => {
  // Lock screen check
  document.getElementById('unlock-btn').onclick = () => {
    if (document.getElementById('access-pass').value === SECURITY_PASSWORD) {
      document.getElementById('lock-screen').style.display = 'none';
    } else {
      document.getElementById('lock-error').style.display = 'block';
    }
  };

  // Initial Load with all Trending songs
  filterCategory('Trending');

  // Mini Player Tap to Open Full Screen Apple Music View
  document.getElementById('open-full-player').onclick = () => {
    document.getElementById('full-player-overlay').classList.add('open');
  };

  document.getElementById('close-full-player').onclick = () => {
    document.getElementById('full-player-overlay').classList.remove('open');
  };

  // Playback Control Handlers
  const togglePlay = () => {
    if (!audioPlayer.src) { loadAndPlay(0); return; }
    if (audioPlayer.paused) {
      audioPlayer.play();
      updatePlayIcons(true);
    } else {
      audioPlayer.pause();
      updatePlayIcons(false);
    }
  };

  document.getElementById('mini-play-btn').onclick = togglePlay;
  document.getElementById('full-play-btn').onclick = togglePlay;

  document.getElementById('mini-next-btn').onclick = () => loadAndPlay((currentIndex + 1) % activeList.length);
  document.getElementById('full-next-btn').onclick = () => loadAndPlay((currentIndex + 1) % activeList.length);
  document.getElementById('full-prev-btn').onclick = () => loadAndPlay((currentIndex - 1 + activeList.length) % activeList.length);

  // Time Updates & Scrubber Slider Sync
  audioPlayer.ontimeupdate = () => {
    if (audioPlayer.duration) {
      const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
      document.getElementById('full-progress').value = progress;
      document.getElementById('full-current-time').textContent = formatTime(audioPlayer.currentTime);
      document.getElementById('full-total-time').textContent = `-${formatTime(audioPlayer.duration - audioPlayer.currentTime)}`;
    }
  };

  document.getElementById('full-progress').oninput = (e) => {
    if (audioPlayer.duration) {
      audioPlayer.currentTime = (e.target.value / 100) * audioPlayer.duration;
    }
  };

  // Live Instant Search Engine
  document.getElementById('global-search').oninput = (e) => {
    const val = e.target.value.toLowerCase();
    const all = [...playlist["Trending"], ...playlist["90s"], ...playlist["3D Audio"]];
    const filtered = all.filter(s => s.title.toLowerCase().includes(val) || s.artist.toLowerCase().includes(val));
    renderSongsGrid(filtered);
  };
});
