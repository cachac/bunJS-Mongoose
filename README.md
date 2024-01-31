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

# 5. Issues
Wait for 5 minutes running the app and then try to get users.
```
curl localhost:3000/get-users
```

Result:
~~~
error: connection 2 to <SERVER_IP_ADDRESS>:27017 closed
~~~

Try again and it works :/

# Load testing
export PORT=
hey  -z 10s -q 1000  -c 30  -t 30  http://localhost:$PORT/get-users

hey  -z 3s  -c 3   -t 30  -m  POST -T "application/json"  -d '{ "username":"${date}" }' http://localhost:$PORT/set-user

hey  -z 3s  -c 3   -t 30  -m  POST -T "application/json"  -d '{ "_id":"65baac63a989afefdc149a7e" }' http://localhost:$PORT/get-id

hey  -z 3s  -c 3   -t 30  -m  POST -T "application/json"  -d '{ "username":"carlos" }' http://localhost:$PORT/get-id



