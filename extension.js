
const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	console.log('Congratulations, your extension "cli-runner-by-blueray453" is now active!');

	const disposable = vscode.commands.registerCommand('extension.cli-runner-by-blueray453', function () {
		vscode.window.showInformationMessage('Hello World from cli-runner-by-blueray453!');
	});

	context.subscriptions.push(disposable);

	vscode.commands.executeCommand('extension.cli-runner-by-blueray453');
}

function deactivate() {
	console.log('CLI Runner extension deactivated.');
}

module.exports = {
	activate,
	deactivate
}
