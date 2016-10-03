# create-react-app-sample

[create-react-app](https://github.com/facebookincubator/create-react-app)をベースにした、herokuにデプロイできるReactアプリのサンプルです。</br>
create-react-appが生成するReactアプリにバックエンドのREST APIとの通信を追加しています。

## ローカルでの実行

```sh
npm i
npm run dev
```

## create-react-appからの変更点

- `/todos` にGETリクエストを出すReactアプリにした
- express サーバーを追加した([`server/server.js`](https://github.com/adwd/create-react-app-sample/blob/master/server/server.js))
  - `GET /todos` でTODOリストを返す
  - `react-scripts build` が出力するhtml, js, cssの静的ファイルを配信する
