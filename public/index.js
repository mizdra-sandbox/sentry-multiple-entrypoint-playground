Sentry.init({
  dsn: 'https://75d67850fa86409aa16044c052c425be@o912199.ingest.sentry.io/5849017',
  debug: true,
});

const ROUTES = [
  { path: '/a', entrypoint: '/a.js' },
  { path: '/b', entrypoint: '/b.js' },
  { path: '/c', entrypoint: '/c.js' },
  { path: '/d', entrypoint: '/d.js' },
];

const params = new URLSearchParams(new URL(location).search);
const path = params.get('path');

const route = ROUTES.find((route) => route.path === path);
if (route) {
  import(route.entrypoint).then(({ entrypoint }) => entrypoint());
}

throw new Error("this is error in page's entrypoint");
