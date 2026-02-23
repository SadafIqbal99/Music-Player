// ===== VINYLIST PLAYER WITH LIKED SONGS SECTION =====

// ===== PUNJABI HITS SONGS (USING WORKING AUDIO URLs) =====
const songs = [
    {
        id: 1,
        title: "Brown Munde",
        artist: "AP Dhillon & Gurinder Gill",
        category: "Modern",
        duration: "4:12",
        cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop",
        src: "music/Brown Munde - Gurinder Gill & AP Dhillon (Mr-Punjab.Com)-320kb.mp3"
    },
    {
        id: 2,
        title: "Daku",
        artist: "Sidhu Moose Wala",
        category: "Modern",
        duration: "3:45",
        cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
        src: "music/Daku - Sidhu Moose Wala (Mr-Punjab.Com).mp3"
    },
    {
        id: 3,
        title: "410",
        artist: "Sidhu Moose Wala",
        category: "Modern",
        duration: "4:10",
        cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop",
        src: "music/410 - Sidhu Moose Wala (Mr-Punjab.Com).mp3"
    },
    {
        id: 4,
        title: "Barota",
        artist: "Sidhu Moose Wala",
        category: "Modern",
        duration: "3:55",
        cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=300&fit=crop",
        src: "music/Barota (Desimix) Ft. Sidhu Moosewala - Dj Sss & Dj Hans (Mr-Punjab.Com).mp3"
    },
    {
        id: 5,
        title: "Admirin You",
        artist: "Karan Aujla",
        category: "Modern",
        duration: "3:10",
        cover: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=300&h=300&fit=crop",
        src: "music/Admirin You.mp3"
    },
    {
        id: 6,
        title: "Winning Speech",
        artist: "Karan Aujla",
        category: "Modern",
        duration: "3:30",
        cover: "https://images.unsplash.com/photo-1499417267001-1a9c92890cce?w=300&h=300&fit=crop",
        src: "music/Winning Speech.mp3"
    },
    {
        id: 7,
        title: "For A Reason",
        artist: "Shubh",
        category: "Modern",
        duration: "3:20",
        cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop",
        src: "music/For A Reason.mp3"
    },
    {
        id: 8,
        title: "I Really Do",
        artist: "Shubh",
        category: "Modern",
        duration: "3:15",
        cover: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=300&h=300&fit=crop",
        src: "music/I Really Do.mp3"
    },
    {
        id: 9,
        title: "Saada Pyaar",
        artist: "Gurinder Gill",
        category: "Modern",
        duration: "4:05",
        cover: "https://images.unsplash.com/photo-1513828586377-9767bf5322c1?w=300&h=300&fit=crop",
        src: "music/Saada Pyaar - Gurinder Gill (Mr-Punjab.Com)-320kb.mp3"
    },
    {
        id: 10,
        title: "Insane",
        artist: "AP Dhillon & Gurinder Gill",
        category: "Modern",
        duration: "3:45",
        cover: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=300&h=300&fit=crop",
        src: "music/Insane - AP Dhillon & Gurinder Gill (Mr-Punjab.Com)-320kb.mp3"
    },
    {
        id: 11,
        title: "Not Gangster",
        artist: "Sidhu Moose Wala",
        category: "Modern",
        duration: "4:20",
        cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
        src: "music/Not Gangster - Sidhu Moose Wala (Mr-Punjab.Com).mp3"
    },
    {
        id: 12,
        title: "Drippy",
        artist: "Sidhu Moose Wala",
        category: "Modern",
        duration: "3:50",
        cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop",
        src: "music/Drippy (Original) - Sidhu Moose Wala (Mr-Punjab.Com).mp3"
    },
    {
        id: 13,
        title: "Aaye Haaye",
        artist: "Karan Aujla",
        category: "Modern",
        duration: "3:05",
        cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=300&fit=crop",
        src: "music/Aaye Haaye.mp3"
    },
    {
        id: 14,
        title: "Wavy",
        artist: "Shubh",
        category: "Modern",
        duration: "3:25",
        cover: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=300&h=300&fit=crop",
        src: "music/Wavy.mp3"
    },
    {
        id: 15,
        title: "HIM",
        artist: "Karan Aujla",
        category: "Modern",
        duration: "3:35",
        cover: "https://images.unsplash.com/photo-1499417267001-1a9c92890cce?w=300&h=300&fit=crop",
        src: "music/HIM.mp3"
    },
    {
        id: 16,
        title: "Foreigns",
        artist: "AP Dhillon & Gurinder Gill",
        category: "Modern",
        duration: "4:00",
        cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop",
        src: "music/Foreigns - AP Dhillon & Gurinder Gill (Mr-Punjab.Com)-320kb.mp3"
    },
    {
        id: 17,
        title: "Droptop",
        artist: "AP Dhillon & Gurinder Gill",
        category: "Modern",
        duration: "3:55",
        cover: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=300&h=300&fit=crop",
        src: "music/Droptop - AP Dhillon & Gurinder Gill (Mr-Punjab.Com)-320kb.mp3"
    }
];

