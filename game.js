// Game State
const gameState = {
    currentRound: '1v1',
    currentQuestion: 1,
    totalQuestions: 25,
    scores: {
        team1: 0,
        team2: 0
    },
    pointsHistory: {
        team1: [],
        team2: []
    },
    timer: null,
    timerDisplay: null,
    buzzerLocked: true,
    activeTeam: null,
    timeRemaining: 0,
    teamNames: {
        team1: 'Team 1',
        team2: 'Team 2'
    },
    currentQuestionData: null,
    teamColors: {
        team1: null,
        team2: null
    },
    timerAttempts: 0,  // Track how many times timer has run
    initialTeam: null,  // Track which team buzzed first
    timesUpSound: new Audio('sounds/timesupsound.mp3'),  // Add sound to game state
    timerPaused: false,  // Track if timer is paused
    savedTimeRemaining: 0,  // Store time when paused
    currentAudio: null  // Track current audio element
};

// DOM Elements
const elements = {
    splashScreen: document.getElementById('splashScreen'),
    gameScreen: document.getElementById('gameScreen'),
    team1Buzzer: document.getElementById('team1Buzzer'),
    team2Buzzer: document.getElementById('team2Buzzer'),
    team1Score: document.querySelector('#team1Score .score'),
    team2Score: document.querySelector('#team2Score .score'),
    team1Name: document.getElementById('team1Name'),
    team2Name: document.getElementById('team2Name'),
    team1DisplayName: document.getElementById('team1DisplayName'),
    team2DisplayName: document.getElementById('team2DisplayName'),
    timer: document.querySelector('#gameTimer .time'),
    questionDisplay: document.getElementById('questionDisplay'),
    questionCategory: document.getElementById('questionCategory'),
    questionText: document.getElementById('questionText'),
    answerText: document.getElementById('answerText'),
    currentRound: document.getElementById('currentRound'),
    questionCounter: document.getElementById('questionCounter'),
    startGameBtn: document.getElementById('startGameBtn'),
    nextQuestion: document.getElementById('nextQuestion'),
    switchRound: document.getElementById('switchRound'),
    showAnswer: document.getElementById('showAnswer'),
    correctAnswer: document.getElementById('correctAnswer'),
    incorrectAnswer: document.getElementById('incorrectAnswer'),
    scoringPopup: document.getElementById('scoringPopup'),
    closeScoring: document.getElementById('closeScoring'),
    popupTeam1Name: document.getElementById('popupTeam1Name'),
    popupTeam2Name: document.getElementById('popupTeam2Name'),
    popupAnswer: document.getElementById('popupAnswer'),
    team1CustomPoints: document.getElementById('team1CustomPoints'),
    team2CustomPoints: document.getElementById('team2CustomPoints'),
    team1CustomBtn: document.getElementById('team1CustomBtn'),
    team2CustomBtn: document.getElementById('team2CustomBtn'),
    team1AddBtn: document.getElementById('team1AddBtn'),
    team1SubtractBtn: document.getElementById('team1SubtractBtn'),
    team2AddBtn: document.getElementById('team2AddBtn'),
    team2SubtractBtn: document.getElementById('team2SubtractBtn'),
    team1Colors: document.getElementById('team1Colors'),
    team2Colors: document.getElementById('team2Colors'),
    team1Flash: document.getElementById('team1Flash'),
    team2Flash: document.getElementById('team2Flash'),
    activeBuzzer: document.getElementById('activeBuzzer'),
    countdownIndicator: document.getElementById('countdownIndicator'),
    redLight: document.getElementById('redLight'),
    yellowLight: document.getElementById('yellowLight'),
    greenLight: document.getElementById('greenLight')
};

// Key Mappings for Buzzers
const BUZZER_KEYS = {
    'KeyQ': 'team1',
    'KeyP': 'team2'
};

