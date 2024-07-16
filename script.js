document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('apology-button');
    const message = document.getElementById('message');
    const surprise = document.getElementById('surprise');
    const apologyLetter = document.getElementById('apology-letter');
    const body = document.body;

    button.addEventListener('click', () => {
        message.textContent = "I promise to make it up to you!";
        button.style.display = 'none';
        surprise.classList.add('show');
        body.classList.add('animate');
        
        const apologyText = `
            Dear Honey,

            I want to start by saying how deeply sorry I am. I know that I hurt you, and that is the last thing I ever wanted to do. 
            You mean the world to me, and I regret my actions deeply. Please know that I am committed to making things right 
            and showing you how much you mean to me. I hope you can find it in your heart to forgive me.

            Yours sincerely,
            Karthik
        `;

        let i = 0;
        function typeLetter() {
            if (i < apologyText.length) {
                apologyLetter.textContent += apologyText.charAt(i);
                i++;
                setTimeout(typeLetter, 50);
            }
        }

        typeLetter();
    });
});
