const questionBank = {
    questions: [
       {
            category: "Geography",
            question: "What is the capital city of Canada?",
            answer: "Ottawa"
        },
        {
            category: "Pop Culture & TV Shows",
            question: "Which Netflix series features kids battling supernatural forces in a small town?",
            answer: "Stranger Things"
        },
        {
            category: "Music",
            question: "Who is the artist of this song?",
            answer: "Billie Eilish",
            mediaType: "audio",
            mediaSource: "sounds/bad-guy.mp3"
        },
        {
            category: "History & Science",
            question: "What space company was founded by Jeff Bezos?",
            answer: "Blue Origin"
        },
        {
            category: "Pop Culture & TV Shows",
            question: "Which TV series features this meth-cooking chemistry teacher?",
            answer: "Breaking Bad",
            mediaType: "image",
            mediaSource: "images/walter-white.png"
        },
        {
            category: "Literature & Art",
            question: "Who wrote the novel '1984'?",
            answer: "George Orwell"
        },
        {
            category: "Sports",
            question: "Which tennis player holds the record for most Grand Slam singles titles (23) in the Open Era?",
            answer: "Serena Williams"
        },
        {
            category: "History & Science",
            question: "Who developed the theory of relativity?",
            answer: "Albert Einstein"
        },
        {
            category: "Geography",
            question: "What is the largest country by area in Africa?",
            answer: "Algeria"
        },
        {
            category: "Pop Culture & TV Shows",
            question: "What is the name of the coffee shop in Friends?",
            answer: "Central Perk"
        },
        {
            category: "Literature & Art",
            question: "Which artist painted the ceiling of the Sistine Chapel?",
            answer: "Michelangelo"
        },
        {
            category: "Music",
            question: "Name this classic rock song by Queen.",
            answer: "Bohemian Rhapsody",
            mediaType: "audio",
            mediaSource: "sounds/bohemian-rhapsody.mp3"
        },
        {
            category: "History & Science",
            question: "Who was the first woman to travel to space?",
            answer: "Valentina Tereshkova"
        },
        {
            category: "Math",
            question: "Solve for x: 3x - 7 = 8",
            answer: "x = 5"
        },
        {
            category: "Sports",
            question: "Which soccer player is shown in this image?",
            answer: "Lionel Messi",
            mediaType: "image",
            mediaSource: "images/messi.png"
        },
        {
            category: "Literature & Art",
            question: "What is the name of the fictional town where Shakespeare's 'Romeo and Juliet' is set?",
            answer: "Verona"
        },
        {
            category: "Geography",
            question: "What is the capital of Brazil?",
            answer: "Brasília"
        },
        {
            category: "Pop Culture & TV Shows",
            question: "Which animated adult sitcom features the Smith family?",
            answer: "American Dad"
        },
        {
            category: "History & Science",
            question: "What is the chemical symbol for gold?",
            answer: "Au"
        },
        {
            category: "Literature & Art",
            question: "Who wrote the epic poem 'The Odyssey'?",
            answer: "Homer"
        },
        {
            category: "Math",
            question: "What is the area of a square with 4cm sides?",
            answer: "16cm²"
        },
        {
            category: "History & Science",
            question: "What year did the Berlin Wall fall?",
            answer: "1989"
        },
        {
            category: "Geography",
            question: "Which country is known as the 'Land of the Rising Sun'?",
            answer: "Japan"
        },
        {
            category: "Pop Culture & TV Shows",
            question: "What is the name of the fictional continent where 'Game of Thrones' takes place?",
            answer: "Westeros"
        },
        {
            category: "Literature & Art",
            question: "Which novel begins with the line, 'It was the best of times, it was the worst of times'?",
            answer: "A Tale of Two Cities"
        },
        {
            category: "History & Science",
            question: "What is the name of the first artificial satellite launched into space?",
            answer: "Sputnik 1"
        },
        {
            category: "Math",
            question: "What is the square root of 144?",
            answer: "12"
        },
        {
            category: "Sports",
            question: "Which country won the FIFA World Cup in 2018?",
            answer: "France"
        },
        {
            category: "Literature & Art",
            question: "Who wrote the play 'A Streetcar Named Desire'?",
            answer: "Tennessee Williams"
        },
        {
            category: "History & Science",
            question: "What is the name of the first human to orbit the Earth?",
            answer: "Yuri Gagarin"
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
