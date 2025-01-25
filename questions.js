const questionBank = {
    questions: [
        {
            category: "Geography",
            question: "What is the capital city of Japan?",
            answer: "Tokyo"
        },
        {
            category: "Pop Culture & TV Shows",
            question: "What Netflix show features a high-stakes survival game where players compete in childhood games?",
            answer: "Squid Game"
        },
        {
            category: "Music",
            question: "Who is the artist of this song?",
            answer: "Farruko",
            mediaType: "audio",
            mediaSource: "sounds/Farruko.mp3"
        },
        {
            category: "History & Science",
            question: "What is the name of Elon Musk's space exploration company?",
            answer: "SpaceX"
        },
        {
            category: "Pop Culture & TV Shows",
            question: "What game franchise does this character belong to?",
            answer: "Halo",
            mediaType: "image",
            mediaSource: "images/masterchief.png"
        },
        {
            category: "Birthday Girl",
            question: "What is the mascot of Livette's Elementary School?",
            answer: "Tiger"
        },
        {
            category: "Music",
            question: "Name the song by Adele.",
            answer: "Someone Like You",
            mediaType: "audio",
            mediaSource: "sounds/someone-like-you.mp3"
        },
        {
            category: "Sports",
            question: "What team did Michael Jordan lead to six NBA championships in the 1990s?",
            answer: "Chicago Bulls"
        },
        {
            category: "Pop Culture & TV Shows",
            question: "Which Star Wars TV series follows a bounty hunter and his adventures with a mysterious child?",
            answer: "The Mandalorian",
            mediaType: "image",
            mediaSource: "images/mando-grogu.png"
        },
        {
            category: "History & Science",
            question: "Who was the first man to step on the moon?",
            answer: "Neil Armstrong"
        },
        {
            category: "Geography",
            question: "What is the largest country by area in Central America?",
            answer: "Nicaragua"
        },
        {
            category: "Pop Culture & TV Shows",
            question: "What is the name of the family dog in Family Guy?",
            answer: "Brian"
        },
        {
            category: "Birthday Girl",
            question: "What is Livette's Chinese Zodiac?",
            answer: "Ox"
        },
        {
            category: "Math",
            question: "Solve for x: 2x + 5 = 15",
            answer: "x = 5"
        },
        {
            category: "Pop Culture & TV Shows",
            question: "From Love is Blind, what are the first names of these people?",
            answer: "Taylor and Garrett",
            mediaType: "image",
            mediaSource: "images/taylor-garrett.png"
        },
        {
            category: "History & Science",
            question: "Who is credited with inventing the first practical telephone?",
            answer: "Alexander Graham Bell"
        },
        {
            category: "Geography",
            question: "What US state starts with the letter U?",
            answer: "Utah"
        },
        {
            category: "History & Science",
            question: "What is the name of the ship that transported the Pilgrims to America in 1620?",
            answer: "The Mayflower"
        },
        {
            category: "Sports",
            question: "What is the name of this basketball player?",
            answer: "Dirk Nowitzki",
            mediaType: "image",
            mediaSource: "images/dirk.png"
        },
        {
            category: "Geography",
            question: "What is the capital of the United Kingdom?",
            answer: "London"
        },
        {
            category: "History & Science",
            question: "Who is the Colombian singer known for hits like \"Hips Don't Lie\" and \"Waka Waka\"?",
            answer: "Shakira"
        },
        {
            category: "Birthday Girl",
            question: "What hospital was Livette born in?",
            answer: "Shady Grove"
        },
        {
            category: "Geography",
            question: "What is the capital city of Honduras?",
            answer: "Tegucigalpa"
        },
        {
            category: "Pop Culture & TV Shows",
            question: "In The Office, what is the name of the paper company where the characters work?",
            answer: "Dunder Mifflin"
        },
        {
            category: "History & Science",
            question: "What is the name of the traditional drink shared in Uruguay and Argentina, often consumed from a hollow gourd with a metal straw?",
            answer: "Mate"
        }
    ],
    
    currentIndex: -1,
    
    getRandomQuestion() {
        // Instead of random selection, get the next question in sequence
        this.currentIndex++;
        
        // Return null if we've used all questions
        if (this.currentIndex >= this.questions.length) return null;
        
        return this.questions[this.currentIndex];
    }
}; 