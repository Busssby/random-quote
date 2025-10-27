// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';


const programmingQuotes: string[]=[
	"My brain has too many tabs open. But you're doing great!",
	"YEEeE",
	"YOOOOOoooOOOO",
	"You've got this.",
	"Progress, not perfection.",
	"One step at a time.",
	"Maybe anouther time.",
	"Dont stop, get it get it",
	"Ask again.",
	"Never say never."

];


export function activate(context: vscode.ExtensionContext) {
    console.log('extension has been activated');

    let showQuoteCommand = vscode.commands.registerCommand('random-quote.showQuote', async () => {
        
        const randomIndex = Math.floor(Math.random() * programmingQuotes.length);
        const randomQuote = programmingQuotes[randomIndex];

		
    	const selection = await vscode.window.showInformationMessage(
        	randomQuote, 
        	{ modal: true },
        	"See more",
        	"Close"
    );

	if (selection === "See more") {
        vscode.commands.executeCommand('random-quote.showQuote');
    }
        
        
        vscode.window.showInformationMessage(randomQuote);
    });

    context.subscriptions.push(showQuoteCommand);
}

export function deactivate() {}
