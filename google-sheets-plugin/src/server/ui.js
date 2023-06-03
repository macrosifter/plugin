export const onOpen = () => {
  const menu = SpreadsheetApp.getUi()
    .createMenu('MacroSifter') // edit me!
    .addItem('Open', 'openAboutSidebar');
  // .addItem('Sheet Editor (Bootstrap)', 'openDialogBootstrap')
  // .addItem('Sheet Editor (MUI)', 'openDialogMUI')
  // .addItem('Sheet Editor (Tailwind CSS)', 'openDialogTailwindCSS')
  // .addItem('Show sidebarz', 'showSidebar')
  // .addItem('About me', 'openAboutSidebar');

  menu.addToUi();
};

// export const showSidebar = () => {
//   var html =
//     HtmlService.createHtmlOutputFromFile('Page').setTitle('My custom sidebar');
//   SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
//     .showSidebar(html);
// };

// export const openDialog = () => {
//   const html = HtmlService.createHtmlOutputFromFile('dialog-demo')
//     .setWidth(600)
//     .setHeight(600);
//   SpreadsheetApp.getUi().showModalDialog(html, 'Sheet Editor');
// };

// export const openDialogBootstrap = () => {
//   const html = HtmlService.createHtmlOutputFromFile('dialog-demo-bootstrap')
//     .setWidth(600)
//     .setHeight(600);
//   SpreadsheetApp.getUi().showModalDialog(html, 'Sheet Editor (Bootstrap)');
// };

// export const openDialogMUI = () => {
//   const html = HtmlService.createHtmlOutputFromFile('dialog-demo-mui')
//     .setWidth(600)
//     .setHeight(600);
//   SpreadsheetApp.getUi().showModalDialog(html, 'Sheet Editor (MUI)');
// };

// export const openDialogTailwindCSS = () => {
//   const html = HtmlService.createHtmlOutputFromFile('dialog-demo-tailwindcss')
//     .setWidth(600)
//     .setHeight(600);
//   SpreadsheetApp.getUi().showModalDialog(html, 'Sheet Editor (Tailwind CSS)');
// };

export const openAboutSidebar = () => {
  const html = HtmlService.createHtmlOutputFromFile('sidebar-about-page');
  SpreadsheetApp.getUi().showSidebar(html);
};
