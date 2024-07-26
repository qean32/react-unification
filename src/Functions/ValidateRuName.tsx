export default function ValidateRuName(name: string) {
    if (name.trim().length < 1 || name.match(/[a-z]/i) || name.match(/[0-9]/))
        return false
    return true
}