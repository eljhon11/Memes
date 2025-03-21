// Meme data
const memes = [
    {
        id: 1,
        title: "Distracted Boyfriend",
        image: "https://i.imgflip.com/1uyzob.jpg",
        description: "A man looking at another woman while his girlfriend looks at him disapprovingly.",
        category: "classic",
        tags: ["relationships", "distraction", "jealousy"]
    },
    {
        id: 2,
        title: "Drake Hotline Bling",
        image: "https://th.bing.com/th/id/OIP.QEvA1Aj1PLRQkq_OlXkduQHaEL?rs=1&pid=ImgDetMain",
        description: "Drake gesturing disapproval and then approval in a two-panel meme.",
        category: "reaction",
        tags: ["music", "preference", "choice"]
    },
    {
        id: 3,
        title: "Two Buttons",
        image: "https://www.meme-arsenal.com/memes/47cfeac12742b4c6b18a78638d9c1c49.jpg",
        description: "A sweating man deciding which of two buttons to press.",
        category: "classic",
        tags: ["decision", "choice", "stress"]
    },
    {
        id: 4,
        title: "Change My Mind",
        image: "https://cdn.acidcow.com/pics/20180312/change_my_mind_14.jpg",
        description: "Steven Crowder sitting at a table with a sign challenging people to change his mind.",
        category: "classic",
        tags: ["debate", "opinion", "challenge"]
    },
    {
        id: 5,
        title: "Expanding Brain",
        image: "https://i.redd.it/6ykxi8ulszf01.jpg",
        description: "A multi-panel meme showing increasingly enlightened ideas with expanding brain images.",
        category: "classic",
        tags: ["intelligence", "evolution", "irony"]
    },
    {
        id: 6,
        title: "Surprised Pikachu",
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3bb52058-0095-4587-b4c5-8b5c9685bc8c/dg0nurt-5c69b963-05b0-4bb7-8082-94060adcd0ff.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNiYjUyMDU4LTAwOTUtNDU4Ny1iNGM1LThiNWM5Njg1YmM4Y1wvZGcwbnVydC01YzY5Yjk2My0wNWIwLTRiYjctODA4Mi05NDA2MGFkY2QwZmYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Z3dRf8arsjmaWgNYEFNXDK4rsbOQZ0ocBBlzDDMJZms",
        description: "Pikachu with a shocked expression, used for feigning surprise at predictable outcomes.",
        category: "reaction",
        tags: ["pokemon", "surprise", "shock"]
    },
    {
        id: 7,
        title: "Woman Yelling at Cat",
        image: "https://s.hdnux.com/photos/01/07/12/73/18657008/4/1920x0.jpg",
        description: "A woman yelling at a confused-looking white cat sitting at a dinner table.",
        category: "animal",
        tags: ["argument", "confusion", "dinner"]
    },
    {
        id: 8,
        title: "Disaster Girl",
        image: "https://i.ytimg.com/vi/14pEd_YpMyM/hqdefault.jpg",
        description: "A little girl smirking at the camera while a house burns in the background.",
        category: "classic",
        tags: ["evil", "disaster", "smirk"]
    },
    {
        id: 9,
        title: "Doge",
        image: "https://i.imgflip.com/xv3ox.jpg",
        description: "A Shiba Inu dog with a peculiar expression, often accompanied by colorful Comic Sans text.",
        category: "animal",
        tags: ["dog", "shiba", "cryptocurrency"]
    },
    {
        id: 10,
        title: "Hide the Pain Harold",
        image: "https://th.bing.com/th/id/OIP.PqKCrz7pEDugh-W2eV0eXwHaGO?rs=1&pid=ImgDetMain",
        description: "An elderly man forcing a smile while clearly in emotional distress.",
        category: "reaction",
        tags: ["smile", "pain", "stock photo"]
    },
    {
        id: 11,
        title: "Grumpy Cat",
        image: "https://www.grumpycat.meme/wp-content/uploads/2023/11/ihadfunonceitwasawful-scaled.jpg",
        description: "A cat with a permanently grumpy facial expression due to feline dwarfism.",
        category: "animal",
        tags: ["cat", "grumpy", "negativity"]
    },
    {
        id: 12,
        title: "Success Kid",
        image: "https://th.bing.com/th/id/R.4f5839b4966d148d3c6ee32e2f8be8ac?rik=8UWQ3VlxL3VwAg&riu=http%3a%2f%2fcdn.mamamia.com.au%2fwp%2fwp-content%2fuploads%2f2015%2f04%2fSuccess-kid-4-720x547.jpg&ehk=IBms8dWveUGeKjcsRggxso0YJE%2bXULIrKTgpJ1oJNkA%3d&risl=&pid=ImgRaw&r=0",
        description: "A baby at the beach with a clenched fist, expressing success or achievement.",
        category: "classic",
        tags: ["success", "victory", "achievement"]
    },
    {
        id: 13,
        title: "Confused Math Lady",
        image: "https://i.redd.it/if3ldk2w2j841.jpg",
        description: "A woman with mathematical equations floating around her head, looking confused.",
        category: "reaction",
        tags: ["confusion", "math", "thinking"]
    },
    {
        id: 14,
        title: "Crying Cat",
        image: "https://th.bing.com/th/id/OIP.6qc3V2_scJRZnw0cyhqhaAHaFX?rs=1&pid=ImgDetMain",
        description: "A cat with edited teary eyes, used to express sadness.",
        category: "animal",
        tags: ["cat", "crying", "sad"]
    },
    {
        id: 15,
        title: "Mocking SpongeBob",
        image: "https://th.bing.com/th/id/OIP._k-24P7Blawrp5_oR6HfcAHaDx?rs=1&pid=ImgDetMain",
        description: "SpongeBob in a mocking pose, used to repeat someone's statement in a mocking tone.",
        category: "reaction",
        tags: ["spongebob", "mockery", "cartoon"]
    }
];

