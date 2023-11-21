- https://github.com/bakeruk/modern-typescript-monorepo-example

1. Create pnpm-workspace.yaml. You can reference packages using pnpm workspace syntax: `"@app/utils": "workspace:*"`.
1. Put all devDependencies to root `package.json`.
1. Create tsconfigs.
1. each package should have scripts: clean, build, dev, watch, typecheck, start. For libs: clean, build, typecheck.
1. nodemon

```sh
pnpm install
./test.sh
```
