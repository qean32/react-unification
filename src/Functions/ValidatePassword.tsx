export default function ValidatePassword(pass: string) {
    if (pass.trim().length > 6 && pass.match(/[0-9]/) && pass.match(/[a-z]/))
        return true
    return false
}