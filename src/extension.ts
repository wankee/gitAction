// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
// import * as process from 'child_process';
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "gitaction" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.helloWorld', () => {
		// The code you place here will be executed every time your command is executed

		// process.execFile(`a\\electron-quick-start.exe`);
		// process.execFile(`C:\\Users\\wang2\\AppData\\Local\\GitHubDesktop\\app-1.6.2\\GitHubDesktop.exe`);
		// process.execFile(`D:\\GitHub\\gitAction\\a\\electron-quick-start.exe`);
		// process.execFile(`D:\\hfs.exe`);
		// var child = process.spawn('D:\\GitHub\\gitAction\\a\\electron-quick-start.exe', {});
		// let user = new SpawnOptions();
		// var child = process.spawn('C:\\Users\\wang2\\AppData\\Local\\GitHubDesktop\\app-1.6.2\\GitHubDesktop.exe', user);
		var cmd = 'D:\\GitHub\\gitAction\\a\\electron-quick-start.exe';
		// var cmd='D:\\hfs.exe';
		// var cmd = 'C:\\Users\\wang2\\AppData\\Local\\GitHubDesktop\\app-1.6.2\\GitHubDesktop.exe';
		// var cmd = 'D:\\[iPlaySoft.com]SpaceSniffer1.1.20汉化版\\SpaceSniffer.exe';
		// var cmd='node';
		// var cmd='D:\\GitHub\\gitAction\\te.bat';
		// var parm=['--version']
		// var parm=['--version']
		// var parm = ['.\test.js'];
		var child_process = require('child_process');
		// child_process.exec(cmd, (error: Error, stdout: string, stderr: string) => {
		// 	if (error) {
		// 		throw error;
		// 	}
		// 	console.log(stdout);
		// });
		// child_process.spawn(cmd,{
			
		// });
		// detached: true,
		// 	stdio: 'ignore'
		// child_process.unref();
		// child_process.execFile(cmd, (error:Error, stdout:string, stderr:string)=> {
		// 	if (error) {
		// 		throw error;
		// 	}
		// 	console.log(stdout);
		// });

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World!');

		const panel = vscode.window.createWebviewPanel(
			'catCoding', // Identifies the type of the webview. Used internally
			'Cat Coding', // Title of the panel displayed to the user
			vscode.ViewColumn.One, // Editor column to show the new webview panel in.
			{} // Webview options. More on these later.
		);
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() { }
