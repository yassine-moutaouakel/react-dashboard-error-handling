const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchJsonPlaceholder(endpoint, delay, shouldFail = false) {
  await sleep(delay);

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    cache: 'no-store',
  });

  if (shouldFail) {
    throw new Error('Comments could not be loaded. This error is intentional for this block.');
  }

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json();
}
