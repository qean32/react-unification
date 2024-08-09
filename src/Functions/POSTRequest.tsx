export default function POSTRequest(link: string, host: string, setValue: Function, body_: object, isArray: boolean = true) {
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
            if (isArray) { setValue((prew: any[]) => [...prew, data]); return }
            setValue(data)
        })
        .catch(() => {
            console.error('error')
        })
}