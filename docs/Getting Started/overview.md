# Overview

Access Collins provides several integration options for connecting your systems with the Collins booking management platform.

## Integration paths

There are four main ways to integrate with Collins:

### 1. Collins API

The Collins API is a RESTful API for **server-to-server integrations**. Use it to programmatically manage bookings, customers, and venues. The API supports full CRUD operations on these resources and is the primary integration point for most use cases.

**Base URL:** `https://apim.hos.accessacloud.com/collins`

Key capabilities:

- List, create, update, and delete bookings
- Manage customers and their marketing preferences
- Retrieve venue details and configuration
- Handle deposits, refunds, and notifications

### 2. Reporting API

The Reporting API is a **separate service** optimised for read-only booking queries and notification-centre counts. It is designed for reporting dashboards and enquiry-page use cases where you need to efficiently query large sets of bookings.

**Base URL:** `https://apim.hos.accessacloud.com/collins-reporting`

{% hint style="info" %}
The Reporting API has its own base URL, response shape, and filter set — these differ from the main Collins API's booking endpoints. See the [API Reference — Reporting](../API%20Reference%20—%20Reporting/overview.md) section for full details.
{% endhint %}

Key differences from the main Collins API:

- Different base URL with no `/api` prefix
- Different response shape (e.g. `_id` instead of `id`, `datetime` instead of separate `date`/`time`)
- Different filter set (e.g. `type_name` instead of `type`, adds `concierge` and `venue_tags`)
- Different pagination (uses `per_page` instead of `limit`, maximum 1000)

### 3. Availability API

The Availability API is a separate service for checking venue availability. Use it to search for venues with open slots, retrieve suggested booking times, and check available areas.

**Base URL:** `https://apim.hos.accessacloud.com/collins-availability`

### 4. Booking Widget

The Booking Widget is a JavaScript-based booking form that you can embed directly on your website. It provides a ready-made checkout experience for customers to make bookings without needing to build your own UI.

## Access Hospitality Integration Hub

All API requests are routed through the **Access Hospitality Integration Hub**, a central API gateway for the Access Group's Hospitality division. The Integration Hub wraps Collins' internal services with public-facing URLs. You should always use the Integration Hub URLs listed in these docs.

## Next steps

1. Review the [Environments](environments.md) page to understand the available environments
2. Set up [Authentication](authentication.md) with your Bearer token
3. Follow the [Quickstart](quickstart.md) guide to make your first API call

## Related

- [Environments](environments.md)
- [Authentication](authentication.md)
- [Quickstart](quickstart.md)
