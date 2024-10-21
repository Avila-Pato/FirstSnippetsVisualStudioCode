
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {


	console.log('Congratulations, your extension "second-extesion" is now active!');


	let helloWorld = vscode.commands.registerCommand('second-extesion.helloWorld', () => {

		vscode.window.showInformationMessage('Hello World from Second-extesion!');
	});
	let goodbye = vscode.commands.registerCommand('second-extesion.goodbye', () => {

		vscode.window.showInformationMessage('goodbye Second-extesion!');
	});

	context.subscriptions.push(helloWorld);
	context.subscriptions.push(goodbye);
}


export function deactivate() {

}
