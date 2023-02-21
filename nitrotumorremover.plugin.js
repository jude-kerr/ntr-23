/**
 * @name NTR-23
 * @author jude1#5157 and PickleNik#0864
 * @description The Nitro Tumor Remover plugin for BetterDiscord.
 * @version 0.0.5
 */



module.exports = class ExamplePlugin {
    start() {
        setInterval(() => {
            const element = document.querySelector("li.channel-1Shao0.container-32HW5s:nth-of-type(2) > .interactive-1vLZ_I.interactive-iyXY_x.linkButton-2NshQj > .link-39sEB3 > .avatarWithText-1tTt2S.layout-1LjVue");
            element.remove();
          }, 10000)
      // Called when the plugin is activated (including after reloads)
      BdApi.alert("If you need help with the extension please vist: (URL NOT AVAIlABLE)");
    } 

    stop() {
      // Called when the plugin is deactivated
    }
}