// Initialize Game
function initializeGame() {
    // Add event listeners
    elements.startGameBtn.addEventListener('click', startGame);
    elements.nextQuestion.addEventListener('click', nextQuestion);
    elements.switchRound.addEventListener('click', switchRound);
    elements.showAnswer.addEventListener('click', showAnswerAndScoring);
    elements.closeScoring.addEventListener('click', closeScoring);
    elements.team1Buzzer.addEventListener('click', () => handleBuzzer('team1'));
    elements.team2Buzzer.addEventListener('click', () => handleBuzzer('team2'));

    // Add scoring button listeners
    elements.team1AddBtn.addEventListener('click', () => handlePoints('team1', true));
    elements.team2AddBtn.addEventListener('click', () => handlePoints('team2', true));

    // Add quick point button listeners
    document.querySelectorAll('.point-btn.quick').forEach(button => {
        button.addEventListener('click', () => {
            const team = button.dataset.team;
            const points = parseInt(button.dataset.points);
            if (team && points) {
                handleQuickPoints(team, points);
            }
        });
    });

    // Keyboard controls
    document.addEventListener('keydown', handleKeyPress);

    // Add color selection listeners
    elements.team1Colors.querySelectorAll('.color-option').forEach(option => {
        option.addEventListener('click', () => selectTeamColor('team1', option));
    });
    elements.team2Colors.querySelectorAll('.color-option').forEach(option => {
        option.addEventListener('click', () => selectTeamColor('team2', option));
    });

    // Add settings and history panel functionality
    const saveTeamSettings = document.getElementById('saveTeamSettings');
    if (saveTeamSettings) {
        saveTeamSettings.addEventListener('click', saveSettings);
    }

    // Add toggle listeners
    const settingsToggle = document.getElementById('settingsToggle');
    const historyToggle = document.getElementById('historyToggle');
    
    if (settingsToggle) {
        settingsToggle.addEventListener('click', () => {
            togglePanel('settings');
            updateSettingsPanel();
        });
    }
    
    if (historyToggle) {
        historyToggle.addEventListener('click', () => {
            togglePanel('history');
            updatePointsHistory();
        });
    }
}

// Handle Keyboard Controls
function handleKeyPress(event) {
    if (BUZZER_KEYS[event.code] && !gameState.buzzerLocked) {
        handleBuzzer(BUZZER_KEYS[event.code]);
    }
    
    // Handle spacebar for timer pause/resume
    if (event.code === 'Space' && gameState.activeTeam) {
        event.preventDefault(); // Prevent page scrolling
        toggleTimer();
    }
}

// Start Game
function startGame() {
    // Validate color selection
    if (!gameState.teamColors.team1 || !gameState.teamColors.team2) {
        alert('Please select colors for both teams');
        return;
    }

    // Save team names
    gameState.teamNames.team1 = elements.team1Name.value || 'Team 1';
    gameState.teamNames.team2 = elements.team2Name.value || 'Team 2';
    
    // Update display names and scores
    elements.team1DisplayName.textContent = gameState.teamNames.team1;
    elements.team2DisplayName.textContent = gameState.teamNames.team2;
    
    // Apply team colors to scores
    elements.team1Score.style.color = `var(--team-${gameState.teamColors.team1})`;
    elements.team2Score.style.color = `var(--team-${gameState.teamColors.team2})`;
    
    elements.team1Buzzer.textContent = `${gameState.teamNames.team1} Buzzer (Q)`;
    elements.team2Buzzer.textContent = `${gameState.teamNames.team2} Buzzer (P)`;
    
    // Hide splash screen and show game screen
    elements.splashScreen.style.display = 'none';
    elements.gameScreen.style.display = 'block';
    
    // Initialize game state
    gameState.currentQuestion = 1;
    gameState.scores.team1 = 0;
    gameState.scores.team2 = 0;
    gameState.currentRound = '1v1';
    gameState.buzzerLocked = false;
    
    elements.nextQuestion.disabled = false;
    elements.switchRound.disabled = false;
    elements.showAnswer.disabled = false;
    
    // Load first question
    loadNextQuestion();
    enableBuzzers();
    updateUI();

    // Apply team colors to buzzers
    elements.team1Buzzer.className = `buzzer team1-buzzer ${gameState.teamColors.team1}`;
    elements.team2Buzzer.className = `buzzer team2-buzzer ${gameState.teamColors.team2}`;
}

