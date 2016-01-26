Seeds = {};

var questions = [
  { question: 'Look at this series: 2, 1, (1/2), (1/4), ... What number should come next?', correctAnswer: '1/8', otherAnswers: ['1/3', '2/8', '2/4', '1/16'] },
  { question: 'Look at this series: 7, 10, 8, 11, 9, 12, ... What number should come next?', correctAnswer: 10, otherAnswers: [11, 7, 12, 13] },
  { question: 'Look at this series: 36, 34, 30, 28, 24, ... What number should come next?', correctAnswer: 22, otherAnswers: [20, 23, 26, 21] },
  { question: 'Look at this series: 22, 21, 23, 22, 24, 23, ... What number should come next?', correctAnswer: 25, otherAnswers: [22, 27, 26, 24] },
  { question: 'Look at this series: 53, 53, 40, 40, 27, 27, ... What number should come next?', correctAnswer: 14, otherAnswers: [12, 27, 53, 17] },
  { question: 'Fill: SCD, TEF, UGH, ____, WKL', correctAnswer: 'VIJ', otherAnswers: ['CMN', 'UJI', 'IJT', 'TUV'] },
  { question: 'Fill: FAG, GAF, HAI, IAH, ____', correctAnswer: 'JAK', otherAnswers: ['HAK', 'HAL', 'JAI', 'JAJ'] },
  { question: 'Fill: ELFA, GLHA, ILJA, _____, MLNA', correctAnswer: 'KLLA', otherAnswers: ['OLPA', 'KLMA', 'LLMA', 'LLPA'] },
  { question: 'Fill: CMM, EOO, GQQ, _____, KUU', correctAnswer: 'ISS', otherAnswers: ['GRR', 'GSS', 'ITT', 'GTT'] },
  { question: 'Fill: ZA5, Y4B, XC6, W3D, _____', correctAnswer: 'VE7', otherAnswers: ['V2E', 'VE5', 'E7V', 'E2V'] },
  { question: 'Look at this series: 4, 5, 8, 17, 44, ... What number should come next?', correctAnswer: '125', otherAnswers: ['80', '112', '60', '84'] },
  { question: 'Look at this series: 13, 57, 911, 1315, ... What number should come next?', correctAnswer: '2123', otherAnswers: ['1879', '3002', '5004', '1784'] },
  { question: 'At the end of a banquet 10 people shake hands with each other. How many handshakes will there be in total?', correctAnswer: '45', otherAnswers: ['100', '20', '50', '90'] },
  { question: 'The day before the day before yesterday is three days after Saturday. What day is it today?', correctAnswer: 'Friday', otherAnswers: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'] },
  { question: 'Select the number that best completes the analogy 10 : 6 :: 3 : ?', correctAnswer: '-1', otherAnswers: ['2', '1', '12', '4'] },
  { question: 'Look at this series: 13, 57, 911, 1315, ... What number should come next?', correctAnswer: '2123', otherAnswers: ['1879', '3002', '5004', '1784'] },
  { question: 'Look at this series: 21, 9, 21, 11, 21, 13, 21, ... What number should come next?', correctAnswer: '15', otherAnswers: ['14', '16', '21', '23'] },
  { question: 'Look at this series: 1, 3, 6, 10, 15 ... What number should come next?', correctAnswer: '21', otherAnswers: ['8', '11', '24', '27'] },
  { question: '165135 is to peace as 1215225 is to', correctAnswer: 'love', otherAnswers: ['lead', 'loop', 'castle', 'candle'] },
  { question: 'Library is to book as book is to', correctAnswer: 'page', otherAnswers: ['copy', 'binding', 'author', 'cover'] },
  { question: 'Nim went into a supermarket to buy some fruit. There were three packs on special offer: 1) Ten grapes and five strawberries: 70p (save 10p) 2) Ten strawberries and ten apricots: £2 (save 40p) 3) Thirty grapes: 100p (save 20p) What would be the full price of one grape, one strawberry and one apricot at normal price (no special offers)?', correctAnswer: '28p', otherAnswers: ['30p', '25p', '26p', '27p'] },
  { question: 'There is a pole in a lake. Half of the pole is embedded in the mud at the bottom of the pond, another one third is covered by water, and 7 feet is out of the water. What is the total length of the pole?', correctAnswer: '42 feet', otherAnswers: ['40 feet', '44 feet', '38 feet', '46 feet'] },
  { question: 'If January: 7110, February: 826, March: 5313, April: 541, May: 3513, June: 4610, July: 4710, What is the code for the month of August?', correctAnswer: '681', otherAnswers: ['1048', '531', '2043', '1782'] },
  { question: 'There are 60 sweets in a jar. The first person took one sweet, and each consecutive person took more sweets than the person before, until the jar was empty. What is the largest number of people that could have eaten sweets from the jar? ', correctAnswer: '11', otherAnswers: ['12', '8', '14', '9'] },
  { question: 'At the University of Kent 36 students attended the LAW lecture, 39 attended an ART lecture and 37 attended the DRAMA lecture. How many attended the FILM lecture?', correctAnswer: '40', otherAnswers: ['41', '42', '43', '44'] },
  { question: 'There are 23 football teams playing in a knockout competition. What is the least number of matches they need to play to decide the winner?', correctAnswer: '22', otherAnswers: ['20', '23', '21', '24'] },
  { question: 'How many degrees are there between clock hands at 3.15?', correctAnswer: '7.5', otherAnswers: ['10', '10.5', '6', '11'] },
  { question: '1/2 of 2/3 of 3/4 of 4/5 of 5/6 of 6/7 of 7/8 of 8/9 of 9/10 of 1,000 = ?', correctAnswer: '100', otherAnswers: ['120', '200', '50', '10'] },
  { question: 'How many times do the hands of a clock overlap in 24 hours?', correctAnswer: '22', otherAnswers: ['24', '20', '21', '25'] },
  { question: 'Here are some words translated from an artificial language. gorblflur means fan belt, pixngorbl means ceiling fan, arthtusl means tile roof, Which word could mean "ceiling tile"?', correctAnswer: 'pixnarth', otherAnswers: ['gorbltusl', 'flurgorbl', 'arthflur', 'gorblarth'] },
  { question: 'Here are some words translated from an artificial language. hapllesh means cloudburst, srenchoch means pinball, resbosrench means ninepin, Which word could mean "cloud nine"?', correctAnswer: 'haplresbo', otherAnswers: ['leshsrench', 'haploch', 'ochhapl', 'leshloch'] },
  { question: 'Here are some words translated from an artificial language. agnoscrenia means poisonous spider, delanocrenia means poisonous snake, agnosdeery means brown spider, Which word could mean "black widow spider"?', correctAnswer: 'agnosvitriblunin', otherAnswers: ['deeryclostagnos', 'agnosdelano', 'trymuttiagnos', 'deerydelano'] },
  { question: 'Here are some words translated from an artificial language. moolokarn means blue sky, wilkospadi means bicycle race, moolowilko means blue bicycle, Which word could mean "racecar"?', correctAnswer: 'spadivolo', otherAnswers: ['wilkozwet', 'spadiwilko', 'moolobreil', 'moolowilko'] },
  { question: 'Here are some words translated from an artificial language. migenlasan means cupboard, lasanpoen means boardwalk, cuopdansa means pullman, Which word could mean "walkway"?', correctAnswer: 'poenforc', otherAnswers: ['poenmigen', 'cuopeisel', 'lasandansa', 'migenlasan'] },
  { question: 'Here are some words translated from an artificial language. godabim means kidney stones, romzbim means kidney beans, romzbako means wax beans, Which word could mean "wax statue"?', correctAnswer: 'wasibako', otherAnswers: ['godaromz', 'lazbim', 'bimpeo', 'romzpeo'] },
  { question: 'In a certain country ½ of 5 = 3. If the same proportion holds, what is the value of 1/3 of 10 ?', correctAnswer: '4', otherAnswers: ['5', '3', '2', '1'] },
  { question: 'If 9999 = 4, 8888 = 8, 1816 = 6, 1212 = 0, then 1919 = ', correctAnswer: '4', otherAnswers: ['0', '6', '2', '8'] },
  { question: 'Fill: WE, SG, PJ, LN, _____', correctAnswer: 'IS', otherAnswers: ['HS', 'IT', 'HT', 'HR'] },
  { question: 'If A is substituted by 4, B by 3, C by 2, D by 4, E by 3, F by 2 and so on, then what will be total of the numerical values of the letters of the word SICK?', correctAnswer: '11', otherAnswers: ['12', '10', '8', '9'] },
  { question: 'Which one does not belong to the group?', correctAnswer: '70', otherAnswers: ['52', '48', '68', '40'] },
  { question: 'If U is denoted by 7, M by 2, I by 5, O by 1, K by 8 and J by 4, then what will be the numeric form of the word MOUJIK when written in the reverse order?', correctAnswer: '854712', otherAnswers: ['217458', '845712', '857412', '857142'] },
  { question: 'How many letters of the word FAINTS, will their order in the word and that when the letters are arranged in the alphabetical order, remain the same?', correctAnswer: '2', otherAnswers: ['0', '1', '3', '4'] },
  { question: 'In a certain code GARNISH is written as RGAINHS. How will GENIOUS be written in that code?', correctAnswer: 'NGEOISU', otherAnswers: ['NEGOISU', 'NGESUOI', 'NEGSUOI', 'NEGIUO'] },
  { question: 'In a certain code INKER is written as GLLGT and GLIDE is written as EJJFG. How will JINKS be written in that code?', correctAnswer: 'HGOMU', otherAnswers: ['GFOMU', 'HGMMU', 'HGOGH', 'HMOMU'] },
  { question: 'If ‘AND’ is written as ‘EQF’ and ‘THE’ as ‘XKG’ then how will ‘COM’ be written?', correctAnswer: 'GRO', otherAnswers: ['HRO', 'GQO', 'GRN', 'HRN'] },
  { question: 'Four of the following five are alike in a certain way based on the positions of their elements in the English alphabet and hence form a group. Which one does not belong to the group?', correctAnswer: 'QL', otherAnswers: ['UQ', 'KG', 'SO', 'RM'] },
  { question: 'There are 60 marbles in a bowl. Their colors are red, blue, and yellow. 1/3 of the marbles are yellow, 1/4 of the marbles are blue. How many red marbles are there in the bowl?', correctAnswer: '25', otherAnswers: ['32', '28', '30', '24'] },
  { question: 'How many legs (total ) does 4 dogs, 2 elephants, 15 cats, and 26 people have?', correctAnswer: '136', otherAnswers: ['98', '110', '124', '142'] },
  { question: 'John works 4 days per week. He drives 10 miles round trip per day. If gas is $2.50 per gallon and his car gets 20 miles to the gallon, how much would he have spent on gasoline in 2 weeks getting back and forth to work?', correctAnswer: '$10', otherAnswers: ['$8.5', '$11', '$12', '$9.5'] },
  { question: 'Fill: J, F, M, A, M, J, ______', correctAnswer: 'J', otherAnswers: ['A', 'C', 'K', 'F'] },
  { question: 'Jack goes fishing on Saturday and catches  32 fish. On Sunday, he catches 1/4 the amount of fish he caught on Saturday. On Monday he catches 1/2 the fish he caught on Saturday and Sunday combined. How many fish did he catch on Monday?', correctAnswer: '20', otherAnswers: ['24', '12', '16', '18'] },
  { question: 'Ned has a fruit stand. Normally he sells apples for 40 cents a piece, but today he has apples on sale for 5 for $ 1. There are no limits on quantity. If you bought 16 apples at the sale price, how much money would you have saved?', correctAnswer: '$2.80', otherAnswers: ['$2.4', '$2.6', '$3.2', '$3'] },
  { question: 'Your sister Sarah is 8 years old. You are three times as old as Sarah. How old will you be when you are twice as old as Sarah?', correctAnswer: '32', otherAnswers: ['28', '40', '26', '48'] },
  { question: '224447777 is to 774442222 as 111333338888888 is to:', correctAnswer: '888333331111111', otherAnswers: ['888888833333111', '883331111', '113338888', '111888883333333'] },
  { question: "You find a note under your co-workers desk on which a message seems to be written in code. It reads: Abc'd ebbf ghi ibajckgldmkf qhdc nbcobbl hd. Bakpjnbcm.  You take it to your teenage son. He deciphers the secret alphabet except for one word that he keeps in code. It reads: Let's keep our relationship just between us. Bakpjnbcm. The curiosity is getting to you. Can you figure out the missing word?", correctAnswer: 'Elizabeth', otherAnswers: ['Esmeralda', 'Evangelina', 'Elnaspeth', 'Elianora'] },
  { question: "You own a magazine stand. Last month, you sold 1134 magazines at an average price of $4.25 per magazine. You pay out a total of $1,530.00 in salaries to your two full-time employees, which constitutes 80% of your business expenses. How much profit did you realize last month?", correctAnswer: '$2907', otherAnswers: ['$2386', '$2631', '$2983.5', '$3289.5'] },
  { question: "At a garage sale, Marc is lucky enough to find an old milk crate containing 104 record albums for $26.00. If he could purchase each album individually, how much will Marc pay for the 28 albums that he selects from the crate?", correctAnswer: '$7', otherAnswers: ['$3.71', '$6.95', '$8', '$10.75'] },
  { question: "If you ran 9 miles in 1-1/2 hours and decided to continue at the same pace for another 30 minutes, how many miles will you have run altogether?", correctAnswer: '12', otherAnswers: ['10', '6', '8', '18'] },
  { question: "You own a hot dog stand. On your average work day, you sell 120 hot dogs at 0.75 cents a piece. How many months will you need to work to sell for at least $10,000.00? Note: Weekends are a days off for you too!", correctAnswer: '6 months', otherAnswers: ['3 months', '4 months', '5 months', '7 months'] },
  { question: "You want to know if your cardiovascular training is making a difference in your performance. Two weeks ago, before the start of your training program, you could run for 14 minutes before having to stop to catch your breath. Now, you can run non-stop for approximately 40 minutes. By what percentage did you improve your performance?", correctAnswer: '186%', otherAnswers: ['12%', '86%', '126%', '26%'] },
  { question: "What would be the next number in this series? 169, 144, 121, 100, 81", correctAnswer: '64', otherAnswers: ['49', '56', '61', '72'] },
  { question: "You drop 4 coins in a well. One nickel, one quarter, and the other two are dimes. Using a special device, your friend is able to retrieve two coins from the well and tells you that one of the coins is a dime. What are the chances that the other coin she took out is also a dime?", correctAnswer: '1 in 3', otherAnswers: ['2 in 3', '2 in 5', '1 in 4', '2 in 4'] },
  { question: "Fran is off on a trek across the Sahara desert to see Ricky Martin in concert. It is a six-day hike from the airport to the closest oasis where he is playing. One person is only physically capable of carrying enough supplies (food, water, Ricky CD's) for four days. Obviously, she cannot make the entire trip alone. How many assistants will she need to make it to the oasis while making sure that the assistants have enough supplies to make it back to the airport? (They don't want to see the concert.) Hint: Only Fran needs to actually make it to the oasis.", correctAnswer: '2', otherAnswers: ['3', '5', '1', '4'] },
  { question: "A woman and her husband are picking seashells on the beach. The wife says, \"Give me seven of your shells and I will have twice as many as you!\" The husband answers, \"Are you crazy? Give me seven of yours and we'll have the same amount!\" How many seashells does each one have?", correctAnswer: 'Wife: 49, husband: 35', otherAnswers: ['Wife: 16, husband: 9', 'Wife: 51, husband: 37', 'Wife: 57, husband: 43', 'Wife: 27, husband: 14'] },
  { question: "Jackie, a 30-year-old woman, decides it's time to settle down and get married. There are four men eager to win her hand: Ronald, Lee, Aziz, and Malcolm. Jackie's four aunts, Luisa, Anna, Mary and Barbara, all have opinions about whom she should marry, of course! Luisa likes Ronald, Anna thinks Ronald and Malcolm are too macho but likes Lee and Aziz, Mary likes only Aziz, and Barbara thinks Lee and Malcolm are too poor but likes Ronald and Aziz. Finally, Jackie calls a psychic hotline to help her decide. She gets married, but only one aunt is happy with the choice. Who did she marry and which aunt is happy?", correctAnswer: 'She married Lee and Anna is happy', otherAnswers: ['She married Ronald and Luisa is happy', 'She married Aziz and Barbara is happy', 'She married Lee and Mary is happy', 'She married Aziz and Mary is happy'] },
  { question: "Look at this series: F2, __, D8, C16, B32, ... What number should fill the blank?", correctAnswer: 'E4', otherAnswers: ['A16', 'G4', 'E3', 'G16'] },
  { question: "Look at this series: 664, 332, 340, 170, ____, 89, ... What number should fill the blank?", correctAnswer: '178', otherAnswers: ['85', '97', '109', '115'] },
  { question: "Look at this series: V, VIII, XI, XIV, __, XX, ... What number should fill the blank?", correctAnswer: 'XVII', otherAnswers: ['IX', 'XXIII', 'XV', 'XXI'] },
  { question: "Look at this series: 70, 71, 76, __, 81, 86, 70, 91, ... What number should fill the blank?", correctAnswer: '70', otherAnswers: ['80', '71', '96', '76'] },
  { question: "Look at this series: 8, 43, 11, 41, __, 39, 17, ... What number should fill in the blank?", correctAnswer: '14', otherAnswers: ['8', '43', '44', '16'] }
]

Seeds.run = function() {
  questions.forEach(function(question) {
    Questions.insert(question);
  });
};

Meteor.startup(function () {
  if (Questions.find().count() === 0) {
    Seeds.run();
  }
});
