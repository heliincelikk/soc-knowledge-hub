export async function healthCheck(signal?: AbortSignal): Promise<string> {
  const response = await fetch('/api/health', { signal })

  if (!response.ok) {
    throw new Error(`Health check failed with status ${response.status}`)
  }

  return response.text()
}
