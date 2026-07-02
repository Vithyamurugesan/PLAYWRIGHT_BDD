export function generateEmail() {
    const timestamp = Date.now();
    return `user${timestamp}@gmail.com`;
}