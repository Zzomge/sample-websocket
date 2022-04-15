


const scriptsInEvents = {

		async Eventgame_Event8_Act1(runtime, localVars)
		{
			console.log(WebSocket.MessageText);
			document.getElementById('textareabox').scrollTop = document.getElementById('textareabox').scrollHeight;
		},

		async Eventgame_Event8_Act4(runtime, localVars)
		{
			let text = runtime.globalVars.getwebsocket;
			const myArray = text.split("|");
			runtime.globalVars.typedata= myArray[0]; 
			
			runtime.globalVars.chatdata= myArray[2]+":"+myArray[3]; 
		},

		async Eventgame_Event9_Act1(runtime, localVars)
		{
			document.getElementById('textareabox').style.backgroundColor="black";
			
			document.getElementById('textareabox').style.color="#fff";
			
			
			document.getElementById("textareabox").style.opacity = "0.5";
		},

		async Eventgame_Event10_Act2(runtime, localVars)
		{
			console.log(WebSocket.MessageText);
			document.getElementById('textareabox').scrollTop = document.getElementById('textareabox').scrollHeight;
		},

		async Eventgame_Event11_Act2(runtime, localVars)
		{
			console.log(WebSocket.MessageText);
			document.getElementById('textareabox').scrollTop = document.getElementById('textareabox').scrollHeight;
		},

		async Eventgame_Event12_Act3(runtime, localVars)
		{
			console.log(WebSocket.MessageText);
			document.getElementById('textareabox').scrollTop = document.getElementById('textareabox').scrollHeight;
		},

		async Eventgame_Event13_Act1(runtime, localVars)
		{
			console.log(WebSocket.MessageText);
			document.getElementById('textareabox').scrollTop = document.getElementById('textareabox').scrollHeight;
		},

		async Eventjoinwaiting_Event2_Act2(runtime, localVars)
		{
			let text = runtime.globalVars.joinwebsocket;
			const myArray = text.split("|");
			runtime.globalVars.jointype= myArray[0]; 
			
			runtime.globalVars.joinwsroomid= parseInt(myArray[1]); 
			
			runtime.globalVars.joinclientuserid= myArray[2]; 
		},

		async Eventownerwaiting_Event4_Act3(runtime, localVars)
		{
			let text = runtime.globalVars.getrequestjoin;
			const myArray = text.split("|");
			runtime.globalVars.typejoin= myArray[0]; 
			
			runtime.globalVars.ownerjoinroomid= myArray[1]; 
			
			
			runtime.globalVars.useridjoin= myArray[2]; 
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

