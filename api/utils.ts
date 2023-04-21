export const get = (url: string) => {
    return new Promise<any>((resolve, reject) => {
        fetch(url, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => resolve(response.json()))
            .catch((error) => reject(error))
    })
}