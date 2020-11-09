# STAYFUN-FRONTEND-PROXY - Api Specs

## 招募測評管理

### GET /api/v1/recruitExaminationList?sortBy=&keyword=

Request Query

```json
{
  "sortBy": "columnName: string | boolean",
  "keyword": "string"
}
```

Response Body

```json
{
  "syscode": "number | string",
  "sysmsg": "string",
  "data": {
    // response body
  }
}
```

### POST /api/v1/recruitExaminationCreation?type=

Request Query

```json
{
  "type": "single | multiple"
}
```

Request Body

```json
{
  "param1": "string",
  "param2": "string"
}
```

Response Body

```json
{
  "syscode": "number | string",
  "sysmsg": "string",
  "data": {
    // response body
  }
}
```

### POST /api/v1/recruitExaminationInvitationCreation?type=

Request Query

```json
{
  "type": "single | multiple"
}
```

Request Body

```json
{
  "param1": "string",
  "param2": "string"
}
```

Response Body

```json
{
  "syscode": "number | string",
  "sysmsg": "string",
  "data": {
    // response body
  }
}
```

### POST /api/v1/recruitExaminationReportCreation?type=

Request Query

```json
{
  "type": "single | multiple"
}
```

Request Body

```json
{
  "param1": "string",
  "param2": "string"
}
```

Response Body

```json
{
  "syscode": "number | string",
  "sysmsg": "string",
  "data": {
    // response body
  }
}
```
