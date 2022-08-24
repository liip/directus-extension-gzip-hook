import compression from 'compression';

// See https://github.com/directus/directus/discussions/12973
export default ({ init }) => {
    init('app.before', async function ({ app }) {
        app.use(compression());
    });
}