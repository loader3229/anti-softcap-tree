addLayer("F", {
    name: "F", 
    symbol: "F", 
    position: 1, 
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    passiveGeneration(){    let pg=0
        if (hasMilestone("F", 9)) pg=Decimal.add(pg,0.02)
        return pg},
    color: "#264321",
    requires: new Decimal('1e1024'), 
    resource: "F", 
    baseResource: "E", 
    baseAmount() {return player.E.points}, 
    type: "normal", 
    exponent: 0.004, 
    gainExp() {
        //let ef=new Decimal(1)
        //if (hasUpgrade('F',32)) ef=Decimal.add(ef,1.1)
        //if (hasUpgrade('F',33)) ef=Decimal.add(ef,1.1)
        return ef=new Decimal(1)
    },
    row: 3, 
    hotkeys: [
        {key: "f", description: "F: Reset for F points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){  if (player[this.layer].unlocked) return true
    else return (hasMilestone("E", 20))},
    gainMult() { 
        mult = new Decimal(1)
        if (hasUpgrade('F',21)) mult=Decimal.mul(mult,2)
        if (hasUpgrade('F',23)) mult=Decimal.mul(mult,upgradeEffect('F',23))
        if (hasUpgrade('F',32)) mult=Decimal.mul(mult,upgradeEffect('F',32))

        return mult
    },
    branches: ['E'],
    milestones: {
        0: {requirementDescription: "1 total F",
            done() {return player[this.layer].total.gte('1')}, 
            effectDescription: "keep A upg and chal,B mil,x1 E pas gain,x10 A/B/E.",
        },
        1: {requirementDescription: "2 total F",
            done() {return player[this.layer].total.gte('2')}, 
            effectDescription: "keep C/D upg and mil,E mil.",
        },
        2: {requirementDescription: "4 total F",
            done() {return player[this.layer].total.gte('4')}, 
            effectDescription: "bulk buy x2 B upg,B26 ^1.1,keep C chal.",
        },
        3: {requirementDescription: "6 total F",
            done() {return player[this.layer].total.gte('6')}, 
            effectDescription: "autobuy E upg.",
        },
        4: {requirementDescription: "15 total F",
            done() {return player[this.layer].total.gte('15')}, 
            effectDescription: "keep B/E upg.",
        },
        5: {requirementDescription: "50 total F",
            done() {return player[this.layer].total.gte('50')}, 
            effectDescription: "keep E chal.",
        },
        6: {requirementDescription: "160 total F",
            done() {return player[this.layer].total.gte('160')}, 
            effectDescription: "x10 bulk buy Eb1-3.",
        },
        7: {requirementDescription: "1.5e7 total F",
            done() {return player[this.layer].total.gte('1.5e7')}, 
            effectDescription: "Bb5 x1.025.",
        },
        8: {requirementDescription: "1e9 total F",
            done() {return player[this.layer].total.gte('1e9')}, 
            effectDescription: "x1e100 pts,unlock a chal.",
        },
        9: {requirementDescription: "1e26 total F",
            done() {return player[this.layer].total.gte('1e26')}, 
            effectDescription: "gain 2% F on reset/sec.",
        },
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
                unlocked() {return (hasMilestone("F",8))},
                content: ["challenges"]},
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
            description: function() {return '1e15x and ^1.0016 points \n\
                '+'layer F total: \n\
                '+ format(this.effect()) +'x'},            
            effect()  { 
                let ef = 1e15
                let exp = 0.5
                if (hasUpgrade('F',13)) ef=Decimal.mul(ef,1e30)
                if (hasUpgrade('F',15)) ef=Decimal.mul(ef,1e30)
                if (hasUpgrade('F',21)) ef=Decimal.mul(ef,1e30)
                if (hasUpgrade('F',25)) ef=Decimal.mul(ef,1e40)
                if (hasMilestone('F',8)) ef=Decimal.mul(ef,1e100)
                if (hasUpgrade('F',32)) ef=Decimal.mul(ef,1e111)
                if (hasUpgrade('F',34)) ef=Decimal.mul(ef,1e120)
                if (hasUpgrade('F',23)) exp=Decimal.add(exp,0.5)
                if (hasUpgrade('F',15)) ef=Decimal.pow(ef,1+(buyableEffect("E",21)-1)*exp)
                return ef;          
            },
            cost:new Decimal(1),
        },
        12: {
            title:'F2',
            description: "total F boost E.(x^3)",
            effect()  { 
                let ef = 3
                return player[this.layer].total.add(1).pow(ef);          
            },
            cost:new Decimal(1),
            effectDisplay() { return format(this.effect())+"x" }, 
            unlocked() { return (hasUpgrade(this.layer, 11))},
        },
        13: {
            title:'F3',
            description: "1e30x pts,autobuy B upgs",
            cost:new Decimal(1),
            unlocked() { return (hasUpgrade(this.layer, 12))},
        },
        14: {
            title:'F4',
            description: "^1.0012 pts,Eb1-3 base+0.3,Eb7 base+1",
            cost:new Decimal(2),
            unlocked() { return (hasUpgrade(this.layer, 13))},
        },
        15: {
            title:'F5',
            description: "1e30x pts,Eb4 applies to F(50%)",
            cost:new Decimal(4),
            unlocked() { return (hasUpgrade(this.layer, 14))},
        },
        21: {
            title:'F6',
            description: "1e30x pts,Eb4 applies to C/D at 100% eff,x2 F",
            cost:new Decimal(10),
            unlocked() { return (hasUpgrade(this.layer, 15))},
        },
        22: {
            title:'F7',
            description: "Eb4 x1.1,Eb scaling start 5 later.",
            cost:new Decimal(15),
            unlocked() { return (hasUpgrade(this.layer, 21))},
        },
        23: {
            title:'F8',
            description: "pts boosts F,F5 is 100%,Eb4 x1.1.",
            cost:new Decimal(30),
            effect()  { 
                let ef = player.points.add(10).log(10).div(4e4).add(1)
                return ef;
            },
            effectDisplay() { return format(this.effect())+"x" },
            unlocked() { return (hasUpgrade(this.layer, 22))},
        },
        24: {
            title:'F9',
            description: "Ec6 eff x1.5,Ec8 eff x1.1.",
            cost:new Decimal(120),
            unlocked() { return (hasUpgrade(this.layer, 23))},
        },
        25: {
            title:'F10',
            description: "1e40x pts,mil 5 applies to all E babs.",
            cost:new Decimal('1e6'),
            unlocked() { return (hasUpgrade(this.layer, 24))},
        },
        31: {
            title:'F11',
            description: "Bb sc start later based on F.",
            cost:new Decimal('1.5e8'),
            effect()  { 
                let ef = player.F.total.add(10).log(10).pow(0.9).mul(2)
                if (hasUpgrade('F',32)) ef=Decimal.mul(ef,1.25)
                if (hasUpgrade('F',34)) ef=Decimal.mul(ef,1.28)
                return ef;
            },
            effectDisplay() { return "+"+format(this.effect()) },
            unlocked() { return (hasUpgrade(this.layer, 25))},
        },
        32: {
            title:'F12',
            description: "1e111x pts,total F boost itself(^0.1)",
            cost:new Decimal('1e10'),
            effect()  { 
                let exp=0.1
                if (hasUpgrade('F',3)) exp=Decimal.add(exp,0.1)
                let ef = player.F.total.add(1).pow(exp)
                return ef;
            },
            unlocked() { return (hasUpgrade(this.layer, 31))},
        },
        33: {
            title:'F13',
            description: "F11 x1.25,F12 exp +0.1,F boost Bb5",
            cost:new Decimal('2e12'),
            effect()  { 
                let ef = player.F.total.add(10).log(10).pow(0.25).div(1.5)
                return ef;
            },
            effectDisplay() { return "+"+format(this.effect())+'%' },
            unlocked() { return (hasUpgrade(this.layer, 32))},
        },
        34: {
            title:'F14',
            description: "1e120x pts,Ek mul+0.4,F11 x1.28,nerf Bb scaling,bulk buy x5 Bb/Eb",
            cost:new Decimal('4e13'),
            unlocked() { return (hasUpgrade(this.layer, 33))},
        },
        35: {
            title:'F15',
            description: "Fc1 eff x1.25,Bb3-4 +5%,Eb4 +8%,buy max Eb5/8,fix Bb cost,and unlock ??(coming soon)",
            cost:new Decimal('3e20'),
            unlocked() { return (hasUpgrade(this.layer, 34))},
        },
    },
    challenges:{
        11: {//req F:2e9,9e12,1e17
            name: "Fc1",
            completionLimit: 3,
            challengeDescription: function() {
                return "B/E prod ^0.25. <br> Completion: " +challengeCompletions("F", 11) + "/3"},
            unlocked() { return (hasMilestone("F", 8))},
            goal(){
                if (challengeCompletions("F", 11) == 0) return Decimal.pow(10,5840);
                if (challengeCompletions("F", 11) == 1) return Decimal.pow(10,6440);
                if (challengeCompletions("F", 11) == 2) return Decimal.pow(10,7070);
            },            
            goalDescription:  function() {return format(this.goal())+' points'},
            canComplete(){return player.points.gte(this.goal())},
            rewardDescription: "Bb3-5 are stronger.",
            rewardEffect() {
                let ef = Decimal.mul(challengeCompletions("F", 11),0.8)
                if (hasUpgrade('F',35)) ef=Decimal.mul(ef,1.25)
                if (challengeCompletions("F", 11) >= 1)  return ef
                else return new Decimal(0)
            },
            rewardDisplay() {return '+'+format(this.rewardEffect())+"%"},
            },
    }
})