// ===== DOM ELEMENTS =====
const audio = document.getElementById('audio');
const screenPlayBtn = document.getElementById('screen-play');
const screenLikeBtn = document.getElementById('screen-like');
const vinyl = document.getElementById('vinyl');
const screenTitle = document.getElementById('screen-title');
const screenArtist = document.getElementById('screen-artist');
const songListContainer = document.getElementById('song-list');
const queueListContainer = document.getElementById('queue-list');
const likedSongsList = document.getElementById('liked-songs-list');
const likedCount = document.getElementById('liked-count');

// Category elements
const catModern = document.getElementById('cat-modern');
const catClassic = document.getElementById('cat-classic');
const cat90s = document.getElementById('cat-90s');
const catInstrumental = document.getElementById('cat-instrumental');

// ===== STATE VARIABLES =====
let currentSongs = [];
let songIndex = 0;
let isPlaying = false;
let likedSongIds = [];

// ===== LOAD LIKED SONGS FROM LOCALSTORAGE =====
try {
    const savedLikes = localStorage.getItem('vinylist-likes');
    if (savedLikes) {
        likedSongIds = JSON.parse(savedLikes);
    }
} catch (e) {
    console.log('Could not load likes:', e);
}

// ===== HELPER FUNCTIONS =====
function getLikedSongs() {
    return songs.filter(song => likedSongIds.includes(song.id));
}

function updateLikedCount() {
    if (likedCount) {
        likedCount.textContent = likedSongIds.length;
    }
}

// ===== LIKED SONGS RENDERING =====
function renderLikedSongs() {
    if (!likedSongsList) return;
    
    const likedSongs = getLikedSongs();
    
    if (likedSongs.length === 0) {
        likedSongsList.innerHTML = '<div class="empty-liked">No liked songs yet ❤️</div>';
        updateLikedCount();
        return;
    }
    
    likedSongsList.innerHTML = '';
    
    likedSongs.forEach(song => {
        const likedItem = document.createElement('div');
        likedItem.className = 'liked-song-item';
        likedItem.dataset.id = song.id;
        
        // Image
        const img = document.createElement('img');
        img.className = 'song-img';
        img.src = song.cover;
        img.alt = song.title;
        img.onerror = function() {
            this.src = `https://picsum.photos/32/32?random=${song.id}`;
        };
        
        // Info
        const infoDiv = document.createElement('div');
        infoDiv.className = 'song-info';
        
        const titleDiv = document.createElement('div');
        titleDiv.className = 'song-title';
        titleDiv.textContent = song.title;
        
        const artistDiv = document.createElement('div');
        artistDiv.className = 'song-artist';
        artistDiv.textContent = song.artist;
        
        infoDiv.appendChild(titleDiv);
        infoDiv.appendChild(artistDiv);
        
        // Remove button
        const removeBtn = document.createElement('span');
        removeBtn.className = 'remove-like';
        removeBtn.innerHTML = '<i class="fas fa-times"></i>';
        removeBtn.onclick = function(e) {
            e.stopPropagation();
            toggleLike(song.id);
        };
        
        likedItem.appendChild(img);
        likedItem.appendChild(infoDiv);
        likedItem.appendChild(removeBtn);
        
        // Play song on click
        likedItem.addEventListener('click', function(e) {
            if (e.target === removeBtn || removeBtn.contains(e.target)) return;
            
            // Find song in all songs
            const songToPlay = songs.find(s => s.id === song.id);
            if (songToPlay) {
                currentSongs = [...songs];
                songIndex = songs.findIndex(s => s.id === song.id);
                loadSong(songToPlay);
                
                if (!isPlaying) {
                    togglePlay();
                } else {
                    audio.play().catch(e => console.log('Play error:', e));
                }
                
                renderQueue();
                renderSongList(currentSongs);
            }
        });
        
        likedSongsList.appendChild(likedItem);
    });
    
    updateLikedCount();
}

