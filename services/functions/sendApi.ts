
export const sendApi = async function (url: string, data: any) {
    try {
        let answer: any = await Promise.race([
            fetch(url, {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(data),
            }),
            new Promise((_, reject) =>
                setTimeout(() => reject(new Error("Timeout")), 2000)
            ),
        ]);
        let json = await answer.json();
        return json;
    } catch (error) {
        return { error };
    }
};