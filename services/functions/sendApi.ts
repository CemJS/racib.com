
export const sendApi = async function (url: string, data: any) {

    if (window.location.hostname != "127.0.0.1") {
        url = "https://api.cem.su" + url
    }

    try {
        let answer: any = await Promise.race([
            fetch(url, {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(data),
            }),
            new Promise((_, reject) =>
                setTimeout(() => reject(new Error("Timeout")), 3000)
            ),
        ]);
        let json = await answer.json();
        return json;
    } catch (error) {
        return { error };
    }
};