addLayer("J", {
    name: "J", 
    symbol: "J", 
    position: 0, 
    startData() { return {
        unlocked:false,
		points:n(0),
        bp:n(0),
    }},
    passiveGeneration(){    let pg=0
        return pg},
    color: "#B2D0EF",
    requires: n('1e27'), 
    resource: "J", 
    baseResource: "Qol points", 
    baseAmount() {let k=player.I.qolpoints
        return k}, 
    type: "static", 
    base() {
        let b = n('1e5')
        return b
    }, 
    exponent: n(1.6), 
    gainExp() {return n(1)},
    row: 3, 
    hotkeys: [
        {key: "j", description: "J: Reset for J points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return ((mil('I',13))||player[this.layer].unlocked)},
    gainMult() { 
        mult = n(1)
        return mult
    },
    branches: ['F','I'],
    // milestones: {
    // },
    softcap(){return n(Infinity)},
	softcapPower(){return n(1)},
    microtabs: {
        stuff: {       
            "Milestones": {
                unlocked() {return true},
                content: ["milestones"]},
            "Break infinity": {
                unlocked() {return true},
                content: [["display-text", function() { 
                    let s="You have <h3 style='color: #589887; text-shadow: 0 0 2px #c2b280'>" + format(player.J.bp) + "</h3> Break points"
                    s=s+",add pts hardcap slog by <h3 style='color: #589887; text-shadow: 0 0 2px #c2b280'>" + format(tmp.J.bpef) 
                    s=s+"<br><h4>current gain:"+format(tmp.J.bpg)+"^"+format(tmp.J.bppow)+"="+format(tmp.J.bpg.pow(tmp.J.bppow))
                    if(gba('J',15).gte(1)) s=s+"<br><h4>BP slog +"+format(buyableEffect('J',15))
                    return s}]
                ,["raw-html", () => '<h4 style="opacity:.5">J exponentiates BP gain.</h4>'],"buyables"]},
        }
    },
    tabFormat: [
        "main-display",
        "prestige-button",
        // ["display-text", function(){
        //     let tot='total I:'+format(player.I.total)+'<br>'
        //     let t='current reset time:'+format(player.I.time)+'s<br>'
        //     let m='fastest:'+format(player.I.m[0])+'s   longest:'+format(player.I.m[1])+'s<br>'
        //     let s=tot+t+m
        //     return s
        // }],
        ["microtabs", "stuff"],
        ["blank", "25px"],
    ],
    doReset(layer){    //dont reset anything.
        if(layer=='I'){
            let keep = []
            keep.push("buyables")
            //layerDataReset(this.layer, keep)
        }
    },
    milestones:{
        0: {requirementDescription: "1F177 hardcap (1",
            done() {return tmp.J.bpef.gte(77)}, 
            effectDescription: "QP base +0.2,unlock next bp bab.",
        },
        1: {requirementDescription: "1F196 hardcap (2",
            done() {return tmp.J.bpef.gte(96)}, 
            effectDescription: "keep GG tree on I reset,auto Gc3-4p at ee20.",
        },
        2: {requirementDescription: "4 J (3",
            done() {return player.J.best.gte(4)}, 
            effectDescription: "x1.5 I,J count in BP exp +0.01.",
        },
        3: {requirementDescription: "1F325 hardcap (4",
            done() {return tmp.J.bpef.gte(225)}, 
            effectDescription: "unlock curse(in layer I).",
        },
        4: {requirementDescription: "1F520 hardcap (5",
            done() {return tmp.J.bpef.gte(420)}, 
            effectDescription: "unlock next row of bab,nerf curse's options.Ib3 now boost Gs.",
        },
        5: {requirementDescription: "1F855 hardcap (6",
            done() {return tmp.J.bpef.gte(755)}, 
            effectDescription: "edit bp1-4,autobuy bp2,c's option limit +10.",
            toggles: [ ['J',"auto1"] ]
        },
        6: {requirementDescription: "36 J (7",
            done() {return player.J.best.gte(36)}, 
            effectDescription: "unlock 2 new bab.",
        },
        7: {requirementDescription: "50 J (8",
            done() {return player.J.best.gte(50)}, 
            effectDescription: "r1^/r2^ base is 1.1,J eff exp is 1.05.",
        },
        8: {requirementDescription: "1F2800 hardcap (9",
            done() {return tmp.J.bpef.gte(2700)}, 
            effectDescription: "autobuy bp1-4,slog speed x2 after 1F10.",
            toggles: [ ['J',"auto2"] ]
        },
        9: {requirementDescription: "100 J (10",
            done() {return player.J.best.gte(100)},
            effectDescription: "auto gain J.",
            toggles: [ ['J',"auto3"] ]
        },
        10: {requirementDescription: "e1e9 BP (11",
            done() {return player.J.bp.gte('ee9')}, 
            effectDescription: "c's option limit +5,edit qp^",
        },
        11: {requirementDescription: "1F32768 hardcap (12",
            done() {return tmp.J.bpef.gte(32668)}, 
            effectDescription: "autobuy qp^,bpb+,si^,unlock slog speeder(coming soon).",
            toggles: [ ['J',"auto4"] ]
        },
    },
    autoPrestige() {return ((mil('J', 9)&&player.J.auto3))},
    automate(){
        if (player.J.auto1)  buyBuyable("J",12)
        if (player.J.auto2)  buyBuyable("J",11),buyBuyable("J",13),buyBuyable("J",14)
        if (player.J.auto4)  buyBuyable("J",21),buyBuyable("J",24),buyBuyable("J",25)
    },
    buyables:{
        11: {
            title: function(){
                let s=''
                //if(gba(this.layer,this.id).gte(300)) s=s+'sc '
                s=s+'bp1'
                return s
            },  
            cost(x) { 
                let c=n(10).pow(n(2).mul(x.pow(1.2))).mul('1e27')
                if(mil('J',8)) c=n(10).pow(n(2).mul(x.pow(1.2)))
                return c
            },
            bulk(){
                let t=n(0)
                if(mil('J',8)&&player.J.auto2)   t=player.I.qolpoints.add(10).log(10).div(2).pow(5/6).sub(gba(this.layer,this.id)).sub(1).ceil().max(1)
                let c=this.cost(gba(this.layer, this.id).add(t))
                if (player.I.qolpoints.gte(c)) player[this.layer].buyables[this.id]=player[this.layer].buyables[this.id].add(t)
            },
            canAfford() { return player.I.qolpoints.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let b=player.I.qolpoints.max(1).log(10).sub(27).max(1).pow(0.35).mul(2)    
                if(mil('I',17)) b=player.I.qolpoints.max(1).log(10).max(1).pow(0.5).mul(2)
                if(mil('J',5)) b=b.max(player.I.qolpoints.max(1).log(10).max(1).pow(0.75))
                return b},
            effect(x) { 
                let e=n(1)
                let ef=this.base().pow(x.pow(e))
                return ef},
            display() { 
                return "base bp x"+ format(this.base()) + "(based on QP) \n\
                Cost: " + format(this.cost()) + " QP \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: x" + format(this.effect())},
            unlocked() {return true},
            style: {'width':'130px','height':'130px'},
        },
        12: { 
            title: function(){
                let s=''
                if(gba(this.layer,this.id).gte(300)) s=s+'sc '
                s=s+'bp2'
                return s
            }, 
            cost(x) { 
                let c=n(10).pow(x.pow(1.3)).mul('5e8')
                if(x.gte(300)) c=n(10).pow(x.pow(2).div(50))
                return c
            },
            bulk(){
                let t=n(0)
                if(mil('J',5)&&player.J.auto1)   t=player.J.bp.add(10).log(10).mul(50).pow(0.5).sub(getBuyableAmount(this.layer, this.id)).sub(1).ceil().max(1)
                let c = this.cost(getBuyableAmount(this.layer, this.id).add(t))
                if (player.J.bp.gte(c)) player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(t)
                },
            canAfford() { return player.J.bp.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let b = player.J.bp.max(1).log(10).sub(8).max(1).pow(0.2).mul(1.5)    
                if(mil('I',17)) b=player.J.bp.max(1).log(10).max(1).pow(0.22).mul(1.5) 
                if(mil('J',5)) b=b.max(player.J.bp.max(1).log(10).max(1).pow(0.25))
                return b},
            effect(x) { 
                let e=n(1)
                let ef=this.base().pow(x.pow(e))
                return ef},
            display() { 
                return "base bp x"+ format(this.base()) + "(based on BP) \n\
                Cost: " + format(this.cost()) + " BP \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: x" + format(this.effect())},
            unlocked() {return mil('J',0)},
            style: {'width':'130px','height':'130px'},
        },
        13: { 
            title: function(){
                let s=''
                //if(gba(this.layer,this.id).gte(300)) s=s+'sc '
                s=s+'bp3'
                return s
            }, 
            cost(x) { 
                let c=x.add(3).mul(4).pow(1.3).add('80').ceil()
                return c
            },
            bulk(){
                let t=n(0)
                if(mil('J',8)&&player.J.auto2)   t=player.I.total.sub(80).pow(10/13).div(4).sub(gba(this.layer,this.id)).add(2).ceil().max(1)
                let c=this.cost(gba(this.layer, this.id).add(t))
                if (player.I.total.gte(c)) player[this.layer].buyables[this.id]=player[this.layer].buyables[this.id].add(t)
            },
            canAfford() { return player.I.total.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let b = player.I.total.max(1).log(10).sub(1.1).max(1).pow(1.5).mul(2)  
                if(mil('I',17)) b=player.I.total.max(1).log(2).max(1).pow(3).mul(2)   
                if(mil('J',5)) b=b.max(player.I.total.max(1).log(2).pow(5)) 
                if(mil('J',8)) b=b.max(n(10).pow(player.I.total.add(1).log(10).pow(0.8).mul(3))) 
                return b},
            effect(x) { 
                let e=n(1)
                let ef=this.base().pow(x.pow(e))
                return ef},
            display() { 
                return "base bp x"+ format(this.base()) + "(based on I) \n\
                Cost: " + format(this.cost()) + " I(dont spend) \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: x" + format(this.effect())},
            unlocked() {return mil('I',15)},
            style: {'width':'130px','height':'130px'},
        },
        14: { 
            title: function(){
                let s=''
                if(gba(this.layer,this.id).gte(100)) s=s+'sc '
                s=s+'bp4'
                return s
            },  
            cost(x) { 
                let c=x.add(5).pow(2).mul(400).ceil()
                if(x.gte(100)) c=n(10).pow(x.pow(0.35).add(1.5))
                return c
            },
            bulk(){
                let t=n(0)
                if(mil('J',8)&&player.J.auto2)   t=player.I.si.add(10).log(10).pow(10/13).sub(1.5).pow(20/7).sub(gba(this.layer,this.id)).add(2).ceil().max(1)
                let c=this.cost(gba(this.layer, this.id).add(t))
                if (player.I.si.gte(c)) player[this.layer].buyables[this.id]=player[this.layer].buyables[this.id].add(t)
            },
            canAfford() { return player.I.si.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let b = player.I.si.max(1).log(10).max(1).pow(3).mul(2)  
                if(mil('J',5)) b=b.max(player.I.si.max(1).log(2).pow(4)) 
                return b},
            effect(x) { 
                let e=n(1)
                let ef=this.base().pow(x.pow(e))
                return ef},
            display() { 
                return "base bp x"+ format(this.base()) + "(based on SI) \n\
                Cost: " + format(this.cost()) + " SI(dont spend) \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: x" + format(this.effect())},
            unlocked() {return mil('I',16)},
            style: {'width':'130px','height':'130px'},
        },
        15: { 
            title: function(){
                let s=''
                //if(gba(this.layer,this.id).gte(300)) s=s+'sc '
                s=s+'bp^^'
                return s
            },  
            cost(x) { 
                let c=n(10).tetrate(x.mul(0.01).add(2.5))
                return c
            },
            canAfford() { return player.J.bp.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let b=n(0.001)  
                return b},
            effect(x) { 
                let e=n(1)
                let ef=this.base().mul(x.pow(e))
                return ef},
            display() { 
                return "BP slog +"+ format(this.base()) + " \n\
                Cost: " + format(this.cost()) + " BP \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: ^" + format(this.effect())},
            unlocked() {return mil('J',6)},
            style: {'width':'130px','height':'130px'},
        },
        21: { 
            title: function(){
                let s=''
                //if(gba(this.layer,this.id).gte(300)) s=s+'sc '
                s=s+'qp^'
                return s
            },  
            cost(x) { 
                let c=n(10).pow(n(5).mul(x.pow(1.5))).mul('1e250')
                if(mil('J',11)) c=n(10).pow(n(5).mul(x.pow(1.5)))
                return c
            },
            bulk(){
                let t=n(0)
                if(mil('J',11)&&player.J.auto4)   t=player.I.qolpoints.add(10).log(10).div(5).pow(2/3).sub(gba(this.layer,this.id)).sub(1).ceil().max(1)
                let c=this.cost(gba(this.layer, this.id).add(t))
                if (player.I.qolpoints.gte(c)) player[this.layer].buyables[this.id]=player[this.layer].buyables[this.id].add(t)
            },
            canAfford() { return player.I.qolpoints.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let b=player.I.qolpoints.max(1).log(10).max(1).pow(0.5).div(2)    
                if(mil('J',10)) b=player.I.qolpoints.max(1).log(10).max(1).pow(0.55) 
                return b},
            effect(x) { 
                let e=n(1)
                let ef=this.base().pow(x.pow(e))
                return ef},
            display() { 
                return "QP x"+ format(this.base()) + "(based on QP) \n\
                Cost: " + format(this.cost()) + " QP \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: x" + format(this.effect())},
            unlocked() {return mil('J',4)},
            style: {'width':'130px','height':'130px'},
        },
        22: { 
            title: function(){
                let s=''
                //if(gba(this.layer,this.id).gte(300)) s=s+'sc '
                s=s+'r1^'
                return s
            },  
            cost(x) { 
                let c=n(10).tetrate(x.add(10).log(10).pow(0.65).add(1.4).max(1))
                return c
            },
            canAfford() { return player.J.bp.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let b=n(1.05)  
                if(mil('J',7)) b=n(1.1)
                return b},
            effect(x) { 
                let e=n(1)
                let ef=this.base().pow(x.pow(e))
                return ef},
            display() { 
                return "Ib2-3 eff ^"+ format(this.base()) + " \n\
                Cost: " + format(this.cost()) + " BP \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: ^" + format(this.effect())},
            unlocked() {return mil('J',4)},
            style: {'width':'130px','height':'130px'},
        },
        23: { 
            title: function(){
                let s=''
                //if(gba(this.layer,this.id).gte(300)) s=s+'sc '
                s=s+'r2^'
                return s
            },  
            cost(x) { 
                let c=n(10).tetrate(x.add(10).log(10).pow(0.7).add(1.5).max(1))
                return c
            },
            canAfford() { return player.J.bp.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let b=n(1.05)  
                if(mil('J',7)) b=n(1.1)
                return b},
            effect(x) { 
                let e=n(1)
                let ef=this.base().pow(x.pow(e))
                return ef},
            display() { 
                return "Ib5-8 eff ^"+ format(this.base()) + " \n\
                Cost: " + format(this.cost()) + " BP \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: ^" + format(this.effect())},
            unlocked() {return mil('J',4)},
            style: {'width':'130px','height':'130px'},
        },
        24: { 
            title: function(){
                let s=''
                //if(gba(this.layer,this.id).gte(300)) s=s+'sc '
                s=s+'bpb+'
                return s
            },  
            cost(x) { 
                let c=n(10).tetrate(x.add(10).log(10).pow(0.4).add(1.5).max(1))
                return c
            },
            bulk(){
                let t=n(0)
                if(mil('J',11)&&player.J.auto4)   t=n(10).pow(player.J.bp.add(10).slog().sub(1.5).pow(2.5).sub(gba(this.layer,this.id))).sub(1).ceil().max(1)
                let c=this.cost(gba(this.layer, this.id).add(t))
                if (player.J.bp.gte(c)) player[this.layer].buyables[this.id]=player[this.layer].buyables[this.id].add(t)
            },
            canAfford() { return player.J.bp.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let b=n(0.05)  
                return b},
            effect(x) { 
                let e=n(1)
                let ef=this.base().mul(x.pow(e))
                return ef},
            display() { 
                return "BP effect base +"+ format(this.base()) + " \n\
                Cost: " + format(this.cost()) + " BP \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: +" + format(this.effect())},
            unlocked() {return mil('I',19)},
            style: {'width':'130px','height':'130px'},
        },
        25: { 
            title: function(){
                let s=''
                //if(gba(this.layer,this.id).gte(300)) s=s+'sc '
                s=s+'si^'
                return s
            },  
            cost(x) { 
                let c=n(10).pow(x.add(50).pow(3).div(100))
                return c
            },
            bulk(){
                let t=n(0)
                if(mil('J',11)&&player.J.auto4)   t=player.I.qolpoints.add(10).log(10).mul(100).pow(1/3).sub(51).sub(gba(this.layer,this.id)).ceil().max(1)
                let c=this.cost(gba(this.layer,this.id).add(t))
                if (player.I.qolpoints.gte(c)) player[this.layer].buyables[this.id]=player[this.layer].buyables[this.id].add(t)
            },
            canAfford() { return player.I.qolpoints.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let b=n(0.01)  
                return b},
            effect(x) { 
                let e=n(1)
                let ef=this.base().mul(x.pow(e))
                return ef},
            display() { 
                return "SI gain exp +"+ format(this.base()) + " \n\
                Cost: " + format(this.cost()) + " QP \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: +" + format(this.effect())},
            unlocked() {return mil('J',6)},
            style: {'width':'130px','height':'130px'},
        },
    },
    bpg(){
        let ef=n(10)
        ef=ef.mul(buyableEffect('J',11)).mul(buyableEffect('J',12)).mul(buyableEffect('J',13)).mul(buyableEffect('J',14))
        if(mil('J',6)) ef=n(10).tetrate(ef.max(10).slog().add(buyableEffect('J',15)))
        return ef
    },
    bppow(){
        let e=n(1)
        if(mil('J',2)) e=e.add(0.01)
        if(mil('J',7)) e=e.add(0.04)
        let ef=player.J.best.max(1).pow(e)
        if(mil('I',18)) ef=ef.add(tmp.I.hief[1])
        return ef
    },
    bpef(){
        let b=n(10)
        b=b.add(buyableEffect('J',24))
        let ef=n(b).pow(player.J.bp.add(10).slog())
        return ef
    },
    update(diff){
        if(player.J.best.gte(1)) player.J.bp=player.J.bp.add(tmp.J.bpg.pow(tmp.J.bppow).mul(diff))
    },
})