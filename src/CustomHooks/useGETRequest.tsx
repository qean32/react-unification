export default function useGETRequest(link: string, host: string, setValue: Function) {
    const link_ = `${host}${link}`
    fetch(link_, {
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

export const useGETRequest_ = async (link: string, host: string, setValue: Function) => {
    const link_ = `${host}${link}`
    const response = await fetch(link_, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
        },
    })
    const data = await response.json()
    setValue(data.results)
}

export const useGETRequest__ = async (link: string, host: string, setValue: Function) => {
    try {
        const link_ = `${host}${link}`
        const response = await fetch(link_, {
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