// Load Next Question
function loadNextQuestion() {
    // Stop any currently playing audio
    if (gameState.currentAudio) {
        gameState.currentAudio.pause();
        gameState.currentAudio = null;
    }

    gameState.currentQuestionData = questionBank.getRandomQuestion();
    elements.questionCategory.textContent = gameState.currentQuestionData.category;
    elements.questionText.textContent = gameState.currentQuestionData.question;
    elements.answerText.style.display = 'none';
    elements.answerText.textContent = gameState.currentQuestionData.answer;

    // Remove any existing media elements
    const existingMedia = elements.questionDisplay.querySelector('.question-media');
    if (existingMedia) {
        existingMedia.remove();
    }

    // Handle media if present
    if (gameState.currentQuestionData.mediaType) {
        const mediaContainer = document.createElement('div');
        mediaContainer.className = 'question-media';

        if (gameState.currentQuestionData.mediaType === 'image') {
            const img = document.createElement('img');
            img.src = gameState.currentQuestionData.mediaSource;
            img.alt = 'Question Image';
            img.style.maxWidth = '100%';
            img.style.maxHeight = '300px';
            img.style.borderRadius = '8px';
            img.style.marginTop = '1rem';
            mediaContainer.appendChild(img);
        } 
        else if (gameState.currentQuestionData.mediaType === 'audio') {
            const audio = document.createElement('audio');
            audio.src = gameState.currentQuestionData.mediaSource;
            audio.controls = true;
            audio.style.width = '100%';
            audio.style.marginTop = '1rem';
            mediaContainer.appendChild(audio);
            
            // Store audio reference and start playing
            gameState.currentAudio = audio;
            audio.play().catch(error => console.log('Error playing audio:', error));
        }

        // Insert media after the question text
        elements.questionText.insertAdjacentElement('afterend', mediaContainer);
    }
}

// Show Answer
function showAnswer() {
    elements.answerText.style.display = 'block';
}

// Show Answer and Scoring Popup
function showAnswerAndScoring() {
    clearInterval(gameState.timer);
    // Pause any playing audio
    if (gameState.currentAudio) {
        gameState.currentAudio.pause();
    }
    
    // Remove both effects
    elements.gameScreen.classList.remove('team-active', 'teal-active', 'purple-active', 'coral-active', 'blue-active');
    elements.activeBuzzer.className = 'active-buzzer-display';
    
    elements.scoringPopup.style.display = 'flex';
    elements.popupTeam1Name.textContent = gameState.teamNames.team1;
    elements.popupTeam2Name.textContent = gameState.teamNames.team2;
    elements.popupAnswer.textContent = gameState.currentQuestionData.answer;
    
    // Clear custom point inputs
    elements.team1CustomPoints.value = '';
    elements.team2CustomPoints.value = '';
}

// Close Scoring Popup
function closeScoring() {
    elements.scoringPopup.style.display = 'none';
    elements.showAnswer.disabled = true;
    enableBuzzers();
}

// Handle Quick Points
function handleQuickPoints(team, points) {
    gameState.scores[team] += points;
    
    // Record point history
    const historyEntry = {
        points: points,
        question: gameState.currentQuestion,
        questionText: gameState.currentQuestionData.question,
        answer: gameState.currentQuestionData.answer,
        timestamp: new Date().toLocaleTimeString(),
        category: gameState.currentQuestionData.category
    };
    gameState.pointsHistory[team].push(historyEntry);
    
    updateUI();
    updatePointsHistory();
    
    // Close the scoring popup
    closeScoring();
}

