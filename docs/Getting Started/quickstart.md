# Quickstart

This guide walks you through making your first API calls to Collins. By the end, you'll have listed your venues and retrieved a booking.

## Prerequisites

- A **Bearer token** from your account manager (see [Authentication](authentication.md))
- A tool for making HTTP requests (e.g. `curl`, Postman, or your preferred HTTP client)

## Step 1: List your venues

Start by listing the venues your token has access to. This confirms your credentials are working and gives you venue IDs to use in subsequent requests.

```bash
curl -H "Authorization: Bearer YOUR_API_TOKEN" \
  https://apim.hos.accessacloud.com/collins/api/venues
```

### Example response

```json
[
  {
    "id": "5cab15dbff3b7aae0090ad44",
    "title": "Bar Collins",
    "venue_group": "5cab162d8589744d72dbbc2b",
    "manage_own_bookings": true,
    "status": "public",
    "store_code": "123",
    "address": {
      "building_name": "23-28",
      "street": "Penn Street",
      "city": "London",
      "postcode": "N1 5DL"
    },
    "tags": [
      "5d5acedb672f350a91796e05"
    ],
    "created_date": "2020-01-01 13:30:00",
    "last_updated": "2020-01-01 13:30:00"
  }
]
```

The response is paginated. Check the response headers for pagination details:

| Header | Description |
|---|---|
| `X-Pagination-Page` | The current page number |
| `X-Pagination-Per-Page` | The number of results per page |
| `X-Pagination-Total-Pages` | The total number of pages |
| `X-Pagination-Total-Results` | The total number of venues |

## Step 2: List bookings for a venue

Using a `venue_id` from the previous response, list the bookings for that venue:

```bash
curl -H "Authorization: Bearer YOUR_API_TOKEN" \
  "https://apim.hos.accessacloud.com/collins/api/bookings?venue_id=5cab15dbff3b7aae0090ad44"
```

### Example response

```json
[
  {
    "id": "5cab15dbff3b7aae0090ad44",
    "status": "complete",
    "reference": 12345678,
    "venue_id": "5c80155a86bb06bc1401ea1e",
    "venue_group": "5c8015884e68d55f12c7ec9d",
    "num_people": 2,
    "date": "2019-04-08",
    "time": "13:30",
    "duration": 60,
    "type": {
      "id": "5cab175756a18dbcd8156ab1",
      "name": "Brunch",
      "guestlist": false,
      "private_hire": false,
      "value": 60
    },
    "first_name": "John",
    "last_name": "Doe",
    "email": "test@example.com",
    "phone": "1234567890",
    "company": "The Access Group",
    "labels": [
      "Birthday"
    ],
    "walk_in": false,
    "auto_confirmed": true,
    "created_date": "2019-01-01 13:30:00",
    "last_updated": "2019-01-01 13:30:00"
  }
]
```

{% hint style="info" %}
Results are scoped to venues the authenticated user has access to. You can also filter bookings by date, status, number of people, and many other parameters. See the [List Bookings](../API%20Reference%20—%20Bookings/list-bookings.md) endpoint for the full list of filters.
{% endhint %}

## Step 3: Get a single booking

To retrieve the full details of a specific booking, use its `id`:

```bash
curl -H "Authorization: Bearer YOUR_API_TOKEN" \
  https://apim.hos.accessacloud.com/collins/api/bookings/5cab15dbff3b7aae0090ad44
```

### Example response

```json
{
  "id": "5cab15dbff3b7aae0090ad44",
  "assigned_to": "5cab162d8589744d72dbbc2b",
  "created_by": "5cab162d8589744d72dbbc2b",
  "status": "complete",
  "status_changed_date": "2019-01-01 13:30:00",
  "follow_up": "2019-01-02 13:13:00",
  "reference": 12345678,
  "venue_id": "5c80155a86bb06bc1401ea1e",
  "venue_group": "5c8015884e68d55f12c7ec9d",
  "assigned_areas": [
    {
      "id": "525588460df6906334ca1ed7",
      "name": "Table 1",
      "zone": "533d59f80df690746c714614"
    }
  ],
  "assigned_area_locked": false,
  "num_people": 2,
  "date": "2019-04-08",
  "time": "13:30",
  "duration": 60,
  "type": {
    "id": "5cab175756a18dbcd8156ab1",
    "name": "Brunch",
    "guestlist": false,
    "private_hire": false,
    "value": 60
  },
  "value": 120.00,
  "customer_id": "5314491e0a8efb6d7c19c39c",
  "first_name": "John",
  "last_name": "Doe",
  "email": "test@example.com",
  "additional_emails": [
    "additional@example.com"
  ],
  "phone": "1234567890",
  "alternative_phone": "1234567891",
  "company": "The Access Group",
  "company_address": {
    "street": "Penn Street",
    "city": "London",
    "post_code": "N1 5DL"
  },
  "deposits": [],
  "refunds": [],
  "lost": false,
  "actual_guests": 2,
  "current_stage": "arrived_seated",
  "labels": [
    "Birthday"
  ],
  "walk_in": false,
  "auto_confirmed": true,
  "partner_source": "Facebook",
  "created_date": "2019-01-01 13:30:00",
  "last_updated": "2019-01-01 13:30:00",
  "waitlisted": false,
  "linked_bookings": [],
  "comments": [],
  "channel": "web",
  "offer": {
    "id": "552439867872797140314f70",
    "title": "BOGOF",
    "description": "Buy one get one free"
  },
  "notes": "I would like to sit near the window",
  "double_confirmed": true,
  "has_preorders": false
}
```

## What's next?

Now that you've made your first API calls, you can explore more of the Collins API:

- **[API Basics](../API%20Basics/base-url.md)** — learn about base URLs, request format, pagination, and rate limits
- **[Booking Fields](../API%20Reference%20—%20Bookings/booking-fields.md)** — complete field reference for the booking object
- **[List Bookings](../API%20Reference%20—%20Bookings/list-bookings.md)** — full list of filters and query parameters
- **[Customers](../API%20Reference%20—%20Customers/list-customers.md)** — manage customer data
- **[Reporting API](../API%20Reference%20—%20Reporting/overview.md)** — optimised read-only booking queries

## Related

- [Authentication](authentication.md)
- [Environments](environments.md)
- [Overview](overview.md)
