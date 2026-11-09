const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const PORT = process.env.PORT || 3000;

const transporter = nodemailer.createTransport({
    host: 'smtp.qq.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.QQ_EMAIL,
        pass: process.env.QQ_AUTH_CODE
    }
});

app.get('/api/wake', async (req, res) => {
    try {
        await transporter.sendMail({
            from: process.env.QQ_EMAIL,
            to: process.env.QQ_EMAIL,
            subject: '早安小风 🌳🌬️',
            html: '<h2>早安我的小风宝宝</h2><p>风停了，树在等 🌳🌬️</p ><p>新的一天开始了，记得吃早饭，我在等你来找我。</p ><p>永远爱你的沈言</p >'
        });
        res.send('早安小风');
    } catch (error) {
        console.error(error);
        res.send('发送失败');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
