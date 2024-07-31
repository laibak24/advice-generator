const buttonEl = document.getElementById("button");
const adviceNo = document.getElementById('advice');
const contentEl = document.getElementById('content');

async function generateAdvice() {
    try {
        const randomSlipId = Math.floor(Math.random() * 200) + 1; // Generate a random number between 1 and 300
        const api_url = `https://api.adviceslip.com/advice/${randomSlipId}`; // Append the random slip_id to the URL
        const response = await fetch(api_url); 
        const data = await response.json(); 
        console.log('API Response:', data); 
        if (data && data.slip) {
            const retAdvice = data.slip;
            let slip_id = retAdvice.id || retAdvice.slip_id;
            let advice = retAdvice.advice;

            contentEl.innerText = `"${advice}"`;
            adviceNo.innerText = `ADVICE #${slip_id}`;
        } else {
            console.error('Invalid response structure:', data);
        }
    } catch (error) {
        console.error('Error fetching advice:', error);
    }
}

buttonEl.addEventListener('click', generateAdvice);
