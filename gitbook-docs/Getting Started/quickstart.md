# Quickstart

Follow these steps to make your first requests to the Collins API.

## Overview

This guide walks you through the essential first steps of integrating with Collins: authenticating, listing your venues, retrieving bookings, and fetching a single booking. By the end, you will have a working understanding of how to interact with the API.

## Prerequisites

- A valid **Bearer token** for the Collins API. See [Authentication](authentication.md) if you do not have one yet.
- A tool for making HTTP requests (e.g. `curl`, Postman, or your preferred HTTP client).

## Step 1: Get your Bearer token

Contact your Access Collins account manager to obtain your API token. You will include this token in the `Authorization` header of every request.

## Step 2: List your venues

Start by retrieving the venues your token has access to.

### Request

```bash
curl -H "Authorization: Bearer YOUR_API_TOKEN" \
  "https://apim.hos.accessacloud.com/collins-api/venues"
```

### Response (200)

```json
{
  "venues": [
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
}
```

{% hint style="info" %}
Take note of the `id` field for each venue. You will need a venue ID to filter bookings in the next step.
{% endhint %}

## Step 3: List bookings for a venue

Use the `venue_id` query parameter to retrieve bookings for a specific venue.

### Request

```bash
curl -H "Authorization: Bearer YOUR_API_TOKEN" \
  "https://apim.hos.accessacloud.com/collins-api/bookings?venue_id=5cab15dbff3b7aae0090ad44"
```

### Response (200)

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
    "channel": "web",
    "created_date": "2019-01-01 13:30:00",
    "last_updated": "2019-01-01 13:30:00"
  }
]
```

{% hint style="info" %}
The response is paginated. Check the `X-Pagination-Total-Pages` response header to determine if there are additional pages. See [Pagination](../API%20Basics/pagination.md) for details.
{% endhint %}

## Step 4: Get a single booking

Retrieve the full details of a specific booking using its ID.

### Request

```bash
curl -H "Authorization: Bearer YOUR_API_TOKEN" \
  "https://apim.hos.accessacloud.com/collins-api/bookings/5cab15dbff3b7aae0090ad44"
```

### Response (200)

```json
{
  "id": "5cab15dbff3b7aae0090ad44",
  "assigned_to": "5cab162d8589744d72dbbc2b",
  "created_by": "5cab162d8589744d72dbbc2b",
  "status": "complete",
  "status_changed_date": "2019-01-01 13:30:00",
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
  "notes": "I would like to sit near the window",
  "double_confirmed": true,
  "has_preorders": false
}
```

## What next?

Now that you have made your first API calls, explore the full API reference:

- [Booking Fields](../API%20Reference%20—%20Bookings/booking-fields.md) — complete field reference for the booking object.
- [List Bookings](../API%20Reference%20—%20Bookings/list-bookings.md) — full query parameter reference for filtering bookings.
- [Customers](../API%20Reference%20—%20Customers/list-customers.md) — manage customer records.
- [API Basics — Pagination](../API%20Basics/pagination.md) — learn how to page through large result sets.

## Related

- [Overview](overview.md)
- [Authentication](authentication.md)
- [Environments](environments.md)
- [API Basics — Base URL](../API%20Basics/base-url.md)
