const questionBank = {
    questions: [
        {
          "category": "Human Biology",
          "question": "What is the rarest blood type in humans?",
          "answer": "AB-negative"
        },
        {
          "category": "Food & Drink",
          "question": "What crumbly white cheese is traditionally used in a classic Greek salad?",
          "answer": "Feta"
        },
        {
          "category": "Science & Nature",
          "question": "Which of the following elements has the highest melting point?\nA) Iron\n\nB) Carbon (as graphite)\n\nC) Tungsten\n\nD) Titanium",
          "answer": "C) Tungsten"
        },
        {
          "category": "Geography",
          "question": "At night this skyline lights up the Hudson River. Which city is it?",
          "answer": "New York City",
          "mediaType": "image",
          "mediaSource": "images/Photographing-NYC-skyline.jpg"
        },
        {
          "category": "Math",
          "question": "Lucas has three quarters and two dimes in his pocket. How much money does he have?",
          "answer": "$0.95"
        },
        {
          "category": "Economy",
          "question": "What is the main goal of a central bank raising interest rates?\nA) Stimulate consumer spending\n\nB) Reduce inflation\n\nC) Increase unemployment\n\nD) Lower the value of the currency",
          "answer": "B) Reduce inflation"
        },
        {
          "category": "Music",
          "question": "Which Beatles album features the band walking across a zebra crossing on the cover?",
          "answer": "Abbey Road"
        },
        {
          "category": "Technology",
          "question": "What does the \"www\" stand for in a website URL?",
          "answer": "World Wide Web"
        },
        {
          "category": "Animals",
          "question": "This tree-climbing mammal's nickname is a \"firefox\". What species is it?",
          "answer": "Red panda",
          "mediaType": "image",
          "mediaSource": "images/red panda.jpg"
        },
        {
          "category": "Science",
          "question": "Roughly 78% of Earth's atmosphere is made up of which gas?",
          "answer": "Nitrogen"
        },
        {
          "category": "Literature",
          "question": "Which novel opens with the line: \"Call me Ishmael\"?\nA) Treasure Island\n\nB) The Old Man and the Sea\n\nC) Moby Dick\n\nD) Heart of Darkness",
          "answer": "C) Moby Dick"
        },
        {
          "category": "Math",
          "question": "What is 15 × 14?",
          "answer": "210"
        },
        {
          "category": "Pop Culture (Film)",
          "question": "Which 2023 film based on a classic toy line became the year's highest‑grossing movie?",
          "answer": "Barbie"
        },
        {
          "category": "Nature & Weather",
          "question": "The Beaufort scale measures the strength of what natural phenomenon?",
          "answer": "Wind (wind speed)"
        },
        {
          "category": "Music",
          "question": "Name the artist",
          "answer": "Usher",
          "mediaType": "audio",
          "mediaSource": "sounds/Usher - Yeah! (Lyrics) ft. Lil Jon, Ludacris.mp3"
        },
        {
          "category": "Art",
          "question": "Who painted The Starry Night?",
          "answer": "Vincent van Gogh"
        },
        {
          "category": "Sports (NFL)",
          "question": "Which team won Super Bowl LIX on February 9, 2025?",
          "answer": "Philadelphia Eagles"
        },
        {
          "category": "Human Biology",
          "question": "Which organ in the human body produces insulin?",
          "answer": "The pancreas"
        },
        {
          "category": "Film & Pop Culture",
          "question": "Which film has never won the Academy Award for Best Picture?\nA) The King's Speech\n\nB) The Shawshank Redemption\n\nC) No Country for Old Men\n\nD) The Hurt Locker",
          "answer": "B) The Shawshank Redemption"
        },
        {
          "category": "Astronomy",
          "question": "What is the largest moon of Saturn?",
          "answer": "Titan"
        },
        {
          "category": "Math",
          "question": "Olivia buys three identical scented candles and a lantern that costs $12 more than a single candle. Her total bill is $48 (before tax). How much does one candle cost?",
          "answer": "$9"
        },
        {
          "category": "Food & Drink",
          "question": "Which Italian hard cheese is traditionally shaved over a classic Caesar salad?",
          "answer": "Parmigiano‑Reggiano (Parmesan)"
        },
        {
          "category": "Art",
          "question": "Which two colors make purple?",
          "answer": "Red and blue"
        },
        {
          "category": "Mythology",
          "question": "Which Greek goddess is associated with wisdom, war strategy, and the owl?",
          "answer": "Athena"
        },
        {
          "category": "Science (Biology/Chemistry)",
          "question": "Pure water at 25 °C has a pH value of what number?",
          "answer": "7"
        },
        {
          "category": "Television",
          "question": "In which sitcom do the main characters frequently meet at the coffee shop \"Central Perk\"?",
          "answer": "Friends"
        },
        {
          "category": "Beauty",
          "question": "What makeup item is used to make lashes appear longer and fuller?",
          "answer": "Mascara"
        },
        {
          "category": "Olympic Sports",
          "question": "In which sport would you use an épée or a foil?",
          "answer": "Fencing"
        },
        {
          "category": "Economics",
          "question": "What is the official currency of South Korea?",
          "answer": "The South Korean won"
        },
        {
          "category": "Economy",
          "question": "What is GDP an abbreviation for?",
          "answer": "Gross Domestic Product"
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
