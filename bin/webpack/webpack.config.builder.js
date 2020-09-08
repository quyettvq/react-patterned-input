const path = require('path');

const rootDir = path.resolve(__dirname, '../../');
const srcDir = path.resolve(rootDir, 'src/');
const bundlesDir = path.resolve(rootDir, 'dist/');

function buildConfig(mode = 'development') {

    const useMinify = mode === 'production';

    const ext = useMinify ? 'min.js' : 'js';

    return {
        mode: mode,
        context: __dirname,
        entry: {
            'lib': path.resolve(srcDir, 'main/index.js')
        },
        output: {
            path: bundlesDir,
            filename: `[name].${ext}`,
            library: 'patternedInput',
            libraryTarget: 'umd'
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
        },
        externals: {
            react: 'react',
            reactDOM: 'react-dom'
        }
    };
}

module.exports = buildConfig;
