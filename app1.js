document.addEventListener('DOMContentLoaded', () => {

// --- Data Definitions ---
// IMPORTANT: Replace every "embedUrl" value below with the OFFICIAL embed link
// for that song (from the artist's own YouTube channel or their Spotify page).
//
// How to get an official YouTube embed URL:
//   1. Go to the song's official video on the artist's own YouTube channel.
//   2. Click "Share" -> "Embed".
//   3. Copy the src="..." URL out of the <iframe> code (looks like
//      https://www.youtube.com/embed/VIDEO_ID).
//
// How to get an official Spotify embed URL:
//   1. Open the track on open.spotify.com.
//   2. Click the "..." menu -> Share -> Embed track.
//   3. Copy the src="..." URL (looks like
//      https://open.spotify.com/embed/track/TRACK_ID).
//
// Until you fill in a real embedUrl, the site will show a "Listen on YouTube"
// search link instead of a broken player - it will never auto-download or
// re-host anyone's audio again.

const contentData = [
    {
        id: 116,
        type: 'song',
        title: 'Pompi - Shimwilili Ft. Tasha Nyambe & VOH (Brand New)',
        slug: 'pompi-shimwilili-ft-nasha-nyambe-voh',
        artists: ['Pompi', 'Tasha Nyambe', 'Vessils of Honor'],
        category: 'SPOTLIGHT',
        date: 'Jan 19, 2026',
        excerpt: 'The freshest track from Pompi, reminds us that God is never late and His plans are the best.',
        imageUrl: 'https://archive.org/download/uniquemusicbloglogo/uniquemusicbloglogo.png',
        embedUrl: 'https://www.youtube.com/embed/Y3VnjHPeINE?si=oVPpZgneYmplqSSA',
        downloadLink: 'https://ia601804.us.archive.org/11/items/pompi-shimwilili-ft.-tasha-nyambe-voh/Pompi%20Shimwilili%20Ft.%20Tasha%20Nyambe%20VOH%20.mp3', // Pompi - consent confirmed
        artistBio: 'Shimwilili by Pompi ft. Tasha Nyambe & (VOH) Vessels of Honor is a powerful Afrogospel worship song about trusting in God\u2019s perfect timing. In every season - waiting, uncertainty, or breakthrough - this song reminds us that God is never late and His plans are always best. Shot in the breathtaking landscapes of Mountain View Villa in Kafue, Zambia, the visuals reflect a journey of faith, patience, and surrender.'
    },
    {
        id: 101,
        type: 'song',
        title: 'Jucy Yung - Someday',
        slug: 'jucy-yung-someday',
        artists: ['Jucy Yung'],
        category: 'SPOTLIGHT',
        date: 'Nov 15, 2025',
        excerpt: 'A soulful, melancholic track capturing the raw ache of heartbreak and the desperate wish to turn back time.',
        imageUrl: 'https://ia600600.us.archive.org/18/items/song-cover-jucy-yung/song%20cover%20jucy%20yung.png',
        embedUrl: 'https://www.youtube.com/embed/O_5Nixm0dIU', // reuse the lyric video already used below
        artistBio: 'Released on September 8, 2023, "Someday" showcases Jucy Yung\u2019s signature sentimental style. The track blends soulful, emotive vocals with a poignant narrative focused on the lingering pain of a breakup, the struggle of loneliness, and the deep-seated longing to return to a relationship\u2019s happiest moments.'
    },
    {
        id: 102,
        type: 'song',
        title: 'Phyzo the Producer - Final Selection Cypher 2022',
        slug: 'phyzo-the-producer-final-selection-cypher-2022',
        artists: ['Phyzo The Producer'],
        category: 'SPOTLIGHT',
        date: 'Nov 12, 2022',
        excerpt: 'A fresh new instrumental track perfect for late-night cruising.',
        imageUrl: 'https://archive.org/download/uniquemusicbloglogo/uniquemusicbloglogo.png',
        embedUrl: '', // TODO: paste official embed URL
        artistBio: '"Phyzo the Producer" is a veteran producer and mixer based in Accra. His signature sound is heavily influenced by 90s West Coast hip-hop.'
    },
    {
        id: 3,
        type: 'video',
        title: 'Lyrics: Someday by Jucy Yung',
        slug: 'Lyrics-someday-Jucy-yung',
        artists: ['Jucy Yung'],
        category: 'VIDEOS',
        date: 'Nov 10, 2025',
        excerpt: 'A catchy song.',
        imageUrl: 'https://archive.org/download/uniquemusicbloglogo/uniquemusicbloglogo.png',
        videoUrl: 'https://www.youtube.com/embed/O_5Nixm0dIU',
        content: 'A soulful, melancholic track capturing the raw ache of heartbreak and the desperate wish to turn back time.'
    },
    {
        id: 118,
        type: 'song',
        title: 'Slapdee X Dizmo - Asante (ft. Dreckzine)',
        slug: 'slapdee-x-dizmo-asante-ft-dreckzine',
        artists: ['Slapdee', 'Dizmo', 'Dreckzine'],
        category: 'SPOTLIGHT',
        date: 'Jan 21, 2026',
        excerpt: 'A powerful collaboration bringing together giants. Asante is a masterclass in Zambian hip-hop and lyricism.',
        imageUrl: 'https://archive.org/download/uniquemusicbloglogo/uniquemusicbloglogo.png',
        embedUrl: '', // TODO: paste official embed URL
        artistBio: 'A powerful collaboration bringing together giants. Asante is a masterclass in Zambian hip-hop and lyricism.'
    },
    {
        id: 103,
        type: 'song',
        title: 'Lubomba - Jesu Loves Me (ft. Rudo Acapella)',
        slug: 'lubomba-jesu-loves-me-ft-rudo-acapella',
        artists: ['Lubomba', 'Rudo Acapella'],
        category: 'GOSPEL',
        date: 'Jan 23, 2026',
        excerpt: 'A breathtaking vocal performance. Lubomba and Rudo Acapella strip everything away to deliver a powerful, soulful message.',
        imageUrl: 'https://archive.org/download/lubomba/lubomba.png',
        embedUrl: 'https://www.youtube.com/embed/L4GAcFrbZXo?si=kEnZ1twFPfNiCRuJ',
        // downloadLink: 'PASTE_HOSTED_FILE_URL_HERE', // uncomment ONLY if this artist has paid/consented to downloads
        artistBio: 'Known for their harmonic precision and spiritual depth, these artists are redefining the Acapella scene in the region.'
    },
    {
        id: 104,
        type: 'song',
        title: 'Melody Queen - Soul Serenade',
        slug: 'melody-queen-soul-serenade',
        artists: ['Melody Queen'],
        category: 'SPOTLIGHT',
        date: 'Dec 05, 2025',
        excerpt: 'A beautiful vocal masterpiece that touches the heart.',
        imageUrl: 'https://picsum.photos/seed/soul/600/300',
        embedUrl: '', // TODO: this entry used placeholder demo audio before - replace with a real song + embed, or remove
        artistBio: 'Melody Queen is the leading voice in modern soul, bringing emotions to life through her powerful range.'
    },
    {
        id: 105,
        type: 'song',
        title: 'Afro Beat King - Dance Floor',
        slug: 'afro-beat-king-dance-floor',
        artists: ['Afro Beat King'],
        category: 'SPOTLIGHT',
        date: 'Dec 10, 2025',
        excerpt: 'The ultimate party anthem for every dance floor.',
        imageUrl: 'https://picsum.photos/seed/dance/600/300',
        embedUrl: '', // TODO: this entry used placeholder demo audio before - replace with a real song + embed, or remove
        artistBio: 'Afro Beat King is a producer and DJ based in Lagos, bringing the best of Afrobeats to the global stage.'
    },
    {
        id: 106,
        type: 'song',
        title: 'Yo Maps - Nga Pano',
        slug: 'yo-maps-nga-pano',
        artists: ['Yo Maps'],
        category: 'SPOTLIGHT',
        date: 'Dec 15, 2025',
        excerpt: 'A chart-topping emotional ballad from Zambia\u2019s biggest star.',
        imageUrl: 'https://picsum.photos/seed/yomaps/600/300',
        embedUrl: '', // TODO: paste official embed URL
        artistBio: 'Yo Maps is a Zambian singer, songwriter, and producer who has dominated the local music scene with hits like "Finally".'
    },
    {
        id: 107,
        type: 'song',
        title: 'Chef 187 - Pettition',
        slug: 'chef-187-pettition',
        artists: ['Chef 187'],
        category: 'SPOTLIGHT',
        date: 'Dec 18, 2025',
        excerpt: 'The lyrical master returns with another conscious rap banger.',
        imageUrl: 'https://picsum.photos/seed/chef187/600/300',
        embedUrl: '', // TODO: paste official embed URL
        artistBio: 'Chef 187 is a legendary Zambian hip-hop artist known for his complex wordplay and street-smart lyrics.'
    },
    {
        id: 108,
        type: 'song',
        title: 'Slapdee - Mother Tongue',
        slug: 'slapdee-mother-tongue',
        artists: ['Slapdee'],
        category: 'SPOTLIGHT',
        date: 'Dec 20, 2025',
        excerpt: 'A powerful celebration of Zambian culture and identity.',
        imageUrl: 'https://picsum.photos/seed/slapdee/600/300',
        embedUrl: '', // TODO: paste official embed URL
        artistBio: 'Slapdee is an icon of Zambian music, widely considered one of the pioneers of modern Zambian hip-hop.'
    },
    {
        id: 109,
        type: 'song',
        title: 'Burna Boy - Last Last',
        slug: 'burna-boy-last-last',
        artists: ['Burna Boy'],
        category: 'SPOTLIGHT',
        date: 'Dec 22, 2025',
        excerpt: 'The global Afrobeats anthem that has taken the world by storm.',
        imageUrl: 'https://picsum.photos/seed/burnaboy/600/300',
        embedUrl: '', // TODO: paste official embed URL
        artistBio: 'Burna Boy is a Grammy-winning Nigerian singer and songwriter, a leading figure in the global Afrobeats movement.'
    },
    {
        id: 110,
        type: 'song',
        title: 'Tems - Free Mind',
        slug: 'tems-free-mind',
        artists: ['Tems'],
        category: 'SPOTLIGHT',
        date: 'Dec 24, 2025',
        excerpt: 'Soulful, ethereal, and deeply moving music from Tems.',
        imageUrl: 'https://picsum.photos/seed/tems/600/300',
        embedUrl: '', // TODO: paste official embed URL
        artistBio: 'Tems is a Nigerian singer and producer whose unique vocal style has earned her international acclaim and collaborations with global superstars.'
    },
    {
        id: 111,
        type: 'song',
        title: 'Roberto - Amarulah',
        slug: 'roberto-amarulah',
        artists: ['Roberto'],
        category: 'SPOTLIGHT',
        date: 'Dec 26, 2025',
        excerpt: 'The dancehall classic that cemented Roberto as a continental star.',
        imageUrl: 'https://picsum.photos/seed/roberto/600/300',
        embedUrl: '', // TODO: paste official embed URL
        artistBio: 'Roberto is a Zambian singer, songwriter, and producer known for his smooth R&B and dancehall fusions.'
    },
    {
        id: 112,
        type: 'song',
        title: 'Pompi - Simanjemanje',
        slug: 'pompi-simanjemanje',
        artists: ['Pompi'],
        category: 'GOSPEL',
        date: 'Dec 28, 2025',
        excerpt: 'Gospel music with a modern, jazzy twist from the Lota House leader.',
        imageUrl: 'https://picsum.photos/seed/pompi/600/300',
        embedUrl: '', // TODO: paste official embed URL
        artistBio: 'Pompi is a Zambian gospel artist who has revolutionized the genre with his unique sound and message-driven lyrics.'
    },
    {
        id: 113,
        type: 'song',
        title: 'Wizkid - Essence',
        slug: 'wizkid-essence',
        artists: ['Wizkid'],
        category: 'SPOTLIGHT',
        date: 'Dec 30, 2025',
        excerpt: 'The "song of the summer" that made history on international charts.',
        imageUrl: 'https://picsum.photos/seed/wizkid/600/300',
        embedUrl: '', // TODO: paste official embed URL
        artistBio: 'Wizkid is one of Nigeria\'s biggest musical exports, known for his infectious melodies and global chart dominance.'
    },
    {
        id: 114,
        type: 'song',
        title: 'Cleo Ice Queen - Soldier',
        slug: 'cleo-ice-queen-soldier',
        artists: ['Cleo Ice Queen'],
        category: 'SPOTLIGHT',
        date: 'Jan 01, 2026',
        excerpt: 'A powerful anthem of strength and resilience from Zambia\'s hip-hop royalty.',
        imageUrl: 'https://picsum.photos/seed/cleo/600/300',
        embedUrl: '', // TODO: paste official embed URL
        artistBio: 'Cleo Ice Queen is an award-winning Zambian rapper and singer, known for her fierce flow and stylish branding.'
    },
    {
        id: 115,
        type: 'song',
        title: 'Macky 2 - Alabalansa',
        slug: 'macky-2-alabalansa',
        artists: ['Macky 2'],
        category: 'SPOTLIGHT',
        date: 'Jan 02, 2026',
        excerpt: 'The king of the streets returns with a message for his fans.',
        imageUrl: 'https://picsum.photos/seed/macky2/600/300',
        embedUrl: '', // TODO: paste official embed URL
        artistBio: 'Macky 2 is a Zambian hip hop artist, singer, and producer, widely recognized as one of the most influential figures in the Zambian music industry.'
    }
];


// --- Favorites Manager ---
const Favorites = {
    get() {
        return JSON.parse(localStorage.getItem('favorites') || '[]');
    },
    toggle(id) {
        let favs = this.get();
        if (favs.includes(id)) {
            favs = favs.filter(fid => fid !== id);
        } else {
            favs.push(id);
        }
        localStorage.setItem('favorites', JSON.stringify(favs));
        return favs.includes(id);
    },
    has(id) {
        return this.get().includes(id);
    }
};

// --- Helper Functions ---
function isNewRelease(dateStr) {
    if (!dateStr) return false;
    const releaseDate = new Date(dateStr);
    const today = new Date();
    if (releaseDate > today) return true;
    const diffTime = Math.abs(today - releaseDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 14;
}

// Only ever wire this up to a downloadLink for tracks where the artist has
// actually paid for / consented to hosting and downloads. Keep a record
// (message, email, agreement) of that consent for every track that uses it.
window.forceDownload = function(url, title) {
    const safeTitle = title.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    fetch(url)
        .then(response => response.blob())
        .then(blob => {
            const blobUrl = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = blobUrl;
            a.download = safeTitle + ".mp3";
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(blobUrl);
        })
        .catch(() => {
            window.open(url, '_blank');
        });
};

function youtubeSearchUrl(title, artists) {
    const q = encodeURIComponent(`${title} ${artists ? artists.join(' ') : ''}`.trim());
    return `https://www.youtube.com/results?search_query=${q}`;
}

function generateSocialShareButtons(title) {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(title);

    return `
        <div class="mt-8 pt-8 border-t border-gray-700">
            <h3 class="text-xl font-bold mb-4">Share this</h3>
            <div class="flex flex-wrap gap-4">
                <a href="https://www.facebook.com/sharer/sharer.php?u=${url}" target="_blank" class="social-btn bg-blue-600 hover:bg-blue-700">
                    <i class="fab fa-facebook-f text-xl"></i>
                </a>
                <a href="https://twitter.com/intent/tweet?url=${url}&text=${text}" target="_blank" class="social-btn bg-gray-700 hover:bg-black">
                    <i class="fab fa-twitter text-xl"></i>
                </a>
                <a href="https://wa.me/?text=${text}%20${url}" target="_blank" class="social-btn bg-green-500 hover:bg-green-600">
                    <i class="fab fa-whatsapp text-xl"></i>
                </a>
                <button onclick="copyLink()" class="social-btn bg-gray-600 hover:bg-gray-500" title="Copy Link">
                    <i class="fas fa-link text-xl"></i>
                </button>
            </div>
        </div>
    `;
}

window.copyLink = function() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        alert("Link copied to clipboard!");
    });
}

