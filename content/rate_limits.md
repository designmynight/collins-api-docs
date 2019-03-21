All requests to the API are rate limited based on your credentials. You should check the headers for the current
status of any rate limits:

Header Name | Description
--- | ---
`X-RateLimit-Limit` | The maximum number of requests that the consumer is permitted to make per hour
`X-RateLimit-Remaining` | The number of requests remaining in the current rate limit window
`X-RateLimit-Reset` | The time at which the current rate limit window resets, in ISO 8601 format

If you go over the rate limit, you will receive an error response with the status code `429`.