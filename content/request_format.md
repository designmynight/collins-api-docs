Data may be sent to the server either through parameters appended to the URL, or as a JSON object included in the request body.

Where JSON is used, you should also include a header specifying the content type as `application/json`.

```shell
$ curl -X PUT -H "Content-Type: application/json" -d '{\"first_name\": \"Dan\"}' https://api.collinsbookings.com/api/customers/12345
```