# Authentication

All requests to the Collins API must be authenticated using a Bearer token.

## Overview

Collins uses Bearer token authentication. You must include your token in the `Authorization` header of every API request. Tokens are issued by your account manager — there is no self-service token generation.

## Setting the Authorisation header

Set an HTTP `Authorization` header on your request that consists of the prefix `Bearer` followed by your token:

```
Authorization: Bearer YOUR_API_TOKEN
```

## Request example

```bash
curl -H "Authorization: Bearer YOUR_API_TOKEN" \
  "https://apim.hos.accessacloud.com/collins-api/venues"
```

## Obtaining a token

To obtain a Bearer token, please speak to your Access Collins account manager. They will provide you with credentials for the environment(s) you need access to.

{% hint style="warning" %}
Production and Staging environments require **separate** tokens. Make sure you request credentials for each environment you intend to use.
{% endhint %}

## Error responses

If your token is missing or invalid, the API will return a `401 Unauthenticated` response:

```json
{
  "error": "Unauthenticated."
}
```

If your token does not have permission to access the requested resource, the API will return a `403 Forbidden` response.

## Related

- [Overview](overview.md)
- [Environments](environments.md)
- [Quickstart](quickstart.md)
- [API Basics — Authorisation](../API%20Basics/authorisation.md)
