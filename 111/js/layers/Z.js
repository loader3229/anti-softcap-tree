addLayer("Z", {
    name: "Z", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "Z", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FFFFFF",
    requires: new Decimal(1e100), // Can be a funct}ion that takes requirement increases into account
    resource: "Z", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
	base(){
		return new Decimal([1e100,1e150,1e175,1e200,1e225,1e260,"1e440","1e600","1e1250","1e2500","1e4500","1e9000","1e900000"][player.Z.points.toNumber()]);
	},
    exponent: n(1), // Prestige currency exponent
    row: "side", // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "z", description: "Z: Reset for Z points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    doReset(layer){
        if (layer=="Z") {
            layerDataReset("A");
            layerDataReset("B");
            layerDataReset("C");
            layerDataReset("D");
            layerDataReset("E");
            layerDataReset("F");
            layerDataReset("G");
            layerDataReset("H");
			if(player.Z.points.gte(4))player.A.challenges[11]=1;
			if(player.Z.points.gte(4))player.A.challenges[12]=1;
			if(player.Z.points.gte(4))player.A.challenges[21]=1;
			if(player.Z.points.gte(4))player.A.challenges[22]=1;
			if(player.Z.points.gte(4))player.A.challenges[31]=1;
			if(player.Z.points.gte(4))player.A.challenges[32]=1;
			if(player.Z.points.gte(8))player.A.challenges[41]=5;
			if(player.Z.points.gte(5))player.C.challenges[11]=1;
			if(player.Z.points.gte(5))player.C.challenges[12]=1;
			if(player.Z.points.gte(11))player.E.challenges[11]=3;
			if(player.Z.points.gte(11))player.E.challenges[12]=3;
			if(player.Z.points.gte(12))player.E.challenges[21]=3;
			if(player.Z.points.gte(12))player.E.challenges[22]=3;
			if(player.Z.points.gte(6))player.A.upgrades=[11, 12, 13, 14, 15, 21, 22, 23, 24, 25, 31, 32, 33, 34, 35, 41, 42, 43, 44, 45, 51, 52, 53, 54, 55, 61, 62, 63, 64, 65];
			if(player.Z.points.gte(7))player.B.upgrades=[11, 12, 13, 14, 15, 21, 22, 23, 24, 25, 31, 32, 33, 34, 35, 41, 42, 43, 44, 45, 51, 52, 53, 54, 55, 61, 62, 63, 64, 65, 71, 72, 73, 74, 75, 81, 82];
			if(player.Z.points.gte(10))player.B.milestones=['0','1','2','3','4','5','6','7'];
			if(player.Z.points.gte(10))player.C.milestones=['0','1','2','3'];
			if(player.Z.points.gte(12))player.D.milestones=['0','1','2','3','4'];
		}
    },
	update(){
		if(player.Z.points.gte(9)){
			let effective_B = player.B.points.add(1).mul(10);
            if (hasMilestone('B',1))effective_B=effective_B.mul(upgradeEffect('B',61));
                if (hasChallenge('E',31))effective_B=effective_B.mul(challengeEffect('E',31))
			if(player.Z.points.gte(11))effective_B=effective_B.mul(tmp.E.ekf);
			player.B.buyables[11]=player.B.buyables[11].max(effective_B.log(hasUpgrade('E',73)?2.6:hasUpgrade('E',43)?2.7:2.8).root(1.1).ceil().max(0));
			player.B.buyables[12]=player.B.buyables[12].max(effective_B.log(hasUpgrade('E',73)?7:hasUpgrade('E',43)?7.5:8).root(1.1).ceil().max(0));
			player.B.buyables[21]=player.B.buyables[21].max(effective_B.log(9).root(1.1).ceil().max(0));
			player.B.buyables[22]=player.B.buyables[22].max(effective_B.log(10).root(1.1).ceil().max(0));
			player.B.buyables[23]=player.B.buyables[23].max(effective_B.log(hasUpgrade('D',44)?800:hasUpgrade('E',62)?900:1000).root(1.2).ceil().max(0));
		}
	},
    milestones: {
        0: {requirementDescription: "1 Z",
            done() {return player[this.layer].points.gte(1)}, 
            effectDescription: "100x A/B passive, unlock D.",
        },
        1: {requirementDescription: "2 Z",
            done() {return player[this.layer].points.gte(2)}, 
            effectDescription: "100x A/B/C passive.",
        },
        2: {requirementDescription: "3 Z",
            done() {return player[this.layer].points.gte(3)}, 
            effectDescription: "100x A/B/C passive, 1x D passive.<br>cheaper B buyables, square B26 base effect.",
        },
        3: {requirementDescription: "4 Z",
            done() {return player[this.layer].points.gte(4)}, 
            effectDescription: "100x A/B/C/D passive. Start with first 6 A chall completed.<br>points^1.05. B35 is stronger.",
        },
        4: {requirementDescription: "5 Z",
            done() {return player[this.layer].points.gte(5)}, 
            effectDescription: "100x A/B/C/D passive. Start with first 2 C chall completed.<br>Reduce requirement of A/B/C/D to 1.<br>All mult to B26 applied to base. points^1.02.",
        },
        5: {requirementDescription: "6 Z",
            done() {return player[this.layer].points.gte(6)}, 
            effectDescription: "Start with all A upgrades. A9^15.",
        },
        6: {requirementDescription: "7 Z",
            done() {return player[this.layer].points.gte(7)}, 
            effectDescription: "Start with all B upgrades. cheaper B buyables.",
        },
        7: {requirementDescription: "8 Z",
            done() {return player[this.layer].points.gte(8)}, 
            effectDescription: "Start with Ac7 completed 5 times. Base of first 2 B buyables +1",
        },
        8: {requirementDescription: "9 Z",
            done() {return player[this.layer].points.gte(9)}, 
            effectDescription: "Autobuy Max B buyables. cheaper Bb3. change Bb5 formula. 10x E.",
        },
        9: {requirementDescription: "10 Z",
            done() {return player[this.layer].points.gte(10)}, 
            effectDescription: "Start with all B & C milestones. change Bb5 formula.<br>10x passive E and unlock Em. cheaper Eb4. Stronger E25.",
        },
        10: {requirementDescription: "11 Z",
            done() {return player[this.layer].points.gte(11)}, 
            effectDescription: "Start with first 2 E chall completed 3 times.<br>unlock Ek. cheaper Eb5-7.",
        },
        11: {requirementDescription: "12 Z",
            done() {return player[this.layer].points.gte(12)}, 
            effectDescription: "Start with Ec3-4 completed 3 times and all D milestones.<br>10x passive E and Reduce requirement of E to 1.<br>points^1.027 and Ec3-4 applied before powerer.<br>change Bb5 formula.",
        },
    },
})
