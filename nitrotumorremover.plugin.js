/**
 * @name NTR-23
 * @author Miles#5157
 * @description The Nitro Tumor Remover plugin for BetterDiscord. (Thanks to PickleNik for helping)
 * @version 0.0.1
 */



module.exports = class ExamplePlugin {
    start() {
        const element = document.querySelector("li.channel-1Shao0.container-32HW5s:nth-of-type(2) > .interactive-1vLZ_I.interactive-iyXY_x.linkButton-2NshQj > .link-39sEB3 > .avatarWithText-1tTt2S.layout-1LjVue");
element.remove();
    } 

    stop() {
      // Called when the plugin is deactivated
    }
}
 
