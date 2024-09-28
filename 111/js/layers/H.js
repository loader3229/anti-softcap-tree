addLayer("H", {
    name: "H", 
    symbol: "H", 
    position: 3, 
    startData() { return {
        unlocked: false,
		points: n(0),
        max: n(0),
        harsh: n(0),
    }},
    passiveGeneration(){  
        let pg=n(0)
        return pg
    },
    color: "#747EC8",
    requires: n('e1.504e8'), 
    resource: "H", 
    baseResource: "Gse", 
    baseAmount() {return player.G.Gsetot}, 
    type: "static", 
    resetsNothing(){return mil('H',1)},
    exponent() {
        let exp = n('1.8')
        exp=exp.add(player.H.points.sub(2).max(0).pow(0.5).div(5))
        if(player.H.points.gte(15)) exp=player.H.points.sub(6)
        return exp
    },
    base() {
        let b = n('e3.15e7')
        if(player.H.points.gte(15)) b=n(10)
        return b
    }, 
    gainExp() {
        return n(1)
    },
    row: 3, 
    hotkeys: [
        {key: "h", description: "h: Reset for H points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){  if (player[this.layer].unlocked) return true
    else return (hasUpgrade("G", 133))},
    gainMult() { 
        mult = n(1)
        return mult
    },
    softcap(){return n(Infinity)},
	softcapPower(){return n(1)},
    branches: ['G'],
    effect(){
        let ef =player.H.max.pow(0.7).div(180)
        return ef
    },
    effectDescription() {
        return "which boost b6/9 hardcap by <h2 style='color: #747EC8; text-shadow: 0 0 2px #c2b280'>+"+format(tmp.H.effect)+"</h2> (based on max)"
    },
    milestones: {
        0: {requirementDescription: "2 H (1",
            done() {return player[this.layer].points.gte('2')}, 
            effectDescription: "autobuy Gsb9,11,12,edit b8 and buy max.",
            toggles: [ ['H',"auto"] ]
        },
        1: {requirementDescription: "6 H (2",
            done() {return player[this.layer].points.gte('6')}, 
            effectDescription: "H resets nothing.",
        },
        2: {requirementDescription: "12 H (2",
            done() {return player[this.layer].points.gte('12')}, 
            effectDescription: "unlock harsh.",
        },
        3: {requirementDescription: "17 H (4",
            done() {return player[this.layer].points.gte('17')}, 
            effectDescription: "autobuy Hb1,dialte harsh to 1.01,unlock ???.",
            toggles: [ ['H',"auto"] ]
        },
    },
    microtabs: {
        stuff: {       
            "Main": {
                unlocked() {return true},
                content: [["upgrades",[1,2]]]}, 
            "Milestones": {
                unlocked() {return true},
                content: ["milestones"]},
            "harsh": {
                unlocked() {return (mil("H",2))},
                content: [["display-text", () => "You have <h3 style='color: #359280; text-shadow: 0 0 2px #c2b280'>" + format(player.H.harsh) + "</h3> harsh "+ "<h4>" + format(tmp.H.ha) + " harsh/s <h4>"]
                ,"buyables",['upgrades',[6,7]]]}, 
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
            title:'H1',
            description: "edit GG1 and buy max.",         
            cost:new Decimal('e1.534e8'),
            currencyLocation() {return player.G}, 
            currencyDisplayName: "Gse",
            currencyInternalName: "Gse",
        },
        12: {
            title:'H2',
            description: "boost t13/17.",         
            cost:new Decimal('e2.195e8'),
            currencyLocation() {return player.G}, 
            currencyDisplayName: "Gse",
            currencyInternalName: "Gse",
            unlocked() { return (upg(this.layer, 11))},
        },
        13: {
            title:'H3',
            description: "max H raise Gs,unlock a new Gt.",         
            cost:new Decimal('e2.909e8'),
            currencyLocation() {return player.G}, 
            currencyDisplayName: "Gse",
            currencyInternalName: "Gse",
            effect()  { 
                let b = player.H.max.pow(0.6).div(10)
                let ef=n(b).add(1)
                return ef;
            },
            effectDisplay() { return '^'+format(this.effect(),3) },
            unlocked() { return (upg(this.layer, 12))},
        },
        14: {
            title:'H4',
            description: "max H div b1-3 scaling,unlock a new Gt [req:e6.61e8 e].",         
            cost:new Decimal(4),
            canAfford() {return player.G.Gsetot.gte('e6.61e8')}, 
            effect()  { 
                let exp=n(0.2)
                if(mil('G',29)) exp=exp.add(0.025)
                let b = player.H.max.pow(exp).div(150)
                let ef=n(b).add(1)
                if(upg('H',24)) ef=ef.pow(1.5)
                return ef;
            },
            effectDisplay() { return '/'+format(this.effect(),3) },
            unlocked() { return (upg(this.layer, 13))},
        },
        15: {
            title:'H5',
            description: "keep t20,b11-12 base +0.004.",         
            cost:new Decimal('e4.85e9'),
            currencyLocation() {return player.G}, 
            currencyDisplayName: "Gse",
            currencyInternalName: "Gse",
            unlocked() { return (upg(this.layer, 14))},
        },
        21: {
            title:'H6',
            description: "harsh raise Gs eff.",         
            cost:new Decimal('e4.453e10'),
            currencyLocation() {return player.G}, 
            currencyDisplayName: "Gse",
            currencyInternalName: "Gse",
            effect()  { 
                let exp=n(2)
                let ef = player.H.harsh.add(10).log(10).add(10).log(10).pow(exp).div(4).add(0.75)
                return ef;
            },
            effectDisplay() { return '^'+format(this.effect(),3) },
            unlocked() { return (upg(this.layer, 75))},
        },
        22: {
            title:'H7',
            description: "b9 is much cheaper,Hb5 -0.02.",         
            cost:new Decimal('e4.975e10'),
            currencyLocation() {return player.G}, 
            currencyDisplayName: "Gse",
            currencyInternalName: "Gse",
            unlocked() { return (upg(this.layer, 21))},
        },
        23: {
            title:'H8',
            description: "remove Gse 3-4 nerf,H raise b1 base,dilate harsh to 1.002.",         
            cost:new Decimal('e6.011e10'),
            currencyLocation() {return player.G}, 
            currencyDisplayName: "Gse",
            currencyInternalName: "Gse",
            effect()  { 
                let exp=n(0.15)
                let ef = player.H.points.pow(exp).div(2).add(0.5)
                return ef;
            },
            effectDisplay() { return '^'+format(this.effect(),3) },
            unlocked() { return (upg(this.layer, 22))},
        },
        24: {
            title:'H9',
            description: "H4 ^1.5,Gsb1 boost harsh.",         
            cost:new Decimal('e2.543e11'),
            currencyLocation() {return player.G}, 
            currencyDisplayName: "Gse",
            currencyInternalName: "Gse",
            effect()  { 
                let exp=n(0.4)
                let ef=n(getBuyableAmount('G',21)).add(10).log(10).pow(exp).div(4).add(0.75)
                return ef;
            },
            effectDisplay() { return '^'+format(this.effect(),3) },
            unlocked() { return (upg(this.layer, 23))},
        },
        25: {
            title:'H10',
            description: "remove next 2 e nerf,H31-32 ^2,Hb2/4/5 give b1.",  //,remove b1 nerf,Hb5       
            cost:new Decimal('e3.168e11'),
            currencyLocation() {return player.G}, 
            currencyDisplayName: "Gse",
            currencyInternalName: "Gse",
            unlocked() { return (upg(this.layer, 24))},
        },
        //harsh upgs
        61: {
            title:'H26',
            description: "Hb1 base exp +0.1.", //  ,remove Gse 2nd nerf      
            cost:new Decimal('2e182'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "harsh",
            currencyInternalName: "harsh",
            unlocked() { return (mil(this.layer, 2))},
        },
        62: {
            title:'H27',
            description: "Hb2 cost exp -0.02,unlock a bab.",   
            cost:new Decimal('1e265'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "harsh",
            currencyInternalName: "harsh",
            unlocked() { return (mil(this.layer, 2))},
        },
        63: {
            title:'H28',
            description: "Hb7 base +0.005,b5 -0.005,har^1.05.",   
            cost:new Decimal('1e388'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "harsh",
            currencyInternalName: "harsh",
            unlocked() { return (mil(this.layer, 2))},
        },
        64: {
            title:'H29',
            description: "Hb6 base +0.01,Hb1 base exp +0.05,unlock a bab.",   
            cost:new Decimal('5e586'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "harsh",
            currencyInternalName: "harsh",
            unlocked() { return (mil(this.layer, 2))},
        },
        65: {
            title:'H30',
            description: "Hb5 cost -0.03,Hb1 base exp +0.05,nerf e 3rd nerf.",   
            cost:new Decimal('1e836'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "harsh",
            currencyInternalName: "harsh",
            unlocked() { return (mil(this.layer, 2))},
        },
        71: {
            title:'H31',
            description: "H raise harsh and Gse,b1 amt ^1.02.",   
            cost:n('1e1208'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "harsh",
            currencyInternalName: "harsh",
            effect()  { 
                let exp=n(0.2)
                let ef = player.H.points.pow(exp).div(10).add(0.9)
                if(upg('H',75)) ef=ef.pow(1.25)
                if(upg('H',25)) ef=ef.pow(2)
                return ef;
            },
            effectDisplay() { return '^'+format(this.effect(),3) },
            unlocked() { return (upg(this.layer, 65))},
        },
        72: {
            title:'H32',
            description: "GG raise harsh and Gse,b2 exp -0.02.",   
            cost:n('1e2221'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "harsh",
            currencyInternalName: "harsh",
            effect()  { 
                let exp=n(0.075)
                let ef = player.G.GGtot.pow(exp).div(10).add(0.9)
                if(upg('H',75)) ef=ef.pow(1.25)
                if(upg('H',25)) ef=ef.pow(2)
                return ef;
            },
            effectDisplay() { return '^'+format(this.effect(),3) },
            unlocked() { return (upg(this.layer, 71))},
        },
        73: {
            title:'H33',
            description: "H beyond 12 provide b2,b2 exp -0.04.",   
            cost:n('1e3022'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "harsh",
            currencyInternalName: "harsh",
            effect()  { 
                let ef = player.H.points.sub(12).max(0)//.mul(2)
                return ef;
            },
            unlocked() { return (upg(this.layer, 72))},
        },
        74: {
            title:'H34',
            description: "b7 exp -0.04 and base +0.005,b4 -0.02,b5 -0.005.",   
            cost:n('2e3908'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "harsh",
            currencyInternalName: "harsh",
            unlocked() { return (upg(this.layer, 73))},
        },
        75: {
            title:'H35',
            description: "remove e 2nd nerf,Hb1 base exp +0.2,H31-32 ^1.2,unlock the final bab.",   
            cost:n('1e4981'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "harsh",
            currencyInternalName: "harsh",
            unlocked() { return (upg(this.layer, 74))},
        },
    },
    automate(){
        if (player[this.layer].auto) {if (mil("H",3))  buyBuyable("H",11)
        }
    },
    buyables:{
        11: {
            title: "Hb1", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = n(10).pow(n(10).pow(x.pow(0.25).max(1).sub(1)))//.mul(n(1.5).pow(x))
                return cost
            },
            canAfford() { return player[this.layer].harsh.gte(this.cost()) },
            buy() { player[this.layer].harsh = player[this.layer].harsh.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   
                let e=n(1.5)
                if(upg('H',61)) e=e.add(0.1)
                if(upg('H',64)) e=e.add(0.05)
                if(upg('H',65)) e=e.add(0.05)
                if(upg('H',75)) e=e.add(0.2)
                e=e.add(buyableEffect('H',31))
                let b = player[this.layer].harsh.add(10).log(10).pow(e).div(3).add(2/3)
                if(upg('H',23)) b=b.pow(upgradeEffect('H',23))
                let sc=n(0.6)
                sc=sc.pow(buyableEffect('H',22))
                if(b.gte(10)) b=b.div(10).pow(sc).add(10)   
                return b},
            extra(){
                let e=n(0)
                if (upg('H',25))  e=e.add(getBuyableAmount('H',12)).add(getBuyableAmount('H',21)).add(getBuyableAmount('H',22))
                return e
            },
            effect(x) { // Effects of owning x of the items, x is a decimal
                let exp=n(1)
                if(upg('H',71)) exp=exp.add(0.02)
                let ef = Decimal.pow(this.base(),x.add(this.extra()).pow(exp))
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "give harsh a x"+ format(this.base()) + " mult \n\
                Cost: " + format(this.cost()) + " harsh \n\
                Amount: " + player[this.layer].buyables[this.id]  +" + "+ format(this.extra())+" \n\
                Effect: x" + format(this.effect())},
            unlocked() { return mil('H',2) }
        },
        12: {
            title: "Hb2", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let e=n(0.7)
                if(upg('H',62)) e=e.sub(0.02)
                if(upg('H',72)) e=e.sub(0.02)
                if(upg('H',73)) e=e.sub(0.04)
                let cost = n(10).pow(n(10).pow(x.pow(e).max(1).sub(1))).mul('1e111')
                return cost
            },
            canAfford() { return player[this.layer].harsh.gte(this.cost()) },
            buy() { player[this.layer].harsh = player[this.layer].harsh.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   let base = n(0.01)    
                base=base.mul(n(1).add(buyableEffect('H',23)))
                return base},
            extra(){
                let e=n(0)
                if (upg('H',73))  e=e.add(upgradeEffect('H',73))
                return e
            },
            effect(x) { // Effects of owning x of the items, x is a decimal
                let exp=n(1)
                let ef = Decimal.mul(this.base(),x.add(this.extra()).pow(exp))
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "harsh exp +"+ format(this.base()) + " \n\
                Cost: " + format(this.cost()) + " harsh \n\
                Amount: " + player[this.layer].buyables[this.id]  +" + "+ format(this.extra())+" \n\
                Effect: +" + format(this.effect())},
            unlocked() { return mil('H',2) }
        },
        13: {
            title: "Hb3", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = n(10).pow(n(10).pow(x.add(1).pow(0.85).sub(1))).mul('1e130')
                return cost
            },
            canAfford() { return player[this.layer].harsh.gte(this.cost()) },
            buy() { player[this.layer].harsh = player[this.layer].harsh.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   let base = n(0.003)    
                base=base.add(buyableEffect('H',32))
                return base},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let exp=n(1)
                let ef = Decimal.mul(this.base(),x.pow(exp))
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "dilate harsh by +"+ format(this.base()) + " \n\
                Cost: " + format(this.cost()) + " harsh \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: +" + format(this.effect())},
            unlocked() { return mil('H',2) }
        },
        21: {
            title: "Hb4", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let e=n(0.6)
                if(upg('H',74)) e=e.sub(0.03)
                let cost = n(10).pow(n(10).pow(x.pow(e).max(1).sub(1))).mul('1e128')
                return cost
            },
            canAfford() { return player[this.layer].harsh.gte(this.cost()) },
            buy() { player[this.layer].harsh = player[this.layer].harsh.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   let base = n(0.008)    
                base=base.mul(n(1).add(buyableEffect('H',23)))
                return base},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let exp=n(1)
                let ef = Decimal.mul(this.base(),x.pow(exp))
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "Gse exp +"+ format(this.base()) + " \n\
                Cost: " + format(this.cost()) + " harsh \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: +" + format(this.effect())},
            unlocked() { return mil('H',2) }
        },
        22: {
            title: "Hb5", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let e=n(0.48)
                if(upg('H',65)) e=e.sub(0.03)
                let c = n(10).pow(n(10).pow(x.pow(e).max(1).sub(1))).mul('1e143')
                return c
            },
            canAfford() { return player[this.layer].harsh.gte(this.cost()) },
            buy() { player[this.layer].harsh = player[this.layer].harsh.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   let b = n(0.98)    
                if(upg('H',63)) b=b.sub(0.005)
                if(upg('H',74)) b=b.sub(0.005)
                if(upg('H',22)) b=b.sub(0.02)
                return b},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let exp=n(1)
                let ef = Decimal.pow(this.base(),x.pow(exp))
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "b1 nerf ^"+ format(this.base(),3) + " \n\
                Cost: " + format(this.cost()) + " harsh \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: ^" + format(this.effect(),4)},
            unlocked() { return mil('H',2) }
        },
        23: {
            title: "Hb6", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let c = n(10).pow(n(10).pow(x.pow(0.75).max(1).sub(1))).mul('1e161')
                return c
            },
            canAfford() { return player[this.layer].harsh.gte(this.cost()) },
            buy() { player[this.layer].harsh = player[this.layer].harsh.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   let b = n(0.05)   
                if(upg('H',64)) b=b.add(0.01) 
                return b},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let exp=n(1)
                let ef = Decimal.mul(this.base(),x.pow(exp))
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "b2/4 base mult +"+ format(this.base()) + " \n\
                Cost: " + format(this.cost()) + " harsh \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: +" + format(this.effect())},
            unlocked() { return mil('H',2) }
        },
        31: {
            title: "Hb7", 
            cost(x) { 
                let e=n(0.72)
                if(upg('H',74)) e=e.sub(0.04)
                let c = n(10).pow(n(10).pow(x.add(1).pow(e).sub(1))).mul('1e262')
                return c
            },
            canAfford() { return player[this.layer].harsh.gte(this.cost()) },
            buy() { player[this.layer].harsh = player[this.layer].harsh.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   let b = n(0.02)    
                if(upg('H',63)) b=b.add(0.005)
                return b},
            effect(x) { 
                let exp=n(1)
                let ef = Decimal.mul(this.base(),x.pow(exp))
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "b1 base exp +"+ format(this.base()) + " \n\
                Cost: " + format(this.cost()) + " harsh \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: +" + format(this.effect())},
            unlocked() { return upg('H',62) }
        },
        32: {
            title: "Hb8", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let c = n(10).pow(n(10).pow(x.add(1).pow(1.05).sub(1))).mul('1e773')
                return c
            },
            canAfford() { return player[this.layer].harsh.gte(this.cost()) },
            buy() { player[this.layer].harsh = player[this.layer].harsh.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   let b = n(0.0005)    
                return b},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let exp=n(1)
                let ef = Decimal.mul(this.base(),x.pow(exp))
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "b3 base mul +"+ format(this.base()) + " \n\
                Cost: " + format(this.cost()) + " harsh \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: +" + format(this.effect(),3)},
            unlocked() { return upg('H',64) }
        },
        33: {
            title: "Hb9", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let c = n(10).pow(n(10).pow(x.add(1).pow(0.5).sub(1))).mul('5e7689')
                return c
            },
            canAfford() { return player[this.layer].harsh.gte(this.cost()) },
            buy() { player[this.layer].harsh = player[this.layer].harsh.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   let b = n(1.11)    
                return b},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let exp=n(1)
                let ef = Decimal.pow(this.base(),x.pow(exp))
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "Gs gain and eff ^"+ format(this.base()) + " \n\
                Cost: " + format(this.cost()) + " harsh \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: ^" + format(this.effect(),3)},
            unlocked() { return upg('H',75) }
        },
    },
    ha(){
        let ef=player.H.max.sub(12).max(0).pow(2).add(5).div(5)
        ef=ef.mul(buyableEffect('H',11))
        ef=ef.pow(n(1).add(buyableEffect('H',12)))
        ef=n(10).pow(ef.log(10).pow(n(1).add(buyableEffect('H',13))))
        if(upg('H',23)) ef=n(10).pow(ef.add(10).log(10).pow(1.002))
        if(mil('H',3)) ef=n(10).pow(ef.add(10).log(10).pow(1.01))
        if(upg('H',63)) ef=ef.pow(1.05)
        if(upg('H',71)) ef=ef.pow(upgradeEffect('H',71))
        if(upg('H',72)) ef=ef.pow(upgradeEffect('H',72))
        if(upg('H',24)) ef=ef.pow(upgradeEffect('H',24))
        return ef
    },
    update(diff){
        if (mil("H",2))  player.H.harsh = player.H.harsh.add(tmp.H.ha.mul(diff))
        player.H.max=player.H.max.max(player.H.points)
    },
})
