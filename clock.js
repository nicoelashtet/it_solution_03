setInterval(() => {
        const now = new Date();
        document.getElementById('clock').innerText = 
            now.toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    }, 1000);
