async function preInit(inputObj) {
  console.log(`  Serverless Devs Application
    Cloud services required:
    - FC (Function Compute): https://fc.console.aliyun.com/

    Tips:
    - CAP: https://help.aliyun.com/zh/cap/
    - Serverless Devs: https://docs.serverless-devs.com/
  `);
}

async function postInit(inputObj) {
  console.log(`    * Please check whether the actions command in Yaml file is available
    * Carefully reading the notes in s.yaml is helpful for the use of the tool
  `);
}

module.exports = {
  postInit,
  preInit
};