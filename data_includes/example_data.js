var shuffleSequence = seq("setcounter","intro",
                          sepWith("sep", rshuffle(startsWith('ex')), 'sr', "end_of_experiment");
var practiceItemTypes = ["practice"];

var defaults = [
    "AcceptabilityJudgment", {
        s: '',
	    q: 'Which of these two sentences is more acceptable than the other?',
        showNumbers: true,
        hasCorrect: true,
        leftComment: "", rightComment: ""
    },
    "Question",{
        showNumbers:false,

    }
    "DashedAcceptabilityJudgment", {
        showNumbers: true,
        hasCorrect: true,
        leftComment: "", rightComment: ""
    },
    "Form", {
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: true
    }
];

var qcond = "Question";

var manualSendResults = true;

var items = [

    ["practice_sep", "Separator", { transfer: 1000 }],    
    
    ["sep", "Separator", { transfer: 1000 }],

    ['sr','__SendResults__',[]],

    ["intro", "Form", {
        html: { include: "example_intro.html" },
        validators: {
            age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }
        }
    } ],

    ["setcounter", "__SetCounter__", { }],
    [['ex26012',0], qcond, {q:'Whether or not the artists shouted , the students stopped the president.\n\nThe students stopped the president.',as: ['definitely correct','maybe correct','definitely incorrect'], hasCorrect:true}],
[['ex24001',0], qcond, {q:'Probably the athletes slept.\n\nThe athletes slept.',as: ['definitely correct','maybe correct','definitely incorrect'], hasCorrect:false}],
["end_of_experiment", "Message", {transfer: null, html: '<p>End of experiment. Please submit this code to Mechanical Turk to confirm completion: ABGU783FGG. Feel free to close this window.</p>'}]
];
