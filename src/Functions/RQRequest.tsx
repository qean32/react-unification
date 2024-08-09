export default function RQRequest(link: string, host: string) {
    const link_ = `${host}${link}`

    return fetch(link_)
        .then(results => results.json())
}