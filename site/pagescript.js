document.addEventListener("DOMContentLoaded", 
	function (event){
		//initialise event list and create copy to be edited
		var event_list = ["SS", "LS", "MD", "H", "HT", "J", "HZJ", "PV", "HJ", "M"];
		var my_event_list = event_list.slice();
		var question_id = "a";
		
		// this object will be used to determine what events should be 
		// removed from the list of events when each option is chose
		var logic_flow = {
							//How much of training for running
							a_1: {
								q_follow: "c",
								event_elim: ["SS", "LS", "MD", "H", "HZJ", "M"]
								},

							a_2: {
								q_follow: "b",
								event_elim: ["MD", "HT", "J"]
							}, 

							a_3: {
								q_follow: "e",
								event_elim: ["HT", "J", "HZJ", "PV", "HJ", "M"]
							}, 
							
							//levels of running intensity
							b_1: {
								q_follow: "d",
								event_elim: ["SS", "LS", "MD", "H",  "M"]
							},
							
							b_2: {
								q_follow: "f",
								event_elim: ["MD"]
							},
							 
							b_3: {
								q_follow: "d",
								event_elim: ["HJ", "HZJ", "PV"]
							},
							
							//strength focus
							c_1: {
								q_follow: "g",
								event_elim: ["HJ", "HT"]
							},

							c_2: {
								q_follow: "g",
								event_elim: ["HT"]
							},

							c_3: {
								q_follow: "end",
								event_elim: ["J", "PV", "HJ"]
							}, 

							//technical focus
							d_1:{
								q_follow: "end",
								event_elim: ["H", "HT", "J", "PV", "HJ", "M"]
							},

							d_2: {
								q_follow: "end",
								event_elim: ["PV"]
							},

							d_3: {
								q_follow: "end",
								event_elim: ["SS", "LS", "MD", "HZJ"],
							},

							//shorter/longer running
							e_1:{
								q_follow: "d", 
								event_elim: ["MD", "LS"]
							},
							e_2:{
								q_follow: "d", 
								event_elim: ["SS", "MD"]
							},
							e_3:{
								q_follow: "d", 
								event_elim: ["SS", "LS", "H"]
							},

							//track vs field
							f_1:{
								q_follow: "d",
								event_elim:["HT", "J", "HJ", "PV", "HZJ", "M"]
							},
							f_2:{
								q_follow: "d",
								event_elim:["SS", "LS", "MD", "H", "HT", "J", "HJ", "PV"]
							},
							f_3:{
								q_follow: "d",
								event_elim:["SS", "LS", "MD", "H"]
							},

							//Would you enjoy short sprinting as part of training?
							g_1:{
								q_follow: "end",
								event_elim:["HJ", "PV"]
							},
							g_2:{
								q_follow: "h",
								event_elim:[""]
							},
							g_3:{
								q_follow: "h",
								event_elim:[""]
							},

							h_1:{
								q_follow: "end",
								event_elim:["PV, HJ"]
							},
							h_2:{
								q_follow: "end",
								event_elim:[]
							},
							h_3:{
								q_follow: "end",
								event_elim:["J"]
							}
		};

		var question_store = {
								a: "How much of your training would you prefer to involve running?",
								b: "How intense would you prefer that running to be?",
								e: "Do you prefer shorter, faster running or longer, more continuos running?",
								c: "Which of the following would best describe you?",
								d: "Do you enjoy learning complicated movement patterns?",
								f: "Do you know already if you want to do a track or field event?",
								g: "How much would you enjoy doing some sprinting as part of training?",
								h: "Would you say you have stronger arms, legs or both?",

								end: "end screen"
		};

		var options_store = { 	a: {_1_: "Not so keen - 25% or less",
									_2_: "Probably around half or more of training",
									_3_: "Large majority of my time" 
								},
								b: {_1_: "Not too tiring please just small bursts",
									_2_: "I'm ok to run hard but let me rest too",
									_3_: "Mad for the lactic I'll chun in a bin" 
								},
								e: {_1_: "Shorter and Faster",
									_2_: "A mix / something in between",
									_3_: "Longer and more continuos" 
								},
								d: {_1_: "Not so keen- please don't hurt my brain",
									_2_: "Enjoy some technical work in training",
									_3_: "Love it - up for a challenge!" 
								},
								c: {_1_: "Speedy and explosive",
									_2_: "Springy and strong",
									_3_: "Strong and explosive" 
								},
								f: {_1_: "Definitely just track for me",
									_2_: "Something in between...",
									_3_: "No events with a starting gun please!" 
								},
								g: {_1_: "Wouldn't be my favourite",
									_2_: "It would be ok!",
									_3_: "Think I would enjoy that yes!" 
								},
								h: {_1_: "My arms are stronger",
									_2_: "Both!",
									_3_: "Mostly legs" 
								}
		};

		//find out where we are in the logic flow so we know what events to eliminate
		function choose_elim(question_id, chosen_option){
			switch(question_id){
				case "a":
					switch(chosen_option){
						case "1":
						var logic_optn = logic_flow.a_1;
						break;

						case "2":
						var logic_optn = logic_flow.a_2;	
						break;		

						case "3":
						var logic_optn = logic_flow.a_3;					
					};
				break;

				case "b":
					switch(chosen_option){
						case "1":
						var logic_optn = logic_flow.b_1;
						break;

						case "2":
						var logic_optn = logic_flow.b_2;	
						break;		

						case "3":
						var logic_optn = logic_flow.b_3;					
					};	
				break;

				case "c":
					switch(chosen_option){
						case "1":
						var logic_optn = logic_flow.c_1;
						break;

						case "2":
						var logic_optn = logic_flow.c_2;	
						break;		

						case "3":
						var logic_optn = logic_flow.c_3;					
					};	
				break;

				case "d":
					switch(chosen_option){
						case "1":
						var logic_optn = logic_flow.d_1;
						break;

						case "2":
						var logic_optn = logic_flow.d_2;	
						break;		

						case "3":
						var logic_optn = logic_flow.d_3;					
					};	
				break;

				case "e":
					switch(chosen_option){
						case "1":
						var logic_optn = logic_flow.e_1;
						break;

						case "2":
						var logic_optn = logic_flow.e_2;	
						break;		

						case "3":
						var logic_optn = logic_flow.e_3;					
					};	
				break;

				case "f":
					switch(chosen_option){
						case "1":
						var logic_optn = logic_flow.f_1;
						break;

						case "2":
						var logic_optn = logic_flow.f_2;	
						break;		

						case "3":
						var logic_optn = logic_flow.f_3;					
					};	
				break;

				case "g":
					switch(chosen_option){
						case "1":
						var logic_optn = logic_flow.g_1;
						break;

						case "2":
						var logic_optn = logic_flow.g_2;	
						break;		

						case "3":
						var logic_optn = logic_flow.g_3;					
					};	
				break;

				case "h":
					switch(chosen_option){
						case "1":
						var logic_optn = logic_flow.h_1;
						break;

						case "2":
						var logic_optn = logic_flow.h_2;	
						break;		

						case "3":
						var logic_optn = logic_flow.h_3;					
					};	
			};

			return logic_optn;

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
			var next_question = logic_path.q_follow;
			switch(next_question){
				case "a":
				document.getElementById("question_text")
				  .textContent = question_store.a;
				document.getElementById("option1text")
				  .textContent = options_store.a._1_;
				document.getElementById("option2text")
				  .textContent = options_store.a._2_;
				document.getElementById("option3text")
				  .textContent = options_store.a._3_;
				question_id = next_question;
				break;

				case "b":
				document.getElementById("question_text")
				  .textContent = question_store.b;
				document.getElementById("option1text")
				  .textContent = options_store.b._1_;
				document.getElementById("option2text")
				  .textContent = options_store.b._2_;
				document.getElementById("option3text")
				  .textContent = options_store.b._3_;
				question_id = next_question;
				break;

				case "c":
				document.getElementById("question_text")
				  .textContent = question_store.c;
				document.getElementById("option1text")
				  .textContent = options_store.c._1_;
				document.getElementById("option2text")
				  .textContent = options_store.c._2_;
				document.getElementById("option3text")
				  .textContent = options_store.c._3_;
				question_id = next_question;
				break;

				case "d":
				document.getElementById("question_text")
				  .textContent = question_store.d;
				document.getElementById("option1text")
				  .textContent = options_store.d._1_;
				document.getElementById("option2text")
				  .textContent = options_store.d._2_;
				document.getElementById("option3text")
				  .textContent = options_store.d._3_;
				question_id = next_question;
				break;

				case "e":
				document.getElementById("question_text")
				  .textContent = question_store.e;
				document.getElementById("option1text")
				  .textContent = options_store.e._1_;
				document.getElementById("option2text")
				  .textContent = options_store.e._2_;
				document.getElementById("option3text")
				  .textContent = options_store.e._3_;
				question_id = next_question;
				break;

				case "f":
				document.getElementById("question_text")
				  .textContent = question_store.f;
				document.getElementById("option1text")
				  .textContent = options_store.f._1_;
				document.getElementById("option2text")
				  .textContent = options_store.f._2_;
				document.getElementById("option3text")
				  .textContent = options_store.f._3_;
				question_id = next_question;
				break;

				case "g":
				document.getElementById("question_text")
				  .textContent = question_store.g;
				document.getElementById("option1text")
				  .textContent = options_store.g._1_;
				document.getElementById("option2text")
				  .textContent = options_store.g._2_;
				document.getElementById("option3text")
				  .textContent = options_store.g._3_;
				question_id = next_question;
				break;

				case "h":
				document.getElementById("question_text")
				  .textContent = question_store.h;
				document.getElementById("option1text")
				  .textContent = options_store.h._1_;
				document.getElementById("option2text")
				  .textContent = options_store.h._2_;
				document.getElementById("option3text")
				  .textContent = options_store.h._3_;
				question_id = next_question;
				break;

				case "end":
				document.getElementById("question_text")
				  .textContent = question_store.end;
				question_id = next_question;

			};
		};

		function expand_events(remaining_events){
			for (i=0; i < remaining_events.length; i++ ){
				if (remaining_events[i] === "MD"){
					remaining_events[i] = " Middle Distance";
				} else if (remaining_events[i] === "LS"){
					remaining_events[i] = " Long Sprints (400)";
				}else if (remaining_events[i] === "SS"){
					remaining_events[i] = " Short Sprints";
				}else if (remaining_events[i] === "H"){
					remaining_events[i] = " Hurdles";
				}else if (remaining_events[i] === "HT"){
					remaining_events[i] = "Heavy Throws";
				}else if (remaining_events[i] === "J"){
					remaining_events[i] = "Javelin";
				}else if (remaining_events[i] === "HZJ"){
					remaining_events[i] = "Horizontal Jumps";
				}else if (remaining_events[i] === "PV"){
					remaining_events[i] = "Pole Vault";
				}else if (remaining_events[i] === "HJ"){
					remaining_events[i] = "High Jump";
				}else if (remaining_events[i] === "M"){
					remaining_events[i] = "Multievents";
				};
			};
			return remaining_events;
		};

		function make_results_string(remaining_events){
			var results_string = ""
			for (i=0; i<remaining_events.length; i++){
				if (i == 0){
					results_string = results_string + remaining_events[i];
				}else{
					results_string = results_string + ", " + remaining_events[i]
				}
				
			};
			return results_string;

		};

		function end_sequence(remaining_events){
			var question_box_text = document.getElementById("question_text");
			question_box_text.textContent = "The results are in!";

			document.getElementById("option1text").textContent = "";
			document.getElementById("option2text").textContent = "";
			document.getElementById("option3text").textContent = "";
			document.getElementById("qnumber1").textContent = "";
			document.getElementById("qnumber2").textContent = "";
			document.getElementById("qnumber3").textContent = "";

			document.getElementById("qnumber1").setAttribute( "style", "background-color: white; float:right");
			document.getElementById("qnumber2").setAttribute( "style", "background-color: white; float:right");
			document.getElementById("qnumber3").setAttribute( "style", "background-color: white; float:right");

			var wordy_list = expand_events(remaining_events)
			console.log("wordy list is" + wordy_list);
			var wordy_string = make_results_string(wordy_list);
			console.log("wordy string is" +wordy_string);
			var final_index = remaining_events.length - 1;

			if (remaining_events.length == 0){
				document.getElementById("title2")
				  .textContent = "Social Athlete";
				document.getElementById("extra_description")
				  .textContent = "Your choices didn't match an event exaclty, but everyone is welcome at CUAC! Find out more on the squad pages of our website:";
			} else{
				document.getElementById("title2")
			      .textContent = wordy_string;
			    if (remaining_events[(final_index)] == "Multievents"){

			    	document.getElementById("extra_description")
			    	  .textContent = "Have you considered multievents? Sounds like you'd get on well with lots of different training! Find out more on the squad pages of our website.";
			    }else{
			    	document.getElementById("extra_description").textContent = "Find out more about your event(s) on the squad pages of our website!";
			    }
			    
			};


		};

		function next_q (event){
			var chosen_option = this.textContent;
			// check wheather value is returning as I thought.
			// Identify which question we are on

			console.log("question id is " + question_id);
			console.log("chosen option is " +  chosen_option);

			//use the retrieved information to decide what to do next
			var logic_path = choose_elim(question_id, chosen_option);
			console.log( "eliminate events: " + logic_path.event_elim);
			
			//alter the list of events based on the logic path identified
			var remaining_events = elim(logic_path.event_elim);
			console.log("remaining events : " + remaining_events);
			console.log("next question: " +logic_path.q_follow);


			if( logic_path.q_follow === "end"){
				end_sequence(remaining_events);
			} else if (remaining_events.length < 2){
   				end_sequence(remaining_events);
			} else{
				change_questions(logic_path);
			}

		};
		

		document.querySelector("p1")
		  .addEventListener("click", next_q);

		document.querySelector("p2")
		  .addEventListener("click", next_q);

		document.querySelector("p3")
		  .addEventListener("click", next_q);
	});



