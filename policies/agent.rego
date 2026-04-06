package agentguard
default allow = false
allow {
  input.action == "book_flight"
  input.budget < 400
  input.destination == "EU"
  input.user_confirmed == true
}