// ===== TOGGLE LIKE =====
function toggleLike(songId) {
    const index = likedSongIds.indexOf(songId);
    if (index === -1) {
        likedSongIds.push(songId);
    } else {
        likedSongIds.splice(index, 1);
    }
    
    // Save to localStorage
    try {
        localStorage.setItem('vinylist-likes', JSON.stringify(likedSongIds));
    } catch (e) {
        console.log('Could not save likes');
    }
    
    // Update UI
    renderLikedSongs();
    
    // Update main song list to show liked indicators
    document.querySelectorAll('.song-item').forEach(item => {
        const itemId = parseInt(item.dataset.id);
        if (likedSongIds.includes(itemId)) {
            item.classList.add('liked');
            if (!item.querySelector('.liked-indicator')) {
                const indicator = document.createElement('span');
                indicator.className = 'liked-indicator';
                indicator.innerHTML = '<i class="fas fa-heart"></i>';
                item.querySelector('.song-meta').appendChild(indicator);
            }
        } else {
            item.classList.remove('liked');
            const indicator = item.querySelector('.liked-indicator');
            if (indicator) indicator.remove();
        }
    });
    
    // Update current song like button if it's the current song
    const currentSong = currentSongs[songIndex];
    if (currentSong && currentSong.id === songId) {
        updateLikeButton(currentSong);
    }
}

// ===== CORE FUNCTIONS =====
function loadSong(song) {
    if (!song) return;
    
    screenTitle.textContent = song.title;
    screenArtist.textContent = song.artist;
    
    audio.src = song.src;
    audio.load();
    
    updateLikeButton(song);
    highlightCurrentSong();
}

function updateLikeButton(song) {
    if (likedSongIds.includes(song.id)) {
        screenLikeBtn.classList.add('liked');
        screenLikeBtn.innerHTML = '<i class="fas fa-heart"></i>';
    } else {
        screenLikeBtn.classList.remove('liked');
        screenLikeBtn.innerHTML = '<i class="far fa-heart"></i>';
    }
}

function highlightCurrentSong() {
    document.querySelectorAll('.song-item').forEach(item => {
        item.classList.remove('playing');
    });
    
    if (currentSongs.length > 0 && songIndex >= 0) {
        const currentId = currentSongs[songIndex]?.id;
        if (currentId) {
            const currentEl = document.querySelector(`.song-item[data-id="${currentId}"]`);
            if (currentEl) {
                currentEl.classList.add('playing');
            }
        }
    }
}

