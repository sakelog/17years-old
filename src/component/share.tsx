export function Share(inputText: string): string {
  const text = '?text=私は' + inputText + 'です';
  return 'https://twitter.com/intent/tweet?' + text;
}