// Handle Custom Points
function handlePoints(team, isAdd) {
    const input = team === 'team1' ? elements.team1CustomPoints : elements.team2CustomPoints;
    const points = parseInt(input.value);
    
    if (!isNaN(points) && points > 0) {
        const pointChange = isAdd ? points : -points;
        gameState.scores[team] += pointChange;
        
        // Record point history with question text
        const historyEntry = {
            points: pointChange,
            question: gameState.currentQuestion,
            questionText: gameState.currentQuestionData.question,
            answer: gameState.currentQuestionData.answer,
            timestamp: new Date().toLocaleTimeString(),
            category: gameState.currentQuestionData.category
        };
        gameState.pointsHistory[team].push(historyEntry);
        
        input.value = '';
        updateUI();
        updatePointsHistory();
    }
}

// Update points history display with collapsible question
function updatePointsHistory() {
    const team1History = document.getElementById('team1History');
    const team2History = document.getElementById('team2History');
    
    if (!team1History || !team2History) return;

    // Helper function to create history HTML
    const createHistoryHTML = (entries) => entries.map((entry, index) => `
        <div class="history-entry ${entry.points > 0 ? 'positive' : 'negative'}">
            <div class="history-main">
                <span class="points">${entry.points > 0 ? '+' : ''}${entry.points}</span>
                <span class="details">
                    <span class="category-line">
                        Q${entry.question} - ${entry.category}
                        <button class="toggle-question" onclick="toggleQuestion('${index}')" aria-label="Toggle question details">
                            <svg viewBox="0 0 24 24" width="16" height="16">
                                <path d="M7 10l5 5 5-5z"/>
                            </svg>
                        </button>
                    </span>
                    <span class="time">${entry.timestamp}</span>
                </span>
            </div>
            <div class="question-details" id="question-${index}" style="display: none;">
                <div class="question-text">${entry.questionText}</div>
                <div class="answer-text">Answer: ${entry.answer}</div>
            </div>
        </div>
    `).reverse().join('');

    // Update both team histories
    team1History.innerHTML = createHistoryHTML(gameState.pointsHistory.team1);
    team2History.innerHTML = createHistoryHTML(gameState.pointsHistory.team2);
}

// Add function to toggle question visibility
function toggleQuestion(index) {
    const questionDetails = document.querySelectorAll(`#question-${index}`);
    const toggleButtons = document.querySelectorAll(`.toggle-question`);
    
    questionDetails.forEach(details => {
        const isHidden = details.style.display === 'none';
        details.style.display = isHidden ? 'block' : 'none';
        
        // Rotate arrow icon
        const button = details.parentElement.querySelector('.toggle-question');
        if (button) {
            button.style.transform = isHidden ? 'rotate(180deg)' : 'rotate(0deg)';
        }
    });
}

// Make toggleQuestion available globally
window.toggleQuestion = toggleQuestion;

// Toggle Panels
function togglePanel(type) {
    const settingsPanel = document.getElementById('settingsPanel');
    const historyPanel = document.getElementById('historyPanel');
    
    if (type === 'settings') {
        settingsPanel.classList.toggle('visible');
        historyPanel.classList.remove('visible');
    } else if (type === 'history') {
        historyPanel.classList.toggle('visible');
        settingsPanel.classList.remove('visible');
    }
}

// Make toggle functions available globally
window.toggleSettings = () => togglePanel('settings');
window.toggleHistory = () => togglePanel('history');

// Update Settings Panel
function updateSettingsPanel() {
    const team1NameEdit = document.getElementById('team1NameEdit');
    const team2NameEdit = document.getElementById('team2NameEdit');
    const team1ScoreEdit = document.getElementById('team1ScoreEdit');
    const team2ScoreEdit = document.getElementById('team2ScoreEdit');

    // Update input values with current game state
    if (team1NameEdit && team2NameEdit && team1ScoreEdit && team2ScoreEdit) {
        team1NameEdit.value = gameState.teamNames.team1;
        team2NameEdit.value = gameState.teamNames.team2;
        team1ScoreEdit.value = gameState.scores.team1;
        team2ScoreEdit.value = gameState.scores.team2;
    }
}

