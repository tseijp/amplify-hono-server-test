### Ref

- [AWS Amplify HostingでHonoを使ったフルスタックウェブアプリケーションを構築する](https://zenn.dev/laiso/articles/cee5fc8b238bbe)
- [世界最速でHonoをAmplify Hostingで動かしてみた - gensobunya Life Blog](https://gensobunya-tech.hatenablog.com/entry/2023/11/21/221416)

### Getting Started
```
npm create hono@latest amplify-hono-server-test
cd amplify-hono-server-test
```

### Install express, typescript and types
```ruby
npm install express --save
npm install typescript ts-node @types/node @types/express --save-dev
```

### Generate tsconfig.json

```ruby
npx tsc --init
```

### Update main file

```ruby
curl -O https://raw.githubusercontent.com/tseijp/amplify-express-server-test/refs/heads/main/index.ts
curl -O https://raw.githubusercontent.com/tseijp/amplify-express-server-test/refs/heads/main/deploy-manifest.json
curl -O https://raw.githubusercontent.com/tseijp/amplify-express-server-test/refs/heads/main/amplify.yml
```

### start, build, serve

```ruby
ts-node src
tsc --outDir dist
```

### Push to Github

```
git branch -M main
git remote add origin https://github.com/tseijp/amplify-hono-server-test.git
git push -u origin main
```