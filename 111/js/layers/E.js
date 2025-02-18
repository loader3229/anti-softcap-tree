addLayer("E", {
    name: "E", 
    symbol: "E", 
    position: 2, 
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        Em: new Decimal(0),
        Ek: new Decimal(0),
    }},
    passiveGeneration(){    let pg=0
        if (mil('E',9)||mil('I',1)) pg=Decimal.add(pg,1)
        if (hasMilestone('F',0)) pg=Decimal.add(pg,1)
        if (hasMilestone('Z',9)) pg=Decimal.add(pg,10)
        if (hasMilestone('E',10)) pg=Decimal.mul(pg,10)
        if (hasMilestone('E',11)) pg=Decimal.mul(pg,10)
        if (hasMilestone('E',15)) pg=Decimal.mul(pg,10)
        return pg},
    color: "#789A89",
    requires(){
		if (mil("Z", 4)) return new Decimal('1e390');
		return new Decimal('1e426');
	},
    resource: "E", 
    baseResource: "B", 
    baseAmount() {return player.B.points}, 
    type: "normal", 
	exponent(){
		return n(0.015).mul(Decimal.pow(0.95,player.Z.points));
	},
    gainExp() {
        return new Decimal(1)
    },
    row: 1, 
    hotkeys: [
        {key: "e", description: "E: Reset for E points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){ return ((mil('B',7))||player[this.layer].unlocked)},
    gainMult() {
        //let emxp=0.25
        //if (hasMilestone('E',12))  emxp=emxp+0.02
        mult = new Decimal(1)
        mult = mult.mul(hasMilestone("Z", 8)?10:1)
        mult = mult.mul(hasUpgrade("E",13)?upgradeEffect("E",13):1)
        mult = mult.mul(hasUpgrade("E",14)?upgradeEffect("E",14):1)
        mult = mult.mul(hasUpgrade("E",15)?4:1)
        mult = mult.mul(hasUpgrade("E",21)?2:1)
        mult = mult.mul(hasUpgrade("E",35)?upgradeEffect("E",35):1)
        mult = mult.mul(hasUpgrade("E",41)?5:1)
        mult = mult.mul(hasUpgrade("E",42)?2:1)
        //mult = mult.mul(hasUpgrade("E",51)?2500:1)
        //mult = mult.mul(hasUpgrade("E",54)?100:1)
        mult = mult.mul(hasUpgrade("E",23)?upgradeEffect("E",23):1)
        mult = mult.mul(hasUpgrade("E",32)?upgradeEffect("E",32):1)
        mult = mult.mul(hasUpgrade("C",32)?upgradeEffect("C",32):1)
        mult = mult.mul(hasUpgrade("D",42)?upgradeEffect("D",42):1)
        //mult = mult.mul(hasMilestone("E",11)?player.E.Em.max(1).pow(emxp):1)
        mult = mult.mul(hasMilestone("Z",9)?tmp.E.emf:1)
        mult = mult.mul(hasMilestone("E",20)?2024:1)
        mult = mult.mul(hasMilestone("F", 0)?10:1)
        mult = mult.mul(mil("I", 0)?5:1)
        mult = mult.mul(hasUpgrade("E",71)?upgradeEffect("E",71):1)
        mult = mult.mul(hasUpgrade("E",102)?upgradeEffect("E",102):1)
        mult = mult.mul(hasUpgrade("F",12)?upgradeEffect("F",12):1)
        //mult = mult.mul(hasUpgrade("G",22)?Decimal.pow(player.E.points.max(1),upgradeEffect("G",22)):1)
        if (hasChallenge("E", 11))  mult = mult.mul(challengeEffect('E',11))
        if (hasChallenge("E", 12))  mult = mult.mul(challengeEffect('E',12))
        if (inChallenge('F',11)) mult=Decimal.pow(mult,0.25)
        return mult
    },
    softcap(){return new Decimal(Infinity)},
	softcapPower(){return new Decimal(1)},
    branches: ['A','B','D'],
    milestones: {
        0: {requirementDescription: "1000 total E (1",
            done() {return player[this.layer].total.gte('1000')}, 
            effectDescription: "unlock E buyable.",
        },
        1: {requirementDescription: "40000 total E (2",
            done() {return player[this.layer].total.gte('40000')}, 
            effectDescription: "unlock Eb3,E2 exp+0.5.",
        },
        2: {requirementDescription: "1e5 total E (3",
            done() {return player[this.layer].total.gte('1e5')}, 
            effectDescription: "unlock E chal.",
        },
        3: {requirementDescription: "1e12 total E (4",
            done() {return player[this.layer].total.gte('1e12')}, 
            effectDescription: "E12 ^1.5,unlock another chal.",
        },
        4: {requirementDescription: "1e25 total E (5",
            done() {return player[this.layer].total.gte('1e25')}, 
            effectDescription: "autobuy Eb1-3.",
            toggles: [ ["E","auto1"] ]
        },
        5: {requirementDescription: "1e31 total E (6",
            done() {return player[this.layer].total.gte('1e31')}, 
            effectDescription: "Eb3 base +1,unlock another buyable.",
        },
        6: {requirementDescription: "1e40 total E (7",
            done() {return player[this.layer].total.gte('1e40')}, 
            effectDescription: "autobuy Eb4.",
            toggles: [ ["E","auto2"] ]
        },
        7: {requirementDescription: "1e42 total E (8",
            done() {return player[this.layer].total.gte('1e42')}, 
            effectDescription: "unlock 2 new chal.",
        },
        8: {requirementDescription: "1e48 total E (9",
            done() {return player[this.layer].total.gte('1e48')}, 
            effectDescription: "unlock new upg,B26 ^1.05.",
        },
        9: {requirementDescription: "1e50 total E (10",
            done() {return player[this.layer].total.gte('1e50')}, 
            effectDescription: "1x E passive. Finally!",
        },
        10: {requirementDescription: "2e68 total E (11",
            done() {return player[this.layer].total.gte('2e68')},
            effectDescription: "10x E passive,B26 ^1.05.",
        },
        11: {requirementDescription: "1e80 total E (12",
            done() {return player[this.layer].total.gte('1e80')},
            effectDescription: "10x E passive again.",
        },
        //12: {requirementDescription: "1e9 total Em",
        //    done() {return player.E.Em.total.gte('1e9')},
        //    effectDescription: "10x E passive again.",
        //},
        12: {requirementDescription: "1e90 total E (13",
            done() {return player[this.layer].total.gte('1e90')},
            effectDescription: "Em eff exp +0.02.",
        },
        13: {requirementDescription: "1e111 total E (14",
            done() {return player[this.layer].total.gte('1e111')}, 
            effectDescription: "autobuy Eb5-7.",
            toggles: [ ["E","auto3"] ]
        },
        14: {requirementDescription: "1e132 total E (15",
            done() {return player[this.layer].total.gte('1e132')}, 
            effectDescription: "unlock 2 new chal.",
        },
        15: {requirementDescription: "1e166 total E (16",
            done() {return player[this.layer].total.gte('1e166')},
            effectDescription: "10x E passive.",
        },
        16: {requirementDescription: "1e209 total E (17",
			unlocked(){ return player.Z.points.gte(11)},
            done() {return player[this.layer].total.gte('1e209') && player.Z.points.gte(11)}, 
            effectDescription: "unlock final 2 chal.",
        },
        17: {requirementDescription: "1e233 total E (18",
			unlocked(){ return player.Z.points.gte(11)},
            done() {return player[this.layer].total.gte('1e233') && player.Z.points.gte(11)}, 
            effectDescription: "autobuy Eb8-9.",
            toggles: [ ["E","auto4"] ]
        },
        18: {requirementDescription: "1e570 total E (19",
			unlocked(){ return player.Z.points.gte(11)},
            done() {return player[this.layer].total.gte('1e570') && player.Z.points.gte(11)}, 
            effectDescription: "unlock the final buyable.",
        },
        19: {requirementDescription: "1e666 total E (20",
			unlocked(){ return player.Z.points.gte(11)},
            done() {return player[this.layer].total.gte('1e666') && player.Z.points.gte(11)}, 
            effectDescription: "autobuy Eb10,E47 ^1.6.",
            toggles: [ ["E","auto5"] ]
        },
        20: {requirementDescription: "1e981 total E (21",
			unlocked(){ return player.Z.points.gte(11)},
            done() {return player[this.layer].total.gte('1e981') && player.Z.points.gte(11)}, 
            effectDescription: "x2024 E,unlock the next layer.",
        },
    },
    microtabs: {
        stuff: {       
            "Upgrades": {
                unlocked() {return true},
                content: [ "upgrades"]}, 
            "Buyables": {
                unlocked() {return (hasMilestone("E", 0))},
                content: [
                ["buyables",[1,2]]]},
            "Milestones": {
                unlocked() {return (hasUpgrade("E", 14))},
                content: ["milestones"]},
            "Challenges": {
                unlocked() {return (hasMilestone("E",2))},
                content: ["challenges"]},
            "Em": {
                unlocked() {return (hasMilestone("Z", 9))},
                content: [["display-text", () => "You have <h3 style='color: #789A89; text-shadow: 0 0 3px #c2b280'>" + format(player.E.Em) + "</h3> Em, mult E by <h3 style='color: #789A89; text-shadow: 0 0 3px #c2b280'> " + format(tmp.E.emf) + "x</h3>.<br>" + "<h4>" + format(tmp.E.Emeffect) + " Em/s<h4> <br>"],
                ["raw-html", () => `<h4 style="opacity:.5">welcome to first sub-currency.Em^0.25 mults E. </h4>`],
                ["buyables",[3]]]},
            "Ek": {
                unlocked() {return (hasMilestone("Z", 10))},
                content: [["display-text", () => "You have <h3 style='color: #177261; text-shadow: 0 0 3px #c2b280'>" + format(player.E.Ek) + "</h3> Ek, Bb scaling start <h3 style='color: #177261; text-shadow: 0 0 3px #c2b280'> " + format(tmp.E.ekf) + " </h3>later.<br>" + "<h4>" + format(tmp.E.Ekeffect) + " Ek/s<h4> <br>"],
                ["display-text", function() {if(upg('G',32)) return "Ek mults Bb5 base by <h3 style='color: #177261; text-shadow: 0 0 3px #c2b280'> " + format(tmp.E.ekf2) + " </h3>after upgrade G12.<br>" }],
                ["buyables",[4]]]},
        }
    },
    tabFormat: [
        "main-display",
        "prestige-button",
        ["microtabs", "stuff"],
        ["blank", "25px"],
    ],
    doReset(layer){
        if (layer=="F") {        
            let keep = []
            if (mil("F",1)) keep.push("milestones")
            if (mil("F",4)) keep.push("upgrades")
            if (mil("F",5)) keep.push("challenges")
            //if (hasMilestone("F",2)) player.E.challenges.push('11','12','21','22')
            //if (hasMilestone("F",2)) keep.push(chal)
            layerDataReset(this.layer, keep)}
        if (layer=="I") {        
            let keep = []
            if(gcs('I',12)) keep.push("challenges")
            if(gcs('I',14)) keep.push("upgrades")
            if(gcs('I',15)) keep.push("milestones")
            layerDataReset(this.layer, keep)}
    },
    autoUpgrade() {return (mil("F",3))},
    upgrades: {
        11: {
            title:'E1',
            description: function() {return '1e5x points \n\
                '+'<br>layer E total: '+ format(this.effect()) +'x'},
            effect()  { 
                let ef = 1e5
                if (hasUpgrade('E',15)) ef = ef*1e5
                if (hasUpgrade('E',33)) ef = ef*3e5
                if (hasUpgrade('E',51)) ef = ef*1e6
                if (hasUpgrade('E',53)) ef = ef*1e6
                if (hasUpgrade('E',55)) ef = ef*1e7
                if (hasUpgrade('E',65)) ef = ef*1e8
                ef=Decimal.pow(ef,buyableEffect("E",21))
                return ef;          
            },
            cost:new Decimal(1),
        },
        12: {
            title:'E2',
            description: "E boost points.",
            effect()  { 
                let ef = 1
                if (hasUpgrade('E',15)) ef = ef+0.5
                if (hasMilestone('E',1)) ef = ef+0.5
                if (hasUpgrade('E',44)) ef = ef*1.5
                if (inChallenge('E',11))  ef = 0
                return player[this.layer].points.add(1).pow(ef);          
            },
            cost:new Decimal(10),
            effectDisplay() { return format(this.effect())+"x" }, 
            unlocked() { return (hasUpgrade(this.layer, 11))},
        },
        13: {
            title:'E3',
            description: "boost to E base on D.",
            effect()  { 
                let ef = player.D.points.add(10).log(10).div(50).add(1)
                if (hasUpgrade('E',24)) ef = Decimal.pow(ef,1.5)
                if (hasUpgrade('E',63)) ef = Decimal.pow(ef,1.2)
                if (hasUpgrade('C',35)) ef = Decimal.pow(ef,1.2)
                return ef;
            },
            cost:new Decimal(30),
            unlocked() { return (hasUpgrade(this.layer, 12))},
            effectDisplay() { return format(this.effect())+"x" }, 
        },
        14: {
            title:'E4',
            description: "boost to E base on C.",
            effect()  { 
                let ef = player.C.points.add(10).log(10).div(200).add(1)
                if (hasUpgrade('E',25)) ef = Decimal.pow(ef,1.5)
                if (hasUpgrade('E',63)) ef = Decimal.pow(ef,1.2)
                if (hasUpgrade('C',35)) ef = Decimal.pow(ef,1.2)
                return ef;          
            },
            cost:new Decimal(80),
            effectDisplay() { return format(this.effect())+"x" }, 
            unlocked() { return (hasUpgrade(this.layer, 13))},
        },
        15: {
            title:'E5',
            description: "E2 ^1.5,1e5x points,x4 E.",
            cost:new Decimal(500),
            unlocked() { return (hasUpgrade(this.layer, 14))},
        },
        21: {
            title:'E6',
            description: "Eb1-2 base +1,x2 E.",
            cost:new Decimal(2000),
            unlocked() { return (hasUpgrade(this.layer, 15))},
        },
        22: {
            title:'E7',
            description: "E upg boost pts.<br>(e^3x).",
            cost:new Decimal(5000),
            effect()  { 
                let a=player.E.upgrades.length
                let ef = Decimal.pow(20.09,a)
                if (hasUpgrade('E',25)) ef = Decimal.pow(54.6,a)
                if (hasUpgrade('E',33)) ef = Decimal.pow(ef,1.5)
                if (hasUpgrade('E',84)) ef = Decimal.pow(ef,1.5)
                return ef;          
            },
            unlocked() { return (hasUpgrade(this.layer, 21))},
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, 
        },
        23: {
            title:'E8',
            description: "E upg boost E.<br>(1.2^x).",
            cost:new Decimal(10000),
            effect()  { 
                let bas=1.2
                let a=player.E.upgrades.length
                if (hasUpgrade('E',83)) bas = bas+0.15
                if (hasUpgrade('E',91)) bas = bas+0.15
                if (hasUpgrade('E',94)) bas = bas+0.1
                let efe8 = Decimal.pow(bas,a)
                return efe8;          
            },
            unlocked() { return (hasUpgrade(this.layer, 22))},
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, 
        },
        24: {
            title:'E9',
            description: "E3 ^1.5.",
            cost:new Decimal(3e4),
            unlocked() { return (hasUpgrade(this.layer, 23))},
        },
        25: {
            title:'E10',
            description: "E4 ^1.5,E7 becomes e^4x.",
            cost:new Decimal(8e4),
            unlocked() { return (hasUpgrade(this.layer, 24))},
        },
        31: {
            title:'E11',
            description: "B26 ^1.1.",
            cost:new Decimal(1e6),
            unlocked() { return  (challengeCompletions("E", 11) >= 1)},
        },
        32: {
            title:'E12',
            description: "boost to E base on B.",
            cost:new Decimal(2e6),
            effect()  { 
                let ef = player.B.points.add(10).log(10).div(300).add(1)
                if (hasMilestone('E',3)) ef = Decimal.pow(ef,1.5)
                if (hasUpgrade('E',63)) ef = Decimal.pow(ef,1.2)
                if (hasUpgrade('D',45)) ef = Decimal.pow(ef,1.2)
                return ef;          
            },
            effectDisplay() { return format(this.effect())+"x" }, 
            unlocked() { return (hasUpgrade(this.layer, 31))},
        },
        33: {
            title:'E13',
            description: "x3e5 pts,<br>E7 becomes e^6x.",
            cost:new Decimal(5e6),
            unlocked() { return (hasUpgrade(this.layer, 32))},
        },
        34: {
            title:'E14',
            description: "Bb5 is stronger.<br> (+20%)",
            cost:new Decimal(1e7),
            unlocked() { return (hasUpgrade(this.layer, 33))},
        },
        35: {
            title:'E15',
            description: "boost to E base on A.",
            cost:new Decimal(1e9),
            effect()  { 
                let ef = player.A.points.add(10).log(10).div(500).add(1)
                if (hasUpgrade('E',41)) ef = Decimal.pow(ef,1.5)
                if (hasUpgrade('E',63)) ef = Decimal.pow(ef,1.2)
                if (hasUpgrade('D',45)) ef = Decimal.pow(ef,1.2)
                return ef;          
            },
            effectDisplay() { return format(this.effect())+"x" }, 
            unlocked() { return (hasUpgrade(this.layer, 34))},
        },
        41: {
            title:'E16',
            description: "E15 ^1.5,x5 E.",
			cost(){
				return n(player.Z.points.gte(8)?1e13:5e14);
			},
            unlocked() { return  (challengeCompletions("E", 12) >= 1)},
        },
        42: {
            title:'E17',
            description: "Eb1-2 base +1,x2 E.",
			cost(){
				return n(player.Z.points.gte(8)?5e14:1e16);
			},
            unlocked() { return (hasUpgrade(this.layer, 41))},
        },
        43: {
            title:'E18',
            description: "Bb1-2 are cheaper.",
			cost(){
				return n(player.Z.points.gte(8)?5e16:2e17);
			},
            unlocked() { return (hasUpgrade(this.layer, 42))},
        },
        44: {
            title:'E19',
            description: "E2 ^1.5",
			cost(){
				return n(player.Z.points.gte(8)?1e19:3e26);
			},
            unlocked() { return (hasUpgrade(this.layer, 43))},
        },
        45: {
            title:'E20',
            description: "Bb5 is stronger.<br> (+10%)",
			cost(){
				return n(1e20);
			},
            unlocked() { return (hasUpgrade(this.layer, 44) && player.Z.points.gte(9))},
        },
        51: {
            title:'E21',
            description: "x1e6 pts.",
			cost(){
				return n(1e23);
			},
            unlocked() { return (hasUpgrade(this.layer, 45))},
        },
        52: {
            title:'E22',
            description: "Ac7 is stronger based on E.",
			cost(){
				return n(5e24);
			},
            effect()  { 
                let ef = player.E.points.add(10).log(10).pow(0.75).div(150).add(1)
                if (ef.gte(10)) {
                    if (hasUpgrade('F',81)) ef=Decimal.pow(ef,0.95).mul(Decimal.pow(10,0.05))
                    else ef=Decimal.pow(ef,0.85).mul(Decimal.pow(10,0.15))}
                if (hasUpgrade('E',74)) ef = ef.sub(1).mul(1.1).add(1)
                //ef=ef.toDecimal()
                return ef;          
            },
            unlocked() { return (hasUpgrade(this.layer, 51))},
            effectDisplay() { return '^'+format(this.effect()) }, 
        },
        53: {
            title:'E23',
            description: "Bb5 is stronger (+10%)<br>and x1e6 pts.",
			cost(){
				return n(1e25);
			},
            unlocked() { return (hasUpgrade(this.layer, 52))},
        },
        54: {
            title:'E24',
            description: "Eb1-3 are cheaper.",
			cost(){
				return n(player.Z.points.gte(10)?1e31:1e35);
			},
            unlocked() { return (hasUpgrade(this.layer, 53))},
        },
        55: {
            title:'E25',
            description: "x1e7 pts,add Eb1-2 base.",
			cost(){
				return n(player.Z.points.gte(10)?1e36:2e40);
			},
            effect()  { 
                let ef = Decimal.add(player.E.points,10).log(10).pow(0.8).div(50)
				if(player.Z.points.gte(9))ef = Decimal.add(player.E.points,10).log(10).div(40)
                return ef;          
            },
            effectDisplay() { return '+'+format(this.effect()) }, 
            unlocked() { return (hasUpgrade(this.layer, 54))},
        },
        61: {
            title:'E26',
            description: "Eb4 applies to C/D(nerfed,40%).",
			cost(){
				return n(player.Z.points.gte(10)?1e48:2e50);
			},
            unlocked() { return (hasMilestone(this.layer, 8))},
        },
        62: {
            title:'E27',
            description: "Bb5 is cheaper.",
			cost(){
				return n(player.Z.points.gte(10)?2e48:3e51);
			},
            unlocked() { return (hasUpgrade(this.layer, 61))},
        },
        63: {
            title:'E28',
            description: "E3/4/12/15 ^1.2.",
			cost(){
				return n(player.Z.points.gte(10)?1e49:5e52);
			},
            unlocked() { return (hasUpgrade(this.layer, 62))},
        },
        64: {
            title:'E29',
            description: "E26 +10%.<br>unlock new C/D upg.",
			cost(){
				return n(player.Z.points.gte(10)?1e53:2e55);
			},
            unlocked() { return (hasUpgrade(this.layer, 63))},
        },
        65: {
            title:'E30',
            description: "^1.004 B,1e8x pts.",
            cost:new Decimal('1e71'),
            unlocked() { return (hasMilestone(this.layer, 10))},
        },
        71: {
            title:'E31',
            description: "logEm mults E.",
            cost:new Decimal('1e79'),
            unlocked() { return (hasMilestone(this.layer, 11))},
            effect()  { 
                let ef = player.E.Em.add(10).log(10)
                if (hasUpgrade('E',81)) ef = Decimal.pow(ef,1.5)
                return ef;          
            },
            effectDisplay() { return format(this.effect())+"x" },
        },
        72: {
            title:'E32',
            description: "E26 +10%.",
            cost:new Decimal('1e85'),
            unlocked() { return (hasUpgrade(this.layer, 71) && player.Z.points.gte(10))},
        },
        73: {
            title:'E33',
            description: "Bb1-2 are cheaper.",
            cost:new Decimal('1e100'),
            unlocked() { return (hasUpgrade(this.layer, 72))},
        },
        74: {
            title:'E34',
            description: "E22 x1.1.",
            cost:new Decimal('5e89'),
            unlocked() { return (hasUpgrade(this.layer, 73) && player.Z.points.gte(11))},
        },
        75: {
            title:'E35',
            description: "C12/D17 base +0.1.",
            cost:new Decimal('1e94'),
            unlocked() { return (hasUpgrade(this.layer, 74))},
        },
        81: {
            title:'E36',
            description: "E31 ^1.5.",
            cost:new Decimal('1e97'),
            unlocked() { return (hasUpgrade(this.layer, 75))},
        },
        82: {
            title:'E37',
            description: "Em mults B.",
            effect()  { 
                let ef = 1
                return player.E.Em.add(1).pow(ef);          
            },
            cost:new Decimal('1e101'),
            effectDisplay() { return format(this.effect())+"x" }, 
            unlocked() { return (hasUpgrade(this.layer, 81))},
        },
        83: {
            title:'E38',
            description: "E8 base +0.15.",
            cost:new Decimal('1e107'),
            unlocked() { return (hasUpgrade(this.layer, 82))},
        },
        84: {
            title:'E39',
            description: "E7 ^1.5.",
            cost:new Decimal('1e117'),
            unlocked() { return (hasUpgrade(this.layer, 83))},
        },
        85: {
            title:'E40',
            cost:new Decimal('1e121'),            
            description: "Eb5-7 amt boost pts.<br>(1.7^x).",
            unlocked() { return (hasUpgrade(this.layer, 84))},
            effect()  { 
                let b=1.7
                let a=getBuyableAmount('E', 31).add(getBuyableAmount('E', 32)).add(getBuyableAmount('E', 33))
                let ef = Decimal.pow(b,a)
                return ef;          
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, 
        },
        91: {
            title:'E41',
            description: "E8 base +0.15.",
            cost:new Decimal('1e123'),
            unlocked() { return (hasUpgrade(this.layer, 85))},
        },
        92: {
            title:'E42',
            cost:new Decimal('5e130'),            
            description: "Eb5-7 amt boost B.<br>(1.3^x).",
            unlocked() { return (hasUpgrade(this.layer, 91))},
            effect()  { 
                let b=1.3
                let a=getBuyableAmount('E', 31).add(getBuyableAmount('E', 32)).add(getBuyableAmount('E', 33))
                if (hasUpgrade('E',93)) b=b+0.1
                let ef = Decimal.pow(b,a)
                return ef;          
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, 
        },
        93: {
            title:'E43',
            description: "Eb7 is cheaper,<br>E42 base +0.1.",
            cost:new Decimal('3e136'),
            unlocked() { return (hasUpgrade(this.layer, 92))},
        },
        94: {
            title:'E44',
            description: "Eb4 is cheaper,<br>E8 base +0.1.",
            cost:new Decimal('1e145'),
            unlocked() { return (hasUpgrade(this.layer, 93))},
        },
        95: {
            title:'E45',
            cost:new Decimal('1e157'),            
            description: "Eb5-7 amt boost C.(1.15^x)<br> Eb5 cost base -1.",
            unlocked() { return (hasUpgrade(this.layer, 94))},
            effect()  { 
                let b=1.15
                let a=getBuyableAmount('E', 31).add(getBuyableAmount('E', 32)).add(getBuyableAmount('E', 33))
                let ef = Decimal.pow(b,a)
                return ef;          
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, 
        },
        101: {
            title:'E46',
            description: "Ek eff mult +2.",
            cost:new Decimal('3e186'),
            unlocked() { return (challengeCompletions('E',31)>=3 && player.Z.points.gte(11))},
        },
        102: {
            title:'E47',
            description: "Ek mults E.",
            effect()  { 
                let ef = player.E.Ek.add(10).log(10).pow(2)
                if (hasMilestone('E',19)) ef=Decimal.pow(ef,1.6)
                return ef;          
            },
            cost:new Decimal('1e197'),
            effectDisplay() { return format(this.effect())+"x" }, 
            unlocked() { return (hasUpgrade(this.layer, 101))},
        },
        103: {
            title:'E48',
            description: "Em eff exp +0.03,nerf Bb scaling and Eb1-3 cost.",
            cost:new Decimal('2e222'),
            unlocked() { return (hasUpgrade(this.layer, 102))},
        },
        104: {
            title:'E49',
            description: "Ek^1.5 mult pts,Eb6/9 base +0.25,Eb7 base +1,Ec8 eff x1.2,Eb1-4 scaling are 10 later.",
            effect()  { 
                let ef = player.E.Ek.max(1).pow(1.5)
                return ef;          
            },
            cost:new Decimal('1e328'),
            effectDisplay() { return format(this.effect())+"x" }, 
            unlocked() { return (hasUpgrade(this.layer, 103))},
        },
        105: {
            title:'E50',
            description: "Em^1.01,Eb7 base +1,B26 ^1.05.",
            cost:new Decimal('1e483'),
            unlocked() { return (hasUpgrade(this.layer, 104))},
        },
    },
    automate(){
        if (player.E.auto1)  buyBuyable("E",11),buyBuyable("E",12),buyBuyable("E",13)
        if (player.E.auto2)  buyBuyable("E",21)
        if (player.E.auto3)  buyBuyable("E",31),buyBuyable("E",32),buyBuyable("E",33)
        if (player.E.auto4)  buyBuyable("E",41),buyBuyable("E",42)
        if (player.E.auto5)  buyBuyable("E",22)
    },
    buyables:{
        11: {
            title: "Eb1", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = Decimal.pow(2, x.pow(1.1)).times(1000)
				if (hasUpgrade('E',54)) cost = Decimal.pow(2, x.pow(1.1))/*
                let sc=40
                if (hasUpgrade('E',104)) sc=Decimal.add(sc,10)
                if (hasUpgrade('F',22)) sc=Decimal.add(sc,5)
                let t=80
                let p=0.3
                if (x.gte(sc))  cost =Decimal.pow(cost,x.sub(sc).div(t).add(1).pow(p)) 
                if (hasUpgrade('E',54)) cost = Decimal.pow(cost, 0.985)
                if (hasUpgrade('E',103)) cost = Decimal.pow(cost, 0.99)
                if (hasChallenge('E',41)) cost = Decimal.pow(cost, challengeEffect('E',41))*/
                return cost},
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   let bas = 5
                if (hasUpgrade('E',21)) bas = Decimal.add(bas,1)
                if (hasUpgrade('E',42)) bas = Decimal.add(bas,1)
                if (hasUpgrade('F',14)) bas = Decimal.add(bas,0.3)
                if (hasUpgrade('E',55)) bas = Decimal.add(bas,upgradeEffect('E',55))
                if (hasMilestone('E',18)) bas = Decimal.add(bas,buyableEffect('E',22))
                if (hasUpgrade('F',81)) bas = Decimal.mul(bas,upgradeEffect('F',81))
                if (hasUpgrade('G',21)) bas = Decimal.mul(bas,upgradeEffect('G',21)[1])
                if (hasUpgrade('F',65)) bas = Decimal.pow(bas,upgradeEffect('F',65))
                if (inChallenge('E',21)) bas = 2
                return bas},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let ef = Decimal.pow(this.base(),x)
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "give A a x"+ format(this.base()) + " mult \n\
                Cost: " + format(this.cost()) + " E \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: x" + format(this.effect()) + " A" },
            unlocked() { return hasMilestone('E',0) }
        },
        12: {
            title: "Eb2", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = Decimal.pow(3, x.pow(1.1)).times(1000)
				if (hasUpgrade('E',54)) cost = Decimal.pow(3, x.pow(1.1))   /*             
                let sc=40
                if (hasUpgrade('E',104)) sc=Decimal.add(sc,10)
                if (hasUpgrade('F',22)) sc=Decimal.add(sc,5)
                let t=80
                let p=0.3
                if (x.gte(sc))  cost =Decimal.pow(cost,x.sub(sc).div(t).add(1).pow(p))                
                if (hasUpgrade('E',54)) cost = Decimal.pow(cost, 0.985)
                if (hasUpgrade('E',103)) cost = Decimal.pow(cost, 0.99)
                if (hasChallenge('E',41)) cost = Decimal.pow(cost, challengeEffect('E',41))*/
                return cost},
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   let bas = 5
                if (hasUpgrade('E',21)) bas = Decimal.add(bas,1)
                if (hasUpgrade('E',42)) bas = Decimal.add(bas,1)
                if (hasUpgrade('F',14)) bas = Decimal.add(bas,0.3)
                if (hasUpgrade('E',55)) bas = Decimal.add(bas,upgradeEffect('E',55))
                if (hasMilestone('E',18)) bas = Decimal.add(bas,buyableEffect('E',22))
                if (hasUpgrade('F',81)) bas = Decimal.mul(bas,upgradeEffect('F',81))
                if (hasUpgrade('G',21)) bas = Decimal.mul(bas,Decimal.pow(buyableEffect('E',22),0.25))
                if (hasUpgrade('F',65)) bas = Decimal.pow(bas,upgradeEffect('F',65))
                if (inChallenge('E',21)) bas = 2
                return bas},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let efeb2 = Decimal.pow(this.base(),x)
                return efeb2},
            display() { // Everything else displayed in the buyable button after the title
                return "give B a x"+ format(this.base()) + " mult \n\
                Cost: " + format(this.cost()) + " E \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: x" + format(this.effect()) + " B" },
            unlocked() { return player[this.layer].total.gte('4000') }
        },
        13: {
            title: "Eb3", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = Decimal.pow(5, x.pow(1.1)).times(40000)
				if (hasUpgrade('E',54)) cost = Decimal.pow(5, x.pow(1.1))/*
                let sc=40
                if (hasUpgrade('E',104)) sc=Decimal.add(sc,10)
                if (hasUpgrade('F',22)) sc=Decimal.add(sc,5)
                let t=80
                let p=0.3
                if (x.gte(sc))  cost =Decimal.pow(cost,x.sub(sc).div(t).add(1).pow(p))    
                if (hasUpgrade('E',54)) cost = Decimal.pow(cost, 0.985)
                if (hasUpgrade('E',103)) cost = Decimal.pow(cost, 0.99)
                if (hasChallenge('E',41)) cost = Decimal.pow(cost, challengeEffect('E',41))*/
                return cost},
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   let bas = 5               
                if (hasMilestone('E',5)) bas = Decimal.add(bas,1)
                if (hasUpgrade('F',14)) bas = Decimal.add(bas,0.3)
                if (hasMilestone('E',18)) bas = Decimal.add(bas,buyableEffect('E',22))
                if (hasUpgrade('F',81)) bas = Decimal.add(bas,upgradeEffect('E',55))
                if (hasUpgrade('F',81)) bas = Decimal.mul(bas,upgradeEffect('F',81))
                if (hasUpgrade('G',21)) bas = Decimal.mul(bas,Decimal.pow(buyableEffect('E',22),0.25))
                if (hasUpgrade('F',65)) bas = Decimal.pow(bas,upgradeEffect('F',65))
                return bas},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let ef = Decimal.pow(this.base(),x)
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "give C/D a x"+ format(this.base()) + " mult \n\
                Cost: " + format(this.cost()) + " E \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: x" + format(this.effect()) + " C/D" },
            unlocked() { return hasMilestone('E',1) }
        },
        21: {
            title: "Eb4", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = Decimal.pow(25, x.pow(1.1)).times(1e33)
				if(hasMilestone('Z',9))cost = Decimal.pow(25, x.pow(1.1)).times(1e31)
				if(hasUpgrade('C',34))cost = cost.div(1e11)/*
                if (hasUpgrade('E',94)) cost =Decimal.pow(25, x.pow(1.09)).times('1e29')
                let sc=40
                if (hasUpgrade('E',104)) sc=Decimal.add(sc,10)
                if (hasUpgrade('F',22)) sc=Decimal.add(sc,5)
                let t=80
                let p=0.3
                if (x.gte(sc))  cost =Decimal.pow(cost,x.sub(sc).div(t).add(1).pow(p))               
                if (hasUpgrade('C',34)) cost =Decimal.pow(cost,0.98)
                if (hasChallenge('E',41)) cost = Decimal.pow(cost, challengeEffect('E',41))*/
                return cost},
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let ef = Decimal.pow(x.div(1.6).add(1),0.6).div(5).add(0.8)
                if (hasUpgrade('F',22)) ef=Decimal.mul(ef.sub(1),1.1).add(1)
                if (hasUpgrade('F',23)) ef=Decimal.mul(ef.sub(1),1.1).add(1)
                if (hasUpgrade('F',35)) ef =Decimal.mul(ef.sub(1),1.08).add(1)

                if (inChallenge('E',31)) ef = n(1)
                if (inChallenge('E',41)) ef = Decimal.mul(ef.sub(1),0.4).add(1)
                if (inChallenge('E',42)) ef = n(1)
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "boost to E's pts mult(exp) \n\
                Cost: " + format(this.cost()) + " E \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: ^" + format(this.effect())},
            unlocked() { return hasMilestone('E',5) }
        },
        31: {
            title: "Eb5", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = Decimal.pow(2, x.pow(1.2)).times('1e30')
                return cost
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            //purchaseLimit() {return n('1e300')},
            base(){   let base = 2               
                return base},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let ef = Decimal.pow(this.base(),x)
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "give Em a x"+ format(this.base()) + " mult \n\
                Cost: " + format(this.cost()) + " E \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: x" + format(this.effect())},
            unlocked() { return hasMilestone('Z',9) }
        },
        32: {
            title: "Eb6", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = Decimal.pow(5, x.pow(1.2)).times('1e34')
                return cost
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   let base = 2      
                if (hasChallenge("E", 32))  base = Decimal.add(base,challengeEffect('E',32)) 
                if (hasUpgrade("E", 104))  base = Decimal.add(base,0.25)                 
                return base},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let ef = Decimal.pow(this.base(),x)
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "give Em a x"+ format(this.base()) + " mult \n\
                Cost: " + format(this.cost()) + " E \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: x" + format(this.effect())},
            unlocked() { return hasMilestone('Z',9) }
        },
        33: {
            title: "Eb7", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = Decimal.pow(10, x.pow(1.2)).times('1e38')
                return cost
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   let base = 10             
                if (hasChallenge("E", 32))  base = Decimal.add(base,challengeEffect('E',32))  
                if (hasUpgrade("E", 104))  base = Decimal.add(base,1)
                if (hasUpgrade("E", 105))  base = Decimal.add(base,1)  
                if (hasUpgrade("F", 14))  base = Decimal.add(base,1)                                                                                              
                return base},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let ef = Decimal.pow(this.base(),x)
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "give Em a x"+ format(this.base()) + " mult \n\
                Cost: " + format(this.cost()) + " E \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: x" + format(this.effect())},
            unlocked() { return hasMilestone('Z',9) }
        },
        41: {
            title: "Eb8", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = Decimal.pow(10, x).times('1e170')
                return cost
            },
            purchaseLimit() {let lim=n(20000)
                if (hasUpgrade('F',45))  lim=Decimal.add(lim,upgradeEffect('F',45)).min('ee300')
                return lim},
            canAfford() { if (getBuyableAmount(this.layer, this.id).gte(this.purchaseLimit())) return false
                return player[this.layer].points.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   let base = 2               
                return base},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let ef = Decimal.pow(this.base(),x)
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "give Ek a x"+ format(this.base()) + " mult \n\
                Eb8's factor/cost multiplier are fixed. \n\
                for balance,Eb8 is hardcapped at "+format(this.purchaseLimit())+" purchases\n\
                Cost: " + format(this.cost()) + " E \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: x" + format(this.effect())},
            unlocked() { return hasMilestone('E',11) }
        },
        42: {
            title: "Eb9", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = Decimal.pow(6, x.pow(1.03)).times('1e180')
                return cost
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            base(){   let base = 2      
                if (hasUpgrade("E", 104))  base = Decimal.add(base,0.25)                 
                return base},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let ef = Decimal.pow(this.base(),x.pow(1.008))
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "give Ek a x"+ format(this.base()) + " mult \n\
                Cost: " + format(this.cost()) + " E \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: x" + format(this.effect())},
            unlocked() { return hasMilestone('E',15) }
        },
        22: {
            title: "Eb10", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = Decimal.pow(1e6, x.pow(1.4)).times('1e570')
                if (hasMilestone('F',12)) cost=Decimal.pow(3e5, x.pow(1.38)).times('1e570')
                let sc=40
                if (hasUpgrade('F',22)) sc=Decimal.add(sc,5)
                let p=0.3
                let t=80
                if (x.gte(sc)) cost =Decimal.pow(cost,x.sub(sc).div(t).add(1).pow(p))
                return cost
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            bulk() { 
                let tar=tmp.E.bulk
                let c = this.cost(getBuyableAmount(this.layer, this.id).add(tar))
                if (player[this.layer].points.gte(c)) player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(tar)},
            buy() {setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let ef = Decimal.pow(x.div(6).add(1),0.7).sub(1)
                if (hasUpgrade('G',22)) ef=Decimal.pow(ef,upgradeEffect('G',22)) 
                ef=Decimal.mul(ef,buyableEffect('G',13))
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "boost Eb1-3 base \n\
                Cost: " + format(this.cost()) + " E \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: +" + format(this.effect())},
            unlocked() { return hasMilestone('E',18) }
        },
    },
    bulk(){
        let tar=1
        if (hasUpgrade('F', 25)) tar=Decimal.mul(tar,10)
        if (hasUpgrade('F', 34)) tar=Decimal.mul(tar,5)
        if (hasUpgrade('F', 62)) tar=Decimal.mul(tar,3)
        if (hasUpgrade('F', 64)) tar=Decimal.mul(tar,3)
        if (hasMilestone('F', 16)) tar=Decimal.mul(tar,10)
        if (hasUpgrade('G', 14)) tar=Decimal.mul(tar,10)
        if (hasUpgrade('G', 23)) tar=Decimal.mul(tar,10)
        if (hasMilestone('G',2)) tar=Decimal.mul(tar,10)
        if (hasMilestone('F',17)) tar=Decimal.mul(tar,Decimal.mul(5,player.G.total.add(10).log(10)))
        return tar 
    },
    challenges: {
        11: {//11 after E10,12 E13,13 E15
        name: "Ec1",
        completionLimit: 3,
        challengeDescription: function() {
            return "C3/D5/E2 are disabled. <br> Completion: " +challengeCompletions("E", 11) + "/3"},
        unlocked() { return (hasMilestone("E", 2))},
        goal(){
            if (challengeCompletions('E',11) == 0) return Decimal.pow(10,player.Z.points.gte(9)?2500:2610);
            if (challengeCompletions('E',11) == 1) return Decimal.pow(10,player.Z.points.gte(9)?3000:player.Z.points.gte(8)?3380:3560);
            if (challengeCompletions('E',11) == 2) return Decimal.pow(10,player.Z.points.gte(9)?3080:player.Z.points.gte(8)?3540:7150);
        },            
        goalDescription:  function() {return format(this.goal())+' points'},
        canComplete(){return player.points.gte(this.goal())},
        rewardDescription: "boost to E base on Eb1-2.",
        rewardEffect() {
            let bas = Decimal.pow(challengeCompletions("E", 11),1.3)
            let ef1 = Decimal.pow(buyableEffect('E',11),0.04+bas/100)
            let ef2 = Decimal.pow(buyableEffect('E',12),0.04+bas/75)
            let ef = Decimal.mul(ef1,ef2)
            //if (challengeCompletions("E", 11) >= 3)  ef=Decimal.mul(ef,100)
            if (challengeCompletions("E", 11) >= 1)  return ef
            else return new Decimal(1)
        },
        rewardDisplay() {return format(this.rewardEffect())+"x"},
        },
        12: {//21 after E15,22 E17,23 E19
            name: "Ec2",
            completionLimit: 3,
            challengeDescription: function() {
                return "Bb1-2's base are stuck at 2. <br> Completion: " +challengeCompletions("E", 12) + "/3"},
            unlocked() { return (hasMilestone("E", 3))},
            goal(){
                if (challengeCompletions('E',12) == 0) return Decimal.pow(10,player.Z.points.gte(9)?3150:player.Z.points.gte(8)?3590:4320);
                if (challengeCompletions('E',12) == 1) return Decimal.pow(10,player.Z.points.gte(9)?3300:player.Z.points.gte(8)?4300:8850);
                if (challengeCompletions('E',12) == 2) return Decimal.pow(10,player.Z.points.gte(9)?3600:player.Z.points.gte(8)?4420:9860);
            },            
            goalDescription:  function() {return format(this.goal())+' points'},
            canComplete(){return player.points.gte(this.goal())},
            rewardDescription: "boost to E base on Eb3.",
            rewardEffect() {
                let bas = Decimal.pow(challengeCompletions("E", 12),1.35)
                let ef = Decimal.pow(buyableEffect('E',13),0.05+bas/100)
                //if (challengeCompletions("E", 12) >= 3)  ef=Decimal.mul(ef,100)
                if (challengeCompletions("E", 12) >= 1)  return ef
                else return new Decimal(1)
            },
            rewardDisplay() {return format(this.rewardEffect())+"x"},
        },
        21: {//31 after 1e45
            name: "Ec3",
            completionLimit: 3,
            challengeDescription: function() {
                return "Eb1-2's base are stuck at 2. <br> Completion: " +challengeCompletions("E", 21) + "/3"},
            unlocked() { return (hasMilestone("E", 7))},
            goal(){
                if (challengeCompletions('E',21) == 0) return Decimal.pow(10,player.Z.points.gte(10)?9100:11400);
                if (challengeCompletions('E',21) == 1) return Decimal.pow(10,player.Z.points.gte(10)?9500:12345);
                if (challengeCompletions('E',21) == 2) return Decimal.pow(10,player.Z.points.gte(10)?9800:12870);
            },            
            goalDescription:  function() {return format(this.goal())+' points'},
            canComplete(){return player.points.gte(this.goal())},
            rewardDescription: "boost to pts base on A-B pts upg.",
            rewardEffect() {
                let b = Decimal.pow(challengeCompletions("E", 21),1.35)
                let ef1 = Decimal.pow(upgradeEffect('A',11),0.06+b/60)
                let ef2 = Decimal.pow(upgradeEffect('B',11),0.06+b/60)
                let ef=Decimal.mul(ef1,ef2)
                if (challengeCompletions("E", 21) >= 1)  return ef
                else return new Decimal(1)
            },
            rewardDisplay() {return format(this.rewardEffect())+"x"},
        },
        22: {//41 after 1e47
            name: "Ec4",
            completionLimit: 3,
            challengeDescription: function() {
                return "nerf pts based on pts. <br> Completion: " +challengeCompletions("E", 22) + "/3 <br> currently: ^"+format(this.nerf(),6)},
            unlocked() { return (hasMilestone("E", 7))},
            goal(){
                if (challengeCompletions('E',22) == 0) return Decimal.pow(10,player.Z.points.gte(10)?7000:9000);
                if (challengeCompletions('E',22) == 1) return Decimal.pow(10,player.Z.points.gte(10)?7200:9500);
                if (challengeCompletions('E',22) == 2) return Decimal.pow(10,player.Z.points.gte(10)?7400:10000);
            },
            nerf() { return player.points.add(10).log(10).pow(-0.06).max('1e-100')},            
            goalDescription:  function() {return format(this.goal())+' points'},
            canComplete(){return player.points.gte(this.goal())},
            rewardDescription: "boost to pts base on C-D pts upg.",
            rewardEffect() {
                let b = Decimal.pow(challengeCompletions("E", 22),1.35)
                let ef1 = Decimal.pow(upgradeEffect('C',11),0.08+b/40)
                let ef2 = Decimal.pow(upgradeEffect('D',11),0.08+b/40)
                let ef=Decimal.mul(ef1,ef2)
                if (challengeCompletions("E", 22) >= 1)  return ef
                else return new Decimal(1)
            },
            rewardDisplay() {return format(this.rewardEffect())+"x"},
        },
        31: {//51
            name: "Ec5",
            completionLimit: 5,
            challengeDescription: function() {
                return "Bb1-2's base are stuck at 1.2,Bb3-4,Eb4 is disabled. <br> Completion: " +challengeCompletions("E", 31) + "/5"},
            unlocked() { return (hasMilestone("E", 14))},
            goal(){
                if (challengeCompletions('E',31) == 0) return Decimal.pow(10,22500);
                if (challengeCompletions('E',31) == 1) return Decimal.pow(10,24000);
                if (challengeCompletions('E',31) == 2) return Decimal.pow(10,27300);
                if (challengeCompletions('E',31) == 3) return Decimal.pow(10,48800);
                if (challengeCompletions('E',31) == 4) return Decimal.pow(10,50600);
            },            
            goalDescription:  function() {return format(this.goal())+' points'},
            canComplete(){return player.points.gte(this.goal())},
            rewardDescription: "Bb1-5 are cheaper.",
            rewardEffect() {
                return Decimal.pow(1e10,challengeCompletions("E", 31));
            },
            rewardDisplay() {return "/"+format(this.rewardEffect(),4)+(player.Z.points.gte(11)?'<br> \n\
                unlock new upg at 3 comp':"")},
        },
        32: {//61
            name: "Ec6",
            completionLimit: 5,
            challengeDescription: function() {
                return "nerf pts based on Em. <br> Completion: " +challengeCompletions("E", 32) + "/5 <br> currently: ^"+format(this.nerf(),6)},
            unlocked() { return (hasMilestone("E", 14))},
            goal(){
                if (challengeCompletions('E',32) == 0) return Decimal.pow(10,13200);
                if (challengeCompletions('E',32) == 1) return Decimal.pow(10,13700);
                if (challengeCompletions('E',32) == 2) return Decimal.pow(10,14850);
                if (challengeCompletions('E',32) == 3) return Decimal.pow(10,20000);
                if (challengeCompletions('E',32) == 4) return Decimal.pow(10,25850);
            },      
            nerf() { return player.E.Em.add(10).log(10).pow(-0.2).max('1e-100')},       
            goalDescription:  function() {return format(this.goal())+' points'},
            canComplete(){return player.points.gte(this.goal())},
            rewardDescription: "Ec6 comp add to Eb6-7 base.",
            rewardEffect() {
                //let t=Decimal.mul(challengeCompletions("E", 31),0.0025)
                let ef=(challengeCompletions("E", 32))*0.2
                if (hasUpgrade('F',24)) ef=Decimal.mul(ef,1.5)
                if (challengeCompletions("E", 32) >= 1)  return ef
                else return new Decimal(0)
            },
            rewardDisplay() {return '+'+format(this.rewardEffect())},
        },
        41: {//71
            name: "Ec7",
            completionLimit: 5,
            challengeDescription: function() {
                return "Bb scaling starts 300 earlier, Bb5/Eb4 x0.4. <br> Completion: " +challengeCompletions("E", 41) + "/5"},
            unlocked() { return (hasMilestone("E", 16))},
            goal(){
                if (challengeCompletions('E',41) == 0) return Decimal.pow(10,36300);
                if (challengeCompletions('E',41) == 1) return Decimal.pow(10,60250);//60400
                if (challengeCompletions('E',41) == 2) return Decimal.pow(10,66600);
                if (challengeCompletions('E',41) == 3) return Decimal.pow(10,84800);
                if (challengeCompletions('E',41) == 4) return Decimal.pow(10,106500);
            },            
            goalDescription:  function() {return format(this.goal())+' points'},
            canComplete(){return player.points.gte(this.goal())},
            rewardDescription: "Eb1-4 are cheaper(-0.006 exp per comp).",
            rewardEffect() {
                //let t=Decimal.mul(challengeCompletions("E", 31),0.0025)
                let t=(challengeCompletions("E", 41))*0.006
                //t=t.toNumber().toFixed(3)
                let ef=new Decimal(1).sub(t)
                if (challengeCompletions("E", 41) >= 1)  return ef
                else return new Decimal(1)
            },
            rewardDisplay() {return "^"+format(this.rewardEffect(),3)+', after scaling.'},
        },
        42: {//7,8 aft 53,63.then 71 81 64 54 72 55 82 73 65 83 74 84 75 85
            name: "Ec8",
            completionLimit: 5,
            challengeDescription: function() {
                return "nerf pts based on pts(stronger),Bb3-5/Eb4/Em/Ek are disabled. <br> Completion: " +challengeCompletions("E", 42) + "/5 <br> currently: ^"+format(this.nerf(),6)},
            unlocked() { return (hasMilestone("E", 16))},
            goal(){
                if (challengeCompletions('E',42) == 0) return Decimal.pow(10,29800);
                if (challengeCompletions('E',42) == 1) return Decimal.pow(10,50200);
                if (challengeCompletions('E',42) == 2) return Decimal.pow(10,60100);
                if (challengeCompletions('E',42) == 3) return Decimal.pow(10,69870);
                if (challengeCompletions('E',42) == 4) return Decimal.pow(10,88000);
            },
            nerf() { return player.points.add(10).log(10).pow(-0.12).max('1e-100')},            
            goalDescription:  function() {return format(this.goal())+' points'},
            canComplete(){return player.points.gte(this.goal())},
            rewardDescription: "boost to Em/Ek eff.",
            rewardEffect() {
                let ef=challengeCompletions("E", 42)
                if (hasUpgrade('E',104)) ef=Decimal.mul(ef,1.2)
                if (hasUpgrade('F',24)) ef=Decimal.mul(ef,1.1)
                if (challengeCompletions("E", 42) >= 1)  return ef
                else return new Decimal(0)
            },
            rewardDisplay() {return 'Em:+'+format(this.rewardEffect()/100)+' exp,\n\
                Ek:+'+format(this.rewardEffect()/2)+' mul'},
        },
    },
    Emeffect() {
        ef = new Decimal(1)
        ef=Decimal.mul(ef,(buyableEffect("E", 31)))
        ef=Decimal.mul(ef,(buyableEffect("E", 32)))
            ef=Decimal.mul(ef,(buyableEffect("E", 33)))
        if (hasUpgrade('E',105)) ef=Decimal.pow(ef,1.01)
        return ef;
    },
    emf() {
        let exp=0.25
        if (hasMilestone('E',12))  exp=Decimal.add(exp,0.02)
        if (hasUpgrade('E',103))  exp=Decimal.add(exp,0.03)  
        if (hasChallenge('E', 42))  exp = Decimal.add(exp,challengeEffect('E',42)/100)   
        if (inChallenge('E',42)) exp=0           
        let ef=player.E.Em.max(1).pow(exp)
        return ef
    },
    Ekeffect() {
        ef = new Decimal(1)
        if (hasMilestone("E", 15)) ef=Decimal.mul(ef,(buyableEffect("E", 41)))
            ef=Decimal.mul(ef,(buyableEffect("E", 42)))
        return ef;
    },
    ekf() {
        let m=3
        let p=0.85
        let scp=0.06
        if (hasUpgrade('E',101))  m=Decimal.add(m,2)  
        if (hasChallenge('E', 42))  m=Decimal.add(m,challengeEffect('E',42)*0.5)    
        if (hasUpgrade('F',34))  m=Decimal.add(m,0.4)  
        if (hasUpgrade('G',21))  m=Decimal.add(m,2)  
        if (inChallenge('E',42)) m=0 
        if (hasUpgrade('F',34))  scp=Decimal.add(scp,-0.015)  
        if (hasUpgrade('G',21))  scp=Decimal.add(scp,-0.02)  
        if (hasUpgrade('G',22))  scp=Decimal.add(scp,-0.02)  
        if (hasUpgrade('G',23))  scp=n(0)  
        if (player.E.Ek.gte('1e5000')) p=p/(player.E.Ek.log(10).div(5000).pow(scp))             
        let ef=player.E.Ek.add(1).log(10).pow(p).mul(m)
        return ef
    },
    ekf2(){
        let ef=player.E.Ek.add(1).log(10).pow(0.12)
        return ef
    },
    update(diff) {
        if (hasMilestone("Z", 9))  player.E.Em = player.E.Em.add(tmp.E.Emeffect.mul(diff))
        if (hasMilestone("Z", 10))  player.E.Ek = player.E.Ek.add(tmp.E.Ekeffect.mul(diff))
    },
})