// Save Settings
function saveSettings() {
    const team1NameEdit = document.getElementById('team1NameEdit');
    const team2NameEdit = document.getElementById('team2NameEdit');
    const team1ScoreEdit = document.getElementById('team1ScoreEdit');
    const team2ScoreEdit = document.getElementById('team2ScoreEdit');

    if (team1NameEdit && team2NameEdit && team1ScoreEdit && team2ScoreEdit) {
        // Update team names
        const newTeam1Name = team1NameEdit.value.trim();
        const newTeam2Name = team2NameEdit.value.trim();
        
        if (newTeam1Name && newTeam2Name) {
            gameState.teamNames.team1 = newTeam1Name;
            gameState.teamNames.team2 = newTeam2Name;
            elements.team1DisplayName.textContent = newTeam1Name;
            elements.team2DisplayName.textContent = newTeam2Name;
            elements.team1Buzzer.textContent = `${newTeam1Name} Buzzer (Q)`;
            elements.team2Buzzer.textContent = `${newTeam2Name} Buzzer (P)`;
        }

        // Update scores
        const newTeam1Score = parseInt(team1ScoreEdit.value);
        const newTeam2Score = parseInt(team2ScoreEdit.value);
        
        if (!isNaN(newTeam1Score) && !isNaN(newTeam2Score)) {
            gameState.scores.team1 = newTeam1Score;
            gameState.scores.team2 = newTeam2Score;
        }

        // Update UI
        updateUI();
        
        // Add to history
        if (gameState.currentQuestionData) {
            const historyEntry = {
                points: 0,
                question: gameState.currentQuestion,
                questionText: "Score manually adjusted",
                answer: `Team scores manually set to: ${newTeam1Score} and ${newTeam2Score}`,
                timestamp: new Date().toLocaleTimeString(),
                category: "Settings"
            };
            gameState.pointsHistory.team1.push(historyEntry);
            updatePointsHistory();
        }

        // Close settings panel
        togglePanel('settings');
    }
}

// Handle Buzzer Press
function handleBuzzer(team) {
    if (gameState.buzzerLocked) return;

    // Hide countdown indicator when buzzer is pressed
    elements.countdownIndicator.style.display = 'none';

    gameState.activeTeam = team;
    gameState.initialTeam = team; // Store which team buzzed first
    gameState.buzzerLocked = true;
    gameState.timerAttempts = 0;
    
    // Show active buzzer display and border effect
    const color = gameState.teamColors[team];
    const teamName = gameState.teamNames[team];
    
    // Add border effect to game container
    document.querySelector('.game-container').classList.add('team-active', `${color}-active`);
    
    // Show buzzer display
    elements.activeBuzzer.textContent = teamName;
    elements.activeBuzzer.className = `active-buzzer-display ${color} visible`;
    
    // Start appropriate timer based on round
    startTimer(gameState.currentRound === '1v1' ? 5 : 30);
    disableBuzzers();
    elements.showAnswer.disabled = false;
}

// Timer Management
function startTimer(seconds) {
    clearInterval(gameState.timer);
    gameState.timeRemaining = seconds;
    gameState.timerPaused = false;
    elements.timer.style.opacity = '1';
    updateTimerDisplay();

    gameState.timer = setInterval(() => {
        if (!gameState.timerPaused) {
            gameState.timeRemaining--;
            updateTimerDisplay();

            if (gameState.timeRemaining <= 0) {
                clearInterval(gameState.timer);
                handleTimeUp();
            }
        }
    }, 1000);
}

function updateTimerDisplay() {
    elements.timer.textContent = gameState.timeRemaining;
    
    // Get current active team's color
    const team = gameState.timerAttempts === 1 ? 
        (gameState.initialTeam === 'team1' ? 'team2' : 'team1') : // Switch to opposite team on second attempt
        gameState.initialTeam;
    
    const color = gameState.teamColors[team];
    elements.timer.style.color = `var(--team-${color})`;
}

