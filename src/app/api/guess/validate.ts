export async function validateGuess(
  apiKey: string,
  word: string,
  definitions: string[],
  guess: string,
  fetchFn: typeof fetch = fetch
): Promise<string> {
  const messages = [
    {
      role: 'system',
      content:
        'You are an assistant that checks if a user explanation matches the official definition. Reply only with "YES" or "NO".',
    },
    {
      role: 'user',
      content: `Word: ${word}\nDefinitions: ${definitions.join('; ')}\nUser explanation: ${guess}`,
    },
  ];
  const response = await fetchFn('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      temperature: 0,
      max_tokens: 1,
      messages,
    }),
  });
  const data = await response.json();
  const answer = data.choices?.[0]?.message?.content?.trim().toUpperCase();
  return answer && answer.startsWith('Y') ? 'YES' : 'NO';
}
