


// =======================
// PAGE ACCUEIL
// =======================

const pseudoInput = document.getElementById("pseudo");
const btnJouer = document.getElementById("btnJouer");

if (pseudoInput && btnJouer) {

    pseudoInput.addEventListener("input", () => {

        if (pseudoInput.value.trim() !== "") {
            btnJouer.classList.remove("hidden");
        } else {
            btnJouer.classList.add("hidden");
        }

    });

    btnJouer.addEventListener("click", () => {
        localStorage.setItem("pseudo", pseudoInput.value.trim());
        window.location.href = "partie.html";
    });

}

// =======================
// QUESTIONS
// =======================

const questions = [
    {
        image: "images/q1.jpg",
        question: "Quel club a remporté la Ligue des Champions 2025-2026 ?",
        choix: ["Arsenal", "Real Madrid", "PSG", "Bayern Munich"],
        bonneReponse: "PSG"
    },

    {
        image: "images/q2.jpg",
        question: "Contre quel club le PSG a-t-il remporté la finale de la Ligue des Champions 2026 ?",
        choix: ["Arsenal", "Liverpool", "Chelsea", "Barcelone"],
        bonneReponse: "Arsenal"
    },

    {
        image: "images/q3.jpg",
        question: "Dans quelle ville s'est jouée la finale de la Ligue des Champions 2026 ?",
        choix: ["Paris", "Londres", "Budapest", "Madrid"],
        bonneReponse: "Budapest"
    },

    {
        image: "images/q4.jpg",
        question: "Quel joueur français est l'un des favoris pour le Ballon d'Or 2026 ?",
        choix: ["Ousmane Dembélé", "N'Golo Kanté", "Kingsley Coman", "Randal Kolo Muani"],
        bonneReponse: "Ousmane Dembélé"
    },

    {
        image: "images/q5.jpg",
        question: "Quel pays accueille la Coupe du Monde 2026 avec le Canada et le Mexique ?",
        choix: ["États-Unis", "Brésil", "Argentine", "Espagne"],
        bonneReponse: "États-Unis"
    },

    {
        image: "images/q6.jpg",
        question: "Combien d'équipes participent à la Coupe du Monde 2026 ?",
        choix: ["32", "40", "48", "64"],
        bonneReponse: "48"
    },

    {
        image: "images/q7.jpg",
        question: "Quel pays est champion du monde en titre avant la Coupe du Monde 2026 ?",
        choix: ["France", "Argentine", "Brésil", "Espagne"],
        bonneReponse: "Argentine"
    },

    {
        image: "images/q8.jpg",
        question: "Quel joueur argentin a pas remporté la Coupe du Monde 2022 ?",
        choix: ["Julián Álvarez", "Lautaro Martínez", "Lionel Messi", "Maradona"],
        bonneReponse: "Maradona"
    },

    {
        image: "images/q9.jpg",
        question: "Quel club anglais a affronté le PSG en finale de la Ligue des Champions 2026 ?",
        choix: ["Chelsea", "Manchester City", "Liverpool", "Arsenal"],
        bonneReponse: "Arsenal"
    },

    {
        image: "images/q10.jpg",
        question: "Quel pays africain a terminé devant le Brésil lors des qualifications sud-américaines du Mondial 2026 ?",
        choix: ["Aucun", "Équateur", "Colombie", "Uruguay"],
        bonneReponse: "Équateur"
    },

    {
        image: "images/q11.jpg",
        question: "Quelle compétition se joue aux États-Unis en 2025 avec 32 clubs ?",
        choix: ["Coupe Intercontinentale", "Coupe du Monde des Clubs", "Gold Cup", "Euro"],
        bonneReponse: "Coupe du Monde des Clubs"
    },

    {
        image: "images/q12.jpg",
        question: "Quel club français a conservé son titre européen en 2026 ?",
        choix: ["Marseille", "Monaco", "Lyon", "PSG"],
        bonneReponse: "PSG"
    },

    {
        image: "images/q13.jpg",
        question: "Quel est le nombre de réponses proposées pour chaque question de votre quiz ?",
        choix: ["2", "3", "4", "5"],
        bonneReponse: "4"
    },

    {
        image: "images/q14.jpg",
        question: "Quelle sélection est souvent considérée comme favorite pour le Mondial 2026 ?",
        choix: ["Argentine", "France", "Brésil", "Toutes ces réponses"],
        bonneReponse: "Toutes ces réponses"
    },

    {
        image: "images/q15.jpg",
        question: "Quel continent accueille la finale de la Ligue des Champions 2026 ?",
        choix: ["Asie", "Afrique", "Europe", "Amérique"],
        bonneReponse: "Europe"
    }
];

// =======================
// PAGE QUIZ
// =======================

const questionElement =
    document.getElementById("question");

