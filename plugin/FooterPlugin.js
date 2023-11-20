const { Compilation } = require('webpack');
const { ConcatSource } = require('webpack-sources');

class FooterPlugin {
    constructor(option) {
        console.log("FooterPlugin", option);
        this.option = option;
    }
    apply(compiler) {
        console.log("FooterPlugin", typeof compiler);
        compiler.hooks.compilation.tap('FooterPlugin', compilation => {
            compilation.hooks.processAssets.tap("FooterPlugin", () => {
                const chunks = compilation.chunks;
                for (const chunk of compilation.chunks) {
                    for (const file of chunk.files) {
                        const comment = `/* ${this.option.banner} */`;
                        compilation.updateAsset(file, old => new ConcatSource(old, '\n', comment));

                    }
                }

            });
        })
    }

};
module.exports = FooterPlugin;