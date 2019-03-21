You must provide your bearer token with every request that you make to the API. To do this, set an HTTP
`Authorization` header on your request that consists of the prefix `Bearer` and the token.

To obtain a bearer token, please speak to your account manager.

```shell
$ curl -H "Authorization: Bearer 1234567890" https://api.collinsbookings.com/api/customers
```