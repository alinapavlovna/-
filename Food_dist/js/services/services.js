    //2) JSON Format
    let postData = async(url, data) => {
        let res = await fetch(url, {
            method: 'POST',
            body: data,
            headers: {
                'Content-type': 'application/json'
            }
        });
        return await res.json();

        // if (res.ok) {
        //     thanksMassage(info.success);
        //     return await res.json();
        // } else {
        //     thanksMassage(info.failure);
        // }
    }


    async function getResource(url) {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }


    export { postData };
    export { getResource };