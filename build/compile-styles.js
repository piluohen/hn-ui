const fs = require('fs-extra');
const path = require('path');
const less = require('less');
const LessPluginCleanCSS = require('less-plugin-clean-css');
const NpmImportPlugin = require('less-plugin-npm-import');

function compileLess(content, savePath, min, sub, rootPath) {
  return new Promise((resolve, reject) => {
    const plugins = [];
    const lessOptions = { plugins: plugins, javascriptEnabled: true };

    if (min) {
      plugins.push(new LessPluginCleanCSS({ advanced: true }));
    }

    if (sub) {
      lessOptions.paths = [path.dirname(rootPath)];
      lessOptions.filename = rootPath;
      plugins.push(
        new NpmImportPlugin({
          prefix: '~'
        })
      );
    }

    return less
      .render(content, lessOptions)
      .then(({ css }) => {
        fs.writeFileSync(savePath, css);
        resolve();
      })
      .catch(err => reject(err));
  });
}

const sourcePath = path.resolve(__dirname, '../components');
const targetPath = path.resolve(__dirname, '../publish');
const componentFolders = fs.readdirSync(targetPath);

componentFolders.forEach(dir => {
  let style = `${dir}/style`;
  if (fs.existsSync(`${sourcePath}/${style}`)) {
    fs.copySync(path.resolve(`${sourcePath}/${style}`), path.resolve(`${targetPath}/${style}`));

    const lessContent = `@import "${path.posix.join(`${targetPath}/${style}`, 'index.less')}";`;

    compileLess(lessContent, path.join(`${targetPath}/${style}`, 'index.css'), false).catch(e => console.log(e));
    compileLess(lessContent, path.join(`${targetPath}/${style}`, 'index.min.css'), true).catch(e => console.log(e));
  }
});

fs.copySync(path.resolve(sourcePath, 'style'), path.resolve(targetPath, 'style'));
fs.writeFileSync(`${targetPath}/hn-ui.less`, fs.readFileSync(`${sourcePath}/hn-ui.less`));

const lessContent = `@import "${path.posix.join(targetPath, 'hn-ui.less')}";`;
compileLess(lessContent, path.join(targetPath, 'hn-ui.css'), false).catch(e => console.log(e));
compileLess(lessContent, path.join(targetPath, 'hn-ui.min.css'), true).catch(e => console.log(e));
