describe('sample test', () => {
  it('sample test', async () => {
    const appOption = await $('~App');
    await appOption.click();
    const actionBar = await $('~Action Bar');
    await expect(actionBar).toBeDisplayed();
    await browser.pause(5000);
  });

});