# create-react-app-sample

[create-react-app](https://github.com/facebookincubator/create-react-app)をベースにした、herokuにデプロイできるReactアプリのサンプルです。</br>
create-react-appが生成するReactアプリにバックエンドのREST APIとの通信を追加しています。

## ローカルでの実行

```sh
npm i
npm run dev
```

## herokuにデプロイする

```sh
> heroku create                                                                                    (11s 634ms)
Creating app... done, ⬢ ancient-savannah-28074
https://ancient-savannah-28074.herokuapp.com/ | https://git.heroku.com/ancient-savannah-28074.git
> heroku git:remote -a ancient-savannah-28074                                                       (3s 317ms)
set git remote heroku to https://git.heroku.com/ancient-savannah-28074.git
> git push heroku master
...
remote: Verifying deploy.... done.
To https://git.heroku.com/ancient-savannah-28074.git
 * [new branch]      master -> master
> heroku open
```

## create-react-appからの変更点

- `/todos` にGETリクエストを出すReactアプリにした
- express サーバーを追加した([`server/server.js`](https://github.com/adwd/create-react-app-sample/blob/master/server/server.js))
  - `GET /todos` でTODOリストを返す
  - `react-scripts build` が出力するhtml, js, cssの静的ファイルを配信する
