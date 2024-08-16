
// A side layer with achievements, with no prestige
addLayer("ac", {
    startData() { return {
        unlocked: true,
        //points: new Decimal(0),
    }},
    color: "yellow",
    row: "side",
    tooltip() { // Optional, tooltip displays when the layer is locked
        return ("Achievements")
    },
    achievementPopups: true,
    achievements: {
        11: {
            name: "1.you gotta start somewhere",
            done() {return player.A.total.gte('1')}, 
            tooltip: "get 1 A", 
        },
        12: {
            name: "2.constant",
            done() {return (hasUpgrade("A", 14))},
            tooltip: "get A1-A4", 
        },
        13: {
            name: "3.self boost",
            done() {return (hasUpgrade("A", 15))},
            tooltip: "get A5",
        },
        14: {
            name: "4.100 well",
            done() {return player.A.total.gte('100')},
            tooltip: "get 100 A",
        },
        15: {
            name: "5.logged",
            done() {return (hasUpgrade("A", 24))},
            tooltip: "get A9",
        },
        16: {
            name: "6.why not prestige",
            done() {return player.B.total.gte('1')},
            tooltip: "get 1 B",
        },
        21: {
            name: "7.constant^2",
            done() {return (hasUpgrade("B", 15))},
            tooltip: "get B1-B5",
        },
        22: {
            name: "8.primary automation",
            done() {return (hasUpgrade("B", 23))},
            tooltip: "get B8", 
        },
        23: {
            name: "9.challenging",
            done() {return (hasUpgrade("B", 25))},
            tooltip: "unlock A chal", 
        },
        24: {
            name: "10.challenged",
            done() {return (hasChallenge("A", 11))},
            tooltip: "complete Ac1", 
        },
        25: {
            name: "11.challenged*3",
            done() {return (hasChallenge("A", 21))},
            tooltip: "complete Ac3", 
        },
        26: {
            name: "12.Row 1 full",
            done() {return (hasUpgrade("B", 35))},
            tooltip: "get B15", 
        },
        31: {
            name: "13.Row 2 why not prestige",
            done() {return player.C.total.gte('1')},
            tooltip: "unlock C",
        },
        32: {
            name: "14.hidden upg",
            done() {return (hasUpgrade("A", 41))},
            tooltip: "get A16", 
        },
        33: {
            name: "15.a set of timewall",
            done() {return (hasUpgrade("A", 45))},
            tooltip: "get A20", 
        },
        34: {
            name: "16.clickable",
            done() {return (hasUpgrade("C", 25))},
            tooltip: "get C10", 
        },
        35: {
            name: "17.why not prestige^3",
            done() {return player.D.total.gte('1')},
            tooltip: "unlock D",
        },
        36: {
            name: "18.constant^3",
            done() {return (hasUpgrade("D", 14))},
            tooltip: "get D1-D4", 
        },
        41: {
            name: "19.hidden upg^2",
            done() {return (hasUpgrade("A", 52))},
            tooltip: "get A22", 
        },
        42: {
            name: "20.perfect exponential",
            done() {return (hasUpgrade("D", 21))},
            tooltip: "get D6", 
        },
        43: {
            name: "21.first buyable",
            done() { return hasMilestone('D',2)},
            tooltip: "unlock B buyable",
        },
        44: {
            name: "22.Row 1 boost",
            done() { return hasUpgrade('B',41)},
            tooltip: "unlock Bb2",
        },
        45: {
            name: "23.discount",
            done() { return hasUpgrade('B',43)},
            tooltip: "get B18",
        },
        46: {
            name: "24.multieffect",
            done() { return hasUpgrade('B',52)},
            tooltip: "get B22",
        },
        51: {
            name: "25.remarkable",
            done() { return hasMilestone('B',0)},
            tooltip: "get a B milestone",
        },
        52: {
            name: "26.hidden upg^3",
            done() {return (hasChallenge("A", 32))},
            tooltip: "complete Ac6", 
        },
        53: {
            name: "27.infinity?",
            done() {return player.A.total.gte('1e308')},
            tooltip: "get 1e308 A", 
        },
        54: {
            name: "28.feel free",
            done() { return hasMilestone('B',2)},
            tooltip: "autobuy B buyable",
        },
        55: {
            name: "29.constant^4",
            done() {return (hasUpgrade("B", 72))},
            tooltip: "get B32", 
        },
        56: {
            name: "30.4x auto",
            done() { return hasMilestone('B',4)},
            tooltip: "D passive gain",
        },
        61: {
            name: "31.year in A",
            done() { return (challengeCompletions("A", 41) >= 4)},
            tooltip: "get 1e2024 pts in Ac7",
        },
        62: {
            name: "32.year in A^2",
            done() { return player.A.total.gte('1e2024')},
            tooltip: "get 1e2024 A",
        },
        63: {
            name: "33.a set of timewall^2",
            done() {return (hasUpgrade("A", 65))},
            tooltip: "get A30", 
        },
        64: {
            name: "34.inflation here",
            done() {return (hasUpgrade("B", 82))},
            tooltip: "get B37", 
        },
        65: {
            name: "35.'E'xponential",
            done() {return player.E.total.gte('1')}, 
            tooltip: "get 1 E", 
        },
        66: {
            name: "36.click it!",
            done() {return player.E.total.gte('1000')}, 
            tooltip: "get 1000 E", 
        },
        71: {
            name: "37.4 ingredients",
            done() {return (hasMilestone("E", 2))},
            tooltip: "unlock E chal", 
        },
        72: {
            name: "38.click billionaire",
            done() {return player.E.total.gte('1e9')}, 
            tooltip: "get 1e9 E", 
        },
        73: {
            name: "39.just for E",
            done() { return (challengeCompletions("E", 11) >= 3)},
            tooltip: "complete Ec1x3",
        },
        74: {
            name: "40.a bigger timewall",
            done() {return (challengeCompletions("E", 12) >= 2)},
            tooltip: "complete Ec2x2", 
        },
        75: {
            name: "41.10000 nice",
            done() {return player.points.gte('1e10000')},
            tooltip: "get 1e10000 pts",
        },
        76: {
            name: "42.3 'antimatter galaxies'",
            done() {return (hasUpgrade("E", 45))},
            tooltip: "get E20", 
        },
        81: {
            name: "43.'985'",
            done() {return (hasUpgrade("E", 54))},
            tooltip: "get E24", 
        },
        82: {
            name: "44.challenging^2",
            done() {return (challengeCompletions("E", 22) >= 1)},
            tooltip: "complete Ec4x1", 
        },
        83: {
            name: "45.hidden upg^4",
            done() {return (hasUpgrade("E", 64))},
            tooltip: "get E29", 
        },
        84: {
            name: "46.powerful 666",
            done() { return player.D.points.gte('1e666')},
            tooltip: "get 1e666 D",
        },
        85: {
            name: "47.no more clicks?",
            done() {return (hasMilestone('E',10))},
            tooltip: "get 10x E pas", 
        },
        86: {
            name: "48.Emmm...",
            done() {return (hasMilestone('E',11))},
            tooltip: "unlock Em", 
        },
        91: {
            name: "49.Em boosted",
            done() {return player.E.Em.gte('1e10')},
            tooltip: "get 1e10 Em",
        },
        92: {
            name: "50.googol E",
            done() {return player.E.points.gte('1e100')},
            tooltip: "get 1e100 E",
        },
        93: {
            name: "51.back",
            done() {return (hasUpgrade("E", 92))},
            tooltip: "get E42", 
        },
        94: {
            name: "52.linear",
            done() {return (challengeCompletions("E", 32) >= 1)},
            tooltip: "complete Ec6x1", 
        },
        95: {
            name: "53.Ek ruby",
            done() {return (hasMilestone('E',15))},
            tooltip: "unlock Ek", 
        },
        96: {
            name: "54.hidden upg^5",
            done() {return (hasUpgrade("E", 101))},
            tooltip: "get E46", 
        },
        101: {
            name: "55.GOODRAGE",
            done() {return player.E.points.gte('2e222')},
            tooltip: "get 2e222 E",
        },
        102: {
            name: "56.inflation again",
            done() {return (hasUpgrade("E", 104))},
            tooltip: "get E49", 
        },
        103: {
            name: "57.raising exp",
            done() {return (challengeCompletions("E", 42) >= 2)},
            tooltip: "complete Ec8x2", 
        },
        104: {
            name: "58.50 upgs",
            done() {return (hasUpgrade("E", 105))},
            tooltip: "get E50", 
        },
        105: {
            name: "59.10 babs",
            done() {return (hasMilestone("E", 18))},
            tooltip: "unlock Eb10", 
        },
        106: {
            name: "60.inflation to ee5",
            done() {return player.points.gte('e100000')},
            tooltip: "get e100000 pts",
        },
        111: {
            name: "61.complicated",
            done() {return (challengeCompletions("E", 42) >= 5)},
            tooltip: "complete Ec8x5", 
        },
        112: {
            name: "62.1000S E",
            done() {return player.E.points.gte('1e1000')},
            tooltip: "get 1e1000 E",
        },
        113: {
            name: "63.isnt softcapped",
            done() {return player.E.Ek.gte('1e590')},
            tooltip: "get 1e590 Ek",
        },
        114: {
            name: "64.REAL PRESTIGE",
            done() {return player.F.total.gte('1')},
            tooltip: "get 1 F",
        },
        115: {
            name: "65.PRESTIGE again",
            done() {return player.F.total.gte('2')},
            tooltip: "get 2 F",
        },
        116: {
            name: "66.triplekill",
            done() {return player.F.total.gte('3')},
            tooltip: "get 3 F",
        },
        121: {
            name: "67.auto E",
            done() {return player.F.total.gte('6')},
            tooltip: "get 6 F",
        },
        122: {
            name: "68.get 2 F at once",
            done() {return player.E.points.gte('1.8e1099')},
            tooltip: "get 1.8e1099 E",
        },
        123: {
            name: "69.no wait",
            done() {return (hasMilestone("F", 4))},
            tooltip: "keep E upg", 
        },
        124: {
            name: "70.no clicks",
            done() {return (hasMilestone("F", 5))},
            tooltip: "keep E chal", 
        },
        125: {
            name: "71.fluorine",
            done() {return (hasUpgrade("F", 24))},
            tooltip: "get F9", 
        },
        126: {
            name: "72.AT inflation",
            done() {return (hasMilestone("F", 7))},
            tooltip: "get F mil 7", 
        },
        131: {
            name: "73.hidden upg^6",
            done() {return (hasUpgrade("C", 41))},
            tooltip: "get C16", 
        },
        132: {
            name: "74.real chal",
            done() {return (challengeCompletions("F", 11) >= 1)},
            tooltip: "complete Fc1x1", 
        },
        133: {
            name: "75.more inf-e5e5",
            done() {return player.points.gte('e500000')},
            tooltip: "get e500000 pts",
        },
        134: {
            name: "76.super surge",
            done() {return (hasUpgrade("F", 34))},
            tooltip: "get F14", 
        },
        135: {
            name: "77.1M OoM",
            done() {return player.points.gte('e1000000')},
            tooltip: "get e1000000 pts",
        },
        136: {
            name: "78.restricted",
            done() {return (challengeCompletions("F", 11) >= 3)},
            tooltip: "complete Fc1x3", 
        },
        141: {
            name: "79.so quick?",
            done() {return (hasMilestone("F", 9))},
            tooltip: "get F passive generation", 
        },
        142: {
            name: "80.why it's faster?",
            done() {return player.points.gte('e3000000')},
            tooltip: "get e3000000 pts<br>are there any softcaps?",
        },
        143: {
            name: "81.real AD",
            done() {return (getBuyableAmount('F',11))>=1},
            tooltip: "get F dim 1", 
        },
        144: {
            name: "82.iteration",
            done() {return (getBuyableAmount('F',13))>=1},
            tooltip: "get F dim 3", 
        },
        145: {
            name: "83.removed softcap",
            done() {return player.points.gte('e1e7')},
            tooltip: "get e1e7 pts",
        },
        146: {
            name: "84.no dimboosts?",
            done() {return (getBuyableAmount('F',22))>=1},
            tooltip: "get F dim 5.<br>in AD,1 dimboost is required to unlock AD5", 
        },
        151: {
            name: "85.obedient?",
            done() {return (getBuyableAmount('F',32))>=1},
            tooltip: "get F dim 8.", 
        },
        152: {
            name: "86.massive inf",
            done() {return player.points.gte('e1e8')},
            tooltip: "get e1e8 pts",
        },
        153: {
            name: "87.massive_inf",
            done() {return player.points.gte('e1e9')},
            tooltip: "get e1e9 pts",
        },
        154: {
            name: "88.just wait",
            done() {return (challengeCompletions("F", 12) >= 3)},
            tooltip: "complete Fc2x3", 
        },
        155: {
            name: "89.similar to a galaxy...",
            done() {return (getBuyableAmount('F',102)>=1)},
            tooltip: "get a tickboost",
        },
        156: {
            name: "90.F3.0!",
            done() {return player.points.gte('e1e10')},
            tooltip: "get e1e10 pts",
        },
        161: {
            name: "91.quitting control",
            done() {return (hasUpgrade("F", 63))},
            tooltip: "get F28", 
        },
        162: {
            name: "92.half infinity",
            done() {return player.F.F1.gte('1e154')},
            tooltip: "get 1e154 F1", 
        },
        163: {
            name: "93.megasurge",
            done() {return player.points.gte('e1e16')},
            tooltip: "get e1e16 pts",
        },
        164: {
            name: "94.is it a softcap?",
            done() {return player.F.F1.gte('1e500')},
            tooltip: "get 1e500 F1.<br>in AD,AM is hardcapped at 2^1024(pre-break) and scaling after this(post-break).", 
        },
        165: {
            name: "95.effariG",
            done() {return player.G.total.gte('1')},
            tooltip: "get 1 G",
        },
        166: {
            name: "96.scaled galaxy",
            done() {return (getBuyableAmount('F',102)>=5)},
            tooltip: "get 5 tickboost",
        },
        171: {
            name: "97.remove a scale",
            done() {return (hasUpgrade("G", 15))},
            tooltip: "get G5", 
        },
        172: {
            name: "98.why it is diminishing?",
            done() {return player.E.Ek.gte('ee15')},
            tooltip: "get ee15 Ek<br>i previous version,Ek eff decrease past a large number.this was fixed at later ver.", 
        },
        173: {
            name: "99.x2 IP",
            done() {return (getBuyableAmount('G',11)>=1)},
            tooltip: "get a Gc1<br>in AD,there is a x2 IP buyable below 16 infinity upgs.<br>cost is x10(x1e10 between e3e6 and e6e6) and eff is x2.", 
        },
        174: {
            name: "100.privileged",
            done() {return (hasUpgrade("F", 71))},
            tooltip: "get F31", 
        },
        175: {
            name: "101.G power",
            done() {return (challengeCompletions("G", 11) >= 3)},
            tooltip: "complete Gc1x3", 
        },
        176: {
            name: "102.true unscaled",
            done() {return (hasUpgrade("G", 32))},
            tooltip: "get G12", 
        },
        181: {
            name: "103.year^3",
            done() { return player.F.F1.gte('1e2024')},
            tooltip: "get 1e2024 F1",
        },
        182: {
            name: "104.return?",
            done() {return (hasUpgrade("F", 81))},
            tooltip: "get F36", 
        },
        183: {
            name: "105.true unscaled^2",
            done() {return (challengeCompletions("G", 12) >= 3)},
            tooltip: "complete Gc2x3", 
        },
        184: {
            name: "106.cubic?",
            done() {return (getBuyableAmount('F',102)>=10)},
            tooltip: "get 10 tickboost",
        },
        185: {
            name: "107.dilation",
            done() {return (challengeCompletions("G", 12) >= 5)},
            tooltip: "complete Gc2x5", 
        },
        186: {
            name: "108.googolplex",
            done() {return player.points.gte('e1e100')},
            tooltip: "get e1e100 pts",
        },
        191: {
            name: "109.inf in inf",
            done() {return (hasUpgrade("G", 35))},
            tooltip: "get G15", 
        },
        192: {
            name: "110.expensive!",
            done() {return (challengeCompletions("G", 21) >= 3)},
            tooltip: "complete Gc3x3", 
        },
        193: {
            name: "111.F3.5",
            done() {return player.points.gte('ee100000')},
            tooltip: "get ee100000 pts",
        },
        194: {
            name: "112.gigasurge",
            done() {return (challengeCompletions("G", 21) >= 5)},
            tooltip: "complete Gc3x5", 
        },
        195: {
            name: "113.logged galaxy",
            done() {return (challengeCompletions("G", 22) >= 1)},
            tooltip: "complete Gc4x1", 
        },
        196: {
            name: "114.unscale for F1",
            done() {return (hasUpgrade("G", 44))},
            tooltip: "get G19", 
        },
        201: {
            name: "115.F3_F1",
            done() { return player.F.F1.gte('ee10')},
            tooltip: "get e1e10 F1",
        },
        202: {
            name: "116.F4.0!",
            done() {return player.points.gte('eee10')},
            tooltip: "get eee10 pts",
        },
        203: {
            name: "117.ID but a bit different",
            done() {return (hasMilestone("G", 8))},
            tooltip: "unlock F2.<br>in AD,ID is multiplicative instead of exponential.", 
        },
        204: {
            name: "118.we still need G chal?",
            done() {return (hasUpgrade("G", 52))},
            tooltip: "get G22", 
        },
        205: {
            name: "119.beyond antimatter",
            done() { return player.F.F1.gte('e9e15')},
            tooltip: "get e9e15 F1.<br>in AD,AM is hardcapped at e9e15(can be reached before Pelle.shown as 'END' in Pelle and reach endgame).",
        },
        206: {
            name: "120.F5.0!!",
            done() {return player.points.gte('eeee10')},
            tooltip: "get eeee10 pts",
        },
        211: {
            name: "121.balance failure",
            done() {return (hasUpgrade("G", 55))},
            tooltip: "get G25", 
        },
        212: {
            name: "122.another 'anti'",
            done() {return (hasMilestone("G", 14))},
            tooltip: "unlock Gs.<br>Gs part is inspired by plague tree.some currencies are named as 'anti-xxx' in PT.", 
        },
        213: {
            name: "123.F6 terasurge",
            done() {return player.points.gte('10^^6')},
            tooltip: "get 1F6 pts",
        },
        214: {
            name: "124.exp-exp-booster",
            done() {return (getBuyableAmount('G',23)>=1)},
            tooltip: "get a Gsb3",
        },
    },
    tabFormat: ["blank", ["display-text", function() {
        return "<h3 style='color: yellow;'>Achievements: " + player.ac.achievements.length + "/124 </h4>"
    }
    ], "blank", "blank", "achievements", ],
},
)