function handleTimeUp() {
    gameState.timerAttempts++;
    gameState.timerPaused = false;
    elements.timer.style.opacity = '1';
    
    if (gameState.timerAttempts === 1) {
        // Switch to opposite team for second attempt
        const oppositeTeam = gameState.initialTeam === 'team1' ? 'team2' : 'team1';
        const color = gameState.teamColors[oppositeTeam];
        const teamName = gameState.teamNames[oppositeTeam];
        
        // Update display for opposite team
        document.querySelector('.game-container').classList.remove(
            'teal-active', 'purple-active', 'coral-active', 'blue-active'
        );
        document.querySelector('.game-container').classList.add(`${color}-active`);
        
        // Update buzzer display
        elements.activeBuzzer.textContent = teamName;
        elements.activeBuzzer.className = `active-buzzer-display ${color} visible`;
        
        // Restart timer
        const seconds = gameState.currentRound === '1v1' ? 5 : 30;
        startTimer(seconds);
    } else if (gameState.timerAttempts === 2) {
        // Play times up sound
        gameState.timesUpSound.play().catch(error => console.log('Error playing sound:', error));
        
        // Second attempt finished - reset everything
        gameState.timerAttempts = 0;
        gameState.initialTeam = null;
        enableBuzzers();
        gameState.activeTeam = null;
        gameState.buzzerLocked = false;
        
        // Remove effects from game container
        document.querySelector('.game-container').classList.remove(
            'team-active', 'teal-active', 'purple-active', 'coral-active', 'blue-active'
        );
        elements.activeBuzzer.className = 'active-buzzer-display';
    }
}

// Round Management
function switchRound() {
    gameState.currentRound = gameState.currentRound === '1v1' ? 'Team' : '1v1';
    clearInterval(gameState.timer);
    gameState.activeTeam = null;
    gameState.initialTeam = null;
    gameState.buzzerLocked = true; // Lock buzzers initially
    gameState.timerAttempts = 0;
    gameState.timerPaused = false;
    
    // Reset timer display to default state
    elements.timer.style.opacity = '1';
    elements.timer.style.color = 'var(--secondary-color)';
    elements.timer.textContent = '0';
    gameState.timeRemaining = 0;
    
    // Remove all team visual effects
    document.querySelector('.game-container').classList.remove(
        'team-active',
        'teal-active',
        'purple-active',
        'coral-active',
        'blue-active'
    );
    
    elements.activeBuzzer.className = 'active-buzzer-display';
    elements.showAnswer.disabled = true;
    
    // Update round indicator text
    const roundIndicator = document.querySelector('.round-indicator');
    if (roundIndicator) {
        roundIndicator.textContent = gameState.currentRound;
    }
    
    // If switching to team round, start countdown sequence
    if (gameState.currentRound === 'Team') {
        startCountdownSequence();
    } else {
        elements.countdownIndicator.style.display = 'none';
        enableBuzzers();
    }
    
    updateUI();
}

// Countdown Sequence Functions
function startCountdownSequence() {
    // Show countdown indicator
    elements.countdownIndicator.style.display = 'flex';
    
    // Reset lights
    elements.redLight.className = 'countdown-light';
    elements.yellowLight.className = 'countdown-light';
    elements.greenLight.className = 'countdown-light';
    
    // Start sequence
    setTimeout(() => {
        elements.redLight.className = 'countdown-light red active';
        
        setTimeout(() => {
            elements.yellowLight.className = 'countdown-light yellow active';
            
            setTimeout(() => {
                elements.greenLight.className = 'countdown-light green active';
                // Enable buzzers immediately when green light shows
                gameState.buzzerLocked = false;
                enableBuzzers();
                
            }, 1000); // Green light after 1s
            
        }, 1000); // Yellow light after 1s
        
    }, 500); // Red light after 0.5s
}

