// a variable containing the ids of each game location
const gameLocations = [
  "t2",
  "t3",
  "t4",
  "m1",
  "m2",
  "m3",
  "m4",
  "m5",
  "b2",
  "b3",
  "b4"
];

// an object listing all of the legal moves from
//   a given game location for black (provided 
//   the target location is empty)
const blackMoves = {
  t2: ["m2", "m3", "t3"],
  t3: ["m3", "t4"],
  t4: ["m4", "m5"],
  m1: ["t2", "m2", "b2"],
  m2: ["t2", "m3", "b2"],
  m3: ["t3", "t4", "m4", "b4", "b3"]
  m4: ["t4", "m5", "b4"],
  m5: [],
  b2: ["m2", "m3", "b3"],
  b3: ["m3", "b4"],
  b4: ["m4", "m5"]
};

// an object listing all of the legal moves from
//   a given game location for white (provided 
//   the target location is empty)
const whiteMoves = {
  t2: ["m1", "m2", "m3", "t3"],
  t3: ["t2", "m3", "t4"],
  t4: ["t3", "m3", "m4", "m5"],
  m1: [],
  m2: ["m1", "t2", "m3", "b2"],
  m3: ["t2", "m2", "b2", "t3", "t4", "m4", "b4", "b3"],
  m4: ["m3", "t4", "m5", "b4"],
  m5: ["t4", "m4", "b4"],
  b2: ["m1", "m2", "m3", "b3"],
  b3: ["b2", "m3", "b4"],
  b4: ["b3", "m3", "m4", "m5"]  
}

// This variable keeps track of whose turn it is
let whoseTurn = "black";

// This variable helps the game logic distinguish
//   first and second click.  False here means that
//   the player has not made the first click.
let firstClick = false;

// This variable will hold the legal moves determined
// by the logic after the first click
let legalMoves = [];

black => {
    const nodeClicked = $(this).id;
    if (firstClick === false) {
        legalMoves = [];
    //INSERT: is nodeClicked occupied by a black piece?  if so:
    //  This loop finds all the legal destinations and marks them
    for (i = 0; i < blackMoves.nodeClicked.length; i++) {
        //INSERT: is blackMoves.nodeClicked[i] occupied?  if not,
        legalMoves.push(blackMoves.nodeClicked[i]); // add the destination to the list of legal moves
        $(#blackMoves.nodeClicked[i]).attr('opacity', '.7'); // highlight the possible destination
    }
    //INSERT: else return;

    if (legalMoves.length > 0) { // we only want to register the
        // first click when it finds some legal moves
    firstClick = true;
    return;
    } else return;
    } else {
    // this next part happens when it's second click on black's 
    // turn, and when the first click was registered on a location 
    // that has a black piece which has legal moves available    
        if (legalMoves.includes(nodeClicked)) {
            // INSERT: Check whether the move is lateral, 
            //    if so increment the counter for non-advancing 
            //    consecutive black moves, if not, set that
            //    counter to 0
            // INSERT: Move the piece
            // INSERT: Check to see if black won, effect consequences
        // Then reset the variables for white's turn    
        legalMoves = 0;
        firstClick = false;
        whoseTurn = "white";
        }
    }
}

white => {
    const nodeClicked = $(this).id;
    // This if statement below should be written out of the code
    // since there is only ever one piece that white can move.
    // The logic should on white's turn immediately show and
    // record legalMoves and listen for the click for the destination.
    if (firstClick === false) {
        legalMoves = [];
    //INSERT: is nodeClicked occupied by the white piece?  if so:
    //  This loop finds all the legal destinations and marks them
    for (i = 0; i < whiteMoves.nodeClicked.length; i++) {
        //INSERT: is whiteMoves.nodeClicked[i] occupied?  if not,
        legalMoves.push(whiteMoves.nodeClicked[i]); // add the destination to the list of legal moves
        $(#whiteMoves.nodeClicked[i]).attr('opacity', '.7'); // highlight the possible destination
    }
    //INSERT: else return;
    firstClick = true;  // register the first click
    return;
    } else {
    // this next part happens when it's second click on white's 
    // turn, and when the first click was registered on a location 
    // that has the white piece which has legal moves available    
        if (legalMoves.includes(nodeClicked)) {
            // INSERT: Move the piece
            // INSERT: Check to see if white won, if so effect consequences
        // Then reset the variables for black's turn    
        legalMoves = 0;
        firstClick = false;
        whoseTurn = "white";
        }
    }
}

$(".node").on("click", {
    if (whoseTurn === "black") {
        black();
    } else {
        white();
    }
});