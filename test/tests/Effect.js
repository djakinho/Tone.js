/* global it, describe */

define(["tests/Core", "chai", "Tone/component/Recorder", "Tone/core/Master", "Tone/effect/Effect", "Tone/component/DryWet",
	"Tone/effect/FeedbackEffect", "Tone/signal/Signal", "Tone/effect/AutoPanner", "Tone/effect/AutoWah", "Tone/effect/BitCrusher",
	"Tone/effect/FeedbackDelay", "Tone/effect/PingPongDelay"], 
function(Tone, chai, Recorder, Master, Effect, DryWet, FeedbackEffect, Signal, AutoPanner, AutoWah, BitCrusher, 
	FeedbackDelay, PingPongDelay){

	var expect = chai.expect;

	Master.mute();

	//EFFECT
	describe("Tone.Effect", function(){

		it("can be created and disposed", function(){
			var e = new Effect();
			e.dispose();
		});

		it("has a dry/wet control", function(){
			var e = new Effect();
			expect(e.dryWet).is.instanceof(DryWet);
			e.dispose();
		});
	});

	//FEEDBACK EFFECT
	describe("Tone.FeedbackEffect", function(){

		it("can be created and disposed", function(){
			var fe = new FeedbackEffect();
			fe.dispose();
		});

		it("has a dry/wet control", function(){
			var e = new FeedbackEffect();
			expect(e.dryWet).is.instanceof(DryWet);
			e.dispose();
		});

		it("has a feedback control", function(){
			var e = new FeedbackEffect();
			expect(e.feedback).is.instanceof(Signal);
			e.dispose();
		});
	});

	//AUTOPANNER
	describe("Tone.AutoPanner", function(){

		it("can be created and disposed", function(){
			var ap = new AutoPanner();
			ap.dispose();
		});

		it("extends Tone.Effect", function(){
			var ap = new AutoPanner();
			expect(ap).is.instanceof(Effect);
			ap.dispose();
		});
	});

	//AUTOWAH
	describe("Tone.AutoWah", function(){

		it("can be created and disposed", function(){
			var aw = new AutoWah();
			aw.dispose();
		});

		it("extends Tone.Effect", function(){
			var aw = new AutoWah();
			expect(aw).is.instanceof(Effect);
			aw.dispose();
		});
	});

	//BitCrusher
	describe("Tone.BitCrusher", function(){

		it("can be created and disposed", function(){
			var bc = new BitCrusher();
			bc.dispose();
		});

		it("extends Tone.Effect", function(){
			var bc = new BitCrusher();
			expect(bc).is.instanceof(Effect);
			bc.dispose();
		});
	});

	//FEEDBACK DELAY
	describe("Tone.FeedbackDelay", function(){

		it("can be created and disposed", function(){
			var fd = new FeedbackDelay();
			fd.dispose();
		});

		it("extends Tone.FeedbackEffect", function(){
			var fd = new FeedbackDelay();
			expect(fd).is.instanceof(FeedbackEffect);
			fd.dispose();
		});
	});

	//PingPongDelay
	describe("Tone.PingPongDelay", function(){

		it("can be created and disposed", function(){
			var ppd = new PingPongDelay();
			ppd.dispose();
		});
	});
});
