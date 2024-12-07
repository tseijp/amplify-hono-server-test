### Ref

- [AWS Amplify HostingでHonoを使ったフルスタックウェブアプリケーションを構築する](https://zenn.dev/laiso/articles/cee5fc8b238bbe)
- [世界最速でHonoをAmplify Hostingで動かしてみた - gensobunya Life Blog](https://gensobunya-tech.hatenablog.com/entry/2023/11/21/221416)

### Getting Started

```
npm create hono@latest amplify-hono-server-test
cd amplify-hono-server-test
npm i typescript -D
```

### Update main file

```ruby
curl -O https://raw.githubusercontent.com/tseijp/amplify-hono-server-test/refs/heads/main/index.ts
curl -O https://raw.githubusercontent.com/tseijp/amplify-hono-server-test/refs/heads/main/deploy-manifest.json
curl -O https://raw.githubusercontent.com/tseijp/amplify-hono-server-test/refs/heads/main/amplify.yml
```

### Test start, build, serve

```ruby
# start
tsx watch index.ts
# build
tsc --outDir dist
# serve
node dist/index.js
```

### Push to Github

```
echo ".amplify-hosting" >> .gitignore
git add .
git commit -m ":tada: init commit"
git branch -M main
git remote add origin https://github.com/tseijp/amplify-hono-server-test.git
git push -u origin main
```