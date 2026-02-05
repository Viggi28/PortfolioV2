# Vignesh Mohan — Portfolio

Personal portfolio website built with React, showcasing projects, experience, and skills.

## Live

[Live Site](https://viggi28.github.io/PortfolioV2)

## Instructions

### Setup

```shell
git clone https://github.com/Viggi28/PortfolioV2
cd PortfolioV2
```

If you use [nvm](https://github.com/nvm-sh/nvm) or [fnm](https://github.com/Schniz/fnm), execute:

```shell
nvm install
nvm use
```

Or:

```shell
fnm install
fnm use
```

To install and launch the project, run:

```shell
npm install
npm start
```

### How to Use

- Update `public/index.html` title.
- Update `src/portfolio.js` with your content and assets.

Project images can be local or remote:
1. **Local image**: add to `src/Assets/` and import in `src/portfolio.js`.
2. **Web image**: set the image field to a URL.



### Deployment (GitHub Pages)

1. Ensure `homepage` in `package.json` matches:
   `https://viggi28.github.io/PortfolioV2`
2. Push changes to GitHub.
3. Deploy:

```shell
npm run build
npm run deploy
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
