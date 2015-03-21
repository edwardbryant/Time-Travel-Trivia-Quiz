$(document).ready(function() {
    cycleTestimonials(1,0);
    $('#start-btn').click(function() {   
        replaceHeading();
        $('#start').fadeOut(500, function() {
            $('#testimonials').fadeOut(100, function(){
                newGame();
                findQuestion();
                loadQuestion();
                $("#quiz").fadeIn(500);
            });
        });
    });
    $("#answer-btn").click(function() {
        var user_answer = $('input:radio[name=ans]:checked').val();
        if (!user_answer) {
            alert('Please make a selection!');
        } else {
            if (correct(user_answer)) {
                $('#quiz').fadeOut(500, function() {
                    score++;
                    updateScore();
                    $('.answer-exp').text(quiz_questions[num]["answer-exp"]);
                    $('#correct').fadeIn(500);    
                });
            } else {
                $('#quiz').fadeOut(500, function() {
                    $('.answer-exp').text(quiz_questions[num]["answer-exp"]);
                    $('#wrong').fadeIn(500);
                });
            }
        }
    });
    $(".cont-btn").click(function() {       
        $('#correct').fadeOut(500, function() {
            $('#wrong').fadeOut(500, function() {
                if (count >= count_limit) {
                    updateScore();
                    updateRank();
                    $('#final').fadeIn(500);
                } else {
                    findQuestion();
                    loadQuestion();
                    $('form input').prop('checked', false);
                    $('#quiz').fadeIn(500);
                }
            });
        });
    });
    $("#start-over").click(function() {       
        $("#final").fadeOut(500, function() {
            newGame();
            findQuestion();
            loadQuestion();
            $('form input').prop('checked', false);
            $("#quiz").fadeIn(500);    
        });
    });
});

var num = 0;
var count = 0;
var count_limit = 10;
var score = 0;
var prior_questions = [];

