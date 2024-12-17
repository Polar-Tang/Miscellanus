Sometimes we have a single goroutine listening to multiple channels and want to process data in the order it comes through each channel.
A select is used to listen to multiple channels at the same time, is slightly similar to [[switch]] but for channel.
```go
select {
case i, ok := <- chInts:
    fmt.Println(i)
case s, ok := <- chStrings:
    fmt.Println(s)
}
```
The first case evaluates if i exist and then prints it, just the same with 
If we what a code like this, where a channel is faster than other:
```go
func main() {
    c1 := make(chan string) // initialize it
    c2 := make(chan string) // initialize it
    
    go func() {
        for {
            c1 <- "from 1"
            time.Sleep(time.Millisecond * 500)
        }
    }()
    
    go func() {
        for {
            c2 <- "from 2"
            time.Sleep(time.Millisecond * 2000)
        }
    }()

    for {
        fmt.Println(<-c1)
        fmt.Println(<-c1)
    }
}
```
This will cause a blocking and the task that last a half of second will last 2 second too.
To avoid this use select syntax:
```go
func main() {
    c1 := make(chan string) // initialize it
    c2 := make(chan string) // initialize it
    
    go func() {
        for {
            c1 <- "from 1"
            time.Sleep(time.Millisecond * 500)
        }
    }()
    
    go func() {
        for {
            c2 <- "from 2"
            time.Sleep(time.Millisecond * 2000)
        }
    }()

    for {
		select {
		case msg1 := <-c1: 
			fmt.Println(<-msg1)
		case msg2 := <-c2:
			fmt.Println(<-msg2)
		}
    }
}
```

#### Default use
The default case is to execute a task if no other channel is ready.
```go
select {
case v := <-ch:
    // use v
default:
    // receiving from ch would block
    // so do something else
}
```