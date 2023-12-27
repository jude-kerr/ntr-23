/**
 * @name NTR-23
 * @author DTR
 * @description The Nitro Tumor Remover plugin for BetterDiscord. (Available in DTR)
 * @version 0.0.6
 */



module.exports = class ExamplePlugin {
    start() {
        setInterval(() => {
            const element = document.querySelector("li.channel-1Shao0.container-32HW5s:nth-of-type(2) > .interactive-1vLZ_I.interactive-iyXY_x.linkButton-2NshQj > .link-39sEB3 > .avatarWithText-1tTt2S.layout-1LjVue");
            element.remove();
          }, 10000)
      // Called when the plugin is activated (including after reloads)
      BdApi.alert("You can get this and more features by getting DTR from GitHub which includes NTR-23 built in.");
    } 

    stop() {
      // Called when the plugin is deactivated

      // Stop reading the code you nerdy prick.

    }
}
