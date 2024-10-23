module.exports = {
    apps: [
        {
            name: "allview",
            script: "npm",
            args: "run dev",
            env: {
                NODE_ENV: "development",
                ENV_VAR1: "environment_variable",
            },
        },
    ],
};
