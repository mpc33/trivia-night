const questionBank = {
    questions: [
        {
          "category": "Sports",
          "question": "In baseball scoring, what number is assigned to the shortstop position?",
          "answer": "6"
        },
        {
          "category": "Geography",
          "question": "Name the only two land‑locked countries in South America.",
          "answer": "Bolivia and Paraguay"
        },
        {
          "category": "Math",
          "question": "You buy 3 churros that cost $2 each and pay with a $10 bill. How much change should you get back?",
          "answer": "$4"
        },
        {
          "category": "Science",
          "question": "What natural phenomenon is measured on the Richter scale?",
          "answer": "Earthquake magnitude"
        },
        {
            "category": "Hunter",
            "question": "What high school superlative did Hunter Win?",
            "answer": "Best to bring home to parents"
        },
        {
          "category": "Literature & Art",
          "question": "Which Italian artist is credited with painting The Last Supper?",
          "answer": "Leonardo da Vinci"
        },
        {
            "category": "Hunter ",
            "question": "Which famous boat sank on Hunter’s Birthday?",
            "answer": "Titanic"
        },
        {
          "category": "Music",
          "question": "Which City is home to the famous country‑music venue the Grand Ole Opry?",
          "answer": "Nashville, Tennessee"
        },
        {
          "category": "Science",
          "question": "Plants absorb which gas from the atmosphere during photosynthesis?",
          "answer": "Carbon dioxide"
        },
        {
          "category": "Geography",
          "question": "How many continents are there on Earth?",
          "answer": "7"
        },
        {
          "category": "Cars",
          "question": "What is the part of the car that charges the battery while the engine is running?",
          "answer": "Alternator"
        },
        {
            "category": "Hunter",
            "question": "Where did Hunter go on his first plane ride?",
            "answer": "Nicaragua"
        },
        {
            "category": "Hunter",
            "question": "What Hospital was Hunter born in?",
            "answer": "Holy Cross Hospital"
        },
        {
            "category": "Pop Culture",
            "question": "In 2024, which Puerto‑Rican–born artist became the first Latin act to headline the Super Bowl halftime show solo?",
            "answer": "Bad Bunny"
          },

        {
          "category": "Fashion",
          "question": "What luxury brand logo features two interlocking C's",
          "answer": "Chanel"
        },
        {
          "category": "Literature & Art",
          "question": "Who wrote the Harry Potter book series?",
          "answer": "J. K. Rowling"
        },
        {
          "category": "Math",
          "question": "Solve for x in the equation 2x − 7 = 9",
          "answer": "x = 8"
        },
        {
            "category": "Hunter ",
            "question": "The First African American to play a MLB game was? (this game occured on Hunter’s birthday)",
            "answer": "Jackie Robinson"
        },
        {
          "category": "Music",
          "question": "Name the Artist and the Song",
          "answer": "50 cent: in da club",
          "mediaType": "audio",
          "mediaSource": "sounds/50-cent.mp3"
        },
        {
          "category": "Movies & TV",
          "question": "Which Marvel superhero wields a hammer engraved with the word ‘Mjölnir’.",
          "answer": "Thor"
        },
        {
          "category": "Science",
          "question": "Which chamber of the human heart pumps oxygen‑rich blood to the body?",
          "answer": "Left ventricle"
        },
        {
          "category": "Geography",
          "question": "its nickname is the boot and it has a volcano named Vesuvius. What country is it?",
          "answer": "Italy",
          "mediaType": "image",
          "mediaSource": "images/silouette.png"
        },
        {
          "category": "History",
          "question": "The assassination of Archduke Franz Ferdinand in 1914 triggered which global conflict?",
          "answer": "World War I"
        },
        {
          "category": "Sports",
          "question": "In American football, how many points is a touchdown worth before any extra‑point or 2‑point attempt?",
          "answer": "6 points"
        },
        {
            "category": "Hunter ",
            "question": "What is Hunter’s middle name?",
            "answer": "Lee Guy"
        },
        {
          "category": "Cars",
          "question": "What is the Make and Model?",
          "answer": "Jeep Wrangler ",
          "mediaType": "image",
          "mediaSource": "images/guess-that-car.png"
        },
        {
          "category": "Science",
          "question": "Which vital sign is measured with a sphygmomanometer?",
          "answer": "Blood pressure"
        },
        {
          "category": "music",
          "question": "Luis Fonsi and Daddy Yankee’s 2017 megahit spent a record 16 weeks at #1 on Billboard’s Hot 100. Name the song.",
          "answer": "Despacito"
        },
        {
          "category": "Sports",
          "question": "In basketball, how many points is a single free‑throw worth?",
          "answer": "1 point"
        },
        {
            "category": "Hunter ",
            "question": "Which president was assassinated on Hunters birthday?",
            "answer": "Abraham Lincoln"
        },
        {
          "category": "Geography",
          "question": "Latitude challenge: The cities of Miami, Florida and Cairo, Egypt are roughly on the same line of latitude. True or False?",
          "answer": "True (both ≈ 26° N)"
        },
        {
            "category": "Hunter",
            "question": "What are the names of Hunter's niece and nephew?",
            "answer": "Parker and Avery"
        },
        {
            "category": "Food",
            "question": "What fruit is known for having its seeds on the outside rather than the inside?",
            "answer": "Strawberries"
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
