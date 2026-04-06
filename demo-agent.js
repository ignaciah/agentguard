async function requestAction(action, context) {
  const res = await fetch('http://localhost:4000/guard/check', {
    method: 'POST',
    headers: { 'X-API-Key': 'agent-api-key' },
    body: JSON.stringify({ action, context })
  });
  const { allowed } = await res.json();
  if (allowed) console.log(`✅ ${action} allowed`);
  else console.log(`❌ ${action} denied`);
}
requestAction('book_flight', { budget: 450, destination: 'USA' });
