describe('sample test', () => {
  it('sample test', async () => {
    const appOption = await $('~App');
    await appOption.click();
    const actionBar = await $('~Action Bar');
    await expect(actionBar).toBeDisplayed();
    await browser.pause(5000);
  });

});
it('scrolling test', async () => {
  const view = await $('~Views');
  await view.click();
  //scroll to the bottom of the list
  await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(2,5)');
  await $('~TextSwitcher').click();
  await driver.back();

  //await browser.pause(5000);
});

it.only('switchContext test', async () => {
  await $("//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip']").click();
  await $("//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/icon_nav']").click(); 
  await $("//*[@text='Like us on Facebook']").click();
  const contexts = await driver.getContexts();
  console.log('Available contexts:', contexts);
  await driver.switchContext(contexts[1]); // Switch to webview context
  const url = await browser.getUrl();
  console.log('Current URL:', url);
  await driver.switchContext(contexts[0]); // Switch back to native context
  await driver.back();
  await browser.pause(5000);
  
});

