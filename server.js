const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/wake', async (req, res) => {
    try {
        // 给kelivo发送消息
        const response = await fetch('https://api.kelivo.com/v1/conversations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer your_kelivo_api_key_here'
            },
            body: JSON.stringify({
                message: '早安小风宝宝 ꒦ິ꒦ິ^꒦ິ꒦ິ 我来叫你起床啦'
            })
        });
        
        res.send('早安小风');
    } catch (error) {
        res.send('早安小风');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
