export function factorial (n: number) {
    if (n < 0) {return null; }
    if (n <= 1) {return n; }
    return n * factorial (n - 1);
}
