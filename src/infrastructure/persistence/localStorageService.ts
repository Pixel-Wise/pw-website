export function saveExamplesToLocalStorage(examples: { [key: string]: unknown }[]) {
    localStorage.setItem('examples', JSON.stringify(examples));
}

export function getExamplesFromLocalStorage() {
    return JSON.parse(localStorage.getItem('examples') ?? '[]');
}