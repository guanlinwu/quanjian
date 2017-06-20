/**
 * Electron 入口
 */
const {app, BrowserWindow} = require('electron');
// var app = require('app');  // 控制应用生命周期的模块。
// var BrowserWindow = require('browser-window');  // 创建原生浏览器窗口的模块
// 保持一个对于 window 对象的全局引用，不然，当 JavaScript 被 GC，
// window 会被自动地关闭
let mainWindow = null;
// 当所有窗口被关闭了，退出。
app.on('window-all-closed', ()=> {
  // 在 OS X 上，通常用户在明确地按下 Cmd + Q 之前
  // 应用会保持活动状态
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// 当 Electron 完成了初始化并且准备创建浏览器窗口的时候
// 这个方法就被调用
app.on('ready', ()=> {
  // 创建浏览器窗口。
  mainWindow = new BrowserWindow({width: 1366, height: 1000});

  // 加载应用的 index.html
  // mainWindow.loadURL('http://localhost:8080');
  mainWindow.loadURL(`file://${__dirname}/dist/index.html`);

  // 打开开发工具
  process.argv.indexOf('--eproduction') > -1  && mainWindow.openDevTools();

  // 当 window 被关闭，这个事件会被发出
  mainWindow.on('closed', ()=> {
    // 取消引用 window 对象，如果你的应用支持多窗口的话，
    // 通常会把多个 window 对象存放在一个数组里面，
    // 但这次不是。
    mainWindow = null;
  });
});
