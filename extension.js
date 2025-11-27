const vscode = require('vscode');
const { createLogger } = require('./logger.cjs');

// Create logger once at module-level
const logger = createLogger();

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// 1️⃣ Create the logger
	createLogger();

	// tail -f ~/cli-runner.log
	logger.info("Congratulations, your extension is now active!");
	// logger.error("Something bad!");

	const disposable = vscode.commands.registerCommand('extension.cli-runner-by-blueray453', function () {
		// console.log('Log!!!');
		vscode.window.showInformationMessage('Hello World from cli-runner-by-blueray453!');
	});

	context.subscriptions.push(disposable);

	vscode.commands.executeCommand('extension.cli-runner-by-blueray453');
}

function deactivate() {
	logger.info("CLI Runner extension deactivated.");
}

module.exports = {
	activate,
	deactivate
}
