addLayer("A", {
    name: "A", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "A", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    passiveGeneration(){
        let pg=0
        if (upg("B",23)||mil('I',1)) pg=Decimal.add(pg,1)
        if (mil("Z", 0))  pg=Decimal.add(pg,100)
        if (mil("Z", 1))  pg=Decimal.mul(pg,100)
        if (mil("Z", 2))  pg=Decimal.mul(pg,100)
        if (mil("Z", 3))  pg=Decimal.mul(pg,100)
        if (mil("Z", 4))  pg=Decimal.mul(pg,100)
        if (mil("C", 1))  pg=Decimal.mul(pg,100)
        if (mil("C", 2))  pg=Decimal.mul(pg,100)
        if (mil("D", 1))  pg=Decimal.mul(pg,100)
        if (mil("D", 2))  pg=Decimal.mul(pg,1e4)
        return pg},
    color: "#4BDC13",
    requires(){
		if (mil("Z", 4)) return new Decimal(1);
		return new Decimal(10);
	}, // Can be a funct}ion that takes requirement increases into account
    resource: "A", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent(){
		return n(0.5).mul(Decimal.pow(0.95,player.Z.points));
	}, // Prestige currency exponent
    gainExp() {// Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "a", description: "A: Reset for A points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        mult = mult.mul(upg(this.layer,22)?3:1)
        mult = mult.mul(hasChallenge("A", 22)?20:1)
        mult = mult.mul(hasChallenge("A", 31)?20:1)
        mult = mult.pow(hasChallenge("C", 12)?1.025:1)
        mult = mult.mul(buyableEffect("B",11))
        mult = mult.mul(buyableEffect("E",11))
        mult = mult.mul(mil("F",0)?10:1)
        mult = mult.mul(mil("I",0)?5:1)
        //if (mil('G',14)&&mult.gte('10^^4'))  mult=n(10).pow(n(10).pow(n(10).pow(n(10).pow(mult.log(10).log(10).log(10).log(10).add(tmp.G.gsre)))))
        if(mil('G',14)) mult=mult.mul(player.points)
        return mult
    },
    softcap(){return new Decimal(Infinity)},
	softcapPower(){return new Decimal(1)},
    doReset(layer){
        if (layer=="F") {        
            let keep = [];
            if(mil("F", 0)) keep.push("challenges")
            if(mil("F", 0)) keep.push("upgrades")
            layerDataReset(this.layer, keep)}
        if (layer=="I") {        
            let keep = []
            if(gcs('I',12)) keep.push("challenges")
            if(gcs('I',13)) keep.push("upgrades")
            layerDataReset(this.layer, keep)}
    },
    microtabs: {
        stuff: {       
            "Upgrades": {
                unlocked() {return true},
                content: [ "upgrades"]}, 
            "Challenges": {
                unlocked() {return (upg("B", 25))},
                content: ["challenges"]    },
        }
    },
    tabFormat: [
        "main-display",
        "prestige-button",
        ["microtabs", "stuff"],
        ["blank", "25px"],
    ],
    upgrades: {
        11: {
            title:'A1',
            description: function() {return '2x points <br> layer A total: <br> '+ format(this.effect()) +'x'},
            effect(){
                let ef=n(1)
                if(upg("A",11)) ef=ef.mul(2)
                if(upg("A",12)) ef=ef.mul(2)
                if(upg("A",13)) ef=ef.mul(2)
                if(upg("A",14)) ef=ef.mul(2)
                if(upg("A",21)) ef=ef.mul(3)
                if(upg("A",23)) ef=ef.mul(3)
                if(upg("A",25)) ef=ef.mul(5)
                if(upg("A",41)) ef=ef.mul(300)
                if(upg("A",43)) ef=ef.mul(500)
                if(upg("A",45)) ef=ef.mul(1000)
                if(upg("A",51)) ef=ef.mul(4000)
                if(upg("A",54)) ef=ef.mul(3e4)
                ef=ef.pow(buyableEffect("B",22))
                return ef
            },
            cost:new Decimal(1),
        },
        12: {
            title:'A2',
            description: "2x points.",
            cost: new Decimal(1),
            unlocked() { return (upg(this.layer, 11))},
        },
        13: {
            title:'A3',
            description: "2x points.",
            cost: new Decimal(2),
            unlocked() { return (upg(this.layer, 12))},
        },
        14: {
            title:'A4',
            description: "2x points.",
            cost: new Decimal(4),
            unlocked() { return (upg(this.layer, 13))},
        },
        15: {
            title:'A5',
            description: "point/s^1.1.",
            cost: new Decimal(10),
            unlocked() { return (upg(this.layer, 14))},
            effect()  {let ef=n(0.1)
                if (upg('B', 32))  ef = ef.add(0.05)
                if (upg('B', 35))  ef = ef.add(0.05)                
                if (inChallenge("A", 12))  ef = ef.mul(0.25)
                if (inChallenge("A", 22))  ef = n(0)
                if (inChallenge("A", 31))  ef = n(0)
                return player.points.pow(ef).add(1);          
            },
            effectDisplay() { return format(this.effect())+"x" }, 
        },
        21: {
            title:'A6',
            description: "3x points.",
            cost:new Decimal(20),
            unlocked() { return (upg(this.layer, 15))},
        },
        22: {
            title:'A7',
            description: "3x A.",
            cost: new Decimal(30),
            unlocked() { return (upg(this.layer, 21))},
        },
        23: {
            title:'A8',
            description: "3x points.",
            cost:new Decimal(100),
            unlocked() { return (upg(this.layer, 22))},
        },
        24: {
            title:'A9',
            description: "lg(points) mults point/s.",
            cost: new Decimal(200),
            unlocked() { return (upg(this.layer, 23))},
            effect()  { 
                let ef = player.points.add(10).log(10)
                if (upg('A',31)) ef = ef.mul(5)
                if (upg('A',32)) ef = ef.mul(5)
                if (upg('A',33)) ef = ef.pow(1.3)
                if (upg('A',34)) ef = ef.pow(1.03)
                if (upg('B',33)) ef = ef.pow(1.5)
                if (upg('B',34)) ef = ef.pow(1.5)
                if (upg('A',44)) ef = ef.pow(1.25)
                if (upg('A',52)) ef = ef.pow(1.15)

				if(hasMilestone('Z',5))ef = ef.pow(15)

                if (inChallenge("A",12)) ef = ef.pow(0.25)
                if (inChallenge("A",22)) ef = n(1)
                if (inChallenge("A",31)) ef = n(1)
                return ef;          
            },
            effectDisplay() { return format(this.effect())+"x" }, 
        },
        25: {
            title:'A10',
            description: "5x points.",
            cost:new Decimal(400),
            unlocked() { return (upg(this.layer, 24))},
        },
        31: {
            title:'A11',
            description: "A9 x5.",
            cost:new Decimal(800),
            unlocked() { return (upg(this.layer, 25))},
        },
        32: {
            title:'A12',
            description: "A9 x5.",
            cost:new Decimal(2000),
            unlocked() { return (upg(this.layer, 31))},
        },
        33: {
            title:'A13',
            description: "A9^1.3.",
            cost:new Decimal(5000),
            unlocked() { return (upg(this.layer, 32))},
        },
        34: {
            title:'A14',
            description: "A9^1.03.",
            cost:new Decimal(1.5e4),
            unlocked() { return (upg(this.layer, 33))},
        },
        35: {
            title:'A15',
            description: "A^0.2 boost points. unlock B.",
            cost: new Decimal(2e4),
            unlocked() { return (upg(this.layer, 34))},
            effect()  { 
                let ef=n(0.2)
                if (upg('A',42))  ef=ef.mul(1.5)              
                return player[this.layer].points.add(1).pow(ef);          
            },
            effectDisplay() { return format(this.effect())+"x" }, 
        },
        41: {
            title:'A16',
            description: "300x points.",
            cost:new Decimal('3e30'),
            unlocked() { return (hasChallenge(this.layer, 31))},
        },
        42: {
            title:'A17',
            description: "A15 ^1.25.",
            cost:new Decimal('1e33'),
            unlocked() { return (upg(this.layer, 41))},
        },
        43: {
            title:'A18',
            description: "500x points.",
            cost:new Decimal('2e36'),
            unlocked() { return (upg(this.layer, 42))},
        },
        44: {
            title:'A19',
            description: "A9 ^1.25.",
            cost:new Decimal('2e38'),
            unlocked() { return (upg(this.layer, 43))},
        },
        45: {
            title:'A20',
            description: "1000x points,C ^1.1.",
            cost:new Decimal('1e41'),
            unlocked() { return (upg(this.layer, 44))},
        },
        51: {
            title:'A21',
            description: "4000x points.",
            cost:new Decimal('2e74'),
            unlocked() { return (hasChallenge('C', 11))},
        },
        52: {
            title:'A22',
            description: "D x2,A9^1.15,unlock a chal.",
            cost:new Decimal('1e78'),
            unlocked() { return (upg(this.layer, 51))},
        },
        53: {
            title:'A23',
            description: "B26 x10.",
            cost:new Decimal('5e224'),
            unlocked() { return (upg('B', 62))},
        },
        54: {
            title:'A24',
            description: "B26 x10,x3e4 pts.",
            cost:new Decimal('1e229'),
            unlocked() { return (upg(this.layer, 53))},
        },
        55: {
            title:'A25',
            description: "Bb3-4 are stronger.",
            cost:new Decimal('1e243'),
            unlocked() { return (upg(this.layer, 54))},
        },
        61: {
            title:'A26',
            description: "mult to C based on Bb1 eff.",
            cost:new Decimal('1e440'),
            effect()  { 
                let ef = buyableEffect('B',11).pow(0.02).times(buyableEffect('B',11).add(10).log(10).pow(1.5))
                return ef},
            effectDisplay() { return format(this.effect())+"x" }, 
            unlocked() { return (mil('B', 4))},
        },
        62: {
            title:'A27',
            description: "mult to B26 based on Bb1 eff.",
            cost:new Decimal('1e450'),
            effect()  { 
                let ef = buyableEffect('B',11).add(10).log(10).pow(1.2)
                return ef;},
            effectDisplay() { return format(this.effect())+"x" }, 
            unlocked() { return (upg(this.layer, 61))},
        },
        63: {
            title:'A28',
            description: "Bb5 x2.",
            cost:new Decimal('1e475'),
            unlocked() { return (upg(this.layer, 62))},
        },
        64: {
            title:'A29',
            description: "mult to D based on Bb1 eff.",
            cost:new Decimal('1e621'),
            effect()  { 
                let ef = buyableEffect('B',11).pow(0.006).times(buyableEffect('B',11).add(10).log(10).pow(1.25))
                return ef;},
            effectDisplay() { return format(this.effect())+"x" }, 
            unlocked() { return (upg(this.layer, 63))},
        },
        65: {
            title:'A30',
            description: "Bb1-5 are cheaper.",
            cost:new Decimal('1e625'),
            unlocked() { return (upg(this.layer, 64))},
        },
    },
    challenges: {
        11: {
            name: "Ac1",
            completionLimit: 1,
            challengeDescription() {return "points ^0.75"},//+format(tmp.A.baseAmount)
            unlocked() { return (upg("B", 25))},
            goalDescription: '5e12 points',
            canComplete() {return player.points.gte('5e12')},//1e12
            rewardDescription: "^1.1 B.",
        },
        12: {
            name: "Ac2",
            completionLimit: 1,
            challengeDescription() {return "A5/A9 ^0.25"},
            unlocked() {  return (hasChallenge(this.layer, 11))},
            goalDescription: '2e13 points',
            canComplete() {return player.points.gte('2e13')},//4e12
            rewardDescription: "x10 B.",
        },
        21: {
            name: "Ac3",
            completionLimit: 1,
            challengeDescription() {return "points ^0.55"},
            unlocked() { return (upg("B", 33))},
            goalDescription: '5e12 points',
            canComplete() {return player.points.gte('5e12')},//3e10
            rewardDescription: "x50 points.",
        },
        22: {
            name: "Ac4",
            completionLimit: 1,
            challengeDescription() {return "A5/A9 are disabled"},
            unlocked() { return (upg("B", 35))},
            goalDescription: '3e18 points',
            canComplete() {return player.points.gte('3e18')},//5e16
            rewardDescription: "x100 points,x20 A,x10 B.<br>unlock C.",
        },
        31: {
            name: "Ac5",
            completionLimit: 1,
            challengeDescription() {return "points ^0.5,A5/A9 are disabled"},
            unlocked() { return (upg("C", 15))},
            goalDescription: '2e17 points',
            canComplete() {return player.points.gte('2e17')},
            rewardDescription: "x200 points,x20 A,x2 C.",
        },
        32: {
            name: "Ac6",
            completionLimit: 1,
            challengeDescription() {return "Bb1-2 ^0.5"},
            unlocked() { return (mil("D", 3))},
            goalDescription: '1e302 points',
            canComplete() {return player.points.gte('1e302')},
            rewardDescription: "^1.01 points.",
        },
        41: {//codes are edited at v0.7.2
            name: "Ac7",
            completionLimit: 5,
            challengeDescription: function() {
                return "Bb3-5 are disabled <br> Completion: " +challengeCompletions(this.layer,this.id) + "/5"},
            unlocked() { return (mil('B',4))},
            goal(){
                let a=[n('e500'),n('e540'),n('e580'),n('e700'),n('e2025'),n(0)]
                return a[(challengeCompletions(this.layer,this.id))]
            },            
            goalDescription:  function() {return format(this.goal())+' points'},
            canComplete() {return player.points.gte(this.goal())},
            rewardDescription: "boost to pts base on Bb1-2.",
            rewardEffect() {
                let b=n(challengeCompletions("A", 41)).pow(1.25)
                let ef1 = n(buyableEffect('B',11)).pow(n(0.12).add(b.div(40)))
                let ef2 = n(buyableEffect('B',12)).pow(n(0.12).add(b.div(40)))
                let ef = ef1.mul(ef2)
                if (upg('E',52)) ef=ef.pow(upgradeEffect('E',52))
                if (n(challengeCompletions("A", 41)).gte(1))  return ef
                else return new Decimal(1)
            },
            rewardDisplay() {return format(this.rewardEffect())+"x"},
        },
    }
})
