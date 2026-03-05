# Environments

Collins provides two environments for API access: **Production** and **Playpen** (testing).

## Production

The production environment is the live system. All API requests in production operate on real data.

| Service | Base URL |
|---|---|
| Collins API | `https://apim.hos.accessacloud.com/collins` |
| Reporting API | `https://apim.hos.accessacloud.com/collins-reporting` |
| Availability API | `https://apim.hos.accessacloud.com/collins-availability` |
| DMN API | `https://apim.hos.accessacloud.com/dmn` |

All requests must be made over **HTTPS**.

{% hint style="info" %}
These URLs go through the **Access Hospitality Integration Hub**, which wraps the underlying Collins APIs with public-facing endpoints.
{% endhint %}

## Playpen (testing)

The Playpen environment is a sandbox for testing your integration before going live. It operates on test data and will not affect your production venues or bookings.

{% hint style="warning" %}
Playpen requires **separate credentials** from production. Contact your account manager to obtain Playpen access and URLs.
{% endhint %}

## Key points

- All API endpoints on the Collins API are prefixed with `/api` (e.g. `https://apim.hos.accessacloud.com/collins/api/bookings`).
- The Reporting API does **not** use the `/api` prefix (e.g. `https://apim.hos.accessacloud.com/collins-reporting/bookings`).
- The Availability API does **not** use the `/api` prefix.
- You will need a separate Bearer token for each environment. See [Authentication](authentication.md) for details.

## Related

- [Authentication](authentication.md)
- [Quickstart](quickstart.md)
- [Overview](overview.md)
