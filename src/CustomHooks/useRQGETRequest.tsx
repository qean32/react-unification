export default function useRQRequest(link: string, host: string) {
    const link_ = `${host}${link}`
    fetch(link_)
        .then(results => results.json())
}