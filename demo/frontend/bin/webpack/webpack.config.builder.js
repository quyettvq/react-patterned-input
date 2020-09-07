const path = require('path');

const rootDir = path.resolve(__dirname, '../../../');
const srcDir = path.resolve(rootDir, 'frontend/src/');
const bundlesDir = path.resolve(rootDir, 'public/');

function buildConfig(mode = 'development') {

    const useMinify = mode === 'production';

    const ext = useMinify ? 'min.js' : 'js';

    return {
        target: 'web',
        mode: mode,
        context: __dirname,
        entry: {
            'demo': path.resolve(srcDir, 'index.js')
        },
        output: {
            path: bundlesDir,
            filename: `[name].${ext}`
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: [
                                    "@babel/preset-env",
                                    "@babel/preset-react"
                                ],
                                plugins: [
                                    "transform-class-properties"
                                ]
                            }
                        }
                    ]
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.less$/,
                    use: ['style-loader', 'css-loader?{"url":false}', 'less-loader'],
                },
            ],
        },
        optimization: {
            minimize: useMinify,
        }
    };
}

module.exports = buildConfig;
