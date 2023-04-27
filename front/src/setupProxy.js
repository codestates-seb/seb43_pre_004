const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/signup', // 요청 path를 지정해줍니다
    createProxyMiddleware({
      target: '13.209.68.130',
      changeOrigin: true,
    }),
  );

  app.use(
    '/login/connection',
    createProxyMiddleware({
      target: '13.209.68.130',
      changeOrigin: true,
    }),
  );
};