function renderSongList(songsArray) {
    if (!songListContainer) return;
    
    songListContainer.innerHTML = '';
    
    songsArray.forEach(song => {
        const songItem = document.createElement('div');
        songItem.className = 'song-item';
        if (likedSongIds.includes(song.id)) {
            songItem.classList.add('liked');
        }
        songItem.dataset.id = song.id;
        
        // Image
        const img = document.createElement('img');
        img.className = 'song-img';
        img.src = song.cover;
        img.alt = song.title;
        img.onerror = function() {
            this.src = `https://picsum.photos/38/38?random=${song.id}`;
        };
        
        // Info
        const infoDiv = document.createElement('div');
        infoDiv.className = 'song-info';
        
        const titleDiv = document.createElement('div');
        titleDiv.className = 'song-title';
        titleDiv.textContent = song.title;
        
        const artistDiv = document.createElement('div');
        artistDiv.className = 'song-artist';
        artistDiv.textContent = song.artist;
        
        infoDiv.appendChild(titleDiv);
        infoDiv.appendChild(artistDiv);
        
        // Meta
        const metaDiv = document.createElement('div');
        metaDiv.className = 'song-meta';
        
        const durationSpan = document.createElement('span');
        durationSpan.className = 'song-duration';
        durationSpan.textContent = song.duration;
        metaDiv.appendChild(durationSpan);
        
        // Liked indicator
        if (likedSongIds.includes(song.id)) {
            const likedIndicator = document.createElement('span');
            likedIndicator.className = 'liked-indicator';
            likedIndicator.innerHTML = '<i class="fas fa-heart"></i>';
            metaDiv.appendChild(likedIndicator);
        }
        
        songItem.appendChild(img);
        songItem.appendChild(infoDiv);
        songItem.appendChild(metaDiv);
        
        // Click event
        songItem.addEventListener('click', function() {
            const newIndex = currentSongs.findIndex(s => s.id === song.id);
            if (newIndex !== -1) {
                songIndex = newIndex;
                loadSong(currentSongs[songIndex]);
                
                if (!isPlaying) {
                    togglePlay();
                } else {
                    audio.play().catch(e => console.log('Play error:', e));
                }
                
                renderQueue();
            }
        });
        
        songListContainer.appendChild(songItem);
    });
    
    highlightCurrentSong();
}

function renderQueue() {
    if (!queueListContainer) return;
    
    queueListContainer.innerHTML = '';
    
    const nextSongs = currentSongs.slice(songIndex + 1);
    
    if (nextSongs.length === 0) {
        const emptyMsg = document.createElement('div');
        emptyMsg.style.padding = '12px 0';
        emptyMsg.style.color = '#5f5f5f';
        emptyMsg.textContent = 'End of queue';
        queueListContainer.appendChild(emptyMsg);
        return;
    }
    
    nextSongs.forEach((song, index) => {
        const queueItem = document.createElement('div');
        queueItem.className = 'queue-item';
        
        const img = document.createElement('img');
        img.src = song.cover;
        img.alt = song.title;
        img.onerror = function() {
            this.src = `https://picsum.photos/52/52?random=${song.id}`;
        };
        
        const textDiv = document.createElement('div');
        
        const titleH4 = document.createElement('h4');
        titleH4.textContent = song.title;
        
        const artistP = document.createElement('p');
        artistP.textContent = song.artist;
        
        textDiv.appendChild(titleH4);
        textDiv.appendChild(artistP);
        
        queueItem.appendChild(img);
        queueItem.appendChild(textDiv);
        
        // Click event
        queueItem.addEventListener('click', function() {
            songIndex = songIndex + 1 + index;
            loadSong(currentSongs[songIndex]);
            
            if (isPlaying) {
                audio.play().catch(e => console.log('Play error:', e));
            }
            
            renderQueue();
        });
        
        queueListContainer.appendChild(queueItem);
    });
}

function togglePlay() {
    if (isPlaying) {
        audio.pause();
        screenPlayBtn.innerHTML = '<i class="fas fa-play"></i>';
        vinyl.classList.remove('playing');
    } else {
        audio.play()
            .then(() => {
                screenPlayBtn.innerHTML = '<i class="fas fa-pause"></i>';
                vinyl.classList.add('playing');
            })
            .catch(err => {
                console.log('Playback failed:', err);
                alert('Click a song to start playing!');
            });
    }
    isPlaying = !isPlaying;
}

function nextSong() {
    if (currentSongs.length === 0) return;
    
    songIndex = (songIndex + 1) % currentSongs.length;
    loadSong(currentSongs[songIndex]);
    
    if (isPlaying) {
        audio.play().catch(e => console.log('Play error:', e));
    }
    
    renderQueue();
}

