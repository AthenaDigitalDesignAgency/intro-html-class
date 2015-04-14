var sceneData = [
    { question: "The setting is that you're in your apartment in Brooklyn. You hear someone scream for help outside. You run out and see two bloody people chasing a guy with glasses. The guy is running straight toward you. What do you do", 
    image : 'http://spousebuzz.com/wp-content/uploads/2013/10/chasing-zombie-570x200.jpg', width: 200, height: 100, food : 0,
    choices: [
        { answer: "Let the guy come inside and try to quickly lock the door", next: 2 },
        { answer: "Close and bolt the door", next: 3}]
    }, //1
    { question: "The guy's name is Peter. He's a scientist at the CDC and he keeps cursing. You ask him why those people were chasing you and he says that they're not people. They're zombies and they're going to break your door down.", 
    image : 'http://d5eo2qstq4v8a.cloudfront.net/wp-content/uploads/2015/03/doorknocking.jpg',
    food : 1,
    choices: [
        { answer: "Get out the back door", next: 4 },
        { answer: "Reinforce the door", next: 11}
        ]
    }, //2
    { question: "The person dies at your door, but the zombies hear you, and are trying to break your door down", image : 'http://ak2.picdn.net/shutterstock/videos/1100494/preview/stock-footage-man-shuts-door-bolts-three-different-locks-p.jpg', width: 200, height: 100, food : 0, choices: [
        { answer: "open the door and tell them to go away", next: 11 },
        { answer: "get out the back door", next: 5}
        ]
    }, //3
    { question: "fourth question. What do you do", image : 'http://spousebuzz.com/wp-content/uploads/2013/10/chasing-zombie-570x200.jpg', food : 1, choices: [
        { answer: "4 part 1", next: 11 },
        { answer: "4 part 2", next: 6},
        { answer: "4 part 3", next: 11},
        { answer: "4 part 4", next: 11}
        ]
    }, //4
    { question: "fifth question. What do you do", image : 'http://spousebuzz.com/wp-content/uploads/2013/10/chasing-zombie-570x200.jpg', width: 200, height: 100, food : 0, choices: [
        { answer: "5 part 1", next: 11 },
        { answer: "5 part 2", next: 7},
        { answer: "5 part 3", next: 11},
        { answer: "5 part 4", next: 7}
        ]
    }, //5
    { question: "sixth question. What do you do", image : 'http://spousebuzz.com/wp-content/uploads/2013/10/chasing-zombie-570x200.jpg', food : 2, choices: [
        { answer: "6 part 1", next: 11 },
        { answer: "6 part 2", next: 8},
        { answer: "6 part 3", next: 11},
        { answer: "6 part 4", next: 8}
        ]
    }, //6
    { question: "seventh question. What do you do", image : 'http://spousebuzz.com/wp-content/uploads/2013/10/chasing-zombie-570x200.jpg', width: 200, height: 100, food : 0, choices: [
        { answer: "7 part 1", next: 11 },
        { answer: "7 part 2", next: 9},
        { answer: "7 part 3", next: 11},
        { answer: "7 part 4", next: 11}
        ]
    }, //7
    { question: "eighth question. What do you do", image : 'http://spousebuzz.com/wp-content/uploads/2013/10/chasing-zombie-570x200.jpg', width: 200, height: 100, food : 0, choices: [
        { answer: "8 part 1", next: 11 },
        { answer: "8 part 2", next: 11},
        { answer: "8 part 3", next: 11},
        { answer: "8 part 4", next: 10}
        ]
    }, //8
    { question: "ninth question. What do you do", image : 'http://spousebuzz.com/wp-content/uploads/2013/10/chasing-zombie-570x200.jpg', food : 1, choices: [
        { answer: "9 part 1", next: 10 },
        { answer: "9 part 2", next: 11},
        { answer: "9 part 3", next: 11},
        { answer: "9 part 4", next: 11}
        ]
    }, //9
    { question: "you win", image : 'http://images4.fanpop.com/image/photos/22200000/Paradise-love-angels-22242012-1440-900.jpg', width: 200, height: 100, food : 0, choices: [
        { answer: "try again", next: 1 }
        ]
    }, //10 WIN
    { question: "dead", image : 'https://theadventuresofvivs.files.wordpress.com/2011/09/the-walking-dead-season-2-zombie-photo.jpg', width: 200, height: 100, food : 0, choices: [
        { answer: "try again", next: 1 }
        ]
    } //11 DEAD
];
 
var ScenesModel = function(scenes) {
    var self = this;
    
    self.activequestion = ko.observable(scenes[0].question)
    self.activechoices = ko.observableArray(scenes[0].choices)
    self.activeimage = ko.observable(scenes[0].image)
    self.activewidth = ko.observable(scenes[0].width)
    self.activeheight = ko.observable(scenes[0].height)

    self.activefood = ko.observable(10);

    self.nextScene = function(choice) {
    	self.activefood( self.activefood() - 1 + scenes[choice.next -1].food)

        //if you clicked try again
        if(choice.next -1 == 0){
            //set the food back to 10
            self.activefood(10);
        }

        //if food is 0 then you die
        if (self.activefood() == 0){
            self.activequestion(scenes[10].question);
            self.activechoices(scenes[10].choices);
        }else{ //if food isn't 0 then take you to next scene
            self.activequestion(scenes[choice.next -1].question);
            self.activechoices(scenes[choice.next -1].choices);
        }
        
        self.activeimage(scenes[choice.next -1].image)
        self.activewidth = ko.observable(scenes[0].width)
        self.activeheight = ko.observable(scenes[0].height)

    } 
};
 
ko.applyBindings(new ScenesModel(sceneData));
