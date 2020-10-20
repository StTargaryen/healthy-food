const postData = async (url, data) => {
    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        });
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

export {
    postData
};