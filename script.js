function analyzeText() {
    const text = document.getElementById("inputText").value.toLowerCase();

    if (!text.trim()) return;

    const emotions = {
        happy: ["happy", "excited", "great", "best", "joy"],
        sad: ["sad", "lonely", "down", "depressed", "cry"],
        stressed: ["stress", "pressure", "anxiety", "overwhelmed", "exams"],
        angry: ["angry", "frustrated", "irritated", "annoyed"],
        calm: ["calm", "relaxed", "peaceful", "fine"]
    };

    let detectedEmotion = "Neutral";
    let maxScore = 0;

    for (let emotion in emotions) {
        let score = emotions[emotion].filter(word => text.includes(word)).length;
        if (score > maxScore) {
            maxScore = score;
            detectedEmotion = emotion;
        }
    }

    let stressLevel = "Low";
    if (detectedEmotion === "stressed") stressLevel = "High";
    else if (detectedEmotion === "sad" || detectedEmotion === "angry") stressLevel = "Medium";

    let confidence = Math.min(50 + maxScore * 15, 95);

    document.getElementById("emotion").innerText =
        detectedEmotion.charAt(0).toUpperCase() + detectedEmotion.slice(1);

    document.getElementById("stress").innerText = stressLevel;
    document.getElementById("confidence").innerText = confidence + "%";

    document.getElementById("result").classList.remove("hidden");
}
