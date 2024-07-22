export default function usePOSTRequest(link: string, host: string, setValue: Function, body_: object) {
    const link_ = `${host}${link}`

    fetch(link_, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(body_)
    })
        .then((response) => response.json())
        .then((data) => {
            setValue(data)
        })
        .catch(() => {
            console.error('error')
        })
}