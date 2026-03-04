# Environments

Collins provides two environments: **Production** and **Staging**. Both environments require separate credentials.

## Overview

All API requests must be made over HTTPS. Each environment has its own set of base URLs and credentials. Use the Staging environment for development and testing before moving to Production.

## Production

The Production environment is your live environment. Use these URLs for all production integrations.

| API Service | Base URL |
|---|---|
| Collins API | `https://apim.hos.accessacloud.com/collins-api` |
| Collins Availability API | `https://apim.hos.accessacloud.com/collins-availability` |
| Core API | `https://apim.hos.accessacloud.com/core-api` |

## Staging

The Staging environment is for development and testing. Data in this environment is separate from Production and can be reset at any time.

| API Service | Base URL |
|---|---|
| Collins API | `https://preprodapim.hos.accessacloud.com/collins-api` |
| Collins Availability API | `https://preprodapim.hos.accessacloud.com/collins-availability` |
| Core API | `https://preprodapim.hos.accessacloud.com/core-api` |

{% hint style="info" %}
Staging requires separate credentials from your Production credentials. Contact your account manager to obtain Staging API tokens.
{% endhint %}

## Key points

- All requests must be made over **HTTPS**.
- Production and Staging credentials are **not interchangeable**.
- The Staging environment is intended for integration development and testing only.

## Related

- [Overview](overview.md)
- [Authentication](authentication.md)
- [API Basics — Base URL](../API%20Basics/base-url.md)
