```sh
$ docker build . -t demo_node
$ docker run --name demo_node -p 0.0.0.0:8080:8080 -d demo_node
$ docker run -d --name demo_redis -p 127.0.0.1:6379:6379 \
redis/redis-stack-server:latest
$ docker exec -it demo_redis bash
root@39a5f28a75e2:/data# redis-cli
127.0.0.1:6379> set customer_name "demo"
OK
```