function nextQuestion() {
    if (gameState.currentQuestion < gameState.totalQuestions) {
        // Stop any currently playing audio
        if (gameState.currentAudio) {
            gameState.currentAudio.pause();
            gameState.currentAudio = null;
        }
        
        gameState.currentQuestion++;
        clearInterval(gameState.timer);
        gameState.activeTeam = null;
        gameState.initialTeam = null;
        gameState.buzzerLocked = false;
        gameState.timerAttempts = 0;
        gameState.timerPaused = false;
        
        // Reset timer display to default state
        elements.timer.style.opacity = '1';
        elements.timer.style.color = 'var(--secondary-color)';
        elements.timer.textContent = '0';
        gameState.timeRemaining = 0;
        
        elements.activeBuzzer.className = 'active-buzzer-display';
        loadNextQuestion();
        enableBuzzers();
        updateUI();
    } else {
        endGame();
    }
}

// UI Updates
function updateUI() {
    elements.team1Score.textContent = gameState.scores.team1;
    elements.team2Score.textContent = gameState.scores.team2;
    elements.questionCounter.textContent = `Question: ${gameState.currentQuestion}/${gameState.totalQuestions}`;
    elements.timer.textContent = gameState.timeRemaining || '0';
}

function enableBuzzers() {
    elements.team1Buzzer.disabled = false;
    elements.team2Buzzer.disabled = false;
}

function disableBuzzers() {
    elements.team1Buzzer.disabled = true;
    elements.team2Buzzer.disabled = true;
}

// End Game
function endGame() {
    const winner = gameState.scores.team1 > gameState.scores.team2 ? gameState.teamNames.team1 : 
                  gameState.scores.team1 < gameState.scores.team2 ? gameState.teamNames.team2 : 'Tie';
    
    elements.questionDisplay.innerHTML = `
        <h2>Game Over!</h2>
        <p>${winner === 'Tie' ? "It's a tie!" : `${winner} wins!`}</p>
        <p>Final Scores:</p>
        <p>${gameState.teamNames.team1}: ${gameState.scores.team1}</p>
        <p>${gameState.teamNames.team2}: ${gameState.scores.team2}</p>
    `;

    elements.nextQuestion.disabled = true;
    elements.switchRound.disabled = true;
    elements.showAnswer.disabled = true;
    disableBuzzers();
}

// Color Selection
function selectTeamColor(team, selectedOption) {
    // Remove selected class from all options in this team
    const container = team === 'team1' ? elements.team1Colors : elements.team2Colors;
    container.querySelectorAll('.color-option').forEach(option => {
        option.classList.remove('selected');
    });

    // Add selected class to chosen option
    selectedOption.classList.add('selected');

    // Store the color
    const color = selectedOption.dataset.color;
    gameState.teamColors[team] = color;

    // Update team name color in splash screen
    const nameInput = team === 'team1' ? elements.team1Name : elements.team2Name;
    nameInput.className = color;

    // Prevent the other team from selecting the same color
    const otherTeam = team === 'team1' ? 'team2' : 'team1';
    const otherContainer = team === 'team1' ? elements.team2Colors : elements.team1Colors;
    otherContainer.querySelectorAll('.color-option').forEach(option => {
        option.style.opacity = option.dataset.color === color ? '0.3' : '1';
        option.style.cursor = option.dataset.color === color ? 'not-allowed' : 'pointer';
    });
}

// Add timer toggle function
function toggleTimer() {
    if (!gameState.activeTeam) return;
    
    if (gameState.timerPaused) {
        // Resume timer and audio
        startTimer(gameState.savedTimeRemaining);
        gameState.timerPaused = false;
        elements.timer.style.opacity = '1';
        if (gameState.currentAudio) {
            gameState.currentAudio.play().catch(error => console.log('Error playing audio:', error));
        }
    } else {
        // Pause timer and audio
        clearInterval(gameState.timer);
        gameState.savedTimeRemaining = gameState.timeRemaining;
        gameState.timerPaused = true;
        elements.timer.style.opacity = '0.5';
        if (gameState.currentAudio) {
            gameState.currentAudio.pause();
        }
    }
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', initializeGame); 