// --- DOM Elements ---
const views = document.querySelectorAll('.view');
const navLinks = document.querySelectorAll('.nav-link');
const searchBar = document.getElementById('search-bar');
const searchIconBtn = document.getElementById('search-icon-btn');
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const backButton = document.getElementById('back-button');
const contentDisplayContainer = document.getElementById('content-display-container');
const mobileMenuIcons = mobileMenuButton.querySelectorAll('svg');

// --- Routing ---
function showView(viewId) {
    views.forEach(v => v.classList.remove('active'));
    const target = document.getElementById(viewId);
    if (target) target.classList.add('active');

    navLinks.forEach(link => {
        if (link.dataset.view === viewId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    window.scrollTo(0, 0);
}

function routeToPath() {
    if (mobileMenu) mobileMenu.classList.add('hidden');
    if (mobileMenuIcons.length >= 2) {
        mobileMenuIcons[0].classList.remove('hidden');
        mobileMenuIcons[1].classList.add('hidden');
    }

    const hash = window.location.hash || '#/';
    const path = hash.slice(2);

    if (!path || path === '/') {
        showView('home-view');
        renderGrid(contentData, 'home-content-grid');
    } else if (path === 'albums/') {
        showView('albums-view');
        renderGrid(contentData.filter(i => i.type === 'album'), 'albums-content-grid');
    } else if (path === 'videos/') {
        showView('videos-view');
        renderGrid(contentData.filter(i => i.type === 'video'), 'videos-content-grid');
    } else if (path === 'downloads/') {
        // Kept the route so old links don't 404, but it now shows the same
        // streaming spotlight songs instead of a download list.
        showView('downloads-view');
        renderGrid(contentData.filter(i => i.type === 'song'), 'downloads-content-grid');
    } else if (path === 'favorites/') {
        showView('favorites-view');
        const favs = Favorites.get();
        const favItems = contentData.filter(i => favs.includes(i.id));
        renderGrid(favItems, 'favorites-content-grid');
    } else if (path === 'about/') {
        showView('about-view');
    } else if (path.startsWith('search/')) {
        const query = decodeURIComponent(path.split('/')[1]);
        searchBar.value = query;
        performSearch(query);
    } else if (path.startsWith('artists/')) {
        const artistName = decodeURIComponent(path.split('/')[1]);
        showView('artist-view');
        renderArtistProfile(artistName);
    } else {
        const parts = path.split('/').filter(p => p);
        if (parts.length >= 2) {
            const slug = parts[parts.length - 1];
            const item = contentData.find(i => i.slug === slug);
            if (item) {
                renderDetail(item);
                showView('detail-view');
            }
        }
    }
}

// --- Artist Profile Rendering ---
function renderArtistProfile(artistName) {
    const headerContainer = document.getElementById('artist-profile-header');
    const contentContainer = document.getElementById('artist-content-grid');

    if (!headerContainer || !contentContainer) {
        console.error("Artist profile view is not correctly set up in the HTML.");
        return;
    }

    const artistItems = contentData.filter(item => item.artists && item.artists.includes(artistName));

    if (artistItems.length === 0) {
        headerContainer.innerHTML = '<p>Artist not found.</p>';
        contentContainer.innerHTML = '';
        return;
    }

    const bio = artistItems[0].artistBio || "No biography available.";
    const image = artistItems[0].imageUrl;

    const headerHTML = `
        <img src="${image}" class="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-4 border-gray-700 shadow-2xl">
        <div class="text-center md:text-left">
            <h1 class="text-4xl font-black mb-4">${artistName}</h1>
            <p class="text-gray-300 leading-relaxed max-w-2xl">${bio}</p>
        </div>
    `;

    headerContainer.innerHTML = headerHTML;
    renderGrid(artistItems, 'artist-content-grid');
}

// --- Grid Rendering ---
function renderGrid(items, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (items.length === 0) {
        container.innerHTML = '<div class="col-span-full text-center py-12 text-gray-500">No content found.</div>';
        return;
    }

    container.innerHTML = items.map(item => {
        const isNew = isNewRelease(item.date);
        return `
            <div class="content-card bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700 relative" onclick="navigateTo('${item.type}s/${item.slug}')">
                ${isNew ? '<div class="new-badge">NEW</div>' : ''}
                <img src="${item.imageUrl}" class="w-full h-48 object-cover">
                <div class="p-5">
                    <div class="flex justify-between items-start">
                        <span class="text-red-500 text-xs font-bold uppercase tracking-wider">${item.category}</span>
                        <button onclick="event.stopPropagation(); toggleFavorite(${item.id}, true)" class="text-xl ${Favorites.has(item.id) ? 'text-red-500' : 'text-gray-500'}">
                            <i class="${Favorites.has(item.id) ? 'fas' : 'far'} fa-heart"></i>
                        </button>
                    </div>
                    <h3 class="text-xl font-bold mt-2 mb-2 line-clamp-1 hover:text-red-500 transition-colors">${item.title}</h3>
                    <p class="text-gray-400 text-sm mb-3">
                        ${item.artists ? `By ${item.artists.map(artist => `<span onclick="event.stopPropagation(); navigateTo('artists/' + encodeURIComponent(artist))" class="text-gray-300 hover:text-red-400 hover:underline transition-colors font-medium">${artist}</span>`).join(', ')}` : ''}
                    </p>
                    <p class="text-gray-500 text-xs line-clamp-2">${item.excerpt}</p>
                </div>
            </div>
        `;
    }).join('');
}

// --- Detail View Rendering ---
function renderDetail(item) {
    let content = '';
    const isFav = Favorites.has(item.id);
    const socialButtons = generateSocialShareButtons(item.title);

    if (item.type === 'song') {
        const playerHTML = item.embedUrl
            ? `<div class="aspect-video rounded-xl overflow-hidden bg-black">
                   <iframe class="w-full h-full" src="${item.embedUrl}" frameborder="0"
                       allow="autoplay; encrypted-media" allowfullscreen loading="lazy"></iframe>
               </div>`
            : `<a href="${youtubeSearchUrl(item.title, item.artists)}" target="_blank" rel="noopener"
                   class="block w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-xl text-center transition-colors">
                   <i class="fab fa-youtube mr-2"></i> Listen on YouTube
               </a>`;

        // Only show a download button when downloadLink is explicitly set on
        // the entry. Only fill in downloadLink for tracks where the artist
        // has actually paid for / consented to hosting and downloads -
        // never add it just because you found a copy of the file somewhere.
        const downloadHTML = item.downloadLink
            ? `<button onclick="forceDownload('${item.downloadLink}', '${item.title.replace(/'/g, "\\'")}')"
                   class="w-full mt-3 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2">
                   <i class="fas fa-download"></i> Download MP3
               </button>`
            : '';

        content = `
            <div class="p-6 md:p-10">
                <div class="flex flex-col md:flex-row gap-8">
                    <img src="${item.imageUrl}" class="w-full md:w-1/3 rounded-2xl shadow-xl object-cover">
                    <div class="flex-grow">
                        <div class="flex justify-between items-start">
                            <span class="text-red-500 font-bold uppercase tracking-widest">${item.category}</span>
                            <button onclick="toggleFavorite(${item.id}, true)" class="text-3xl ${isFav ? 'text-red-500' : 'text-gray-500'}">
                                <i class="${isFav ? 'fas' : 'far'} fa-heart"></i>
                            </button>
                        </div>
                        <h1 class="text-4xl font-black mt-2 mb-4">${item.title}</h1>
                        <p class="text-gray-400 mb-6">Released: ${item.date}</p>

                        <div class="bg-gray-900 p-6 rounded-2xl border border-gray-700 mb-8">
                            <h3 class="text-xl font-bold mb-4 flex items-center">
                                <i class="fas fa-play-circle mr-2 text-red-500"></i> Listen Now
                            </h3>
                            ${playerHTML}
                            ${downloadHTML}
                        </div>
                    </div>
                </div>
                <div class="mt-10 prose prose-invert max-w-none">
                    <h2 class="text-2xl font-bold border-b border-gray-700 pb-2 mb-4">About the Artist</h2>
                    <p class="text-gray-300 leading-relaxed text-lg">${item.artistBio}</p>
                </div>

                ${socialButtons}

                <div class="mt-12 pt-8 border-t border-gray-700">
                    <h2 class="text-3xl font-bold mb-6">Related Songs</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        ${contentData.filter(related =>
                            related.id !== item.id &&
                            related.artists && item.artists &&
                            related.artists.some(artist => item.artists.includes(artist))
                        ).map(related => {
                            const isNew = isNewRelease(related.date);
                            return `
                                <div class="content-card bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700 relative" onclick="navigateTo('${related.type}s/${related.slug}')">
                                    ${isNew ? '<div class="new-badge">NEW</div>' : ''}
                                    <img src="${related.imageUrl}" class="w-full h-48 object-cover">
                                    <div class="p-5">
                                        <div class="flex justify-between items-start">
                                            <span class="text-red-500 text-xs font-bold uppercase tracking-wider">${related.category}</span>
                                        </div>
                                        <h3 class="text-xl font-bold mt-2 mb-2 line-clamp-1 hover:text-red-500 transition-colors">${related.title}</h3>
                                        <p class="text-gray-400 text-sm mb-3">
                                            ${related.artists ? `By ${related.artists.map(artist => `<span onclick="event.stopPropagation(); navigateTo('artists/' + encodeURIComponent(artist))" class="text-gray-300 hover:text-red-400 hover:underline transition-colors font-medium">${artist}</span>`).join(', ')}` : ''}
                                        </p>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            </div>
        `;

    } else if (item.type === 'video') {
        content = `
            <div class="p-6 md:p-10">
                <h1 class="text-4xl font-black mb-6">${item.title}</h1>
                <div class="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black mb-8">
                    <iframe class="w-full h-full" src="${item.videoUrl}" frameborder="0" allowfullscreen loading="lazy"></iframe>
                </div>
                <div class="prose prose-invert max-w-none">
                    ${item.content}
                </div>
                ${socialButtons}
            </div>
        `;
    } else if (item.type === 'album') {
        content = `
            <div class="relative h-64 md:h-96">
                <img src="${item.imageUrl}" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent"></div>
                <div class="absolute bottom-6 left-6 right-6">
                    <h1 class="text-4xl md:text-6xl font-black">${item.title}</h1>
                </div>
            </div>
            <div class="p-6 md:p-10">
                <div class="prose prose-invert max-w-none mb-8">
                    ${item.content}
                </div>
                <h3 class="text-2xl font-bold mb-4">Tracklist</h3>
                <div class="space-y-2">
                    ${item.tracks.map((t, idx) => `
                        <div class="flex justify-between p-4 bg-gray-900 rounded-xl border border-gray-700 hover:bg-gray-750 transition-colors">
                            <span class="font-medium">${idx + 1}. ${t.title}</span>
                            <span class="text-gray-500">${t.duration}</span>
                        </div>
                    `).join('')}
                </div>
                <p class="text-sm text-gray-500 mt-6">Available on all major streaming platforms.</p>
                ${socialButtons}
            </div>
        `;
    }

    contentDisplayContainer.innerHTML = content;
}

// --- Actions ---
window.navigateTo = function(path) {
    window.location.hash = '#/' + path;
};

window.toggleFavorite = function(id, refreshDetail = false) {
    Favorites.toggle(id);
    routeToPath();
};

// --- Search ---
function performSearch(query) {
    if (!query) return;
    showView('search-results-view');
    const results = contentData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        (item.artists && item.artists.some(artist => artist.toLowerCase().includes(query.toLowerCase())))
    );

    document.getElementById('search-query-display').textContent = query;
    document.getElementById('search-count-display').textContent = `Found ${results.length} results.`;
    renderGrid(results, 'search-content-grid');
}

searchBar.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const query = searchBar.value.trim();
        if (query) window.location.hash = `#/search/${encodeURIComponent(query)}`;
    }
});

searchIconBtn.addEventListener('click', () => {
    const query = searchBar.value.trim();
    if (query) window.location.hash = `#/search/${encodeURIComponent(query)}`;
});

// --- Initialization ---
window.addEventListener('hashchange', routeToPath);
backButton.addEventListener('click', () => history.back());

mobileMenuButton.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.toggle('hidden');
    mobileMenuIcons[0].classList.toggle('hidden', !isHidden);
    mobileMenuIcons[1].classList.toggle('hidden', isHidden);
});

// Initial setup
renderGrid(contentData, 'home-content-grid');
routeToPath();

});
