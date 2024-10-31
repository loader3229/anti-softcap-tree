addLayer("H", {
    name: "H", 
    symbol: "H", 
    position: 3, 
    startData() { return {
        unlocked: false,
		points: n(0),
        max: n(0),
        harsh: n(0),
        hyper: n(0),
        dh:[n(0),n(0),n(0),n(0)],
        dhmax:[n(0),n(0),n(0),n(0)],
        dhp: n(0),
        //dhreq:[0],
    }},
    passiveGeneration(){  
        let pg=n(0)
        return pg
    },
    color: "#747EC8",
    requires: n('e1.5e8'), 
    resource: "H", 
    baseResource: "Gse", 
    baseAmount() {return player.G.Gsetot}, 
    type: "static", 
    resetsNothing(){return mil('H',1)},
    exponent() {
        let exp = n('1.8')
        exp=exp.add(player.H.points.sub(2).max(0).pow(0.5).div(5))
        if(player.H.points.gte(15)) exp=player.H.points.sub(6)
        if(upg('G',144)) exp=exp.div(tmp.H.dhef[1])
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
        {key: "h", description: "H: Reset for H points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
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
            toggles: [ ['H',"auto1"] ]
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
            effectDescription: "autobuy Hb1,dialte harsh to 1.01,unlock hyper.",
            toggles: [ ['H',"auto2"] ]
        },
        4: {requirementDescription: "1e140000 harsh (5",
            done() {return player[this.layer].harsh.gte('e140000')}, 
            effectDescription: "autobuy Hy1,dialte harsh to 1.01.",
            toggles: [ ['H',"auto3"] ]
        },
        5: {requirementDescription: "e1e10 harsh (6",
            done() {return player[this.layer].harsh.gte('e1e10')}, 
            effectDescription: "autobuy b2/b5/y2.",
            toggles: [ ['H',"auto4"] ]
        },
        6: {requirementDescription: "e1e15 harsh (7",
            done() {return player[this.layer].harsh.gte('e1e15')}, 
            effectDescription: "i eff nerf +0.01,sb6 limit +5,dilate y6 1st eff to 1.2.",   
        },
        7: {requirementDescription: "e1e120 harsh (8",
            done() {return player[this.layer].harsh.gte('e1e120')}, 
            effectDescription: "autobuy Gr1.",   
            toggles: [ ['H',"auto5"] ]
        },
        8: {requirementDescription: "5e222 dH points & e4.8e173 harsh (9",//e1e174
            done() {return player[this.layer].dhp.gte('5e222')&&player[this.layer].harsh.gte('e4.8e173')}, 
            effectDescription: "autobuy Hb6/7,y4/6,Gr2 exp +0.03,dH1/3 eff to dpts is 10,sb10 lim +10,y5 lim +10,i eff sc exp is 0.98,unlock a bab,p3 3rd eff ^1.5 at 2e442/2e533 dHpt,p4 2rd eff x2 at 2e533 dHpt.",   
            toggles: [ ['H',"auto6"] ]
        },
    },
    microtabs: {
        stuff: {       
            "Main": {
                unlocked() {return true},
                content: [["upgrades",[1,2,3,4]]]}, 
            "Milestones": {
                unlocked() {return true},
                content: ["milestones"]},
            "harsh": {
                unlocked() {return (mil("H",2))},
                content: [["display-text", () => "You have <h3 style='color: #359280; text-shadow: 0 0 2px #c2b280'>" + format(player.H.harsh) + "</h3> harsh "+ "<h4>" + format(tmp.H.ha) + " harsh/s <h4>"]
                ,["buyables",[1,2,3]],['upgrades',[6,7,8]]]}, 
            "hyper": {
                unlocked() {return (mil("H",3))},
                content: [["display-text", () => "You have <h3 style='color: #C3FFDE; text-shadow: 0 0 2px #c2b280'>" + format(player.H.hyper) + "</h3> hyper,raise harsh by ^"+ " <h3 style='color: #C3FFDE; text-shadow: 0 0 2px #c2b280'>" + format(tmp.H.hyef,3) +"<h4>"+ format(tmp.H.hy) + " hyper/s <h4>"]
                ,["buyables",[5,6]]]},    
            "dH": {
                unlocked() {return (mil("G",31))},
                content: [["display-text", () => "dH1-current: <h3 style='color: #00FFE6; text-shadow: 0 0 2px #c2b280'>" + format(player.H.dh[0]) + "</h3> (best:"+ format(player.H.dhmax[0]) + ")(next at "+ format(tmp.H.dhreq[0])+" GsR) boost GsR by x<h3 style='color: #00FFE6; text-shadow: 0 0 2px #c2b280'>" + format(tmp.H.dhef[0]) +"<h4>"]
                ,["display-text", function() {if(upg('G',144)) return "dH2-current: <h3 style='color: #2EDEC4; text-shadow: 0 0 2px #c2b280'>" + format(player.H.dh[1]) + "</h3> (best:"+ format(player.H.dhmax[1]) + ")(next at "+ format(tmp.H.dhreq[1])+" hyper) reduce H threshold by /<h3 style='color: #2EDEC4; text-shadow: 0 0 2px #c2b280'>" + format(tmp.H.dhef[1]) +"<h4>"}]
                ,["display-text", function() {if(upg('G',145)) return "dH3-current: <h3 style='color: #4E40B6; text-shadow: 0 0 2px #c2b280'>" + format(player.H.dh[2]) + "</h3> (best:"+ format(player.H.dhmax[2]) + ")(next at "+ format(tmp.H.dhreq[2])+" Gsb4 amt) raise harsh by ^<h3 style='color: #4E40B6; text-shadow: 0 0 2px #c2b280'>" + format(tmp.H.dhef[2]) +"<h4>"}]
                ,["display-text", function() {if(upg('G',145)) return "dH4-current: <h3 style='color: #9BFFBD; text-shadow: 0 0 2px #c2b280'>" + format(player.H.dh[3]) + "</h3> (best:"+ format(player.H.dhmax[3]) + ")(next at "+ format(tmp.H.dhreq[3])+" total GG) div hb2/y2 scaling by /<h3 style='color: #9BFFBD; text-shadow: 0 0 2px #c2b280'>" + format(tmp.H.dhef[3],3) +"<h4>"}]
                ,["clickables",[1,2]]]},  
            "dH points":{
                unlocked() {return (mil("G",31))},
                content: [["display-text", () => "You have <h3 style='color: #3D3A3F; text-shadow: 0 0 2px #c2b280'>" + format(player.H.dhp) + "</h3> dH points,boost GsR by x<h3 style='color: #3D3A3F; text-shadow: 0 0 2px #c2b280'>" + format(tmp.H.dhpef) +"<h4>"+ format(tmp.H.dhp) + " dH points/s <h4>"]
                ,["display-text",() => "gain formula:5*[(mult of dH base)^exp]*mults<h4>"]
                ,["display-text",() => "best dHs:"+format(player.H.dhmax[0])+","+format(player.H.dhmax[1])+","+format(player.H.dhmax[2])+","+format(player.H.dhmax[3])]
                ,["display-text",() => "current base:"+format(tmp.H.dhbs[0])+","+format(tmp.H.dhbs[1])+","+format(tmp.H.dhbs[2])+","+format(tmp.H.dhbs[3])]
                ,["buyables",[8]]],
            }                                                                                                                                                                                                                                   
        }//C3FFDE
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
            cost:new Decimal('e1.533e8'),
            currencyLocation() {return player.G}, 
            currencyDisplayName: "Gse",
            currencyInternalName: "Gse",
        },
        12: {
            title:'H2',
            description: "boost t13/17.",         
            cost:new Decimal('e2.191e8'),
            currencyLocation() {return player.G}, 
            currencyDisplayName: "Gse",
            currencyInternalName: "Gse",
            unlocked() { return (upg(this.layer, 11))},
        },
        13: {
            title:'H3',
            description: "max H raise Gs,unlock a new Gt.",         
            cost:new Decimal('e2.902e8'),
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
            description: "max H div b1-3 scaling,unlock a new Gt [req:e6.6e8 e].",         
            cost:new Decimal(4),
            canAfford() {return player.G.Gsetot.gte('e6.6e8')}, 
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
            cost:new Decimal('e4.84e9'),
            currencyLocation() {return player.G}, 
            currencyDisplayName: "Gse",
            currencyInternalName: "Gse",
            unlocked() { return (upg(this.layer, 14))},
        },
        21: {
            title:'H6',
            description: "harsh raise Gs eff.",         
            cost:new Decimal('e4.48e10'),
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
            cost:new Decimal('e4.885e10'),//975
            currencyLocation() {return player.G}, 
            currencyDisplayName: "Gse",
            currencyInternalName: "Gse",
            unlocked() { return (upg(this.layer, 21))},
        },
        23: {
            title:'H8',
            description: "remove Gse 3-4 nerf,H raise b1 base,dilate harsh to 1.002.",         
            cost:new Decimal('e5.808e10'),//6.011
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
            cost:new Decimal('e2.435e11'),//543
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
            cost:new Decimal('e2.858e11'),//3.168
            currencyLocation() {return player.G}, 
            currencyDisplayName: "Gse",
            currencyInternalName: "Gse",
            unlocked() { return (upg(this.layer, 24))},
        },
        31: {
            title:'H11',
            description: "H39 exp +0.4,Hb1 boost y6 1st eff,H36 app to b2-3,y4-5.",       
            cost:new Decimal('e2.013e16'),//903
            currencyLocation() {return player.G}, 
            currencyDisplayName: "Gse",
            currencyInternalName: "Gse",
            effect()  { 
                let exp=n(1.25)
                if(upg('H',32)) exp=exp.add(0.15)
                let ef=n(getBuyableAmount('H',11)).add(10).log(10).pow(exp).sub(1).div(2)
                return ef;
            },
            effectDisplay() { return '+'+format(this.effect()) },
            unlocked() { return (upg(this.layer, 85))},
        },
        32: {
            title:'H12',
            description: "y1 boost y2 eff,H36 app to y2-3,H11 exp +0.15,sb6 nerf^2 +0.05.",     
            cost:new Decimal('e5.343e16'),//e6.253
            currencyLocation() {return player.G}, 
            currencyDisplayName: "Gse",
            currencyInternalName: "Gse",
            effect()  { 
                let exp=n(1.5)
                let ef=n(getBuyableAmount('H',51)).add(10).log(10).pow(exp).sub(1).div(2000)
                return ef;
            },
            effectDisplay() { return '+'+format(this.effect(),4) },
            unlocked() { return (upg(this.layer, 31))},
        },
        33: {
            title:'H13',
            description: "y2 boost y4 1st eff,y6 2nd eff exp +0.04,sb6 nerf^2 +0.05 again.", //remove next e nerf,    
            cost:new Decimal('e7.06e16'),//1.16e17
            currencyLocation() {return player.G}, 
            currencyDisplayName: "Gse",
            currencyInternalName: "Gse",
            effect()  { 
                let exp=n(1.5)
                let ef=n(getBuyableAmount('H',52)).add(10).log(10).pow(exp).sub(1).div(15000)
                return ef;
            },
            effectDisplay() { return '+'+format(this.effect(),5) },
            unlocked() { return (upg(this.layer, 32))},
        },
        34: {
            title:'H14',
            description: "Gse raise ha/hy,y5->y2,y5->y4,b8->b5.",   
            cost:new Decimal('e1.25e17'),//2.082
            currencyLocation() {return player.G}, 
            currencyDisplayName: "Gse",
            currencyInternalName: "Gse",
            effect()  { 
                let exp=n(0.25)
                let ef=player.G.Gsetot.add(10).log(10).add(10).log(10).pow(exp).div(4).add(0.75)
                return ef;
            },
            effectDisplay() { return '^'+format(this.effect(),3) },
            unlocked() { return (upg(this.layer, 33))},
        },
        35: {
            title:'H15',
            description: "remove next e nerf,harsh add to e 2nd eff(ignore hardcap)and nerf ???.", 
            cost:new Decimal('e1.891e20'),//904
            currencyLocation() {return player.G}, 
            currencyDisplayName: "Gse",
            currencyInternalName: "Gse",
            effect()  { 
                let exp=n(1.6)
                let ef=player.H.harsh.add(10).log(10).add(10).log(10).pow(exp).sub(1).div(200)
                if(ef.gte(3)) ef=ef.div(3).pow(0.5).mul(3)
                return ef;
            },
            effectDisplay() { return '+'+format(this.effect(),3) },
            unlocked() { return (upg(this.layer, 34))},
        },
        41: {
            title:'H16',
            description: "hyper add to e 2nd eff andsb10 base(ignore hardcap),sb10 exp +0.05 and eff div b1/y1 sc.", 
            cost:new Decimal('e1.28e25'),//904
            currencyLocation() {return player.G}, 
            currencyDisplayName: "Gse",
            currencyInternalName: "Gse",
            effect()  { 
                let exp=n(1.5)
                if(upg('H',42)) exp=exp.add(0.1)
                let ef=player.H.hyper.add(10).log(10).add(10).log(10).pow(exp).sub(1).div(300)
                let exp2=n(0.6)
                let ef2=n(buyableEffect('G',44)).pow(exp2).div(300).add(1)
                if(ef2.gte(1.08)) ef2=ef2.div(1.08).pow(0.6).mul(1.08)
                if(ef.gte(3)) ef=ef.div(3).pow(0.5).mul(3)
                return [ef,ef2];
            },
            effectDisplay() { return 'e ef+'+format(this.effect()[0],3)+',sc/'+format(this.effect()[1],3) },
            unlocked() { return (mil(this.layer, 6))},
        },
        42: {
            title:'H17',
            description: "remove next e nerf,H16 exp is 1.6,dilate b9 by 1.02,sb6 limit +1,y5 limit +2,sb6 beyond 155 give r1.", //b8+1
            cost:new Decimal('e7.34e33'),//904
            currencyLocation() {return player.G}, 
            currencyDisplayName: "Gse",
            currencyInternalName: "Gse",
            unlocked() { return (upg('G',142))},
        },
        43: {
            title:'H18',
            description: "i eff nerf +0.0025,r3 exp -0.01,sb6 exp +0.1 <br>[req:1e255 GsR].", //b8+1
            cost:new Decimal('e1.045e44'),
            canAfford() {return player.G.Gsr.gte('1e255')}, 
            currencyLocation() {return player.G}, 
            currencyDisplayName: "Gse",
            currencyInternalName: "Gse",
            unlocked() { return (upg(this.layer,42))},
        },
        //harsh upgs
        61: {
            title:'H26',
            description: "Hb1 base exp +0.1.", //  ,remove Gse 2nd nerf      
            cost:new Decimal('2e183'),
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
            cost:n('5e1186'),//1e1208
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
            cost:n('3e2235'),//1e2221
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
            cost:n('3e3773'),//2e3908
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "harsh",
            currencyInternalName: "harsh",
            unlocked() { return (upg(this.layer, 73))},
        },
        75: {
            title:'H35',
            description: "remove e 2nd nerf,Hb1 base exp +0.2,H31-32 ^1.25,unlock the final bab.",   
            cost:n('3e4686'),//1e4981
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "harsh",
            currencyInternalName: "harsh",
            unlocked() { return (upg(this.layer, 74))},
        },
        81: {
            title:'H36',
            description: "Gsb6 amt div Hb1/Hy1 cost exp,buy max b1/y1.",   
            cost:n('e225825'),//e226778/e227418
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "harsh",
            currencyInternalName: "harsh",
            effect()  { 
                let b=n(getBuyableAmount('G',33))
                let exp=n(0.25)
                if(upg('G',143)) exp=exp.add(0.02)
                let ef = b.pow(exp).div(80).add(79/80)
                if(upg('H',84)) ef=ef.pow(1.5)
                return ef;
            },
            effectDisplay() { return '/'+format(this.effect(),3) },
            unlocked() { return (mil(this.layer,3))},
        },
        82: {
            title:'H37',
            description: "H31-32 boost hyper,free bab:b3-->b2,y3-->y2-->y1.",   
            cost:n('e453698'),//e455863e454342
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "harsh",
            currencyInternalName: "harsh",
            unlocked() { return (upg(this.layer, 81))},
        },
        83: {
            title:'H38',
            description: "remove Hb1 nerf,b5 mul b1 eff amt instead.",   
            cost:n('e565768'),//e568327e566024
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "harsh",
            currencyInternalName: "harsh",
            unlocked() { return (upg(this.layer, 82))},
        },
        84: {
            title:'H39',
            description: "H36 ^1.5,b2/y2 sc -0.05,s eff mult ha/hy,unlock 3 new bab.",   
            cost:n('e860084'),//e863622
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "harsh",
            currencyInternalName: "harsh",
            effect()  { 
                let e=n(1.6)
                if(upg('H',31)) e=e.add(0.4)
                let ef=n(10).pow(tmp.G.gsef.add(10).log(10).add(10).log(10).pow(e))
                return ef;
            },
            effectDisplay() { return 'x'+format(this.effect()) },
            unlocked() { return (upg(this.layer, 83))},
        },
        85: {
            title:'H40',
            description: "remove next e nerf,hyper eff exp +0.05,b/y1-2 nerf itself.",   
            cost:n('e7706696'),//e7740725
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "harsh",
            currencyInternalName: "harsh",
            unlocked() { return (upg(this.layer, 84))},
        },
    },
    clickables:{
        11:{
            display(){return "+1 dH1"},//'height':'80px','width':'80px',
            style() {return {'background-color': layers[this.layer].clickables[this.id].canClick()?"#00FFE6":"#BF8F8F"}},
            canClick() {return player.G.Gsr.gte(tmp.H.dhreq[0])},
            onClick() {player.H.dh[0]=player.H.dh[0].add(1)},
            unlocked() {return mil('G',31)},
        },
        12:{
            display(){return "-1 dH1"},
            style() {return {'background-color': layers[this.layer].clickables[this.id].canClick()?"#00FFE6":"#BF8F8F"}},
            canClick() {return player.H.dh[0].gte(1)},
            onClick() {player.H.dh[0]=player.H.dh[0].sub(1).max(0)},
            unlocked() {return mil('G',31)},
        },
        13:{
            display(){return "+1 dH2"},//'height':'80px','width':'80px',
            style() {return {'background-color': layers[this.layer].clickables[this.id].canClick()?"#2EDEC4":"#BF8F8F"}},
            canClick() {return player.H.hyper.gte(tmp.H.dhreq[1])},
            onClick() {player.H.dh[1]=player.H.dh[1].add(1)},
            unlocked() {return upg('G',144)},
        },
        14:{
            display(){return "-1 dH2"},
            style() {return {'background-color': layers[this.layer].clickables[this.id].canClick()?"#2EDEC4":"#BF8F8F"}},
            canClick() {return player.H.dh[1].gte(1)},
            onClick() {player.H.dh[1]=player.H.dh[1].sub(1).max(0)},
            unlocked() {return upg('G',144)},
        },
        15:{
            display(){return "+1 dH3"},
            style() {return {'background-color': layers[this.layer].clickables[this.id].canClick()?"#4E40B6":"#BF8F8F"}},
            canClick() {return n(getBuyableAmount('G',31)).gte(tmp.H.dhreq[2])},
            onClick() {player.H.dh[2]=player.H.dh[2].add(1)},
            unlocked() {return upg('G',145)},
        },
        16:{
            display(){return "-1 dH3"},
            style() {return {'background-color': layers[this.layer].clickables[this.id].canClick()?"#4E40B6":"#BF8F8F"}},
            canClick() {return player.H.dh[2].gte(1)},
            onClick() {player.H.dh[2]=player.H.dh[2].sub(1).max(0)},
            unlocked() {return upg('G',145)},
        },
        21:{
            display(){return "+1 dH4"},
            style() {return {'background-color': layers[this.layer].clickables[this.id].canClick()?"#9BFFBD":"#BF8F8F"}},
            canClick() {return player.G.GGtot.gte(tmp.H.dhreq[3])},
            onClick() {player.H.dh[3]=player.H.dh[3].add(1)},
            unlocked() {return upg('G',145)},
        },
        22:{
            display(){return "-1 dH4"},
            style() {return {'background-color': layers[this.layer].clickables[this.id].canClick()?"#9BFFBD":"#BF8F8F"}},
            canClick() {return player.H.dh[3].gte(1)},
            onClick() {player.H.dh[3]=player.H.dh[3].sub(1).max(0)},
            unlocked() {return upg('G',145)},
        },
    },
    automate(){
        if (player[this.layer].auto2)  buyBuyable("H",11)
        if (player[this.layer].auto3)  buyBuyable("H",51)
        if (player[this.layer].auto4)  buyBuyable("H",12),buyBuyable("H",22),buyBuyable("H",52)
        if (upg('G',142))  buyBuyable("H",21),buyBuyable("H",33)
        if (player[this.layer].auto6)  buyBuyable("H",23),buyBuyable("H",31),buyBuyable("H",61),buyBuyable("H",63)
    },
    buyables:{
        11: {
            title: "Hb1", 
            cost(x) { 
                let cost = n(10).pow(n(10).pow(x.pow(this.sc()).max(1).sub(1)))//.mul(n(1.5).pow(x))
                return cost
            },
            sc(){
                let e=n(0.25)
                if(upg('H',81)) e=e.div(upgradeEffect('H',81))
                if(upg('H',85)) e=e.div(getBuyableAmount(this.layer, this.id).add(10).log(10).pow(0.45).div(20).add(0.95).min(1.1))
                if(upg('H',35)) e=e.div(1.03)
                if(upg('H',41)) e=e.div(upgradeEffect('H',41)[1])
                e=e.div(buyableEffect('G',72))
                return e
            },
            canAfford() { return player[this.layer].harsh.gte(this.cost()) },
            buy() {if(!upg('G',141)) player[this.layer].harsh = player[this.layer].harsh.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            buymax(){let t=n(0)
                let c=n(0)
                if(player[this.layer].auto2&&(upg('H',81))) {
                    t=player[this.layer].harsh.max(1).log(10).max(1).log(10).add(1).pow(this.sc().pow(-1)).sub(1).ceil().max(getBuyableAmount(this.layer, this.id))
                    c = this.cost(t)
                    if (player[this.layer].harsh.gte(c)) setBuyableAmount(this.layer,this.id,t)}    
                },
            base(){   
                let e=n(1.5)
                if(upg('H',61)) e=e.add(0.1)
                if(upg('H',64)) e=e.add(0.05)
                if(upg('H',65)) e=e.add(0.05)
                if(upg('H',75)) e=e.add(0.2)
                e=e.add(buyableEffect('H',31))
                e=e.add(buyableEffect('H',53)[1])
                let b = player[this.layer].harsh.add(10).log(10).pow(e).div(3).add(2/3)
                if(upg('G',142)) b = player[this.layer].harsh.add(10).log(10).pow(e)
                if(upg('H',23)) b=b.pow(upgradeEffect('H',23))
                let sc=n(0.6)
                sc=sc.pow(buyableEffect('H',22)[0])
                if(b.gte(10)&&!upg('H',83)) b=b.div(10).pow(sc).add(10)   
                return b},
            extra(){
                let e=n(0)
                if (upg('H',25))  e=e.add(getBuyableAmount('H',12)).add(getBuyableAmount('H',21)).add(getBuyableAmount('H',22))
                return e
            },
            effect(x) { // Effects of owning x of the items, x is a decimal
                let exp=n(1)
                if(upg('H',71)) exp=exp.add(0.02)
                let ef = this.base().pow(x.add(this.extra()).pow(exp))
                if(upg('H',83)) ef = this.base().pow(x.add(this.extra()).mul(n(1).add(buyableEffect('H',22)[1])).pow(exp))
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
                let cost = n(10).pow(n(10).pow(x.pow(this.sc()).max(1).sub(1))).mul('1e111')
                return cost
            },
            sc(){
                let e=n(0.7)
                if(upg('H',62)) e=e.sub(0.02)
                if(upg('H',72)) e=e.sub(0.02)
                if(upg('H',73)) e=e.sub(0.04)
                if(upg('H',84)) e=e.sub(0.04)
                let sc=n(0.5)
                if(upg('G',142)) sc=sc.sub(0.03)
                e=e.add(n(getBuyableAmount(this.layer, this.id)).sub(500).max(0).pow(sc).div(300))
                if(upg('H',85)) e=e.div(getBuyableAmount(this.layer, this.id).pow(0.1).div(20).add(0.95).min(1.1))
                if(upg('H',31)) e=e.div(upgradeEffect('H',81))
                if(upg('H',35)) e=e.div(1.02)
                if(upg('G',145)) e=e.div(tmp.H.dhef[3])
                return e
            },
            canAfford() { return player[this.layer].harsh.gte(this.cost()) },
            bulk(){let t=n(0)
                let c=n(0)
                if(player[this.layer].auto4) {
                    if(upg('G',142)) t=t.add(10)
                    c=this.cost(getBuyableAmount(this.layer, this.id).add(t))
                    if (player[this.layer].harsh.gte(c)) setBuyableAmount(this.layer,this.id,getBuyableAmount(this.layer, this.id).add(t))}    
                },
            buy() {if(!upg('G',141)) player[this.layer].harsh = player[this.layer].harsh.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   let b = n(0.01)    
                b=b.mul(n(1).add(buyableEffect('H',23)))
                b=b.add(buyableEffect('H',83)[1])
                return b},
            extra(){
                let e=n(0)
                if (upg('H',73))  e=e.add(upgradeEffect('H',73))
                if (upg('H',82))  e=e.add(getBuyableAmount('H',13))
                e=e.add(getBuyableAmount('H',63))
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
                let cost = n(10).pow(n(10).pow(x.add(1).pow(this.sc()).sub(1))).mul('1e130')
                return cost
            },
            sc(){
                let e=n(0.85)
                e=e.add(n(getBuyableAmount(this.layer, this.id)).sub(30).max(0).pow(0.5).div(50))
                if(upg('H',85)) e=e.div(getBuyableAmount(this.layer, this.id).pow(0.2).div(20).add(0.95).min(1.1))
                if(upg('H',31)) e=e.div(upgradeEffect('H',81))
                return e
            },
            canAfford() { return player[this.layer].harsh.gte(this.cost()) },
            buy() {if(!upg('G',141)) player[this.layer].harsh = player[this.layer].harsh.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   let b = n(0.003)    
                b=b.add(buyableEffect('H',32))
                b=b.add(buyableEffect('H',61)[1])
                b=b.add(buyableEffect('H',84)[1])
                return b},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let exp=n(1)
                let ef = Decimal.mul(this.base(),x.pow(exp))
                if(ef.gte(5)) ef=ef.div(5).pow(0.8).mul(5)
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
                let cost = n(10).pow(n(10).pow(x.pow(this.sc())).max(1).sub(1)).mul('1e128')
                return cost
            },
            sc(){
                let e=n(0.6)
                e=e.add(n(getBuyableAmount(this.layer, this.id)).sub(100).max(0).pow(0.5).div(200))
                if(upg('H',74)) e=e.sub(0.03)
                return e
            },
            canAfford() { return player[this.layer].harsh.gte(this.cost()) },
            buy() {if(!upg('G',141)) player[this.layer].harsh = player[this.layer].harsh.sub(this.cost())
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
                let c = n(10).pow(n(10).pow(x.pow(this.sc()).max(1).sub(1))).mul('1e143')
                return c
            },
            sc(){
                let e=n(0.48)
                e=e.add(n(getBuyableAmount(this.layer, this.id)).sub(500).max(0).pow(0.5).div(300))
                if(upg('H',65)) e=e.sub(0.03)
                return e
            },
            canAfford() { return player[this.layer].harsh.gte(this.cost()) },
            buy() {if(!upg('G',141)) player[this.layer].harsh = player[this.layer].harsh.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   let b = n(0.98)    
                if(upg('H',63)) b=b.sub(0.005)
                if(upg('H',74)) b=b.sub(0.005)
                if(upg('H',22)) b=b.sub(0.02)
                let b2=n(0)
                if(upg('H',83)) b2=n(0.002)
                return [b,b2]},
            extra(){
                let e=n(0)
                if (upg('H',34))  e=e.add(getBuyableAmount('H',32))
                return e
            },
            effect(x) { // Effects of owning x of the items, x is a decimal
                let exp=n(1)
                let ef = this.base()[0].pow(x.add(this.extra()).pow(exp))
                let ef2=n(0)
                if(upg('H',83)) ef2=x.add(this.extra()).mul(this.base()[1])
                return [ef,ef2]},
            display() { // Everything else displayed in the buyable button after the title
                if(upg('H',83)) {return "b1 eff amt mul +"+ format(this.base()[1],3) + " \n\
                Cost: " + format(this.cost()) + " harsh \n\
                Amount: " + player[this.layer].buyables[this.id]  +" + "+ format(this.extra())+" \n\
                Effect: +" + format(this.effect()[1],3)}
                else {return "b1 nerf ^"+ format(this.base()[0],3) + " \n\
                Cost: " + format(this.cost()) + " harsh \n\
                Amount: " + player[this.layer].buyables[this.id]  +" + "+ format(this.extra())+" \n\
                Effect: ^" + format(this.effect()[0],4)} },
            unlocked() { return mil('H',2) }
        },
        23: {
            title: "Hb6", 
            cost(x) { 
                let c = n(10).pow(n(10).pow(x.pow(this.sc()).max(1).sub(1))).mul('1e161')
                return c
            },
            sc(){
                let e=n(0.75)
                e=e.add(n(getBuyableAmount(this.layer, this.id)).sub(50).max(0).pow(0.5).div(50))
                return e
            },
            canAfford() { return player[this.layer].harsh.gte(this.cost()) },
            buy() {if(!upg('G',141)) player[this.layer].harsh = player[this.layer].harsh.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   let b = n(0.05)   
                if(upg('H',64)) b=b.add(0.01) 
                return b},
            effect(x) { 
                let exp=n(1)
                let ef = Decimal.mul(this.base(),x.pow(exp))
                return ef},
            display() {
                return "b2/4 base mult +"+ format(this.base()) + " \n\
                Cost: " + format(this.cost()) + " harsh \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: +" + format(this.effect())},
            unlocked() { return mil('H',2) }
        },
        31: {
            title: "Hb7", 
            cost(x) { 
                let c = n(10).pow(n(10).pow(x.add(1).pow(this.sc()).sub(1))).mul('1e262')
                return c
            },
            sc(){
                let e=n(0.72)
                if(upg('H',74)) e=e.sub(0.04)
                e=e.add(n(getBuyableAmount(this.layer, this.id)).sub(50).max(0).pow(0.5).div(50))
                return e
            },
            canAfford() { return player[this.layer].harsh.gte(this.cost()) },
            buy() {if(!upg('G',141)) player[this.layer].harsh = player[this.layer].harsh.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   let b = n(0.02)    
                if(upg('H',63)) b=b.add(0.005)
                b=b.add(buyableEffect('H',62)[1])
                return b},
            effect(x) { 
                let exp=n(1)
                let ef = Decimal.mul(this.base(),x.pow(exp))
                return ef},
            display() { 
                return "b1 base exp +"+ format(this.base()) + " \n\
                Cost: " + format(this.cost()) + " harsh \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: +" + format(this.effect())},
            unlocked() { return upg('H',62) }
        },
        32: {
            title: "Hb8", 
            cost(x) { 
                let c = n(10).pow(n(10).pow(x.add(1).pow(this.sc()).sub(1))).mul('1e773')
                return c
            },
            sc(){
                let e=n(1.05)
                e=e.add(n(getBuyableAmount(this.layer, this.id)).sub(10).max(0).pow(0.5).div(30))
                return e
            },
            purchaseLimit() {let lim=n(25)
                //if(upg('H',42)) lim=lim.add(1)
                return lim},
            canAfford() { return player[this.layer].harsh.gte(this.cost()) },
            buy() {if(!upg('G',141)) player[this.layer].harsh = player[this.layer].harsh.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   let b = n(0.0005)    
                return b},
            effect(x) { 
                let exp=n(1)
                let ef = Decimal.mul(this.base(),x.pow(exp))
                return ef},
            display() { 
                return "b3 base mul +"+ format(this.base()) + "(hardcap at "+format(this.purchaseLimit())+")  \n\
                Cost: " + format(this.cost()) + " harsh \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: +" + format(this.effect(),3)},
            unlocked() { return upg('H',64) }
        },
        33: {
            title: "Hb9", 
            cost(x) {
                let c = n(10).pow(n(10).pow(x.add(1).pow(this.sc()).sub(1))).mul('5e7689')
                return c
            },
            sc(){
                let e=n(0.5)
                e=e.add(n(getBuyableAmount(this.layer, this.id)).sub(200).max(0).pow(0.5).div(200))
                return e
            },
            canAfford() { return player[this.layer].harsh.gte(this.cost()) },
            buy() {if(!upg('G',141)) player[this.layer].harsh = player[this.layer].harsh.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   let b = n(1.11)    
                return b},
            effect(x) { 
                let exp=n(1)
                let ef = this.base().pow(x.pow(exp))
                if(upg('H',42)) ef=n(10).pow(ef.add(10).log(10).pow(1.02))
                return ef},
            display() {
                return "Gs gain and eff ^"+ format(this.base()) + " \n\
                Cost: " + format(this.cost()) + " harsh \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: ^" + format(this.effect(),3)},
            unlocked() { return upg('H',75) }
        },
        51: {
            title: "Hy1", 
            cost(x) {
                let cost = n(10).pow(n(10).pow(x.pow(this.sc()).max(1).sub(1)))//.mul(n(1.5).pow(x))
                return cost
            },
            sc(){
                let e=n(0.22)
                if(upg('H',81)) e=e.div(upgradeEffect('H',81))
                if(upg('H',85)) e=e.div(getBuyableAmount(this.layer, this.id).add(10).log(10).pow(0.45).div(20).add(0.95).min(1.1))
                if(upg('H',35)) e=e.div(1.03)
                if(upg('H',41)) e=e.div(upgradeEffect('H',41)[1])
                e=e.div(buyableEffect('G',72))
                return e
            },
            canAfford() { return player[this.layer].hyper.gte(this.cost()) },
            buy() { if(!upg('G',141)) player[this.layer].hyper = player[this.layer].hyper.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            buymax(){let t=n(0)
                let c=n(0)
                if(player[this.layer].auto3&&(upg('H',81))) {
                    t=player[this.layer].hyper.max(1).log(10).max(1).log(10).add(1).pow(this.sc().pow(-1)).sub(1).ceil().max(getBuyableAmount(this.layer, this.id))
                    c = this.cost(t)
                    if (player[this.layer].hyper.gte(c)) setBuyableAmount(this.layer,this.id,t)}    
                },
            base(){   
                let e=n(1.2)
                e=e.add(buyableEffect('H',52)[1])
                let b = player[this.layer].hyper.add(10).log(10).pow(e).div(3).add(2/3)
                if(upg('G',142)) b = player[this.layer].hyper.add(10).log(10).pow(e)
                return b},
            extra(){
                let e=n(0)
                if (upg('H',82))  e=e.add(getBuyableAmount('H',52))
                return e
            },
            effect(x) { 
                let exp=n(1)
                let ef = this.base().pow(x.add(this.extra()).pow(exp))//.add(this.extra())
                return ef},//" + "+ format(this.extra())+"
            display() { 
                return "give hyper a x"+ format(this.base()) + " mult \n\
                Cost: " + format(this.cost()) + " hyper \n\
                Amount: " + player[this.layer].buyables[this.id]  +" + "+ format(this.extra())+" \n\
                Effect: x" + format(this.effect())},
            style() {if (this.canAfford()) return {'background-color': '#C3FFDE' }},
            unlocked() { return mil('H',3) }
        },
        52: {
            title: "Hy2", 
            cost(x) { 
                let cost = n(10).pow(n(10).pow(x.pow(this.sc()).max(1).sub(1))).mul('1e3929')
                return cost
            },
            sc(){
                let e=n(0.5)
                let sc=n(0.5)
                if(upg('G',142)) sc=sc.sub(0.03)
                e=e.add(n(getBuyableAmount(this.layer, this.id)).sub(1000).max(0).pow(sc).div(500))//if(!upg('G',142))
                if(upg('H',84)) e=e.sub(0.05)
                if(upg('H',85)) e=e.div(getBuyableAmount(this.layer, this.id).pow(0.1).div(100).add(0.99).min(1.1))
                if(upg('H',31)) e=e.div(upgradeEffect('H',81))
                if(upg('H',35)) e=e.div(1.03)
                if(upg('G',145)) e=e.div(tmp.H.dhef[3])
                return e
            },
            canAfford() { return player[this.layer].hyper.gte(this.cost()) },
            bulk(){let t=n(0)
                let c=n(0)
                if(player[this.layer].auto4) {
                    if(upg('G',142)) t=t.add(10)
                    c=this.cost(getBuyableAmount(this.layer, this.id).add(t))
                    if (player[this.layer].hyper.gte(c)) setBuyableAmount(this.layer,this.id,getBuyableAmount(this.layer, this.id).add(t))}    
                },
            buy() { if(!upg('G',141)) player[this.layer].hyper = player[this.layer].hyper.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   
                let b=n(0.015)
                b=b.add(buyableEffect('H',61)[0])
                if (upg('H',32))  b=b.add(upgradeEffect('H',32))
                b=b.add(buyableEffect('H',83)[1])
                return b},
            base2(){   
                let b=n(0.01)
                return b},
            extra(){
                let e=n(0)
                if (upg('H',82))  e=e.add(getBuyableAmount('H',53))
                if (upg('H',34))  e=e.add(getBuyableAmount('H',62))
                e=e.add(getBuyableAmount('H',63))
                return e
            },
            effect(x) { 
                let ef = x.add(this.extra()).mul(this.base())
                let ef2 = x.add(this.extra()).mul(this.base2())
                return [ef,ef2]},
            display() { 
                return "hyper exp +"+ format(this.base()) + " and Hy1 base +"+ format(this.base2()) + "  \n\
                Cost: " + format(this.cost()) + " hyper \n\
                Amount: " + player[this.layer].buyables[this.id]  +" + "+ format(this.extra())+" \n\
                Effect: exp+" + format(this.effect()[0]) + " y1+" + format(this.effect()[1])},
            style() {if (this.canAfford()) return {'background-color': '#C3FFDE' }},
            unlocked() { return mil('H',3) }
        },
        53: {
            title: "Hy3", 
            cost(x) { 
                let cost = n(10).pow(n(10).pow(x.pow(this.sc()).max(1).sub(1))).mul('1e11711')
                return cost
            },
            sc(){
                let e=n(0.8)
                if(upg('H',85)) e=e.div(getBuyableAmount(this.layer, this.id).pow(0.2).div(100).add(0.99).min(1.1))
                if(upg('H',31)) e=e.div(upgradeEffect('H',81))
                e=e.add(n(getBuyableAmount(this.layer, this.id)).sub(50).max(0).pow(0.5).div(50))
                if(upg('H',35)) e=e.div(1.03)
                return e
            },
            canAfford() { return player[this.layer].hyper.gte(this.cost()) },
            buy() { if(!upg('G',141)) player[this.layer].hyper = player[this.layer].hyper.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   
                let b=n(0.004)
                b=b.add(buyableEffect('H',62)[0])
                b=b.add(buyableEffect('H',84)[1])
                return b},
            base2(){   
                let b=n(0.03)
                return b},
            effect(x) { 
                let ef = x.mul(this.base())
                if(ef.gte(5)) ef=ef.div(5).pow(0.8).mul(5)
                let ef2 = x.mul(this.base2())
                return [ef,ef2]},
            display() { 
                return "dilate hyper +"+ format(this.base()) + " and Hb1 exp +"+ format(this.base2()) + "  \n\
                Cost: " + format(this.cost()) + " hyper \n\
                Amount: " + player[this.layer].buyables[this.id]  + " \n\
                Effect: exp+" + format(this.effect()[0]) + " b1+" + format(this.effect()[1])},
            style() {if (this.canAfford()) return {'background-color': '#C3FFDE' }},
            unlocked() { return mil('H',3) }
        },
        61: {
            title: "Hy4", 
            cost(x) { 
                let cost = n(10).pow(n(10).pow(x.pow(this.sc()).max(1).sub(1))).mul('e767015')//e768419
                return cost
            },
            sc(){
                let e=n(0.75)
                e=e.add(n(getBuyableAmount(this.layer, this.id)).sub(40).max(0).pow(0.5).div(40))
                if(upg('H',31)) e=e.div(upgradeEffect('H',81))
                return e
            },
            canAfford() { return player[this.layer].hyper.gte(this.cost()) },
            buy() {if(!upg('G',141)) player[this.layer].hyper = player[this.layer].hyper.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   
                let b=n(0.0006)
                if (upg('H',33))  b=b.add(upgradeEffect('H',33))
                return b},
            base2(){   
                let b=n(0.0001)
                return b},
            extra(){
                let e=n(0)
                if (upg('H',34))  e=e.add(n(getBuyableAmount('H',62)).div(5))
                return e
            },
            effect(x) { 
                let ef = x.add(this.extra()).mul(this.base())
                let ef2 = x.add(this.extra()).mul(this.base2())
                return [ef,ef2]},
            display() { 
                return "y2 1st eff +"+ format(this.base()) + " and Hb3 base +"+ format(this.base2()) + "  \n\
                Cost: " + format(this.cost()) + " hyper \n\
                Amount: " + player[this.layer].buyables[this.id]  +" + "+ format(this.extra())+" \n\
                Effect: y2+" + format(this.effect()[0],4) + " b3+" + format(this.effect()[1],4)},
            style() {if (this.canAfford()) return {'background-color': '#C3FFDE' }},
            unlocked() { return upg('H',84) }
        },//1269674
        62: {
            title: "Hy5", 
            cost(x) { 
                let cost = n(10).pow(n(10).pow(x.pow(this.sc()).max(1).sub(1))).mul('e1268435')//e1269674
                if(x.gte(80)) cost=n(10).pow(n(10).pow(x.add(20).pow(2).div(15).sub(508.5)))
                return cost
            },
            sc(){
                let e=n(0.9)
                e=e.add(n(getBuyableAmount(this.layer, this.id)).sub(30).max(0).pow(0.5).div(30))
                if(upg('H',31)) e=e.div(upgradeEffect('H',81))
                if(upg('H',35)) e=e.div(1.05)
                //if(n(getBuyableAmount(this.layer, this.id)).gte(80)) e=e.div()
                return e
            },
            canAfford() { return player[this.layer].hyper.gte(this.cost()) },
            purchaseLimit() {let lim=n(75)
                if(upg('H',42)) lim=lim.add(2)
                if(upg('G',143)) lim=lim.add(3)
                if(mil('H',8)) lim=lim.add(5)
                return lim},
            buy() {if(!upg('G',141)) player[this.layer].hyper = player[this.layer].hyper.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   
                let b=n(0.0003)
                return b},
            base2(){   
                let b=n(0.002)
                return b},
            extra(){
                let e=n(0)
                return e
            },
            effect(x) { 
                let ef = x.add(this.extra()).mul(this.base())
                let ef2 = x.add(this.extra()).mul(this.base2())
                return [ef,ef2]},
            display() { 
                return "y3 1st eff +"+ format(this.base()) + " and Hb7 base +"+ format(this.base2()) + "(hardcap at "+format(this.purchaseLimit())+")  \n\ \n\
                Cost: " + format(this.cost()) + " hyper \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: y3+" + format(this.effect()[0],4) + " b7+" + format(this.effect()[1],3)},
            style() {if (this.canAfford()&&(!getBuyableAmount(this.layer, this.id).gte(this.purchaseLimit()))) return {'background-color': '#C3FFDE' }},
            unlocked() { return upg('H',84) }
        },
        63: {
            title: "Hy6", 
            cost(x) { 
                let cost = n(10).pow(n(10).pow(x.pow(this.sc()).max(1).sub(1))).mul('e4311291')//e4317317
                return cost
            },
            sc(){
                let e=n(0.64)
                e=e.add(n(getBuyableAmount(this.layer, this.id)).sub(80).max(0).pow(0.5).div(50))
                if(upg('H',35)) e=e.div(1.03)
                return e
            },
            canAfford() { return player[this.layer].hyper.gte(this.cost()) },
            buy() {if(!upg('G',141)) player[this.layer].hyper = player[this.layer].hyper.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   
                let b=n(5)
                b=b.add(getBuyableAmount(this.layer, this.id).div(5))
                if(upg('H',31)) b=b.add(upgradeEffect('H',31))
                return b},
            base2(){   
                let b=n(0.025)
                return b},
            exp2(){
                let e=n(0.66)
                if(upg('H',33)) e=e.add(0.04)
                return e
            },
            extra(){
                let e=n(0)
                return e
            },
            effect(x) { 
                let ef =this.base().pow(x.add(this.extra()))
                if(mil('H',6)) ef=n(10).pow(ef.log(10).pow(1.2))
                let ef2 = x.add(this.extra()).pow(this.exp2()).mul(this.base2())
                return [ef,ef2]},
            display() { 
                return "Gs eff ^"+ format(this.base()) + " and hyper eff exp +"+ format(this.base2()) + " and provide free b2/y2  \n\
                Cost: " + format(this.cost()) + " hyper \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: Gs^" + format(this.effect()[0]) + " hy+" + format(this.effect()[1],3)},
            style() {if (this.canAfford()) return {'background-color': '#C3FFDE' }},
            unlocked() { return upg('H',84) }
        },
        81: {
            title: "dHp1", 
            cost(x) {
                let c = n(10).pow(n(10).pow(x.pow(this.sc()).max(1).sub(1)).mul(0.5))//.mul(n(1.5).pow(x))
                return c
            },
            sc(){
                let e=n(0.35)
                return e
            },
            canAfford() { return player[this.layer].dhp.gte(this.cost()) },
            buy() { player[this.layer].dhp = player[this.layer].dhp.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   
                let e=n(0.25)
                let b = player[this.layer].dhp.add(10).log(10).pow(e).div(50).add(0.25)
                return b},
            effect(x) { 
                let exp=n(1)
                let ef = this.base().mul(x.pow(exp))//.add(this.extra())
                if(ef.gte(10)) ef=ef.div(10).pow(0.75).mul(10)
                return ef},//" + "+ format(this.extra())+"
            display() { 
                return "dH points exp +"+ format(this.base()) + " \n\
                Cost: " + format(this.cost()) + " dH points \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: +" + format(this.effect())},
            style() {if (this.canAfford()) return {'background-color':'#3D3A3F'}},
            unlocked() { return mil('G',31) }
        },
        82: {
            title: "dHp2", 
            cost(x) {
                let c = n(10).pow(n(10).pow(x.pow(this.sc()).max(1).sub(1)).mul(3)).mul('2e17')//.mul(n(1.5).pow(x))
                return c
            },
            sc(){
                let e=n(0.25)
                return e
            },
            canAfford() { return player[this.layer].dhp.gte(this.cost()) },
            buy() { player[this.layer].dhp = player[this.layer].dhp.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   
                let e=n(0.65)
                let b=player[this.layer].dhp.add(10).log(10).pow(e).div(2).add(2)
                return b},
            effect(x) { 
                let exp=n(1)
                let ef = this.base().pow(x.pow(exp))//.add(this.extra())
                return ef},//" + "+ format(this.extra())+"
            display() { 
                return "dH points x"+ format(this.base()) + " \n\
                Cost: " + format(this.cost()) + " dH points \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: x" + format(this.effect())},
            style() {if (this.canAfford()) return {'background-color':'#3D3A3F'}},
            unlocked() { return mil('G',31) }
        },
        83: {
            title: "dHp3", 
            cost(x) {
                let c = n(10).pow(n(10).pow(x.add(1).pow(this.sc()).sub(1)).mul(3)).mul('1e207')//.mul(n(1.5).pow(x))
                if(x.gte(1)) c=c.div(10)
                return c
            },
            sc(){
                let e=n(0.6)
                if(mil('G',32)) e=e.sub(0.05)
                return e
            },
            canAfford() { return player[this.layer].dhp.gte(this.cost()) },
            buy() { player[this.layer].dhp = player[this.layer].dhp.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   
                let e=[n(0.3),n(1.1)]
                let b=player[this.layer].dhp.add(10).log(10).pow(e[0]).div(5000)
                let b2=n(0.001)
                let b3=player[this.layer].dhp.add(10).log(10).pow(e[1]).mul(2).add(5)
                if(player[this.layer].dhp.gte('2e442')) b3=b3.pow(1.5)
                if(player[this.layer].dhp.gte('2e533')) b3=b3.pow(1.5)
                return [b,b2,b3]},
            effect(x) { 
                let exp=[n(0.75),n(0.75),n(1)]
                let ef = this.base()[0].mul(x.pow(exp[0]))//.add(this.extra())
                let ef2 = this.base()[1].mul(x.pow(exp[1]))
                let ef3 = this.base()[2].pow(x.pow(exp[2]))
                return [ef,ef2,ef3]},//" + "+ format(this.extra())+"
            display() { 
                return "Gr2 base +"+ format(this.base()[0],4) + ",b2/y2 base +"+ format(this.base()[1],4) + ",dHp x"+ format(this.base()[2]) + " \n\
                Cost: " + format(this.cost()) + " dH points \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: r2 +" + format(this.effect()[0])+",b2/y2 +" + format(this.effect()[1])+",dHpts x" + format(this.effect()[2])},
            style() {if (this.canAfford()) return {'background-color':'#3D3A3F'}},
            unlocked() { return upg('G',145) }
        },
        84: {
            title: "dHp4", 
            cost(x) {
                let c = n(10).pow(n(10).pow(x.add(1).pow(this.sc()).sub(1)).mul(4)).mul('1e407')//.mul(n(1.5).pow(x))
                return c
            },
            sc(){
                let e=n(0.5)
                if(mil('G',32)) e=e.sub(0.05)
                return e
            },
            canAfford() { return player[this.layer].dhp.gte(this.cost()) },
            buy() { player[this.layer].dhp = player[this.layer].dhp.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   
                let e=n(0.35)
                let b=n(0.75).add(player[this.layer].dhp.add(10).log(10).sub(400).max(0).pow(e).div(100))
                let b2=n(0.0001)
                if(player[this.layer].dhp.gte('2e533')) b2=b2.mul(2)
                return [b,b2]},
            effect(x) { 
                let exp=[n(1.1),n(0.66)]
                let ef = this.base()[0].mul(x.pow(exp[0]))//.add(this.extra())
                let ef2 = this.base()[1].mul(x.pow(exp[1]))
                return [ef,ef2]},//" + "+ format(this.extra())+"
            display() { 
                return "dHs base +"+ format(this.base()[0]) + ",b3/y3 base +"+ format(this.base()[1],4) + "(^0.66) \n\
                Cost: " + format(this.cost()) + " dH points \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: dHs +" + format(this.effect()[0])+",b3/y3 +" + format(this.effect()[1])},
            style() {if (this.canAfford()) return {'background-color':'#3D3A3F'}},
            unlocked() { return mil('H',8) }
        },
    },
    ha(){
        let ef=player.H.max.sub(12).max(0).pow(2).add(5).div(5)
        if(upg('G',143)) ef=player.H.max.pow(3)
        ef=ef.mul(buyableEffect('H',11))
        ef=ef.pow(n(1).add(buyableEffect('H',12)))
        ef=n(10).pow(ef.log(10).pow(n(1).add(buyableEffect('H',13))))
        if(upg('H',23)) ef=n(10).pow(ef.add(10).log(10).pow(1.002))
        if(mil('H',3)) ef=n(10).pow(ef.add(10).log(10).pow(1.01))
        if(mil('H',4)) ef=n(10).pow(ef.add(10).log(10).pow(1.01))
        if(upg('H',63)) ef=ef.pow(1.05)
        if(upg('H',71)) ef=ef.pow(upgradeEffect('H',71))
        if(upg('H',72)) ef=ef.pow(upgradeEffect('H',72))
        if(upg('H',24)) ef=ef.pow(upgradeEffect('H',24))
        if(upg('H',84)) ef=ef.mul(upgradeEffect('H',84))
        if(n(getBuyableAmount('H',33)).gte(1)) ef=ef.mul(10)
        if(n(getBuyableAmount('H',33)).gte(2)) ef=ef.mul(10) //tiny balance
        if(upg('H',34)) ef=ef.pow(upgradeEffect('H',34))
        ef=ef.pow(tmp.H.hyef)
        if (mil("G",30)) ef=ef.pow(tmp.G.gsref2)
        ef=ef.pow(tmp.H.dhef[2])
        return ef
    },
    hy(){
        let ef=n(1)
        ef=ef.mul(buyableEffect('H',51))
        ef=ef.pow(n(1).add(buyableEffect('H',52)[0]))
        ef=n(10).pow(ef.log(10).pow(n(1).add(buyableEffect('H',53)[0])))
        if(upg('H',82)) ef=ef.pow(upgradeEffect('H',71))
        if(upg('H',82)) ef=ef.pow(upgradeEffect('H',72))
        if(upg('H',34)) ef=ef.pow(upgradeEffect('H',34))
        if(upg('H',84)) ef=ef.mul(upgradeEffect('H',84))
        if(mil("G",30)) ef=ef.pow(tmp.G.gsref2)
        if(mil("G",31)) {if(ef.gte(10)) ef=n(10).tetrate(ef.slog(10).add(0.001))}
        return ef
    },
    hyef(){
        let e=n(0.7)
        e=e.add(buyableEffect('H',63)[1])
        if(upg('H',85)) e=e.add(0.05)
        if(upg('H',35)) e=e.add(0.05)
        let ef=player.H.hyper.max(1).log(10).add(10).log(10).pow(e).div(20).add(0.95).max(1)
        return ef
    },
    dhreq(){
        let e=[n(2.25),n(1.3),n(1.6),n(2)]
        if(player.H.dh[0].gte(4)) e[0]=e[0].add(0.15)
        if(player.H.dh[0].gte(6)&&!mil('G',32)) e[0]=e[0].add(0.1)
        if(player.H.dh[1].gte(2)) e[1]=e[1].add(0.17)//1.47
        if(player.H.dh[1].gte(4)) e[1]=e[1].add(0.28)
        let ef=n(10).pow(player.H.dh[0].add(1).pow(e[0]).mul(6)).mul('1e303')//1e309
        let ef2=n(10).pow(n(10).pow(player.H.dh[1].add(1).pow(e[1]).mul(2).add(130.942)))
        let ef3=n(10).pow(player.H.dh[2].add(1).pow(e[2]).mul(3).add(262.25))
        let ef4=player.H.dh[3].add(3).pow(e[3]).mul(7500).add(690300)
        return [ef,ef2,ef3,ef4]
    },
    dhbs(){let b=[n(5),n(15),n(5),n(25)]
        if(mil('H',8)) {b[0]=n(10),b[2]=n(10)}
        return b},
    dhef(){
        let e=[n(1.11),n(0.45),n(1.05),n(0.5)]
        let ef=n(10).pow(player.H.dh[0].pow(e[0]).mul(6))
        let ef2=player.H.dh[1].add(1).pow(e[1])//.div(2).add(0.5)
        let ef3=n(1.6).pow(player.H.dh[2].pow(e[2]))
        let ef4=(player.H.dh[3].add(1).pow(e[3])).div(25).add(0.96)
        return [ef,ef2,ef3,ef4]
    },
    dhp(){
        let ef=n(5)
        let b=[n(5),n(15),n(5),n(25)]
        if(mil('H',8)) {b[0]=n(10),b[2]=n(10)}  //not 'dhbs' to avoid bugs
        for(let i=0;i<=3;i++) b[i]=b[i].add(buyableEffect('H',84)[0])
        for(let i=0;i<=3;i++) ef=ef.mul(n(b[i]).pow(player.H.dh[i]))  //effective!
        ef=ef.pow(n(1).add(buyableEffect('H',81)))
        ef=ef.mul(buyableEffect('H',82))
        ef=ef.mul(buyableEffect('H',83)[2])
        return ef
    },
    dhpef(){
        let e=n(0.8)
        let ef=n(10).pow(player.H.dhp.add(10).log(10).pow(e))
        return ef
    },
    update(diff){
        if (mil("H",2))  player.H.harsh = player.H.harsh.add(tmp.H.ha.mul(diff))
        if (mil("H",3))  player.H.hyper = player.H.hyper.add(tmp.H.hy.mul(diff))
        player.H.max=player.H.max.max(player.H.points)
        for(let i=0;i<=3;i++) player.H.dhmax[i]=player.H.dhmax[i].max(player.H.dh[i])
        if (mil("G",31))  player.H.dhp = player.H.dhp.add(tmp.H.dhp.mul(diff))
    },
})
