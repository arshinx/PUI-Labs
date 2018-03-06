### Notes

Local Storage: keeps items forever, no expiration (unless manually removed).

- `localStorage.set("key", "value")`
- `localStorage.get("key")`
- `localStorage.key`

Session Storage: data goes away when browser (tab) is closed.

- `sessionStorage.set("key", "value")`
- `sessionStorage.get("key")`
- `sessionStorage.key`

#### JSON

Store and send JS Objects

Create Object: `var cat = {"age": 5, "name":"abc"}`
Convert to JSON Format: `var jsonCat = JSON.stringify(cat)`
Get Data: `JSON.parse()`
