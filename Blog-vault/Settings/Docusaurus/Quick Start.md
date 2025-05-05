
## Fast Track ⏱️[​](https://docusaurus.io/docs#fast-track "Direct link to Fast Track ⏱️")

Understand Docusaurus in **5 minutes** by playing!

Create a new Docusaurus site and follow the **very short** embedded tutorial.

Install [Node.js](https://nodejs.org/en/download/) and create a new Docusaurus site:

```
npx create-docusaurus@latest my-website classic
```

Start the site:

```Bash
cd my-website 
npx docusaurus start
```

or
```bash
cd my-website
npm run build
npm run serve

```

Open [`http://localhost:3000`](http://localhost:3000/) and follow the tutorial.

## [[Github 설치]]



## Base URL을 /Support/로 변경

1. docusaurus.config.js 의 baseUrl: '/' 를 '/support/' 로 변경.


2. 

## Tailwind css 설치



## Static Site Generation and RcloneView 홈페이지 Support 페이지 복수 절차.

1. Static Site Generation !

```bash
npm run build
```

2. Docusaurus /build/ 폴더를 RcloneView /support/ 폴더로 복사.
3. RcloneView /Support/의 index.html에 RcloneView header Bar code 추가.

