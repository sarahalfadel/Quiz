let currentQuestionIndex = 0;
const questions = [
    {
        question: "ما هي الذرة؟",
        options: ["أصغر وحدة بنائية للمادة", "مركب كيميائي", "جزيء"],
        correctAnswer: 0
    },
    {
        question: "ما هو العنصر الكيميائي الذي يحتوي على 6 بروتونات؟",
        options: ["الأوكسجين", "الكربون", "النيتروجين"],
        correctAnswer: 1
    },
    {
        question: "أي من العناصر التالية هو عنصر غازي في درجة حرارة الغرفة؟",
        options: ["النيتروجين", "الحديد", "الذهب"],
        correctAnswer: 0
    },
    {
        question: "ما هو رمز العنصر الكيميائي للأوكسجين؟",
        options: ["O", "O2", "Ox"],
        correctAnswer: 0
    },
    {
        question: "كم عدد الإلكترونات في الذرة المتعادلة للعنصر الذي رقم ذريته 11؟",
        options: ["11", "12", "1"],
        correctAnswer: 0
    },
    {
        question: "ما هو العنصر الذي يمثل أكبر نسبة في القشرة الأرضية؟",
        options: ["الأوكسجين", "السيليكون", "الحديد"],
        correctAnswer: 1
    },
    {
        question: "ما هي وحدة قياس الطاقة في الذرة؟",
        options: ["الإلكترون فولت", "جول", "كيلو جول"],
        correctAnswer: 0
    },
    {
        question: "أي من الجزيئات التالية هو جزيء غير قطبي؟",
        options: ["الماء", "الكلور", "ثاني أكسيد الكربون"],
        correctAnswer: 2
    },
    {
        question: "ما هو العنصر الكيميائي الذي يحتوي على 8 إلكترونات في مداره الخارجي؟",
        options: ["الأوكسجين", "الفلور", "النيون"],
        correctAnswer: 2
    },
    {
        question: "ما هو العنصر الكيميائي الذي يحتوي على أكبر عدد من البروتونات؟",
        options: ["الهيدروجين", "الهيليوم", "اليورانيوم"],
        correctAnswer: 2
    },
    {
        question: "أي من هذه العناصر يقع في المجموعة السابعة في الجدول الدوري؟",
        options: ["الكلور", "الأوكسجين", "النيتروجين"],
        correctAnswer: 0
    },
    {
        question: "ما هي الشحنة الكهربائية للبروتون؟",
        options: ["موجبة", "سالبة", "محايدة"],
        correctAnswer: 0
    },
    {
        question: "ما هو العنصر الذي يمتلك أعلى درجة انصهار؟",
        options: ["الحديد", "التنجستن", "الذهب"],
        correctAnswer: 1
    },
    {
        question: "ما هو الموقع الذي يوجد فيه الإلكترون في الذرة؟",
        options: ["النواة", "الغلاف الإلكتروني", "المجال المغناطيسي"],
        correctAnswer: 1
    },
    {
        question: "كم عدد العناصر الكيميائية المعروفة حتى الآن؟",
        options: ["118", "120", "100"],
        correctAnswer: 0
    },
    {
        question: "ما هو العنصر الذي يشكل حوالي 21% من غلاف الأرض الجوي؟",
        options: ["الأوكسجين", "النيتروجين", "الهيدروجين"],
        correctAnswer: 0
    },
    {
        question: "ما هي المادة التي تتكون منها البروتونات والنيوترونات؟",
        options: ["النوترونات", "الكواركات", "الفيتونات"],
        correctAnswer: 1
    },
    {
        question: "ما هو عدد مستويات الطاقة في الذرة؟",
        options: ["4", "7", "6"],
        correctAnswer: 1
    },
    {
        question: "ما هو العنصر الذي يرمز له بالرمز Na؟",
        options: ["النحاس", "الصوديوم", "النيتروجين"],
        correctAnswer: 1
    },
    {
        question: "ما هو العنصر الذي يتمتع بأعلى كثافة؟",
        options: ["الرصاص", "اليورانيوم", "الذهب"],
        correctAnswer: 1
    }
];

function showQuestion(index) {
    const questionContainer = document.getElementById("question-container");
    const question = questions[index];
    questionContainer.innerHTML = `
        <div class="question">
            <h3>${question.question}</h3>
            <div>
                ${question.options.map((option, i) => 
                    `<input type="radio" name="q${index}" value="${i}" onclick="nextQuestion()">
                    <label>${option}</label><br>`).join('')}
            </div>
        </div>
    `;
}

function nextQuestion() {
    const selectedOption = document.querySelector(`input[name="q${currentQuestionIndex}"]:checked`);
    if (selectedOption) {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion(currentQuestionIndex);
        } else {
            document.getElementById("quiz-section").style.display = "none";
            document.getElementById("result-section").style.display = "block";
            showResult();
        }
    }
}

function showResult() {
    const studentName = document.getElementById("student-name").value;
    if (studentName.trim() === "") {
        alert("يرجى إدخال اسم الطالب!");
        return;
    }
    const score = calculateScore();
    document.getElementById("student-result").textContent = `الاسم: ${studentName}`;
    document.getElementById("score").textContent = `نتيجتك: ${score} من ${questions.length}`;
}

function calculateScore() {
    let score = 0;
    questions.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
        if (selectedOption && parseInt(selectedOption.value) === question.correctAnswer) {
            score++;
        }
    });
    return score;
}

// Load first question
showQuestion(currentQuestionIndex);
