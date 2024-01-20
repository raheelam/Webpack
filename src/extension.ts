// // extension.ts
// // import * as vscode from 'vscode';

// export function activate(context: vscode.ExtensionContext) {
//   let disposable = vscode.commands.registerCommand('extension.formatSelectedText', () => {
//     // Get the active text editor
//     const editor = vscode.window.activeTextEditor;

//     if (editor) {
//       // Check if the active document is a CSS or Sass file
//       if (isCssOrSassFile(editor.document)) {
//         // Get the selected text range
//         const selection = editor.selection;
//         const selectedText = editor.document.getText(selection);

//         // Format the selected text (you can replace this with your formatting logic)
//         const formattedText = selectedText.toUpperCase();

//         // Replace the selected text with the formatted text
//         editor.edit((editBuilder) => {
//           editBuilder.replace(selection, formattedText);
//         });
//       } else {
//         vscode.window.showInformationMessage('This command is only available for CSS or Sass files.');
//       }
//     }
//   });

//   context.subscriptions.push(disposable);
// }

// export function deactivate() {}

// function isCssOrSassFile(document: vscode.TextDocument): boolean {
//   return document.languageId === 'css' || document.languageId === 'scss' || document.languageId === 'sass';
// }
