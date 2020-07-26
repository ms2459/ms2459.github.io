document.addEventListener("DOMContentLoaded", 
	function (event){
		//initialise event list and create copy to be edited
		var event_list = ["SS", "LS", "MD", "H", "HT", "J", "HZJ", "PV", "HJ", "M"];
		var my_event_list = event_list.slice();
		
		// this object will be used to determine what events should be 
		// removed from the list of events when each option is chose
		var logic_flow = {
							//How much of training for running
							a_1: ["c", "SS", "LS", "MD", "H", "HZJ", "M"], 
							a_2: ["b", "MD", "HT", "J"],
							a_3: ["b", "HT", "J", "HZJ", "PV", "HJ"],
							
							//levels of running intensity
							b_1: ["c","SS", "LS", "MD", "H",  "M"], 
							b_2: ["c","MD"],
							b_3: ["c","H", "HZJ", "PV"],

							//strength focus
							c_1: ["HT"],
							c_2: ["HT"],
							c_3: ["MD"], 

							//technical focus
							d_1: ["H", "HT", "J", "HZJ", "PV", "HJ", "M"],
							d_2: ["PV"],
							d_3: ["SS", "LS", "MD"]
		};

		var question_store = {
								a: "running question",
								b: "intensity question",
								c: "strength question",
								d: "technical question",
								end: "end screen"
		};

		//find out where we are in the logic flow so we know what events to eliminate
		function choose_elim(question_id, chosen_option){
			if (question_id === "a"){
				if (chosen_option === "1"){
					var logic_array = logic_flow.a_1;					
				};

				if (chosen_option === "2"){
					var logic_array = logic_flow.a_2;					
				};

				if (chosen_option === "3"){
					var logic_array = logic_flow.a_3;					
				};
			};

			if (question_id === "b"){
				if (chosen_option === "1"){
					var logic_array = logic_flow.b_1;					
				};

				if (chosen_option === "2"){
					var logic_array = logic_flow.b_2;					
				};
						
				if (chosen_option === "3"){
					var logic_array = logic_flow.b_3;					
				};
			};

			if (question_id === "c"){
				if (chosen_option === "1"){
					var logic_array = logic_flow.c_1;					
				};

				if (chosen_option === "2"){
					var logic_array = logic_flow.c_2;					
				};
						
				if (chosen_option === "3"){
					var logic_array = logic_flow.c_3;					
				};
			};

			if (question_id === "d"){
				if (chosen_option === "1"){
					var logic_array = logic_flow.d_1;					
				};

				if (chosen_option === "2"){
					var logic_array = logic_flow.d_2;					
				};
						
				if (chosen_option === "3"){
					var logic_array = logic_flow.d_3;					
				};
			};

			return logic_array;

		};

		function elim(logic_path){
			for (i = 0; i < logic_path.length; i++){
				for (j = 0; j < my_event_list.length; j++){
					if (logic_path[i] === my_event_list[j]){
						my_event_list.splice(j, 1);
					};
				};
			};
			return my_event_list;
		};

		function change_questions(logic_path){
			var next_question = logic_path[0];
			if (next_question === "a"){
				document.getElementById("question_text")
				  .textContent = question_store.a;
				document.getElementById("question_no")
				  .textContent = next_question;
			};	
			if (next_question === "b"){
				document.getElementById("question_text")
				  .textContent = question_store.b;
				document.getElementById("question_no")
				  .textContent = next_question;
			};		
			if (next_question === "c"){
				document.getElementById("question_text")
				  .textContent = question_store.c;
				document.getElementById("question_no")
				  .textContent = next_question;
			};
			if (next_question === "d"){
				document.getElementById("question_text")
				  .textContent = question_store.d;
				document.getElementById("question_no")
				  .textContent = next_question;
			};
			if (next_question === "end"){
				document.getElementById("question_text")
				  .textContent = question_store.end;
				document.getElementById("question_no")
				  .textContent = next_question;
			};
			
		};

		function next_q (event){
			var chosen_option = this.textContent;
			// check wheather value is returning as I thought.
			// Identify which question we are on
			var question_id = 
			  document.getElementById("question_no").textContent; 

			console.log("question id is " + question_id);
			console.log("chosen option is " +  chosen_option);

			//use the retrieved information to decide what to do next
			var logic_path = choose_elim(question_id, chosen_option);
			console.log( "logic path is " + logic_path);
			
			//alter the list of events based on the logic path identified
			var remaining_events = elim(logic_path);
			console.log(remaining_events);
			console.log(document.getElementById("question_text"));
			change_questions(logic_path);

		};
		

		document.querySelector("p1")
		  .addEventListener("click", next_q);

		document.querySelector("p2")
		  .addEventListener("click", next_q);

		document.querySelector("p3")
		  .addEventListener("click", next_q);
	});



