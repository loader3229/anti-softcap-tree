
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
            done() { return (challengeCompletions("A", 41) >= 5)},
            tooltip: "get 1e2025 pts in Ac7",
        },
        62: {
            name: "32.year in A^2",
            done() { return player.A.total.gte('1e2025')},
            tooltip: "get 1e2025 A",
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
            name: "68.2 F easy",
            done() {return player.E.points.gte('1.8e1099')},
            tooltip: "get 2 F at once",//get 1.8e1099 E
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
        215: {
            name: "125.PrPsc?",
            done() {return (hasUpgrade("G", 83))},
            tooltip: "unlock Gsi", 
        },
        216: {
            name: "126.still isnt a softcap",
            done() {return (getBuyableAmount('G',21)>=500)},
            tooltip: "get 500 Gsb1",
        },
        221: {
            name: "127.eternity here",
            done() {return (hasUpgrade("G", 101))},
            tooltip: "unlock Gse", 
        },
        222: {
            name: "128.mysterious?",
            done() {return (hasUpgrade("G", 104))},
            tooltip: "get G49", 
        },
        223: {
            name: "129.time dilation?",
            done() {return player.G.Gsetot.gte('1e1300')},
            tooltip: "get 1e1300 Gse", 
        },
        224: {
            name: "130.making reality in G",
            done() {return player.G.Gs.gte('e1e9')},
            tooltip: "get e1e9 Gs", 
        },
        225: {
            name: "131.d1lated",
            done() {return (hasMilestone('G',19))},
            tooltip: "unlock Gsb11-12",
        },
        226: {
            name: "132.+ERABY+E 1NFLA+10N",
            done() {return tmp.G.gsief.gte('1e12')},
            tooltip: "get 1e12 Gsi eff", 
        },
        231: {
            name: "133.world n+1",
            done() {return (hasUpgrade("G", 115))},
            tooltip: "unlock GG", 
        },
        232: {
            name: "134.separation",
            done() {return player.G.GGtot.gte('15')},
            tooltip: "get 15 GG", 
        },
        233: {
            name: "135.luxury",
            done() {return player.G.GGtot.gte('50')},
            tooltip: "get 50 GG", 
        },
        234: {
            name: "136.explorer",
            done() {return (upg("G", 123))},
            tooltip: "get G58", 
        },
        235: {
            name: "137.strayed",
            done() {return player.G.GGtot.gte('200')},
            tooltip: "get 200 GG", 
        },
        236: {
            name: "138.F7 a real tower",
            done() {return player.points.gte('10^^7')},
            tooltip: "get 1F7 pts",
        },
        241: {
            name: "139.system revolution",
            done() {return (mil('G',22))},
            tooltip: "unlock r5-7 qol",
        },
        242: {
            name: "140.stretching",
            done() {return player.G.GGtot.gte('500')},
            tooltip: "get 500 GG", 
        },
        243: {
            name: "141.+ERABY+E PrPres",
            done() {return tmp.G.gseef.gte('1e12')},
            tooltip: "get 1e12 Gse 1st eff", 
        },
        244: {
            name: "142.googolpleS",
            done() {return player.G.Gs.gte('e1e100')},
            tooltip: "get e1e100 Gs", 
        },
        245: {
            name: "143.for whole tree?",
            done() {return player.G.GGtot.gte('1400')},
            tooltip: "get 1400 GG", 
        },
        246: {
            name: "144.not a reality",
            done() {return player.H.points.gte('1')},
            tooltip: "get 1 H", 
        },
        251: {
            name: "145.bankrupting",
            done() {return (upg("G",135))},
            tooltip: "unlock t28", 
        },
        252: {
            name: "146.for whole tree!",
            done() {return player.G.GGtot.gte('3300')},
            tooltip: "get 3300 GG", 
        },
        253: {
            name: "147.chaos",
            done() {return player.H.harsh.gte('1')},
            tooltip: "get 1 harsh", 
        },
        254: {
            name: "148.imminent infinity",
            done() {return player.H.harsh.gte('1.8e308')},
            tooltip: "get 1.8e308 harsh", 
        },
        255: {
            name: "149.to the F7s",
            done() {return (upg("H",75))},
            tooltip: "unlock Hb9", 
        },
        256: {
            name: "150.softcap 1-1",
            done() {return (upg("H",25))},
            tooltip: "get H10", 
        },
        261: {
            name: "151.hyped",
            done() {return (mil('H',4))},
            tooltip: "unlock hyper",
        },
        262: {
            name: "152.that speed?",
            done() {return player.H.hyper.gte('1e10000')},
            tooltip: "get 1e10000 hyper", 
        },
        263: {
            name: "153.removed softcap^2",
            done() {return (upg("H",83))},
            tooltip: "get H38", 
        },
        264: {
            name: "154.a safe boost",
            done() {return n(getBuyableAmount("H",63)).gte(1)},
            tooltip: "get Hy6", 
        },
        265: {
            name: "155.remember sb6?",
            done() {return (upg("H",33))},
            tooltip: "get H13", 
        },
        266: {
            name: "156.d1l4t3d",
            done() {return (mil('H',6))},
            tooltip: "add sb6 limit",
        },
        271: {
            name: "157.sn4p b4ck t0 r34l1ty",
            done() {return (mil('G',30))},
            tooltip: "get 1 GsR",
        },
        272: {
            name: "158.beyond ng+3",
            done() {return player.G.Gsetot.gte('e1e32')},
            tooltip: "get e1e32 Gse", 
        },
        273: {
            name: "159.-atomic",
            done() {return player.G.Gsr.gte('1.8e308')},
            tooltip: "get 1.8e308 GsR <br>atomic:a AD mod that add a layer after cel7", 
        },
        274: {
            name: "160.superdilating",
            // done:  function(){let s=n(0)
            //     for(let i=0;i<=3;i++) s=s.add(player.H.dh[i])
            //     return s.gte(5)},
            done() {return tmp.H.totdh.gte(5)},
            tooltip: "get 5 dH(any type)", 
        },
        275: {
            name: "161.aleph-1",
            done() {return player.H.dhp.gte('1.8e308')},
            tooltip: "get 1.8e308 dH points", 
        },
        276: {
            name: "162.up and down",
            done:  function(){let m=n(0)
                for(let i=0;i<=5;i++) m=m.max(player.H.dh[i])
                return m.gte(10)},
            tooltip: "get 10 dH of single type", 
        },
        281: {
            name: "163.GooGolplEx",
            done() {return player.G.Gsetot.gte('e1e100')},
            tooltip: "get e1e100 Gse", 
        },
        282: {
            name: "164.softcap 3-3",
            done() {return player.H.dh[4].gte(3)},
            tooltip: "get 3 dH5", 
        },
        283: {
            name: "165.f3.33f",
            done() {return player.H.harsh.gte('10^^3.333')},
            tooltip: "get F3.333 harsh(what it equals to?)", 
        },
        284: {
            name: "166.fast & slow",
            done() {return player.points.gte('10^^7.602')},
            tooltip: "get 4F7 points", 
        },
        285: {
            name: "167.3.5 isnt crazy",
            done() {return player.G.Gs.gte('ee100000')},
            tooltip: "get ee100000 Gs", 
        },
        286: {
            name: "168.fullyHarshGlitch",
            done() {return player.H.points.gte('1000')},
            tooltip: "autobuy Hb3/Hy3", 
        },
        291: {
            name: "169.hypedHyper",
            done() {return player.H.hyper.gte('ee1000000')},
            tooltip: "get ee1000000 hyper", 
        },
        292: {
            name: "170.cursed",
            done() {return tmp.H.totdh.gte(6666)},
            tooltip: "get 6666 dH(any type)", 
        },
        293: {
            name: "171.1e10 static?",
            done() {return player.H.points.gte('1e10')},
            tooltip: "get 1e10 H", 
        },
        294: {
            name: "172.almost here",
            done() {return player.points.gte('10^^8')},
            tooltip: "get 1F8 points", 
        },
        295: {
            name: "173.I CANT BALANCE IT!!",
            done() {return player.points.gte('10^^9')},
            tooltip: "get 1F9 points", 
        },
        296: {
            name: "174.collapsed",
            done() {return player.I.points.gte(1)},
            tooltip: "get 1 I", 
        },
        301: {
            name: "175.GG^2 at 4",
            done() {return mil('I',2)},
            tooltip: "unlock Qol points", 
        },
        302: {
            name: "176.waitttttt",
            done() {return player.I.qolpoints.gte(1e5)},
            tooltip: "get 1e5 Qol points", 
        },
        303: {
            name: "177.clickkkkkk",
            done() {return tmp.I.comp.gte(1)},
            tooltip: "complete a speedrun", 
        },
        304: {
            name: "178.get it max",
            done() {return gcs('I',16)},
            tooltip: "get kp9", 
        },
        305: {
            name: "179.iniskiped",
            done() {return n(challengeCompletions('I',11)).gte(10)},
            tooltip: "complete Ic1x10", 
        },
        306: {
            name: "180.shift",
            done() {return n(challengeCompletions('I',22)).gte(1)},
            tooltip: "complete Ic4x1", 
        },
        311: {
            name: "181.secgros",
            done() {return !player.I.m[0].gte(120)},
            tooltip: "row4 reset 1n 120s", 
        },
        312: {
            name: "182.r4 is easy",
            done() {return tmp.I.comp.gte(35)},
            tooltip: "complete all speedruns", 
        },
        313: {
            name: "183.10th layer!",
            done() {return player.J.best.gte(1)},
            tooltip: "get 1 J", 
        },
        314: {
            name: "184.well break",
            done() {return player.J.bp.gte('1e308')},
            tooltip: "get 1e308 break points", 
        },
        315: {
            name: "185.great weaken",
            done() {return player.I.hi.gte('10')},
            tooltip: "get 10 harden I", 
        },
        316: {
            name: "186.year but +1",//'any difference?' initially,at F1000 pts
            done() {return player.points.gte('10^^2025')},
            tooltip: "get 1F2025 points", 
        },
        321: {
            name: "187.d1_l4_t3_d..",
            done() {return player.J.bp.gte('e1e6')},
            tooltip: "get e1e6 break points <br>And its the No.destruction 3,2,1 achievement!", 
        },
        322: {
            name: "188.empirical impossible",
            done() {return player.I.hi.gte('150')},
            tooltip: "get 150 harden I", 
        },
        323: {
            name: "189.go Fe308!",
            done() {return player.J.ss.gte('1e308')},
            tooltip: "get 1e308 slog speeder", 
        },
        324: {
            name: "190.burn your points",
            done() {return player.I.res[0].gte(40)},
            tooltip: "set pts curse option to 40", 
        },
        325: {
            name: "191.a reincarnation",
            done() {return player.points.gte('10^^1e6')},
            tooltip: "get F1e6 points <br>from 'the pro tree'.Fe6 unlock void and Re layer.", 
        },
        326: {
            name: "192.IMR wall wall wall",
            done() {return gba('J',101).gte(10)},
            tooltip: "reach BP rank 10", 
        },
        331: {
            name: "193.speedy",
            done() {return tmp.J.ssef.gte('2019')},
            tooltip: "get 2019 slog speeder effect", 
        },
        332: {
            name: "194.infinite quality",
            done() {return player.I.qolpoints.gte('e9e15')},
            tooltip: "get e9e15 Qol points", 
        },
    },
    tabFormat: ["blank", ["display-text", function() {
        return "<h3 style='color: yellow;'>Achievements: " + player.ac.achievements.length + "/194 </h4>"
    }
    ], "blank", "blank", "achievements", ],
},
)
