


const scriptsInEvents = {

		async EventSheet1_Event1_Act2(runtime, localVars)
		{
			const ws = new WebSocket(`wss://${location.host}`);
			console.log(`wss://${location.host}`);
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

