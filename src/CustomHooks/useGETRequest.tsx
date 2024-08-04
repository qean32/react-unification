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

// const Request = async (setValue: Function) => {
//     const response = await fetch('', {
//         method: 'GET',
//         headers: {
//             'Content-type': 'application/json',
//         },
//     })
//     const data = await response.json()
//     setValue(data.results)
// }


// try {
//     const Request = async (setValue: Function) => {
//         const response = await fetch('', {
//             method: 'GET',
//             headers: {
//                 'Content-type': 'application/json',
//             },
//         })
//         const data = await response.json()
//         setValue(data.results)
//     }
// } catch {

// } finally {

// }