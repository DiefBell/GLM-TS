/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
    entryPointStrategy: "expand",
    entryPoints: [ "./src/index.ts" ],
    out: "./docs/www",
    name: "GLM TS",
    tsconfig: "./tsconfig.cjs.json",
    includeVersion: true,
    logLevel: "Error",
    gitRevision: "main"
};
