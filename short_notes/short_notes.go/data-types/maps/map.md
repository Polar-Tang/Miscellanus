A map is a key-values pair that utilizes hash table, [[maps-are-faster]]. 
The syntax is the following:
```go
map[KeyType]ValueType
```

- **`KeyType`** should be any type of the [[comparable-types]]
- **`ValueType`** could be any type, even a map


#### Declaration
the keytype is a strin and the value type is an int:
```go
var m map[string]int
```
The [[zero_value]] of a map is nil.
But this will cause a run time panic. To avoid that use a [[make]] for better [[memory-allocating]]
#### Initialize the map thus:
```GO
m = make(map[string]int)
```
### Insert an elemnt
To initializate any object of the slice we could use:
```go
m[key] = elem
```
If you wan to initize multiple data you should to specify the key and the value exlpicitly
```go
commits := map[string]int{
    "rsc": 3711,
    "r":   2138,
    "gri": 1908,
    "adg": 912,
}
```
The same syntax could be used to initialize a zero value:
```go
m = map[string]int{}
```
###### Get an example
```go
func getUserMap(names []string, phoneNumbers []int) (map[string]user, error) {
    if len(names) != len(phoneNumbers) {
        return nil, errors.New("invalid sizes")
    }

    newUser := make(map[string]user)

    for i := 0; i < len(names); i++ {
        newUser[names[i]] = user{
            name:        names[i],
            phoneNumber: phoneNumbers[i],
        }
    }

    return newUser, nil
}
```
### Get an element
```go
elem = m[key]
```
- This expression does **not** just refer to the key (`message`).
- It actually accesses the **value** associated with the key `message` in the `validUsers` map.
If you try to get a value that doesn't exist, you will get its [[zero_value]]
No need to use a for to access to the code:
```go
func deleteIfNecessary(users map[string]user, name string) (deleted bool, err error) {
    user, ok := users[name]
    if !ok {
        return false, errors.New("not found")
    }

    if user.scheduledForDeletion {
        return true, nil
    }
    
    return false, nil
}
```
If i'd use a for here the ok condition would never worked
### Delete an element
```go
delete(m, key)
```
The `delete` function doesn’t return anything, and will do nothing if the specified key doesn’t exist.
### Check if a key exists
```go
elem, ok := m[key]
```
If 

#### Iterate over the map
To iterate on the maps you MUST utilize [[for...range]] 
```go
for key, value := range m {
    fmt.Println("Key:", key, "Value:", value)
}
```


