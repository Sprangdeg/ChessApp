export const TYPES = {
  EMPTY: 0,
  PAWN: 5,
  KNIGHT: 7,
  BISHOP: 11,
  ROOK: 13,
  QUEEN: 17,
  KING: 19
};

export const COLORS = {
  WHITE: 2,
  BLACK: 3
};

export const STRINGTYPES = {
  PAWN: "PAWN",
  KNIGHT: "KNIGHT",
  BISHOP: "BISHOP",
  ROOK: "ROOK",
  QUEEN: "QUEEN",
  KING: "KING"
};


export const BOARD = 
              [TYPES.ROOK*COLORS.WHITE, 
                TYPES.KNIGHT*COLORS.WHITE,
                TYPES.BISHOP*COLORS.WHITE,
                TYPES.KING*COLORS.WHITE,
                TYPES.QUEEN*COLORS.WHITE,
                TYPES.BISHOP*COLORS.WHITE, 
                TYPES.KNIGHT*COLORS.WHITE, 
                TYPES.ROOK*COLORS.WHITE,
                TYPES.PAWN*COLORS.WHITE,
                TYPES.PAWN*COLORS.WHITE,
                TYPES.PAWN*COLORS.WHITE,
                TYPES.PAWN*COLORS.WHITE,
                TYPES.PAWN*COLORS.WHITE,
                TYPES.PAWN*COLORS.WHITE,
                TYPES.PAWN*COLORS.WHITE,
                TYPES.EMPTY,TYPES.EMPTY,TYPES.EMPTY,TYPES.EMPTY,TYPES.EMPTY,TYPES.EMPTY,TYPES.EMPTY,TYPES.EMPTY,
                TYPES.EMPTY,TYPES.EMPTY,TYPES.EMPTY,TYPES.EMPTY,TYPES.EMPTY,TYPES.EMPTY,TYPES.EMPTY,TYPES.EMPTY,
                TYPES.EMPTY,TYPES.EMPTY,TYPES.EMPTY,TYPES.EMPTY,TYPES.EMPTY,TYPES.EMPTY,TYPES.EMPTY,TYPES.EMPTY,
                TYPES.EMPTY,TYPES.EMPTY,TYPES.EMPTY,TYPES.EMPTY,TYPES.EMPTY,TYPES.EMPTY,TYPES.EMPTY,TYPES.EMPTY,
                TYPES.PAWN*COLORS.BLACK,
                TYPES.PAWN*COLORS.BLACK,
                TYPES.PAWN*COLORS.BLACK,
                TYPES.PAWN*COLORS.BLACK,
                TYPES.PAWN*COLORS.BLACK,
                TYPES.PAWN*COLORS.BLACK,
                TYPES.PAWN*COLORS.BLACK,
                TYPES.PAWN*COLORS.BLACK,
                TYPES.ROOK*COLORS.BLACK, 
                TYPES.KNIGHT*COLORS.BLACK,
                TYPES.BISHOP*COLORS.BLACK,
                TYPES.KING*COLORS.BLACK,
                TYPES.QUEEN*COLORS.BLACK,
                TYPES.BISHOP*COLORS.BLACK, 
                TYPES.KNIGHT*COLORS.BLACK, 
                TYPES.ROOK*COLORS.BLACK,
              ];


/*  GAME LAYOUT
RANKS
1 a1 b1
2 a2 b2
3
4
5
6
7
8
  a  b  c  d  e  f  g  h FILES

vilket blir

1  0  1  2  3  4  5  6  7
2  8  9 10 11 12 13 14 15
3 16 17 18 19 20 21 22 23
4 24 25 26 27 28 29 30 31
5 32 33 34 35 36 37 38 39 
6 40 41 42 43 44 45 46 47
7 48 49 50 51 52 53 54 55
8 56 57 58 59 60 61 62 63
  a  b  c  d  e  f  g  h  

Men för att underlätta om en pjäs går utanför brädan lägger vi till lite rader.
Anledningen att det finns två rader är för att hästen kan hoppa två steg

0   1  2  3  4  5  6  7  8    9
10  11 12 13 14 15 16 17 18  19
    -----------------------
20 |21 22 21 24 25 26 27 28| 29 
30 |31 32 33 34 35 36 37 38| 39
40 |41 42 43 44 45 46 47 48| 49
50 |51 52 53 54 55 56 57 58| 59
60 |61 62 63 64 65 66 67 68| 69
70 |71 72 73 74 75 76 77 78| 79
80 |81 82 83 84 85 86 87 88| 89 
90 |91 92 93 94 95 96 97 98| 99  
   ------------------------
100 101                  108 109
110 111                      119 


*/