const reponsesElement =
    document.getElementById("reponses");

const imageQuestion =
    document.getElementById("imageQuestion");

if (questionElement && reponsesElement) {

    let score = 0;
    let indexQuestion = 0;
    let temps = 30;
    let timer;

    const timerElement =
        document.getElementById("timer");

    const scoreElement =
        document.querySelector(".infos div:nth-child(2)");

    const titreQuestion =
        document.querySelector(".jeu h2");

    const resultat =
        document.querySelector(".resultat");

    const scoreFinal =
        document.getElementById("scoreFinal");

    const message =
        document.getElementById("message");

    const btnRejouer =
        document.getElementById("btnRejouer");

    resultat.style.display = "none";

    let questionsMelangees =
        [...questions].sort(
            () => Math.random() - 0.5
        );

    function lancerTimer() {

        clearInterval(timer);

        temps = 30;

        timerElement.textContent = temps + "s";

        timer = setInterval(() => {

            temps--;

            timerElement.textContent =
                temps + "s";

            if (temps <= 0) {

                clearInterval(timer);

                indexQuestion++;

                afficherQuestion();

            }

        }, 1000);

    }

    function afficherQuestion() {

        if (
            indexQuestion >=
            questionsMelangees.length
        ) {
            terminerQuiz();
            return;
        }

        lancerTimer();

        const q =
            questionsMelangees[indexQuestion];

        titreQuestion.textContent =
            `Question ${indexQuestion + 1} / ${questionsMelangees.length}`;

        questionElement.textContent =
            q.question;

        imageQuestion.innerHTML = `
    <img src="${q.image}" alt="question">
    `;

        reponsesElement.innerHTML = "";
        const choixMelanges =
            [...q.choix].sort(
                () => Math.random() - 0.5
            );

        choixMelanges.forEach(reponse => {

            const btn =
                document.createElement("button");

            btn.textContent = reponse;

            btn.addEventListener("click", () => {

                clearInterval(timer);

                const tousLesBoutons =
                    reponsesElement.querySelectorAll("button");

                tousLesBoutons.forEach(bouton => {

                    bouton.disabled = true;

                    if (bouton.textContent === q.bonneReponse) {
                        bouton.classList.add("correct");
                    } else {
                        bouton.classList.add("wrong");
                    }

                });

                if (reponse === q.bonneReponse) {
                    score++;
                }

                scoreElement.textContent =
                    "Score : " + score;

                setTimeout(() => {

                    indexQuestion++;
                    afficherQuestion();

                }, 1000);

            });

            reponsesElement.appendChild(btn);

        });

    }

    function terminerQuiz() {

        clearInterval(timer);

        questionElement.style.display =
            "none";

        reponsesElement.style.display =
            "none";

        resultat.style.display =
            "block";

        scoreFinal.textContent =
            `Score : ${score} / ${questionsMelangees.length}`;

        if (
            score >=
            questionsMelangees.length / 2
        ) {
            message.textContent =
                "Bravo !";
        } else {
            message.textContent =
                "Essayez encore !";
        }

        sauvegarderScore();
    }

    function sauvegarderScore() {

        const pseudo =
            localStorage.getItem("pseudo") ||
            "Anonyme";

        let historique =
            JSON.parse(
                localStorage.getItem("historique")
            ) || [];

        const joueurExistant =
            historique.find(
                joueur => joueur.pseudo === pseudo
            );

        if (joueurExistant) {

            if (score > joueurExistant.score) {
                joueurExistant.score = score;
            }

            joueurExistant.date =
                new Date().toLocaleDateString(
                    "fr-FR",
                    {
                        day: "2-digit",
                        month: "long",
                        year: "numeric"
                    }
                );

        } else {

            historique.push({
                pseudo: pseudo,
                score: score,
                date:
                    new Date().toLocaleDateString(
                        "fr-FR",
                        {
                            day: "2-digit",
                            month: "long",
                            year: "numeric"
                        }
                    )
            });

        }

        localStorage.setItem(
            "historique",
            JSON.stringify(historique)
        );

    }
    btnRejouer.addEventListener(
        "click",
        () => {

            location.reload();

        }
    );

    afficherQuestion();

}

// =======================
// PAGE HISTORIQUE
// =======================

const classementBody =
    document.getElementById(
        "classementBody"
    );

if (classementBody) {

    let historique =
        JSON.parse(
            localStorage.getItem(
                "historique"
            )
        ) || [];

    historique.sort(
        (a, b) =>
            b.score - a.score
    );

    classementBody.innerHTML = "";

    historique.forEach(
        (joueur, index) => {

            classementBody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${joueur.pseudo}</td>
                <td>${joueur.score}</td>
                <td>${joueur.date}</td>
            </tr>
        `;

        }
    );

}