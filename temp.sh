# List of possible error messages
error_messages=("Application Log : Searching for student details " "Application Log : Information Found" "Application Log : Printing Details" "Application Log : Connected to DB" )

while true; do
    # Select a random error message
    random_error=${error_messages[$((RANDOM % ${#error_messages[@]}))]}

    # Generate random values for timestamp, commit, and span
    timestamp=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
    commit=$(uuidgen)
    span=$(uuidgen)

    # JSON body with random values and error message
    json_body='{
        "level": "info",
        "message": "'"$random_error"'",
        "resourceId": "server-8923",
        "timestamp": "'"$timestamp"'",
        "traceId": "abc-xyz-123",
        "spanId": "'"$span"'",
        "commit": "'"$commit"'",
        "metadata": {
            "parentResourceId": "server-1234"
        }
    }'

    # Send POST request to localhost:3000
    curl -X POST -H "Content-Type: application/json" -d "$json_body" http://localhost:3000 &
    # Introduce a delay to achieve 100 requests per second
    sleep 0.1
done