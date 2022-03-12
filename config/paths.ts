import path from 'path';

const srcPath = path.resolve(__dirname, '..', 'src');

export default {
    dist: path.resolve(__dirname, '..', 'dist'),
    common: path.resolve(srcPath, 'common'),
    components: path.resolve(srcPath, 'components'),
    layouts: path.resolve(srcPath, 'layouts'),
    pages: path.resolve(srcPath, 'pages'),
    styles: path.resolve(srcPath, 'styles')
};
