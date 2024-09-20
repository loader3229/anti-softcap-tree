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
        Gs: new Decimal(0),
        Gsi: new Decimal(0),
        Gse: new Decimal(0),
        Gsetot: new Decimal(0),
        GG: new Decimal(0),
        Gtc: new Decimal(0),
        GGtot: new Decimal(0),
    }},
    passiveGeneration(){    let pg=n(0)
        if (hasMilestone("G",14)) pg=Decimal.add(pg,1)
        return pg},
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
        if (hasUpgrade('F',72))  mult=Decimal.mul(mult,upgradeEffect('F',72))
        if (hasUpgrade('F',74))  mult=Decimal.mul(mult,upgradeEffect('F',74)[1])
        mult=Decimal.mul(mult,tmp.G.gc2ef)
        return mult
    },
    branches: ['F'],
    milestones: {
        0: {requirementDescription: "30 total G (1",
            done() {return player[this.layer].total.gte('30')}, 
            effectDescription: "autobuy tickboost,buy max tickspeed.",
            toggles: [ ['G',"auto"] ]
        },
        1: {requirementDescription: "300 total G (2",
            done() {return player[this.layer].total.gte('300')}, 
            effectDescription: "tickboost resets nothing.",
        },
        2: {requirementDescription: "2e4 total G (3",
            done() {return player[this.layer].total.gte('2e4')}, 
            effectDescription: "unlock a chal,G4/6/8 are stronger.",
        },
        3: {requirementDescription: "1e9 total G (4",
            done() {return player[this.layer].total.gte('1e9')}, 
            effectDescription: "buy max dims.",
        },
        4: {requirementDescription: "1e100 total G (5",
            done() {return player[this.layer].total.gte('1e100')}, 
            effectDescription: "autobuy Gb1-3.",
            toggles: [ ['G',"auto"] ]
        },
        5: {requirementDescription: "1e800 total G (6",
            done() {return player[this.layer].total.gte('1e800')}, 
            effectDescription: "unlock another chal,buff F1 eff.",
        },
        6: {requirementDescription: "1e40000 total G (7",
            done() {return player[this.layer].total.gte('1e40000')}, 
            effectDescription: "edit Gb cost and buy max Gbs.",
        },
        7: {requirementDescription: "e9.25e6 total G (8",
            done() {return player[this.layer].total.gte('e9.25e6')}, 
            effectDescription: "G6 and Gc3p is stronger,unlock another chal.",
        },
        8: {requirementDescription: "e5.65e8 total G (9",
            done() {return player[this.layer].total.gte('e5.65e8')}, 
            effectDescription: "Gc1p/Gc2p exp is 0.87/0.75,Gb1 base +0.5,unlock F2.",//(coming soon)
        },
        9: {requirementDescription: "e3.7e9 total G (10",
            done() {return player[this.layer].total.gte('e3.7e9')}, 
            effectDescription: "autobuy F2 dims,Gc1p/Gc2p exp is 0.9/0.8.",
            toggles: [ ['G',"auto"] ]
        },
        10: {requirementDescription: "e4.05e10 total G (11",
            done() {return player[this.layer].total.gte('e4.05e10')}, 
            effectDescription: "buy max F2 dims,G21 ^2,gain Gc1p passively(^0.95).",
        },
        11: {requirementDescription: "e1e11 total G (12",
            done() {return player[this.layer].total.gte('e1e11')}, 
            effectDescription: "bulk buy x10 tickboost.",
        },
        12: {requirementDescription: "e1e14 total G (13",
            done() {return player[this.layer].total.gte('e1e14')}, 
            effectDescription: "gain Gc2p passively(^0.9).",
        },
        13: {requirementDescription: "e1e1000 total G (14",
            done() {return player[this.layer].total.gte('e1e1000')}, 
            effectDescription: "gain Gc3-4p passively(^0.2).",
        },
        14: {requirementDescription: "ee1e150 total G (15",
            done() {return player[this.layer].total.gte('ee1e150')}, 
            effectDescription: "gain G passively,buy max tickboost,REMOVE 75/100 TB scaling,unlock Gs.",
        },
        15: {requirementDescription: "eeee10 total G (16",
            done() {return player[this.layer].total.gte('eeee10')}, 
            effectDescription: "G28 eff is 1.3,Gs eff exp +0.2.",
        },
        16: {requirementDescription: "eeee24 total G (17",
            done() {return player[this.layer].total.gte('eeee24')}, 
            effectDescription: "autobuy Gsb1-3.",
            toggles: [ ['G',"auto"] ]
        },
        17: {requirementDescription: "eee8e888 total G (18",
            done() {return player[this.layer].total.gte('eee8e888')}, 
            effectDescription: "edit Gsb1 cost and buy max,edit multiple Gsb base,pts boost Gs at stronger eff.",
        },
        18: {requirementDescription: "4.128F5 total G(eee5e13435) (19",//.264
            done() {return player[this.layer].total.gte('eee5e13435')}, //18377 previously.(before some softcaps)
            effectDescription: "autobuy Gsb4-5,nerf Gsb1,2,4 scaling.",
            toggles: [ ['G',"auto"] ]        
        },
        19: {requirementDescription: "5.041F5 total G(eeee109906) (20",
            done() {return player[this.layer].total.gte('eeee109906')},//107540 
            effectDescription: "dilate b1 to 1.05,b2,5 x1.1,b4,7,8 is cheaper / unlock 2 buyables.b10 x1.1 at 1e5103 Gse / b8 x1.05 at 1e5171 Gse.",
        },
        20: {requirementDescription: "6.666F5 total G(eeee4638800) (21",
            done() {return player[this.layer].total.gte('eeee4638800')}, 
            effectDescription: "autobuy Gsb7-8,unlock new Gt,b10 eff nerf is weaker / keep Gt1-2 and buff b2/t1 at 1e13144 Gse / nerf GG scaling at 1e27700 Gse / t1 ^3 and keep t3-4 at 1e49180 Gse.",
            toggles: [ ['G',"auto"] ]        
        },
        21: {requirementDescription: "1e109722 total Gse & 1.007F6 total G(eeee1.456e10) (22",//1e111960
            done() {return player.G.Gsetot.gte('1e109722')&&player[this.layer].total.gte('eeee1.456e10')}, 
            effectDescription: "unlock a new path from 5th row,b6-9 hardcap +0.005,edit b2 cost and buy max / nerf GG sc at 311 GG / t12 raise Gsi instead at 1e260000 Gse.",
        },
        22: {requirementDescription: "465 total GG (23",
            done() {return player.G.GGtot.gte('465')}, 
            effectDescription: "unlock a qol for row 5-7 upg tree.",
        },
        23: {requirementDescription: "489 total GG (24",
            done() {return player.G.GGtot.gte('489')}, 
            effectDescription: "unlock more r8-9 upg,nerf ???.",
        },
        24: {requirementDescription: "708 total GG (25",
            done() {return player.G.GGtot.gte('489')}, 
            effectDescription: "unlock another split and another buyable for GG,b6,9,10 are cheaper.",
        },
        25: {requirementDescription: "e10635468 total Gse (26",
            done() {return player.G.Gsetot.gte('e10635468')}, //e7074100
            effectDescription: "autobuy GG gain,keep t5/8,buff r9-10,buy max b3/5/7.",//GG2 is cheaper,
            toggles: [ ['G',"auto"] ] 
        },
        26: {requirementDescription: "1503 total GG (26",
            done() {return player.G.GGtot.gte('1503')}, 
            effectDescription: "nerf ??? and unlock the next layer(coming soon).",
        },
    },
    microtabs: {
        stuff: {       
            "Main": {
                unlocked() {return true},
                content: [ ["raw-html", () => `<h4 style="opacity:.5">get G when reach 'infinity' F1<br>(like AD,but not 2^1024).</h4>`],["upgrades",[1,2,3,4,5]]]}, 
            "Milestones": {
                unlocked() {return true},
                content: ["milestones"]},
            "Buyables": {
                unlocked() {return (hasUpgrade("G", 25))},
                content: [["raw-html", () => `<h4 style="opacity:.5">like Eb,Gb dont spend G.</h4>`],
                ["buyables",[1]]]},
            "Challenges": {
                unlocked() {return (hasMilestone("G",2))},
                content: [["raw-html", () => `<h4 style="opacity:.5">G chal is about F dim,dont decrease main game production.</h4>`],"challenges"]},
            "Gc powers": {
                unlocked() {return (challengeCompletions("G", 11)>=3)},
                content: [["display-text", () => "You have <h3 style='color: #694444; text-shadow: 0 0 2px #c2b280'>" + format(player.G.Gc1p) + "</h3> Gc1p, mult F dims by <h3 style='color: #694444; text-shadow: 0 0 2px #c2b280'> " + format(tmp.G.gc1ef) + "x</h3>.<br>" + "<h4>" + format(tmp.G.gc1g) + " Gc1p/s (need 1e1080 F1 in Gc1)<h4>"],
                ["display-text", () => "You have <h3 style='color: #913423; text-shadow: 0 0 2px #c2b280'>" + format(player.G.Gc2p) + "</h3> Gc2p, mult G by <h3 style='color: #913423; text-shadow: 0 0 2px #c2b280'> " + format(tmp.G.gc2ef) + "x</h3>.<br>" + "<h4>" + format(tmp.G.gc2g) + " Gc2p/s (need 1e3050 F1 in Gc2)<h4>"],
                ["display-text", () => "You have <h3 style='color: #72FF89; text-shadow: 0 0 2px #c2b280'>" + format(player.G.Gc3p) + "</h3> Gc3p, Fd8 mult per buy is x<h3 style='color: #72FF89; text-shadow: 0 0 2px #c2b280'>" + format(tmp.G.gc3ef) + " </h3>bigger.<br>" + "<h4>" + format(tmp.G.gc3g) + " Gc3p/s (need 1e168000 F1 in Gc3)<h4>"],
                ["display-text", () => "You have <h3 style='color: #D78903; text-shadow: 0 0 2px #c2b280'>" + format(player.G.Gc4p) + "</h3> Gc4p, dim mult per buy +<h3 style='color: #D78903; text-shadow: 0 0 2px #c2b280'>" + format(tmp.G.gc4ef,3) + "</h3>.<br>" + "<h4>" + format(tmp.G.gc4g) + " Gc4p/s (need e2.35e9 F1 in Gc4)<h4>"],]},
            "Gs": {
                unlocked() {return (hasMilestone("G", 14))},
                content: [["raw-html", () => `<h4 style="opacity:.5">inspired by 'Plague Tree' ---Timewall warning!</h4>`]
                ,["display-text", () => "You have <h3 style='color: #988462; text-shadow: 0 0 2px #c2b280'>" + format(player.G.Gs) + "</h3> Gs,boost point exp^4 by <h3 style='color: #988462; text-shadow: 0 0 2px #c2b280'> " + format(tmp.G.gsef) + "</h3>.<br>" + "<h4>" + format(tmp.G.gsb) + " Gs/s (need eee500 G)<h4>"]
                ,["display-text", () => "You have <h3 style='color: #FF00F1; text-shadow: 0 0 2px #c2b280'>" + format(player.G.Gsi) + "</h3> Gsi,boost Gs by lg(Gs)^<h3 style='color: #FF00F1; text-shadow: 0 0 2px #c2b280'>" + format(tmp.G.gsief) + "</h3> (x\n\
                    <h3 style='color: #FF00F1; text-shadow: 0 0 2px #c2b280'>" + format(tmp.G.gsir) +"</h3> Gs)<br>" + "<h4>" + format(tmp.G.gsib) + " Gsi/s (need 1e2920 Gs)<h4>"]
                ,["display-text", () => "You have <h3 style='color: #14FFF3; text-shadow: 0 0 2px #c2b280'>" + format(player.G.Gse) + "</h3> Gse,boost Gsi by lg(Gsi)^<h3 style='color: #14FFF3; text-shadow: 0 0 2px #c2b280'>" + format(tmp.G.gseef) + "</h3> (x\n\
                    <h3 style='color: #14FFF3; text-shadow: 0 0 2px #c2b280'>" + format(tmp.G.gser) +"</h3> Gsi)<br>" + "and boost Gsi eff exp by +<h3 style='color: #14FFF3; text-shadow: 0 0 2px #c2b280'>" + format(tmp.G.gser2) +"</h3><br>\n\
                    " + format(tmp.G.gseb) + " Gse/s (need 1e345 Gsi)<h4>"]
                //,["raw-html", () => `<h4 style="opacity:.5">Gsb1/4/7 scaling past 500,Gsb2 scaling past 50.</h4>`]
                ,["buyables",[2,3,4,5]],["upgrades",[6,7,8,9,10,11,12,13]]],},
            "GG": {
                unlocked() {return (hasUpgrade("G",115))},
                content: [["raw-html", () => `<h4 style="opacity:.5">welcome to the first upgrade tree --- strategy is significant now!</h4>`]
                ,["display-text", () => "You have <h3 style='color: #375DB4; text-shadow: 0 0 2px #c2b280'>" + format(player.G.GG) + "</h3> GG ("+"<h3 style='color: #375DB4; text-shadow: 0 0 2px #c2b280'>" + format(player.G.GGtot)+'</h3> total)']
                ,["buyables",[6]],"clickables"]},   
        }                                                                                                                                                                                                                                                                                                                    //for convenience             
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
        },/*12345432*/
        31: {
            title:'G11',
            description: "Gb2-3 are cheaper,boost F1 eff above 1e1200.",         
            cost:new Decimal('4e9'),
            unlocked() { return (challengeCompletions("G", 11)>=3)},
        },
        32: {
            title:'G12',
            description: "G6/10 are stronger.REMOVE Bb second scaling,Ek mults Bb5 instead.",         
            cost:new Decimal('4e12'),
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
                if(hasUpgrade('G',54)) exp=Decimal.add(exp,0.015)
                //if(hasMilestone('G',14)) exp=Decimal.mul(exp,tmp.G.gsef)
                let ef=player.G.points.add(10).log(10).pow(exp)
                return ef;
            },
            effectDisplay() { return '^'+format(this.effect(),3) },
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
        51: {
            title:'G21',
            description: "Gc4p boost F2 dims,boost its exp by 0.01.",         
            cost:new Decimal('e1.6e10'),
            effect()  { 
                let exp=n(1.25)
                if(hasMilestone('G',10)) exp=Decimal.mul(exp,2)
                let ef=player.G.Gc4p.add(10).log(10).pow(exp).div(50).add(0.98)
                return ef;
            },
            effectDisplay() { return 'x'+format(this.effect()) },
            unlocked() { return (hasMilestone(this.layer,9))},
        },
        52: {
            title:'G22',
            description: "TB is quadratic in Gc4,Gb1 ^1.3,unlock another 2 F2 dim.",         
            cost:new Decimal('e3.4e10'),
            unlocked() { return (hasUpgrade(this.layer, 51))},
        },
        53: {
            title:'G23',
            description: "Gcps eff are better,F1 boost F2.",         
            cost:new Decimal('e4.13e10'),
            effect()  { 
                let exp=n(0.4)
                let ef=player.F.F1.add(10).log(10).pow(exp)
                return ef;
            },
            effectDisplay() { return 'x'+format(this.effect()) },
            unlocked() { return (hasUpgrade(this.layer, 52))},
        },
        54: {
            title:'G24',
            description: "G16 exp is 0.055,G21 boost tickspeed.",         
            cost:new Decimal('e2.25e12'),
            effect()  { 
                let exp=n(0.25)
                if(hasUpgrade('G',55)) exp=Decimal.add(exp,0.05)
                let o=upgradeEffect('G',51)
                let ef=Decimal.pow(o.add(10).log(10),exp).div(4).add(0.75)
                return ef;
            },
            effectDisplay() { return 'x'+format(this.effect(),3) },
            unlocked() { return (hasUpgrade(this.layer, 53))},
        },
        55: {
            title:'G25',
            description: "Gc3p eff exp is 0.25,G24 exp is 0.3,gain Gc powers at full F1.",         
            cost:new Decimal('ee1e166'),
            unlocked() { return (hasMilestone(this.layer, 13))},
        },
        61: {
            title:'G26',
            description: "Gsb1 cost base is 5.",         
            cost:new Decimal('1e7'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gs",
            currencyInternalName: "Gs",
            unlocked() { return (hasMilestone(this.layer, 14))},
        },
        62: {
            title:'G27',
            description: "Gs eff ^1.5,base ^2.",         
            cost:new Decimal('1e36'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gs",
            currencyInternalName: "Gs",
            unlocked() { return (hasUpgrade(this.layer, 61))},
        },
        63: {
            title:'G28',
            description: "unlock another buyable,Gsb1 eff base x1.2.",         
            cost:new Decimal('1e117'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gs",
            currencyInternalName: "Gs",
            unlocked() { return (hasUpgrade(this.layer, 62))},
        },
        64: {
            title:'G29',
            description: "Gsb2 base x1.15,Gs eff exp +0.4.",         
            cost:new Decimal('2e230'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gs",
            currencyInternalName: "Gs",
            unlocked() { return (hasUpgrade(this.layer, 63))},
        },
        65: {
            title:'G30',
            description: "Gs buyables are cheaper based on Gs upg amount.",         
            cost:new Decimal('2e305'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gs",
            currencyInternalName: "Gs",
            effect()  { 
                let b = n(player[this.layer].upgrades.length)
                let c=n(0.995)
                if(hasUpgrade('G',95)) c=n(0.994)
                if(hasUpgrade('G',111)) c=n(0.99)
                let ef=n(c).pow(b.sub(25).max(0))
                return ef;
            },
            effectDisplay() { return '^'+format(this.effect(),4) },
            unlocked() { return (hasUpgrade(this.layer, 64))},
        },
        71: {
            title:'G31',
            description: "Gsb1 base x1.1,Gs eff exp +0.4.",         
            cost:new Decimal('1e432'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gs",
            currencyInternalName: "Gs",
            unlocked() { return (hasUpgrade(this.layer, 65))},
        },
        72: {
            title:'G32',
            description: "logGs boost Gs,unlock another buyable.",         
            cost:new Decimal('1e615'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gs",
            currencyInternalName: "Gs",
            effect()  { 
                let ef = player[this.layer].Gs.add(10).log(10).pow(6)
                return ef;
            },
            effectDisplay() { return 'x'+format(this.effect()) },
            unlocked() { return (hasUpgrade(this.layer, 71))},
        },
        73: {
            title:'G33',
            description: "G30 applies to Gsb3.",         
            cost:new Decimal('1e851'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gs",
            currencyInternalName: "Gs",
            unlocked() { return (hasUpgrade(this.layer, 72))},
        },
        74: {
            title:'G34',
            description: "Gsb2 boost Gsb1 base.",         
            cost:new Decimal('1e924'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gs",
            currencyInternalName: "Gs",
            effect()  { 
                let b=n(getBuyableAmount('G',22))
                let ef = b.pow(0.75).div(80).add(1)
                return ef;
            },
            effectDisplay() { return 'x'+format(this.effect()) },
            unlocked() { return (hasUpgrade(this.layer, 73))},
        },//1e1178
        75: {
            title:'G35',
            description: "boost Gsb1 base based on Gs upg amount.",         
            cost:new Decimal('5e1154'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gs",
            currencyInternalName: "Gs",
            effect()  { 
                let b = n(player[this.layer].upgrades.length)
                let ba=n(1.008)
                if(hasUpgrade('G',82)) ba=ba.add(0.002)
                let ef=n(ba).pow(b.sub(25).max(0))
                return ef;
            },
            effectDisplay() { return 'x'+format(this.effect(),4) },
            unlocked() { return (hasUpgrade(this.layer, 74))},
        },
        81: {
            title:'G36',
            description: "Gs eff divide Gsb cost(^3).",         
            cost:new Decimal('5e1351'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gs",
            currencyInternalName: "Gs",
            effect()  { 
                let exp=n(3)
                if(hasUpgrade('G',82)) exp=exp.mul(1.6)
                if(hasUpgrade('G',111)) exp=n(25)
                let ef=tmp.G.gsef.pow(exp)
                if(!hasUpgrade('G',111)) ef=ef.min('1e1000')
                return ef;
            },
            effectDisplay() { return '/'+format(this.effect()) },
            unlocked() { return (hasUpgrade(this.layer, 75))},
        },
        82: {
            title:'G37',
            description: "Gsb1 cost base -0.2,G35 base is 1.01,G36 ^1.6.",         
            cost:new Decimal('5e1988'),//1e1995
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gs",
            currencyInternalName: "Gs",
            unlocked() { return (hasUpgrade(this.layer, 81))},
        },
        83: {
            title:'G38',
            description: "unlock Gsi,Gs eff exp +0.3.",         
            cost:new Decimal('1e2810'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gs",
            currencyInternalName: "Gs",
            unlocked() { return (hasUpgrade(this.layer, 82))},
        },
        84: {
            title:'G39',
            description: "Gs eff boost Gsi.",         
            cost:new Decimal('1e7'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gsi",
            currencyInternalName: "Gsi",
            effect()  { 
                let exp=n(0.45)
                if(hasUpgrade('G',92)) exp=exp.add(0.25)
                let ef=tmp.G.gsef.pow(exp)
                return ef;
            },
            effectDisplay() { return 'x'+format(this.effect()) },
            unlocked() { return (hasUpgrade(this.layer, 83))},
        },
        85: {
            title:'G40',
            description: "boost Gsb4 base based on Gs upg amount,Gsb2 cost base /2.5,Gsb4 cost base is 7.",         
            cost:new Decimal('1e40'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gsi",
            currencyInternalName: "Gsi",
            effect()  { 
                let b = n(player[this.layer].upgrades.length)
                let ba=n(1.006)
                let ef=n(ba).pow(b.sub(25).max(0))
                return ef;
            },
            effectDisplay() { return 'x'+format(this.effect(),4) },
            unlocked() { return (hasUpgrade(this.layer, 84))},
        },
        91: {
            title:'G41',
            description: "remove Gsb2-3 linear cost.",         
            cost:new Decimal('1e3210'),//1e3223
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gs",
            currencyInternalName: "Gs",
            unlocked() { return (hasUpgrade(this.layer, 85))},
        },
        92: {
            title:'G42',
            description: "Gsb2 cost base /2,G39 exp is 0.7.",         
            cost:new Decimal('1e4000'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gs",
            currencyInternalName: "Gs",
            unlocked() { return (hasUpgrade(this.layer, 91))},
        },
        93: {
            title:'G43',
            description: "Gsb1 cost base is 4.5,Gsb4 cost base is 5,Gsb3 provide free Gsb1.",         
            cost:new Decimal('5e90'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gsi",
            currencyInternalName: "Gsi",
            unlocked() { return (hasUpgrade(this.layer, 92))},
        },
        94: {
            title:'G44',
            description: "Gsb5 cost base /4,Gsb3 cost base /1000,Gsi gain exp +0.4,eff x1.2.",         
            cost:new Decimal('1e162'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gsi",
            currencyInternalName: "Gsi",
            unlocked() { return (hasUpgrade(this.layer, 93))},
        },
        95: {
            title:'G45',
            description: "G30 base is 0.995,Gsi gain x1.05^(Gsb1 amt),Gsi eff x1.2.",         
            cost:new Decimal('1e6072'),//6e6666
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gs",
            currencyInternalName: "Gs",
            effect()  { 
                let b = getBuyableAmount('G',21)
                let ba=n(1.05)
                if(hasUpgrade('G',105)) ba=ba.add(0.02)
                let ef=n(ba).pow(b)
                return ef;
            },
            effectDisplay() { return 'x'+format(this.effect()) },
            unlocked() { return (hasUpgrade(this.layer, 94))},
        },
        101: {
            title:'G46',
            description: "Gs gain base ^1.05,unlock Gse,Gs nerf is weaker.",         
            cost:new Decimal('1e290'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gsi",
            currencyInternalName: "Gsi",
            unlocked() { return (hasUpgrade(this.layer, 95))},
        },
        102: {
            title:'G47',
            description: "G45 mult Gse at ^0.15 eff,Gsb1 cost base -0.4 and nerf its scaling.",         
            cost:new Decimal('2.5e6'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gse",
            currencyInternalName: "Gse",
            effect()  { 
                let ba = upgradeEffect('G',95)
                let exp=n(0.15)
                if(hasUpgrade('G',103)) exp=exp.add(0.05)
                if(hasUpgrade('G',104)) exp=exp.add(0.05)
                let ef=n(ba).pow(exp)
                return ef;
            },
            effectDisplay() { return 'x'+format(this.effect()) },
            unlocked() { return (hasUpgrade(this.layer, 101))},
        },
        103: {
            title:'G48',
            description: "remove Gsb5 linear cost,G47 exp is 0.2,Gs nerf is weaker,boost Gsb1/6 base.",         
            cost:new Decimal('1e435'),//5e434
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gsi",
            currencyInternalName: "Gsi",
            unlocked() { return (hasUpgrade(this.layer, 102))},
        },
        104: {
            title:'G49',
            description: "G30 applies to Gsb4-6 at ^0.3 eff and nerf ???.",         
            cost:new Decimal('1e25760'),//1e26800
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gs",
            currencyInternalName: "Gs",
            effect()  { 
                let ba = upgradeEffect('G',65)
                let exp=n(0.3)
                let ef=n(ba).pow(exp)
                return ef;
            },
            effectDisplay() { return '^'+format(this.effect(),4) },
            unlocked() { return (hasUpgrade(this.layer, 103))},
        },
        105: {
            title:'G50',
            description: "Gsi gain x1.05^(Gsb4 amt),G45 eff is 1.07,Gsb1 base ^1.05,boost Gsi/e exp.",         
            cost:new Decimal('1e786'),//5e806
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gsi",
            currencyInternalName: "Gsi",
            effect()  { 
                let b = getBuyableAmount('G',31)
                let ba=n(1.05)
                let ef=n(ba).pow(b)
                return ef;
            },
            effectDisplay() { return 'x'+format(this.effect()) },
            unlocked() { return (hasUpgrade(this.layer, 104))},
        },
        111: {
            title:'G51',
            description: "raise Gsb1 eff amt and amt by 1.2/1.4,extra bab:b3->b1,b6->b4,remove G36 hardcap,unlock another buyable.",         
            cost:new Decimal('1e1050'),//5e1178
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gse",
            currencyInternalName: "Gse",
            unlocked() { return (hasMilestone(this.layer, 17))},
        },
        112: {
            title:'G52',
            description: "Gsi eff is stronger,b4/5/8 is cheaper.",         
            cost:new Decimal('5e2143'),//2.5e2180
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gse",
            currencyInternalName: "Gse",
            unlocked() { return (hasUpgrade(this.layer, 111))},
        },
        113: {
            title:'G53',
            description: "b2/4 is cheaper,Gse 2nd eff exp +0.03,raise b4 eff by 1.005.",         
            cost:new Decimal('1e64570'),//67075
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gsi",
            currencyInternalName: "Gsi",
            unlocked() { return (hasUpgrade(this.layer, 112))},
        },
        114: {
            title:'G54',
            description: "extra bab:b9-10->b7,b5(x0.2)->b4,b8 bas x1.05.",         
            cost:new Decimal('1e109265'),//1e109315
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gsi",
            currencyInternalName: "Gsi",
            unlocked() { return (hasUpgrade(this.layer, 113))},
        },
        115: {
            title:'G55',
            description: "edit b4 cost and buy max,extra bab:b5(x0.6,total 0.8)->b4,unlock GG and a upg tree.",         
            cost:new Decimal('1e459860'),//1e456436
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gsi",
            currencyInternalName: "Gsi",
            unlocked() { return (hasUpgrade(this.layer, 114))},
        },
        121: {
            title:'G56',
            description: "GG,b2,b11,b12 are cheaper,G55 b5 mult is 1,unlock new Gt.",         
            cost:new Decimal('5e7773'),//1e6771
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gse",
            currencyInternalName: "Gse",
            unlocked() { return player.G.GGtot.gte(10)},
        },
        122: {
            title:'G57',
            description: "dilate b4 to 1.05,b10 is cheaper.",         
            cost:new Decimal('1e11580'),//5e11486
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gse",
            currencyInternalName: "Gse",
            unlocked() { return (hasUpgrade(this.layer, 121))},
        },
        123: {
            title:'G58',
            description: "unlock new Gt each upg from this,b6 hardcap +0.005.",         
            cost:new Decimal('2e24423'),//5e11486
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gse",
            currencyInternalName: "Gse",
            unlocked() { return (hasUpgrade(this.layer, 122))},
        },
        124: {
            title:'G59',
            description: "b9 hardcap +0.005,GG and b11-12 are cheaper,buff Gse 2nd eff,Gse nerf is weaker.",         
            cost:new Decimal('1e28825'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gse",
            currencyInternalName: "Gse",
            unlocked() { return (hasUpgrade(this.layer, 123))},
        },
        125: {
            title:'G60',
            description: "add b6 hardcap base on Gse,b3 x1.05,t11-12 ^1.2,Gse nerf is weaker.",         
            cost:new Decimal('5e34907'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gse",
            currencyInternalName: "Gse",
            effect()  { 
                let ef=player.G.Gsetot.add(10).log(10).add(10).log(10).pow(2).div(1000)
                return ef;
            },
            effectDisplay() { return '+'+format(this.effect(),3) },
            unlocked() { return (hasUpgrade(this.layer, 124))},
        },
        131: {
            title:'G61',
            description: "b11-12 are cheaper,Gse nerf is weaker,t4 is buffed.",         
            cost:new Decimal('3e328911'),//2e331973
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gse",
            currencyInternalName: "Gse",
            unlocked() { return (hasMilestone(this.layer, 21))},
        },
        132: {
            title:'G62',
            description: "t1 raise Gse instead,t11-12 are cheaper.",         
            cost:new Decimal('e3592000'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gse",
            currencyInternalName: "Gse",
            unlocked() { return (hasMilestone(this.layer, 21))},
        },
        133: {
            title:'G63',
            description: "b6/9 exp +0.02,GG2 provide 4 GG per buy.",         
            cost:new Decimal('e8.88e90'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gs",
            currencyInternalName: "Gs",
            unlocked() { return (hasMilestone(this.layer, 21))},
        },
    },
    clickables:{    
        11: {
            title(){return "Gt0"},
            display: "respec (reset Gt upg,get GG back.)",
            canClick() {return gcs(this.layer,this.id)!==1},
            style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            onClick() {
                for (let i in player.G.clickables) if (!["11"].includes(i)) setClickableState("G",i,0)
                    player.G.Gtc=n(0)
                if (player.G.Gsetot.gte('1e13144')) setClickableState("G",21,1),setClickableState("G",31,1)
                if (player.G.Gsetot.gte('1e49180')) setClickableState("G",32,1),setClickableState("G",33,1)
                if (hasMilestone('G',25)) setClickableState("G",41,1),setClickableState("G",51,1)
            },
            unlocked() {return hasUpgrade('G',115)},
        },
        12: {
            title(){return "e"},
            display: "choose t9,11,14(e path),need 91 GG",
            canClick() {return  player.G.GG.gte(91)&&gcs(this.layer,this.id)!==1&&gcs(this.layer,61)!==1},
            style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            onClick() { player.G.Gtc=player.G.Gtc.add(91)
                setClickableState(this.layer,this.id,1)
                setClickableState(this.layer,61,1)
                setClickableState(this.layer,71,1)
                setClickableState(this.layer,81,1)
            },
            unlocked() {return hasMilestone('G',22)},
        },
        13: {
            title(){return "i"},
            display: "choose t10,12,15(i path),need 94 GG",
            canClick() {return  player.G.GG.gte(94)&&gcs(this.layer,this.id)!==1&&gcs(this.layer,62)!==1},
            style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            onClick() { player.G.Gtc=player.G.Gtc.add(94)
                setClickableState(this.layer,this.id,1)
                setClickableState(this.layer,62,1)
                setClickableState(this.layer,72,1)
                setClickableState(this.layer,82,1)
            },
            unlocked() {return hasMilestone('G',22)},
        },
        14: {
            title(){return "s"},
            display: "choose t61,17,18(s path),need 85 GG",
            canClick() {return  player.G.GG.gte(85)&&gcs(this.layer,this.id)!==1&&gcs(this.layer,63)!==1},
            style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            onClick() { player.G.Gtc=player.G.Gtc.add(85)
                setClickableState(this.layer,this.id,1)
                setClickableState(this.layer,63,1)
                setClickableState(this.layer,73,1)
                setClickableState(this.layer,83,1)
            },
            unlocked() {return hasMilestone('G',22)},
        },
        21: {
            title(){return "Gt1"},
            display(){if(hasUpgrade('G',132)) return "Gs raise Gse <br> cost: 1 GG <br> eff:^"+format(this.effect()[1],3) 
                else return "Gs boost Gse <br> cost: 1 GG <br> eff:x"+format(this.effect()[0])},
            style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(1)&&gcs(this.layer,this.id)!==1},
            onClick() {if (!player.G.Gsetot.gte('1e13144')) {player.G.Gtc=player.G.Gtc.add(1)}
                setClickableState(this.layer,this.id,1)
            },
            effect(){
                let exp=n(4)
                if(gcs('G',32)==1)  exp=exp.mul(1.15)
                if (player.G.Gsetot.gte('1e13144')) exp=exp.mul(1.5)
                if (player.G.Gsetot.gte('1e49180')) exp=exp.mul(3)
                let ef=player.G.Gs.add(10).log(10).pow(exp)
                let ef2=player.G.Gs.add(10).log(10).add(10).log(10).pow(0.4).div(50).add(0.98)
                return [ef,ef2]
            },
            unlocked() {return hasUpgrade('G',115)},
        },
        31: {
            title(){return "Gt2"},
            display(){return "Gsb9 base x1.02 <br> cost: 3 GG "},
            style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(3)&&gcs(this.layer,this.id)!==1&&gcs(this.layer,21)==1},
            onClick() {if (!player.G.Gsetot.gte('1e13144')) {player.G.Gtc=player.G.Gtc.add(3)}
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return hasUpgrade('G',115)},
            branches(){return ["21"]},
        },
        32: {
            title(){return "Gt3"},
            display(){return "Gsb11-12 base +0.002,t1 ^1.15 <br> cost: 6 GG "},
            style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(6)&&gcs(this.layer,this.id)!==1&&gcs(this.layer,21)==1},
            onClick() {if (!player.G.Gsetot.gte('1e49180')) {player.G.Gtc=player.G.Gtc.add(6)}
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return hasUpgrade('G',115)},
            branches(){return ["21"]},
        },
        33: {
            title(){return "Gt4"},
            display(){return "total GG raise Gse <br> cost: 3 GG <br> eff:^"+format(this.effect(),4)},
            style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(3)&&gcs(this.layer,this.id)!==1&&gcs(this.layer,21)==1},
            onClick() {if (!player.G.Gsetot.gte('1e49180')) {player.G.Gtc=player.G.Gtc.add(3)}
                setClickableState(this.layer,this.id,1)
            },
            effect(){
                let d=n(400)
                if(gcs('G',43)==1)  d=d.mul(0.8)
                if(gcs('G',51)==1)  d=d.mul(0.8)
                let exp=n(0.85)
                if(hasUpgrade('G',131)) exp=exp.add(0.03)
                let ef=player.G.GGtot.pow(exp).div(d).add(1)
                if(ef.gte(1.8)) ef=ef.div(1.85).pow(0.5).mul(1.8)
                return ef
            },
            unlocked() {return hasUpgrade('G',115)},
            branches(){return ["21"]},
        },
        41: {
            title(){return "Gt5"},
            display(){return "Gse gain exp +0.05,eff exp +0.03 <br> cost: 6 GG "},//,Gsi eff nerf is weaker
            style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(6)&&gcs(this.layer,this.id)!==1&&(gcs(this.layer,31)==1|| gcs(this.layer,32)==1|| gcs(this.layer,33)==1)},
            onClick() {if (!hasMilestone('G',25)) {player.G.Gtc=player.G.Gtc.add(6)}
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return hasUpgrade('G',115)},
            branches(){return ["31","33"]},
        },
        42: {
            title(){return "Gt6"},
            display(){return "Gsi eff nerf is weaker <br> cost: 20 GG "},
            style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(20)&&gcs(this.layer,this.id)!==1&&(gcs(this.layer,31)==1|| gcs(this.layer,32)==1|| gcs(this.layer,33)==1)},
            onClick() {player.G.Gtc=player.G.Gtc.add(20)
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return hasUpgrade('G',115)},
            branches(){return ["31","33"]},
        },
        43: {
            title(){return "Gt7"},
            display(){return "total GG nerf b4 scaling,t4 x1.2 <br> cost: 18 GG <br> eff:/"+format(this.effect(),4)},
            style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(18)&&gcs(this.layer,this.id)!==1&&(gcs(this.layer,31)==1|| gcs(this.layer,32)==1|| gcs(this.layer,33)==1)},
            onClick() {player.G.Gtc=player.G.Gtc.add(18)
                setClickableState(this.layer,this.id,1)
            },
            effect(){
                let ef=player.G.GGtot.pow(0.66).div(400).add(1)
                return ef
            },
            unlocked() {return hasUpgrade('G',121)},
            branches(){return ["31","33"]},
        },
        44: {
            title(){return "Gt13"},
            display(){return "Gse raise Gs,b2-3 scaling is weaker <br> cost: 26 GG <br> eff:^"+format(this.effect(),4)},
            style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(26)&&gcs(this.layer,this.id)!==1&&gcs(this.layer,21)==1},
            onClick() {player.G.Gtc=player.G.Gtc.add(26)
                setClickableState(this.layer,this.id,1)
            },
            effect(){
                let ef=player.G.Gsetot.add(10).log(10).add(10).log(10).pow(2.5).div(90).add(89/90)
                if (gcs('G',82)==1)  ef=ef.pow('1.2')
                return ef
            },
            unlocked() {return hasUpgrade('G',125)},
            branches(){return ["21"]},
        },
        51: {
            title(){return "Gt8"},
            display(){return "nerf b4/5/7/8 scaling,t4 x1.2 again <br> cost: 18 GG "},
            style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(18)&&gcs(this.layer,this.id)!==1&&(gcs(this.layer,41)==1|| gcs(this.layer,42)==1|| gcs(this.layer,43)==1)},
            onClick() {if (!hasMilestone('G',25)) {player.G.Gtc=player.G.Gtc.add(18)}
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return hasMilestone('G',20)},
            branches(){return ["41","42","43"]},
        },
        61: {
            title(){return "Gt9"},
            display(){return "Gse raise itself (base on max) <br> cost: 36 GG <br> eff:^"+format(this.effect(),4)},
            style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(36)&&gcs(this.layer,this.id)!==1&&gcs(this.layer,51)==1},
            onClick() {player.G.Gtc=player.G.Gtc.add(36)
                setClickableState(this.layer,this.id,1)
            },
            effect(){
                let ef=player.G.Gsetot.add(10).log(10).add(10).log(10).pow(1.5).div(150).add(149/150)
                if(gcs('G',122)) ef=player.G.Gsetot.add(10).log(10).add(10).log(10).pow(1.5).div(120).add(119/120)
                return ef
            },
            unlocked() {return hasUpgrade('G',123)},
            branches(){return ["51"]},
        },
        62: {
            title(){return "Gt10"},
            display(){return "Gsi raise itself (base on max) <br> cost: 39 GG <br> eff:^"+format(this.effect(),4)},
            style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(39)&&gcs(this.layer,this.id)!==1&&gcs(this.layer,51)==1},
            onClick() {player.G.Gtc=player.G.Gtc.add(39)
                setClickableState(this.layer,this.id,1)
            },
            effect(){
                let ef=player.G.Gsi.add(10).log(10).add(10).log(10).pow(1.5).div(250).add(249/250)
                if(gcs('G',122)) ef=player.G.Gsi.add(10).log(10).add(10).log(10).pow(1.6).div(180).add(179/180)
                return ef
            },
            unlocked() {return hasUpgrade('G',123)},
            branches(){return ["51"]},
        },
        63: {
            title(){return "Gt16"},
            display(){return "Gs raise itself (base on max) <br> cost: 32 GG <br> eff:^"+format(this.effect(),4)},
            style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(32)&&gcs(this.layer,this.id)!==1&&gcs(this.layer,51)==1},
            onClick() {player.G.Gtc=player.G.Gtc.add(32)
                setClickableState(this.layer,this.id,1)
            },
            effect(){
                let exp=n(1.2)
                if(gcs('G',91)) exp=exp.add(0.04)
                let ef=player.G.Gs.add(10).log(10).add(10).log(10).pow(exp).div(200).add(199/200)
                if(gcs('G',122)) ef=player.G.Gs.add(10).log(10).add(10).log(10).pow(exp).div(150).add(149/150)
                return ef
            },
            unlocked() {return hasMilestone('G',21)},
            branches(){return ["51"]},
        },
        71: {
            title(){return "Gt11"},
            display(){return "b4 eff boost Gse(hardcap at e5e6) <br> cost: 15 GG <br> eff:x"+format(this.effect())},
            style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(15)&&gcs(this.layer,this.id)!==1&&gcs(this.layer,61)==1},
            onClick() {player.G.Gtc=player.G.Gtc.add(15)
                setClickableState(this.layer,this.id,1)
            },
            effect(){
                let ef=n(10).pow(n(buyableEffect('G',31)).add(10).log(10).mul(0.75)).pow(0.003)
                if (hasUpgrade('G',125))  ef=ef.pow('1.2')
                if(gcs('G',81))  ef=ef.pow('1.2')
                let sc=n(0.8)
                if(gcs('G',91)) sc=sc.add(0.02)
                if(ef.gte('1e70000')) ef=n('1e70000').mul(n(10).pow(ef.log(10).sub('7e4').mul(sc)))
                if(ef.gte('1e240000')) ef=n('1e240000').mul(n(10).pow(ef.log(10).sub('240000').mul(sc)))
                if(ef.gte('e3e6')) ef=n('e3e6').mul(n(10).pow(ef.log(10).sub('3e6').mul(0.7)))
                if(gcs('G',91)) ef=ef.pow(1.2)
                ef=ef.min('e5e6')
                return ef
            },
            unlocked() {return hasUpgrade('G',124)},
            branches(){return ["61"]},
        },
        72: {
            title(){return "Gt12"},
            display(){
                if(player.G.Gsetot.gte('e260000')) return "b7 eff raise Gsi <br> cost: 15 GG <br> eff:^"+format(this.effect()[1],3)
                else return "b7 eff boost Gsi <br> cost: 15 GG <br> eff:x"+format(this.effect()[0])},
            style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(15)&&gcs(this.layer,this.id)!==1&&gcs(this.layer,62)==1},
            onClick() {player.G.Gtc=player.G.Gtc.add(15)
                setClickableState(this.layer,this.id,1)
            },
            effect(){
                let ef=n(10).pow(n(buyableEffect('G',41)).add(10).log(10).mul(1.8)).pow(80)
                let ef2=n(1)
                if (hasUpgrade('G',125))  ef=ef.pow('1.2')
                let exp=n(0.125)
                if(gcs('G',91)) exp=exp.add(0.005)
                if(player.G.Gsetot.gte('e260000')) ef2=ef2.add(n(buyableEffect('G',41)).add(10).log(10).pow(exp).div(16))
                return [ef,ef2]
            },
            unlocked() {return hasUpgrade('G',124)},
            branches(){return ["62"]},
        },
        73: {
            title(){return "Gt17"},
            display(){return "b1 eff raise Gs <br> cost: 13 GG <br> eff:^"+format(this.effect(),3)},
            style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(13)&&gcs(this.layer,this.id)!==1&&gcs(this.layer,63)==1},
            onClick() {player.G.Gtc=player.G.Gtc.add(13)
                setClickableState(this.layer,this.id,1)
            },
            effect(){
                let exp=n(1.1)
                if(gcs('G',91)) exp=exp.add(0.04)
                let ef=n(buyableEffect('G',21)).add(10).log(10).add(10).log(10).pow(exp).div(25).add(0.96)
                return ef
            },
            unlocked() {return hasMilestone('G',21)},
            branches(){return ["63"]},
        },
        81: {
            title(){return "Gt14"},
            display(){return "dilate b4 to 1.05.b7 to 1.01,t11 ^1.2 <br> cost: 40 GG "},
            style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(40)&&gcs(this.layer,this.id)!==1&&gcs(this.layer,71)==1},
            onClick() {player.G.Gtc=player.G.Gtc.add(40)
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return hasUpgrade('G',125)},
            branches(){return ["71"]},
        },
        82: {
            title(){return "Gt15"},
            display(){return "Gsi nerf is weaker,t13 ^1.2 <br> cost: 40 GG "},
            style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(40)&&gcs(this.layer,this.id)!==1&&gcs(this.layer,72)==1},
            onClick() {player.G.Gtc=player.G.Gtc.add(40)
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return hasUpgrade('G',125)},
            branches(){return ["72"]},
        },
        83: {
            title(){return "Gt18"},
            display(){return "b11 base +0.0025,b12 base +0.0015 <br> cost: 40 GG "},
            style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(40)&&gcs(this.layer,this.id)!==1&&gcs(this.layer,73)==1},
            onClick() {player.G.Gtc=player.G.Gtc.add(40)
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return hasMilestone('G',21)},
            branches(){return ["73"]},
        },
        91: {
            title(){return "Gt19"},
            display(){return "Gse gain exp x1.2,buff t11,12,16,17 <br> cost: 160 GG "},
            style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(160)&&gcs(this.layer,this.id)!==1&&(gcs(this.layer,81)==1|| gcs(this.layer,82)==1|| gcs(this.layer,83)==1)},
            onClick() {player.G.Gtc=player.G.Gtc.add(160)
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return hasUpgrade('G',131)},
            branches(){return ["81","82","83"]},
        },
        101: {
            title(){return "Gt20"},
            display(){return "b11-12 are stronger,reduce e eff nerf <br> cost: 80 GG "},
            style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(80)&&gcs(this.layer,this.id)!==1&&gcs(this.layer,91)==1},
            onClick() {player.G.Gtc=player.G.Gtc.add(80)
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return hasMilestone('G',23)},
            branches(){return ["91"]},
        },
        102: {
            title(){return "Gt21"},
            display(){ if(hasMilestone('G',25)) return "total GG add b6/9 hardcap and ^1.005 Gse after mil25 <br> cost: 120 GG <br> eff:+"+format(this.effect(),4)
                else return "total GG add b6/9 hardcap <br> cost: 120 GG <br> eff:+"+format(this.effect(),4)},
            style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(120)&&gcs(this.layer,this.id)!==1&&gcs(this.layer,91)==1},
            onClick() {player.G.Gtc=player.G.Gtc.add(120)
                setClickableState(this.layer,this.id,1)
            },
            effect(){
                let ef=player.G.GGtot.pow(0.4).div(666)
                if(hasMilestone('G',25)) ef=player.G.GGtot.pow(0.42).div(600)              
                return ef
            },
            unlocked() {return hasMilestone('G',23)},
            branches(){return ["91"]},
        },
        111: {
            title(){return "Gt22"},
            display(){ if(hasMilestone('G',25)) return "Gs add b6/9 hardcap and ^1.004 Gse after mil25 <br> cost: 110 GG <br> eff:+"+format(this.effect(),4)
                else return "Gs add b6/9 hardcap <br> cost: 110 GG <br> eff:+"+format(this.effect(),4)},
            style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(110)&&gcs(this.layer,this.id)!==1&&gcs(this.layer,91)==1},
            onClick() {player.G.Gtc=player.G.Gtc.add(110)
                setClickableState(this.layer,this.id,1)
            },
            effect(){
                let ef=player.G.Gs.add(10).log(10).add(10).log(10).pow(1.33).div(1e4)   
                if(hasMilestone('G',25)) ef=player.G.Gs.add(10).log(10).add(10).log(10).pow(1.33).div(8000)            
                return ef
            },
            unlocked() {return hasMilestone('G',24)},
            branches(){return ["91"]},
        },
        112: {
            title(){return "Gt23"},
            display(){return "Gs raise itself(stronger) <br> cost: 110 GG <br> eff:^"+format(this.effect())},
            style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(110)&&gcs(this.layer,this.id)!==1&&gcs(this.layer,91)==1},
            onClick() {player.G.Gtc=player.G.Gtc.add(110)
                setClickableState(this.layer,this.id,1)
            },
            effect(){
                let exp=n(1.28)
                if(hasMilestone('G',25)) exp=exp.add(0.02)
                let ef=player.G.Gs.add(10).log(10).add(10).log(10).pow(exp).div(150).add(149/150)
                if(hasMilestone('G',25)) ef=player.G.Gs.add(10).log(10).add(10).log(10).pow(exp).div(120).add(119/120) 
                return ef
            },
            unlocked() {return hasMilestone('G',24)},
            branches(){return ["91"]},
        },
        121: {
            title(){return "Gt24"},
            display(){return "b6/9 hp x1.06,exp +0.07 <br> cost: 200 GG "},
            style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(200)&&gcs(this.layer,this.id)!==1&&gcs(this.layer,111)==1},
            onClick() {player.G.Gtc=player.G.Gtc.add(200)
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return hasMilestone('G',25)},
            branches(){return ["111"]},
        },
        122: {
            title(){return "Gt25"},
            display(){return "boost r5,s^1.8,i^1.5,e^1.01 <br> cost: 200 GG "},
            style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(200)&&gcs(this.layer,this.id)!==1&&gcs(this.layer,112)==1},
            onClick() {player.G.Gtc=player.G.Gtc.add(200)
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return hasMilestone('G',25)},
            branches(){return ["112"]},
        },
    },
    automate(){
        if (player.G.auto) {if (hasMilestone("G",4))  buyBuyable("G",11),buyBuyable("G",12),buyBuyable("G",13)
            if (hasMilestone("G",16))  buyBuyable("G",21),buyBuyable("G",22),buyBuyable("G",23)
            if (hasMilestone("G",18))  buyBuyable("G",31),buyBuyable("G",32)
            if (hasMilestone("G",20))  buyBuyable("G",41),buyBuyable("G",42)
            if (hasMilestone("G",25))  buyBuyable("G",61),buyBuyable("G",62)
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
            base(){   let base = n(2)     
                if(hasMilestone('G',8))  base=Decimal.add(base,0.5)
                if(hasUpgrade('G',52))  base=Decimal.pow(base,1.3)
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
            base(){   let base = n(2)              
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
            base(){   let base = n(2)              
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
        21: {
            title: "Gsb1", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let bas=n(10)
                if (hasUpgrade('G',61)) bas=n(5)
                if (hasUpgrade('G',82)) bas=bas.sub(0.2)
                if (hasUpgrade('G',93)) bas=bas.sub(0.2)
                if (hasUpgrade('G',102)) bas=bas.sub(0.4)
                let e=n(1.35)
                if (x.gte(500)) e=e.add(0.03)
                let cost = Decimal.pow(bas, x.pow(e)).times('100')
                if (x.gte(1200)) cost = cost.mul(n(10).pow(n(2).pow(x.sub(1200).pow(this.sce())).mul(20)))
                if (hasUpgrade('G',65))  cost=Decimal.pow(cost,upgradeEffect('G',65))
                if (hasUpgrade('G',81))  cost=cost.div(upgradeEffect('G',81))
                if (hasMilestone('G',17)) cost = n(10).pow(n(2).pow(x.pow(this.sce())).mul(5))
                return cost
            },
            sce(){
                let e=n(0.38)
                if (hasUpgrade('G',102))  e=e.sub(0.005)
                if (hasMilestone('G',17)) e=e.sub(0.075)
                if (hasMilestone('G',18))  e=e.sub(0.01)
                //if (hasMilestone('G',21))  e=e.sub(0.005)
                if(hasMilestone('G',22)) e=n(0.285)
                return e
            },
            bulk(){
                let tar=n(0)
                if(hasMilestone('G',17))   tar=player[this.layer].Gs.add(10).log(10).div(5).max(1).log(2).pow(this.sce().pow(-1)).sub(getBuyableAmount(this.layer, this.id)).sub(1).ceil().max(1)
                let c = this.cost(getBuyableAmount(this.layer, this.id).add(tar))
                if (player[this.layer].Gs.gte(c)) player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(tar)
            },
            canAfford() { return player[this.layer].Gs.gte(this.cost()) },
            buy() { player[this.layer].Gs = player[this.layer].Gs.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            extra(){
                let e=n(0)
                if (hasUpgrade('G',93))  e=e.add(getBuyableAmount('G',23))
                if (hasUpgrade('G',111))  e=e.add(getBuyableAmount('G',22))
                if (hasUpgrade('G',111)) e=e.pow(1.4) 
                return e
            },
            base(){   let t=n(1.1)
                if (hasUpgrade('G',103)) t=t.add(0.1)
                if(hasUpgrade('G',105)) t=t.mul(1.05)
                if(hasMilestone('G',19)) t=t.mul(1.05)
                let base = player.G.Gs.add(10).log(10).pow(t)    
                if (hasUpgrade('G',63)) base=Decimal.mul(base,1.2) 
                if (hasMilestone('G',15)) base=Decimal.mul(base,13/12) 
                if (hasUpgrade('G',71)) base=Decimal.mul(base,1.1) 
                if (hasUpgrade('G',74))  base=Decimal.mul(base,upgradeEffect('G',74))
                if (hasUpgrade('G',75))  base=Decimal.mul(base,upgradeEffect('G',75))
                return base},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let exp=n(1)
                if (hasUpgrade('G',111)) exp=exp.add(0.2) 
                let ef = Decimal.pow(this.base(),x.add(this.extra()).pow(exp))
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "Gs gain base x"+ format(this.base()) + "  \n\
                Cost: " + format(this.cost()) + " Gs \n\
                Amount: " + player[this.layer].buyables[this.id]  +" + "+ format(this.extra())+" \n\
                Effect: x" + format(this.effect())},
            unlocked() { return hasMilestone('G',14) }
        },
        22: {
            title: "Gsb2", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let bas=n(1e5)
                if (hasUpgrade('G',85))  bas=Decimal.mul(bas,0.4)
                if (hasUpgrade('G',92))  bas=Decimal.mul(bas,0.5)
                let e=n(1.8)
                if (x.gte(50)) e=e.add(0.1)
                if (hasUpgrade('G',104))  e=e.sub(0.05)
                //let cost = Decimal.pow(bas, n(10).pow(x.pow(0.3).mul(2))).times('1e219')
                let cost = Decimal.pow(bas, x.pow(e)).times('2e142')
                if (x.gte(100)) cost = cost.mul(n(10).pow(n(3).pow(x.sub(100).pow(this.sce())).mul(20)))
                if (hasUpgrade('G',65))  cost=Decimal.pow(cost,upgradeEffect('G',65))
                if (hasUpgrade('G',81))  cost=cost.div(upgradeEffect('G',81))
                if (hasUpgrade('G',91))  cost=cost.div('2e142')
                if (hasUpgrade('G',113))  cost = cost.mul(n(10).pow(n(3).pow(this.sce()).mul(10)))
                if(hasMilestone('G',21)) cost = n(10).pow(n(2).pow(x.pow(this.sce())).mul(10))
                return cost
            },
            sce(){
                let e=n(0.57)
                if (hasUpgrade('G',102))  e=e.sub(0.01)
                if (hasMilestone('G',17))  e=e.sub(0.015)
                if (hasMilestone('G',18))  e=e.sub(0.005)
                if (hasUpgrade('G',113))  e=e.sub(0.02)
                if (hasUpgrade('G',121))  e=e.sub(0.02)
                if (player.G.Gsetot.gte('1e13144')) e=e.sub(0.01)
                if(gcs('G',44)==1)  e=e.sub(0.01)
                if(hasMilestone('G',21)) e=n(0.45)
                if(hasMilestone('G',22)) e=n(0.435)
                if(hasMilestone('G',26)) e=n(0.43)
                return e
            },
            canAfford() { return player[this.layer].Gs.gte(this.cost()) },
            bulk(){
                let tar=n(0)
                if(hasMilestone('G',21))   tar=player[this.layer].Gs.add(10).log(10).div(10).max(1).log(2).pow(this.sce().pow(-1)).sub(getBuyableAmount(this.layer, this.id)).sub(1).ceil().max(1)
                let c = this.cost(getBuyableAmount(this.layer, this.id).add(tar))
                if (player[this.layer].Gs.gte(c)) player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(tar)
            },
            buy() { player[this.layer].Gs = player[this.layer].Gs.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   let base = player.G.Gs.add(10).log(10).pow(0.6).div(200)   
                if (hasUpgrade('G',64)) base=base.mul(1.15)
                if (hasMilestone('G',19)) base=base.mul(1.1)
                let sc=n(0.5)
                if (hasUpgrade('G',104))  sc=Decimal.add(sc,0.1)
                if (hasUpgrade('G',111))  sc=Decimal.add(sc,0.05)
                if (base.gte(0.8)) base=base.div(0.8).pow(sc).mul(0.8)
                if (base.gte(5)) base=base.div(5).pow(0.6).mul(5)
                return base},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let exp=n(1)
                let ef = Decimal.mul(this.base(),x.pow(exp))
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "Gs gain exp +"+ format(this.base()) + "  \n\
                Cost: " + format(this.cost()) + " Gs \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: +" + format(this.effect())},
            unlocked() { return (hasUpgrade('G',63)) }
        },
        23: {
            title: "Gsb3", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let bas=n('1e12')
                let e=n(2.1)
                if (x.gte(50)) e=e.add(0.15)
                if (hasUpgrade('G',94))  bas=bas.div(1000)
                if (hasUpgrade('G',104))  e=e.sub(0.1)
                let cost = Decimal.pow(bas, x.pow(e)).times('1e828')
                if (x.gte(100)) cost = cost.mul(n(10).pow(n(3).pow(x.sub(100).pow(this.sce())).mul(20)))
                if (hasUpgrade('G',73))  cost=Decimal.pow(cost,upgradeEffect('G',65))
                if (hasUpgrade('G',81))  cost=cost.div(upgradeEffect('G',81))
                if (hasUpgrade('G',91))  cost=cost.div('1e828')
                if(hasMilestone('G',25))  n(10).pow(n(3).pow(x.pow(this.sce())).mul(5))
                return cost
            },
            sce(){
                let e=n(0.65)
                if(gcs('G',44)==1)  e=e.sub(0.025)
                if(hasMilestone('G',22)) e=n(0.61)
                if(hasMilestone('G',25)) e=n(0.604)
                if(hasMilestone('G',26)) e=n(0.6)
                return e
            },
            canAfford() { return player[this.layer].Gs.gte(this.cost()) },
            bulk(){
                let tar=n(0)
                if(hasMilestone('G',25))   tar=player[this.layer].Gs.add(10).log(10).div(5).max(1).log(3).pow(this.sce().pow(-1)).sub(getBuyableAmount(this.layer, this.id)).sub(1).ceil().max(1)
                let c = this.cost(getBuyableAmount(this.layer, this.id).add(tar))
                if (player[this.layer].Gs.gte(c)) player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(tar)
            },
            buy() { player[this.layer].Gs = player[this.layer].Gs.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   let base = player.G.Gs.add(10).log(10).pow(0.45).div(600)   
                if (base.gte(0.7)) base=base.div(0.7).pow(0.6).mul(0.7)
                if (hasUpgrade('G',125))  base=base.mul('1.1')
                return base},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let exp=n(1)
                let ef = Decimal.mul(this.base(),x.pow(exp))
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "Gs eff exp +"+ format(this.base()) + "  \n\
                Cost: " + format(this.cost()) + " Gs \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: +" + format(this.effect())},
            unlocked() { return (hasUpgrade('G',72)) }
        },
        31: {
            title: "Gsb4", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let bas=n(10)
                let e=n(1.4)
                if (x.gte(500)) e=e.add(0.1)
                if (hasUpgrade('G',85))  bas=n(7)
                if (hasUpgrade('G',93))  bas=n(5)
                if (hasMilestone('G',17))  bas=n(4)
                if (hasUpgrade('G',112))  bas=n(3.5)
                let cost = Decimal.pow(bas, x.pow(e)).times('10')
                if (x.gte(1000)) cost = cost.mul(n(10).pow(n(2).pow(x.sub(1000).pow(this.sce())).mul(20)))
                if (hasUpgrade('G',104))  cost=Decimal.pow(cost,upgradeEffect('G',104))
                if (hasUpgrade('G',105))  cost=cost.div(400)
                if (hasUpgrade('G',115))  cost=n(10).pow(n(2).pow(x.pow(this.sce())).mul(30))
                return cost
            },
            sce(){
                let e=n(0.4)
                if (hasMilestone('G',18))  e=e.sub(0.01)
                if (hasUpgrade('G',113))  e=e.sub(0.01)
                if (hasMilestone('G',19))  e=e.sub(0.03)
                if (hasUpgrade('G',115))  e=e.sub(0.03)
                if(gcs('G',43)==1) e=e.div(clickableEffect('G',43))
                if(gcs('G',51)==1) e=e.div(1.04)
                return e
            },
            canAfford() { return player[this.layer].Gsi.gte(this.cost()) },
            bulk(){
                let tar=n(0)
                if(hasUpgrade('G',115))   tar=player[this.layer].Gsi.add(10).log(10).div(30).max(1).log(2).pow(this.sce().pow(-1)).sub(getBuyableAmount(this.layer, this.id)).sub(1).ceil().max(1)
                let c = this.cost(getBuyableAmount(this.layer, this.id).add(tar))
                if (player[this.layer].Gsi.gte(c)) player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(tar)
            },
            buy() { player[this.layer].Gsi = player[this.layer].Gsi.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            extra(){
                let e=n(0)
                if (hasUpgrade('G',111))  e=e.add(getBuyableAmount('G',33))
                let b5=n(0)
                if (hasUpgrade('G',114))  b5=b5.add(0.2)
                if (hasUpgrade('G',115))  b5=b5.add(0.6)
                if (hasUpgrade('G',121))  b5=b5.add(0.2)
                e=e.add(n(getBuyableAmount('G',32)).mul(b5))
                return e
            },
            base(){   let base = player.G.Gsi.add(10).log(10).pow(1.1).mul(2)
                if (hasUpgrade('G',85))  base=Decimal.mul(base,upgradeEffect('G',85))
                return base},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let exp=n(1)
                if (hasUpgrade('G',113))  exp=exp.add(0.005)
                if (hasUpgrade('G',122))  exp=exp.mul(1.05)
                if (gcs('G',81))  exp=exp.mul(1.05)
                let ef = Decimal.pow(this.base(),x.add(this.extra()).pow(exp)).max(1)
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "Gsi gain base x"+ format(this.base()) + "  \n\
                Cost: " + format(this.cost()) + " Gsi \n\
                Amount: " + player[this.layer].buyables[this.id]  +" + "+ format(this.extra())+" \n\
                Effect: x" + format(this.effect())},
            unlocked() { return (hasUpgrade('G',83)) }
        },
        32: {
            title: "Gsb5", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let bas=n(1e4)
                let e=n(1.85)
                if (hasUpgrade('G',94)) bas=bas.mul(0.25)
                if (hasMilestone('G',17))  bas=n(200)
                if (hasUpgrade('G',112))  bas=n(50)
                let cost = Decimal.pow(bas, x.pow(e)).times('1e64')
                if(hasUpgrade('G',103)) cost=cost.div('1e64')
                if (x.gte(500)) cost = cost.mul(n(10).pow(n(2).pow(x.sub(500).pow(this.sce())).mul(2)))
                if (hasUpgrade('G',104))  cost=Decimal.pow(cost,upgradeEffect('G',104))
                if (hasMilestone('G',25)) cost = n(10).pow(n(2).pow(x.pow(this.sce())))
                return cost
            },
            sce(){
                let e=n(0.6)
                if(gcs('G',51)==1) e=e.sub(0.03)
                if (hasMilestone('G',25)) e=e.sub(0.04)
                return e
            },
            canAfford() { return player[this.layer].Gsi.gte(this.cost()) },
            bulk(){
                let tar=n(0)
                if(hasMilestone('G',25))   tar=player[this.layer].Gsi.add(10).log(10).max(1).log(2).pow(this.sce().pow(-1)).sub(getBuyableAmount(this.layer, this.id)).sub(1).ceil().max(1)
                let c = this.cost(getBuyableAmount(this.layer, this.id).add(tar))
                if (player[this.layer].Gsi.gte(c)) player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(tar)
            },
            buy() { player[this.layer].Gsi = player[this.layer].Gsi.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   let base = player.G.Gsi.add(10).log(10).pow(0.65).div(100)  
                if (hasMilestone('G',19)) base=base.mul(1.1) 
                let sc=n(0.5)
                if (hasUpgrade('G',111)) sc=sc.add(0.1) 
                if (base.gte(0.8)) base=base.div(0.8).pow(sc).mul(0.8)
                return base},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let exp=n(1)
                let ef = Decimal.mul(this.base(),x.pow(exp))
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "Gsi gain exp +"+ format(this.base()) + "  \n\
                Cost: " + format(this.cost()) + " Gsi \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: +" + format(this.effect())},
            unlocked() { return (hasUpgrade('G',83)) }
        },
        33: {
            title: "Gsb6", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let bas=n('1e4')
                let e=n(2.1)
                if (x.gte(6)) e=e.add(0.3)
                if (hasUpgrade('G',104))  e=e.sub(0.15)
                let cost = Decimal.pow(bas, x.pow(e)).times('1e174')
                if(hasUpgrade('G',111)) cost=cost.div('1e174')
                let e2=n(0.75)
                if (x.gte(40))  e2=e2.add(0.05)
                if (x.gte(56))  e2=e2.add(x.sub(54).div(200))
                if (x.gte(20)) cost = cost.mul(n(10).pow(n(3).pow(x.sub(20).pow(e2)).mul(40)))
                if (hasUpgrade('G',104))  cost=Decimal.pow(cost,upgradeEffect('G',104))
                if (hasMilestone('G',24))  cost=cost.pow(0.5)
                if (hasMilestone('G',26))  cost=cost.pow(0.1)
                return cost
            },
            canAfford() { return player[this.layer].Gsi.gte(this.cost()) },
            buy() { player[this.layer].Gsi = player[this.layer].Gsi.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   let base = player.G.Gsi.add(10).log(10).pow(0.4).div(600) 
                if (hasUpgrade('G',103)) base=base.mul(1.25)  
                let sc=n(0.7)
                if (base.gte(0.03)) base=base.div(0.03).pow(sc).mul(0.03)
                base=base.min(this.hardcap())
                return base},
            hardcap(){
                let hp=n(0.6)
                if(hasUpgrade('G',123)) hp=hp.add(0.005)
                if(hasMilestone('G',21)) hp=hp.add(0.005)
                if(hasUpgrade('G',125)) hp=hp.add(upgradeEffect('G',125))
                if(gcs('G',102)) hp=hp.add(clickableEffect('G',102))
                if(gcs('G',111)) hp=hp.add(clickableEffect('G',111))
                if(gcs('G',121)) hp=hp.mul(1.06)
                return hp
            },
            effect(x) { // Effects of owning x of the items, x is a decimal
                let exp=n(1)
                let ef = Decimal.mul(this.base(),x.pow(exp))
                let sc=n(0.5)
                if(hasMilestone('G',21)) sc=sc.add(0.03)
                if(gcs('G',121)) sc=sc.add(0.07)
                if(hasUpgrade('G',133)) sc=sc.add(0.02)
                if(ef.gte(4.2))  ef=ef.div(4.2).pow(sc).mul(4.2)
                if(ef.gte(12))  ef=ef.div(12).pow(0.6).mul(12)
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "Gsi eff exp +"+ format(this.base(),3)  + "(hardcap at "+format(this.hardcap(),3)+")  \n\
                Cost: " + format(this.cost()) + " Gsi \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: +" + format(this.effect())},
            unlocked() { return (hasUpgrade('G',83)) }
        },
        41: {
            title: "Gsb7", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let bas=n(10)
                if (hasUpgrade('G',104))  bas=bas.sub(4)
                if (hasMilestone('G',17))  bas=bas.sub(1)
                if (hasMilestone('G',19))  bas=bas.sub(1.5)
                let e=n(1.45)
                if (x.gte(500)) e=e.add(0.1)
                if(gcs('G',51)==1) e=e.sub(0.04)
                let cost = Decimal.pow(bas, x.pow(e)).times('200')
                if (x.gte(800)) cost = cost.mul(n(10).pow(n(2).pow(x.sub(750).pow(this.sce())).mul(2)))
                if(hasMilestone('G',25)) cost = n(10).pow(n(2).pow(x.pow(this.sce())))
                return cost
            },
            sce(){
                let e=n(0.45)
                if(hasMilestone('G',22)) e=n(0.425)
                if(hasMilestone('G',24)) e=n(0.42)
                if(hasMilestone('G',25)) e=n(0.4)
                return e
            },
            canAfford() { return player[this.layer].Gse.gte(this.cost()) },
            bulk(){
                let tar=n(0)
                if(hasMilestone('G',25))   tar=player[this.layer].Gse.add(10).log(10).max(1).log(2).pow(this.sce().pow(-1)).sub(getBuyableAmount(this.layer, this.id)).sub(1).ceil().max(1)
                let c = this.cost(getBuyableAmount(this.layer, this.id).add(tar))
                if (player[this.layer].Gse.gte(c)) player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(tar)
            },
            buy() { player[this.layer].Gse = player[this.layer].Gse.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            extra(){
                let e=n(0)
                if (hasUpgrade('G',114))  e=e.add(getBuyableAmount('G',43)).add(getBuyableAmount('G',44))
                return e
            },
            base(){   let base = player.G.Gse.add(10).log(10).pow(1.1).mul(2)
                return base},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let exp=n(1)
                if (gcs('G',81))  exp=exp.mul(1.01)
                let ef = Decimal.pow(this.base(),x.add(this.extra()).pow(exp)).max(1)
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "Gse gain base x"+ format(this.base()) + "  \n\
                Cost: " + format(this.cost()) + " Gse \n\
                Amount: " + player[this.layer].buyables[this.id]  +" + "+ format(this.extra())+" \n\
                Effect: x" + format(this.effect())},
            unlocked() { return (hasUpgrade('G',101)) }
        },
        42: {
            title: "Gsb8", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let bas=n(4000)
                let e=n(1.95)
                if (x.gte(20)) e=e.add(0.15)
                if(gcs('G',51)==1) e=e.sub(0.08)
                if (hasMilestone('G',17))  bas=n(1000)
                if (hasUpgrade('G',112))  bas=n(200)
                if (hasMilestone('G',19))  bas=n(100)
                let cost = Decimal.pow(bas, x.pow(e)).times('1e26')
                if (x.gte(80)) cost = cost.mul(n(10).pow(n(2).pow(x.sub(50).pow(this.sce())).mul(2)))
                return cost
            },
            sce(){
                let e=n(0.65)
                if(hasMilestone('G',22)) e=n(0.61)
                return e
            },
            canAfford() { return player[this.layer].Gse.gte(this.cost()) },
            buy() { player[this.layer].Gse = player[this.layer].Gse.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   
                let exp=n(0.5)
                if (hasUpgrade('G',112))  exp=exp.add(0.05) 
                let base = player.G.Gse.add(10).log(10).pow(exp).div(100).add(0.05) 
                if (player.G.Gse.gte('1e5171')) base=base.mul(1.05) 
                return base},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let exp=n(1)
                let ef = Decimal.mul(this.base(),x.pow(exp))
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "Gse gain exp +"+ format(this.base()) + "  \n\
                Cost: " + format(this.cost()) + " Gse \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: +" + format(this.effect())},
            unlocked() { return (hasUpgrade('G',101)) }
        },
        43: {
            title: "Gsb9", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let bas=n('1e4')
                let e=n(2.4)
                if (x.gte(8)) e=e.add(0.6)
                let cost = Decimal.pow(bas, x.pow(e)).times('2e52')                
                if (x.gte(12)) cost = cost.mul(n(10).pow(n(2).pow(x.sub(6).pow(this.sce())).mul(40)))
                if (hasMilestone('G',24))  cost=cost.pow(0.8)
                if (hasMilestone('G',26))  cost=cost.pow(0.8)
                if (hasUpgrade('G',111)) cost=cost.div('200')
                return cost
            },
            sce(){
                let e=n(0.95)
                if (n(getBuyableAmount(this.layer, this.id)).gte(20))  e=e.add(n(getBuyableAmount(this.layer, this.id)).sub(18).div(80))
                if (player.G.Gsetot.gte('1e13144')) e=e.sub(0.03)
                return e
            },
            canAfford() { return player[this.layer].Gse.gte(this.cost()) },
            buy() { player[this.layer].Gse = player[this.layer].Gse.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   let base = player.G.Gsi.add(10).log(10).pow(0.38).div(750)
                let sc=n(0.7)
                if (base.gte(0.02)) base=base.div(0.02).pow(sc).mul(0.02) 
                if(getClickableState('G',31)==1)  base=base.mul(1.02)
                base=base.min(this.hardcap())
                return base},
            hardcap(){
                let hp=n(0.3)
                if(hasUpgrade('G',123)) hp=hp.add(0.005)
                if(hasMilestone('G',21)) hp=hp.add(0.005)
                if(gcs('G',102)) hp=hp.add(clickableEffect('G',102))
                if(gcs('G',111)) hp=hp.add(clickableEffect('G',111))
                if(gcs('G',121)) hp=hp.mul(1.06)
                return hp
            },
            effect(x) { // Effects of owning x of the items, x is a decimal
                let exp=n(1)
                let ef = Decimal.mul(this.base(),x.pow(exp))
                let sc=n(0.5)
                if(hasMilestone('G',21)) sc=sc.add(0.03)
                if(gcs('G',121)) sc=sc.add(0.07)
                if(hasUpgrade('G',133)) sc=sc.add(0.02)
                if(ef.gte(1.1))  ef=ef.div(1.1).pow(sc).mul(1.1)
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "Gse 1st eff exp +"+ format(this.base(),3) + "(hardcap at "+format(this.hardcap(),3)+")  \n\
                Cost: " + format(this.cost()) + " Gse \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: +" + format(this.effect())},
            unlocked() { return (hasUpgrade('G',101)) }
        },
        44: {
            title: "Gsb10", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let e=n(0.75)
                if (x.gte(18))  e=e.add(0.05)
                let cost = n(10).pow(n(2).pow(x.pow(e)).mul(12)).mul('1e2108')//1e2120 for 1st
                if (hasUpgrade('G',122))  cost = n(10).pow(n(2).pow(x.pow(e)).mul(7.5))
                return cost
            },
            canAfford() { return player[this.layer].Gse.gte(this.cost()) },
            buy() { player[this.layer].Gse = player[this.layer].Gse.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   let base = player.G.Gse.add(10).log(10).pow(0.5).div(300) 
                if (player.G.Gse.gte('1e5103')) base=base.mul(1.1)
                return base},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let exp=n(1)
                let sc=n(0.7)
                if(hasMilestone('G',20)) sc=sc.add(0.05)
                let ef = Decimal.mul(this.base(),x.pow(exp))
                if(ef.gte(10))  ef=ef.div(10).pow(sc).mul(10)
                if(ef.gte(40))  ef=ef.div(40).pow(0.8).mul(40)
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "Gse 2nd eff mult +"+ format(this.base(),3) + "  \n\
                Cost: " + format(this.cost()) + " Gse \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: +" + format(this.effect())},
            unlocked() { return (hasUpgrade('G',111)) }
        },
        51: {
            title: "Gsb11", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let e=n(0.95)
                if (hasUpgrade('G',121))  e=e.sub(0.03)
                let cost = n(10).pow(n(2).pow(x.pow(e)).mul(20)).mul('1e5047')
                if(hasUpgrade('G',124)) cost = n(10).pow(n(2).pow(x.pow(e)).mul(16)).mul('1e5047')
                if(hasUpgrade('G',131)) cost = n(10).pow(n(2).pow(x.pow(e)).mul(10))
                if(hasUpgrade('G',132)) cost = n(10).pow(n(2).pow(x.pow(e)).mul(6))
                return cost
            },
            canAfford() { return player[this.layer].Gse.gte(this.cost()) },
            buy() { player[this.layer].Gse = player[this.layer].Gse.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   let base = n(1.01) 
                if(getClickableState('G',32)==1)  base=base.add(0.002)
                if(gcs('G',83))  base=base.add(0.0025)
                if(gcs('G',101))  base=base.add(0.0035)
                return base},
            effect(x) {
                let ef = Decimal.pow(this.base(),x)
                return ef},
            display() {
                return "raise Gs gain to ^"+ format(this.base(),4) + "  \n\
                Cost: " + format(this.cost()) + " Gse \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: ^" + format(this.effect(),3)},
            unlocked() { return (hasMilestone('G',19)) }
        },
        52: {
            title: "Gsb12", 
            cost(x) {
                let e=n(1.05)
                if (hasUpgrade('G',121))  e=e.sub(0.04)
                let cost = n(10).pow(n(2).pow(x.pow(e)).mul(25)).mul('1e5051')//1e5076 for 1st
                if(hasUpgrade('G',124)) cost = n(10).pow(n(2).pow(x.pow(e)).mul(20)).mul('1e5051')
                if(hasUpgrade('G',131)) cost = n(10).pow(n(2).pow(x.pow(e)).mul(12))
                if(hasUpgrade('G',132)) cost = n(10).pow(n(2).pow(x.pow(e)).mul(8))
                return cost
            },
            canAfford() { return player[this.layer].Gse.gte(this.cost()) },
            buy() { player[this.layer].Gse = player[this.layer].Gse.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   let base = n(1.0085) 
                if(getClickableState('G',32)==1)  base=base.add(0.002)
                if(gcs('G',83))  base=base.add(0.0015)
                if(gcs('G',101))  base=base.add(0.004)
                return base},
            effect(x) { 
                let ef = Decimal.pow(this.base(),x)
                return ef},
            display() {
                return "raise Gsi gain to ^"+ format(this.base(),4) + "  \n\
                Cost: " + format(this.cost()) + " Gse \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: ^" + format(this.effect(),3)},
            unlocked() { return (hasMilestone('G',19)) }
        },
        61: {
            title: "GG1", 
            cost(x) {
                let cost = n(10).pow(x.add(10).pow(this.sce())).mul('3.2e5886')//~1e6045 for 1st
                if (hasUpgrade('G',121))  cost=cost.div('1e6045').pow(0.8).mul('1e6045')
                if (x.gte(200)) cost=cost.mul(n(10).pow(n(10).pow(x.sub(180).pow(0.28)).mul(5)))
                if (x.gte(500)) cost=cost.pow(n(1.25).add(x.sub(500).pow(0.35).div(50)))
                return cost
            },
            sce(){
                let e=n(2.2)
                //if(hasUpgrade('G',123)) e=e.sub(0.03)
                if (player.G.Gsetot.gte('1e27700')) e=e.sub(0.05)
                if(hasUpgrade('G',124)) e=e.sub(0.03)
                if (player.G.GGtot.gte(311)) e=e.sub(0.04)
                return e
            },
            canAfford() { return player[this.layer].Gse.gte(this.cost()) },
            buy() { player[this.layer].Gse = player[this.layer].Gse.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.G.GG=player.G.GG.add(1)
                player.G.GGtot=player.G.GGtot.add(1)},
            effect(x) { 
                let ef = n(x)
                return ef},
            display() { 
                return "gain 1 GG  \n\
                Cost: " + format(this.cost()) + " Gse \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: +" + format(this.effect())},
            unlocked() { return (hasUpgrade('G',115)) }
        },
        62: {
            title: "GG2", 
            cost(x) {
                //let cost = n(10).tetrate(n(7.0895).add(x.add(10).log(10).div(50)))//~1.287F7/1095 for 1st
                //if (hasMilestone('G',25)) cost = n(10).tetrate(n(7.0895).add(x.add(10).log(10).pow(0.85).div(50)))
                //if(x.gte(15)) cost=n(10).tetrate(n(6.3669).add(x.pow(0.15).div(2)))
                let cost = n(10).tetrate(n(6.2103).add(x.add(50).pow(0.15).div(2)))
                return cost
            },
            canAfford() { return player.points.gte(this.cost()) },
            buy() { 
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.G.GG=player.G.GG.add(3)
                player.G.GGtot=player.G.GGtot.add(3)},
            effect(x) { 
                let ef = n(x).mul(this.amt())
                return ef},
            amt(){
                let m=n(3)
                if(hasUpgrade('G',133)) m=m.add(1)
                return m
            },
            display() { 
                return "gain " + format(this.amt()) + " GG  \n\
                Cost: " + format(this.cost()) + " points \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: +" + format(this.effect())},
            unlocked() { return (hasMilestone('G',24)) }
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
                if (challengeCompletions("G", 12) == 3) return Decimal.pow(10,7000);
                if (challengeCompletions("G", 12) == 4) return Decimal.pow(10,11500);
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
                return "TBs eff is polynomial instead of exponential and disable other TB boosts. <br> Completion: " +challengeCompletions("G", 22) + "/5"},
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
                //if(hasUpgrade('G',54)) ef=Decimal.mul(ef,1.2)
                if (challengeCompletions("G", 22) >= 1)  return ef
                else return new Decimal(0)
            },
            rewardDisplay() {return '+'+format(this.rewardEffect(),3)},
        },
    },
    gc1g(){
        let ef=n(0)
        let exp=n(0.75)
        let exp2=n(0.95)
        if (hasUpgrade('G',55)) exp2=Decimal.add(exp2,0.05)
        if (hasUpgrade('F',83)) exp=Decimal.add(exp,0.02)
        if (hasUpgrade('G',42)) exp=Decimal.add(exp,0.02)
        if (hasUpgrade('G',43)) exp=Decimal.add(exp,0.03)
        if(hasMilestone('G',8)) exp=Decimal.add(exp,0.05)
        if(hasMilestone('G',9)) exp=Decimal.add(exp,0.03)
        if (inChallenge('G',11)){
            if (player.F.F1.gte('1e1080')) ef=Decimal.pow(10,player.F.F1.div('1e1080').log(10).pow(exp))}
        if(hasMilestone('G',10)) ef=Decimal.pow(10,player.F.F1.pow(exp2).add(10).log(10).pow(exp))
        if (hasUpgrade('G',41)) ef=Decimal.pow(ef,upgradeEffect('G',41))
        return ef
    },
    gc2g(){
        let ef=n(0)
        let exp=n(0.6)
        let exp2=n(0.9)
        if (hasUpgrade('G',55)) exp2=Decimal.add(exp2,0.1)
        if (hasUpgrade('F',83)) exp=Decimal.add(exp,0.02)
        if (hasUpgrade('G',42)) exp=Decimal.add(exp,0.02)
        if (hasUpgrade('G',43)) exp=Decimal.add(exp,0.06)
        if(hasMilestone('G',8)) exp=Decimal.add(exp,0.05)
        if(hasMilestone('G',9)) exp=Decimal.add(exp,0.05)
        if (inChallenge('G',12)){
            if (player.F.F1.gte('1e3050')) ef=Decimal.pow(10,player.F.F1.div('1e3050').log(10).pow(exp))}
        if(hasMilestone('G',12)) ef=Decimal.pow(10,player.F.F1.pow(exp2).add(10).log(10).pow(exp))
        if (hasUpgrade('G',41)) ef=Decimal.pow(ef,upgradeEffect('G',41))
        return ef
    },
    gc3g(){
        let ef=n(0)
        let exp=n(3)
        let exp2=n(0.2)
        if (hasUpgrade('G',55)) exp2=Decimal.add(exp2,0.05)
        if (hasUpgrade('F',85)) exp=Decimal.mul(exp,2)
        if (inChallenge('G',21)){
            if (player.F.F1.gte('1e168000')){
                if (challengeCompletions("G", 22)>=4) ef=Decimal.pow(10,player.F.F1.div('1e168000').log(10).pow(exp2))
                else ef=player.F.F1.div('1e168000').log(10).pow(exp)} }
        if(hasMilestone('G',13)) ef=Decimal.pow(10,player.F.F1.pow(0.2).add(10).log(10).pow(exp))
        if (hasUpgrade('G',41)) ef=Decimal.pow(ef,upgradeEffect('G',41))
        return ef
    },
    gc4g(){
        let ef=n(0)
        let exp=n(2)
        let exp2=n(0.14)
        if (hasUpgrade('G',51)) exp2=Decimal.add(exp2,0.01)
        if (inChallenge('G',22)){
            if (player.F.F1.gte('e2.35e9')){
                if (challengeCompletions("G", 22)>=5) ef=Decimal.pow(10,player.F.F1.div('e2.35e9').log(10).pow(exp2))
                else ef=player.F.F1.div('e2.35e9').log(10).pow(exp)} }
        if(hasMilestone('G',13)) ef=Decimal.pow(10,player.F.F1.pow(0.2).add(10).log(10).pow(exp))
        if (hasUpgrade('G',41)) ef=Decimal.pow(ef,upgradeEffect('G',41))
        return ef
    },
    gc1ef(){
        let exp=n(0.1)
        if (hasMilestone('F',18)) exp=Decimal.mul(exp,1.5)
        if (hasUpgrade('G',53))  exp=Decimal.add(exp,0.1)
        let ef=Decimal.pow(player.G.Gc1p,exp).add(1)
        return ef},
    gc2ef(){
        let exp=n(0.04)
        if (hasUpgrade('F',83)) exp=Decimal.mul(exp,1.5)
        if (hasUpgrade('G',53))  exp=Decimal.add(exp,0.04)
        let ef=Decimal.pow(player.G.Gc2p,exp).add(1)
        return ef},
    gc3ef(){
        let exp=n(0.04)
        if(hasMilestone('G',7)) exp=Decimal.mul(exp,1.5)
        if (hasUpgrade('G',53))  exp=Decimal.add(exp,0.02)
        let ef=Decimal.pow(player.G.Gc3p,exp).add(1)
        return ef},
    gc4ef(){
        let exp=n(1.5)
        if (hasUpgrade('G',53))  exp=Decimal.add(exp,0.3)
        let ef=player.G.Gc4p.add(1).log(10).pow(exp).div(400)
        return ef},    
    gsb(){
        let ef=n(0)
        let exp=n(1)
        if (hasUpgrade('G',62))  exp=Decimal.mul(exp,2)
        exp=Decimal.mul(exp,buyableEffect('G',22).add(1))
        if (player.G.points.gte('ee1e500')) ef=player.G.points.log(10).log(10).log(10).sub(450).div(50).min('1e100000').pow(exp)
        let sc1=n(0.85)
        if (hasUpgrade('G',101)) sc1=sc1.add(0.03)
        if (hasUpgrade('G',103)) sc1=sc1.add(0.02)
        if (hasMilestone('G',17)) sc1=sc1.add(0.02)
        let sc2=n(0.78)
        if (hasMilestone('G',17)) sc2=sc2.add(0.02)
        if (ef.gte('1e100')) ef=n('1e100').mul(n(10).pow(ef.div('1e100').log(10).mul(sc1)))
        if (ef.gte('1e10000')) ef=n('1e10000').mul(n(10).pow(ef.div('1e10000').log(10).mul(sc2)))
        ef=ef.min('e1e10')
        if (hasUpgrade('G',101)) ef=Decimal.pow(ef,1.05)
        ef=Decimal.mul(ef,buyableEffect('G',21))
        ef=Decimal.mul(ef,tmp.G.gsir)
        if (ef.gte('ee19')) ef=n('ee19').mul(n(10).pow(ef.div('ee19').log(10).mul(0.8)))
        ef=Decimal.pow(ef,buyableEffect('G',51))
        if (hasUpgrade('G',72)) ef=Decimal.mul(ef,upgradeEffect('G',72))
        if(gcs('G',44))  ef=ef.pow(clickableEffect('G',44))
        if(gcs('G',63))  ef=ef.pow(clickableEffect('G',63))
        if(gcs('G',73))  ef=ef.pow(clickableEffect('G',73))
        if(gcs('G',112))  ef=ef.pow(clickableEffect('G',112))
        if(gcs('G',122))  ef=ef.pow(1.8)
        return ef},
    gsef(){
        let exp=n(2)
        if (hasUpgrade('G',62))  exp=Decimal.mul(exp,1.5)
        if (hasMilestone('G',15))  exp=Decimal.add(exp,0.2)
        if (hasUpgrade('G',64))  exp=Decimal.add(exp,0.4)
        if (hasUpgrade('G',71))  exp=Decimal.add(exp,0.4)
        if (hasUpgrade('G',83))  exp=Decimal.add(exp,0.3)
        exp=Decimal.add(exp,buyableEffect('G',23))
        let ef=player.G.Gs.add(10).log(10).pow(exp)
        return ef}, 
    gsib(){
        let ef=n(0)
        let exp=n(1.1)
        exp=Decimal.mul(exp,buyableEffect('G',32).add(1))
        if (hasUpgrade('G',94)) exp=exp.add(0.4)
        if (hasUpgrade('G',105)) exp=exp.add(0.3)
        if (player.G.Gs.gte('1e2920')) ef=player.G.Gs.add(10).log(10).sub(2920).max(0).pow(exp).div(10)
        let sc1=n(0.85)
        if (ef.gte('1e100000')) ef=n('1e100000').mul(n(10).pow(ef.div('1e100000').log(10).mul(sc1)))
        ef=Decimal.mul(ef,buyableEffect('G',31))
        ef=Decimal.mul(ef,tmp.G.gser)
        ef=Decimal.pow(ef,buyableEffect('G',52))
        if (hasUpgrade('G',84))  ef=ef.mul(upgradeEffect('G',84))
        if(hasUpgrade('G',95))  ef=ef.mul(upgradeEffect('G',95))
        if(gcs('G',62))  ef=ef.pow(clickableEffect('G',62))
        if(gcs('G',72))  ef=ef.mul(clickableEffect('G',72)[0])
        if(player.G.Gsetot.gte('e260000')) ef=ef.pow(clickableEffect('G',72)[1])
        if(gcs('G',122))  ef=ef.pow(1.5)
        return ef},
    gsief(){
        let exp=n(0.7)
        exp=Decimal.add(exp,buyableEffect('G',33))
        exp=Decimal.add(exp,tmp.G.gser2)
        let sc=n(0.7).pow(exp.add(8).max(10).log(10).add(9).log(10))
        if (exp.gte(3)) exp=exp.div(3).pow(sc).mul(3) 
        let m=n(1.25)
        if (hasUpgrade('G',94))  m=m.mul(1.2)
        if (hasUpgrade('G',95))  m=m.mul(1.2)
        let ef=player.G.Gsi.add(10).log(10).pow(exp).sub(1).mul(m)
        let sc1=n(0.9)
        if(hasUpgrade('G',111)) sc1=sc1.add(0.03)
        if(hasUpgrade('G',112)) sc1=sc1.add(0.03)
        if(gcs('G',42)) sc1=sc1.add(0.02)
        //if(hasMilestone('G',20)) sc1=sc1.add(0.02)  //too strong that cause infinite growth
        if(gcs('G',82)) sc1=sc1.add(0.02)
        if (ef.gte('500')) ef=ef.div(500).pow(sc1).mul(500)
        if (ef.gte('250000')) ef=ef.div(250000).pow(0.5).mul(250000)
        if (ef.gte('5e7')) ef=ef.div(5e7).pow(0.6).mul(5e7)
        if (ef.gte('1e9')) ef=n('1e9').mul(n(10).pow(ef.div('1e9').log(10).mul(0.8)))
        if (ef.gte('1e15')) ef=n('1e15').mul(n(10).pow(ef.div('1e15').log(10).mul(0.7)))
        if (ef.gte('1e25')) ef=n('1e25').mul(n(10).pow(ef.div('1e25').log(10).mul(0.8)))
        return ef}, 
    gsir(){//real eff on Gs gain
        let ef=player.G.Gs.add(10).log(10).pow(tmp.G.gsief).max(1)
        return ef}, 
    gseb(){
        let ef=n(0)
        let exp=n(0.9)
        if (hasUpgrade('G',105)) exp=exp.add(0.05)
        exp=Decimal.mul(exp,buyableEffect('G',42).add(1))
        if(gcs('G',91)) exp=exp.mul(1.2)
        if (player.G.Gsi.gte('1e345')) ef=player.G.Gsi.add(10).log(10).sub(345).max(0).pow(exp).div(2)
        ef=Decimal.mul(ef,buyableEffect('G',41))
        if (hasUpgrade('G',102))  ef=ef.mul(upgradeEffect('G',102))
        if(hasUpgrade('G',105))  ef=ef.mul(upgradeEffect('G',105))
        if(gcs('G',21))  {if(hasUpgrade('G',132)) ef=ef.pow(clickableEffect('G',21)[1])
            else ef=ef.mul(clickableEffect('G',21)[0])}
        if(gcs('G',33))  ef=ef.pow(clickableEffect('G',33))
        if(gcs('G',61))  ef=ef.pow(clickableEffect('G',61))
        if(gcs('G',71))  ef=ef.mul(clickableEffect('G',71))
        if(hasMilestone('G',25))    {if(gcs('G',102))  ef=ef.pow(1.005)
            if(gcs('G',111))  ef=ef.pow(1.004)}
        if(gcs('G',122))  ef=ef.pow(1.01)
        if(ef.gte('e6e7')) ef=ef.div('e6e7').pow(0.6).mul('e6e7') 
        if(ef.gte('ee8')) ef=ef.div('ee8').pow(0.5).mul('ee8')   
        return ef},
    gseef(){
        let exp=n(0.6)
        exp=Decimal.add(exp,buyableEffect('G',43))
        if(gcs('G',41)) exp=exp.add(0.03)
        let ef=player.G.Gse.add(10).log(10).pow(exp).sub(1)
        if(!hasUpgrade('G',131)) {if (ef.gte('50')) ef=ef.div(50).pow(0.6).mul(50)}
        if (ef.gte('1000')) ef=n(1000).mul(n(10).pow(ef.div(1000).log(10).mul(0.8)))
        if (ef.gte('5e4')) ef=n(5e4).mul(n(10).pow(ef.div(5e4).log(10).mul(0.6)))
        let sc4=n(0.5)
        if(hasUpgrade('G',124)) sc4=sc4.add(0.3)
        if(hasUpgrade('G',125)) sc4=sc4.add(0.1)
        if(gcs('G',101)) sc4=sc4.add(0.05)
        if (ef.gte('3e5')) ef=n(3e5).mul(n(10).pow(ef.div(3e5).log(10).mul(sc4)))
        if (ef.gte('1e9')) ef=n(1e9).mul(n(10).pow(ef.div(1e9).log(10).mul(0.8)))
        return ef}, 
    gser(){//real eff on Gsi gain
        let ef=player.G.Gsi.add(10).log(10).pow(tmp.G.gseef).max(1)
        return ef}, 
    gser2(){//boost Gsi eff
        let m=n(1)
        let k=n(0.55)
        if(hasUpgrade('G',113)) k=k.add(0.03)
        if(gcs('G',41)) k=k.add(0.02)
        if(hasUpgrade('G',124)) k=k.add(0.03)
        if(hasUpgrade('G',111)) m=m.add(buyableEffect('G',44)).pow(k)
        let ef=player.G.Gse.add(10).log(10).pow(0.4).div(200).sub(0.005).max(0).mul(m)
        if(hasMilestone('G',17)) ef=ef.mul(1.5)
        if(ef.gte(8)) ef=ef.div(8).pow(0.66).mul(8)    
        if(ef.gte(12)) ef=ef.div(12).pow(0.75).mul(12)
        if(ef.gte(18)) ef=n(18).mul(n(10).pow(ef.div(18).log(10).mul(0.5)))     
        if(ef.gte(22)) ef=player.G.Gse.add(10).log(10).add(10).log(10).pow(1.25).div(15).mul(m).add(7).max(22)   
        if(ef.gte(25)) ef=ef.div(25).pow(0.45).mul(25)  
        return ef},
    update(diff) {
        if (challengeCompletions("G", 11)>=3)  player.G.Gc1p = player.G.Gc1p.add(tmp.G.gc1g.mul(diff))
        if (challengeCompletions("G", 12)>=3)  player.G.Gc2p = player.G.Gc2p.add(tmp.G.gc2g.mul(diff))
        if (challengeCompletions("G", 21)>=3)  player.G.Gc3p = player.G.Gc3p.add(tmp.G.gc3g.mul(diff))
        if (challengeCompletions("G", 22)>=3)  player.G.Gc4p = player.G.Gc4p.add(tmp.G.gc4g.mul(diff))
        if (hasMilestone("G", 14))  player.G.Gs = player.G.Gs.add(tmp.G.gsb.mul(diff))
        if (hasUpgrade("G", 83))  player.G.Gsi = player.G.Gsi.add(tmp.G.gsib.mul(diff))
        if (hasUpgrade("G", 91))  player.G.Gse = player.G.Gse.add(tmp.G.gseb.mul(diff))
        if (hasUpgrade("G", 115))  player.G.GG = player.G.GGtot.sub(player.G.Gtc)
        player.G.Gsetot = player.G.Gsetot.max(player.G.Gse)
    },
})