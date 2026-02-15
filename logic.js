// 1. மாதிரி சொல்வளத் தரவுத்தளம் (Lexical Database) [cite: 47]
const lexicalDB = ["நன்றி", "வெட்கம்", "கல்மனம்", "தமிழ்", "தொல்காப்பியம்"];

function checkGrammar() {
    const word = document.getElementById('wordInput').value.trim();
    const resultDiv = document.getElementById('result');
    resultDiv.style.display = "block";
    
    // நிலை 1: சொல்வளச் சரிபார்ப்பு (Lexical Check) [cite: 50]
    if (lexicalDB.includes(word)) {
        resultDiv.className = "success";
        resultDiv.innerHTML = `<strong>சரி:</strong> '${word}' தரவுத்தளத்தில் உள்ளது. <br> <small>[Lexicon Check: PASSED]</small>`;
        return;
    }

    // நிலை 2: இலக்கண விதி சரிபார்ப்பு (Grammatical Check) [cite: 52]
    resultDiv.className = "error";
    let message = `<strong>பிழை:</strong> '${word}' - இலக்கண விதி மீறப்பட்டுள்ளது.`;
    let rule = "";

    // மெய்மயக்கம் விதி: ன் (ṉ) பின் ற் (ṟ) மட்டுமே வர வேண்டும் [cite: 69]
    if (word.includes("ன்ர")) {
        rule = "நூன்மரபு சூத்திரம் 25/26: 'ன்' (ṉ) மெய்யைத் தொடர்ந்து அதன் இனமான 'ற்' (ṟ) மட்டுமே வர வேண்டும். 'ர' வரக்கூடாது.";
    } 
    // மொழிமுதல் விதி: வு (vu) வரக்கூடாது [cite: 66]
    else if (word.startsWith("வு")) {
        rule = "மொழிமரபு சூத்திரம் 30: 'வ' (v) மெய்யைத் தொடர்ந்து 'உ' (u) சொல்லின் முதலில் வராது.";
    }
    // மெய்மயக்கம் விதி: ல் (l) பின் ம் (m) வரக்கூடாது [cite: 71]
    else if (word.includes("ல்ம்")) {
        rule = "நூன்மரபு சூத்திரம் 23/24: 'ல்' மற்றும் 'ம்' வேற்றுநிலை மெய்மயக்கத்தில் இணையாது.";
    }
    else {
        resultDiv.className = "success";
        resultDiv.innerHTML = `<strong>ஆய்வில் உள்ளது:</strong> இது ஒரு புதிய சொல்லாகவோ அல்லது புணர்ச்சியாகவோ இருக்கலாம்.`;
        return;
    }

    resultDiv.innerHTML = `${message} <div class="rule-box"><strong>விதி விளக்கம்:</strong> ${rule}</div>`;
}
