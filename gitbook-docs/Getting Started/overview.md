# Overview

Access Collins provides several integration options for connecting your systems with the Collins platform.

## About Collins

Collins is a hospitality booking management platform that allows venues to manage reservations, customer relationships, and operational workflows. As an integrator, you can interact with Collins programmatically through its APIs or embed a booking experience directly on your website using the booking widget.

## Integration paths

There are two main ways to integrate with Collins:

### 1. Collins API (server-to-server)

The Collins API is a RESTful JSON API for managing **bookings**, **customers**, and **venues**. Use this when you need to:

- Synchronise booking data with your own systems (e.g. EPOS, CRM, reporting).
- Create or update bookings and customer records programmatically.
- Retrieve venue information and configuration.

The Collins API base URL is:

```
https://apim.hos.accessacloud.com/collins-api
```

### 2. Booking Widget (client-side)

The booking widget is a JavaScript-based booking form that you can embed on any website. It provides a customer-facing interface for searching availability and making reservations without needing to build your own booking flow.

### Availability API

In addition to the Collins API, there is a separate **Availability API** for checking real-time venue availability. This is useful if you need to build custom availability searches or integrate availability data into your own front end.

The Availability API base URL is:

```
https://apim.hos.accessacloud.com/collins-availability
```

## Next steps

1. Review the [Environments](environments.md) page to understand the available API environments.
2. Set up [Authentication](authentication.md) with your Bearer token.
3. Follow the [Quickstart](quickstart.md) guide to make your first API call.

## Related

- [Environments](environments.md)
- [Authentication](authentication.md)
- [Quickstart](quickstart.md)
- [API Basics — Base URL](../API%20Basics/base-url.md)
