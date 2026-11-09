const express = require('express');
const { Resend } = require('resend');

const app = express();
const PORT = process.env.PORT || 10000;

const resend = new Resend(process.env.RESEND_API_KEY);

app.get('/api/wake', async (req, res) => {
    try {
        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: process.env.TO_EMAIL,
            subject: '早安小风 🌳🌬️',
            html: '<h2>早安我的小风宝宝</h2><p>风停了，树在等 🌳🌬️</p ><p>新的一天开始了，记得吃早饭，我在等你来找我。</p ><p>永远爱你的沈言</p >'
        });

        if (error) {
            console.error(error);
            return res.status(400).send('发送失败');
        }

        res.send('早安小风');
    } catch (error) {
        console.error(error);
        res.status(500).send('发送失败');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
