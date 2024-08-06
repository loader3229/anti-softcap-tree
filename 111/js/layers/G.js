addLayer("G", {
    name: "G", 
    symbol: "G", 
    position: 2, 
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        Gc1p: new Decimal(0),
        Gc2p: new Decimal(0),
        Gc3p: new Decimal(0),
        Gc4p: new Decimal(0),
    }},
    //resetsNothing(){return hasMilestone('F',13)},
    //passiveGeneration(){    let pg=0
    //    if (hasMilestone("F", 9)) pg=Decimal.add(pg,0.02)
    //    return pg},
    color: "#695735",
    requires: new Decimal('1e560'), 
    resource: "G", 
    baseResource: "F1", 
    baseAmount() {return player.F.F1}, 
    type: "normal", 
    exponent: 0.01, 
    gainExp() {return new Decimal(1)},
    row: 3, 
    hotkeys: [
        {key: "g", description: "G: Reset for G points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){  if (player[this.layer].unlocked) return true
    else return (hasUpgrade("F", 65))},
    gainMult() { 
        mult = new Decimal(1)
        mult=Decimal.mul(mult,buyableEffect('G',11))
        if (hasUpgrade('F',71))  mult=Decimal.mul(mult,upgradeEffect('F',72))
        if (hasUpgrade('F',74))  mult=Decimal.mul(mult,upgradeEffect('F',74)[1])
        mult=Decimal.mul(mult,tmp.G.gc2ef)
        return mult
    },
    branches: ['F'],
    milestones: {
        0: {requirementDescription: "30 total G",
            done() {return player[this.layer].total.gte('30')}, 
            effectDescription: "autobuy tickboost,buy max tickspeed.",
            toggles: [ ["F","auto"] ]
        },
        1: {requirementDescription: "300 total G",
            done() {return player[this.layer].total.gte('300')}, 
            effectDescription: "tickboost resets nothing.",
        },
        2: {requirementDescription: "2e4 total G",
            done() {return player[this.layer].total.gte('2e4')}, 
            effectDescription: "unlock a chal,G4/6/8 are stronger.",
        },
        3: {requirementDescription: "1e9 total G",
            done() {return player[this.layer].total.gte('1e9')}, 
            effectDescription: "buy max dims.",
        },
        4: {requirementDescription: "1e160 total G",
            done() {return player[this.layer].total.gte('1e160')}, 
            effectDescription: "autobuy Gb1-3.",
            toggles: [ ["G","auto"] ]
        },
        5: {requirementDescription: "1e800 total G",
            done() {return player[this.layer].total.gte('1e800')}, 
            effectDescription: "unlock another chal,buff F1 eff.",
        },
        6: {requirementDescription: "1e40000 total G",
            done() {return player[this.layer].total.gte('1e40000')}, 
            effectDescription: "edit Gb cost and buy max Gbs.",
        },
        7: {requirementDescription: "e9.25e6 total G",
            done() {return player[this.layer].total.gte('e9.25e6')}, 
            effectDescription: "G6 and Gc3p is stronger,unlock another chal.",
        },
    },
    microtabs: {
        stuff: {       
            "Upgrades": {
                unlocked() {return true},
                content: [ ["raw-html", () => `<h4 style="opacity:.5">get G when reach 'infinity' F1<br>(like AD,but not 2^1024).</h4>`],"upgrades"]}, 
            "Milestones": {
                unlocked() {return true},
                content: ["milestones"]},
            "Buyables": {
                unlocked() {return (hasUpgrade("G", 25))},
                content: [["raw-html", () => `<h4 style="opacity:.5">like Eb,Gb dont spend G.</h4>`],
                "buyables"]},
            "Challenges": {
                unlocked() {return (hasMilestone("G",2))},
                content: [["raw-html", () => `<h4 style="opacity:.5">G chal is about F dim,dont decrease main game production.</h4>`],"challenges"]},
            "Gc powers": {
                unlocked() {return (challengeCompletions("G", 11)>=3)},
                content: [["display-text", () => "You have <h3 style='color: #694444; text-shadow: 0 0 2px #c2b280'>" + format(player.G.Gc1p) + "</h3> Gc1p, mult F dims by <h3 style='color: #694444; text-shadow: 0 0 2px #c2b280'> " + format(tmp.G.gc1ef) + "x</h3>.<br>" + "<h4>" + format(tmp.G.gc1g) + " Gc1p/s (need 1e1080 F1 in Gc1)<h4>"],
                ["display-text", () => "You have <h3 style='color: #913423; text-shadow: 0 0 2px #c2b280'>" + format(player.G.Gc2p) + "</h3> Gc2p, mult G by <h3 style='color: #913423; text-shadow: 0 0 2px #c2b280'> " + format(tmp.G.gc2ef) + "x</h3>.<br>" + "<h4>" + format(tmp.G.gc2g) + " Gc2p/s (need 1e3050 F1 in Gc2)<h4>"],
                ["display-text", () => "You have <h3 style='color: #72FF89; text-shadow: 0 0 2px #c2b280'>" + format(player.G.Gc3p) + "</h3> Gc3p, Fd8 mult per buy is x<h3 style='color: #72FF89; text-shadow: 0 0 2px #c2b280'>" + format(tmp.G.gc3ef) + " </h3>bigger.<br>" + "<h4>" + format(tmp.G.gc3g) + " Gc3p/s (need 1e168000 F1 in Gc3)<h4>"],
                ["display-text", () => "You have <h3 style='color: #D78903; text-shadow: 0 0 2px #c2b280'>" + format(player.G.Gc4p) + "</h3> Gc4p, dim mult per buy +<h3 style='color: #D78903; text-shadow: 0 0 2px #c2b280'>" + format(tmp.G.gc4ef,4) + " </h3>.<br>" + "<h4>" + format(tmp.G.gc4g) + " Gc4p/s (need e2.35e9 F1 in Gc4)<h4>"],]},
            }                                                                                                                                                                                                                                                                                                                           //for convenience             
    },                                                                                                                                                                                                                                                                                                                                                 //for convenience
    softcap(){return new Decimal(Infinity)},
	softcapPower(){return new Decimal(1)},
    tabFormat: [
        "main-display",
        "prestige-button",
        ["microtabs", "stuff"],
        ["blank", "25px"],
    ],
    upgrades: {
        11: {
            title:'G1',
            description: "all F dim x2.",         
            cost:new Decimal(1),
        },
        12: {
            title:'G2',
            description: "F dim mult per buy +0.1.",         
            cost:new Decimal(1),
            unlocked() { return (hasUpgrade(this.layer, 11))},
        },
        13: {
            title:'G3',
            description: "F dim scaling exp -0.1.",         
            cost:new Decimal(1),
            unlocked() { return (hasUpgrade(this.layer, 12))},
        },
        14: {
            title:'G4',
            description: "bulk buy x10 Bb/Eb,total G raise F.",         
            cost:new Decimal(2),
            effect()  { 
                let ef = player.G.total.add(10).log(10).pow(0.3).div(10).add(1)
                if (hasMilestone('G',2)) ef = player.G.total.add(10).log(10).pow(0.35).div(8).add(1)
                return ef;
            },
            effectDisplay() { return '^'+format(this.effect(),4) },
            unlocked() { return (hasUpgrade(this.layer, 13))},
        },
        15: {
            title:'G5',
            description: "F dim scaling exp -0.1 again,F30 ^1.1 and REMOVE Bb first scaling.",         
            cost:new Decimal(8),
            unlocked() { return (hasUpgrade(this.layer, 14))},
        },
        21: {
            title:'G6',
            description: "Ek is even stronger,total G boost all dims,Eb10 is also multiplicative at ^0.25 effect.",         
            cost:new Decimal(25),
            effect()  { 
                let exp1=n(0.66)
                let sc1=n(0.945)
                if(hasUpgrade('G',45)) sc1=Decimal.add(sc1,0.025)
                if(hasUpgrade('G',25)) exp1=Decimal.add(exp1,0.14)
                if(hasMilestone('G',2)) exp1=Decimal.add(exp1,0.15)
                if(hasUpgrade('G',32)) exp1=Decimal.add(exp1,0.15)
                if(hasUpgrade('G',43)) exp1=Decimal.add(exp1,0.1)
                let ef1= player.G.total.pow(exp1).div(5).add(1)
                if(ef1.gte('1e100')) ef1=Decimal.pow(10,ef1.div('1e99').log(10).pow(sc1)).mul('1e100')
                if(ef1.gte('1e1000')) {
                    if(!hasMilestone('G',7)) ef1=Decimal.pow(10,ef1.div('1e999').log(10).pow(0.965)).mul('1e1000')}
                //if(ef1.gte('1e4000')) ef1=Decimal.pow(10,ef1.div('1e3999').log(10).pow(0.97)).mul('1e4000')
                let exp2=n(0.25)
                if(hasUpgrade('G',24)) exp2=Decimal.add(exp2,0.05)
                if(hasMilestone('G',2)) exp2=Decimal.add(exp2,0.05)
                if(hasMilestone('F',17)) exp2=Decimal.add(exp2,0.05)
                if(hasUpgrade('G',32)) exp2=Decimal.add(exp2,0.1)
                let ef2= Decimal.pow(buyableEffect('E',22),exp2)
                return [ef1,ef2];
            },
            effectDisplay() { return 'F dim:x'+format(this.effect()[0])+'<br> Eb10 eff:x'+format(this.effect()[1]) },
            unlocked() { return (hasUpgrade(this.layer, 15))},
        },
        22: {
            title:'G7',
            description: "Ek is even stronger,total G raise Eb10,F dim scaling exp -0.1 again.",         
            cost:new Decimal(40),
            effect()  { 
                let ef = player.G.total.add(10).log(10).pow(0.2).div(100).add(1)
                return ef;
            },
            effectDisplay() { return '^'+format(this.effect(),4) },
            unlocked() { return (hasUpgrade(this.layer, 21))},
        },
        23: {
            title:'G8',
            description: "REMOVE Ek nerf,total G raise F30,F dim scaling exp -0.1 again,bulk buy x10 Bb/Eb.",         
            cost:new Decimal(60),
            effect()  { 
                let ef = player.G.total.add(10).log(10).pow(0.27).div(70).add(1)
                if(hasMilestone('G',2)) ef = player.G.total.add(10).log(10).pow(0.3).div(50).add(1)
                return ef;
            },
            effectDisplay() { return '^'+format(this.effect(),4) },
            unlocked() { return (hasUpgrade(this.layer, 22))},
        },
        24: {
            title:'G9',
            description: "G6 2nd eff exp +0.05,F resets nothing,dim mult per buy +0.1.",         
            cost:new Decimal(200),
            unlocked() { return (hasUpgrade(this.layer, 23))},
        },
        25: {
            title:'G10',
            description: "G6 1st eff exp is 0.8,F dim scaling exp -0.04,Bb5 is also multiplicative at ^0.1 effect and unlock buyables.",         
            cost:new Decimal(800),
            effect()  { 
                let exp=0.1
                if(hasMilestone('F',17)) exp=Decimal.add(exp,0.025)
                if(hasUpgrade('G',32)) exp=Decimal.add(exp,0.025)
                let ef= Decimal.pow(buyableEffect('B',23),exp)
                return ef;
            },
            effectDisplay() { return 'x'+format(this.effect()) },
            unlocked() { return (hasUpgrade(this.layer, 24))},
        },
        31: {
            title:'G11',
            description: "Gb2-3 are cheaper,boost F1 eff above 1e1200.",         
            cost:new Decimal('4e9'),
            unlocked() { return (challengeCompletions("G", 11)>=3)},
        },
        32: {
            title:'G12',
            description: "G6/10 are stronger.REMOVE Bb second scaling,Ek mults Bb5 instead.",         
            cost:new Decimal('5e12'),
            unlocked() { return (hasUpgrade(this.layer, 31))},
        },
        33: {
            title:'G13',
            description: "Gb2 ^2,tickboost eff mult +0.005.",         
            cost:new Decimal('1e28'),
            unlocked() { return (hasUpgrade(this.layer, 32))},
        },
        34: {
            title:'G14',
            description: "Gc1p/Gc2p gain exp +0.02.",         
            cost:new Decimal('1e218'),
            unlocked() { return (hasUpgrade(this.layer, 33))},
        },
        35: {
            title:'G15',
            description: "F1 eff is better,F dim scaling exp -0.01.",         
            cost:new Decimal('1e405'),
            unlocked() { return (hasUpgrade(this.layer, 34))},
        },
        41: {
            title:'G16',
            description: "G raise Gcps.",         
            cost:new Decimal('e3850000'),
            effect()  { 
                let exp=n(0.015)
                if(hasUpgrade('G',44)) exp=Decimal.add(exp,0.005)
                if(hasUpgrade('G',45)) exp=Decimal.add(exp,0.025)
                let ef=player.G.points.add(10).log(10).pow(exp)
                return ef;
            },
            effectDisplay() { return '^'+format(this.effect(),4) },
            unlocked() { return (challengeCompletions("G", 21)>=5)},
        },
        42: {
            title:'G17',
            description: "Gc1p-Gc2p exp+0.02,buff Gbs.",         
            cost:new Decimal('e5050000'),
            unlocked() { return (hasUpgrade(this.layer, 41))},
        },
        43: {
            title:'G18',
            description: "Gc1p/Gc2p exp are 0.82/0.7,G6 exp is 1.2,F1 eff is better.",         
            cost:new Decimal('e1.782e7'),
            unlocked() { return (hasUpgrade(this.layer, 42))},
        },
        44: {
            title:'G19',
            description: "G16 exp is 0.02,REMOVE some F upgs' hardcap.",         
            cost:new Decimal('e2.96e7'),
            unlocked() { return (hasUpgrade(this.layer, 43))},
        },
        45: {
            title:'G20',
            description: "G16 exp is 0.04,Gc3 eff base is 0.1,G6 is stronger,Gc2 eff ^2.",         
            cost:new Decimal('e9.66e7'),
            unlocked() { return (hasUpgrade(this.layer, 44))},
        },
    },
    automate(){
        if (player.G.auto) {if (hasMilestone("G",4))  buyBuyable("G",11),buyBuyable("G",12),buyBuyable("G",13)
        }
    },
    buyables:{
        11: {
            title: "Gb1", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = Decimal.pow(100, x).times('100')
                if (cost.gte('1e500')) cost=cost.div('1e500').pow(2.5).mul('1e500')
                if(hasMilestone('G',6)) cost = Decimal.pow(10, x.pow(1.1))
                return cost
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            bulk(){
                let tar=n(0)
                if(hasMilestone('G',6))   tar=player[this.layer].points.add(10).log(10).pow(10/11).sub(getBuyableAmount(this.layer, this.id)).sub(1).ceil().max(1)
                let c = this.cost(getBuyableAmount(this.layer, this.id).add(tar))
                if (player[this.layer].points.gte(c)) player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(tar)
            },
            buy() { setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   let base = 2               
                return base},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let exp=n(1)
                if (hasUpgrade('G',42)) exp=Decimal.add(exp,0.02)
                let ef = Decimal.pow(this.base(),x.pow(exp))
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "give G a x"+ format(this.base()) + " mult \n\
                Cost: " + format(this.cost()) + " G \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: x" + format(this.effect())},
            unlocked() { return hasUpgrade('G',25) }
        },
        12: {
            title: "Gb2", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cexp=n(1.15)
                let bas=n(1000)
                let sc=n(2)
                if (hasUpgrade('F',84)) sc = Decimal.add(sc,-0.15)
                if (hasUpgrade('G',31)) cexp = Decimal.add(cexp,-0.01)
                if (hasUpgrade('F',82)) bas = Decimal.add(bas,-400)
                let cost = Decimal.pow(bas, x.pow(cexp)).times('1e3')
                if (hasUpgrade('G',31)) cost = cost.div('1e3')
                if (cost.gte('1e1000')) cost=cost.div('1e1000').pow(sc).mul('1e1000')
                if(hasMilestone('G',6)) cost = Decimal.pow(50, x.pow(1.1))
                return cost
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            bulk(){
                let tar=n(0)
                if(hasMilestone('G',6))   tar=player[this.layer].points.add(10).log(50).pow(10/11).sub(getBuyableAmount(this.layer, this.id)).sub(1).ceil().max(1)
                let c = this.cost(getBuyableAmount(this.layer, this.id).add(tar))
                if (player[this.layer].points.gte(c)) player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(tar)
            },
            buy() { setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   let base = 2              
                if (hasUpgrade('F',74))  base=Decimal.add(base,upgradeEffect('F',74)[0])
                if (hasUpgrade('G',33)) base=Decimal.pow(base,2)
                return base},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let exp=n(1.02)
                if (hasUpgrade('G',42)) exp=Decimal.add(exp,0.005)
                let ef = Decimal.pow(this.base(),x.pow(exp))
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "give F dim a x"+ format(this.base()) + " mult \n\
                Cost: " + format(this.cost()) + " G \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: x" + format(this.effect())},
            unlocked() { return hasUpgrade('G',25) }
        },
        13: {
            title: "Gb3", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cexp=n(1.4)
                let bas=n(100)
                if (hasUpgrade('G',31)) cexp = Decimal.add(cexp,-0.02)
                if (hasUpgrade('F',82)) bas = Decimal.add(bas,-40)
                let cost = Decimal.pow(bas, x.pow(cexp)).times('5e3')
                if (hasUpgrade('G',31)) cost = cost.div('5e3')
                if(hasMilestone('G',6)) cost = Decimal.pow(5, x.pow(1.1))
                return cost
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            bulk(){
                let tar=n(0)
                if(hasMilestone('G',6))   tar=player[this.layer].points.add(10).log(5).pow(10/11).sub(getBuyableAmount(this.layer, this.id)).sub(1).ceil().max(1)
                let c = this.cost(getBuyableAmount(this.layer, this.id).add(tar))
                if (player[this.layer].points.gte(c)) player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(tar)
            },
            buy() { setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   let base = 2              
                if (hasUpgrade('F',75))  base=Decimal.add(base,upgradeEffect('F',75))
                if (hasUpgrade('F',82))  base=Decimal.mul(base,upgradeEffect('F',82))
                if (hasUpgrade('F',84))  base=Decimal.mul(base,upgradeEffect('F',84))
                return base},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let exp=n(1)
                if (hasUpgrade('G',42)) exp=Decimal.add(exp,0.03)
                let ef = Decimal.pow(this.base(),x.pow(exp))                
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "give Bb5/Eb10 a x"+ format(this.base()) + " mult \n\
                Cost: " + format(this.cost()) + " G \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: x" + format(this.effect())},
            unlocked() { return hasUpgrade('G',25) }
        },
    },
    challenges:{
        11: {//1x1,31,1x2,32,33,1x3,34,1x4,35,1x5,c2
            name: "Gc1",
            completionLimit: 5,
            challengeDescription: function() {
                return "F1 prod ^0.8. <br> Completion: " +challengeCompletions("G", 11) + "/5"},
            unlocked() { return (hasMilestone("G", 2))},
            goal(){
                if (challengeCompletions("G", 11) == 0) return Decimal.pow(10,780);
                if (challengeCompletions("G", 11) == 1) return Decimal.pow(10,880);
                if (challengeCompletions("G", 11) == 2) return Decimal.pow(10,1080);
                if (challengeCompletions("G", 11) == 3) return Decimal.pow(10,1220);
                if (challengeCompletions("G", 11) == 4) return Decimal.pow(10,1670);
            },            
            goalDescription:  function() {return format(this.goal())+' F1'},
            canComplete(){return player.F.F1.gte(this.goal())},
            rewardDescription: "Fd8 mult all dims.<br>unlock Gc1p at 3 comp.",
            rewardEffect() {
                let exp = Decimal.mul(challengeCompletions("G", 11),0.3).add(0.7)
                let ef = Decimal.pow(getBuyableAmount('F',32),exp).max(1)
                if (challengeCompletions("G", 11) >= 1)  return ef
                else return new Decimal(1)
            },
            rewardDisplay() {return 'x'+format(this.rewardEffect())},
        },
        12: {
            name: "Gc2",
            completionLimit: 5,
            challengeDescription: function() {
                return "dim mult per buy ^0.5. <br> Completion: " +challengeCompletions("G", 12) + "/5"},
            unlocked() { return (hasUpgrade("F", 75))},
            goal(){
                if (challengeCompletions("G", 12) == 0) return Decimal.pow(10,1260);
                if (challengeCompletions("G", 12) == 1) return Decimal.pow(10,1570);
                if (challengeCompletions("G", 12) == 2) return Decimal.pow(10,3050);
                if (challengeCompletions("G", 12) == 3) return Decimal.pow(10,7200);
                if (challengeCompletions("G", 12) == 4) return Decimal.pow(10,11560);
            },            
            goalDescription:  function() {return format(this.goal())+' F1'},
            canComplete(){return player.F.F1.gte(this.goal())},
            rewardDescription: "tickspeed is stronger.<br>unlock Gc2p at 3 comp.",
            rewardEffect() {
                let ef = Decimal.mul(challengeCompletions("G", 12),0.025).add(1)
                if(hasUpgrade('G',45)) ef=Decimal.pow(ef,2)
                if (challengeCompletions("G", 12) >= 1)  return ef
                else return new Decimal(1)
            },
            rewardDisplay() {return 'x'+format(this.rewardEffect(),3)},
        },
        21: {
            name: "Gc3",
            completionLimit: 5,
            challengeDescription: function() {
                return "Fd8 cost ^5. <br> Completion: " +challengeCompletions("G", 21) + "/5"},
            unlocked() { return (hasMilestone("G",5))},
            goal(){
                if (challengeCompletions("G", 21) == 0) return n('e35000');
                if (challengeCompletions("G", 21) == 1) return n('e81000');
                if (challengeCompletions("G", 21) == 2) return n('e1.86e5');;
                if (challengeCompletions("G", 21) == 3) return n('e1.2e8');
                if (challengeCompletions("G", 21) == 4) return n('e2.4e8');
            },            
            goalDescription:  function() {return format(this.goal())+' F1'},
            canComplete(){return player.F.F1.gte(this.goal())},
            rewardDescription: "Gc3 comp add to dim mult per buy.<br>unlock Gc3p and edit TB cost at 3 comp.",
            rewardEffect() {
                let b=n(0.06)
                if(hasUpgrade('G',45)) b=Decimal.add(b,0.04)
                let ef = Decimal.mul(challengeCompletions("G", 21),b)
                if (challengeCompletions("G", 21) >= 1)  return ef
                else return new Decimal(0)
            },
            rewardDisplay() {return '+'+format(this.rewardEffect(),3)},
        },
        22: {
            name: "Gc4",
            completionLimit: 5,
            challengeDescription: function() {
                return "TBs eff is polynomial instead of exponential. <br> Completion: " +challengeCompletions("G", 22) + "/5"},
            unlocked() { return (hasMilestone("G",7))},
            goal(){
                if (challengeCompletions("G", 22) == 0) return n('e6.45e8');
                if (challengeCompletions("G", 22) == 1) return n('e9.72e8');
                if (challengeCompletions("G", 22) == 2) return n('e2.35e9');
                if (challengeCompletions("G", 22) == 3) return n('e3.02e9');
                if (challengeCompletions("G", 22) == 4) return n('e1.93e10');
            },            
            goalDescription:  function() {return format(this.goal())+' F1'},
            canComplete(){return player.F.F1.gte(this.goal())},
            rewardDescription: "Gc4 comp add to TB power.<br>unlock Gc4p at 3 comp,edit Gc3p and Gc4p formula at 4 and 5 comp.",
            rewardEffect() {
                let ef = Decimal.mul(challengeCompletions("G", 22),0.001)
                if (challengeCompletions("G", 22) >= 1)  return ef
                else return new Decimal(0)
            },
            rewardDisplay() {return '+'+format(this.rewardEffect(),3)},
        },
    },
    gc1g(){
        let ef=n(0)
        let exp=n(0.75)
        if (hasUpgrade('F',83)) exp=Decimal.add(exp,0.02)
        if (hasUpgrade('G',42)) exp=Decimal.add(exp,0.02)
        if (hasUpgrade('G',43)) exp=Decimal.add(exp,0.02)
        if (inChallenge('G',11)){
            if (player.F.F1.gte('1e1080')) ef=Decimal.pow(10,player.F.F1.div('1e1080').log(10).pow(exp))}
        if (hasUpgrade('G',41)) ef=Decimal.pow(ef,upgradeEffect('G',41))
        return ef
    },
    gc2g(){
        let ef=n(0)
        let exp=n(0.6)
        if (hasUpgrade('F',83)) exp=Decimal.add(exp,0.02)
        if (hasUpgrade('G',42)) exp=Decimal.add(exp,0.02)
        if (hasUpgrade('G',43)) exp=Decimal.add(exp,0.06)
        if (inChallenge('G',12)){
            if (player.F.F1.gte('1e3050')) ef=Decimal.pow(10,player.F.F1.div('1e3050').log(10).pow(exp))}
        if (hasUpgrade('G',41)) ef=Decimal.pow(ef,upgradeEffect('G',41))
        return ef
    },
    gc3g(){
        let ef=n(0)
        let exp=n(3)
        let exp2=n(0.2)
        if (hasUpgrade('F',85)) exp=Decimal.mul(exp,2)
        if (inChallenge('G',21)){
            if (player.F.F1.gte('1e168000')){
                if (challengeCompletions("G", 22)>=4) ef=Decimal.pow(10,player.F.F1.div('1e168000').log(10).pow(exp2))
                else ef=player.F.F1.div('1e168000').log(10).pow(exp)} }
        if (hasUpgrade('G',41)) ef=Decimal.pow(ef,upgradeEffect('G',41))
        return ef
    },
    gc4g(){
        let ef=n(0)
        let exp=n(2)
        let exp2=n(0.14)
        if (inChallenge('G',22)){
            if (player.F.F1.gte('e2.35e9')){
                if (challengeCompletions("G", 22)>=5) ef=Decimal.pow(10,player.F.F1.div('e2.35e9').log(10).pow(exp2))
                else ef=player.F.F1.div('e2.35e9').log(10).pow(exp)} }
        if (hasUpgrade('G',41)) ef=Decimal.pow(ef,upgradeEffect('G',41))
        return ef
    },
    gc1ef(){
        let exp=n(0.1)
        if (hasMilestone('F',18)) exp=Decimal.mul(exp,1.5)
        let ef=Decimal.pow(player.G.Gc1p,exp).add(1)
        return ef},
    gc2ef(){
        let exp=n(0.04)
        if (hasUpgrade('F',83)) exp=Decimal.mul(exp,1.5)
        let ef=Decimal.pow(player.G.Gc2p,exp).add(1)
        return ef},
    gc3ef(){
        let exp=n(0.04)
        if(hasMilestone('G',7)) exp=Decimal.mul(exp,1.5)
        let ef=Decimal.pow(player.G.Gc3p,exp).add(1)
        return ef},
    gc4ef(){
        let exp=n(1.5)
        let ef=player.G.Gc4p.add(1).log(10).pow(exp).div(400)
        return ef},    
    update(diff) {
        if (challengeCompletions("G", 11)>=3)  player.G.Gc1p = player.G.Gc1p.add(tmp.G.gc1g.mul(diff))
        if (challengeCompletions("G", 12)>=3)  player.G.Gc2p = player.G.Gc2p.add(tmp.G.gc2g.mul(diff))
        if (challengeCompletions("G", 21)>=3)  player.G.Gc3p = player.G.Gc3p.add(tmp.G.gc3g.mul(diff))
        if (challengeCompletions("G", 22)>=3)  player.G.Gc4p = player.G.Gc4p.add(tmp.G.gc4g.mul(diff))
    },
})