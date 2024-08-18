const vscode = require('vscode');

function activate(context) {
    console.log('Activating Screenshot to Code extension');

    // Register the command that will show the webview
    const disposable = vscode.commands.registerCommand('screenshotToCode.showView', () => {
        ScreenshotToCodePanel.createOrShow(context.extensionUri);
    });

    context.subscriptions.push(disposable);
}

class ScreenshotToCodePanel {
    static currentPanel = undefined;
    static viewType = 'screenshotToCode';

    constructor(panel, extensionUri) {
        this._panel = panel;
        this._extensionUri = extensionUri;

        this._update();

        this._panel.onDidDispose(() => this.dispose(), null, this._disposables);
        this._panel.onDidChangeViewState(() => {
            if (this._panel.visible) {
                this._update();
            }
        });

        this._panel.webview.onDidReceiveMessage(message => {
            switch (message.command) {
                case 'alert':
                    vscode.window.showErrorMessage(message.text);
                    return;
            }
        });
    }

    static createOrShow(extensionUri) {
        const column = vscode.window.activeTextEditor ? vscode.window.activeTextEditor.viewColumn : undefined;

        if (ScreenshotToCodePanel.currentPanel) {
            ScreenshotToCodePanel.currentPanel._panel.reveal(column);
            return;
        }

        const panel = vscode.window.createWebviewPanel(
            ScreenshotToCodePanel.viewType,
            'Screenshot to Code',
            column || vscode.ViewColumn.One,
            { enableScripts: true }
        );

        ScreenshotToCodePanel.currentPanel = new ScreenshotToCodePanel(panel, extensionUri);
    }

    dispose() {
        ScreenshotToCodePanel.currentPanel = undefined;
        this._panel.dispose();
    }

    _update() {
        const webview = this._panel.webview;
        this._panel.title = "Screenshot to Code";
        this._panel.webview.html = this._getHtmlForWebview();
    }

    _getHtmlForWebview() {
        const scriptUri = this._panel.webview.asWebviewUri(
            vscode.Uri.joinPath(this._extensionUri, 'out', 'bundle.js')
        );

        return `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Screenshot to Code</title>
            </head>
            <body>
                <div id="root"></div>
                <script src="${scriptUri}"></script>
            </body>
            </html>`;
    }
}

exports.activate = activate;
