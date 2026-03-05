# Authentication

All requests to the Collins API require authentication via a **Bearer token**.

## How it works

You must provide your Bearer token with every request by setting an HTTP `Authorization` header. The header value consists of the prefix `Bearer` followed by a space and your token.

```
Authorization: Bearer {token}
```

## Obtaining a token

To obtain a Bearer token, please speak to your **account manager** at The Access Group. They will provide you with credentials for the environment(s) you need access to.

{% hint style="warning" %}
Production and Playpen environments require **separate tokens**. Make sure you request credentials for each environment you need.
{% endhint %}

## Example request

```bash
curl -H "Authorization: Bearer YOUR_API_TOKEN" \
  https://apim.hos.accessacloud.com/collins/api/venues
```

## Token usage across services

The same authentication scheme (Bearer token) is used across all Collins services:

| Service | Base URL | Auth header |
|---|---|---|
| Collins API | `https://apim.hos.accessacloud.com/collins` | `Authorization: Bearer {token}` |
| Reporting API | `https://apim.hos.accessacloud.com/collins-reporting` | `Authorization: Bearer {token}` |
| Availability API | `https://apim.hos.accessacloud.com/collins-availability` | `Authorization: Bearer {token}` |

{% hint style="info" %}
If the `Authorization` header is missing or the token is invalid, the API will return a `401 Unauthenticated` error:

```json
{
  "error": "Unauthenticated."
}
```
{% endhint %}

## Related

- [Environments](environments.md)
- [Quickstart](quickstart.md)
- [API Basics — Authorisation](../API%20Basics/authorisation.md)
