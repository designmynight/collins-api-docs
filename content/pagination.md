Some API responses are paginated. If a response contains paginated data, this will be clearly marked in these docs.

You should check the headers for details about the pagination:

Header Name | Description
--- | ---
`X-Pagination-Page` | The page number for the current set of results
`X-Pagination-Per-Page` | The total number of resources that will be returned per page
`X-Pagination-Total-Pages` | The total number of pages
`X-Pagination-Total-Results` | The total number of resources that the search query returned

To specify the page you want to retrieve results for, you should use the `page` URL parameter.

For example, if you made the following request:

```shell
$ curl https://api.collinsbookings.com/api/customers?query=@designmynight.com
```

and the following headers were sent back:

```
X-Pagination-Page           1
X-Pagination-Per-Page       30
X-Pagination-Total-Pages    4
X-Pagination-Total-Results  100
```

The query returned 100 results, but each request will only show 30 at a time. To grab the next 30, you will need
to make an additional request with the `page` URL parameter and increment this for the number of pages (`X-Pagination-Total-Pages`),
like so:

```shell
$ curl https://api.collinsbookings.com/api/customers?query=@designmynight.com&page=2
$ curl https://api.collinsbookings.com/api/customers?query=@designmynight.com&page=3
$ curl https://api.collinsbookings.com/api/customers?query=@designmynight.com&page=4
```