// DOM elements
const memeContainer = document.getElementById('meme-container');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const filterButtons = document.querySelectorAll('.filter-button');
const themeToggle = document.getElementById('theme-toggle');
const confettiButton = document.getElementById('confetti-button');
const modal = document.getElementById('meme-modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const closeButton = document.querySelector('.close-button');
const likeButton = document.getElementById('like-button');
const likeCount = document.getElementById('like-count');
const shareButton = document.getElementById('share-button');
const scrollTopButton = document.getElementById('scroll-top');
const confettiContainer = document.getElementById('confetti-container');

// Current filter and search state
let currentFilter = 'all';
let currentSearch = '';
let likes = {};

// Initialize the page
function init() {
    renderMemes();
    setupEventListeners();
}

// Render memes based on current filter and search
function renderMemes() {
    memeContainer.innerHTML = '';
    
    const filteredMemes = memes.filter(meme => {
        const matchesFilter = currentFilter === 'all' || meme.category === currentFilter;
        const matchesSearch = currentSearch === '' || 
            meme.title.toLowerCase().includes(currentSearch.toLowerCase()) ||
            meme.description.toLowerCase().includes(currentSearch.toLowerCase()) ||
            meme.tags.some(tag => tag.toLowerCase().includes(currentSearch.toLowerCase()));
        
        return matchesFilter && matchesSearch;
    });
    
    if (filteredMemes.length === 0) {
        memeContainer.innerHTML = `
            <div class="no-results">
                <h2>No memes found</h2>
                <p>Try a different search or filter</p>
                <img src="https://i.imgur.com/u4N1Yh9.jpeg" alt="Surprised Pikachu" style="width: 200px;">
            </div>
        `;
        return;
    }
    
    filteredMemes.forEach(meme => {
        const memeCard = document.createElement('div');
        memeCard.className = 'meme-card';
        memeCard.dataset.id = meme.id;
        
        const tagsHTML = meme.tags.map(tag => `<span class="meme-tag">#${tag}</span>`).join('');
        
        memeCard.innerHTML = `
            <img src="${meme.image}" alt="${meme.title}">
            <div class="meme-info">
                <h2>${meme.title}</h2>
                <p>${meme.description.substring(0, 60)}${meme.description.length > 60 ? '...' : ''}</p>
                <div class="meme-tags">${tagsHTML}</div>
            </div>
        `;
        
        memeContainer.appendChild(memeCard);
    });
}

// Set up all event listeners
function setupEventListeners() {
    // Search functionality
    searchButton.addEventListener('click', () => {
        currentSearch = searchInput.value;
        renderMemes();
    });
    
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            currentSearch = searchInput.value;
            renderMemes();
        }
    });
    
    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentFilter = button.dataset.category;
            renderMemes();
        });
    });
    
    // Theme toggle
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const icon = themeToggle.querySelector('i');
        if (document.body.classList.contains('dark-mode')) {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
    });
    
    // Confetti button
    confettiButton.addEventListener('click', createConfetti);
    
    // Modal functionality
    memeContainer.addEventListener('click', (e) => {
        const memeCard = e.target.closest('.meme-card');
        if (memeCard) {
            const memeId = parseInt(memeCard.dataset.id);
            const meme = memes.find(m => m.id === memeId);
            if (meme) {
                openModal(meme);
            }
        }
    });
    
    closeButton.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Like button
    likeButton.addEventListener('click', () => {
        const currentMemeId = likeButton.dataset.memeId;
        if (!likes[currentMemeId]) {
            likes[currentMemeId] = 0;
        }
        likes[currentMemeId]++;
        likeCount.textContent = likes[currentMemeId];
        
        // Add a little animation
        likeButton.classList.add('liked');
        setTimeout(() => {
            likeButton.classList.remove('liked');
        }, 300);
    });
    
    // Share button
    shareButton.addEventListener('click', () => {
        const currentMemeId = shareButton.dataset.memeId;
        const meme = memes.find(m => m.id === parseInt(currentMemeId));
        
        if (navigator.share && meme) {
            navigator.share({
                title: meme.title,
                text: `Check out this hilarious meme: ${meme.title}`,
                url: window.location.href
            }).catch(console.error);
        } else {
            alert(`You're sharing "${meme.title}" meme! (In a real app, this would open a share dialog)`);
        }
    });
    
    // Scroll to top
    scrollTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Show/hide scroll to top button
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopButton.style.display = 'block';
        } else {
            scrollTopButton.style.display = 'none';
        }
    });
}

// Open the modal with meme details
function openModal(meme) {
    modalImage.src = meme.image;
    modalTitle.textContent = meme.title;
    modalDescription.textContent = meme.description;
    
    likeButton.dataset.memeId = meme.id;
    shareButton.dataset.memeId = meme.id;
    
    if (!likes[meme.id]) {
        likes[meme.id] = 0;
    }
    likeCount.textContent = likes[meme.id];
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close the modal
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Create confetti effect
function createConfetti() {
    confettiContainer.innerHTML = '';
    const colors = ['#ff6b6b', '#4ecdc4', '#ffe66d', '#ff9ff3', '#7bed9f', '#70a1ff'];
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = Math.random() * 10 + 5 + 'px';
        confetti.style.opacity = Math.random() + 0.5;
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        
        confettiContainer.appendChild(confetti);
    }
    
    setTimeout(() => {
        confettiContainer.innerHTML = '';
    }, 5000);
}

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', init);