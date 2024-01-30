# 1. BUN JS - Mongose demo <!-- omit in toc-->

# 2. Install
bun install

# 3. Run
bun run dev

~~~
BunJS - Mongoose Testing listening to port 3000 - BUN JS | REST 🚀
connected
> successfully open the database
~~~

# 4. Test
From CLI
## 4.1. Insert a user
```
curl -X POST -H "Content-Type: application/json"  --data-raw '{ "username":"TEST" }' http://localhost:3000/set-user
```

## 4.2. get users
```
curl localhost:3000/get-users
```

# Issues
Wait for 5 minutes running the app
