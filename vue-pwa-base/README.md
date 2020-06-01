# vue-pwa-base
vue.jsのPWAベース。  
Android端末へのpush通知を想定しているため、FCM(Firebase Cloud Messaging)周りの設定済み。

## Environment setup

1. Connect docker container.
    ``` docker exec -it <container_id> ash ```

2. Install npm module.
    ``` npm install ```

3. Run server.  
    ``` npm run serve ```

4. Connect `http://localhost:8080`.