function prevSong() {
    if (currentSongs.length === 0) return;
    
    songIndex = (songIndex - 1 + currentSongs.length) % currentSongs.length;
    loadSong(currentSongs[songIndex]);
    
    if (isPlaying) {
        audio.play().catch(e => console.log('Play error:', e));
    }
    
    renderQueue();
}

// ===== FILTER CATEGORY =====
function filterCategory(category) {
    document.querySelectorAll('.category-list li').forEach(li => {
        li.classList.remove('active');
    });
    
    if (category === 'Modern' && catModern) catModern.classList.add('active');
    if (category === 'Classic' && catClassic) catClassic.classList.add('active');
    if (category === '90s' && cat90s) cat90s.classList.add('active');
    if (category === 'Instrumental' && catInstrumental) catInstrumental.classList.add('active');
    
    currentSongs = songs.filter(song => song.category === category);
    
    if (currentSongs.length === 0) {
        currentSongs = [...songs];
    }
    
    songIndex = 0;
    renderSongList(currentSongs);
    
    if (currentSongs.length > 0) {
        loadSong(currentSongs[0]);
    }
    
    renderQueue();
}

// ===== TOGGLE FUNCTIONS =====
function toggleLikedSongs() {
    const likedList = document.getElementById('liked-songs-list');
    const chevron = document.getElementById('liked-chevron');
    
    if (likedList) {
        likedList.classList.toggle('expanded');
        if (chevron) {
            chevron.style.transform = likedList.classList.contains('expanded') ? 'rotate(180deg)' : 'rotate(0deg)';
        }
    }
}

function toggleAllSongs() {
    const container = document.getElementById('all-songs-container');
    const header = document.querySelector('.all-songs-header');
    const chevron = document.getElementById('all-songs-chevron');
    
    if (container) {
        container.classList.toggle('collapsed');
        header.classList.toggle('collapsed');
        if (chevron) {
            chevron.style.transform = container.classList.contains('collapsed') ? 'rotate(-90deg)' : 'rotate(0deg)';
        }
    }
}

// ===== EVENT LISTENERS =====
function setupEventListeners() {
    if (screenPlayBtn) {
        screenPlayBtn.addEventListener('click', togglePlay);
    }
    
    if (screenLikeBtn) {
        screenLikeBtn.addEventListener('click', function() {
            const currentSong = currentSongs[songIndex];
            if (!currentSong) return;
            toggleLike(currentSong.id);
        });
    }
    
    if (audio) {
        audio.addEventListener('ended', nextSong);
    }
    
    document.addEventListener('keydown', function(e) {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            return;
        }
        
        if (e.code === 'Space') {
            e.preventDefault();
            togglePlay();
        } else if (e.code === 'ArrowRight') {
            e.preventDefault();
            nextSong();
        } else if (e.code === 'ArrowLeft') {
            e.preventDefault();
            prevSong();
        }
    });
}

// ===== INITIALIZATION =====
function init() {
    console.log('🎵 Vinylist Player initializing...');
    
    filterCategory('Modern');
    renderLikedSongs();
    setupEventListeners();
    
    // Expand liked songs by default
    const likedList = document.getElementById('liked-songs-list');
    if (likedList) {
        likedList.classList.add('expanded');
    }
    
    console.log('✅ Vinylist Player ready with Liked Songs!');
}

// Make functions global
window.filterCategory = filterCategory;
window.toggleLikedSongs = toggleLikedSongs;
window.toggleAllSongs = toggleAllSongs;
window.filterArtist = function(artist) {
    if (!artist) return;
    
    currentSongs = songs.filter(song => 
        song.artist.toLowerCase().includes(artist.toLowerCase())
    );
    
    songIndex = 0;
    renderSongList(currentSongs);
    
    if (currentSongs.length > 0) {
        loadSong(currentSongs[0]);
    }
    
    renderQueue();
};

window.clearQueue = function() {
    if (queueListContainer) {
        queueListContainer.innerHTML = '';
        const msg = document.createElement('div');
        msg.style.padding = '12px 0';
        msg.style.color = '#5f5f5f';
        msg.textContent = 'Queue cleared';
        queueListContainer.appendChild(msg);
    }
};

// Start
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}