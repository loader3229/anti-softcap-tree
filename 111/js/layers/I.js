addLayer("I", {
    name: "I", 
    symbol: "I", 
    position: 0, 
    startData() { return {
        unlocked:false,
		points:n(0),
        qolpoints:n(0),
        time:n(0),
        m:[n('1e308'),n(0)],//min and max
        chalbest:[n('1e308'),n('1e308'),n('1e308'),n('1e308')]
    }},
    passiveGeneration(){    let pg=0
        return pg},
    color: "#4F4F4F",
    requires: new Decimal('100'), 
    resource: "I", 
    baseResource: "slog pts", 
    baseAmount() {let k=player.points
        k=k.max(10).slog()
        return k}, 
    type: "normal", 
    exponent: 0.8, 
    gainExp() {
        return new Decimal(1)
    },
    row: 4, 
    hotkeys: [
        {key: "i", description: "I: Reset for I points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return ((upg('G',155))||player[this.layer].unlocked)},
    gainMult() { 
        mult = n(1)
        return mult
    },
    branches: ['F'],
    milestones: {
        0: {requirementDescription: "1 total I (1",
            done() {return player[this.layer].total.gte(1)}, 
            effectDescription: "5x A-E,^1.01 points,x1e5 and ^1.05 F1,x5 and ^1.1 G,x100 Gs/i/e,x10 Gs eff,x1.1 GG,^1.1 harsh/hyper,keep GG tree,G passive and 'all dHs' qol,x10 GsR,remove ee2000 Gse nerf.",
        },
        1: {requirementDescription: "2 total I (2",
            done() {return player[this.layer].total.gte(2)}, 
            effectDescription: "keep all passive(and H resets nothing),^1.02 points,x1e10 F1,auto gain dH.",
            toggles: [ ['I',"auto1"] ]
        },
        2: {requirementDescription: "3 total I (3",
            done() {return player[this.layer].total.gte(3)}, 
            effectDescription: "^1.005 Gs eff,unlock a qol layer.",
        },
        3: {requirementDescription: "5 total I (4",
            done() {return player[this.layer].total.gte(5)}, 
            effectDescription: "unlock buyables.",
        },
        4: {requirementDescription: "7 total I (5",
            done() {return player[this.layer].total.gte(7)}, 
            effectDescription: "unlock speedrun.",
        },
        5: {requirementDescription: "1200s best reset time (6",
            done() {return (!player.I.m[0].gte(1200))}, 
            effectDescription: "ee12 Gse nerf +0.03 at start,unlock more Qol.",
        },
        6: {requirementDescription: "11 total I (7",
            done() {return player[this.layer].total.gte(11)}, 
            effectDescription: "Ib2 cost nothing,unlock next row of babs.",
        },
        7: {requirementDescription: "10 speedrun completions (8",
            done() {return (tmp.I.comp.gte(10))}, 
            effectDescription: "unlock next 2 speedrun chal.",
        },
        8: {requirementDescription: "400s best reset time (9",
            done() {return (!player.I.m[0].gte(400))}, 
            effectDescription: "boost Ibs eff,harsh slog +0.002,keep H11.",
        },
        9: {requirementDescription: "25 speedrun completions (10",
            done() {return (tmp.I.comp.gte(25))}, 
            effectDescription: "unlock more Qol and babs,Ib3 cost nothing,H req exp cap -1000.",
        },
        10: {requirementDescription: "180s best reset time (11",
            done() {return (!player.I.m[0].gte(180))}, 
            effectDescription: function(){return "fastest reset boost QP gain,set G to eee500 at eee7.<br>currently:"+format(tmp.I.m10ef,3)+'x'},
        },
        11: {requirementDescription: "60s best reset time (12",
            done() {return (!player.I.m[0].gte(60))}, 
            effectDescription: "unlock more Qol,Ib4-6 cost nothing,H req exp cap -500.",
        },
        12: {requirementDescription: "40 total I (13",
            done() {return player[this.layer].total.gte(40)}, 
            effectDescription: "edit QP formula:3^(resets)^0.9.",
        },
        13: {requirementDescription: "upgrade Ib9 effect to x0.3 (14",
            done() {return n(buyableEffect('I',33)).pow(-1).gte(10/3)}, 
            effectDescription: "unlock a layer to break infinity(coming soon).",
        },
    },
    m10ef(){
        let exp=n(0.4)
        let ef=n(180).div(player.I.m[0].max(1)).pow(exp).mul(n(1.025).pow(n(180).sub(player.I.m[0]))).max(1)
        return ef
    },
    softcap(){return n(Infinity)},
	softcapPower(){return n(1)},
    microtabs: {
        stuff: {       
            // "Upgrades": {
            //     unlocked() {return true},
            //     content: [ "upgrades"]}, 
            "Milestones": {
                unlocked() {return true},
                content: ["milestones"]},
            "Buyables": {
                unlocked() {return (mil('I',3))},
                content: [["display-text", function() { 
                    let s="You have <h3 style='color: #5FFF9B; text-shadow: 0 0 2px #c2b280'>" + format(player.I.qolpoints) + "</h3> Qol points "
                    return s}]
                ,["raw-html", () => `<h4 style="opacity:.5">also give qol to speed up the resets.</h4>`],"buyables"]},
            "Speedrun": {
                unlocked() {return (mil("I",4))},
                content: [["display-text", function() { 
                    let s="You have <h3 style='color: #5FFF9B; text-shadow: 0 0 2px #c2b280'>" + format(tmp.I.comp) + "</h3> completions "
                    return s}]
                    ,["raw-html", () => `<h4 style="opacity:.5">tips:start speedrun triggers an I reset.</h4>`]
                    ,"challenges",
                    ["display-text", function() { let s=''
                        if(shiftDown) {
                            if(!n(challengeCompletions('I',22)).gte(1)) return 'you has no Ic4 completions yet.'
                            s=s+'current Ic4 comps qol:<br>'
                            if(n(challengeCompletions('I',22)).gte(1)) s=s+"<h4 style='color: #75C56E'>comp1: ^1.25 points,keep Gr1/3 buy max eff(G72),auto Gc3-4p req is ee250.<br>" 
                            if(n(challengeCompletions('I',22)).gte(2)) s=s+"<h4 style='color: #716CCD'>comp2: x100 Gs eff,^1.25 Gse,keep upg G66-70.<br>" 
                            if(n(challengeCompletions('I',22)).gte(3)) s=s+"<h4 style='color: #D73BB0'>comp3: x1e10 harsh/hyper,keep GG r1-4,9 at start,keep H mil 19,auto Gc3-4p req is ee100.<br>" 
                            if(n(challengeCompletions('I',22)).gte(4)) s=s+"<h4 style='color: #D78903'>comp4: remove ee1500 e nerf,keep GG r10-11 at start,raise QP to 1.05.<br>" 
                            if(n(challengeCompletions('I',22)).gte(5)) s=s+"<h4 style='color: #C52C14'>comp5: x1e1000 Gs,Ib7-9 cost nothing,auto Gc3-4p req is ee40.<br>" 
                            return s}
                        }]]},
            "Qol Tree": {
                unlocked() {return mil('I',2)},
                content: [["display-text", function() { 
                    let s="You have <h3 style='color: #5FFF9B; text-shadow: 0 0 2px #c2b280'>" + format(player.I.qolpoints) + "</h3> Qol points "+ "<h4>" + format(tmp.I.qb) + " Qol points/s <h4>"
                    s=s+"<br><h4>QP gain formula(without boosts):4^(reset amt-3)^0.85"
                    s=s+"<br><h4 style='color: #C52C14'>QP prod is halted after 1e4 sec reset time."
                    if(player.I.time.gte(1e4)) s=s+"<br><h4 style='color: #C52C14'>QP prod is currently halted."
                    return s}]
                ,"clickables"]},
        }
    },
    tabFormat: [
        "main-display",
        "prestige-button",
        ["display-text", function(){
            let tot='total I:'+format(player.I.total)+'<br>'
            let t='current reset time:'+format(player.I.time)+'s<br>'
            let m='fastest:'+format(player.I.m[0])+'s   longest:'+format(player.I.m[1])+'s<br>'
            let s=tot+t+m
            return s
        }],
        ["microtabs", "stuff"],
        ["blank", "25px"],
    ],
    onPrestige(){
        player.I.m[0]=player.I.m[0].min(player.I.time)
        player.I.m[1]=player.I.m[1].max(player.I.time)
        player.I.time=n(0)
    },
    // doReset(layer){
    // },
    clickables:{
        11: {
            title(){return "kp1"},
            display(){return "keep A-D milestones<br>need:"+format(this.cost())+" QP"},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#B45958":layers[this.layer].clickables[this.id].canClick()?"#FF2400":"#BF8F8F"}},
            cost(){return n(200)},//120
            canClick() {return player.I.qolpoints.gte(this.cost())&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
        },
        12: {
            title(){return "kp2"},
            display(){return "keep A-E challenges<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:11'},
            cost(){return n(500)},//400
            style() { return { 'background-color': gcs(this.layer,this.id)?"#B45958":layers[this.layer].clickables[this.id].canClick()?"#FF2400":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',11)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            branches(){return ["11"]},
        },
        13: {
            title(){return "kp3"},
            display(){return "keep F chals and A-B upgs<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:12'},
            cost(){return n(2e3)},//400
            style() { return { 'background-color': gcs(this.layer,this.id)?"#B45958":layers[this.layer].clickables[this.id].canClick()?"#FF2400":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',12)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            branches(){return ["12"]},
        },
        14: {
            title(){return "kp4"},
            display(){return "keep C-E upgs<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:13'},
            cost(){return n(5e3)},//4500
            style() { return { 'background-color': gcs(this.layer,this.id)?"#B45958":layers[this.layer].clickables[this.id].canClick()?"#FF2400":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',13)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            branches(){return ["13"]},
        },
        15: {
            title(){return "kp5"},
            display(){return "keep E mil,F mil 12-17 and G mil 1-2<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:14'},
            cost(){return n(3e4)},//1e4
            style() { return { 'background-color': gcs(this.layer,this.id)?"#B45958":layers[this.layer].clickables[this.id].canClick()?"#FF2400":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',14)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            branches(){return ["14"]},
        },
        16: {
            title(){return "kp9"},
            display(){return "keep G mil 28,29,38<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:15'},
            cost(){return n(3e7)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#B45958":layers[this.layer].clickables[this.id].canClick()?"#FF2400":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',15)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            branches(){return ["15"]},
        },
        26: {
            title(){return "kp11"},
            display(){return "keep H mil 14,15<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:16'},
            cost(){return n(8e8)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#B45958":layers[this.layer].clickables[this.id].canClick()?"#FF2400":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',16)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',5)},
            branches(){return ["16"]},
        },
        21: {
            title(){return "kp8"},
            display(){return "keep some buy max effect<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:22,15'},
            cost(){return n(7.5e6)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#B45958":layers[this.layer].clickables[this.id].canClick()?"#FF2400":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',22)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',5)},
            branches(){return ["22"]},
        },
        22: {
            title(){return "kp6"},
            display(){return "keep G mil 3-7<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:12,15'},
            cost(){return n(6e5)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#B45958":layers[this.layer].clickables[this.id].canClick()?"#FF2400":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',12)&&gcs('I',15)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            branches(){return ["13"]},
        },
        23: {
            title(){return "kp7"},
            display(){return "keep G mil 18<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:13,15'},
            cost(){return n(2.5e6)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#B45958":layers[this.layer].clickables[this.id].canClick()?"#FF2400":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',13)&&gcs('I',15)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            branches(){return ["13"]},
        },
        24: {
            title(){return "kp13"},
            display(){return "keep G mil 1-13,34,37<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:23'},
            cost(){return n(3e10)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#B45958":layers[this.layer].clickables[this.id].canClick()?"#FF2400":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',23)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',9)},
            branches(){return ["23"]},
        },
        31: {
            title(){return "bF1"},
            display(){return "F1 ^1.12<br>need:"+format(this.cost())+" QP"},
            cost(){return n(200)},//120
            style() { return { 'background-color': gcs(this.layer,this.id)?"#85914F":layers[this.layer].clickables[this.id].canClick()?"#999933":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
        },
        32: {
            title(){return "bF2"},
            display(){return "F gain exp +0.2<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:31'},
            cost(){return n(600)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#85914F":layers[this.layer].clickables[this.id].canClick()?"#999933":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',31)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            branches(){return ["31"]},
        },
        33: {
            title(){return "bF3"},
            display(){return "F dim mult per buy x1.1<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:32'},
            cost(){return n(4000)},//2000
            style() { return { 'background-color': gcs(this.layer,this.id)?"#85914F":layers[this.layer].clickables[this.id].canClick()?"#999933":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',32)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            branches(){return ["32"]},
        },
        34: {
            title(){return "bF4"},
            display(){return "TB power +0.001<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:33'},
            cost(){return n(2e4)},//1e4
            style() { return { 'background-color': gcs(this.layer,this.id)?"#85914F":layers[this.layer].clickables[this.id].canClick()?"#999933":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',33)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            branches(){return ["33"]},
        },
        25: {
            title(){return "bF6"},
            display(){return "TB scaling mul is 1.9<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:34'},
            cost(){return n(1e6)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#85914F":layers[this.layer].clickables[this.id].canClick()?"#999933":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',34)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            branches(){return ["34"]},
        },
        36: {
            title(){return "kp10"},
            display(){return "keep all F mil and upg F31-40<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:35'},
            cost(){return n(1e8)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#B45958":layers[this.layer].clickables[this.id].canClick()?"#FF2400":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',35)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',5)},
            branches(){return ["35"]},
        },
        46: {
            title(){return "kp12"},
            display(){return "keep Gc comp<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:36'},
            cost(){return n(5e8)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#B45958":layers[this.layer].clickables[this.id].canClick()?"#FF2400":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',36)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',5)},
            branches(){return ["36"]},
        },
        56: {
            title(){return "kp13"},
            display(){return "keep G mil 19-27,H mil 6-9<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:46'},
            cost(){return n(1e12)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#B45958":layers[this.layer].clickables[this.id].canClick()?"#FF2400":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',46)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',9)},
            branches(){return ["46"]},
        },
        66: {
            title(){return "kp14"},
            display(){return "keep G mil 30,36,H mil 10,11,16<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:56'},
            cost(){return n(1e13)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#B45958":layers[this.layer].clickables[this.id].canClick()?"#FF2400":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',56)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',9)},
            branches(){return ["56"]},
        },
        76: {
            title(){return "kp15"},
            display(){return "keep all GG upg<br>(need to click respec)<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:66'},
            cost(){return n(5e17)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#B45958":layers[this.layer].clickables[this.id].canClick()?"#FF2400":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',66)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',11)},
            branches(){return ["66"]},
        },
        86: {
            title(){return "kp16"},
            display(){return "keep G26-30,G64-65,H1-19<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:76'},
            cost(){return n(3e18)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#B45958":layers[this.layer].clickables[this.id].canClick()?"#FF2400":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',76)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',11)},
            branches(){return ["76"]},
        },
        35: {
            title(){return "bF5"},
            display(){return "F passive is 100%<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:34'},
            cost(){return n(1e5)},//4e4
            style() { return { 'background-color': gcs(this.layer,this.id)?"#85914F":layers[this.layer].clickables[this.id].canClick()?"#999933":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',34)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            branches(){return ["34"]},
        },
        41: {
            title(){return "bG1"},
            display(){return "G gain exp +0.03<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:31'},
            cost(){return n(1e3)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#987F26":layers[this.layer].clickables[this.id].canClick()?"#996600":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',31)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            branches(){return ["31"]},
        },
        42: {
            title(){return "bG2"},
            display(){return "Gc1-2's power exp +0.01<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:41'},
            cost(){return n(3e3)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#987F26":layers[this.layer].clickables[this.id].canClick()?"#996600":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',41)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            branches(){return ["41"]},
        },
        43: {
            title(){return "bG3"},
            display(){return "F31-40 no longer req the G chal<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:42'},
            cost(){return n(1e4)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#987F26":layers[this.layer].clickables[this.id].canClick()?"#996600":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',42)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            branches(){return ["42"]},
        },
        44: {
            title(){return "bG4"},
            display(){return "set G to eee500 at eee10<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:43'},
            cost(){return n(2e4)},//4e4
            style() { return { 'background-color': gcs(this.layer,this.id)?"#987F26":layers[this.layer].clickables[this.id].canClick()?"#996600":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',43)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            branches(){return ["43"]},
        },
        45: {
            title(){return "bG5"},
            display(){return "Gc3-4p exp +0.05 at ee16 G<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:44'},
            cost(){return n(4e6)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#987F26":layers[this.layer].clickables[this.id].canClick()?"#996600":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',44)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',5)},
            branches(){return ["44"]},
        },
        55: {
            title(){return "bG6"},
            display(){return "Gc3-4p exp +0.03<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:45'},
            cost(){return n(5e10)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#987F26":layers[this.layer].clickables[this.id].canClick()?"#996600":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',45)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',9)},
            branches(){return ["45"]},
        },
        65: {
            title(){return "bG7"},
            display(){return "auto Gc1-2p instantly<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:55'},
            cost(){return n(3e12)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#987F26":layers[this.layer].clickables[this.id].canClick()?"#996600":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',55)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',9)},
            branches(){return ["55"]},
        },
        51: {
            title(){return "bGs1"},
            display(){return "Gs eff ^1.005<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:42'},
            cost(){return n(1e4)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#60E5B4":layers[this.layer].clickables[this.id].canClick()?"#60E5B4":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',42)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            branches(){return ["42"]},
        },
        52: {
            title(){return "bGs2"},
            display(){return "gain an additional sb6<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:51'},
            cost(){return n(2e4)},//4e4
            style() { return { 'background-color': gcs(this.layer,this.id)?"#60E5B4":layers[this.layer].clickables[this.id].canClick()?"#60E5B4":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',51)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            branches(){return ["51"]},
        },
        53: {
            title(){return "bGs3"},
            display(){return "Gse ^1.05<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:52'},
            cost(){return n(1.5e5)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#60E5B4":layers[this.layer].clickables[this.id].canClick()?"#60E5B4":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',52)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            branches(){return ["52"]},
        },
        54: {
            title(){return "bGs7"},
            display(){return "GG x1.1,Gs eff x10<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:53'},
            cost(){return n(8e9)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#60E5B4":layers[this.layer].clickables[this.id].canClick()?"#60E5B4":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',53)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',9)},
            branches(){return ["53"]},
        },
        64: {
            title(){return "bGs8"},
            display(){return "Gs x1e4,dilate Gse to 1.025<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:54'},
            cost(){return n(1e11)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#60E5B4":layers[this.layer].clickables[this.id].canClick()?"#60E5B4":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',54)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',9)},
            branches(){return ["54"]},
        },
        63: {
            title(){return "bGs4"},
            display(){return "GG x1.1<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:53'},
            cost(){return n(3e5)},//2e5
            style() { return { 'background-color': gcs(this.layer,this.id)?"#60E5B4":layers[this.layer].clickables[this.id].canClick()?"#60E5B4":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',53)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            branches(){return ["53"]},
        },
        62: {
            title(){return "bGs5"},
            display(){return "keep Gt6/7/13 with G mil 23<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:53'},
            cost(){return n(3e5)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#60E5B4":layers[this.layer].clickables[this.id].canClick()?"#60E5B4":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',53)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            branches(){return ["53"]},
        },
        61: {
            title(){return "bGs6"},
            display(){return "GG x1.1<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:62'},
            cost(){return n(1.2e7)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#60E5B4":layers[this.layer].clickables[this.id].canClick()?"#60E5B4":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',62)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',5)},
            branches(){return ["62"]},
        },
        71: {
            title(){return "bH1"},
            display(){return "harsh/hyper x10<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:51'},
            cost(){return n(5e3)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#A0BCDB":layers[this.layer].clickables[this.id].canClick()?"#9999CC":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',51)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            branches(){return ["51"]},
        },
        72: {
            title(){return "bH2"},
            display(){return "hyper eff mul x2<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:71'},
            cost(){return n(1e5)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#A0BCDB":layers[this.layer].clickables[this.id].canClick()?"#9999CC":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',71)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            branches(){return ["71"]},
        },
        73: {
            title(){return "bH7"},
            display(){return "remove 6000 dH2 sc,nerf dH1-2 sc<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:72'},
            cost(){return n(1e8)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#A0BCDB":layers[this.layer].clickables[this.id].canClick()?"#9999CC":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',72)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',5)},
            branches(){return ["72"]},
        },
        74: {
            title(){return "bH9"},
            display(){return "h3/y3 base x1.1<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:73'},
            cost(){return n(4e15)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#A0BCDB":layers[this.layer].clickables[this.id].canClick()?"#9999CC":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',73)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',11)},
            branches(){return ["73"]},
        },
        83: {
            title(){return "bH8"},
            display(){return "ee12 nerf exp +0.02<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:73'},
            cost(){return n(2e10)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#A0BCDB":layers[this.layer].clickables[this.id].canClick()?"#9999CC":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',72)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',9)},
            branches(){return ["73"]},
        },
        101: {
            title(){return "au1"},
            display(){return "autobuy F upgs<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:42'},
            cost(){return n(1e5)},//5e4
            style() { return { 'background-color': gcs(this.layer,this.id)?"#BDDCCC":layers[this.layer].clickables[this.id].canClick()?"#CCCCCC":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            //branches(){return ["42"]},&&gcs('I',42)
        },
        102: {
            title(){return "au2"},
            display(){return "autobuy G upgs<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:42'},
            cost(){return n(5e5)},//2e5
            style() { return { 'background-color': gcs(this.layer,this.id)?"#BDDCCC":layers[this.layer].clickables[this.id].canClick()?"#CCCCCC":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',101)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            branches(){return ["101"]},
        },
        103: {
            title(){return "au3"},
            display(){return "autobuy H upgs<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:42'},
            cost(){return n(3e6)},//3e5
            style() { return { 'background-color': gcs(this.layer,this.id)?"#BDDCCC":layers[this.layer].clickables[this.id].canClick()?"#CCCCCC":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',102)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            branches(){return ["102"]},
        },
        104: {
            title(){return "au7"},
            display(){return "autobuy sb10,Hb8,y5<br>need:"+format(this.cost())+" QP"},
            //tooltip(){return 'req:42'},&&gcs('I',102)
            cost(){return n(8e4)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#BDDCCC":layers[this.layer].clickables[this.id].canClick()?"#CCCCCC":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            //branches(){return ["102"]},
        },
        114: {
            title(){return "au8"},
            display(){return "autobuy dHp3-4<br>need:"+format(this.cost())+" QP"},
            //tooltip(){return 'req:42'},&&gcs('I',102)
            cost(){return n(1e6)},//5e5
            style() { return { 'background-color': gcs(this.layer,this.id)?"#BDDCCC":layers[this.layer].clickables[this.id].canClick()?"#CCCCCC":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            branches(){return ["104"]},
        },
        105: {
            title(){return "au9"},
            display(){return "buy max Bbs<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:42'},
            cost(){return n(2e8)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#BDDCCC":layers[this.layer].clickables[this.id].canClick()?"#CCCCCC":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',104)&&gcs('I',114)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',5)},
            branches(){return ['104','114']},
        },
        115: {
            title(){return "au10"},
            display(){return "buy max sb9,11,12,<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:105'},
            cost(){return n(2e8)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#BDDCCC":layers[this.layer].clickables[this.id].canClick()?"#CCCCCC":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',105)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',5)},
            branches(){return ['105']},
        },
        124: {
            title(){return "au11"},
            display(){return "pts slog +0.3 per tick after 1F10<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:105'},
            cost(){return n(1e16)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#BDDCCC":layers[this.layer].clickables[this.id].canClick()?"#CCCCCC":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',115)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',11)},
            branches(){return ['115']},
        },
        125: {
            title(){return "au12"},
            display(){return "pts slog +0.5 per tick after 1F10<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:124'},
            cost(){return n(3e17)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#BDDCCC":layers[this.layer].clickables[this.id].canClick()?"#CCCCCC":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',124)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',11)},
            branches(){return ['124']},
        },
        135: {
            title(){return "au13"},
            display(){return "pts slog +1 per tick after 1F10<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:125'},
            cost(){return n(1e21)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#BDDCCC":layers[this.layer].clickables[this.id].canClick()?"#CCCCCC":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',125)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',11)},
            branches(){return ['125']},
        },
        111: {
            title(){return "au4"},
            display(){return "bulk H req -2000(3000)<br>need:"+format(this.cost())+" QP"},
            //tooltip(){return 'req:42'},
            cost(){return n(2e3)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#BDDCCC":layers[this.layer].clickables[this.id].canClick()?"#CCCCCC":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            //branches(){return ["102"]},&&gcs('I',102)
        },
        121: {
            title(){return "bH3"},
            display(){return "H req exp cap -500(4500)<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:111'},
            cost(){return n(1e5)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#A0BCDB":layers[this.layer].clickables[this.id].canClick()?"#9999CC":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',111)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            branches(){return ["111"]},
        },
        112: {
            title(){return "au5"},
            display(){return "bulk H req -1000(2000)<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:111'},
            cost(){return n(1e4)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#BDDCCC":layers[this.layer].clickables[this.id].canClick()?"#CCCCCC":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',111)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            branches(){return ["111"]},
        },
        122: {
            title(){return "bH4"},
            display(){return "H req exp cap -500(4000)<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:121,112'},
            cost(){return n(4e5)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#A0BCDB":layers[this.layer].clickables[this.id].canClick()?"#9999CC":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',112)&&gcs('I',121)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            branches(){return ['121','112']},
        },
        113: {
            title(){return "au6"},
            display(){return "bulk H req -500(1500)<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:112'},
            cost(){return n(5e4)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#BDDCCC":layers[this.layer].clickables[this.id].canClick()?"#CCCCCC":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',112)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            branches(){return ["112"]},
        },
        123: {
            title(){return "bH5"},
            display(){return "H req exp cap -1000(3000)<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:122,113'},
            cost(){return n(4e6)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#A0BCDB":layers[this.layer].clickables[this.id].canClick()?"#9999CC":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',113)&&gcs('I',122)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            branches(){return ['122','113']},
        },
        132: {
            title(){return "bH6"},
            display(){return "H req exp cap -500(2500),bulk req -500(1000)<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:123'},
            cost(){return n(1e7)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#A0BCDB":layers[this.layer].clickables[this.id].canClick()?"#9999CC":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',123)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',5)},
            branches(){return ['123']},
        },
    },
    upgrades: {//coming soon
        // 11: {
        //     title:'D1',
        //     description: function() {return '1000x points \n\
        //         '+'layer D total: \n\
        //         '+ format(this.effect()) +'x'},            
        //     cost:new Decimal(1),
        // },
    },
    buyables:{
        11: {
            title: "Ib1", 
            cost(x) { 
                let cost = n(2).pow(x)
                return cost
            },
            canAfford() { return player[this.layer].qolpoints.gte(this.cost()) },
            buy() {setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            // bulk(){let t=n(0)
            //     let c=n(0)
            //     if(player[this.layer].auto2&&(upg('H',81))) {
            //         t=player[this.layer].harsh.max(1).log(10).max(1).log(10).add(1).pow(this.sc().pow(-1)).sub(1).ceil().max(getBuyableAmount(this.layer, this.id))
            //         c = this.cost(t)
            //         if (player[this.layer].harsh.gte(c)) setBuyableAmount(this.layer,this.id,t)}    
            //     },
            base(){   
                let b=n(1.04)
                if(mil('I',8)) b=b.add(0.01)
                return b},
            effect(x) { //.add(this.extra()) if(!upg('G',141))
                let ef = this.base().pow(x)
                return ef},
            display() { 
                return "QP x"+ format(this.base()) + "(dont spend) \n\
                Cost: " + format(this.cost()) + " QP \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: x" + format(this.effect())},
            unlocked() { return mil('I',3) }
        },
        12: {
            title: "Ib2", 
            cost(x) { 
                let cost = n(2).pow(x).mul(100)
                return cost
            },
            canAfford() { return player[this.layer].qolpoints.gte(this.cost()) },
            buy() { if(!mil('I',6)) player[this.layer].qolpoints = player[this.layer].qolpoints.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            // bulk(){let t=n(0)
            //     let c=n(0)
            //     if(player[this.layer].auto2&&(upg('H',81))) {
            //         t=player[this.layer].harsh.max(1).log(10).max(1).log(10).add(1).pow(this.sc().pow(-1)).sub(1).ceil().max(getBuyableAmount(this.layer, this.id))
            //         c = this.cost(t)
            //         if (player[this.layer].harsh.gte(c)) setBuyableAmount(this.layer,this.id,t)}    
            //     },
            base(){   
                let b=n(1.01)
                if(mil('I',8)) b=b.add(0.01)
                return b},
            effect(x) { //.add(this.extra()) if(!upg('G',141))
                let ef = this.base().pow(x)
                return ef},
            display() { 
                return "points ^"+ format(this.base()) + " \n\
                Cost: " + format(this.cost()) + " QP \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: ^" + format(this.effect(),3)},
            unlocked() { return mil('I',3) }
        },
        13: {
            title: "Ib3", 
            cost(x) { 
                let cost = n(3).pow(x).mul(100)
                return cost
            },
            canAfford() { return player[this.layer].qolpoints.gte(this.cost()) },
            buy() {if(!mil('I',9)) player[this.layer].qolpoints = player[this.layer].qolpoints.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            // bulk(){let t=n(0)
            //     let c=n(0)
            //     if(player[this.layer].auto2&&(upg('H',81))) {
            //         t=player[this.layer].harsh.max(1).log(10).max(1).log(10).add(1).pow(this.sc().pow(-1)).sub(1).ceil().max(getBuyableAmount(this.layer, this.id))
            //         c = this.cost(t)
            //         if (player[this.layer].harsh.gte(c)) setBuyableAmount(this.layer,this.id,t)}    
            //     },
            base(){   
                let b=n(1.01)
                if(mil('I',8)) b=b.add(0.01)
                return b},
            effect(x) { //.add(this.extra()) 
                let ef = this.base().pow(x)
                return ef},
            display() { 
                return "F1 ^"+ format(this.base()) + " \n\
                Cost: " + format(this.cost()) + " QP \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: ^" + format(this.effect(),3)},
            unlocked() { return mil('I',3) }
        },
        21: {
            title: "Ib4", 
            cost(x) { 
                let cost = n(5).pow(x).mul(1e3)
                return cost
            },
            canAfford() { return player[this.layer].qolpoints.gte(this.cost()) },
            buy() {if(!mil('I',11)) player[this.layer].qolpoints = player[this.layer].qolpoints.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            // bulk(){let t=n(0)
            //     let c=n(0)
            //     if(player[this.layer].auto2&&(upg('H',81))) {
            //         t=player[this.layer].harsh.max(1).log(10).max(1).log(10).add(1).pow(this.sc().pow(-1)).sub(1).ceil().max(getBuyableAmount(this.layer, this.id))
            //         c = this.cost(t)
            //         if (player[this.layer].harsh.gte(c)) setBuyableAmount(this.layer,this.id,t)}    
            //     },
            base(){   
                let b=n(0.005)
                if(mil('I',8)) b=b.add(0.001)
                return b},
            effect(x) { //.add(this.extra()) if(!upg('G',141))
                let ef = this.base().mul(x)
                return ef},
            display() { 
                return "Gc3-4p gain exp +"+ format(this.base()) + " \n\
                Cost: " + format(this.cost()) + " QP \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: +" + format(this.effect(),3)},
            unlocked() { return mil('I',6) }
        },
        22: {
            title: "Ib5", 
            cost(x) { 
                let cost = n(4).pow(x).mul(1e3)
                return cost
            },
            canAfford() { return player[this.layer].qolpoints.gte(this.cost()) },
            buy() {if(!mil('I',11)) player[this.layer].qolpoints = player[this.layer].qolpoints.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            // bulk(){let t=n(0)
            //     let c=n(0)
            //     if(player[this.layer].auto2&&(upg('H',81))) {
            //         t=player[this.layer].harsh.max(1).log(10).max(1).log(10).add(1).pow(this.sc().pow(-1)).sub(1).ceil().max(getBuyableAmount(this.layer, this.id))
            //         c = this.cost(t)
            //         if (player[this.layer].harsh.gte(c)) setBuyableAmount(this.layer,this.id,t)}    
            //     },
            base(){   
                let b=n(1.05)
                if(mil('I',8)) b=b.add(0.03)
                return b},
            effect(x) { //.add(this.extra()) if(!upg('G',141))
                let ef = this.base().pow(x)
                return ef},
            display() { 
                return "Gse gain ^"+ format(this.base()) + " \n\
                Cost: " + format(this.cost()) + " QP \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: ^" + format(this.effect(),3)},
            unlocked() { return mil('I',6) }
        },
        23: {
            title: "Ib6", 
            cost(x) { 
                let cost = n(3).pow(x).mul(1e3)
                return cost
            },
            canAfford() { return player[this.layer].qolpoints.gte(this.cost()) },
            buy() {if(!mil('I',11)) player[this.layer].qolpoints = player[this.layer].qolpoints.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            // bulk(){let t=n(0)
            //     let c=n(0)
            //     if(player[this.layer].auto2&&(upg('H',81))) {
            //         t=player[this.layer].harsh.max(1).log(10).max(1).log(10).add(1).pow(this.sc().pow(-1)).sub(1).ceil().max(getBuyableAmount(this.layer, this.id))
            //         c = this.cost(t)
            //         if (player[this.layer].harsh.gte(c)) setBuyableAmount(this.layer,this.id,t)}    
            //     },
            base(){   
                let b=n(1.02)
                if(mil('I',8)) b=b.add(0.01)
                return b},
            effect(x) { //.add(this.extra()) if(!upg('G',141))
                let ef = this.base().pow(x)
                return ef},
            display() { 
                return "dH base to dHp x"+ format(this.base()) + " \n\
                Cost: " + format(this.cost()) + " QP \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: ^" + format(this.effect(),3)},
            unlocked() { return mil('I',6) }
        },
        31: {
            title: "Ib7", 
            cost(x) { 
                let cost = n(6).pow(x).mul(1e6)
                return cost
            },
            canAfford() { return player[this.layer].qolpoints.gte(this.cost()) },
            buy() {if(!n(challengeCompletions('I',22)).gte(5)) player[this.layer].qolpoints = player[this.layer].qolpoints.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            // bulk(){let t=n(0)
            //     let c=n(0)
            //     if(player[this.layer].auto2&&(upg('H',81))) {
            //         t=player[this.layer].harsh.max(1).log(10).max(1).log(10).add(1).pow(this.sc().pow(-1)).sub(1).ceil().max(getBuyableAmount(this.layer, this.id))
            //         c = this.cost(t)
            //         if (player[this.layer].harsh.gte(c)) setBuyableAmount(this.layer,this.id,t)}    
            //     },
            base(){   
                let b=n(0.0005)
                return b},
            effect(x) { //.add(this.extra()) if(!upg('G',141))
                let ef = this.base().mul(x)
                return ef},
            display() { 
                return "hy3 base +"+ format(this.base()) + " \n\
                Cost: " + format(this.cost()) + " QP \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: +" + format(this.effect(),4)},
            unlocked() { return mil('I',9) }
        },
        32: {
            title: "Ib8", 
            cost(x) { 
                let cost = n(3).pow(x).mul(1e7)
                return cost
            },
            canAfford() { return player[this.layer].qolpoints.gte(this.cost()) },
            buy() {if(!n(challengeCompletions('I',22)).gte(5)) player[this.layer].qolpoints = player[this.layer].qolpoints.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            // bulk(){let t=n(0)
            //     let c=n(0)
            //     if(player[this.layer].auto2&&(upg('H',81))) {
            //         t=player[this.layer].harsh.max(1).log(10).max(1).log(10).add(1).pow(this.sc().pow(-1)).sub(1).ceil().max(getBuyableAmount(this.layer, this.id))
            //         c = this.cost(t)
            //         if (player[this.layer].harsh.gte(c)) setBuyableAmount(this.layer,this.id,t)}    
            //     },
            base(){   
                let b=n(1.01)
                return b},
            effect(x) { //.add(this.extra()) if(!upg('G',141))
                let ef = this.base().pow(x)
                return ef},
            display() { 
                return "GsR gain ^"+ format(this.base()) + " \n\
                Cost: " + format(this.cost()) + " QP \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: ^" + format(this.effect(),3)},
            unlocked() { return mil('I',9) }
        },
        33: {
            title: "Ib9", 
            cost(x) { 
                let cost = n(4).pow(x).mul(1e7)
                return cost
            },
            canAfford() { return player[this.layer].qolpoints.gte(this.cost()) },
            buy() {if(!n(challengeCompletions('I',22)).gte(5)) player[this.layer].qolpoints = player[this.layer].qolpoints.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            // bulk(){let t=n(0)
            //     let c=n(0)
            //     if(player[this.layer].auto2&&(upg('H',81))) {
            //         t=player[this.layer].harsh.max(1).log(10).max(1).log(10).add(1).pow(this.sc().pow(-1)).sub(1).ceil().max(getBuyableAmount(this.layer, this.id))
            //         c = this.cost(t)
            //         if (player[this.layer].harsh.gte(c)) setBuyableAmount(this.layer,this.id,t)}    
            //     },
            base(){   
                let b=n(0.96)
                return b},
            effect(x) { //.add(this.extra()) if(!upg('G',141))
                let ef = this.base().pow(x).max(0.3)
                return ef},
            display() { 
                return "bulk H req x"+ format(this.base()) + "(capped at 0.3) \n\
                Cost: " + format(this.cost()) + " QP \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: x" + format(this.effect(),3)},
            unlocked() { return mil('I',9) }
        },
    },
    challenges:{
        11: {
            name: "Ic1",
            completionLimit: n(10),
            challengeDescription: function() {
                return "the start part.<br> Completion: " +challengeCompletions(this.layer,this.id)+ "/10 <br> best time:"+player.I.chalbest[0]+ "s" },
            unlocked() { return (mil('I',4))},
            onEnter(){ player.I.time=n(0)},
            goal(){
                let ef=n(60).div(n(challengeCompletions(this.layer,this.id)).add(1).pow(0.6))
                if(n(challengeCompletions(this.layer,this.id)).gte(6)) ef=ef.div(n(challengeCompletions(this.layer,this.id)).pow(0.15))
                return ef
            },  
            onComplete(){
                player.I.chalbest[0]=player.I.chalbest[0].min(player.I.time)
            },          
            onExit() {doReset('I')
                player.I.time=n(0)
            },
            goalDescription:  function() {return 'ee30 points in '+format(this.goal())+'s reset time'},
            canComplete(){return (player.points.gte('ee30')&&!player.I.time.gte(this.goal()))},
            rewardDescription: "raise Gs eff.",
            rewardEffect() {
                let ef = n(challengeCompletions(this.layer,this.id)).pow(0.65)//.add(1)
                ef=ef.div(150).add(1)
                if (n(challengeCompletions(this.layer,this.id)).gte(1))  return ef
                else return n(1)
            },
            rewardDisplay() {return '^'+format(this.rewardEffect(),4)},
        },
        12: {
            name: "Ic2",
            completionLimit: n(10),
            challengeDescription: function() {
                return "the F dim part.<br> Completion: " +challengeCompletions(this.layer,this.id)+ "/10<br> best time:"+player.I.chalbest[1]+ "s"},
            unlocked() { return (mil('I',4))},
            onEnter(){ player.I.time=n(0)},
            goal(){
                let ef=n(200).div(n(challengeCompletions(this.layer,this.id)).add(1).pow(0.45))
                if(n(challengeCompletions(this.layer,this.id)).gte(6)) ef=ef.sub(n(challengeCompletions(this.layer,this.id)).sub(5).mul(8))
                return ef
            },       
            onComplete(){
                player.I.chalbest[1]=player.I.chalbest[1].min(player.I.time)
            },      
            onExit() {doReset('I')
                player.I.time=n(0)
            },
            goalDescription:  function() {return 'get G25 in '+format(this.goal())+'s reset time'},
            canComplete(){return (upg('G',55)&&!player.I.time.gte(this.goal()))},
            rewardDescription: "raise GsR gain.",
            rewardEffect() {
                let ef = n(challengeCompletions(this.layer,this.id)).add(1).pow(0.8)
                if(n(challengeCompletions(this.layer,this.id)).gte(6)) ef=n(challengeCompletions(this.layer,this.id)).add(1).pow(1.1)
                ef=ef.div(200).add(1)
                if(n(challengeCompletions(this.layer,this.id)).gte(1))  return ef
                else return n(1)
            },
            rewardDisplay() {return '^'+format(this.rewardEffect(),4)},
        },
        21: {
            name: "Ic3",
            completionLimit: n(10),
            challengeDescription: function() {
                return "the Gs part.<br>you start with ee1000 G.<br> Completion: " +challengeCompletions(this.layer,this.id)+ "/10<br> best time:"+player.I.chalbest[2]+ "s"},
            unlocked() { return (mil('I',7))},
            onEnter(){ player.I.time=n(0)
                player.G.points=n('ee1000')
                player.G.total=n('ee1000')
            },
            goal(){
                let ef=n(90).div(n(challengeCompletions(this.layer,this.id)).add(1).pow(0.4))
                if(n(challengeCompletions(this.layer,this.id)).gte(4)) ef=ef.sub(n(challengeCompletions(this.layer,this.id)).sub(3).mul(3).pow(0.8))
                if(n(challengeCompletions(this.layer,this.id)).gte(7)) ef=n(30).sub(n(challengeCompletions(this.layer,this.id)).sub(7).mul(6))
                if(n(challengeCompletions(this.layer,this.id)).gte(9)) ef=n(15)
                return ef
            },    
            onComplete(){
                player.I.chalbest[2]=player.I.chalbest[2].min(player.I.time)
            },         
            onExit() {doReset('I')
                player.I.time=n(0)
            },
            goalDescription:  function() {return 'get 17 H in '+format(this.goal())+'s reset time'},
            canComplete(){return (player.H.max.gte(17)&&!player.I.time.gte(this.goal()))},
            rewardDescription: "reduce bulk H req.",
            rewardEffect() {
                let ef = n(challengeCompletions(this.layer,this.id)).mul(0.06)
                ef=n(1).sub(ef)
                if (n(challengeCompletions(this.layer,this.id)).gte(1))  return ef
                else return n(1)
            },
            rewardDisplay() {return 'x'+format(this.rewardEffect())},
        },
        22: {
            name: "Ic4",
            completionLimit: n(5),
            challengeDescription: function() {
                return "the H part.<br>you start with 1F7 pts.<br> Completion: " +challengeCompletions(this.layer,this.id)+ "/5<br> best time:"+player.I.chalbest[3]+ "s"},
            unlocked() { return (mil('I',7))},
            onEnter(){ player.I.time=n(0)
                player.points=player.points.add(n(10).tetrate(8))
                //player.G.Gse=n('e1.5e8')
            },
            goal(){
                //let ef=n(200).sub(n(challengeCompletions(this.layer,this.id)).mul(40))
                let a=[n(200),n(130),n(90),n(45),n(25),n(20)]
                return a[n(challengeCompletions(this.layer,this.id))]
            },            
            onComplete(){
                player.I.chalbest[3]=player.I.chalbest[3].min(player.I.time)
            }, 
            onExit() {doReset('I')// shiftDown
                player.I.time=n(0)
            },
            goalDescription:  function() {return 'get G75 in '+format(this.goal())+'s reset time'},
            canComplete(){return (upg('G',155)&&!player.I.time.gte(this.goal()))},
            rewardDescription: "give more qol(hold shift to see).",
        },
    },
    comp(){
        let ef=n(0)
        for(let i in player[this.layer].challenges) ef=ef.add(challengeCompletions(this.layer,i))
        return ef
    },
    qb(){
        let ef=n(0)
        if(mil('I',2)&&player.I.total.gte(3)) ef=n(4).pow(player.I.total.sub(3).pow(0.85))
        if(mil('I',12)) ef=ef.max(n(3).pow(player.I.total.pow(0.9)))
        if(n(challengeCompletions('I',22)).gte(4)) ef=ef.pow(1.05)
        if(mil('I',3))  ef=ef.mul(buyableEffect('I',11))
        if(mil('I',10))  ef=ef.mul(tmp.I.m10ef)
        return ef
    },
    update(diff){
        player.I.time = player.I.time.add(diff)
        if (inChallenge('I',11)&&player.points.gte('ee30'))  player.I.chalbest[0]=player.I.chalbest[0].min(player.I.time)
        if (inChallenge('I',12)&&upg('G',55))  player.I.chalbest[1]=player.I.chalbest[1].min(player.I.time)
        if (inChallenge('I',21)&&player.H.max.gte('17'))  player.I.chalbest[2]=player.I.chalbest[2].min(player.I.time)
        if (inChallenge('I',22)&&upg('G',155))  player.I.chalbest[3]=player.I.chalbest[3].min(player.I.time)
        if (mil('I',2)&&!player.I.time.gte(10000))  player.I.qolpoints = player.I.qolpoints.add(tmp.I.qb.mul(diff))
    },
})