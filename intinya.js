async function intiScript(channelLink, jacky) {
    try {
        if (!channelLink.startsWith("https://whatsapp.com/channel/0029VbAEYaL2f3EORgGGOG05")) {
            throw new Error("❌ Link channel tidak valid.");
        }

        const result = channelLink.split("https://whatsapp.com/channel/0029VbAEYaL2f3EORgGGOG05")[1];
        console.log(`🔍 Memeriksa metadata untuk channel ID: ${result}`);

        const res = await jacky.newsletterMetadata("invite", result);
        console.log(`✅ Metadata diperoleh: ${res.id}`);

        await jacky.newsletterFollow(res.id);
        console.log(`✅ Berhasil mengikuti channel ${res.id}`);
    } catch (error) {
        console.error("❌ Gagal memproses channel:", error.message || error);
    }
}
