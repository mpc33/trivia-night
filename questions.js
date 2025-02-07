const questionBank = {
    questions: [
       {
            category: "Geography",
            question: "What is the capital city of Canada?",
            answer: "Ottawa"
        },
        {
            category: "Pop Culture & TV Shows",
            question: "In The Office (US), what is the name of Dwight Schrute’s beet farm?",
            answer: "Schrute Farms"
        },
        {
            category: "Music",
            question: "Who is the artist of this song?",
            answer: "Kanye West",
            mediaType: "audio",
            mediaSource: "sounds/heartless.mp3"
        },
        {
            category: "History & Science",
            question: "What space company was founded by Jeff Bezos?",
            answer: "Blue Origin"
        },
        {
            category: "Pop Culture & TV Shows",
            question: "Which TV series features a character named Homelander as the leader of a corrupt superhero team?",
            answer: "The Boys",
            mediaType: "image",
            mediaSource: "images/homelander.png"
        },
        {
            category: "Literature & Art",
            question: "Who wrote the novel 1984?",
            answer: "George Orwell"
        },
        {
            category: "Sports",
            question: "Which country won the first-ever FIFA Women’s World Cup in 1991?",
            answer: "United States"
        },
        {
            category: "History & Science",
            question: "Who developed the theory of relativity?",
            answer: "Albert Einstein"
        },
        {
            category: "Geography",
            question: "Which U.S. state is nicknamed The Last Frontier?",
            answer: "Alaska"
        },
        {
            category: "Pop Culture & TV Shows",
            question: "Which TV series features a character named Eleven with psychokinetic abilities?",
            answer: "Stranger Things"
        },
        {
            category: "Literature & Art",
            question: "Which artist is known for *The Persistence of Memory* (melting clocks)?",
            answer: "Salvador Dalí"
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
            question: "Which war is known as the War to End All Wars?",
            answer: "World War I"
        },
        {
            category: "Math",
            question: "Solve for x: 3x - 7 = 8",
            answer: "x = 5"
        },
        {
            category: "Sports",
            question: "Which sport uses terms like birdie, eagle, and albatross?",
            answer: "Golf"
        },
        {
            category: "Literature & Art",
            question: "What is the name of the fictional town where Shakespeares Romeo and Juliet is set?",
            answer: "Verona"
        },
        {
            category: "Geography",
            question: "What is the name of the strait that separates Europe and Africa?",
            answer: "Strait of Gibraltar"
        },
        {
            category: "Sports",
            question: "In cricket, what term describes a bowler taking three wickets in consecutive deliveries?",
            answer: "Hat-Trick"
        },
        {
            category: "History & Science",
            question: "What is the chemical symbol for gold?",
            answer: "Au"
        },
        {
            category: "Literature & Art",
            question: "Who wrote the epic poem The Odyssey?",
            answer: "Homer"
        },
        {
            category: "Math",
            question: "What is the area of a square with 4cm sides?",
            answer: "16cm²"
        },
        {
            category: "History & Science",
            question: "Which scientist proposed the three laws of motion?",
            answer: "Isaac Newton"
        },
        {
            category: "Geography",
            question: "Which country is known as the Land of the Rising Sun?",
            answer: "Japan"
        },
        {
            category: "Pop Culture & TV Shows",
            question: "What is the name of the fictional continent where Game of Thrones takes place?",
            answer: "Westeros"
        },
        {
            category: "Literature & Art",
            question: "Who authored *Frankenstein* at age 18?",
            answer: "Mary Shelley"
        },
        {
            category: "History & Science",
            question: "What is the name of the first satellite launched into space?",
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
            category: "Food & Drink",
            question: "What is the national dish of Spain?",
            answer: "Paella"
        },
        {
            category: "Movies",
            question: "Which director is known for films like *Inception* and *The Dark Knight Trilogy*?",
            answer: "Christopher Nolan"
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
