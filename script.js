async function getData() {
    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();

        const id = data.slip.id;
        const advice = data.slip.advice;

        document.getElementById('advice-number').innerText = `ADVICE  #${id}`;
        document.getElementById('advice-text').innerText = `"${advice}"`;
    } catch (error) {
        console.error('Error fetching advice:', error);
    }
}

document.getElementById('get-advice-btn').addEventListener('click', getData);