var replaceHeading = function() {
    var head = $("<span>The Time Travel Trivia Quiz</span>");
    $("h1").find("span").remove();
    $("h1").append(head);
};
var cycleTestimonials = function(index,prev) {
    $('#testimonials').children('p:eq(' + prev + ')').delay(1800).fadeOut(800, function(){
        $('#testimonials').children('p:eq(' + index + ')').fadeIn(800, function(){
            prev = index;
            if (index === 3){
                index = 0;
            } else {
                index++;
            }
            cycleTestimonials(index,prev);
        });
    });
};
var newGame = function() {
    num = 0;
    count = 0;
    score = 0;
    prior_questions = [];
};
var findQuestion = function() {
    pickQuestion();
    while (wasAsked()) {
        pickQuestion();
    }
};
var pickQuestion = function() {
    var limit = Object.keys(quiz_questions).length;
    num = Math.floor((Math.random() * limit) + 1)
};
var wasAsked = function() {
    var result = false;
    for (var i=0;i<=prior_questions.length;i++){
        if (num == prior_questions[i]) {
            result = true;
        }
    }
    return result;
};
var loadQuestion = function() {
    prior_questions.push(num);    
    $('#icon').html("<i class=\"fa fa-"+quiz_questions[num]["icon"]+"\"></i>");
    $('#text').html(quiz_questions[num]["question"]);
    $('#option-1').html(quiz_questions[num]["options"][1]);
    $('#option-2').html(quiz_questions[num]["options"][2]);
    $('#option-3').html(quiz_questions[num]["options"][3]);
    $('#option-4').html(quiz_questions[num]["options"][4]);
    $('#option-5').html(quiz_questions[num]["options"][5]);
    updateScore();
    count++;
    $('.progress').text(count+"/"+count_limit);
};
var correct = function(user_answer) {
    if (user_answer == quiz_questions[num]["answer"]) {
        return true;
    } else {
        return false;
    }
};
var updateScore = function() {
    $('.score').text(score);
};
var updateRank = function() {
    if (score == 9 || score == 10){
        $('.rank').text('Chronos');
        $('.rank-msg').text('Prefect score! You are truly the god of time. Now just try not to eat your children (that kind of thing is frowned upon these days.)');
    } else if (score == 7 || score == 8) {
        $('.rank').text('Time Lord');
        $('.rank-msg').text('You are a master of time and space. Time does your bidding, except for all that time you spent watching time travel movies - you can\'t get that back.');
    } else if (score == 5 || score == 6) {
        $('.rank').text('Time Traveling Sidekick');
        $('.rank-msg').text('You may not be the best, but you know enough to make a good sidekick. The world needs people to keep idiots from destroying the fabric of space-time by becoming there own ancestor.');
    } else if (score == 4 || score == 3) {
        $('.rank').text('Time Bandit');
        $('.rank-msg').text('An ok score - clearly not the worst, but far from the best.');
    } else if (score == 2 || score == 1) {
        $('.rank').text('Time Person');
        $('.rank-msg').text('Meh. A not-so-exciting title for a not-so-exciting score. If you had the power to travel in time, you would probably use it to watch tv shows you missed - so you could save money on a DVR.');
    } else if (score == 0) {
        $('.rank').text('Time Dunce');
        $('.rank-msg').text('The only "time traveling" you will be doing is starring at the clock while drool runs down your chin.');
    }
};
var quiz_questions = {
    1: {
        "icon": "book",
        "question": "In the movie <strong>Army of Darkness (1992)</strong>, the main character travels through time with several objects, which of the below items is NOT one of these items?",
        "options": {
            1: "A twelve-gauge double-barreled Remington",
            2: "A chemistry text book",
            3: "An S-Mart price gun",
            4: "An issue of Fangoria magazine",
            5: "An Oldsmobile Delta 88"
        },
        "answer": 3,
        "answer-exp": "In the movie, the main character Ash Williams travels through time in his Oldsmobile, uses his shotgun, and makes gunpowder using a chemistry textbook in the trunk of his car (when he gets the textbook, an issue of Fangoria can also be seen in his trunk). Although the main character works at a store called S-Mart, he doesn't have a price gun with him when he travels through time."
    },
    2: {
        "icon": "clock-o",
        "question": "Which of the below movies includes time travel as an element of the story?",
        "options": {
            1: "Once Upon a Time in America (1984)",
            2: "Nick of Time (1995)",
            3: "Same Time, Next Year (1978)",
            4: "Out of Time (1988)",
            5: "Wheel of Time (2003)"
        },
        "answer": 4,
        "answer-exp": "Out if Time (1988), which starred Bill Maher was a failed television pilot that was made into a television movie. The plot centered around a cop from 2088 who travels back to 1988 to pursue a criminal who escaped in a time machine, and enlists the aid of his great-grandfather (Maher)."
    },
    3: {
        "icon": "clock-o",
        "question": "Which of the following time travel movies is animated?",
        "options": {
            1: "Galaxis (1995)",
            2: "The Girl Who Leapt Through Time (2006)",
            3: "A Connecticut Yankee in King Arthur's Court (1949)",
            4: "New Adventures of a Yankee in King Arthur's Court (1988)",
            5: "G.I. Samurai (1979)"
        },
        "answer": 2,
        "answer-exp": "The Girl Who Leapt Through Time (2006) was an animated Japanese movie about a teenage girl, Makoto, who inadvertently gains the ability to leap through time. Makoto begins using the time-leaps to fix everyday problems of a teenager before realizing the source of her ability."
    },
    4: {
        "icon": "bolt",
        "question": "In the movie <strong>Back to the Future (1985)</strong>, how many gigawatts of electricity does it take to travel in time?",
        "options": {
            1: "9.21",
            2: "1.81",
            3: "10.31",
            4: "1.21",
            5: "2.21"
        },
        "answer": 4,
        "answer-exp": "In Back to the Future (1985), Dr. Brown's DeLorean needed to be traveling at 88 mph, and required 1.21 gigawatts of power. In vehicle originally had its power supplied by a plutonium-powered nuclear reactor."
    },
    5: {
        "icon": "male",
        "question": "Which of the following movies involves time travel without using a man-made device?",
        "options": {
            1: "About Time (2013)",
            2: "The Time Machine (1960)",
            3: "Source Code (2011)",
            4: "The Terminator (1984)",
            5: "Looper (2012)"
        },
        "answer": 1,
        "answer-exp": "In About Time (2013), the main character is informed by his father that the men in his family have the ability to travel through time at will. After reaching a certain age, they simply have to find a dark place and concentrate on a time (within their own life) to which they wish to travel."
    },
    6: {
        "icon": "ship",
        "question": "Which time travel movie involves a scene on the Titanic?",
        "options": {
            1: "Time After Time (1979)",
            2: "Time Bandits (1981)",
            3: "Time Travelers (1976)",
            4: "Star Trek IV: The Voyage Home (1986)",
            5: "Slipstream (2005)"
        },
        "answer": 2,
        "answer-exp": "In Time Bandits (1981), the band of time travelers briefly land aboard the RMS Titanic. While lounging on the ship one of them call out, \"Waiter! More Champagne and Plenty Of Ice.\" Shortly after the Titanic is hit by an iceberg."        
    },
    7: {
        "icon": "clock-o",
        "question": "The Canadian movie <strong>A Switch in Time (1989)</strong> was re-titled to capitalize on the success of <strong>Bill &amp; Ted's Excellent Adventure (1989)</strong>. What was the movie's new title?",
        "options": {
            1: "Norman's Awesome Experience",
            2: "Jim &amp; Billy's Great Journey",
            3: "Bob's Outstanding Journey in Time",
            4: "Nathan's Big Adventure, Ya Hosers!",
            5: "The Newf's Exceptional Escapade"
        },
        "answer": 1,
        "answer-exp": "Norman's Awesome Experience (1989) involves an American scientist, a fashion model, and her photographer who are accidentally transported back in time to the 1st Century A.D. in an area of present day Switzerland controlled by the Roman Empire."
    },
    8: {
        "icon": "beer",
        "question": "In the movie <strong>Frequently Asked Questions About Time Travel (2009)</strong>, a giant version of what appears outside the pub in the future?",
        "options": {
            1: "gerbel",
            2: "ferret",
            3: "ant",
            4: "caterpiller",
            5: "cockroach"
        },
        "answer": 3,
        "answer-exp": "In Frequently Asked Questions About Time Travel (2009), the main characters travel to a unknown future in which the pub they started in stands in ruins and the world outside is empty and desolate. They breifly hear a noise that makes them afraid which is revealed to be a giant ant."
    },
    9: {
        "icon": "car",
        "question": "In the movie <strong>Back to the Future (1985)</strong>, what was did the DeLorean's license plate read?",
        "options": {
            1: "HGWELLS",
            2: "MCFLY1",
            3: "DRBROWN",
            4: "OUTATIME",
            5: "88MPH"
        },
        "answer": 4,
        "answer-exp": "In Back to the Future (1985) the license plate of the time travelling DeLorean is shown to be \"OUTATIME.\" Images of the license plate with burning tire tracks was also used for many of the movie's posters."
    },
    10: {
        "icon": "calendar",
        "question": "In Stephen King's 2011 novel <strong>11/22/63</strong>, what event does the main character go back in time to try to prevent?",
        "options": {
            1: "U.S. involvement in Vietnam",
            2: "The release of the Beatles first album",
            3: "The assasination of J.F.K.",
            4: "The Cuban Missle Crisis",
            5: "The Apollo moon landing"
        },
        "answer": 3,
        "answer-exp": "The novel's main character, Jake Epping, discovers a diner that can take him back in time, but only to the same day in 1958. He ultimately decides to live in the past and wait for the events leadings up to President Kennedy's assasination on November 22, 1963 in an effort to prevent the event."
    },
    11: {
        "icon": "music",
        "question": "In the television show <strong>Life on Mars (UK 2006 &ndash; 2007)</strong>, what modern song does the main character hear that makes him think his 1970s reality might all be in his head?",
        "options": {
            1: "Boulevard Of Broken Dreams by Green Day",
            2: "Hey Ya! by OutKast",
            3: "Crazy by Gnarls Barkley",
            4: "Toxic by Brittney Spears",
            5: "Clocks by Coldplay"
        },
        "answer": 4,
        "answer-exp": "[some explantion stuff]"
    },
    12: {
        "icon": "fighter-jet",
        "question": "In the movie <strong>The Final Countdown (1980)</strong>, what travels through time?",
        "options": {
            1: "a steam-powered train",
            2: "an aircraft carrier",
            3: "a passenger airplane",
            4: "a battleship",
            5: "a zeppelin"
        },
        "answer": 2,
        "answer-exp": "[some explantion stuff]"
    },
    13: {
        "icon": "history",
        "question": "In Michael Crichton's 1999 book <strong>Timeline</strong>, the characters travel to which period in time?",
        "options": {
            1: "13th Century France",
            2: "15th Century Spain",
            3: "14th Century Scotland",
            4: "13th Century Germany",
            5: "14th Century France"
        },
        "answer": 5,
        "answer-exp": "[some explantion stuff]"
    },
    14: {
        "icon": "history",
        "question": "Which television show included an episode in which a character goes back in time and saves Dr. Heimlich from choking - giving the doctor the idea for the Heimlich maneuver?",
        "options": {
            1: "Sliders (1995 &ndash; 2000)",
            2: "Journeyman (2007)",
            3: "Timecop (1997)",
            4: "Quantum Leap (1989 &ndash; 1993)",
            5: "The Time Tunnel (1966 &ndash; 1967)"
        },
        "answer": 4,
        "answer-exp": "[some explantion stuff]"
    },
    15: {
        "icon": "child",
        "question": "Which animated television show, featured time travel adventures, an anthropomorphic dog, and a girl from the future named Cupcake?",
        "options": {
            1: "The Fonz and the Happy Days Gang (1980 &ndash; 1982)",
            2: "Flint the Time Detective (1998 &ndash; 1999)",
            3: "Bill &amp; Ted's Excellant Adventure (1990)",
            4: "Gadget Boy &amp; Heather (1995)",
            5: "Samurai Jack (2001 &ndash; 2004)"
        },
        "answer": 1,
        "answer-exp": "[some explantion stuff]"
    },
    16: {
        "icon": "train",
        "question": "<strong>Time Express (1979)</strong> was a television show about a train that took people on trips through time. Who starred in the show?",
        "options": {
            1: "William Shatner",
            2: "Alan Alda",
            3: "Vincent Price",
            4: "Henry Winkler",
            5: "Danny DeVito"
        },
        "answer": 3,
        "answer-exp": "[some explantion stuff]"
    }
};






