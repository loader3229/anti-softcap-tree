addLayer("F", {
    name: "F", 
    symbol: "F", 
    position: 1, 
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        F1: new Decimal(10),
        fd1: new Decimal(0),
        fd2: new Decimal(0),
        fd3: new Decimal(0),
        fd4: new Decimal(0),
        fd5: new Decimal(0),
        fd6: new Decimal(0),
        fd7: new Decimal(0),
        fd8: new Decimal(0),
        F2: new Decimal(1),
        f2d1: new Decimal(0),
        f2d2: new Decimal(0),
        f2d3: new Decimal(0),
        f2d4: new Decimal(0),
    }},
    resetsNothing(){return upg('F',65)},//||mil('I',1)
    passiveGeneration(){    let p=n(0)
        if(mil("F", 9)||mil('I',1)) p=p.add(0.02)
        if(gcs('I',35)) p=n(1)
        return p},
    color: "#264321",
    requires: new Decimal('1e1024'), 
    resource: "F", 
    baseResource: "E", 
    baseAmount() {return player.E.points}, 
    type: "normal", 
    exponent: 0.004, 
    gainExp() {
        let ef=n(1)
        //if (upg('F',32)) ef=Decimal.add(ef,1.1)
        //if (upg('F',33)) ef=Decimal.add(ef,1.1)
        if(gcs('I',32)) ef=ef.add(0.2)
        return ef
    },
    row: 3, 
    hotkeys: [
        {key: "f", description: "F: Reset for F points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    autoUpgrade() {return (gcs('I',101))},
    layerShown(){return ((mil('E',20))||player[this.layer].unlocked)},
    gainMult() { 
        mult = n(1)
        if (upg('F',21)) mult=Decimal.mul(mult,2)
        if (upg('F',23)) mult=Decimal.mul(mult,upgradeEffect('F',23))
        if (upg('F',32)) mult=Decimal.mul(mult,upgradeEffect('F',32))
        if (mil('F',10)) mult=Decimal.mul(mult,tmp.F.F1f)

        return mult
    },
    branches: ['E'],
    milestones: {
        0: {requirementDescription: "1 total F (1",
            done() {return player[this.layer].total.gte('1')}, 
            effectDescription: "keep A upg and chal,B mil,x1 E pas gain,x10 A/B/E.",
        },
        1: {requirementDescription: "2 total F (2",
            done() {return player[this.layer].total.gte('2')}, 
            effectDescription: "keep C/D upg and mil,E mil.",
        },
        2: {requirementDescription: "4 total F (3",
            done() {return player[this.layer].total.gte('4')}, 
            effectDescription: "bulk buy x2 B upg,B26 ^1.1,keep C chal.",
        },
        3: {requirementDescription: "6 total F (4",
            done() {return player[this.layer].total.gte('6')}, 
            effectDescription: "autobuy E upg.",
        },
        4: {requirementDescription: "15 total F (5",
            done() {return player[this.layer].total.gte('15')}, 
            effectDescription: "keep B/E upg.",
        },
        5: {requirementDescription: "50 total F (6",
            done() {return player[this.layer].total.gte('50')}, 
            effectDescription: "keep E chal.",
        },
        6: {requirementDescription: "160 total F (7",
            done() {return player[this.layer].total.gte('160')}, 
            effectDescription: "x10 bulk buy Eb1-3.",
        },
        7: {requirementDescription: "1.5e7 total F (8",
            done() {return player[this.layer].total.gte('1.5e7')}, 
            effectDescription: "Bb5 x1.025.",
        },
        8: {requirementDescription: "1e9 total F (9",
            done() {return player[this.layer].total.gte('1e9')}, 
            effectDescription: "x1e100 pts,unlock a chal.",
        },
        9: {requirementDescription: "1e26 total F (10",
            done() {return player[this.layer].total.gte('1e26')}, 
            effectDescription: "gain 2% F on reset/sec.",
        },
        10: {requirementDescription: "1e120 total F (11",
            done() {return player[this.layer].total.gte('1e120')}, 
            effectDescription: "unlock F1 and F dim.",
        },
        11: {requirementDescription: "1e10 total F1 (12",
            done() {return player[this.layer].F1.gte('1e10')}, 
            effectDescription: "unlock tickspeed.",
        },
        12: {requirementDescription: "1e45 total F1 (13",
            done() {return player[this.layer].F1.gte('1e45')}, 
            effectDescription: "Eb10 is cheaper,Fc1 x1.2.",
        },
        13: {requirementDescription: "1e69 total F1 (14",
            done() {return player[this.layer].F1.gte('1e69')}, 
            effectDescription: "unlock dimboost.",
        },
        14: {requirementDescription: "1 tickboost (15",
            done() {return (gba('F',102).gte(1))}, 
            effectDescription: "x10 F1,start with 1e6 F1,unlock new upg.",
        },
        15: {requirementDescription: "2 tickboost (16",
            done() {return (gba('F',102).gte(2))}, 
            effectDescription: "start with 1e30 F1,dimmult per buy +0.15,autobuy dims.",
            toggles: [["F","auto1"]]
        },
        16: {requirementDescription: "3 tickboost (17",
            done() {return (gba('F',102).gte(3))}, 
            effectDescription: "autobuy tickspeed,bulk buy x10 Bb/Eb.",
            toggles: [["F","auto2"]]
        },
        17: {requirementDescription: "6 tickboost (18",
            done() {return (gba('F',102).gte(6))}, 
            effectDescription: "bulk buy Bb/Eb base on total G,G6/10 are stronger,unlock new upg,only can be bought in Gc.",
        },
        18: {requirementDescription: "19 tickboost (19",
            done() {return (gba('F',102).gte(19))}, 
            effectDescription: "edit F dim cost,Gc1p eff ^1.5.",
        },
    },
    doReset(layer){
        if (layer=="G") {        
            let keep = []
            keep.push("milestones")
            keep.push("upgrades")
            keep.push("challenges")
            //if(mil("G",8)) keep.push("buyables")
            //let k=player.F.buyables[111,112]
            //let k = []
            //keep.push(buyables[111,112])
            //for(let i in player.F.buyables) k[i]=gba('F',i)
            layerDataReset(this.layer, keep)
        }
            //for(let i in k) setBuyableAmount('F',i,k[i])
        if (layer=="I") {        
            let keep = []
            if(gcs('I',13))  keep.push("challenges")
            if(gcs('I',36))  keep.push("milestones")
            layerDataReset(this.layer, keep)
            if(gcs('I',15)&&!gcs('I',36))  player[this.layer].milestones=[11,12,13,14,15,16]
            if(gcs('I',36))  player[this.layer].upgrades=[71,72,73,74,75,81,82,83,84,85]
        }
    },
    microtabs: {
        stuff: {       
            "Upgrades": {
                unlocked() {return true},
                content: [ ["raw-html", () => `<h4 style="opacity:.5">welcome to row 3.F resets row 1-2.</h4>`],"upgrades"]}, 
            "Milestones": {
                unlocked() {return true},
                content: [["raw-html", () => `<h4 style="opacity:.5">keep something as you get more F.</h4>`],"milestones"]},
            "Challenges": {
                unlocked() {return (mil("F",8))},
                content: ["challenges"]},
            "F dims": {
                unlocked() {return (mil("F",10))},
                content: [["raw-html", () => `<h4 style="opacity:.5">this part is from Antimatter Dimensions(but easier).<br></h4>`]
                //["raw-html", () => `<h4 style="opacity:.5">like Em,F1 mults F.<br></h4>`]
                ,["display-text", () => "You have <h3 style='color: #128253; text-shadow: 0 0 3px #c2b280'>" + format(player.F.F1) + "</h3> F1, mult F by <h3 style='color: #128253; text-shadow: 0 0 3px #c2b280'> " + format(tmp.F.F1f) + "x</h3>.<br>" + "<h4>" + format(tmp.F.F1effect.mul(player.F.fd1)) + " F1/s<h4> <br>"],
                ,["display-text", () => "dim mult per buy: x<h3 style='color: #128253; text-shadow: 0 0 3px #c2b280'>" + format(tmp.F.fdbas)],
                ,["display-text", () => "tickspeed mult per buy: x<h3 style='color: #128253; text-shadow: 0 0 3px #c2b280'>" + format(tmp.F.tick,4)],
                ,["buyables",[1,2,3,10]]
                ,["raw-html", () => `<h4 style="opacity:.5">Tb's cost scaling past 10 and 20 before Gc3x3,jumps at 75 and scaling past 100 after 3x3.<br></h4>`]]}, 
            "F2": {
                unlocked() {return (mil("G",8))},//false
                content: [["display-text", () => "You have <h3 style='color: #C037A5; text-shadow: 0 0 3px #c2b280'>" + format(player.F.F2) + "</h3> F2, raise F1 by ^<h3 style='color: #C037A5; text-shadow: 0 0 3px #c2b280'> " + format(tmp.F.F2f,4) + "</h3>.<br>" + "<h4>" + format(tmp.F.F2effect.mul(player.F.f2d1)) + " F2/s<h4> <br>"],
                ,["buyables",[11,12]]]},   
        }
    },
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
            title:'F1',
            description: function() {return '1e15x and ^1.0016 points<br> \n\
                '+'layer F total:<br> \n\
                '+ format(this.effect()) +'x'},            
            effect()  { 
                let ef = n('1e15')
                let exp = n(0.5)
                if (upg('F',13)) ef=Decimal.mul(ef,'1e30')
                if (upg('F',15)) ef=Decimal.mul(ef,'1e30')
                if (upg('F',21)) ef=Decimal.mul(ef,'1e30')
                if (upg('F',25)) ef=Decimal.mul(ef,'1e40')
                if (mil('F',8)) ef=Decimal.mul(ef,'1e100')
                if (upg('F',32)) ef=Decimal.mul(ef,'1e111')
                if (upg('F',34)) ef=Decimal.mul(ef,'1e120')
                if (upg('F',23)) exp=Decimal.add(exp,0.5)
                if (upg('F',15)) ef=Decimal.pow(ef,n(buyableEffect("E",21).sub(1).mul(exp).add(1)))
                return ef;          
            },
            cost:new Decimal(1),
        },
        12: {
            title:'F2',
            description: "total F boost E.(x^3)",
            effect()  { 
                let ef = n(3)
                return player[this.layer].total.add(1).pow(ef);          
            },
            cost:new Decimal(1),
            effectDisplay() { return format(this.effect())+"x" }, 
            unlocked() { return (upg(this.layer, 11))},
        },
        13: {
            title:'F3',
            description: "1e30x pts,autobuy B upgs",
            cost:new Decimal(1),
            unlocked() { return (upg(this.layer, 12))},
        },
        14: {
            title:'F4',
            description: "^1.0012 pts,Eb1-3 base+0.3,Eb7 base+1",
            cost:new Decimal(2),
            unlocked() { return (upg(this.layer, 13))},
        },
        15: {
            title:'F5',
            description: "1e30x pts,Eb4 applies to F(50%)",
            cost:new Decimal(4),
            unlocked() { return (upg(this.layer, 14))},
        },
        21: {
            title:'F6',
            description: "1e30x pts,Eb4 applies to C/D at 100% eff,x2 F",
            cost:new Decimal(10),
            unlocked() { return (upg(this.layer, 15))},
        },
        22: {
            title:'F7',
            description: "Eb4 x1.1,Eb scaling start 5 later.",
            cost:new Decimal(15),
            unlocked() { return (upg(this.layer, 21))},
        },
        23: {
            title:'F8',
            description: "pts boosts F,F5 is 100%,Eb4 x1.1.",
            cost:new Decimal(40),
            effect()  { 
                let ef = player.points.add(10).log(10).div('4e4').add(1)
                return ef;
            },
            effectDisplay() { return format(this.effect())+"x" },
            unlocked() { return (upg(this.layer, 22))},
        },
        24: {
            title:'F9',
            description: "Ec6 eff x1.5,Ec8 eff x1.1.",
            cost:new Decimal(150),
            unlocked() { return (upg(this.layer, 23))},
        },
        25: {
            title:'F10',
            description: "1e40x pts,mil 5 applies to all E babs.",
            cost:new Decimal('3e6'),
            unlocked() { return (upg(this.layer, 24))},
        },
        31: {
            title:'F11',
            description: "Bb sc start later based on F,new 2 C/D upg.",
            cost:new Decimal('1.5e8'),
            effect()  { 
                let ef = player.F.total.add(10).log(10).pow(0.9).mul(2)
                if (upg('F',32)) ef=Decimal.mul(ef,1.25)
                if (upg('F',34)) ef=Decimal.mul(ef,1.28)
                return ef;
            },
            effectDisplay() { return "+"+format(this.effect()) },
            unlocked() { return (upg(this.layer, 25))},
        },
        32: {
            title:'F12',
            description: "1e111x pts,total F boost itself(^0.1)",
            cost:new Decimal('3e10'),
            effect()  { 
                let exp=n(0.1)
                if (upg('F',33)) exp=Decimal.add(exp,0.1)
                if (upg('G',14)) exp=Decimal.add(exp,upgradeEffect('G',14).sub(1))
                let ef = player.F.total.add(1).pow(exp)
                return ef;
            },
            unlocked() { return (upg(this.layer, 31))},
        },
        33: {
            title:'F13',
            description: "F11 x1.25,F12 exp +0.1,F boost Bb5",
            cost:new Decimal('1.2e12'),
            effect()  { 
                let ef = player.F.total.add(10).log(10).pow(0.25).div(1.5)
                //if (upg('F',42)) sc=Decimal.add(sc,3000)
                if (upg('F',53)) ef=player.F.total.add(10).log(10).pow(0.28).div(1.35)
                return ef;
            },
            effectDisplay() { return "+"+format(this.effect())+'%' },
            unlocked() { return (upg(this.layer, 32))},
        },
        34: {
            title:'F14',
            description: "1e120x pts,Ek mul+0.4,F11 x1.28,nerf Bb scaling,bulk buy x5 Bb/Eb",
            cost:new Decimal('1e14'),
            unlocked() { return (upg(this.layer, 33))},
        },
        35: {
            title:'F15',
            description: "Fc1 eff x1.25,Bb3-4 +5%,Eb4 +8%,buy max Eb5/8,fix Bb cost.",
            cost:new Decimal('5e20'),
            unlocked() { return (upg(this.layer, 34))},
        },
        41: {
            title:'F16',
            description: "x2 F1,Bb5 +3%",
            cost:new Decimal('2e4'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            unlocked() { return (mil(this.layer, 10))},
        },
        42: {
            title:'F17',
            description: "Bb further scaling is 1000 later.",
            cost:new Decimal('2e7'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            unlocked() { return (upg(this.layer, 41))},
        },
        43: {
            title:'F18',
            description: "F boost Fd1",
            cost:new Decimal('2e9'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            effect()  { 
                let ef = player.F.total.add(10).log(10).mul(0.2)
                if (!upg('G',44)) ef=ef.min('1e308')
                if (ef.gte('1e500')) ef=Decimal.pow(10,ef.div('1e499').log(10).pow(0.9)).mul('1e500')
                if (upg('F',63)) ef=Decimal.pow(ef,1.2)
                return ef;
            },
            effectDisplay() { return format(this.effect())+'x' },
            unlocked() { return (upg(this.layer, 42))},
        },
        44: {
            title:'F19',
            description: "Em boost Fd1",
            cost:new Decimal('5e16'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            effect()  { 
                let ef = player.E.Em.add(10).log(10).div(80)
                if (!upg('G',44)) ef=ef.min('1e308')
                if (ef.gte('1e500')) ef=Decimal.pow(10,ef.div('1e499').log(10).pow(0.9)).mul('1e500')
                if (upg('F',63)) ef=Decimal.pow(ef,1.2)
                return ef;
            },
            effectDisplay() { return format(this.effect())+'x' },
            unlocked() { return (upg(this.layer, 43))},
        },
        45: {
            title:'F20',
            description: "increase Eb8 hardcap based on pts,and x4 F1",
            cost:new Decimal('2e30'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            effect()  { 
                let ef = player.points.add(10).log(10).div(4e3).pow(0.85).ceil()
                return ef;
            },
            effectDisplay() { return '+'+format(this.effect()) },
            unlocked() { return (upg(this.layer, 44))},
        },
        51: {
            title:'F21',
            description: "Ek boost Fd1",
            cost:new Decimal('5e37'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            effect()  { 
                let ef = player.E.Ek.add(10).log(10).div(30)
                if (!upg('G',44)) ef=ef.min('1e308')
                if (ef.gte('1e500')) ef=Decimal.pow(10,ef.div('1e499').log(10).pow(0.9)).mul('1e500')
                return ef;
            },
            effectDisplay() { return format(this.effect())+'x' },
            unlocked() { return (upg(this.layer, 45))},
        },
        52: {
            title:'F22',
            description: "^3 F1 eff,^1.002 pts.",
            cost:new Decimal('1e15000'),//3333
            unlocked() { return (upg(this.layer, 51))},
        },
        53: {
            title:'F23',
            description: "F13 is stronger,unlock a chal.",
            cost:new Decimal('1e100000'),//5945
            unlocked() { return (upg(this.layer, 52))},
        },
        54: {
            title:'F24',
            description: "F1 eff exp is 1,nerf Bb scaling.",
            cost:new Decimal('2e65'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            unlocked() { return (upg(this.layer, 45))},
        },
        55: {
            title:'F25',
            description: "Bb further scaling is 2000 later.",
            cost:new Decimal('5e73'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            unlocked() { return (upg(this.layer, 54))},
        },
        61: {
            title:'F26',
            description: "F dim mult per buy+0.25.",
            cost:new Decimal('2e90'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            unlocked() { return (mil(this.layer,14))},
        },
        62: {
            title:'F27',
            description: "bulk buy x3 Bb/Eb,Ek is stronger.",
            cost:new Decimal('5e120'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            unlocked() { return (upg(this.layer,61))},
        },
        63: {
            title:'F28',
            description: "F1 eff exp x2 and ^1.015,Ek applies to Bb further scaling,F18-19 ^1.2.",
            cost:new Decimal('e1e7'),
            unlocked() { return (upg(this.layer, 62))},
        },
        64: {
            title:'F29',
            description: "bulk buy x3 Bb/Eb,F1 boost Fd1",
            cost:new Decimal('1e148'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            effect()  { 
                let ef = player.F.F1.add(10).log(10).div(1.5)
                return ef;
            },
            effectDisplay() { return format(this.effect())+'x' },
            unlocked() { return (upg(this.layer, 62))},
        },
        65: {
            title:'F30',
            description: "F1 boost Bb1-2,Eb1-3 base,^1.006 pts,F1 eff exp ^1.05,F resets nothing.",
            cost:new Decimal('2e242'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            effect()  { 
                let ef = player.F.F1.add(10).log(10).pow(0.25).div(25).add(1)
                if (upg('G',15))  ef=Decimal.pow(ef,1.1)
                if (upg('G',23))  ef=Decimal.pow(ef,upgradeEffect('G',23))
                return ef;
            },
            effectDisplay() { return '^'+format(this.effect(),4) },
            unlocked() { return (upg(this.layer, 64))},
        },
        71: {
            title:'F31',
            description: "F upg boost F dims.<br>(need Gc1).",
            cost:n('1e848'),
            canAfford() {return inChallenge('G',11)||gcs('I',43)}, //
            effect()  { 
                let a=player[this.layer].upgrades.length
                let ef=n(1.075).pow(a)
                if (upg('F',75)) ef=ef.pow(2)
                return ef;          
            },
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            unlocked() { return (mil(this.layer, 17))},
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        72: {
            title:'F32',
            description: "tickspeed mult x1.01,log G mults itself.(need Gc1).",
            cost:n('1e895'),
            canAfford() {return (inChallenge('G',11)||gcs('I',43))}, 
            effect()  { 
                let ef = player.G.total.add(10).log(10)
                return ef;          
            },
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            unlocked() { return (upg(this.layer, 71))},
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        73: {
            title:'F33',
            description: "F1 eff exp ^1.2,Gb1 mults Fds.(need Gc1).",
            cost:n('1e1030'),
            canAfford() {return (inChallenge('G',11)||gcs('I',43))}, 
            effect()  { 
                let t = n(gba('G',11))
                let ef=n(5).pow(t)
                return ef;          
            },
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            unlocked() { return (upg(this.layer, 72))},
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        74: {
            title:'F34',
            description: "Gb2 amt boost its base,Gc1p mults G.(need Gc1).",
            cost:n('1e1155'),
            canAfford() {return (inChallenge('G',11)||gcs('I',43))}, 
            effect()  { 
                let t=n(gba('G',12))
                let ef1=t.mul(0.06)
                let ef2=player.G.Gc1p.add(10).log(10).div(1.5)
                return [ef1,ef2];          
            },
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            unlocked() { return (upg(this.layer, 73))},
            effectDisplay() { return 'Gb2:+'+format(this.effect()[0])+'<br> G:x'+format(this.effect()[1]) },
        },
        75: {
            title:'F35',
            description: "Gb3 amt boost its base,F31 ^2,unlock next G chal.(need Gc1).",
            cost:n('1e1615'),//1e1300
            canAfford() {return (inChallenge('G',11)||gcs('I',43))}, 
            effect()  { 
                let t = n(gba('G',13))
                let ef=t.mul(0.08)
                return ef;          
            },
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            unlocked() { return (upg(this.layer, 74))},
            effectDisplay() { return '+'+format(this.effect())},
        },
        81: {
            title:'F36',
            description: "F dim mult +0.1,E25 is multiplicative at ^0.15 eff and applies to Eb3,reduce E22's nerf.(need Gc2)",         
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            cost:n('1e1290'),
            canAfford() {return (inChallenge('G',12)||gcs('I',43))}, 
            effect()  { 
                let exp=n(0.15)
                let ef= Decimal.pow(upgradeEffect('E',55),exp)
                return ef;
            },
            effectDisplay() { return 'x'+format(this.effect()) },
            unlocked() { return (upg(this.layer, 75))},
        },
        82: {
            title:'F37',
            description: "Gc1p mults Gb3 base,reduce Gb2-3 cost base.(need Gc2)",         
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            cost:n('e5600'),//6000
            canAfford() {return (inChallenge('G',12)||gcs('I',43))}, 
            effect()  { 
                let exp=n(0.33)
                let ef=player.G.Gc1p.add(10).log(10).pow(exp)
                return ef;
            },
            effectDisplay() { return 'x'+format(this.effect()) },
            unlocked() { return (upg(this.layer, 81))},
        },
        83: {
            title:'F38',
            description: "Gc2p eff ^1.5,tickboost cost scaling x0.8.(need Gc2)",         
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            cost:n('e8000'),//8600
            canAfford() {return (inChallenge('G',12)||gcs('I',43))}, 
            unlocked() { return (upg(this.layer, 82))},
        },
        84: {
            title:'F39',
            description: "Gc2p mults Gb3 base,reduce Gb2 scaling,tickboost cost scaling 1 later.(need Gc3)",         
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            cost:n('e112000'),
            canAfford() {return (inChallenge('G',21)||gcs('I',43))}, 
            effect()  { 
                let exp=n(0.5)
                let ef=player.G.Gc2p.add(10).log(10).pow(exp)
                return ef;
            },
            effectDisplay() { return 'x'+format(this.effect()) },
            unlocked() { return (upg(this.layer, 83))},
        },
        85: {
            title:'F40',
            description: "edit Gc3p prod formula,tickboost cost scaling is weaker.(need Gc3)",         
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            cost:n('e1.865e8'),
            canAfford() {return (inChallenge('G',21)||gcs('I',43))}, 
            unlocked() { return (upg(this.layer, 83))},
        },
    },
    challenges:{
        11: {//req F:8e9,1e14,1e18
            name: "Fc1",
            completionLimit: 3,
            challengeDescription: function() {
                return "B/E prod ^0.25. <br> Completion: " +challengeCompletions(this.layer,this.id) + "/3"},
            unlocked() { return (mil("F", 8))},
            goal(){
                // if (challengeCompletions("F", 11) == 0) return Decimal.pow(10,5840);
                // if (challengeCompletions("F", 11) == 1) return Decimal.pow(10,6940);
                // if (challengeCompletions("F", 11) == 2) return Decimal.pow(10,7050);
                let a=[n('e5840'),n('e6940'),n('e7050'),n(0)]
                return a[(challengeCompletions(this.layer,this.id))]
            },            
            goalDescription:  function() {return format(this.goal())+' points'},
            canComplete(){return player.points.gte(this.goal())},
            rewardDescription: "Bb3-5 are stronger.",
            rewardEffect() {
                let ef = Decimal.mul(challengeCompletions("F", 11),0.8)
                if (upg('F',35)) ef=Decimal.mul(ef,1.25)
                if (mil('F',12)) ef=Decimal.mul(ef,1.2)
                if (challengeCompletions("F", 11) >= 1)  return ef
                else return new Decimal(0)
            },
            rewardDisplay() {return '+'+format(this.rewardEffect())+"%"},
        },
        12: {//
            name: "Fc2",
            completionLimit: 3,
            challengeDescription: function() {
                return "pts exp ^0.8. <br> Completion: " +challengeCompletions("F", 12) + "/3"},
            unlocked() { return (upg("F", 53))},
            goal(){
                // if (challengeCompletions("F", 12) == 0) return Decimal.pow(10,1000);
                // if (challengeCompletions("F", 12) == 1) return Decimal.pow(10,1e7);
                // if (challengeCompletions("F", 12) == 2) return Decimal.pow(10,1e8);
                let a=[n('e1000'),n('ee7'),n('ee8'),n(0)]//edit at v0.6.4
                return a[(challengeCompletions(this.layer,this.id))]
            },            
            goalDescription:  function() {return format(this.goal())+' points'},
            canComplete(){return player.points.gte(this.goal())},
            rewardDescription: "B boost Fd1.",
            rewardEffect() {
                let exp = Decimal.mul(challengeCompletions("F", 12),0.06).add(0.08)
                let ef = player.B.points.add(10).log(10).add(1).pow(exp)
                if (ef.gte('1e500')) ef=Decimal.pow(10,ef.div('1e499').log(10).pow(0.85)).mul('1e500')
                if (challengeCompletions("F", 12) >= 1)  return ef
                else return new Decimal(1)
            },
            rewardDisplay() {return 'x'+format(this.rewardEffect())},
        },
    },
    automate(){
        if (player.F.auto1)  {buyBuyable("F",11),buyBuyable("F",12),buyBuyable("F",13),buyBuyable("F",21),
            buyBuyable("F",22),buyBuyable("F",23),buyBuyable("F",31),buyBuyable("F",32)}
        if (player.F.auto2)  buyBuyable("F",101) 
        if (player.G.auto1)  buyBuyable("F",102)
        if (player.G.auto3)  buyBuyable("F",111),buyBuyable("F",112),buyBuyable("F",113),buyBuyable("F",121)
    },
    buyables:{
        11: {
            title: "Fd1", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = Decimal.pow(100, x).times('10')
                let sc=tmp.F.scaling
                //let c2=Decimal.pow(10, x.mul(2).pow(sc))
                //if (c2.gte('e100000')) sc=Decimal.add(sc,cost.log(10).div('1e5').pow(0.3).sub(1).div(20))
                if (cost.gte('1e500')) cost = n('1e500').mul(Decimal.pow(10,cost.div('1e499').log(10).pow(sc)))
                if (mil('F',18)) cost = Decimal.pow(10, x.mul(2).pow(sc))
                return cost},
            canAfford() { let cost = this.cost()
                return player[this.layer].F1.gte(cost) },
            bulk(){
                let tar=n(0)
                if (mil('G',3)) tar=player.F.F1.add(10).div('10').log(100).pow(0.855).sub(gba(this.layer, this.id)).ceil().max(1)
                    {if (mil('F',18)) tar=player.F.F1.add(10).log(10).pow(tmp.F.scaling.pow(-1)).div(2).sub(gba(this.layer, this.id)).ceil().sub(1).max(0)
                    else tar=player.F.F1.add(10).div('10').log('100').pow(0.855).sub(gba(this.layer, this.id)).ceil().max(1)}            
                let c = this.cost(gba(this.layer, this.id).add(tar))
                if (player[this.layer].F1.gte(c)) 
                    {player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(tar)
                    player.F.fd1 = player.F.fd1.add(tar)}
            },
            buy() {
                player.F.fd1 = player.F.fd1.add(1)
                setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let bas = tmp.F.fdbas
                return bas},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let ef = Decimal.pow(this.base(),x)
                ef=Decimal.mul(ef,tmp.F.fdm)
                if (upg('F',43))  ef=Decimal.mul(ef,upgradeEffect('F',43))
                if (upg('F',44))  ef=Decimal.mul(ef,upgradeEffect('F',44))
                if (upg('F',51))  ef=Decimal.mul(ef,upgradeEffect('F',51))
                if (hasChallenge('F',12))  ef=Decimal.mul(ef,challengeEffect('F',12))
                if (upg('F',64))  ef=Decimal.mul(ef,upgradeEffect('F',64))
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "produce F1 \n\
                Need: " + format(this.cost()) + " F1 \n\
                Amount: "+ format(player.F.fd1) + "(" + format(player[this.layer].buyables[this.id])  +") \n\
                Effect: x" + format(this.effect())},
            unlocked() { if (gba('F',102).gte(1)) return true
                else return mil('F',10) },
            style: {'height':'150px'},
        },
        12: {
            title: "Fd2", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = Decimal.pow(1e3, x).times('100')
                let sc=tmp.F.scaling
                //let c2=Decimal.pow(10, x.mul(3).pow(sc))
                //if (c2.gte('e100000')) sc=Decimal.add(sc,cost.log(10).div('1e5').pow(0.3).sub(1).div(20))
                if (cost.gte('1e500')) cost=n('1e500').mul(Decimal.pow(10,cost.div('1e499').log(10).pow(sc)))
                if (mil('F',18)) cost = Decimal.pow(10, x.mul(3).pow(sc))
                return cost},
            canAfford() { return player[this.layer].F1.gte(this.cost()) },
            bulk(){
                let tar=n(0)
                if (mil('G',3)) tar=player.F.F1.add(10).div('100').log(1e3).pow(0.85).sub(gba(this.layer, this.id)).ceil().max(1)
                    {if (mil('F',18)) tar=player.F.F1.add(10).log(10).pow(tmp.F.scaling.pow(-1)).div(3).sub(gba(this.layer, this.id)).ceil().sub(1).max(0)
                    else tar=player.F.F1.add(10).div('100').log('1e3').pow(0.85).sub(gba(this.layer, this.id)).ceil().max(1)}            
                let c = this.cost(gba(this.layer, this.id).add(tar))
                if (player[this.layer].F1.gte(c)) 
                    {player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(tar)
                    player.F.fd2 = player.F.fd2.add(tar)}            },
            buy() {setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))
                player.F.fd2 = player.F.fd2.add(1)
            },
            base(){   let bas = tmp.F.fdbas
                return bas},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let ef = Decimal.pow(this.base(),x)
                ef=Decimal.mul(ef,tmp.F.fdm)
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "produce Fd1 \n\
                Need: " + format(this.cost()) + " F1 \n\
                Amount: " + format(player.F.fd2) + "(" + format(player[this.layer].buyables[this.id])  +") \n\
                Effect: x" + format(this.effect())},
            unlocked() { if (gba('F',102).gte(1)) return true
                else return (tmp.F.buyables[11].effect.gte(2)) },
            style: {'height':'150px'},
        },
        13: {
            title: "Fd3", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = Decimal.pow(1e5, x).times('1e4')
                let sc=tmp.F.scaling
                //let c2=Decimal.pow(10, x.mul(5).pow(sc))
                //if (c2.gte('e100000')) sc=Decimal.add(sc,cost.log(10).div('1e5').pow(0.3).sub(1).div(20))
                if (cost.gte('1e500')) cost=n('1e500').mul(Decimal.pow(10,cost.div('1e499').log(10).pow(sc)))
                if (mil('F',18)) cost = Decimal.pow(10, x.mul(5).pow(sc))
                return cost},
            canAfford() { return player[this.layer].F1.gte(this.cost()) },
            bulk(){
                let tar=n(0)
                if (mil('G',3))// tar=player.F.F1.add(10).div('1e4').log(1e5).pow(0.84).sub(gba(this.layer, this.id)).ceil().max(1)
                    {if (mil('F',18)) tar=player.F.F1.add(10).log(10).pow(tmp.F.scaling.pow(-1)).div(5).sub(gba(this.layer, this.id)).ceil().sub(1).max(0)
                    else tar=player.F.F1.add(10).div('1e4').log('1e5').pow(0.84).sub(gba(this.layer, this.id)).ceil().max(1)}        
    
                let c = this.cost(gba(this.layer, this.id).add(tar))
                if (player[this.layer].F1.gte(c)) 
                    {player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(tar)
                    player.F.fd3 = player.F.fd3.add(tar)}},
            buy() {setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))
                player.F.fd3 = player.F.fd3.add(1)
            },
            base(){   let bas = tmp.F.fdbas
                return bas},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let ef = Decimal.pow(this.base(),x)
                ef=Decimal.mul(ef,tmp.F.fdm)
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "produce Fd2 \n\
                Need: " + format(this.cost()) + " F1 \n\
                Amount: " + format(player.F.fd3) + "(" + format(player[this.layer].buyables[this.id])  +") \n\
                Effect: x" + format(this.effect())},
            unlocked() { if (gba('F',102).gte(1)) return true
                else return (tmp.F.buyables[12].effect.gte(2)) },
            style: {'height':'150px'},
        },
        21: {
            title: "Fd4", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = Decimal.pow(1e8, x).times('1e8')
                let sc=tmp.F.scaling
                //let c2=Decimal.pow(10, x.mul(8).pow(sc))
                //if (c2.gte('e100000')) sc=Decimal.add(sc,cost.log(10).div('1e5').pow(0.3).sub(1).div(20))
                if (cost.gte('1e500')) cost=n('1e500').mul(Decimal.pow(10,cost.div('1e499').log(10).pow(sc)))
                if (mil('F',18)) cost = Decimal.pow(10, x.mul(8).pow(sc))
                return cost},
            canAfford() { return player[this.layer].F1.gte(this.cost()) },
            bulk(){
                let tar=n(0)
                if (mil('G',3))// tar=player.F.F1.add(10).div('1e8').log('1e8').pow(0.84).sub(gba(this.layer, this.id)).ceil().max(1)
                    {if (mil('F',18)) tar=player.F.F1.add(10).log(10).pow(tmp.F.scaling.pow(-1)).div(8).sub(gba(this.layer, this.id)).ceil().sub(1).max(0)
                else tar=player.F.F1.add(10).div('1e8').log('1e8').pow(0.84).sub(gba(this.layer, this.id)).ceil().max(1)}            
                let c = this.cost(gba(this.layer, this.id).add(tar))
                if (player[this.layer].F1.gte(c)) player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(tar)
            },
            buy() {setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))
                player.F.fd4 = player.F.fd4.add(1)
            },
            base(){   let bas = tmp.F.fdbas
                return bas},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let ef = Decimal.pow(this.base(),x)
                ef=Decimal.mul(ef,tmp.F.fdm)
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "produce Fd3 \n\
                Need: " + format(this.cost()) + " F1 \n\
                Amount: " + format(player.F.fd4) + "(" + format(player[this.layer].buyables[this.id])  +") \n\
                Effect: x" + format(this.effect())},
            unlocked() { if (gba('F',102).gte(1)) return true
                else return (player.F.F1.gte(1e7)) },
            style: {'height':'150px'},
        },
        22: {
            title: "Fd5", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = Decimal.pow(1e10, x).times('1e16')
                let sc=tmp.F.scaling
                //let c2=Decimal.pow(10, x.mul(10).pow(sc))
                //if (c2.gte('e100000')) sc=Decimal.add(sc,cost.log(10).div('1e5').pow(0.3).sub(1).div(20))
                if (cost.gte('1e500')) cost=n('1e500').mul(Decimal.pow(10,cost.div('1e499').log(10).pow(sc)))
                if (mil('F',18)) cost = Decimal.pow(10, x.mul(10).pow(sc))
                return cost},
            canAfford() { return player[this.layer].F1.gte(this.cost()) },
            bulk(){
                let tar=n(0)
                if (mil('G',3))// tar=player.F.F1.add(10).div('1e16').log('1e10').pow(0.83).sub(gba(this.layer, this.id)).ceil().max(1)
                    {if (mil('F',18)) tar=player.F.F1.add(10).log(10).pow(tmp.F.scaling.pow(-1)).div(10).sub(gba(this.layer, this.id)).ceil().sub(1).max(0)
                    else tar=player.F.F1.add(10).div('1e16').log('1e10').pow(0.83).sub(gba(this.layer, this.id)).ceil().max(1)}            
                let c = this.cost(gba(this.layer, this.id).add(tar))
                if (player[this.layer].F1.gte(c)) player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(tar)
            },
            buy() {setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))
                player.F.fd5 = player.F.fd5.add(1)
            },
            base(){   let bas = tmp.F.fdbas
                return bas},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let ef = Decimal.pow(this.base(),x)
                ef=Decimal.mul(ef,tmp.F.fdm)
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "produce Fd4 \n\
                Need: " + format(this.cost()) + " F1 \n\
                Amount: " + format(player.F.fd5) + "(" + format(player[this.layer].buyables[this.id])  +") \n\
                Effect: x" + format(this.effect())},
            unlocked() { if (gba('F',102).gte(1)) return true
                else return (player.F.F1.gte(1e16)) },
            style: {'height':'150px'},
        },
        23: {
            title: "Fd6", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = Decimal.pow(1e12, x).times('1e24')
                let sc=tmp.F.scaling
                //let c2=Decimal.pow(10, x.mul(12).pow(sc))
                //if (c2.gte('e100000')) sc=Decimal.add(sc,cost.log(10).div('1e5').pow(0.3).sub(1).div(20))
                if (cost.gte('1e500')) cost=n('1e500').mul(Decimal.pow(10,cost.div('1e499').log(10).pow(sc)))
                if (mil('F',18)) cost = Decimal.pow(10, x.mul(12).pow(sc))                
                return cost},
            canAfford() { return player[this.layer].F1.gte(this.cost()) },
            bulk(){
                let tar=n(0)
                if (mil('G',3)) //tar=player.F.F1.add(10).div('1e24').log('1e12').pow(0.83).sub(gba(this.layer, this.id)).ceil().max(1)
                    {if (mil('F',18)) tar=player.F.F1.add(10).log(10).pow(tmp.F.scaling.pow(-1)).div(12).sub(gba(this.layer, this.id)).ceil().sub(1).max(0)
                    else tar=player.F.F1.add(10).div('1e24').log('1e12').pow(0.83).sub(gba(this.layer, this.id)).ceil().max(1)}        
                let c = this.cost(gba(this.layer, this.id).add(tar))
                if (player[this.layer].F1.gte(c)) player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(tar)
            },
            buy() {setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))
                player.F.fd6 = player.F.fd6.add(1)
            },
            base(){   let bas = tmp.F.fdbas
                return bas},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let ef = Decimal.pow(this.base(),x)
                ef=Decimal.mul(ef,tmp.F.fdm)
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "produce Fd5 \n\
                Need: " + format(this.cost()) + " F1 \n\
                Amount: " + format(player.F.fd6) + "(" + format(player[this.layer].buyables[this.id])  +") \n\
                Effect: x" + format(this.effect())},
            unlocked() { if (gba('F',102).gte(1)) return true
                else return (player.F.F1.gte(1e24)) },
            style: {'height':'150px'},
        },
        31: {
            title: "Fd7", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = Decimal.pow(1e16, x).times('1e32')
                let sc=tmp.F.scaling
                //let c2=Decimal.pow(10, x.mul(16).pow(sc))
                //if (c2.gte('e100000')) sc=Decimal.add(sc,cost.log(10).div('1e5').pow(0.3).sub(1).div(20))
                if (cost.gte('1e500')) cost=n('1e500').mul(Decimal.pow(10,cost.div('1e499').log(10).pow(sc)))
                if (mil('F',18)) cost = Decimal.pow(10, x.mul(16).pow(sc))
                return cost},
            canAfford() { return player[this.layer].F1.gte(this.cost()) },
            bulk(){
                let tar=n(0)
                if (mil('G',3)) //tar=player.F.F1.add(10).div('1e32').log('1e16').pow(0.82).sub(gba(this.layer, this.id)).ceil().max(1)
                    {if (mil('F',18)) tar=player.F.F1.add(10).log(10).pow(tmp.F.scaling.pow(-1)).div(16).sub(gba(this.layer, this.id)).ceil().sub(1).max(0)
                else tar=player.F.F1.add(10).div('1e32').log('1e16').pow(0.82).sub(gba(this.layer, this.id)).ceil().max(1)}
                let c = this.cost(gba(this.layer, this.id).add(tar))
                if (player[this.layer].F1.gte(c)) player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(tar)
            },
            buy() {setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))
                player.F.fd7 = player.F.fd7.add(1)
            },
            base(){   let bas = tmp.F.fdbas
                return bas},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let ef = Decimal.pow(this.base(),x)
                ef=Decimal.mul(ef,tmp.F.fdm)
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "produce Fd6 \n\
                Need: " + format(this.cost()) + " F1 \n\
                Amount: " + format(player.F.fd7) + "(" + format(player[this.layer].buyables[this.id])  +") \n\
                Effect: x" + format(this.effect())},
            unlocked() { return (player.F.F1.gte(1e30)) },
            style: {'height':'150px'},
        },
        32: {
            title: "Fd8", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = Decimal.pow(1e20, x).times('1e40')
                let sc=tmp.F.scaling
                //let c2=Decimal.pow(10, x.mul(20).pow(sc))
                //if (c2.gte('e100000')) sc=Decimal.add(sc,cost.log(10).div('1e5').pow(0.3).sub(1).div(20))
                if (cost.gte('1e500')) cost=n('1e500').mul(Decimal.pow(10,cost.div('1e499').log(10).pow(sc)))
                if (mil('F',18)) cost = Decimal.pow(10, x.mul(20).pow(sc))
                if (inChallenge('G',21)) cost = Decimal.pow(cost,5)
                return cost},
            canAfford() { return player[this.layer].F1.gte(this.cost()) },
            bulk(){
                let tar=n(0)
                if (mil('G',3))// tar=player.F.F1.add(10).div('1e40').log('1e20').pow(0.82).sub(gba(this.layer, this.id)).ceil().max(1)
                    {if (mil('F',18)) tar=player.F.F1.add(10).log(10).pow(tmp.F.scaling.pow(-1)).div(20).sub(gba(this.layer, this.id)).ceil().sub(1).max(0)
                else tar=player.F.F1.add(10).div('1e40').log('1e20').pow(0.82).sub(gba(this.layer, this.id)).ceil().max(1)}
                if (inChallenge('G',21)) tar = player.F.F1.add(10).log(10).div(5).pow(tmp.F.scaling.pow(-1)).div(20).sub(gba(this.layer, this.id)).div(5).ceil().sub(1).max(0)
                let c = this.cost(gba(this.layer, this.id).add(tar))
                if (player[this.layer].F1.gte(c)) 
                    {player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(tar)
                    player.F.fd8 = player.F.fd8.add(tar)}            },
            buy() {setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))
                player.F.fd8 = player.F.fd8.add(1)
            },
            base(){   let bas = tmp.F.fdbas
                if (challengeCompletions("G", 21)>=3) bas=Decimal.mul(bas,tmp.G.gc3ef)
                return bas},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let ef = Decimal.pow(this.base(),x)
                ef=Decimal.mul(ef,tmp.F.fdm)
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "produce Fd7 \n\
                Need: " + format(this.cost()) + " F1 \n\
                Amount: " + format(player.F.fd8) + "(" + format(player[this.layer].buyables[this.id])  +") \n\
                Effect: x" + format(this.effect())},
            unlocked() { if (gba('F',102).gte(1)) return true
                else return (player.F.F1.gte(1e38)) },
            style: {'height':'150px'},
        },
        101: {
            title: "tickspeed", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = Decimal.pow(10, x).times('1e10')
                let sc=tmp.F.scaling
                //let c2=Decimal.pow(10, x.pow(sc))
                //if (c2.gte('e100000')) sc=Decimal.add(sc,cost.log(10).div('1e5').pow(0.3).sub(1).div(20))
                if (cost.gte('1e500')) cost=n('1e500').mul(Decimal.pow(10,cost.div('1e499').log(10).pow(sc)))
                if (mil('F',18)) cost = Decimal.pow(10, x.pow(sc))
                return cost},
            canAfford() { return player[this.layer].F1.gte(this.cost()) },
            bulk(){
                let tar=n(0)
                if (mil('G',0)) {
                    if (mil('F',18)) tar=player.F.F1.add(10).log(10).pow(tmp.F.scaling.pow(-1)).sub(gba(this.layer, this.id)).ceil().sub(1).max(0)
                    else tar=player.F.F1.add(10).div('1e11').log(10).pow(0.857).sub(gba(this.layer, this.id)).ceil().max(1)}
                let c = this.cost(gba(this.layer, this.id).add(tar))
                if (player[this.layer].F1.gte(c)) player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(tar)
            },
            buy() {setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let bas = tmp.F.tick
                return bas},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let ef = Decimal.pow(this.base(),x)
                return ef},
            display() { // Everything else displayed in the buyable button after the title//  Mult per tickspeed: x" + format(this.base(),4) + " \n\
                return "boost all FDs \n\
                Need: " + format(this.cost()) + " F1 \n\
                Amount: "+ player[this.layer].buyables[this.id]  +" \n\
                Effect: x" + format(this.effect())},
            unlocked() { if (gba('F',102).gte(1)) return true
                else return mil('F',11) },
            style: {'height':'150px'},
        },
        102: {
            title: "tickboost", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = n(Infinity)
                let m=n(1) //scaling: ^3 growth past 10
                let sc=n(20)
                let sc2=n(0.8)
                let b=n(3)
                let p=n(0.7)
                if(!mil('G',14)) {
                    if (x.gte(75)) p=p.add(0.02)
                    if (x.gte(100)) p=p.add(x.sub(100).pow(0.4).div(100))}
                let m2=n(2)
                if (upg('F',83)) m=m.sub(0.2)
                if (upg('F',84)) sc=sc.add(1)
                if (upg('F',85)) m2=m2.sub(0.04)
                if(gcs('I',25)) m2=m2.sub(0.06)
                sc2=Decimal.add(sc2,x.sub(24).max(1).log(10).pow(1.5).div(4))
                if (x.gte(sc)) m=Decimal.add(m,x.sub(sc).pow(sc2).div(10))
                {if (x.gte(10)) cost=x.add(7).mul(x).div(2).add(2).add(x.sub(9).pow(3).mul(m)).ceil()
                else cost = x.add(7).mul(x).div(2).add(3)}//n(n+7)/2+3,from(0,3)(1,7)(2,12)
                if (challengeCompletions("G", 21)>=3) cost=x.add(7).mul(x).div(2).add(1).add(b.pow(x.sub(10).max(0).pow(p)).mul(m2)).ceil()
                return cost},//if (x.gte(20)) cost=x.add(7).mul(x).div(2).add(3).add(x.sub(9).pow(3).mul(m)).add(x.sub(17).pow(4)).ceil()
            canAfford() { return player[this.layer].fd8.gte(this.cost()) },
            bulk(){
                let tar=n(0)
                if (mil('G',11)) tar=tar.add(10)
                if (mil('G',14)) tar=player.F.fd8.add(3).div('1.96').log(3).max(1).pow(10/7).sub(gba(this.layer, this.id)).sub(1).ceil().max(1)
                let c = this.cost(gba(this.layer, this.id).add(tar))
                if (player[this.layer].fd8.gte(c)) player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(tar)
            },
            buy() {setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))
            if (!mil('G',1))
                {let st=new Decimal(10)
                if (mil('F',14)) st=new Decimal('1e6')
                if (mil('F',15)) st=new Decimal('1e30')
                player.F.F1=st
                player.F.fd1=player.F.fd2=player.F.fd3=player.F.fd4=player.F.fd5=player.F.fd6=player.F.fd7=player.F.fd8=n(0)
                //player.F.buyables={11:n(0),12:n(0),13:n(0),21:n(0),22:n(0),23:n(0),31:n(0),32:n(0),101:n(0)}
                for(let i in player.F.buyables) if(i!='102') setBuyableAmount(this.layer,i,n(0))}
            },
            base(){   let bas = 1.08
                return bas},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let ef = Decimal.pow(this.base(),x)
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "reset for a tickboost <br>boost tickspeed mult \n\
                Need: " + format(this.cost()) + " Fd8 \n\
                Amount: "+ player[this.layer].buyables[this.id] },
            unlocked() { return mil('F',13) },
            style: {'height':'150px'},
        },
        111: {
            title: "F2d1", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = Decimal.pow(10,n(1.05).pow(x).mul('2e8').add('2.8e9'))
                return cost},
            canAfford() { let cost = this.cost()
                return player.G.points.gte(cost) },
            bulk(){
                let tar=n(0)
                if (mil('G',10)) tar=player.G.points.add(10).log(10).sub('2.8e9').div('2e8').max(1).log(1.05).sub(gba(this.layer, this.id)).sub(1).ceil().max(1)
                let c = this.cost(gba(this.layer, this.id).add(tar))
                if (player.G.points.gte(c)) 
                    {player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(tar)
                    player.F.f2d1 = player.F.f2d1.add(tar)}      },
            buy() {setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))
                player.F.f2d1 = player.F.f2d1.add(1)},            
            /*buy() {
                //player.F.f2d1 = player.F.f2d1.add(1)
                //setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))
                let tar=n(0)
                tar=player.G.points.add(10).log(10).sub('3e9').div('2e8').sub(gba(this.layer, this.id)).sub(1).ceil().max(1)          
                let c = this.cost(gba(this.layer, this.id).add(tar))
                if (player.G.points.gte(c)) {player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(tar)
                    player.F.f2d1= player.F.f2d1.add(tar)}},            */
            base(){   let bas = n(25)
                return bas},
            effect(x) { 
                let ef = Decimal.pow(this.base(),x).max(1)
                ef=Decimal.mul(ef,tmp.F.f2dm)
                return ef},
            display() { 
                return "produce F2 \n\
                Need: " + format(this.cost()) + " G \n\
                Amount: "+ format(player.F.f2d1) + "(" + format(player[this.layer].buyables[this.id])  +") \n\
                Effect: x" + format(this.effect())},
            unlocked() { return mil('G',8) },
            style() {if (this.canAfford()) return {'height':'150px','background-color': '#C037A5' }
                else return{'height':'150px'}},
        },
        112: {
            title: "F2d2", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = Decimal.pow(10,n(1.05).pow(x).mul('4e8').add('4.6e9'))//x.pow(1.5)
                return cost},
            canAfford() { let cost = this.cost()
                return player.G.points.gte(cost) },
            bulk(){
                let tar=n(0)
                if (mil('G',10)) tar=player.G.points.add(10).log(10).sub('4.6e9').div('4e8').max(1).log(1.05).sub(gba(this.layer, this.id)).sub(1).ceil().max(1)
                let c = this.cost(gba(this.layer, this.id).add(tar))
                if (player.G.points.gte(c)) 
                    {player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(tar)
                    player.F.f2d2 = player.F.f2d2.add(tar)}      },
            buy() {setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))
                player.F.f2d2 = player.F.f2d2.add(1)},
            base(){   let bas = n(25)
                return bas},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let ef = Decimal.pow(this.base(),x)
                ef=Decimal.mul(ef,tmp.F.f2dm)
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "produce F2d1 \n\
                Need: " + format(this.cost()) + " G \n\
                Amount: "+ format(player.F.f2d2) + "(" + format(player[this.layer].buyables[this.id])  +") \n\
                Effect: x" + format(this.effect())},
            unlocked() { return mil('G',8) },
            //style: {'height':'150px','color':'C037A5'},
            style() {if (this.canAfford()) return {'height':'150px','background-color': '#C037A5' }
                else return{'height':'150px'}},
        },
        113: {
            title: "F2d3", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = Decimal.pow(10,n(1.05).pow(x).mul('6e8').add('3.94e10'))
                return cost},
            canAfford() { let cost = this.cost()
                return player.G.points.gte(cost) },
            bulk(){
                let tar=n(0)
                if (mil('G',10)) tar=player.G.points.add(10).log(10).sub('3.94e10').div('6e8').max(1).log(1.05).sub(gba(this.layer, this.id)).sub(1).ceil().max(1)
                let c = this.cost(gba(this.layer, this.id).add(tar))
                if (player.G.points.gte(c)) 
                    {player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(tar)
                    player.F.f2d3 = player.F.f2d3.add(tar)}      },
            buy() {setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))
                player.F.f2d3 = player.F.f2d3.add(1)},
            base(){   let bas = n(20)
                return bas},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let ef = Decimal.pow(this.base(),x)
                ef=Decimal.mul(ef,tmp.F.f2dm)
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "produce F2d2 \n\
                Need: " + format(this.cost()) + " G \n\
                Amount: "+ format(player.F.f2d3) + "(" + format(player[this.layer].buyables[this.id])  +") \n\
                Effect: x" + format(this.effect())},
            unlocked() { return upg('G',52) },
            style() {if (this.canAfford()) return {'height':'150px','background-color': '#C037A5' }
                else return{'height':'150px'}},
        },
        121: {
            title: "F2d4", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = Decimal.pow(10,n(1.05).pow(x).mul('1e9').add('9.99e11'))
                return cost},
            canAfford() { let cost = this.cost()
                return player.G.points.gte(cost) },
            bulk(){
                let tar=n(0)
                if (mil('G',10)) tar=player.G.points.add(10).log(10).sub('9.99e11').div('1e9').max(1).log(1.05).sub(gba(this.layer, this.id)).sub(1).ceil().max(1)
                let c = this.cost(gba(this.layer, this.id).add(tar))
                if (player.G.points.gte(c)) 
                    {player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(tar)
                    player.F.f2d4 = player.F.f2d4.add(tar)}      },
            buy() {setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))
                player.F.f2d4 = player.F.f2d4.add(1)},
            base(){   let bas = n(40)
                return bas},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let ef = Decimal.pow(this.base(),x)
                ef=Decimal.mul(ef,tmp.F.f2dm)
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "produce F2d3 \n\
                Need: " + format(this.cost()) + " G \n\
                Amount: "+ format(player.F.f2d4) + "(" + format(player[this.layer].buyables[this.id])  +") \n\
                Effect: x" + format(this.effect())},
            unlocked() { return upg('G',52) },
            style() {if (this.canAfford()) return {'height':'150px','background-color': '#C037A5' }
                else return{'height':'150px'}},        
        },
    },
    tick(){let bas=n(1.05)
        let e=n(1.08)
        let expc4=n(1.5)
        let ef=[n(1.065),n(1.08),e.pow(gba('F',102)).mul(0.3).add(0.73)]
        if(upg('G',52))  expc4=expc4.add(0.5)
        if(upg('G',33)) e=e.add(0.005)
        if(gcs('I',34)) e=e.add(0.001)
        if (hasChallenge('G',22)) e=e.add(challengeEffect('G',22))
        if(gba('F',102).gte(1)) bas=ef[n(gba('F',102)).sub(1).min(2)]
        // if (gba('F',102)==n(1)) bas=n(1.065)
        // if (gba('F',102)==n(2)) bas=n(1.08)
        // if (gba('F',102).gte(3)) bas=e.pow(gba('F',102)).mul(0.3).add(0.73)
        if(upg('F',72))  bas=Decimal.mul(bas.sub(1),1.01).add(1)
        if (hasChallenge('G',12))  bas=Decimal.mul(bas.sub(1),challengeEffect('G',12)).add(1)
        if(upg('G',54)) bas=Decimal.mul(bas.sub(1),upgradeEffect('G',54)).add(1)
        if(mil('G',14)) bas=Decimal.pow(bas,tmp.G.gsef)
        if (inChallenge('G',22)) bas=n(1.05).add(gba('F',102).pow(expc4).div(100))
        //if (bas.gte(2)) bas=Decimal.pow(10,bas.div(2).log(10).pow(0.96)).mul(2)
        return bas},
    F1effect() {
        ef = n(1)
        if (mil('F',10))  ef=ef.mul(buyableEffect("F", 11))
        if (upg('F',41))  ef=ef.mul(2)
        if (upg('F',45))  ef=ef.mul(4)
        if (mil('F',14))  ef=ef.mul(10)
        if (inChallenge('G', 11))  ef=ef.pow(0.8)
        if (mil('G',8))  ef=ef.pow(tmp.F.F2f)
        if (mil('I',0))  ef=ef.pow(1.05).mul(1e10)
        if (mil('I',1))  ef=ef.pow(1.05).mul(1e10)
        if (gcs('I',31))  ef=ef.pow(1.12)
        if (mil('I',3))  ef=ef.pow(buyableEffect('I',11))
        return ef;
    },
    F2effect() {
        ef=n(1)
        if(mil('G',8))  ef=ef.mul(buyableEffect("F", 111))
        return ef;
    },
    fdm(){
        ef = n(1)
        ef=Decimal.mul(ef,buyableEffect('F',101))
        if (upg('G',11))  ef=Decimal.mul(ef,2)
        if (upg('G',21))  ef=Decimal.mul(ef,upgradeEffect('G',21)[0])
        ef=Decimal.mul(ef,buyableEffect('G',12))
    	if (hasChallenge("G", 11))  ef = Decimal.mul(ef,challengeEffect('G',11))
        if (upg('F',71))  ef=Decimal.mul(ef,upgradeEffect('F',71))
        if (upg('F',73))  ef=Decimal.mul(ef,upgradeEffect('F',73))
        if (challengeCompletions("G", 11)>=3) ef=Decimal.mul(ef,tmp.G.gc1ef)
        return ef;
    },
    f2dm(){
        ef = new Decimal(1)
        if (upg('G',51))  ef=Decimal.mul(ef,upgradeEffect('G',51))
        if (upg('G',53))  ef=Decimal.mul(ef,upgradeEffect('G',53))
        return ef;
    },
    fdbas(){
        ef=n(2)
        if (upg('F',61))  ef=Decimal.add(ef,0.25)
        if (mil('F',15)) ef=Decimal.add(ef,0.15)
        if (upg('G',12)) ef=Decimal.add(ef,0.1)
        if (upg('G',24)) ef=Decimal.add(ef,0.1)
        if (upg('F',81)) ef=Decimal.add(ef,0.1)
        if (hasChallenge('G',21)) ef=Decimal.add(ef,challengeEffect('G',21))
        ef=ef.add(tmp.G.gc4ef)
        if(gcs('I',33)) ef=ef.mul(1.1)
        if(inChallenge('G',12)) ef=ef.pow(0.5)
        return ef
    },
    scaling(){
        ef = n(1.6)
        if (upg('G',13))  ef=ef.sub(0.1)
        if (upg('G',15))  ef=ef.sub(0.1)
        if (upg('G',22))  ef=ef.sub(0.1)
        if (upg('G',23))  ef=ef.sub(0.1)
        if (upg('G',25))  ef=ef.sub(0.04)
        if (upg('G',35))  ef=ef.sub(0.01)
        return ef;
    },
    // sc2(){
    //     ef = n(1.5)
    //     return ef;
    // },
    F1f() {
        let exp=n(0.15)  
        if (upg('F',52))  exp=Decimal.mul(exp,3)
        if (upg('F',54))  exp=Decimal.add(exp,0.55)
        if (upg('F',63))  exp=Decimal.mul(exp,2)
        let ef=player.F.F1.max(1).pow(exp)
        if (upg('F',63))  ef=Decimal.pow(10,ef.add(10).log(10).pow(1.015))
        if (upg('F',65))  ef=Decimal.pow(10,ef.add(10).log(10).pow(1.05))
        if (upg('F',73))  ef=Decimal.pow(10,ef.add(10).log(10).pow(1.2))
        if (upg('G',31)) {
            let t=n(400)
            if (upg('G',35))  t=Decimal.add(t,-150)
            if (mil('G',5))  t=Decimal.add(t,-50)
            if (upg('G',43))  t=Decimal.add(t,-50)
            if(mil('G',14)) t=t.div(tmp.G.gsef)
            let sc=n(1.5).add(player.F.F1.div('1e1200').log(10).div(t))
            if (player.F.F1.gte('1e1200')) ef=n('e21200').mul(Decimal.pow(10,player.F.F1.div('1e1199').log(10).pow(sc)))}//10^[(1200x2)^(1.015x1.05x1.21.2)]=e35331
        return ef
    },
    F2f() {
        let exp=n(0.4)  
        let sc1=n(0.85)
        let ef=player.F.F2.max(1).log(10).add(1).pow(exp).sub(1).div(40).add(1)
        if(ef.gte('10')) ef=Decimal.pow(10,ef.div('10').log(10).pow(sc1)).mul('10')
        return ef
    },
    update(diff) {
        if (mil('F',10))  player.F.F1 = player.F.F1.add(tmp.F.F1effect.mul(player.F.fd1).mul(diff))
        if (tmp.F.buyables[11].effect.gte(1)) player.F.fd1 = player.F.fd1.add(tmp.F.buyables[12].effect.mul(player.F.fd2).mul(diff))
        if (tmp.F.buyables[12].effect.gte(1)) player.F.fd2 = player.F.fd2.add(tmp.F.buyables[13].effect.mul(player.F.fd3).mul(diff))
        if (tmp.F.buyables[13].effect.gte(1)) player.F.fd3 = player.F.fd3.add(tmp.F.buyables[21].effect.mul(player.F.fd4).mul(diff))
        if (tmp.F.buyables[21].effect.gte(1)) player.F.fd4 = player.F.fd4.add(tmp.F.buyables[22].effect.mul(player.F.fd5).mul(diff))
        if (tmp.F.buyables[22].effect.gte(1)) player.F.fd5 = player.F.fd5.add(tmp.F.buyables[23].effect.mul(player.F.fd6).mul(diff))
        if (tmp.F.buyables[23].effect.gte(1)) player.F.fd6 = player.F.fd6.add(tmp.F.buyables[31].effect.mul(player.F.fd7).mul(diff))
        if (tmp.F.buyables[31].effect.gte(1)) player.F.fd7 = player.F.fd7.add(tmp.F.buyables[32].effect.mul(player.F.fd8).mul(diff))
        if (mil('G',8))  player.F.F2 = player.F.F2.add(tmp.F.F2effect.mul(player.F.f2d1).mul(diff))
        if (tmp.F.buyables[111].effect.gte(1)) player.F.f2d1 = player.F.f2d1.add(tmp.F.buyables[112].effect.mul(player.F.f2d2).mul(diff))
        if (tmp.F.buyables[112].effect.gte(1)) player.F.f2d2 = player.F.f2d2.add(tmp.F.buyables[113].effect.mul(player.F.f2d3).mul(diff))
        if (tmp.F.buyables[113].effect.gte(1)) player.F.f2d3 = player.F.f2d3.add(tmp.F.buyables[121].effect.mul(player.F.f2d4).mul(diff))
    },
})