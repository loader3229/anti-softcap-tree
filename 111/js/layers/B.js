addLayer("B", {
    name: "B", 
    symbol: "B", 
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    passiveGeneration(){    let pg=n(0)
        if (mil("C", 2)||mil('I',1)) pg=n(1)
        if (hasMilestone("C", 3))  pg=pg.mul(100)
        if (hasMilestone("D", 1))  pg=pg.mul(100)
        if (hasMilestone("D", 2))  pg=pg.mul(100)
        return pg},
    color: "#7AAA2C",
    requires: new Decimal(3e4), 
    resource: "B", 
    baseResource: "A", 
    baseAmount() {return player.A.points}, 
    type: "normal", 
    exponent: 0.2, 
    gainExp() {
        return new Decimal(1)
    },
    row: 0, 
    hotkeys: [
        {key: "b", description: "B: Reset for B points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){  if (player.B.unlocked) return true
        else return (hasUpgrade("A", 35))},
    gainMult() { 
        mult = new Decimal(1)
        mult = mult.mul(hasUpgrade(this.layer,14)?2:1)
        mult = mult.mul(hasUpgrade(this.layer,15)?1.5:1)
        mult = mult.mul(hasUpgrade(this.layer,22)?2:1)
        mult = mult.mul(hasUpgrade(this.layer,24)?2:1)
        mult = mult.mul(hasUpgrade(this.layer,25)?2:1)
        mult = mult.mul(hasUpgrade('C',25)?50:1)
        mult = mult.pow(hasChallenge("A", 11)?1.1:1)
        mult = mult.mul(hasChallenge("A", 12)?10:1)
        mult = mult.mul(hasChallenge("A", 22)?10:1)
        mult = mult.mul(buyableEffect("B",12))
        mult = mult.mul(hasUpgrade("B", 41)?15:1)
        mult = mult.mul(hasUpgrade("B", 51)?20:1)
        mult = mult.mul(hasUpgrade("B", 53)?30:1)
        mult = mult.mul(hasUpgrade("B", 61)?upgradeEffect('B',61):1)
        mult = mult.mul(hasMilestone("B", 6)?100:1)
        mult = mult.mul(hasMilestone("B", 7)?1e5:1)
        mult = mult.mul(buyableEffect("E",12))
        mult = mult.mul(hasUpgrade("E", 82)?upgradeEffect('E',82):1)        
        mult = mult.mul(hasUpgrade("E",92)?upgradeEffect("E",92):1)
        mult = mult.mul(mil("F", 0)?10:1)
        mult = mult.mul(mil("I", 0)?5:1)
        mult = mult.pow(hasUpgrade("E", 65)?1.004:1)
        if (inChallenge('F',11)) mult=Decimal.pow(mult,0.25)

        return mult
    },
    softcap(){return new Decimal(Infinity)},
	softcapPower(){return new Decimal(1)},
    microtabs: {
        stuff: {       
            "Upgrades": {
                unlocked() {return true},
                content: [ "upgrades"]}, 
            "Buyables": {
                unlocked() {return (hasMilestone("D", 2))},
                content: [
                ["raw-html", () => `<h4 style="opacity:.5">Bbs' cost increase faster above 400 purchases,<br> can be delayed in upcoming contents.<br></h4>`]
                ,["raw-html", () => `<h4 style="opacity:.5">The scaling is even stronger after 60000 purchases.</h4>`]
                ,"buyables"]},  
            "Milestones": {
                unlocked() {return (hasUpgrade("B", 53))},
                content: ["milestones"]  },
        }
    },
    tabFormat: [
        "main-display",
        "prestige-button",
        ["microtabs", "stuff"],
        ["blank", "25px"],
    ],
    branches: ["A"],
    doReset(layer){
        if (layer=="F") {        
            let keep = []
            if (mil("F",0)) keep.push("milestones")
            if (mil("F",4)) keep.push("upgrades")
            layerDataReset(this.layer, keep)}
        if (layer=="I") {        
            let keep = []
            if(gcs('I',11)) keep.push("milestones")
            if(gcs('I',12)) keep.push("challenges")
            if(gcs('I',13)) keep.push("upgrades")
            layerDataReset(this.layer, keep)}
    },
    autoUpgrade() {return (hasUpgrade("F",13))},
    milestones: {
        0: {requirementDescription: "1e65 total B (1",
            done() {return player[this.layer].total.gte('1e65')}, 
            effectDescription: "buyables cost nothing.",
        },
        1: {requirementDescription: "1e74 total B (2",
            done() {return player[this.layer].total.gte('1e74')}, 
            effectDescription: "B26 effect divide Bb cost.",
        },
        2: {requirementDescription: "1e111 total B (3",
            done() {return player[this.layer].total.gte('1e111')}, 
            effectDescription: "autobuy B buyables.",
            toggles: [ ["B","auto"] ]
        },
        3: {requirementDescription: "1e140 total B (4",
            done() {return player[this.layer].total.gte('1e140')}, 
            effectDescription: "unlock 5th buyable.",
        },
        4: {requirementDescription: "1e200 total B (5",
            done() {return player[this.layer].total.gte('1e200')}, 
            effectDescription: "unlock a chal.",
        },
        5: {requirementDescription: "1.79e308 total B (6",
            done() {return player[this.layer].total.gte('1.79e308')}, 
            effectDescription: "100x C/D passive.",
        },
        6: {requirementDescription: "1e658 total B (7",
            done() {return player[this.layer].total.gte('1e658')}, 
            effectDescription: "x100 B,unlock a upg.",
        },
        7: {requirementDescription: "1e1700 total B (8",
            done() {return player[this.layer].total.gte('1e1700')}, 
            effectDescription: "x1e5 B,unlock a layer.",
        },
        8: {requirementDescription: "1e2345 total B (9",
            done() {return player[this.layer].total.gte('1e2345')}, 
            effectDescription: "bulk buy x10 B buyables.",
        },
    },
    upgrades: {
        11: {
            title:'B1',
            description: function() {return '5x points \n\
                '+'<br>layer B total: '+ format(this.effect()) +'x'},            
            effect()  { 
                let ef = 5
                if (hasUpgrade('B',12)) ef = ef*5
                if (hasUpgrade('B',13)) ef = ef*5
                if (hasUpgrade('B',15)) ef = ef*5
                if (hasUpgrade('B',24)) ef = ef*10
                if (hasUpgrade('B',25)) ef = ef*10
                if (hasUpgrade('B',31)) ef = ef*20
                if (hasUpgrade('B',42)) ef = ef*2e4
                if (hasUpgrade('B',64)) ef = ef*5e4
                if (hasUpgrade('B',72)) ef = ef*5e4
                if (hasUpgrade('B',81)) ef = ef*1e5

                ef=Decimal.pow(ef,buyableEffect("B",21))

                return ef;          
            },
            cost:new Decimal(1),
        },
        12: {
            title:'B2',
            description: "5x points.",
            cost:new Decimal(10),
            unlocked() { return (hasUpgrade(this.layer, 11))},
        },
        13: {
            title:'B3',
            description: "5x points.",
            cost:new Decimal(20),
            unlocked() { return (hasUpgrade(this.layer, 12))},
        },
        14: {
            title:'B4',
            description: "2x B.",
            cost:new Decimal(30),
            unlocked() { return (hasUpgrade(this.layer, 13))},
        },
        15: {
            title:'B5',
            description: "1.5x B,5x points.",
            cost:new Decimal(80),
            unlocked() { return (hasUpgrade(this.layer, 14))},
        },
        21: {
            title:'B6',
            description: "B^0.3 boost points.",
            cost: new Decimal(160),
            unlocked() { return (hasUpgrade(this.layer, 15))},
            effect()  { 
                let ef = 0.3
                if (hasUpgrade('B', 32))  ef = ef*1.5
                if (hasUpgrade('C', 22))  ef = ef*1.3
                return player[this.layer].points.pow(ef);          
            },
            effectDisplay() { return format(this.effect())+"x" }, 
        },
        22: {
            title:'B7',
            description: "2x B.",
            cost:new Decimal(200),
            unlocked() { return (hasUpgrade(this.layer, 21))},
        },
        23: {
            title:'B8',
            description: "get A passively.",
            cost:new Decimal(500),
            unlocked() { return (hasUpgrade(this.layer, 22))},
        },
        24: {
            title:'B9',
            description: "2x B,10x points.",
            cost:new Decimal(600),
            unlocked() { return (hasUpgrade(this.layer, 23))},
        },
        25: {
            title:'B10',
            description: "2x B,10x points.<br>unlock A chal.",
            cost:new Decimal(1.5e3),
            unlocked() { return (hasUpgrade(this.layer, 24))},
        },
        31: {
            title:'B11',
            description: "20x points.",
            cost:new Decimal(8e4),
            unlocked() { return (hasUpgrade(this.layer, 25))},
        },
        32: {
            title:'B12',
            description: "A5 exp+0.05.",
            cost:new Decimal(1.2e5),
            unlocked() { return (hasUpgrade(this.layer, 31))},
        },
        33: {
            title:'B13',
            description: "A9^1.5,unlock next chal.",
            cost:new Decimal(3e5),
            unlocked() { return (hasUpgrade(this.layer, 32))},
        },
        34: {
            title:'B14',
            description: "A9^1.5.",
            cost:new Decimal(8e5),
            unlocked() { return (hasUpgrade(this.layer, 33))},
        },
        35: {
            title:'B15',
            description: "A5 exp+0.05,unlock next chal.",
            cost:new Decimal(1.5e6),
            unlocked() { return (hasUpgrade(this.layer, 34))},
        },
        41: {
            title:'B16',
            description: "x15 B,unlock 2nd bab.",
            cost:new Decimal('3e39'),
            unlocked() { return player.B.total.gte('1e39')},
        },
        42: {
            title:'B17',
            description: "x2e4 points<br>,unlock 3rd bab.",
            cost:new Decimal('1e41'),
            unlocked() { return (hasUpgrade(this.layer, 41))},
        },
        43: {
            title:'B18',
            description: "Bb1-2 are cheaper.",
            cost:new Decimal('2e45'),
            unlocked() { return (hasUpgrade(this.layer, 42))},
        },
        44: {
            title:'B19',
            description: "mult to pts based on Bb1 eff.",
            cost:new Decimal('3e46'),
            effect()  { 
                let b=n(buyableEffect('B',11))
                let ef = b.pow(0.2).times(b.add(1).log(10).pow(2))
                if (hasUpgrade('B',55)) ef=ef.pow(1.25)
                return ef;          
            },
            unlocked() { return (hasUpgrade(this.layer, 43))},
            effectDisplay() { return format(this.effect())+"x" }, 
        },
        45: {
            title:'B20',
            description: "2e4x pts,unlock 4th bab.",
            cost:new Decimal('4e48'),
            unlocked() { return (hasUpgrade(this.layer, 44))},
        },
        51: {
            title:'B21',
            description: "x20 B.<br>Bb3 is stronger.",
            cost:new Decimal('3e50'),
            unlocked() { return (hasUpgrade(this.layer, 45))},
        },
        52: {
            title:'B22',
            description: "mult to pts based on Bb2 eff.",
            cost:new Decimal('5e55'),
            effect()  { 
                let ef = buyableEffect('B',12).pow(0.25).times(buyableEffect('B',11).add(1).log(10).pow(2))
                if (hasUpgrade('B',55)) ef=ef.pow(1.25)
                return ef;          
            },
            unlocked() { return (hasUpgrade(this.layer, 51))},
            effectDisplay() { return format(this.effect())+"x" }, 
        },
        53: {
            title:'B23',
            description: "30x B,Bb1 100x cheaper.",
            cost:new Decimal('2e58'),
            unlocked() { return (hasUpgrade(this.layer, 52))},
        },
        54: {
            title:'B24',
            description: "Bb1 base +0.05.",
            cost:new Decimal('5e65'),
            unlocked() { return (hasUpgrade(this.layer, 53))},
        },
        55: {
            title:'B25',
            description: "B19/B22 ^1.3.",
            cost:new Decimal('2e68'),
            unlocked() { return (hasUpgrade(this.layer, 54))},
        },
        61: {
            title:'B26',
            description: "lg pts mult B.",
            cost:new Decimal('1e70'),
            effect()  { 
                let ef = player.points.add(10).log(10)
                if (hasUpgrade('A',53)) ef=Decimal.mul(ef,10)
                if (hasUpgrade('A',54)) ef=Decimal.mul(ef,10)
                if (hasUpgrade('B',63)) ef=Decimal.pow(ef,1.15)
                if (hasUpgrade('B',64)) ef=Decimal.pow(ef,1.15)
                if (hasUpgrade('B',74)) ef=Decimal.pow(ef,1.3)
                if (hasUpgrade('A',62)) ef=Decimal.mul(ef,upgradeEffect('A',62))
                if (hasUpgrade('E',31)) ef=Decimal.pow(ef,1.1)
                if (hasMilestone('E',8)) ef=Decimal.pow(ef,1.05)
                if (hasMilestone('E',10)) ef=Decimal.pow(ef,1.05)
                if (hasUpgrade('E',105)) ef=Decimal.pow(ef,1.05)
                if (hasMilestone('F',2)) ef=Decimal.pow(ef,1.1)
                return ef;          
            },
            unlocked() { return (hasUpgrade(this.layer, 55))},
            effectDisplay() { return format(this.effect())+"x" }, 
        },
        62: {
            title:'B27',
            description: "unlock new A upg.",
            cost:new Decimal('1e81'),
            unlocked() { return (hasUpgrade(this.layer, 61))},
        },
        63: {
            title:'B28',
            description: "B26 ^1.15.",
            cost:new Decimal('1e113'),
            unlocked() { return (hasMilestone(this.layer, 2))},
        },
        64: {
            title:'B29',
            description: "B26 ^1.15,5e4x pts.",
            cost:new Decimal('1e116'),
            unlocked() { return (hasUpgrade(this.layer, 63))},
        },
        65: {
            title:'B30',
            description: "Bb1-4 are cheaper.",
            cost:new Decimal('1e133'),
            unlocked() { return (hasUpgrade(this.layer, 64))},
        },
        71: {
            title:'B31',
            description: "Bb1-2 base +0.05.",
            cost:new Decimal('1e150'),
            unlocked() { return (hasMilestone(this.layer, 3))},
        },
        72: {
            title:'B32',
            description: "5e4x pts.",
            cost:new Decimal('1e170'),
            unlocked() { return (hasUpgrade(this.layer, 71))},
        },
        73: {
            title:'B33',
            description: "Bb1 base x1.025.",
            cost:new Decimal('1e500'),
            unlocked() { return (hasUpgrade(this.layer, 72))},
        },
        74: {
            title:'B34',
            description: "B26 ^1.3.",
            cost:new Decimal('1e540'),
            unlocked() { return (hasUpgrade(this.layer, 73))},
        },
        75: {
            title:'B35',
            description: "Bb5 is cheaper.",
            cost:new Decimal('1e585'),
            unlocked() { return (hasUpgrade(this.layer, 74))},
        },
        81: {
            title:'B36',
            description: "x1e5 pts.",
            cost:new Decimal('1e1058'),
            unlocked() { return (hasUpgrade('A', 65))},
        },
        82: {
            title:'B37',
            description: "Bb1-2 is cheaper.",
            cost:new Decimal('1e1185'),
            unlocked() { return (hasUpgrade(this.layer, 81))},
        },
    },
    automate(){
        if (player.B.auto) {  buyBuyable("B",11),buyBuyable("B",12),buyBuyable("B",21)
            ,buyBuyable("B",22),buyBuyable("B",23) }
    },
    buyables:{
        11: {
            title: "Bb1", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cp=n(1.027)
                let cost = Decimal.pow(4, x.pow(1.035)).times('1e38')
                if (hasUpgrade('B',43)) cost = Decimal.pow(3.8, x.pow(1.03)).times('1e37')
                if (hasUpgrade('B',53)) cost = Decimal.pow(3.8, x.pow(1.03)).times('1e35')
                if (hasUpgrade('B',65)) cost = Decimal.pow(3.7, x.pow(1.028)).times('1e34')
                if (hasUpgrade('B',82)) cost = Decimal.pow(3.6, x.pow(1.027)).times('1e27')
                //let sc=400
                //if (hasMilestone('E',15)) sc=Decimal.add(sc,100)
                //if (inChallenge('E',42)) sc=Decimal.add(sc,-300)
                //sc = Decimal.add(sc,tmp.E.ekf.ceil())
                let sc=tmp.B.scaling
                let sc2=tmp.B.sc2
                let scpow=tmp.B.scpow
                if (x.gte(sc2)) cp =cp.add(x.sub(sc2).div(sc2).div(80))
                if (hasUpgrade('F',35)) cost = Decimal.pow(3.6, x.pow(cp))
                let t=tmp.B.scad
                if (hasMilestone('B',1)) cost = cost.div(upgradeEffect('B',61))
                if (x.gte(sc)) cost =cost.pow(x.sub(sc).div(t).add(1).pow(scpow))
                if (hasUpgrade('E',43)) cost = cost.pow(0.992)
                if (hasUpgrade('E',73)) cost = cost.pow(0.99)
                if (hasChallenge('E',31)) cost = cost.pow(challengeEffect('E',31))
                if(gcs('I',105)) cost=n(3).pow(x.pow(1.03))
                return cost
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            bulk() { 
                let tar=tmp.B.bulk//tar.min()
                if(gcs('I',105)) tar=player.B.points.add(10).log(3).pow(100/103).sub(1).sub(gba(this.layer, this.id)).ceil().max(0)
                let c = this.cost(getBuyableAmount(this.layer, this.id).add(tar))
                if (player[this.layer].points.gte(c)) player.B.buyables[this.id] = player.B.buyables[this.id].add(tar)},
            buy() {
                if (!mil('B',0)) player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   let b = n(3)
                if (hasUpgrade('B',54)) b = b.add(0.05)
                if (hasUpgrade('B',71)) b = b.add(0.05)
                if (hasUpgrade('B',73)) b = b.mul(1.02)
                if (hasMilestone('B',3)) b = b.add(buyableEffect('B',23))
                if (hasUpgrade('F',65)) b = b.pow(upgradeEffect('F',65))
                if (hasUpgrade('G',25)) b = b.mul(upgradeEffect('G',25))
                if (inChallenge('E',12)) b = n(2)
                if (inChallenge('E',31)) b = n(1.2)
                return b},
            //purchaseLimit() {return n('1e300')},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let ef = Decimal.pow(this.base(),x.pow(1.01))
                if (inChallenge('A',32)) ef=ef.pow(0.5)
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "give A a x"+ format(this.base()) + " mult \n\
                Cost: " + format(this.cost()) + " B \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: x" + format(this.effect()) + " A" },
            unlocked() { return hasMilestone('D',2) }
        },
        12: {
            title: "Bb2", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cp=n(1.04)
                let cost = Decimal.pow(10, x.pow(1.045)).times('1e40')
                if (hasUpgrade('B',43)) cost = Decimal.pow(9, x.pow(1.041)).times('1e39')
                if (hasUpgrade('B',65)) cost = Decimal.pow(9, x.pow(1.04)).times('1e38')
                if (hasUpgrade('B',82)) cost = Decimal.pow(8, x.pow(1.04)).times('1e30') 
                let sc=tmp.B.scaling
                let sc2=tmp.B.sc2
                let scpow=tmp.B.scpow
                if (x.gte(sc2)) cp =Decimal.add(cp,x.sub(sc2).div(sc2).div(60))
                if (hasUpgrade('F',35)) cost = Decimal.pow(8, x.pow(cp))               
                let t=tmp.B.scad
                if (hasMilestone('B',1)) cost = cost.div(upgradeEffect('B',61))

                if (x.gte(sc)) cost =Decimal.pow(cost,x.sub(sc).div(t).add(1).pow(scpow))
                if (hasUpgrade('E',43)) cost = Decimal.pow(cost, 0.992)
                if (hasUpgrade('E',73)) cost = Decimal.pow(cost, 0.99)
                if (hasChallenge('E',31)) cost = Decimal.pow(cost, challengeEffect('E',31))
                if(gcs('I',105)) cost=n(8).pow(x.pow(1.03))
                return cost
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            bulk() { 
                let tar=tmp.B.bulk
                if(gcs('I',105)) tar=player.B.points.add(10).log(8).pow(100/103).sub(1).sub(gba(this.layer, this.id)).ceil().max(0)
                let c = this.cost(getBuyableAmount(this.layer, this.id).add(tar))
                if (player[this.layer].points.gte(c)) player.B.buyables[this.id] = player.B.buyables[this.id].add(tar)},
            buy() {
                if (!hasMilestone('B',0)) player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            //purchaseLimit() {return n('1e300')},
            base(){   let bas = n(2)
                if (hasUpgrade('B',71)) bas = Decimal.add(bas,0.05)
                if (hasMilestone('B',3)) bas = Decimal.add(bas,buyableEffect('B',23))
                if (hasUpgrade('F',65)) bas = Decimal.pow(bas,upgradeEffect('F',65))
                if (hasUpgrade('G',25)) bas = Decimal.mul(bas,upgradeEffect('G',25))
                if (inChallenge('E',12)) bas = n(2)
                if (inChallenge('E',31)) bas = n(1.2)
                return bas},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let efbb2 = Decimal.pow(this.base(), x.pow(1.006))
                if (inChallenge('A',32)) efbb2=Decimal.pow(efbb2,0.5)
                return efbb2},
            display() { // Everything else displayed in the buyable button after the title
                return "give B a x" + format(this.base()) + " mult \n\
                Cost: " + format(this.cost()) + " B \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: x" + format(this.effect()) + " B" },
            unlocked() { return hasUpgrade('B',41) }
        },
        21: {
            title: "Bb3", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = Decimal.pow(10, x.pow(1.07)).times('1e41')
                if (hasUpgrade('B',65))  cost = Decimal.pow(10, x.pow(1.065)).times('1e40')
                let sc=n(400)
                if (inChallenge('E',42)) sc=Decimal.add(sc,-300)                
                let sc2=tmp.B.sc2
                let scpow=tmp.B.scpow
                let cp=n(1.065)
                if (x.gte(sc2)) cp =Decimal.add(cp,x.sub(sc2).div(sc2).div(40))
                if (hasUpgrade('F',35))  cost = Decimal.pow(10, x.pow(cp))
                let t=tmp.B.scad
                if (hasMilestone('B',1)) cost = cost.div(upgradeEffect('B',61))

                if (x.gte(sc)) cost =Decimal.pow(cost,x.sub(sc).div(t).add(1).pow(scpow))
                if (hasChallenge('E',31)) cost = Decimal.pow(cost, challengeEffect('E',31))
                if(gcs('I',105)) cost=n(8).pow(x.pow(1.06))
                return cost
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            bulk() { 
                let tar=tmp.B.bulk
                if(gcs('I',105)) tar=player.B.points.add(10).log(8).pow(100/106).sub(1).sub(gba(this.layer, this.id)).ceil().max(0)
                let c = this.cost(getBuyableAmount(this.layer, this.id).add(tar))
                if (player[this.layer].points.gte(c)) player.B.buyables[this.id] = player.B.buyables[this.id].add(tar)},
            buy() {
                if (!hasMilestone('B',0)) player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let ef = Decimal.pow(x.div(1.3).add(1),0.6).div(6).add(0.8333)
                if (hasUpgrade('B',51)) ef = Decimal.pow(x.div(1.25).add(1),0.6).div(4.5).add(0.777)
                if (hasUpgrade('A',55)) ef = Decimal.pow(x.div(1.23).add(1),0.6).div(4).add(0.75)
                if (hasChallenge('F',11)) ef = Decimal.mul(ef,Decimal.add(1,challengeEffect('F',11)/100))
                if (hasUpgrade('F',35)) ef = Decimal.mul(ef.sub(1),1.05).add(1)
                if (inChallenge('A',41)) ef=n(1)
                if (inChallenge('E',31)) ef=n(1)
                if (inChallenge('E',42)) ef=n(1)
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "boost to B's pts mult(exp) \n\
                Cost: " + format(this.cost()) + " B \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: ^" + format(this.effect())},
            unlocked() { return hasUpgrade('B',42) }
        },
        22: {
            title: "Bb4", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = Decimal.pow(16, x.pow(1.07)).times('1e49')
                let sc=400
                if (inChallenge('E',42)) sc=Decimal.add(sc,-300)
                let sc2=tmp.B.sc2
                let scpow=tmp.B.scpow
                let cp=1.07
                if (x.gte(sc2)) cp =Decimal.add(cp,x.sub(sc2).div(sc2).div(40))
                let t=tmp.B.scad
                if (hasUpgrade('B',65))  cost = Decimal.pow(16, x.pow(1.065)).times('1e48')
                if (hasUpgrade('F',35))  cost = Decimal.pow(16, x.pow(cp))
                if (hasMilestone('B',1)) cost = cost.div(upgradeEffect('B',61))
                if (x.gte(sc)) cost =Decimal.pow(cost,x.sub(sc).div(t).add(1).pow(scpow))

                if (hasChallenge('E',31)) cost = Decimal.pow(cost, challengeEffect('E',31))
                if(gcs('I',105)) cost=n(10).pow(x.pow(1.07))
                return cost
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            bulk() { 
                let tar=tmp.B.bulk
                if(gcs('I',105)) tar=player.B.points.add(10).log(10).pow(100/107).sub(1).sub(gba(this.layer, this.id)).ceil().max(0)
                let c = this.cost(getBuyableAmount(this.layer, this.id).add(tar))
                if (player[this.layer].points.gte(c)) player.B.buyables[this.id] = player.B.buyables[this.id].add(tar)},
            buy() {
                if (!hasMilestone('B',0)) player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let ef = Decimal.pow(x.div(1.3).add(1),0.7).div(6).add(0.8333)
                if (hasUpgrade('A',55)) ef= Decimal.pow(x.div(1.26).add(1),0.7).div(5).add(0.8)
                if (hasChallenge('F',11)) ef = Decimal.mul(ef,Decimal.add(1,challengeEffect('F',11)/100))
                if (hasUpgrade('F',35)) ef = Decimal.mul(ef.sub(1),1.05).add(1)
                if(inChallenge('A',41)) ef=n(1)
                if (inChallenge('E',31)) ef=n(1)
                if (inChallenge('E',42)) ef=n(1)
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "boost to A's pts mult(exp) \n\
                Cost: " + format(this.cost()) + " B \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: ^" + format(this.effect())},
            unlocked() { return hasUpgrade('B',45) }
        },
        23: {
            title: "Bb5", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = Decimal.pow(1234, x.pow(1.2)).times('1e140')
                let sc=n(400)
                if (inChallenge('E',42)) sc=Decimal.add(sc,-300)
                let sc2=tmp.B.sc2
                let scpow=tmp.B.scpow
                let cp=n(1.2)
                if (x.gte(sc2)) cp =Decimal.add(cp,x.sub(sc2).div(sc2).div(15))
                let t=tmp.B.scad
                if (hasUpgrade('B',75)) cost = Decimal.pow(1200, x.pow(1.2)).times('1e135')
                if (hasUpgrade('E',62)) cost = Decimal.pow(1100, x.pow(1.2)).times('1e135')
                if (hasUpgrade('F',35))  cost = Decimal.pow(1100, x.pow(cp))
                if (x.gte(sc)) cost =Decimal.pow(cost,x.sub(sc).div(t).add(1).pow(scpow))

                if (hasUpgrade('D',44)) cost = Decimal.pow(cost,0.98)
                if (hasChallenge('E',31)) cost = Decimal.pow(cost, challengeEffect('E',31))
                if(gcs('I',105)) cost=n(10).pow(x.pow(1.2))
                return cost
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            bulk() { 
                let tar=tmp.B.bulk
                if(gcs('I',105)) tar=player.B.points.add(10).log(10).pow(5/6).sub(1).sub(gba(this.layer, this.id)).ceil().max(0)
                let c = this.cost(getBuyableAmount(this.layer, this.id).add(tar))
                if (player[this.layer].points.gte(c)) player.B.buyables[this.id] = player.B.buyables[this.id].add(tar)},
            buy() {
                if (!hasMilestone('B',0)) player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let ef = Decimal.pow(x.div(40).add(1),0.7).sub(1)
                if (inChallenge('A',41)) ef = n(0)
                if (hasUpgrade('A',63)) ef = Decimal.mul(ef,1.02)
                if (hasUpgrade('E',34)) ef = Decimal.mul(ef,1.02)
                if (hasUpgrade('E',45)) ef = Decimal.mul(ef,1.02)
                if (hasUpgrade('E',53)) ef = Decimal.mul(ef,1.03)
                if (hasMilestone('F',7)) ef = Decimal.mul(ef,1.025)
                if (hasChallenge('F',11)) ef = Decimal.mul(ef,Decimal.add(1,challengeEffect('F',11).div(100)))
                if (hasUpgrade('F',33)) ef = Decimal.mul(ef,Decimal.add(1,upgradeEffect('F',33).div(100)))
                if (hasUpgrade('F',41)) ef = Decimal.mul(ef,1.03)
                ef=Decimal.mul(ef,buyableEffect('G',13))
                if (hasUpgrade('G',23)) ef = Decimal.mul(ef,tmp.E.ekf2)
                if (inChallenge('E',41)) ef = Decimal.mul(ef,0.4)
                if (inChallenge('E',42)) ef = n(0)
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "boost Bb1-2 base \n\
                Cost: " + format(this.cost()) + " B \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: +" + format(this.effect())},
            unlocked() { return hasMilestone('B',3) }
        }
    },
    bulk(){
        let tar=n(1)
        if (hasMilestone('B', 8)) tar=Decimal.mul(tar,10)
        if (hasMilestone('F', 2)) tar=Decimal.mul(tar,2)
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
    scaling(){
        let sc=n(400)
        if (hasMilestone('E',15)) sc=Decimal.add(sc,100)
        if (inChallenge('E',42)) sc=Decimal.add(sc,-300)
        if (!hasUpgrade('G',32)) sc=Decimal.add(sc,tmp.E.ekf.ceil())
        sc = Decimal.add(sc,upgradeEffect('F',31).ceil())
        if (hasUpgrade('G',15))  sc=n(Infinity)
        return sc
    },
    scpow(){let scpow=n(0.45)
        if (hasUpgrade('A',65)) scpow=Decimal.add(scpow,-0.01)
        if (hasUpgrade('E',103)) scpow=Decimal.add(scpow,-0.005)
        if (hasUpgrade('F',34)) scpow=Decimal.add(scpow,-0.003)
        if (hasUpgrade('F',54)) scpow=Decimal.add(scpow,-0.008)
        if (hasUpgrade('G',15))  scpow=n(0)
        return scpow
    },
    scad(){let t=n(800)
        if (hasUpgrade('A',65)) t=Decimal.add(t,150)
        if (hasUpgrade('E',103)) t=Decimal.add(t,50)
        return t
    },
    sc2(){let sc=Decimal.add(tmp.B.scaling,60000)
        if (hasUpgrade('F',42)) sc=Decimal.add(sc,1000)
        if (hasUpgrade('F',55)) sc=Decimal.add(sc,2000)
        if (hasUpgrade('F',63)) {if (!hasUpgrade('G',32)) sc=Decimal.add(sc,tmp.E.ekf)}
        if (hasUpgrade('G',32))  sc=n(Infinity)
        //let sc=50000
        return sc
    }
})
