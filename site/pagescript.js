document.addEventListener("DOMContentLoaded", 
	function (event){
		//initialise event list and create copy to be edited
		var event_list = ["SS", "LS", "MD", "H", "HT", "J", "HZJ", "PV", "HJ", "M"];
		var my_event_list = event_list.slice();
		
		// this object will be used to determine what events should be 
		// removed from the list of events when each option is chose
		var logic_flow = {
							//How much of training for running
							a_1: ["SS", "LS", "MD", "H", "HZJ", "M"], 
							a_2: ["MD", "HT", "J"],
							a_3: ["HT", "J", "HZJ", "PV", "HJ"],
							
							//levels of running intensity
							b_1: ["SS", "LS", "MD", "H",  "M"], 
							b_2: ["MD"],
							b_3: ["H", "HZJ", "PV"],

							//strength focus
							c_1: ["HT"],
							c_2: ["HT"],
							c_3: ["MD"], 

							//technical focus
							d_1: ["H", "HT", "J", "HZJ", "PV", "HJ", "M"],
							d_2: ["PV"],
							d_3: ["SS", "LS", "MD"]
		};

		//find out where we are in the logic flow so we know what events to eliminate
		function choose_elim(question_id, chosen_option){
			if (question_id === "a"){
				if chosen_option === "optn_1"{
					var logic_array = logic_flow.a_1;					
				};

				if chosen_option === "optn_2"{
					var logic_array = logic_flow.a_2;					
				};

				if chosen_option === "optn_3"{
					var logic_array = logic_flow.a_3;					
				};
			};

			if (question_id === "b"){
				if chosen_option === "optn_1"{
					var logic_array = logic_flow.a_1;					
				};

				if chosen_option === "optn_2"{
					var logic_array = logic_flow.a_2;					
				};
						
				if chosen_option === "optn_3"{
					var logic_array = logic_flow.a_3;					
				};
			};

			if (question_id === "c"){
				if chosen_option === "optn_1"{
					var logic_array = logic_flow.a_1;					
				};

				if chosen_option === "optn_2"{
					var logic_array = logic_flow.a_2;					
				};
						
				if chosen_option === "optn_3"{
					var logic_array = logic_flow.a_3;					
				};
			};

			if (question_id === "d"){
				if chosen_option === "optn_1"{
					var logic_array = logic_flow.a_1;					
				};

				if chosen_option === "optn_2"{
					var logic_array = logic_flow.a_2;					
				};
						
				if chosen_option === "optn_3"{
					var logic_array = logic_flow.a_3;					
				};
			};

			return logic_array;
		};

		function elim(selected_array){
			for (i = 0; i < selected_array.length; i++){
				for (j = 0; j < my_event_list.length; j++){
					if (selected__array[i] === my_event_list[j]){
						my_event_list.splice(j, 1);
					};
				};
			};
			return my_event_list;
		};

		//function change_questions(selected_array){

		//};

		function next_q (event){
			var chosen_option = this.value;
			// check wheather value is returning as I thought.
			console.log(chosen_option);
			// Identify which question we are on
			var question_id = 
			  document.getElementById("question_no").textContent; 

			//use the retrieved information to decide what to do next
			var logic_path = choose_elim(question_id, chosen_option);
			
			//alter the list of events based on the logic path identified
			var remaining_events = elim(logic_path);

			// change_questions(logic_path);

		};
		

		document.querySelector("optn_1")
		  .addEventListener("click", next_q);

		document.querySelector("optn_2")
		  .addEventListener("click", next_q);

		document.querySelector("optn_3")
		  .addEventListener("click", next_q);
	};



