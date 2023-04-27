const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/signup', // 요청 path를 지정해줍니다
    createProxyMiddleware({
      target: 'https://1925-115-140-189-21.jp.ngrok.io',
      changeOrigin: true,
    }),
  );

  app.use(
    '/login/connection',
    createProxyMiddleware({
      target: 'https://1925-115-140-189-21.jp.ngrok.io',
      changeOrigin: true,
    }),
  );
};
