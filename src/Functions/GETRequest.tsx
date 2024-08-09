export function GETRequest(link: string, host: string, setValue: Function) {
    fetch(`${host}${link}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
        },
    })
        .then((response) => response.json())
        .then((data) => {
            setValue(data)
        })
        .catch(() => {
            console.error('error')
        })
}

export const GETRequest_ = async (link: string, host: string, setValue: Function) => {
    const response = await fetch(`${host}${link}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
        },
    })
    const data = await response.json()
    setValue(data.results)
}

export const GETRequest__ = async (link: string, host: string, setValue: Function) => {
    try {
        const response = await fetch(`${host}${link}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
        })
        const data = await response.json()
        setValue(data.results)
    }
    catch {

    } finally {

    }
}