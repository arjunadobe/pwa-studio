const { createUpwardServer } = require("@magento/upward-js");

async function serve() {
    await createUpwardServer({
        port: 10000,
        bindLocal: true,
        logUrl: true,
        upwardPath: './upward-normal.yml'    
    });
}
serve();