(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"WISHtoFALL_atlas_1", frames: [[0,0,1187,1866]]},
		{name:"WISHtoFALL_atlas_2", frames: [[0,0,1323,950],[0,952,1170,949]]},
		{name:"WISHtoFALL_atlas_3", frames: [[0,1854,1529,189],[0,1499,1529,353],[0,813,1038,662],[1040,813,947,684],[1208,0,651,619],[0,0,1206,811]]},
		{name:"WISHtoFALL_atlas_4", frames: [[1314,1424,121,34],[1927,1433,121,33],[2030,68,14,9],[1882,1394,121,37],[1692,1228,121,38],[2030,0,10,25],[1560,1417,121,36],[1392,1338,121,43],[1515,1317,121,45],[1392,1290,121,46],[1192,1351,121,41],[1637,1375,121,40],[1315,1383,121,39],[1638,1329,121,44],[123,966,121,47],[0,966,121,48],[2030,27,14,14],[1923,411,121,51],[1923,464,121,50],[1923,193,121,53],[1923,303,121,52],[1923,112,117,79],[1447,570,89,51],[1921,1268,124,79],[421,564,55,57],[2030,43,7,23],[2039,43,9,9],[1923,0,105,110],[1857,1124,149,142],[1192,1130,142,147],[0,564,419,400],[421,623,27,9],[450,623,27,9],[421,634,27,9],[450,634,27,9],[421,645,27,9],[450,645,27,9],[421,656,27,9],[450,656,27,9],[1931,664,27,9],[1960,664,27,9],[421,667,27,9],[450,667,27,9],[1931,675,27,9],[1960,675,27,9],[421,678,27,9],[450,678,27,9],[421,689,27,9],[450,689,27,9],[2012,691,27,9],[421,700,27,9],[450,700,27,9],[2012,702,27,9],[421,711,27,9],[450,711,27,9],[2012,713,27,9],[1931,717,27,9],[1960,717,27,9],[421,722,27,9],[450,722,27,9],[1989,724,27,9],[2018,724,27,9],[1931,728,27,9],[1960,728,27,9],[421,733,27,9],[450,733,27,9],[1989,735,27,9],[2018,735,27,9],[1931,739,27,9],[1960,739,27,9],[421,744,27,9],[450,744,27,9],[1989,746,27,9],[2018,746,27,9],[1931,750,27,9],[1960,750,27,9],[421,755,27,9],[450,755,27,9],[1989,757,27,9],[2018,757,27,9],[1931,761,27,9],[1960,761,27,9],[421,766,27,9],[450,766,27,9],[1989,768,27,9],[2018,768,27,9],[1931,772,27,9],[1960,772,27,9],[421,777,27,9],[450,777,27,9],[1989,779,27,9],[2018,779,27,9],[1931,783,27,9],[1960,783,27,9],[421,788,27,9],[450,788,27,9],[1989,790,27,9],[2018,790,27,9],[1931,794,27,9],[1960,794,27,9],[421,799,27,9],[450,799,27,9],[1989,801,27,9],[2018,801,27,9],[1931,805,27,9],[1960,805,27,9],[421,810,27,9],[450,810,27,9],[1989,812,27,9],[2018,812,27,9],[1931,816,27,9],[1960,816,27,9],[421,821,27,9],[450,821,27,9],[1989,823,27,9],[2018,823,27,9],[1931,827,27,9],[1960,827,27,9],[421,832,27,9],[450,832,27,9],[1989,834,27,9],[2018,834,27,9],[1931,838,27,9],[1960,838,27,9],[421,843,27,9],[450,843,27,9],[1989,845,27,9],[2018,845,27,9],[1931,849,27,9],[1960,849,27,9],[421,854,27,9],[450,854,27,9],[421,865,27,9],[450,865,27,9],[421,876,27,9],[450,876,27,9],[421,887,27,9],[450,887,27,9],[421,898,27,9],[450,898,27,9],[421,909,27,9],[450,909,27,9],[421,920,27,9],[450,920,27,9],[421,931,27,9],[450,931,27,9],[421,942,27,9],[450,942,27,9],[421,953,27,9],[450,953,27,9],[2010,619,32,70],[1149,972,27,9],[1447,512,105,56],[1805,1433,120,34],[1178,972,27,9],[1028,972,119,33],[1683,1417,120,36],[1192,1394,120,38],[1760,1375,120,40],[1515,1364,120,41],[368,966,120,46],[1438,1407,120,37],[1761,1329,120,44],[1883,1349,120,43],[246,966,120,47],[1923,516,121,50],[1931,619,77,43],[1923,357,121,52],[1923,568,121,49],[1923,248,121,53],[1637,623,292,241],[1637,866,391,127],[1637,995,391,127],[1149,1001,391,127],[1028,512,417,458],[1566,0,355,621],[1542,1124,313,102],[1336,1130,194,78],[490,0,536,510],[1447,623,188,376],[1028,0,536,510],[1931,691,79,24],[490,512,536,510],[1692,1268,227,59],[1336,1210,194,78],[1192,1290,198,59],[1532,1228,158,87],[0,1254,1190,205],[0,1024,1147,228],[0,0,488,562]]}
];


(lib.AnMovieClip = function(){
	this.currentSoundStreamInMovieclip;
	this.actionFrames = [];
	this.soundStreamDuration = new Map();
	this.streamSoundSymbolsList = [];

	this.gotoAndPlayForStreamSoundSync = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.gotoAndPlay = function(positionOrLabel){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(positionOrLabel);
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(this.currentFrame);
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		this.clearAllSoundStreams();
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
		this.clearAllSoundStreams();
	}
	this.startStreamSoundsForTargetedFrame = function(targetFrame){
		for(var index=0; index<this.streamSoundSymbolsList.length; index++){
			if(index <= targetFrame && this.streamSoundSymbolsList[index] != undefined){
				for(var i=0; i<this.streamSoundSymbolsList[index].length; i++){
					var sound = this.streamSoundSymbolsList[index][i];
					if(sound.endFrame > targetFrame){
						var targetPosition = Math.abs((((targetFrame - sound.startFrame)/lib.properties.fps) * 1000));
						var instance = playSound(sound.id);
						var remainingLoop = 0;
						if(sound.offset){
							targetPosition = targetPosition + sound.offset;
						}
						else if(sound.loop > 1){
							var loop = targetPosition /instance.duration;
							remainingLoop = Math.floor(sound.loop - loop);
							if(targetPosition == 0){ remainingLoop -= 1; }
							targetPosition = targetPosition % instance.duration;
						}
						instance.loop = remainingLoop;
						instance.position = Math.round(targetPosition);
						this.InsertIntoSoundStreamData(instance, sound.startFrame, sound.endFrame, sound.loop , sound.offset);
					}
				}
			}
		}
	}
	this.InsertIntoSoundStreamData = function(soundInstance, startIndex, endIndex, loopValue, offsetValue){ 
 		this.soundStreamDuration.set({instance:soundInstance}, {start: startIndex, end:endIndex, loop:loopValue, offset:offsetValue});
	}
	this.clearAllSoundStreams = function(){
		var keys = this.soundStreamDuration.keys();
		for(var i = 0;i<this.soundStreamDuration.size; i++){
			var key = keys.next().value;
			key.instance.stop();
		}
 		this.soundStreamDuration.clear();
		this.currentSoundStreamInMovieclip = undefined;
	}
	this.stopSoundStreams = function(currentFrame){
		if(this.soundStreamDuration.size > 0){
			var keys = this.soundStreamDuration.keys();
			for(var i = 0; i< this.soundStreamDuration.size ; i++){
				var key = keys.next().value; 
				var value = this.soundStreamDuration.get(key);
				if((value.end) == currentFrame){
					key.instance.stop();
					if(this.currentSoundStreamInMovieclip == key) { this.currentSoundStreamInMovieclip = undefined; }
					this.soundStreamDuration.delete(key);
				}
			}
		}
	}

	this.computeCurrentSoundStreamInstance = function(currentFrame){
		if(this.currentSoundStreamInMovieclip == undefined){
			if(this.soundStreamDuration.size > 0){
				var keys = this.soundStreamDuration.keys();
				var maxDuration = 0;
				for(var i=0;i<this.soundStreamDuration.size;i++){
					var key = keys.next().value;
					var value = this.soundStreamDuration.get(key);
					if(value.end > maxDuration){
						maxDuration = value.end;
						this.currentSoundStreamInMovieclip = key;
					}
				}
			}
		}
	}
	this.getDesiredFrame = function(currentFrame, calculatedDesiredFrame){
		for(var frameIndex in this.actionFrames){
			if((frameIndex > currentFrame) && (frameIndex < calculatedDesiredFrame)){
				return frameIndex;
			}
		}
		return calculatedDesiredFrame;
	}

	this.syncStreamSounds = function(){
		this.stopSoundStreams(this.currentFrame);
		this.computeCurrentSoundStreamInstance(this.currentFrame);
		if(this.currentSoundStreamInMovieclip != undefined){
			var soundInstance = this.currentSoundStreamInMovieclip.instance;
			if(soundInstance.position != 0){
				var soundValue = this.soundStreamDuration.get(this.currentSoundStreamInMovieclip);
				var soundPosition = (soundValue.offset?(soundInstance.position - soundValue.offset): soundInstance.position);
				var calculatedDesiredFrame = (soundValue.start)+((soundPosition/1000) * lib.properties.fps);
				if(soundValue.loop > 1){
					calculatedDesiredFrame +=(((((soundValue.loop - soundInstance.loop -1)*soundInstance.duration)) / 1000) * lib.properties.fps);
				}
				calculatedDesiredFrame = Math.floor(calculatedDesiredFrame);
				var deltaFrame = calculatedDesiredFrame - this.currentFrame;
				if(deltaFrame >= 2){
					this.gotoAndPlayForStreamSoundSync(this.getDesiredFrame(this.currentFrame,calculatedDesiredFrame));
				}
			}
		}
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_204 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_205 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_206 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_202 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_201 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_207 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_203 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_197 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_195 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_194 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_198 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_199 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_200 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_196 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_193 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_192 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_188 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_190 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_191 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_187 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_189 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_183 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_184 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_182 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_179 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_180 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_178 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_177 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_172 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_171 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_181 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_169 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_175 = function() {
	this.initialize(ss["WISHtoFALL_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_167 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_168 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_166 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_164 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_165 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_163 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_160 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_162 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_161 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_176 = function() {
	this.initialize(ss["WISHtoFALL_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_159 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_157 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_156 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_158 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_155 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_173 = function() {
	this.initialize(ss["WISHtoFALL_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_153 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_154 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_150 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_151 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_152 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_170 = function() {
	this.initialize(ss["WISHtoFALL_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_149 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_146 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_145 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_144 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_148 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_147 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_142 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_143 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_141 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_140 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_139 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_138 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_136 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_137 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_135 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_133 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_132 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_134 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_131 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_127 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_128 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_130 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_126 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_129 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_124 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_120 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_121 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_125 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_123 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_122 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_119 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_115 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_117 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_116 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_118 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_114 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_113 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_109 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_112 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_110 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_111 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_108 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_107 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_105 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_103 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_104 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_102 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_106 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_101 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_97 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_96 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_98 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_99 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_100 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_95 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_94 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_90 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_91 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_92 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_93 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_89 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_86 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_87 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_84 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_88 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_85 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_82 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_81 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_83 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_79 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_80 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_78 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_76 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_77 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_75 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_74 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_72 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_71 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_70 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_73 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(130);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_69 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(131);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_68 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(132);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_67 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(133);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_65 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(134);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_66 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(135);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_64 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(136);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_63 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(137);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_62 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(138);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_61 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(139);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_60 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(140);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_59 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(141);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_58 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(142);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_57 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(143);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_56 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(144);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_54 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(145);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_55 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(146);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_51 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(147);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_52 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(148);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_53 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(149);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_174 = function() {
	this.initialize(img.CachedBmp_174);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1138,3657);


(lib.CachedBmp_47 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(150);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_50 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(151);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_45 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(152);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_43 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(153);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_49 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(154);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_44 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(155);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_42 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(156);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_40 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(157);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_39 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(158);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_38 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(159);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_35 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(160);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_41 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(161);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_36 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(162);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_37 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(163);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_34 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(164);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_32 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(165);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_29 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(166);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_31 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(167);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_33 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(168);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_46 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(169);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_27 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(170);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_22 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(171);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_20 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(172);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_24 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(173);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_26 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(174);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_25 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(175);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_18 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(176);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(177);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_21 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(178);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(179);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_23 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(180);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(181);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_19 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(182);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(183);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(184);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(185);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["WISHtoFALL_atlas_3"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(186);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(187);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(188);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["WISHtoFALL_atlas_4"]);
	this.gotoAndStop(189);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["WISHtoFALL_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["WISHtoFALL_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["WISHtoFALL_atlas_3"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["WISHtoFALL_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.staticpupil = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_207();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.staticpupil, new cjs.Rectangle(0,0,5,12.5), null);


(lib.starmovelips = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_188();
	this.instance.setTransform(26.2,5.7,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_187();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_189();
	this.instance_2.setTransform(0,0.3,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_190();
	this.instance_3.setTransform(0,0.6,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_191();
	this.instance_4.setTransform(0,0.85,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_192();
	this.instance_5.setTransform(0,1.15,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_193();
	this.instance_6.setTransform(0,1.45,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_194();
	this.instance_7.setTransform(0,1.75,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_195();
	this.instance_8.setTransform(0,2,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_196();
	this.instance_9.setTransform(0,2.35,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_197();
	this.instance_10.setTransform(0,2.65,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_198();
	this.instance_11.setTransform(0,2.95,0.5,0.5);

	this.instance_12 = new lib.CachedBmp_199();
	this.instance_12.setTransform(0,3.2,0.5,0.5);

	this.instance_13 = new lib.CachedBmp_200();
	this.instance_13.setTransform(0,3.5,0.5,0.5);

	this.instance_14 = new lib.CachedBmp_201();
	this.instance_14.setTransform(0,3.8,0.5,0.5);

	this.instance_15 = new lib.CachedBmp_202();
	this.instance_15.setTransform(0,4.1,0.5,0.5);

	this.instance_16 = new lib.CachedBmp_203();
	this.instance_16.setTransform(0,4.35,0.5,0.5);

	this.instance_17 = new lib.CachedBmp_204();
	this.instance_17.setTransform(0,4.65,0.5,0.5);

	this.instance_18 = new lib.CachedBmp_206();
	this.instance_18.setTransform(26.2,8.5,0.5,0.5);

	this.instance_19 = new lib.CachedBmp_205();
	this.instance_19.setTransform(0,4.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_19},{t:this.instance_18}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60.5,26.5);


(lib.starlips = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_188();
	this.instance.setTransform(26.2,5.7,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_187();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.starlips, new cjs.Rectangle(0,0,60.5,26.5), null);


(lib.stareyes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_184();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(66));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,44.5,25.5);


(lib.chain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_178();
	this.instance.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.chain, new cjs.Rectangle(-0.5,-0.5,4.5,4.5), null);


(lib.Scene_1_ירח = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ירח
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(161.55,13.55,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(302).to({_off:false},0).wait(208));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_רקע_ים_לילה = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// רקע_ים_לילה
	this.instance = new lib.CachedBmp_7();
	this.instance.setTransform(-20.85,-23.3,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(302).to({_off:false},0).wait(208));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_רקע_חול = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// רקע_חול
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(-9.1,302.3,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(302).to({_off:false},0).wait(208));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_צוקים = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// צוקים
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(-24.4,78.45,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(302).to({_off:false},0).wait(208));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_text_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(200.1,160.25,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_9();
	this.instance_1.setTransform(226.8,160.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},95).to({state:[{t:this.instance_1}]},83).wait(124));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(240.65,169.8,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(327).to({_off:false},0).to({_off:true},101).wait(82));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_backgrond1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// backgrond1
	this.instance = new lib.CachedBmp_11();
	this.instance.setTransform(-34.75,-23.45,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(91).to({_off:false},0).wait(211));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_backgrond_yellow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// backgrond_yellow
	this.instance = new lib.CachedBmp_13();
	this.instance.setTransform(-20.6,-270.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(93));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.starbeach = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_177();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.starbeach, new cjs.Rectangle(0,0,52.5,55), null);


(lib.backgroundbeach2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_176();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.backgroundbeach2, new cjs.Rectangle(0,0,764.5,176.5), null);


(lib.backgrondbeach = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_175();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.backgrondbeach, new cjs.Rectangle(0,0,764.5,94.5), null);


(lib.whithstars = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_174();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.whithstars, new cjs.Rectangle(0,0,569,1828.5), null);


(lib.whitestars = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_173();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.whitestars, new cjs.Rectangle(0,0,519,331), null);


(lib.STARS_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_172();
	this.instance.setTransform(-0.5,-0.4,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_171();
	this.instance_1.setTransform(405.9,230.6,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_170();
	this.instance_2.setTransform(6,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.STARS_1, new cjs.Rectangle(-0.5,-0.4,480,342.4), null);


(lib.shycheek = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_49();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_50();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_51();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_52();
	this.instance_3.setTransform(0,0,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_53();
	this.instance_4.setTransform(0,0,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_54();
	this.instance_5.setTransform(0,0,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_55();
	this.instance_6.setTransform(0,0,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_56();
	this.instance_7.setTransform(0,0,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_57();
	this.instance_8.setTransform(0,0,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_58();
	this.instance_9.setTransform(0,0,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_59();
	this.instance_10.setTransform(0,0,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_60();
	this.instance_11.setTransform(0,0,0.5,0.5);

	this.instance_12 = new lib.CachedBmp_61();
	this.instance_12.setTransform(0,0,0.5,0.5);

	this.instance_13 = new lib.CachedBmp_62();
	this.instance_13.setTransform(0,0,0.5,0.5);

	this.instance_14 = new lib.CachedBmp_63();
	this.instance_14.setTransform(0,0,0.5,0.5);

	this.instance_15 = new lib.CachedBmp_64();
	this.instance_15.setTransform(0,0,0.5,0.5);

	this.instance_16 = new lib.CachedBmp_65();
	this.instance_16.setTransform(0,0,0.5,0.5);

	this.instance_17 = new lib.CachedBmp_66();
	this.instance_17.setTransform(0,0,0.5,0.5);

	this.instance_18 = new lib.CachedBmp_67();
	this.instance_18.setTransform(0,0,0.5,0.5);

	this.instance_19 = new lib.CachedBmp_68();
	this.instance_19.setTransform(0,0,0.5,0.5);

	this.instance_20 = new lib.CachedBmp_69();
	this.instance_20.setTransform(0,0,0.5,0.5);

	this.instance_21 = new lib.CachedBmp_70();
	this.instance_21.setTransform(0,0,0.5,0.5);

	this.instance_22 = new lib.CachedBmp_71();
	this.instance_22.setTransform(0,0,0.5,0.5);

	this.instance_23 = new lib.CachedBmp_72();
	this.instance_23.setTransform(0,0,0.5,0.5);

	this.instance_24 = new lib.CachedBmp_73();
	this.instance_24.setTransform(0,0,0.5,0.5);

	this.instance_25 = new lib.CachedBmp_74();
	this.instance_25.setTransform(0,0,0.5,0.5);

	this.instance_26 = new lib.CachedBmp_75();
	this.instance_26.setTransform(0,0,0.5,0.5);

	this.instance_27 = new lib.CachedBmp_76();
	this.instance_27.setTransform(0,0,0.5,0.5);

	this.instance_28 = new lib.CachedBmp_77();
	this.instance_28.setTransform(0,0,0.5,0.5);

	this.instance_29 = new lib.CachedBmp_78();
	this.instance_29.setTransform(0,0,0.5,0.5);

	this.instance_30 = new lib.CachedBmp_79();
	this.instance_30.setTransform(0,0,0.5,0.5);

	this.instance_31 = new lib.CachedBmp_80();
	this.instance_31.setTransform(0,0,0.5,0.5);

	this.instance_32 = new lib.CachedBmp_81();
	this.instance_32.setTransform(0,0,0.5,0.5);

	this.instance_33 = new lib.CachedBmp_82();
	this.instance_33.setTransform(0,0,0.5,0.5);

	this.instance_34 = new lib.CachedBmp_83();
	this.instance_34.setTransform(0,0,0.5,0.5);

	this.instance_35 = new lib.CachedBmp_84();
	this.instance_35.setTransform(0,0,0.5,0.5);

	this.instance_36 = new lib.CachedBmp_85();
	this.instance_36.setTransform(0,0,0.5,0.5);

	this.instance_37 = new lib.CachedBmp_86();
	this.instance_37.setTransform(0,0,0.5,0.5);

	this.instance_38 = new lib.CachedBmp_87();
	this.instance_38.setTransform(0,0,0.5,0.5);

	this.instance_39 = new lib.CachedBmp_88();
	this.instance_39.setTransform(0,0,0.5,0.5);

	this.instance_40 = new lib.CachedBmp_89();
	this.instance_40.setTransform(0,0,0.5,0.5);

	this.instance_41 = new lib.CachedBmp_90();
	this.instance_41.setTransform(0,0,0.5,0.5);

	this.instance_42 = new lib.CachedBmp_91();
	this.instance_42.setTransform(0,0,0.5,0.5);

	this.instance_43 = new lib.CachedBmp_92();
	this.instance_43.setTransform(0,0,0.5,0.5);

	this.instance_44 = new lib.CachedBmp_93();
	this.instance_44.setTransform(0,0,0.5,0.5);

	this.instance_45 = new lib.CachedBmp_94();
	this.instance_45.setTransform(0,0,0.5,0.5);

	this.instance_46 = new lib.CachedBmp_95();
	this.instance_46.setTransform(0,0,0.5,0.5);

	this.instance_47 = new lib.CachedBmp_96();
	this.instance_47.setTransform(0,0,0.5,0.5);

	this.instance_48 = new lib.CachedBmp_97();
	this.instance_48.setTransform(0,0,0.5,0.5);

	this.instance_49 = new lib.CachedBmp_98();
	this.instance_49.setTransform(0,0,0.5,0.5);

	this.instance_50 = new lib.CachedBmp_99();
	this.instance_50.setTransform(0,0,0.5,0.5);

	this.instance_51 = new lib.CachedBmp_100();
	this.instance_51.setTransform(0,0,0.5,0.5);

	this.instance_52 = new lib.CachedBmp_101();
	this.instance_52.setTransform(0,0,0.5,0.5);

	this.instance_53 = new lib.CachedBmp_102();
	this.instance_53.setTransform(0,0,0.5,0.5);

	this.instance_54 = new lib.CachedBmp_103();
	this.instance_54.setTransform(0,0,0.5,0.5);

	this.instance_55 = new lib.CachedBmp_104();
	this.instance_55.setTransform(0,0,0.5,0.5);

	this.instance_56 = new lib.CachedBmp_105();
	this.instance_56.setTransform(0,0,0.5,0.5);

	this.instance_57 = new lib.CachedBmp_106();
	this.instance_57.setTransform(0,0,0.5,0.5);

	this.instance_58 = new lib.CachedBmp_107();
	this.instance_58.setTransform(0,0,0.5,0.5);

	this.instance_59 = new lib.CachedBmp_108();
	this.instance_59.setTransform(0,0,0.5,0.5);

	this.instance_60 = new lib.CachedBmp_109();
	this.instance_60.setTransform(0,0,0.5,0.5);

	this.instance_61 = new lib.CachedBmp_110();
	this.instance_61.setTransform(0,0,0.5,0.5);

	this.instance_62 = new lib.CachedBmp_111();
	this.instance_62.setTransform(0,0,0.5,0.5);

	this.instance_63 = new lib.CachedBmp_112();
	this.instance_63.setTransform(0,0,0.5,0.5);

	this.instance_64 = new lib.CachedBmp_113();
	this.instance_64.setTransform(0,0,0.5,0.5);

	this.instance_65 = new lib.CachedBmp_114();
	this.instance_65.setTransform(0,0,0.5,0.5);

	this.instance_66 = new lib.CachedBmp_115();
	this.instance_66.setTransform(0,0,0.5,0.5);

	this.instance_67 = new lib.CachedBmp_116();
	this.instance_67.setTransform(0,0,0.5,0.5);

	this.instance_68 = new lib.CachedBmp_117();
	this.instance_68.setTransform(0,0,0.5,0.5);

	this.instance_69 = new lib.CachedBmp_118();
	this.instance_69.setTransform(0,0,0.5,0.5);

	this.instance_70 = new lib.CachedBmp_119();
	this.instance_70.setTransform(0,0,0.5,0.5);

	this.instance_71 = new lib.CachedBmp_120();
	this.instance_71.setTransform(0,0,0.5,0.5);

	this.instance_72 = new lib.CachedBmp_121();
	this.instance_72.setTransform(0,0,0.5,0.5);

	this.instance_73 = new lib.CachedBmp_122();
	this.instance_73.setTransform(0,0,0.5,0.5);

	this.instance_74 = new lib.CachedBmp_123();
	this.instance_74.setTransform(0,0,0.5,0.5);

	this.instance_75 = new lib.CachedBmp_124();
	this.instance_75.setTransform(0,0,0.5,0.5);

	this.instance_76 = new lib.CachedBmp_125();
	this.instance_76.setTransform(0,0,0.5,0.5);

	this.instance_77 = new lib.CachedBmp_126();
	this.instance_77.setTransform(0,0,0.5,0.5);

	this.instance_78 = new lib.CachedBmp_127();
	this.instance_78.setTransform(0,0,0.5,0.5);

	this.instance_79 = new lib.CachedBmp_128();
	this.instance_79.setTransform(0,0,0.5,0.5);

	this.instance_80 = new lib.CachedBmp_129();
	this.instance_80.setTransform(0,0,0.5,0.5);

	this.instance_81 = new lib.CachedBmp_130();
	this.instance_81.setTransform(0,0,0.5,0.5);

	this.instance_82 = new lib.CachedBmp_131();
	this.instance_82.setTransform(0,0,0.5,0.5);

	this.instance_83 = new lib.CachedBmp_132();
	this.instance_83.setTransform(0,0,0.5,0.5);

	this.instance_84 = new lib.CachedBmp_133();
	this.instance_84.setTransform(0,0,0.5,0.5);

	this.instance_85 = new lib.CachedBmp_134();
	this.instance_85.setTransform(0,0,0.5,0.5);

	this.instance_86 = new lib.CachedBmp_135();
	this.instance_86.setTransform(0,0,0.5,0.5);

	this.instance_87 = new lib.CachedBmp_136();
	this.instance_87.setTransform(0,0,0.5,0.5);

	this.instance_88 = new lib.CachedBmp_137();
	this.instance_88.setTransform(0,0,0.5,0.5);

	this.instance_89 = new lib.CachedBmp_138();
	this.instance_89.setTransform(0,0,0.5,0.5);

	this.instance_90 = new lib.CachedBmp_139();
	this.instance_90.setTransform(0,0,0.5,0.5);

	this.instance_91 = new lib.CachedBmp_140();
	this.instance_91.setTransform(0,0,0.5,0.5);

	this.instance_92 = new lib.CachedBmp_141();
	this.instance_92.setTransform(0,0,0.5,0.5);

	this.instance_93 = new lib.CachedBmp_142();
	this.instance_93.setTransform(0,0,0.5,0.5);

	this.instance_94 = new lib.CachedBmp_143();
	this.instance_94.setTransform(0,0,0.5,0.5);

	this.instance_95 = new lib.CachedBmp_144();
	this.instance_95.setTransform(0,0,0.5,0.5);

	this.instance_96 = new lib.CachedBmp_145();
	this.instance_96.setTransform(0,0,0.5,0.5);

	this.instance_97 = new lib.CachedBmp_146();
	this.instance_97.setTransform(0,0,0.5,0.5);

	this.instance_98 = new lib.CachedBmp_147();
	this.instance_98.setTransform(0,0,0.5,0.5);

	this.instance_99 = new lib.CachedBmp_148();
	this.instance_99.setTransform(0,0,0.5,0.5);

	this.instance_100 = new lib.CachedBmp_149();
	this.instance_100.setTransform(0,0,0.5,0.5);

	this.instance_101 = new lib.CachedBmp_150();
	this.instance_101.setTransform(0,0,0.5,0.5);

	this.instance_102 = new lib.CachedBmp_151();
	this.instance_102.setTransform(0,0,0.5,0.5);

	this.instance_103 = new lib.CachedBmp_152();
	this.instance_103.setTransform(0,0,0.5,0.5);

	this.instance_104 = new lib.CachedBmp_153();
	this.instance_104.setTransform(0,0,0.5,0.5);

	this.instance_105 = new lib.CachedBmp_154();
	this.instance_105.setTransform(0,0,0.5,0.5);

	this.instance_106 = new lib.CachedBmp_155();
	this.instance_106.setTransform(0,0,0.5,0.5);

	this.instance_107 = new lib.CachedBmp_156();
	this.instance_107.setTransform(0,0,0.5,0.5);

	this.instance_108 = new lib.CachedBmp_157();
	this.instance_108.setTransform(0,0,0.5,0.5);

	this.instance_109 = new lib.CachedBmp_158();
	this.instance_109.setTransform(0,0,0.5,0.5);

	this.instance_110 = new lib.CachedBmp_159();
	this.instance_110.setTransform(0,0,0.5,0.5);

	this.instance_111 = new lib.CachedBmp_160();
	this.instance_111.setTransform(0,0,0.5,0.5);

	this.instance_112 = new lib.CachedBmp_161();
	this.instance_112.setTransform(0,0,0.5,0.5);

	this.instance_113 = new lib.CachedBmp_162();
	this.instance_113.setTransform(0,0,0.5,0.5);

	this.instance_114 = new lib.CachedBmp_163();
	this.instance_114.setTransform(0,0,0.5,0.5);

	this.instance_115 = new lib.CachedBmp_164();
	this.instance_115.setTransform(0,0,0.5,0.5);

	this.instance_116 = new lib.CachedBmp_165();
	this.instance_116.setTransform(0,0,0.5,0.5);

	this.instance_117 = new lib.CachedBmp_166();
	this.instance_117.setTransform(0,0,0.5,0.5);

	this.instance_118 = new lib.CachedBmp_167();
	this.instance_118.setTransform(0,0,0.5,0.5);

	this.instance_119 = new lib.CachedBmp_168();
	this.instance_119.setTransform(0,0,0.5,0.5);

	this.instance_120 = new lib.CachedBmp_169();
	this.instance_120.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_62}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_65}]},1).to({state:[{t:this.instance_66}]},1).to({state:[{t:this.instance_67}]},1).to({state:[{t:this.instance_68}]},1).to({state:[{t:this.instance_69}]},1).to({state:[{t:this.instance_70}]},1).to({state:[{t:this.instance_71}]},1).to({state:[{t:this.instance_72}]},1).to({state:[{t:this.instance_73}]},1).to({state:[{t:this.instance_74}]},1).to({state:[{t:this.instance_75}]},1).to({state:[{t:this.instance_76}]},1).to({state:[{t:this.instance_77}]},1).to({state:[{t:this.instance_78}]},1).to({state:[{t:this.instance_79}]},1).to({state:[{t:this.instance_80}]},1).to({state:[{t:this.instance_81}]},1).to({state:[{t:this.instance_82}]},1).to({state:[{t:this.instance_83}]},1).to({state:[{t:this.instance_84}]},1).to({state:[{t:this.instance_85}]},1).to({state:[{t:this.instance_86}]},1).to({state:[{t:this.instance_87}]},1).to({state:[{t:this.instance_88}]},1).to({state:[{t:this.instance_89}]},1).to({state:[{t:this.instance_90}]},1).to({state:[{t:this.instance_91}]},1).to({state:[{t:this.instance_92}]},1).to({state:[{t:this.instance_93}]},1).to({state:[{t:this.instance_94}]},1).to({state:[{t:this.instance_95}]},1).to({state:[{t:this.instance_96}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_98}]},1).to({state:[{t:this.instance_99}]},1).to({state:[{t:this.instance_100}]},1).to({state:[{t:this.instance_101}]},1).to({state:[{t:this.instance_102}]},1).to({state:[{t:this.instance_103}]},1).to({state:[{t:this.instance_104}]},1).to({state:[{t:this.instance_105}]},1).to({state:[{t:this.instance_106}]},1).to({state:[{t:this.instance_107}]},1).to({state:[{t:this.instance_108}]},1).to({state:[{t:this.instance_109}]},1).to({state:[{t:this.instance_110}]},1).to({state:[{t:this.instance_111}]},1).to({state:[{t:this.instance_112}]},1).to({state:[{t:this.instance_113}]},1).to({state:[{t:this.instance_114}]},1).to({state:[{t:this.instance_115}]},1).to({state:[{t:this.instance_116}]},1).to({state:[{t:this.instance_117}]},1).to({state:[{t:this.instance_118}]},1).to({state:[{t:this.instance_119}]},1).to({state:[{t:this.instance_120}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13.5,4.5);


(lib.regularchik = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_49();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.regularchik, new cjs.Rectangle(0,0,13.5,4.5), null);


(lib.pupilsastic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_47();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pupilsastic, new cjs.Rectangle(0,0,16,35), null);


(lib.lipsstatic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_46();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lipsstatic, new cjs.Rectangle(0,0,60.5,26.5), null);


(lib.lipsshy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_45();
	this.instance.setTransform(-12,-4.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lipsshy, new cjs.Rectangle(-12,-4,52.5,28), null);


(lib.lipsmova = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_46();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_31();
	this.instance_1.setTransform(0,0.4,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_32();
	this.instance_2.setTransform(0,0.8,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_33();
	this.instance_3.setTransform(0,1.2,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_34();
	this.instance_4.setTransform(0,1.55,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_35();
	this.instance_5.setTransform(0,1.95,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_36();
	this.instance_6.setTransform(0,2.35,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_37();
	this.instance_7.setTransform(0,2.75,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_38();
	this.instance_8.setTransform(0,3.15,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_39();
	this.instance_9.setTransform(0,3.55,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_40();
	this.instance_10.setTransform(0,3.95,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_41();
	this.instance_11.setTransform(0,4.3,0.5,0.5);

	this.instance_12 = new lib.CachedBmp_42();
	this.instance_12.setTransform(0,4.7,0.5,0.5);

	this.instance_13 = new lib.CachedBmp_43();
	this.instance_13.setTransform(0,5.1,0.5,0.5);

	this.instance_14 = new lib.CachedBmp_44();
	this.instance_14.setTransform(0,5.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60.5,26.5);


(lib.eyescocava = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_29();
	this.instance.setTransform(-151.6,-30.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(34).to({y:-28.1},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151.6,-30.1,38.5,23.5);


(lib.emptybubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_27();
	this.instance.setTransform(0,0,0.4246,0.4246);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.emptybubble, new cjs.Rectangle(0,0,124,102.4), null);


(lib.light = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_25();
	this.instance.setTransform(-46,32.95,0.3536,0.3536);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46,33,125.6,219.6);


(lib.buttonstart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_20();
	this.instance.setTransform(31.25,90.85,0.4004,0.4004);

	this.instance_1 = new lib.CachedBmp_19();
	this.instance_1.setTransform(0,0,0.4004,0.4004);

	this.instance_2 = new lib.CachedBmp_22();
	this.instance_2.setTransform(31.25,90.85,0.4004,0.4004);

	this.instance_3 = new lib.CachedBmp_21();
	this.instance_3.setTransform(0,0,0.4004,0.4004);

	this.instance_4 = new lib.CachedBmp_24();
	this.instance_4.setTransform(31.25,90.85,0.4004,0.4004);

	this.instance_5 = new lib.CachedBmp_23();
	this.instance_5.setTransform(0,0,0.4004,0.4004);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_5},{t:this.instance_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,214.6,204.2);


(lib.buttonend = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_18();
	this.instance.setTransform(-8.7,102.85,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_17();
	this.instance_1.setTransform(-94.35,-34.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.3,-34.6,325.5,309.5);


(lib.bodylight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.CachedBmp_14();
	this.instance.setTransform(-82.5,-79.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.instance_1 = new lib.CachedBmp_15();
	this.instance_1.setTransform(-82.5,-79.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer_1
	this.instance_2 = new lib.CachedBmp_16();
	this.instance_2.setTransform(-80.95,-247.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.5,-247.9,97,207.5);


(lib.___Camera___ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-276,-201,552,402);


(lib.fullnecklace = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.chain();
	this.instance.setTransform(77.7,13.7,1,1,0,0,0,1.8,1.8);

	this.instance_1 = new lib.chain();
	this.instance_1.setTransform(74.5,16.75,1,1,0,0,0,1.8,1.8);

	this.instance_2 = new lib.chain();
	this.instance_2.setTransform(85.25,7.1,1,1,0,0,0,1.8,1.8);

	this.instance_3 = new lib.chain();
	this.instance_3.setTransform(81.3,10.25,1,1,0,0,0,1.8,1.8);

	this.instance_4 = new lib.chain();
	this.instance_4.setTransform(65.7,20.85,1,1,0,0,0,1.8,1.8);

	this.instance_5 = new lib.chain();
	this.instance_5.setTransform(70.9,18.7,1,1,0,0,0,1.8,1.8);

	this.instance_6 = new lib.chain();
	this.instance_6.setTransform(60.8,23.35,1,1,0,0,0,1.8,1.8);

	this.instance_7 = new lib.chain();
	this.instance_7.setTransform(45.95,27,1,1,0,0,0,1.8,1.8);

	this.instance_8 = new lib.chain();
	this.instance_8.setTransform(51.3,26.5,1,1,0,0,0,1.8,1.8);

	this.instance_9 = new lib.chain();
	this.instance_9.setTransform(56.3,25.35,1,1,0,0,0,1.8,1.8);

	this.instance_10 = new lib.chain();
	this.instance_10.setTransform(40.85,26.35,1,1,0,0,0,1.8,1.8);

	this.instance_11 = new lib.chain();
	this.instance_11.setTransform(36.75,26.3,1,1,0,0,0,1.8,1.8);

	this.instance_12 = new lib.chain();
	this.instance_12.setTransform(32.65,24.85,1,1,0,0,0,1.8,1.8);

	this.instance_13 = new lib.chain();
	this.instance_13.setTransform(28.1,23.85,1,1,0,0,0,1.8,1.8);

	this.instance_14 = new lib.chain();
	this.instance_14.setTransform(23.5,22.35,1,1,0,0,0,1.8,1.8);

	this.instance_15 = new lib.chain();
	this.instance_15.setTransform(18.4,20.4,1,1,0,0,0,1.8,1.8);

	this.instance_16 = new lib.chain();
	this.instance_16.setTransform(4.3,5.45,1,1,0,0,0,1.8,1.8);

	this.instance_17 = new lib.chain();
	this.instance_17.setTransform(19.4,2.2,1,1,0,0,0,13.3,-5.1);

	this.instance_18 = new lib.chain();
	this.instance_18.setTransform(11.15,12.75,1,1,0,0,0,1.8,1.8);

	this.instance_19 = new lib.chain();
	this.instance_19.setTransform(14.8,16.75,1,1,0,0,0,1.8,1.8);

	this.instance_20 = new lib.chain();
	this.instance_20.setTransform(1.8,1.8,1,1,0,0,0,1.8,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fullnecklace, new cjs.Rectangle(-0.5,-0.5,88,29.7), null);


(lib.Scene_1_כוכבי_ים = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// כוכבי_ים
	this.instance = new lib.starbeach();
	this.instance.setTransform(506.1,329.7,0.2371,0.2371,0,0,0,26.2,27.4);

	this.instance_1 = new lib.starbeach();
	this.instance_1.setTransform(486.1,352.55,0.2371,0.2371,0,0,0,26.2,27.4);

	this.instance_2 = new lib.starbeach();
	this.instance_2.setTransform(453.65,393.45,0.2371,0.2371,0,0,0,26.2,27.4);

	this.instance_3 = new lib.starbeach();
	this.instance_3.setTransform(441.25,367.4,0.2371,0.2371,0,0,0,26.2,27.4);

	this.instance_4 = new lib.starbeach();
	this.instance_4.setTransform(471.75,323.2,0.2371,0.2371,0,0,0,26.2,27.4);

	this.instance_5 = new lib.starbeach();
	this.instance_5.setTransform(15.35,378.65,0.2371,0.2371,0,0,0,26.2,27.4);

	this.instance_6 = new lib.starbeach();
	this.instance_6.setTransform(47.85,327.7,0.2371,0.2371,0,0,0,26.2,27.4);

	this.instance_7 = new lib.starbeach();
	this.instance_7.setTransform(102.7,383.65,0.2371,0.2371,0,0,0,26.2,27.4);

	this.instance_8 = new lib.starbeach();
	this.instance_8.setTransform(84.85,360.45,0.2371,0.2371,0,0,0,26.2,27.4);

	this.instance_9 = new lib.starbeach();
	this.instance_9.setTransform(72.45,339.5,0.2371,0.2371,0,0,0,26.2,27.4);

	this.instance_10 = new lib.starbeach();
	this.instance_10.setTransform(47.85,386.05,0.2371,0.2371,0,0,0,26.2,27.4);

	this.instance_11 = new lib.starbeach();
	this.instance_11.setTransform(219.4,339.5,0.2371,0.2371,0,0,0,26.2,27.4);

	this.instance_12 = new lib.starbeach();
	this.instance_12.setTransform(115.1,360.45,0.2371,0.2371,0,0,0,26.2,27.4);

	this.instance_13 = new lib.starbeach();
	this.instance_13.setTransform(102.7,339.5,0.2371,0.2371,0,0,0,26.2,27.4);

	this.instance_14 = new lib.starbeach();
	this.instance_14.setTransform(191.65,386.05,0.2371,0.2371,0,0,0,26.2,27.4);

	this.instance_15 = new lib.starbeach();
	this.instance_15.setTransform(460.3,352.55,0.2017,0.2371,0,0,0,26.3,27.4);

	this.instance_16 = new lib.starbeach();
	this.instance_16.setTransform(533.6,383.65,0.2371,0.2371,0,0,0,26.2,27.4);

	this.instance_17 = new lib.starbeach();
	this.instance_17.setTransform(441.25,334.35,0.2371,0.2371,0,0,0,26.2,27.4);

	this.instance_18 = new lib.starbeach();
	this.instance_18.setTransform(378.95,387.65,0.2371,0.2371,0,0,0,26.2,27.4);

	this.instance_19 = new lib.starbeach();
	this.instance_19.setTransform(411.55,365.6,0.2371,0.2371,0,0,0,26.2,27.4);

	this.instance_20 = new lib.starbeach();
	this.instance_20.setTransform(406,334.35,0.2371,0.2371,0,0,0,26.2,27.4);

	this.instance_21 = new lib.starbeach();
	this.instance_21.setTransform(143.55,375.5,0.2371,0.2371,0,0,0,26.2,27.4);

	this.instance_22 = new lib.starbeach();
	this.instance_22.setTransform(143.55,339.5,0.2371,0.2371,0,0,0,26.2,27.4);

	this.instance_23 = new lib.starbeach();
	this.instance_23.setTransform(381.9,362.45,0.2371,0.2371,0,0,0,26.2,27.4);

	this.instance_24 = new lib.starbeach();
	this.instance_24.setTransform(360.9,334.35,0.2371,0.2371,0,0,0,26.2,27.4);

	this.instance_25 = new lib.starbeach();
	this.instance_25.setTransform(353.45,370.6,0.2371,0.2371,0,0,0,26.2,27.4);

	this.instance_26 = new lib.starbeach();
	this.instance_26.setTransform(336.75,347.4,0.2371,0.2371,0,0,0,26.2,27.4);

	this.instance_27 = new lib.starbeach();
	this.instance_27.setTransform(235.75,386.05,0.2371,0.2371,0,0,0,26.2,27.4);

	this.instance_28 = new lib.starbeach();
	this.instance_28.setTransform(260.3,339.5,0.2371,0.2371,0,0,0,26.2,27.4);

	this.instance_29 = new lib.starbeach();
	this.instance_29.setTransform(324.35,373.5,0.2371,0.2371,0,0,0,26.2,27.4);

	this.instance_30 = new lib.starbeach();
	this.instance_30.setTransform(174.6,365.6,0.2371,0.2371,0,0,0,26.2,27.4);

	this.instance_31 = new lib.starbeach();
	this.instance_31.setTransform(179.25,339.5,0.2371,0.2371,0,0,0,26.2,27.4);

	this.instance_32 = new lib.starbeach();
	this.instance_32.setTransform(285.85,380.45,0.2371,0.2371,0,0,0,26.2,27.4);

	this.instance_33 = new lib.starbeach();
	this.instance_33.setTransform(298.25,349.4,0.2371,0.2371,0,0,0,26.2,27.4);

	this.instance_34 = new lib.starbeach();
	this.instance_34.setTransform(255.15,365.6,0.2371,0.2371,0,0,0,26.2,27.4);

	this.instance_35 = new lib.starbeach();
	this.instance_35.setTransform(219.4,360.45,0.2371,0.2371,0,0,0,26.2,27.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},302).wait(208));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_ים_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ים_3
	this.instance = new lib.backgroundbeach2();
	this.instance.setTransform(295.85,225.35,1,1,0,0,0,382.3,88.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(302).to({_off:false},0).wait(1).to({regY:88.3,x:291.45,y:225.45},0).wait(1).to({x:287.05},0).wait(1).to({x:282.65},0).wait(1).to({x:278.25},0).wait(1).to({x:273.85},0).wait(1).to({x:269.45},0).wait(1).to({x:274.3},0).wait(1).to({x:279.1},0).wait(1).to({x:283.95},0).wait(1).to({x:288.75},0).wait(1).to({x:293.6},0).wait(1).to({x:298.4},0).wait(1).to({x:303.25},0).wait(1).to({x:308.05},0).wait(1).to({x:312.9},0).wait(1).to({x:317.7},0).wait(1).to({x:315.25},0).wait(1).to({x:312.8},0).wait(1).to({x:310.35},0).wait(1).to({x:307.85},0).wait(1).to({x:305.4},0).wait(1).to({x:302.95},0).wait(1).to({x:300.5},0).wait(1).to({x:298},0).wait(1).to({x:295.55},0).wait(1).to({x:293.1},0).wait(1).to({x:290.65},0).wait(1).to({x:288.15},0).wait(1).to({x:291},0).wait(1).to({x:293.8},0).wait(1).to({x:296.65},0).wait(1).to({x:299.45},0).wait(1).to({x:302.3},0).wait(1).to({x:305.1},0).wait(1).to({x:307.95},0).wait(1).to({x:310.75},0).wait(1).to({x:313.6},0).wait(1).to({x:316.4},0).wait(1).to({x:311.65},0).wait(1).to({x:306.9},0).wait(1).to({x:302.15},0).wait(1).to({x:297.4},0).wait(1).to({x:292.65},0).wait(1).to({x:287.9},0).wait(1).to({x:283.15},0).wait(1).to({x:278.4},0).wait(1).to({x:273.65},0).wait(1).to({x:278.8},0).wait(1).to({x:283.9},0).wait(1).to({x:289.05},0).wait(1).to({x:294.15},0).wait(1).to({x:299.3},0).wait(1).to({x:304.4},0).wait(1).to({x:309.55},0).wait(1).to({x:314.65},0).wait(1).to({x:308.4,y:226.8},0).wait(1).to({x:302.1,y:228.2},0).wait(1).to({x:295.8,y:229.55},0).wait(1).to({x:289.5,y:230.95},0).wait(1).to({x:283.2,y:232.3},0).wait(1).to({x:276.9,y:233.7},0).wait(1).to({x:270.6,y:235.1},0).wait(1).to({x:276.75,y:233.75},0).wait(1).to({x:282.85,y:232.45},0).wait(1).to({x:289,y:231.15},0).wait(1).to({x:295.1,y:229.85},0).wait(1).to({x:301.2,y:228.55},0).wait(1).to({x:307.35,y:227.25},0).wait(1).to({x:313.45,y:225.95},0).wait(1).to({x:319.55,y:224.65},0).wait(1).to({x:313.05,y:225.3},0).wait(1).to({x:306.55,y:225.95},0).wait(1).to({x:300.05,y:226.6},0).wait(1).to({x:293.55,y:227.25},0).wait(1).to({x:287.05,y:227.9},0).wait(1).to({x:280.5,y:228.55},0).wait(1).to({x:278.95,y:230.15},0).wait(1).to({x:277.4,y:231.75},0).wait(1).to({x:275.85,y:233.35},0).wait(1).to({x:274.3,y:234.95},0).wait(1).to({x:272.75,y:236.55},0).wait(1).to({x:271.2,y:238.15},0).wait(1).to({x:269.6,y:239.75},0).wait(1).to({x:273.35,y:239},0).wait(1).to({x:277.05,y:238.3},0).wait(1).to({x:280.75,y:237.55},0).wait(1).to({x:284.5,y:236.85},0).wait(1).to({x:288.2,y:236.1},0).wait(1).to({x:291.9,y:235.4},0).wait(1).to({x:295.6,y:234.7},0).wait(1).to({x:289.85,y:233.25},0).wait(1).to({x:284.05,y:231.8},0).wait(1).to({x:278.25,y:230.35},0).wait(1).to({x:272.5,y:228.95},0).wait(1).to({x:266.7,y:227.5},0).wait(1).to({x:260.9,y:226.05},0).wait(1).to({x:255.1,y:224.65},0).wait(1).to({x:260.2},0).wait(1).to({x:265.3},0).wait(1).to({x:270.35},0).wait(1).to({x:275.45},0).wait(1).to({x:280.5},0).wait(1).to({x:285.6},0).wait(1).to({x:290.7},0).wait(1).to({x:295.75},0).wait(1).to({x:300.85},0).wait(1).to({x:305.9},0).wait(1).to({x:298.65,y:227.45},0).wait(1).to({x:291.35,y:230.3},0).wait(1).to({x:284.05,y:233.15},0).wait(1).to({x:276.8,y:235.95},0).wait(1).to({x:269.5,y:238.8},0).wait(1).to({x:262.2,y:241.65},0).wait(1).to({y:240},0).wait(1).to({y:238.35},0).wait(1).to({y:236.75},0).wait(1).to({y:235.1},0).wait(1).to({y:233.45},0).wait(1).to({y:231.85},0).wait(1).to({y:230.2},0).wait(1).to({y:228.6},0).wait(1).to({x:265.3,y:231.2},0).wait(1).to({x:268.4,y:233.8},0).wait(1).to({x:271.5,y:236.45},0).wait(1).to({x:274.6,y:239.05},0).wait(1).to({x:277.7,y:241.7},0).wait(82));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_ים_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ים_2
	this.instance = new lib.backgrondbeach();
	this.instance.setTransform(288.35,288.95,1,1,0,0,0,382.2,47.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(302).to({_off:false},0).wait(1).to({regX:382.3,regY:47.3,x:288.45,y:286.65},0).wait(1).to({y:284.5},0).wait(1).to({y:282.3},0).wait(1).to({y:280.15},0).wait(1).to({y:277.95},0).wait(1).to({y:275.8},0).wait(1).to({skewX:0.063,x:290.5,y:275.1},0).wait(1).to({scaleY:1.0001,skewX:0.1259,x:292.5,y:274.45},0).wait(1).to({skewX:0.1889,x:294.5,y:273.8},0).wait(1).to({scaleY:1.0002,skewX:0.2519,x:296.5,y:273.15},0).wait(1).to({skewX:0.3149,x:298.5,y:272.5},0).wait(1).to({scaleY:1.0003,skewX:0.3778,x:300.5,y:271.85},0).wait(1).to({skewX:0.4408,x:302.5,y:271.2},0).wait(1).to({scaleY:1.0004,skewX:0.5038,x:304.55,y:270.55},0).wait(1).to({skewX:0.5668,x:306.55,y:269.9},0).wait(1).to({skewX:0.6297,x:308.55,y:269.25},0).wait(1).to({scaleY:1.0005,skewX:0.6927,x:308.7,y:270.35},0).wait(1).to({skewX:0.7557,x:308.85,y:271.45},0).wait(1).to({scaleY:1.0006,skewX:0.8186,x:308.95,y:272.5},0).wait(1).to({skewX:0.8816,x:309.1,y:273.6},0).wait(1).to({skewX:0.9446,x:309.25,y:274.7},0).wait(1).to({scaleY:1.0007,skewX:1.0076,x:309.4,y:275.8},0).wait(1).to({skewX:1.0705,x:309.55,y:276.9},0).wait(1).to({scaleY:1.0008,skewX:1.1335,x:309.7,y:278},0).wait(1).to({skewX:1.1965,x:309.85,y:279.1},0).wait(1).to({scaleY:1.0009,skewX:1.2594,x:310,y:280.15},0).wait(1).to({skewX:1.3224,x:310.15,y:281.25},0).wait(1).to({scaleY:1.001,skewX:1.3854,x:310.3,y:282.35},0).wait(1).to({skewX:1.4484,x:310.95},0).wait(1).to({skewX:1.5113,x:311.6},0).wait(1).to({scaleY:1.0011,skewX:1.5743,x:312.25},0).wait(1).to({skewX:1.6373,x:312.9},0).wait(1).to({skewX:1.7003,x:313.55},0).wait(1).to({scaleY:1.0012,skewX:1.7632,x:314.15},0).wait(1).to({skewX:1.8262,x:314.8},0).wait(1).to({scaleY:1.0013,skewX:1.8892,x:315.45},0).wait(1).to({skewX:1.9521,x:316.1},0).wait(1).to({scaleY:1.0014,skewX:2.0151,x:316.75},0).wait(1).to({skewX:2.0781,x:315.7,y:281.45},0).wait(1).to({scaleY:1.0015,skewX:2.1411,x:314.7,y:280.55},0).wait(1).to({skewX:2.204,x:313.65,y:279.65},0).wait(1).to({skewX:2.267,x:312.6,y:278.75},0).wait(1).to({scaleY:1.0016,skewX:2.33,x:311.55,y:277.85},0).wait(1).to({skewX:2.393,x:310.5,y:276.95},0).wait(1).to({scaleY:1.0017,skewX:2.4559,x:309.45,y:276.1},0).wait(1).to({skewX:2.5189,x:308.45,y:275.2},0).wait(1).to({skewX:2.5819,x:307.4,y:274.3},0).wait(1).to({scaleY:1.0018,skewX:2.6448,x:308.35,y:275.7},0).wait(1).to({skewX:2.7078,x:309.3,y:277.1},0).wait(1).to({scaleY:1.0019,skewX:2.7708,x:310.25,y:278.55},0).wait(1).to({skewX:2.8338,x:311.2,y:279.95},0).wait(1).to({scaleY:1.002,skewX:2.8967,x:312.15,y:281.35},0).wait(1).to({skewX:2.9597,x:313.1,y:282.75},0).wait(1).to({scaleY:1.0021,skewX:3.0227,x:314.05,y:284.2},0).wait(1).to({skewX:3.0856,x:315,y:285.6},0).wait(1).to({skewX:3.1486,y:284.85},0).wait(1).to({scaleY:1.0022,skewX:3.2116,y:284.15},0).wait(1).to({skewX:3.2746,y:283.4},0).wait(1).to({scaleY:1.0023,skewX:3.3375,y:282.65},0).wait(1).to({skewX:3.4005,y:281.85},0).wait(1).to({skewX:3.4635,y:281.15},0).wait(1).to({scaleY:1.0024,skewX:3.5265,y:280.4},0).wait(1).to({skewX:3.5894,y:281.45},0).wait(1).to({skewX:3.6524,y:282.5},0).wait(1).to({scaleY:1.0025,skewX:3.7154,y:283.55},0).wait(1).to({scaleY:1.0026,skewX:3.7783,y:284.6},0).wait(1).to({skewX:3.8413,x:314.95,y:285.65},0).wait(1).to({skewX:3.9043,y:286.7},0).wait(1).to({scaleY:1.0027,skewX:3.9673,y:287.75},0).wait(1).to({skewX:4.0302,y:288.8},0).wait(1).to({scaleY:1.0028,skewX:4.0932,y:286.65},0).wait(1).to({skewX:4.1562,y:284.45},0).wait(1).to({skewX:4.2192,y:282.3},0).wait(1).to({scaleY:1.0029,skewX:4.2821,y:280.1},0).wait(1).to({skewX:4.3451,y:277.95},0).wait(1).to({scaleY:1.003,skewX:4.4081,x:315,y:275.8},0).wait(1).to({y:277.35},0).wait(1).to({y:278.95},0).wait(1).to({y:280.5},0).wait(1).to({y:282.1},0).wait(1).to({y:283.65},0).wait(1).to({y:285.25},0).wait(1).to({y:286.85},0).wait(1).to({y:285.2},0).wait(1).to({y:283.55},0).wait(1).to({y:281.9},0).wait(1).to({y:280.3},0).wait(1).to({y:278.65},0).wait(1).to({y:277},0).wait(1).to({y:275.4},0).wait(1).to({y:277.3},0).wait(1).to({y:279.2},0).wait(1).to({y:281.15},0).wait(1).to({y:283.05},0).wait(1).to({y:285},0).wait(1).to({y:286.9},0).wait(1).to({y:288.85},0).wait(1).to({y:287.3},0).wait(1).to({y:285.8},0).wait(1).to({y:284.3},0).wait(1).to({y:282.8},0).wait(1).to({y:281.3},0).wait(1).to({y:279.8},0).wait(1).to({y:278.3},0).wait(1).to({y:276.8},0).wait(1).to({y:275.3},0).wait(1).to({y:273.8},0).wait(1).to({x:314.8,y:275.95},0).wait(1).to({x:314.65,y:278.15},0).wait(1).to({x:314.5,y:280.3},0).wait(1).to({x:314.35,y:282.5},0).wait(1).to({x:314.2,y:284.65},0).wait(1).to({x:314.05,y:286.85},0).wait(1).to({x:314.15,y:288.3},0).wait(1).to({x:314.25,y:289.8},0).wait(1).to({x:314.35,y:291.25},0).wait(1).to({x:314.5,y:292.75},0).wait(1).to({x:314.6,y:294.2},0).wait(1).to({x:314.7,y:295.7},0).wait(1).to({x:314.8,y:297.15},0).wait(1).to({x:314.95,y:298.65},0).wait(1).to({y:297.6},0).wait(1).to({y:296.6},0).wait(1).to({y:295.55},0).wait(1).to({y:294.55},0).wait(1).to({y:293.55},0).wait(82));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_star_eyes_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// star_eyes
	this.instance = new lib.starmovelips();
	this.instance.setTransform(164,324.8,1,1,0,0,0,30.2,13.3);

	this.instance_1 = new lib.starlips();
	this.instance_1.setTransform(164,324.1,1,1,0,0,0,30.2,13.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},91).to({state:[{t:this.instance_1}]},86).wait(125));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_star_eyes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// star_eyes
	this.instance = new lib.CachedBmp_10();
	this.instance.setTransform(144.1,291.15,0.5,0.5);

	this.instance_1 = new lib.staticpupil();
	this.instance_1.setTransform(180.7,297.7,1,1,0,0,0,2.6,6.3);

	this.instance_2 = new lib.staticpupil();
	this.instance_2.setTransform(146.9,297.7,1,1,0,0,0,2.6,6.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},91).to({state:[{t:this.instance_2},{t:this.instance_1}]},85).wait(126));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_motion_backgrond = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// motion_backgrond
	this.instance = new lib.STARS_1();
	this.instance.setTransform(261.75,-68.15,1,1,0,0,0,239.6,170.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:239.5,regY:170.8,x:261.65,y:-62.35},0).wait(1).to({y:-56.5},0).wait(1).to({y:-50.6},0).wait(1).to({y:-44.75},0).wait(1).to({y:-38.9},0).wait(1).to({y:-33},0).wait(1).to({y:-27.15},0).wait(1).to({y:-21.25},0).wait(1).to({y:-15.4},0).wait(1).to({y:-9.55},0).wait(1).to({y:-3.65},0).wait(1).to({y:2.2},0).wait(1).to({y:8.1},0).wait(1).to({y:13.95},0).wait(1).to({y:19.8},0).wait(1).to({y:25.7},0).wait(1).to({y:31.55},0).wait(1).to({y:37.45},0).wait(1).to({y:43.3},0).wait(1).to({y:49.15},0).wait(1).to({y:55.05},0).wait(1).to({y:60.9},0).wait(1).to({y:66.75},0).wait(1).to({y:72.65},0).wait(1).to({y:78.5},0).wait(1).to({y:84.4},0).wait(1).to({y:90.25},0).wait(1).to({y:96.1},0).wait(1).to({y:102},0).wait(1).to({y:107.85},0).wait(1).to({y:113.75},0).wait(1).to({y:119.6},0).wait(1).to({y:125.45},0).wait(1).to({y:131.35},0).wait(1).to({y:137.2},0).wait(1).to({y:143.1},0).wait(1).to({y:148.95},0).wait(1).to({y:154.8},0).wait(1).to({y:160.7},0).wait(1).to({y:166.55},0).wait(1).to({y:172.4},0).wait(1).to({y:178.25},0).wait(1).to({y:184.1},0).wait(1).to({y:190},0).wait(1).to({y:195.85},0).wait(1).to({y:201.75},0).wait(1).to({y:207.6},0).wait(1).to({y:213.45},0).wait(1).to({y:219.35},0).wait(1).to({y:225.2},0).wait(1).to({y:231.05},0).wait(1).to({y:236.95},0).wait(1).to({y:242.8},0).wait(1).to({y:248.7},0).wait(1).to({y:254.55},0).wait(1).to({y:260.4},0).wait(1).to({y:266.3},0).wait(1).to({y:272.15},0).wait(1).to({y:278.05},0).wait(1).to({y:283.9},0).wait(1).to({y:289.75},0).wait(1).to({y:295.65},0).wait(1).to({y:301.5},0).wait(1).to({y:307.4},0).wait(1).to({y:313.25},0).wait(1).to({y:319.1},0).wait(1).to({y:325},0).wait(1).to({y:330.85},0).wait(1).to({y:336.75},0).wait(1).to({y:342.6},0).wait(1).to({y:348.45},0).wait(1).to({y:354.35},0).wait(1).to({y:360.2},0).wait(1).to({y:366.05},0).wait(1).to({y:371.95},0).wait(1).to({y:377.8},0).wait(1).to({y:383.7},0).wait(1).to({y:389.55},0).wait(1).to({y:395.4},0).wait(1).to({y:401.3},0).wait(1).to({y:407.15},0).wait(1).to({y:413.05},0).wait(1).to({y:418.9},0).wait(1).to({y:424.75},0).wait(1).to({y:430.65},0).wait(1).to({y:436.5},0).wait(1).to({y:442.4},0).wait(1).to({y:448.25},0).wait(1).to({y:454.1},0).wait(1).to({y:460},0).wait(1).to({y:465.85},0).wait(1).to({y:471.75},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_lips_star = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lips_star
	this.instance = new lib.starlips();
	this.instance.setTransform(-11.65,319.75,1,1,0,0,0,30.2,13.3);
	this.instance._off = true;

	this.instance_1 = new lib.starmovelips();
	this.instance_1.setTransform(166,311,1,1,0,0,0,30.2,13.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},302).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},101).wait(82));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(302).to({_off:false},0).wait(1).to({regX:30.3,x:-3.75,y:319.35},0).wait(1).to({x:4,y:318.95},0).wait(1).to({x:11.8,y:318.55},0).wait(1).to({x:19.55,y:318.2},0).wait(1).to({x:27.3,y:317.8},0).wait(1).to({x:35.05,y:317.4},0).wait(1).to({x:42.8,y:317},0).wait(1).to({x:50.55,y:316.65},0).wait(1).to({x:58.35,y:316.25},0).wait(1).to({x:66.1,y:315.85},0).wait(1).to({x:73.85,y:315.45},0).wait(1).to({x:81.65,y:315.1},0).wait(1).to({x:89.4,y:314.7},0).wait(1).to({x:97.15,y:314.3},0).wait(1).to({x:104.95,y:313.9},0).wait(1).to({x:112.7,y:313.55},0).wait(1).to({x:120.45,y:313.15},0).wait(1).to({x:128.25,y:312.75},0).wait(1).to({x:136,y:312.35},0).wait(1).to({x:143.75,y:312},0).wait(1).to({x:151.55,y:311.6},0).wait(1).to({x:159.3,y:311.2},0).wait(1).to({x:167.1,y:310.85},0).wait(1).to({_off:true},1).wait(101).to({_off:false,regX:30.2,x:166.05,y:311},0).wait(82));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_lips_cocava = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lips_cocava
	this.instance = new lib.lipsstatic();
	this.instance.setTransform(557.6,307.95,1,1,0,0,0,30.2,13.3);
	this.instance._off = true;

	this.instance_1 = new lib.lipsshy();
	this.instance_1.setTransform(372.05,308.2,0.7706,0.7706,0,0,0,14.2,9.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},302).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},101).wait(82));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(302).to({_off:false},0).wait(1).to({regX:30.3,x:549.6},0).wait(1).to({x:541.55},0).wait(1).to({x:533.5},0).wait(1).to({x:525.4},0).wait(1).to({x:517.35},0).wait(1).to({x:509.3},0).wait(1).to({x:501.2},0).wait(1).to({x:493.15},0).wait(1).to({x:485.1},0).wait(1).to({x:477},0).wait(1).to({x:468.95},0).wait(1).to({x:460.9},0).wait(1).to({x:452.85},0).wait(1).to({x:444.75},0).wait(1).to({x:436.7},0).wait(1).to({x:428.65},0).wait(1).to({x:420.55},0).wait(1).to({x:412.5},0).wait(1).to({x:404.45},0).wait(1).to({x:396.35},0).wait(1).to({x:388.3},0).wait(1).to({x:380.25},0).wait(1).to({x:372.2},0).wait(2).to({regX:30.2,x:372.1,y:308.45},0).to({_off:true},101).wait(82));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_embarrassment = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// embarrassment
	this.instance = new lib.shycheek();
	this.instance.setTransform(343.25,291.55,1,1,0,0,0,6.8,2.1);

	this.instance_1 = new lib.shycheek();
	this.instance_1.setTransform(398.05,291.75,1,1,0,0,0,6.8,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},428).wait(82));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_cocava_lips = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cocava_lips
	this.instance = new lib.lipsstatic();
	this.instance.setTransform(407.75,319.7,1,1,0,0,0,30.2,13.3);

	this.instance_1 = new lib.lipsmova();
	this.instance_1.setTransform(407.9,319,1,1,0,0,0,30.2,13.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},91).to({state:[{t:this.instance_1}]},93).wait(130));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_buttons = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// buttons
	this.start_this = new lib.buttonstart();
	this.start_this.name = "start_this";
	this.start_this.setTransform(134.75,133.15,1.2487,1.2487);
	new cjs.ButtonHelper(this.start_this, 0, 1, 2);

	this.instance = new lib.light("synched",0);
	this.instance.setTransform(410.15,92.85,1.4139,1.374,0,44.9996,-135.0009,32.6,62.6);

	this.instance_1 = new lib.light("synched",0);
	this.instance_1.setTransform(116.35,92.85,1.4139,1.374,-44.9996,0,0,32.6,62.6);

	this.instance_2 = new lib.bodylight("synched",0);
	this.instance_2.setTransform(342.2,93.05,0.753,0.753,0,39.7476,-140.2524,65.3,52.9);

	this.instance_3 = new lib.bodylight("synched",0);
	this.instance_3.setTransform(189,94.05,0.753,0.753,-39.7476,0,0,65.3,52.9);

	this.instance_4 = new lib.CachedBmp_2();
	this.instance_4.setTransform(-26.95,-5.7,0.5,0.5);

	this.play_again = new lib.buttonend();
	this.play_again.name = "play_again";
	this.play_again.setTransform(205.25,102.3,0.8615,0.8615);
	new cjs.ButtonHelper(this.play_again, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4,p:{x:-26.95,y:-5.7}},{t:this.instance_3,p:{x:189,y:94.05}},{t:this.instance_2,p:{x:342.2,y:93.05}},{t:this.instance_1,p:{x:116.35,y:92.85}},{t:this.instance,p:{x:410.15,y:92.85}},{t:this.start_this}]}).to({state:[]},1).to({state:[{t:this.instance_4,p:{x:-21.45,y:0}},{t:this.instance_3,p:{x:194.5,y:99.75}},{t:this.instance_2,p:{x:347.7,y:98.75}},{t:this.instance_1,p:{x:121.85,y:98.55}},{t:this.instance,p:{x:415.65,y:98.55}},{t:this.play_again}]},509).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_bubble_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bubble
	this.instance = new lib.emptybubble();
	this.instance.setTransform(240.5,182.05,1,1,0,0,0,61.9,51.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(95).to({_off:false},0).wait(83).to({scaleX:1.1496,scaleY:1.1496,skewY:180,x:298,y:182.1},0).wait(124));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_bubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bubble
	this.instance = new lib.emptybubble();
	this.instance.setTransform(265.1,187.45,1.1776,1,0,0,0,62,51.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(327).to({_off:false},0).to({_off:true},101).wait(82));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_backgrond2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// backgrond2
	this.instance = new lib.whitestars();
	this.instance.setTransform(280.35,251.7,1,1,0,0,0,259.9,165.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(91).to({_off:false},0).wait(1).to({regX:259.5,regY:165.5,rotation:0.0224,x:279.95,y:251.1},0).wait(1).to({rotation:0.0448,x:279.9,y:250.75},0).wait(1).to({rotation:0.0673,y:250.4},0).wait(1).to({rotation:0.0897,x:279.95,y:250.05},0).wait(1).to({rotation:0.1121,y:249.7},0).wait(1).to({rotation:0.1345,x:279.9,y:249.35},0).wait(1).to({rotation:0.157,x:279.95,y:248.95},0).wait(1).to({rotation:0.1794,y:248.6},0).wait(1).to({rotation:0.2018,x:279.9,y:248.25},0).wait(1).to({rotation:0.2242,x:279.95,y:247.9},0).wait(1).to({rotation:0.2466,y:247.55},0).wait(1).to({rotation:0.2691,x:279.9,y:247.2},0).wait(1).to({rotation:0.2915,y:246.85},0).wait(1).to({rotation:0.3139,x:279.95,y:246.45},0).wait(1).to({rotation:0.3363,y:246.1},0).wait(1).to({rotation:0.3587,x:279.9,y:245.75},0).wait(1).to({rotation:0.3812,x:279.95,y:245.4},0).wait(1).to({rotation:0.4036,y:245.1},0).wait(1).to({rotation:0.426,x:279.9,y:244.75},0).wait(1).to({rotation:0.4484,x:279.95,y:244.4},0).wait(1).to({rotation:0.4709,y:244.05},0).wait(1).to({rotation:0.4933,y:243.65},0).wait(1).to({rotation:0.5157,y:243.3},0).wait(1).to({rotation:0.5381,y:242.95},0).wait(1).to({rotation:0.5605,y:242.6},0).wait(1).to({rotation:0.583,x:279.9,y:242.25},0).wait(1).to({rotation:0.6054,x:279.95,y:241.9},0).wait(1).to({rotation:0.6278,y:241.55},0).wait(1).to({rotation:0.6502,x:279.9,y:241.15},0).wait(1).to({rotation:0.6726,x:279.95,y:240.8},0).wait(1).to({rotation:0.6951,y:240.45},0).wait(1).to({rotation:0.7175,y:240.1},0).wait(1).to({rotation:0.7399,y:239.75},0).wait(1).to({rotation:0.7623,y:239.4},0).wait(1).to({rotation:0.7848,x:279.9,y:239.05},0).wait(1).to({rotation:0.8072,y:238.7},0).wait(1).to({rotation:0.8296,y:238.3},0).wait(1).to({rotation:0.852,y:237.95},0).wait(1).to({rotation:0.8744,y:237.6},0).wait(1).to({rotation:0.8969,y:237.25},0).wait(1).to({rotation:0.9193,y:236.9},0).wait(1).to({rotation:0.9417,x:279.95,y:236.55},0).wait(1).to({rotation:0.9641,x:279.9,y:236.15},0).wait(1).to({rotation:0.9865,y:235.75},0).wait(1).to({rotation:1.009,x:279.95,y:235.4},0).wait(1).to({rotation:1.0314,x:279.9,y:235.05},0).wait(1).to({rotation:1.0538,y:234.7},0).wait(1).to({rotation:1.0762,x:279.95,y:234.35},0).wait(1).to({rotation:1.0987,y:234},0).wait(1).to({rotation:1.1211,x:279.9,y:233.7},0).wait(1).to({rotation:1.1435,x:279.95,y:233.35},0).wait(1).to({rotation:1.1659,y:232.95},0).wait(1).to({rotation:1.1883,x:279.9,y:232.6},0).wait(1).to({rotation:1.2108,x:279.95,y:232.25},0).wait(1).to({rotation:1.2332,y:231.9},0).wait(1).to({rotation:1.2556,x:279.9,y:231.55},0).wait(1).to({rotation:1.278,x:279.95,y:231.2},0).wait(1).to({rotation:1.3004,y:230.85},0).wait(1).to({rotation:1.3229,y:230.5},0).wait(1).to({rotation:1.3453,x:279.9,y:230.15},0).wait(1).to({rotation:1.3677,y:229.75},0).wait(1).to({rotation:1.3901,y:229.4},0).wait(1).to({rotation:1.4126,y:229.05},0).wait(1).to({rotation:1.435,y:228.7},0).wait(1).to({rotation:1.4574,y:228.35},0).wait(1).to({rotation:1.4798,x:279.95,y:228},0).wait(1).to({rotation:1.5022,x:279.9,y:227.65},0).wait(1).to({rotation:1.5247,y:227.3},0).wait(1).to({rotation:1.5471,x:279.95,y:226.95},0).wait(1).to({rotation:1.5695,x:279.9,y:226.55},0).wait(1).to({rotation:1.5919,x:279.95,y:226.2},0).wait(1).to({rotation:1.6143,y:225.85},0).wait(1).to({rotation:1.6368,y:225.5},0).wait(1).to({rotation:1.6592,y:225.15},0).wait(1).to({rotation:1.6816,y:224.8},0).wait(1).to({rotation:1.704,y:224.45},0).wait(1).to({rotation:1.7265,y:224.05},0).wait(1).to({rotation:1.7489,y:223.7},0).wait(1).to({rotation:1.7713,x:279.9,y:223.3},0).wait(1).to({rotation:1.7937,y:222.95},0).wait(1).to({rotation:1.8161,y:222.6},0).wait(1).to({rotation:1.8386,y:222.25},0).wait(1).to({rotation:1.861,x:279.95,y:221.95},0).wait(1).to({rotation:1.8834,x:279.9,y:221.6},0).wait(1).to({rotation:1.9058,x:279.95,y:221.25},0).wait(1).to({rotation:1.9283,y:220.9},0).wait(1).to({rotation:1.9507,x:279.9,y:220.55},0).wait(1).to({rotation:1.9731,x:279.95,y:220.15},0).wait(1).to({rotation:1.9955,y:219.8},0).wait(1).to({rotation:2.0179,x:279.9,y:219.45},0).wait(1).to({rotation:2.0404,x:279.95,y:219.1},0).wait(1).to({rotation:2.0628,y:218.75},0).wait(1).to({rotation:2.0852,y:218.4},0).wait(1).to({rotation:2.1076,x:279.9,y:218.05},0).wait(1).to({rotation:2.13,y:217.7},0).wait(1).to({rotation:2.1525,x:279.95,y:217.35},0).wait(1).to({rotation:2.1749,x:279.9,y:217},0).wait(1).to({rotation:2.1973,y:216.6},0).wait(1).to({rotation:2.2197,x:279.95,y:216.2},0).wait(1).to({rotation:2.2422,y:215.85},0).wait(1).to({rotation:2.2646,x:279.9,y:215.5},0).wait(1).to({rotation:2.287,x:279.95,y:215.15},0).wait(1).to({rotation:2.3094,y:214.8},0).wait(1).to({rotation:2.3318,y:214.45},0).wait(1).to({rotation:2.3543,y:214.1},0).wait(1).to({rotation:2.3767,x:279.9,y:213.75},0).wait(1).to({rotation:2.3991,y:213.4},0).wait(1).to({rotation:2.4215,y:213.05},0).wait(1).to({rotation:2.4439,y:212.65},0).wait(1).to({rotation:2.4664,x:279.95,y:212.3},0).wait(1).to({rotation:2.4888,x:279.9,y:211.95},0).wait(1).to({rotation:2.5112,x:279.95,y:211.6},0).wait(1).to({rotation:2.5336,y:211.25},0).wait(1).to({rotation:2.5561,x:279.9,y:210.9},0).wait(1).to({rotation:2.5785,x:279.95,y:210.55},0).wait(1).to({rotation:2.6009,y:210.2},0).wait(1).to({rotation:2.6233,x:280,y:209.9},0).wait(1).to({rotation:2.6457,x:279.9,y:209.5},0).wait(1).to({rotation:2.6682,y:209.15},0).wait(1).to({rotation:2.6906,x:279.95,y:208.75},0).wait(1).to({rotation:2.713,x:279.9,y:208.4},0).wait(1).to({rotation:2.7354,x:279.95,y:208.05},0).wait(1).to({rotation:2.7578,y:207.7},0).wait(1).to({rotation:2.7803,x:279.9,y:207.35},0).wait(1).to({rotation:2.8027,x:279.95,y:207},0).wait(1).to({rotation:2.8251,y:206.65},0).wait(1).to({rotation:2.8475,x:280,y:206.3},0).wait(1).to({rotation:2.87,x:279.9,y:205.95},0).wait(1).to({rotation:2.8924,y:205.6},0).wait(1).to({rotation:2.9148,x:279.95,y:205.25},0).wait(1).to({rotation:2.9372,x:279.9,y:204.9},0).wait(1).to({rotation:2.9596,y:204.5},0).wait(1).to({rotation:2.9821,x:279.95,y:204.15},0).wait(1).to({rotation:3.0045,y:203.75},0).wait(1).to({rotation:3.0269,y:203.4},0).wait(1).to({rotation:3.0493,y:203.05},0).wait(1).to({rotation:3.0717,x:279.9,y:202.7},0).wait(1).to({rotation:3.0942,y:202.35},0).wait(1).to({rotation:3.1166,y:202},0).wait(1).to({rotation:3.139,x:279.95,y:201.65},0).wait(1).to({rotation:3.1614,x:279.9,y:201.3},0).wait(1).to({rotation:3.1839,x:279.95,y:200.95},0).wait(1).to({rotation:3.2063,y:200.6},0).wait(1).to({rotation:3.2287,y:200.25},0).wait(1).to({rotation:3.2511,y:199.9},0).wait(1).to({rotation:3.2735,y:199.5},0).wait(1).to({rotation:3.296,y:199.1},0).wait(1).to({rotation:3.3184,x:279.9,y:198.75},0).wait(1).to({rotation:3.3408,y:198.4},0).wait(1).to({rotation:3.3632,x:279.95,y:198.05},0).wait(1).to({rotation:3.3857,y:197.7},0).wait(1).to({rotation:3.4081,y:197.35},0).wait(1).to({rotation:3.4305,y:197.05},0).wait(1).to({rotation:3.4529,y:196.7},0).wait(1).to({rotation:3.4753,x:279.9,y:196.35},0).wait(1).to({rotation:3.4978,y:196},0).wait(1).to({rotation:3.5202,x:279.95,y:195.65},0).wait(1).to({rotation:3.5426,x:279.9,y:195.3},0).wait(1).to({rotation:3.565,x:279.95,y:194.95},0).wait(1).to({rotation:3.5874,y:194.55},0).wait(1).to({rotation:3.6099,y:194.15},0).wait(1).to({rotation:3.6323,y:193.8},0).wait(1).to({rotation:3.6547,x:279.9,y:193.45},0).wait(1).to({rotation:3.6771,x:279.95,y:193.1},0).wait(1).to({rotation:3.6996,x:279.9,y:192.75},0).wait(1).to({rotation:3.722,x:279.95,y:192.4},0).wait(1).to({rotation:3.7444,y:192.05},0).wait(1).to({rotation:3.7668,y:191.7},0).wait(1).to({rotation:3.7892,y:191.35},0).wait(1).to({rotation:3.8117,y:191},0).wait(1).to({rotation:3.8341,y:190.65},0).wait(1).to({rotation:3.8565,x:279.9,y:190.25},0).wait(1).to({rotation:3.8789,x:279.95,y:189.9},0).wait(1).to({rotation:3.9013,y:189.55},0).wait(1).to({rotation:3.9238,y:189.2},0).wait(1).to({rotation:3.9462,y:188.85},0).wait(1).to({rotation:3.9686,x:279.9,y:188.5},0).wait(1).to({rotation:3.991,x:279.95,y:188.1},0).wait(1).to({rotation:4.0135,x:279.9,y:187.75},0).wait(1).to({rotation:4.0359,x:279.95,y:187.4},0).wait(1).to({rotation:4.0583,y:187.05},0).wait(1).to({rotation:4.0807,x:279.9,y:186.7},0).wait(1).to({rotation:4.1031,x:279.95,y:186.35},0).wait(1).to({rotation:4.1256,y:185.95},0).wait(1).to({rotation:4.148,y:185.6},0).wait(1).to({rotation:4.1704,x:279.9,y:185.25},0).wait(1).to({rotation:4.1928,x:279.95,y:184.9},0).wait(1).to({rotation:4.2152,y:184.55},0).wait(1).to({rotation:4.2377,y:184.2},0).wait(1).to({rotation:4.2601,y:183.95},0).wait(1).to({rotation:4.2825,y:183.55},0).wait(1).to({rotation:4.3049,y:183.25},0).wait(1).to({rotation:4.3274,x:279.9,y:182.9},0).wait(1).to({rotation:4.3498,x:279.95,y:182.5},0).wait(1).to({rotation:4.3722,y:182.15},0).wait(1).to({rotation:4.3946,y:181.8},0).wait(1).to({rotation:4.417,y:181.45},0).wait(1).to({rotation:4.4395,y:181.1},0).wait(1).to({rotation:4.4619,y:180.7},0).wait(1).to({rotation:4.4843,x:279.9,y:180.35},0).wait(1).to({rotation:4.5067,x:279.95,y:180},0).wait(1).to({rotation:4.5291,y:179.65},0).wait(1).to({rotation:4.5516,y:179.3},0).wait(1).to({rotation:4.574,x:279.9,y:178.9},0).wait(1).to({rotation:4.5964,x:279.95,y:178.55},0).wait(1).to({rotation:4.6188,x:279.9,y:178.2},0).wait(1).to({rotation:4.6413,x:279.95,y:177.85},0).wait(1).to({rotation:4.6637,y:177.5},0).wait(1).to({rotation:4.6861,x:280,y:177.15},0).wait(1).to({rotation:4.7085,x:279.9,y:176.8},0).wait(1).to({rotation:4.7309},0).wait(1).to({rotation:4.7534,x:279.95},0).wait(1).to({rotation:4.7758,x:279.9,y:176.75},0).wait(1).to({rotation:4.7982,x:279.95},0).wait(1).to({rotation:4.8206},0).wait(1).to({rotation:4.843,y:176.8},0).wait(1).to({rotation:4.8655,x:279.9},0).wait(1).to({rotation:4.8879,x:279.95},0).wait(1).to({rotation:4.9103},0).wait(1).to({rotation:4.9327},0).wait(1).to({rotation:4.9552},0).wait(1).to({rotation:4.9776,y:176.75},0).wait(1).to({rotation:5},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_backgrond_white = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// backgrond_white
	this.instance = new lib.whithstars();
	this.instance.setTransform(270.85,199.95,1,1,0,0,0,284.6,448.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:284.5,regY:914.3,x:270.75,y:657.25},0).wait(1).to({y:648.4},0).wait(1).to({y:639.6},0).wait(1).to({y:630.75},0).wait(1).to({y:621.95},0).wait(1).to({y:613.1},0).wait(1).to({y:604.3},0).wait(1).to({y:595.45},0).wait(1).to({y:586.65},0).wait(1).to({y:577.8},0).wait(1).to({y:569},0).wait(1).to({y:560.15},0).wait(1).to({y:551.35},0).wait(1).to({y:542.5},0).wait(1).to({y:533.7},0).wait(1).to({y:524.85},0).wait(1).to({y:516.05},0).wait(1).to({y:507.2},0).wait(1).to({y:498.4},0).wait(1).to({y:489.55},0).wait(1).to({y:480.75},0).wait(1).to({y:471.9},0).wait(1).to({y:463.1},0).wait(1).to({y:454.25},0).wait(1).to({y:445.45},0).wait(1).to({y:436.6},0).wait(1).to({y:427.8},0).wait(1).to({y:418.95},0).wait(1).to({y:410.15},0).wait(1).to({y:401.3},0).wait(1).to({y:392.5},0).wait(1).to({y:383.65},0).wait(1).to({y:374.85},0).wait(1).to({y:366},0).wait(1).to({y:357.2},0).wait(1).to({y:348.35},0).wait(1).to({y:339.55},0).wait(1).to({y:330.7},0).wait(1).to({y:321.9},0).wait(1).to({y:313.05},0).wait(1).to({y:304.25},0).wait(1).to({y:295.4},0).wait(1).to({y:286.6},0).wait(1).to({y:277.75},0).wait(1).to({y:268.95},0).wait(1).to({y:260.1},0).wait(1).to({y:251.3},0).wait(1).to({y:242.45},0).wait(1).to({y:233.65},0).wait(1).to({y:224.8},0).wait(1).to({y:216},0).wait(1).to({y:207.15},0).wait(1).to({y:198.35},0).wait(1).to({y:189.5},0).wait(1).to({y:180.7},0).wait(1).to({y:171.85},0).wait(1).to({y:163.05},0).wait(1).to({y:154.2},0).wait(1).to({y:145.4},0).wait(1).to({y:136.55},0).wait(1).to({y:127.75},0).wait(1).to({y:118.9},0).wait(1).to({y:110.1},0).wait(1).to({y:101.25},0).wait(1).to({y:92.45},0).wait(1).to({y:83.6},0).wait(1).to({y:74.8},0).wait(1).to({y:65.95},0).wait(1).to({y:57.15},0).wait(1).to({y:48.3},0).wait(1).to({y:39.5},0).wait(1).to({y:30.65},0).wait(1).to({y:21.85},0).wait(1).to({y:13},0).wait(1).to({y:4.2},0).wait(1).to({y:-4.65},0).wait(1).to({y:-13.45},0).wait(1).to({y:-22.3},0).wait(1).to({y:-31.1},0).wait(1).to({y:-39.95},0).wait(1).to({y:-48.75},0).wait(1).to({y:-57.6},0).wait(1).to({y:-66.4},0).wait(1).to({y:-75.25},0).wait(1).to({y:-84.05},0).wait(1).to({y:-92.9},0).wait(1).to({y:-101.7},0).wait(1).to({y:-110.55},0).wait(1).to({y:-119.35},0).wait(1).to({y:-128.2},0).wait(1).to({y:-137},0).wait(1).to({y:-145.85},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.pupil = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.pupilsastic();
	this.instance.setTransform(-25,-5.45,1,1,0,0,0,8,17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:-5.6},0).wait(1).to({y:-5.8},0).wait(1).to({y:-5.95},0).wait(1).to({y:-6.15},0).wait(1).to({y:-6.3},0).wait(1).to({y:-6.5},0).wait(1).to({y:-6.65},0).wait(1).to({y:-6.85},0).wait(1).to({y:-7},0).wait(1).to({y:-7.2},0).wait(1).to({y:-7.35},0).wait(1).to({y:-7.55},0).wait(1).to({y:-7.7},0).wait(1).to({y:-7.9},0).wait(1).to({y:-8.05},0).wait(1).to({y:-8.25},0).wait(1).to({y:-8.45},0).wait(1).to({y:-8.6},0).wait(1).to({y:-8.8},0).wait(1).to({y:-8.95},0).wait(1).to({y:-9.15},0).wait(1).to({y:-9.3},0).wait(1).to({y:-9.5},0).wait(1).to({y:-9.65},0).wait(1).to({y:-9.85},0).wait(1).to({y:-10},0).wait(1).to({y:-10.2},0).wait(1).to({y:-10.35},0).wait(1).to({y:-10.55},0).wait(1).to({y:-10.7},0).wait(1).to({y:-10.9},0).wait(1).to({y:-11.05},0).wait(1).to({y:-11.25},0).wait(1).to({y:-11.45},0).wait(1).to({y:-11.25},0).wait(1).to({y:-11.1},0).wait(1).to({y:-10.95},0).wait(1).to({y:-10.8},0).wait(1).to({y:-10.65},0).wait(1).to({y:-10.5},0).wait(1).to({y:-10.3},0).wait(1).to({y:-10.15},0).wait(1).to({y:-10},0).wait(1).to({y:-9.85},0).wait(1).to({y:-9.7},0).wait(1).to({y:-9.55},0).wait(1).to({y:-9.35},0).wait(1).to({y:-9.2},0).wait(1).to({y:-9.05},0).wait(1).to({y:-8.9},0).wait(1).to({y:-8.75},0).wait(1).to({y:-8.6},0).wait(1).to({y:-8.45},0).wait(1).to({y:-8.25},0).wait(1).to({y:-8.1},0).wait(1).to({y:-7.95},0).wait(1).to({y:-7.8},0).wait(1).to({y:-7.65},0).wait(1).to({y:-7.5},0).wait(1).to({y:-7.3},0).wait(1).to({y:-7.15},0).wait(1).to({y:-7},0).wait(1).to({y:-6.85},0).wait(1).to({y:-6.7},0).wait(1).to({y:-6.55},0).wait(1).to({y:-6.35},0).wait(1).to({y:-6.2},0).wait(1).to({y:-6.05},0).wait(1).to({y:-5.9},0).wait(1).to({y:-5.75},0).wait(1).to({y:-5.6},0).wait(1).to({y:-5.45},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-28.9,16,41);


(lib.cocavabody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.regularchik();
	this.instance.setTransform(68.85,126.25,1,1,0,0,0,6.8,2.1);

	this.instance_1 = new lib.regularchik();
	this.instance_1.setTransform(124.25,126.25,1,1,0,0,0,6.8,2.1);

	this.instance_2 = new lib.eyescocava();
	this.instance_2.setTransform(246.1,156.25,1,1,0,0,0,18.3,20.4);

	this.instance_3 = new lib.CachedBmp_26();
	this.instance_3.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cocavabody, new cjs.Rectangle(0,0,208.5,229), null);


(lib.starbody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.CachedBmp_179();
	this.instance.setTransform(91,154.15,0.5,0.5);

	this.instance_1 = new lib.fullnecklace();
	this.instance_1.setTransform(105.05,149.1,1,1,0,0,0,43.5,14.4);

	this.instance_2 = new lib.stareyes();
	this.instance_2.setTransform(103.35,109.45,1,1,0,0,0,22.2,12.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_1
	this.instance_3 = new lib.CachedBmp_183();
	this.instance_3.setTransform(16.1,173.05,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_182();
	this.instance_4.setTransform(137.85,173.05,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_181();
	this.instance_5.setTransform(0,4.4,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_180();
	this.instance_6.setTransform(12.5,198.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.starbody, new cjs.Rectangle(0,4.4,209.5,208.2), null);


(lib.Scene_1_star_body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// star_body
	this.instance = new lib.starbody();
	this.instance.setTransform(163.5,293.85,1,1,0,0,0,104.7,108.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(91).to({_off:false},0).wait(226));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_cocava_eyes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cocava_eyes
	this.instance = new lib.pupilsastic();
	this.instance.setTransform(453.8,298.5,0.3813,0.3813,0,0,0,95,25.7);

	this.instance_1 = new lib.pupilsastic();
	this.instance_1.setTransform(424.05,298.5,0.3813,0.3813,0,0,0,95,25.7);

	this.instance_2 = new lib.pupil();
	this.instance_2.setTransform(419.95,295.85,0.3694,0.3694,0,0,0,-24.9,-5.4);

	this.instance_3 = new lib.pupil();
	this.instance_3.setTransform(390.9,295.85,0.3694,0.3694,0,0,0,-24.9,-5.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},91).to({state:[{t:this.instance_3},{t:this.instance_2}]},94).wait(125));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_cocava_body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cocava_body
	this.instance = new lib.cocavabody();
	this.instance.setTransform(433.9,289.05,1,1,0,0,0,123,114.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(91).to({_off:false},0).wait(226));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.cocavawitheyes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.pupilsastic();
	this.instance.setTransform(79.45,119.85,0.3562,0.3886,0,0,0,8,17.5);

	this.instance_1 = new lib.pupilsastic();
	this.instance_1.setTransform(109.3,119.85,0.3562,0.3886,0,0,0,8,17.5);

	this.instance_2 = new lib.cocavabody();
	this.instance_2.setTransform(123,114.4,1,1,0,0,0,123,114.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cocavawitheyes, new cjs.Rectangle(0,0,208.5,229), null);


(lib.starwitheyes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.staticpupil();
	this.instance.setTransform(88.05,110.85,1,1,0,0,0,2.6,6.3);

	this.instance_1 = new lib.staticpupil();
	this.instance_1.setTransform(121.95,110.85,1,1,0,0,0,2.6,6.3);

	this.instance_2 = new lib.starbody();
	this.instance_2.setTransform(104.7,104,1,1,0,0,0,104.7,108.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.starwitheyes, new cjs.Rectangle(0,0,209.5,208.2), null);


(lib.Scene_1_star = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// star
	this.instance = new lib.starwitheyes();
	this.instance.setTransform(-12.55,288.65,1,1,0,0,0,104.7,104);
	this.instance._off = true;

	this.instance_1 = new lib.pupilsastic();
	this.instance_1.setTransform(355.35,284.85,1,1,0,0,0,8,17.5);

	this.instance_2 = new lib.staticpupil();
	this.instance_2.setTransform(150.45,285.35,1,1,0,0,0,2.6,6.3);

	this.instance_3 = new lib.staticpupil();
	this.instance_3.setTransform(184,285.35,1,1,0,0,0,2.6,6.3);

	this.instance_4 = new lib.starbody();
	this.instance_4.setTransform(167.25,279.45,1,1,0,0,0,104.7,108.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},302).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},1).wait(183));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(302).to({_off:false},0).wait(1).to({regX:104.8,regY:104.1,x:-4.65,y:288.35},0).wait(1).to({x:3.1,y:287.95},0).wait(1).to({x:10.9,y:287.55},0).wait(1).to({x:18.65,y:287.2},0).wait(1).to({x:26.4,y:286.8},0).wait(1).to({x:34.2,y:286.4},0).wait(1).to({x:41.95,y:286},0).wait(1).to({x:49.7,y:285.65},0).wait(1).to({x:57.5,y:285.25},0).wait(1).to({x:65.25,y:284.85},0).wait(1).to({x:73,y:284.45},0).wait(1).to({x:80.8,y:284.1},0).wait(1).to({x:88.55,y:283.7},0).wait(1).to({x:96.3,y:283.3},0).wait(1).to({x:104.1,y:282.9},0).wait(1).to({x:111.8,y:282.55},0).wait(1).to({x:119.55,y:282.15},0).wait(1).to({x:127.35,y:281.75},0).wait(1).to({x:135.1,y:281.35},0).wait(1).to({x:142.85,y:281},0).wait(1).to({x:150.65,y:280.6},0).wait(1).to({x:158.4,y:280.2},0).wait(1).to({x:166.2,y:279.85},0).wait(1).to({_off:true},1).wait(183));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_cocava = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cocava
	this.instance = new lib.cocavawitheyes();
	this.instance.setTransform(585.55,279.85,1,1,0,0,0,123,114.4);
	this.instance._off = true;

	this.instance_1 = new lib.pupilsastic();
	this.instance_1.setTransform(383.55,285.5,0.4229,0.4229,0,0,0,8.1,17.5);

	this.instance_2 = new lib.pupilsastic();
	this.instance_2.setTransform(354.05,285.5,0.4229,0.4229,0,0,0,8.1,17.5);

	this.instance_3 = new lib.cocavabody();
	this.instance_3.setTransform(397.25,279.95,1,1,0,0,0,123,114.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},302).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},1).wait(183));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(302).to({_off:false},0).wait(1).to({regX:104.3,regY:114.5,x:558.75,y:279.95},0).wait(1).to({x:550.7},0).wait(1).to({x:542.65},0).wait(1).to({x:534.55},0).wait(1).to({x:526.5},0).wait(1).to({x:518.45},0).wait(1).to({x:510.35},0).wait(1).to({x:502.3},0).wait(1).to({x:494.25},0).wait(1).to({x:486.15},0).wait(1).to({x:478.1},0).wait(1).to({x:470.05},0).wait(1).to({x:462},0).wait(1).to({x:453.9},0).wait(1).to({x:445.85},0).wait(1).to({x:437.8},0).wait(1).to({x:429.7},0).wait(1).to({x:421.65},0).wait(1).to({x:413.6},0).wait(1).to({x:405.5},0).wait(1).to({x:397.45},0).wait(1).to({x:389.4},0).wait(1).to({x:381.35},0).wait(1).to({_off:true},1).wait(183));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.WISHtoFALL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.actionFrames = [0,1,62,100,510];
	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.numChildren - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		this.clearAllSoundStreams();
		 
		this.start_this = this.buttons.start_this;
		var self = this;
		self.stop();
		
		self.start_this.addEventListener("click",start);
		
		function start()
		{
			self.gotoAndPlay(2);
		}
	}
	this.frame_1 = function() {
		this.start_this = undefined;
	}
	this.frame_62 = function() {
		playSound("shooting_star");
	}
	this.frame_100 = function() {
		playSound("songmashina");
	}
	this.frame_510 = function() {
		this.play_again = this.buttons.play_again;
		this.___loopingOver___ = true;
		var self = this;
		self.stop();
		
		self.play_again.addEventListener("click",myFunc);
		
		function myFunc()
		{
			self.gotoAndPlay(2);
			
			}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(61).call(this.frame_62).wait(38).call(this.frame_100).wait(410).call(this.frame_510).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.setTransform(277.45,203.35,1.0222,1.0222,0,0,0,0.1,0.1);
	this.___camera___instance.depth = 0;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:273,y:-57.85,visible:false},0).wait(1).to({x:273.0285,y:-52.1959},0).wait(1).to({x:273.0569,y:-46.5419},0).wait(1).to({x:273.0854,y:-40.8878},0).wait(1).to({x:273.1138,y:-35.2337},0).wait(1).to({x:273.1423,y:-29.5796},0).wait(1).to({x:273.1708,y:-23.9256},0).wait(1).to({x:273.1992,y:-18.2715},0).wait(1).to({x:273.2277,y:-12.6174},0).wait(1).to({x:273.2561,y:-6.9633},0).wait(1).to({x:273.2846,y:-1.3093},0).wait(1).to({x:273.313,y:4.3448},0).wait(1).to({x:273.3415,y:9.9989},0).wait(1).to({x:273.37,y:15.6529},0).wait(1).to({x:273.3984,y:21.307},0).wait(1).to({x:273.4269,y:26.9611},0).wait(1).to({x:273.4553,y:32.6152},0).wait(1).to({x:273.4838,y:38.2692},0).wait(1).to({x:273.5123,y:43.9233},0).wait(1).to({x:273.5407,y:49.5774},0).wait(1).to({x:273.5692,y:55.2315},0).wait(1).to({x:273.5976,y:60.8855},0).wait(1).to({x:273.6261,y:66.5396},0).wait(1).to({x:273.6545,y:72.1937},0).wait(1).to({x:273.683,y:77.8477},0).wait(1).to({x:273.7115,y:83.5018},0).wait(1).to({x:273.7399,y:89.1559},0).wait(1).to({x:273.7684,y:94.81},0).wait(1).to({x:273.7968,y:100.464},0).wait(1).to({x:273.8253,y:106.1181},0).wait(1).to({x:273.8538,y:111.7722},0).wait(1).to({x:273.8822,y:117.4263},0).wait(1).to({x:273.9107,y:123.0803},0).wait(1).to({x:273.9391,y:128.7344},0).wait(1).to({x:273.9676,y:134.3885},0).wait(1).to({x:273.996,y:140.0425},0).wait(1).to({x:274.0245,y:145.6966},0).wait(1).to({x:274.053,y:151.3507},0).wait(1).to({x:274.0814,y:157.0048},0).wait(1).to({x:274.1099,y:162.6588},0).wait(1).to({x:274.1383,y:168.3129},0).wait(1).to({x:274.1668,y:173.967},0).wait(1).to({x:274.1953,y:179.6211},0).wait(1).to({x:274.2237,y:185.2751},0).wait(1).to({x:274.2522,y:190.9292},0).wait(1).to({x:274.2806,y:196.5833},0).wait(1).to({x:274.3091,y:202.2373},0).wait(1).to({x:274.3376,y:207.8914},0).wait(1).to({x:274.366,y:213.5455},0).wait(1).to({x:274.3945,y:219.1996},0).wait(1).to({x:274.4229,y:224.8536},0).wait(1).to({x:274.4514,y:230.5077},0).wait(1).to({x:274.4798,y:236.1618},0).wait(1).to({x:274.5083,y:241.8159},0).wait(1).to({x:274.5368,y:247.4699},0).wait(1).to({x:274.5652,y:253.124},0).wait(1).to({scaleX:0.9786,scaleY:0.9786,x:279.7173,y:263.4926},0).wait(1).to({scaleX:0.9573,scaleY:0.9573,x:284.8694,y:273.8611},0).wait(1).to({scaleX:0.9359,scaleY:0.9359,x:290.0215,y:284.2297},0).wait(1).to({scaleX:0.9146,scaleY:0.9146,x:295.1736,y:294.5982},0).wait(1).to({scaleX:0.8932,scaleY:0.8932,x:300.3257,y:304.9668},0).wait(1).to({scaleX:0.8718,scaleY:0.8718,x:305.4778,y:315.3353},0).wait(1).to({scaleX:0.8505,scaleY:0.8505,x:310.6299,y:325.7039},0).wait(1).to({scaleX:0.8291,scaleY:0.8291,x:315.782,y:336.0724},0).wait(1).to({scaleX:0.8077,scaleY:0.8077,x:320.9341,y:346.441},0).wait(1).to({scaleX:0.7864,scaleY:0.7864,x:326.0862,y:356.8096},0).wait(1).to({scaleX:0.765,scaleY:0.765,x:331.2384,y:367.1781},0).wait(1).to({scaleX:0.7437,scaleY:0.7437,x:336.3905,y:377.5467},0).wait(1).to({scaleX:0.7223,scaleY:0.7223,x:341.5426,y:387.9152},0).wait(1).to({scaleX:0.7009,scaleY:0.7009,x:346.6947,y:398.2838},0).wait(1).to({scaleX:0.6796,scaleY:0.6796,x:351.8468,y:408.6523},0).wait(1).to({scaleX:0.6582,scaleY:0.6582,x:356.9989,y:419.0209},0).wait(1).to({scaleX:0.6368,scaleY:0.6368,x:362.151,y:429.3894},0).wait(1).to({scaleX:0.6155,scaleY:0.6155,x:367.3031,y:439.758},0).wait(1).to({scaleX:0.5941,scaleY:0.5941,x:372.4552,y:450.1266},0).wait(1).to({scaleX:0.5728,scaleY:0.5728,x:377.6073,y:460.4951},0).wait(1).to({scaleX:0.5514,scaleY:0.5514,x:382.7594,y:470.8637},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:387.9115,y:481.2322},0).wait(1).to({scaleX:0.5087,scaleY:0.5087,x:393.0636,y:491.6008},0).wait(1).to({scaleX:0.4873,scaleY:0.4873,x:398.2157,y:501.9693},0).wait(1).to({scaleX:0.4659,scaleY:0.4659,x:403.3678,y:512.3379},0).wait(1).to({scaleX:0.4446,scaleY:0.4446,x:408.5199,y:522.7064},0).wait(1).to({scaleX:0.4232,scaleY:0.4232,x:413.672,y:533.075},0).wait(1).to({scaleX:0.4211,scaleY:0.4211,x:413.3474,y:537.7286},0).wait(1).to({scaleX:0.4189,scaleY:0.4189,x:413.0229,y:542.3821},0).wait(1).to({scaleX:0.4168,scaleY:0.4168,x:412.6983,y:547.0357},0).wait(1).to({scaleX:0.4146,scaleY:0.4146,x:412.3737,y:551.6893},0).wait(1).to({scaleX:0.4125,scaleY:0.4125,x:412.0491,y:556.3429},0).wait(1).to({scaleX:0.4103,scaleY:0.4103,x:411.7246,y:560.9964},0).wait(1).to({scaleX:0.4082,scaleY:0.4082,x:411.4,y:565.65},0).wait(1).to({scaleX:0.9604,scaleY:0.9604,x:283.85,y:220.55},0).wait(335).to({scaleX:1,scaleY:1,x:275,y:200},0).wait(1).to({scaleX:0.9913,scaleY:0.9913,x:276.2922,y:201.0518},0).wait(1).to({scaleX:0.9826,scaleY:0.9826,x:277.5843,y:202.1036},0).wait(1).to({scaleX:0.9739,scaleY:0.9739,x:278.8765,y:203.1554},0).wait(1).to({scaleX:0.9652,scaleY:0.9652,x:280.1687,y:204.2072},0).wait(1).to({scaleX:0.9565,scaleY:0.9565,x:281.4608,y:205.259},0).wait(1).to({scaleX:0.9479,scaleY:0.9479,x:282.753,y:206.3108},0).wait(1).to({scaleX:0.9392,scaleY:0.9392,x:284.0452,y:207.3627},0).wait(1).to({scaleX:0.9305,scaleY:0.9305,x:285.3373,y:208.4145},0).wait(1).to({scaleX:0.9218,scaleY:0.9218,x:286.6295,y:209.4663},0).wait(1).to({scaleX:0.9131,scaleY:0.9131,x:287.9217,y:210.5181},0).wait(1).to({scaleX:0.9044,scaleY:0.9044,x:289.2139,y:211.5699},0).wait(1).to({scaleX:0.8957,scaleY:0.8957,x:290.506,y:212.6217},0).wait(1).to({scaleX:0.887,scaleY:0.887,x:291.7982,y:213.6735},0).wait(1).to({scaleX:0.8783,scaleY:0.8783,x:293.0904,y:214.7253},0).wait(1).to({scaleX:0.8696,scaleY:0.8696,x:294.3825,y:215.7771},0).wait(1).to({scaleX:0.8609,scaleY:0.8609,x:295.6747,y:216.8289},0).wait(1).to({scaleX:0.8523,scaleY:0.8523,x:296.9669,y:217.8807},0).wait(1).to({scaleX:0.8436,scaleY:0.8436,x:298.259,y:218.9325},0).wait(1).to({scaleX:0.8349,scaleY:0.8349,x:299.5512,y:219.9843},0).wait(1).to({scaleX:0.8262,scaleY:0.8262,x:300.8434,y:221.0361},0).wait(1).to({scaleX:0.8175,scaleY:0.8175,x:302.1355,y:222.088},0).wait(1).to({scaleX:0.8088,scaleY:0.8088,x:303.4277,y:223.1398},0).wait(1).to({scaleX:0.8001,scaleY:0.8001,x:304.7199,y:224.1916},0).wait(1).to({scaleX:0.7914,scaleY:0.7914,x:306.012,y:225.2434},0).wait(1).to({scaleX:0.7827,scaleY:0.7827,x:307.3042,y:226.2952},0).wait(1).to({scaleX:0.774,scaleY:0.774,x:308.5964,y:227.347},0).wait(1).to({scaleX:0.7654,scaleY:0.7654,x:309.8886,y:228.3988},0).wait(1).to({scaleX:0.7567,scaleY:0.7567,x:311.1807,y:229.4506},0).wait(1).to({scaleX:0.748,scaleY:0.748,x:312.4729,y:230.5024},0).wait(1).to({scaleX:0.7393,scaleY:0.7393,x:313.7651,y:231.5542},0).wait(1).to({scaleX:0.7306,scaleY:0.7306,x:315.0572,y:232.606},0).wait(1).to({scaleX:0.7219,scaleY:0.7219,x:316.3494,y:233.6578},0).wait(1).to({scaleX:0.7132,scaleY:0.7132,x:317.6416,y:234.7096},0).wait(1).to({scaleX:0.7045,scaleY:0.7045,x:318.9337,y:235.7614},0).wait(1).to({scaleX:0.6958,scaleY:0.6958,x:320.2259,y:236.8133},0).wait(1).to({scaleX:0.6871,scaleY:0.6871,x:321.5181,y:237.8651},0).wait(1).to({scaleX:0.6784,scaleY:0.6784,x:322.8102,y:238.9169},0).wait(1).to({scaleX:0.6698,scaleY:0.6698,x:324.1024,y:239.9687},0).wait(1).to({scaleX:0.6611,scaleY:0.6611,x:325.3946,y:241.0205},0).wait(1).to({scaleX:0.6524,scaleY:0.6524,x:326.6867,y:242.0723},0).wait(1).to({scaleX:0.6437,scaleY:0.6437,x:327.9789,y:243.1241},0).wait(1).to({scaleX:0.635,scaleY:0.635,x:329.2711,y:244.1759},0).wait(1).to({scaleX:0.6263,scaleY:0.6263,x:330.5633,y:245.2277},0).wait(1).to({scaleX:0.6176,scaleY:0.6176,x:331.8554,y:246.2795},0).wait(1).to({scaleX:0.6089,scaleY:0.6089,x:333.1476,y:247.3313},0).wait(1).to({scaleX:0.6002,scaleY:0.6002,x:334.4398,y:248.3831},0).wait(1).to({scaleX:0.5915,scaleY:0.5915,x:335.7319,y:249.4349},0).wait(1).to({scaleX:0.5828,scaleY:0.5828,x:337.0241,y:250.4867},0).wait(1).to({scaleX:0.5742,scaleY:0.5742,x:338.3163,y:251.5386},0).wait(1).to({scaleX:0.5655,scaleY:0.5655,x:339.6084,y:252.5904},0).wait(1).to({scaleX:0.5568,scaleY:0.5568,x:340.9006,y:253.6422},0).wait(1).to({scaleX:0.5481,scaleY:0.5481,x:342.1928,y:254.694},0).wait(1).to({scaleX:0.5394,scaleY:0.5394,x:343.4849,y:255.7458},0).wait(1).to({scaleX:0.5307,scaleY:0.5307,x:344.7771,y:256.7976},0).wait(1).to({scaleX:0.522,scaleY:0.522,x:346.0693,y:257.8494},0).wait(1).to({scaleX:0.5133,scaleY:0.5133,x:347.3614,y:258.9012},0).wait(1).to({scaleX:0.5046,scaleY:0.5046,x:348.6536,y:259.953},0).wait(1).to({scaleX:0.4959,scaleY:0.4959,x:349.9458,y:261.0048},0).wait(1).to({scaleX:0.4872,scaleY:0.4872,x:351.238,y:262.0566},0).wait(1).to({scaleX:0.4786,scaleY:0.4786,x:352.5301,y:263.1084},0).wait(1).to({scaleX:0.4699,scaleY:0.4699,x:353.8223,y:264.1602},0).wait(1).to({scaleX:0.4612,scaleY:0.4612,x:355.1145,y:265.212},0).wait(1).to({scaleX:0.4525,scaleY:0.4525,x:356.4066,y:266.2639},0).wait(1).to({scaleX:0.4438,scaleY:0.4438,x:357.6988,y:267.3157},0).wait(1).to({scaleX:0.4351,scaleY:0.4351,x:358.991,y:268.3675},0).wait(1).to({scaleX:0.4264,scaleY:0.4264,x:360.2831,y:269.4193},0).wait(1).to({scaleX:0.4177,scaleY:0.4177,x:361.5753,y:270.4711},0).wait(1).to({scaleX:0.409,scaleY:0.409,x:362.8675,y:271.5229},0).wait(1).to({scaleX:0.4003,scaleY:0.4003,x:364.1596,y:272.5747},0).wait(1).to({scaleX:0.3917,scaleY:0.3917,x:365.4518,y:273.6265},0).wait(1).to({scaleX:0.383,scaleY:0.383,x:366.744,y:274.6783},0).wait(1).to({scaleX:0.3743,scaleY:0.3743,x:368.0361,y:275.7301},0).wait(1).to({scaleX:0.3656,scaleY:0.3656,x:369.3283,y:276.7819},0).wait(1).to({scaleX:0.3569,scaleY:0.3569,x:370.6205,y:277.8337},0).wait(1).to({scaleX:0.3482,scaleY:0.3482,x:371.9127,y:278.8855},0).wait(1).to({scaleX:0.3395,scaleY:0.3395,x:373.2048,y:279.9373},0).wait(1).to({scaleX:0.3308,scaleY:0.3308,x:374.497,y:280.9892},0).wait(1).to({scaleX:0.3221,scaleY:0.3221,x:375.7892,y:282.041},0).wait(1).to({scaleX:0.3134,scaleY:0.3134,x:377.0813,y:283.0928},0).wait(1).to({scaleX:0.3047,scaleY:0.3047,x:378.3735,y:284.1446},0).wait(1).to({scaleX:0.2961,scaleY:0.2961,x:379.6657,y:285.1964},0).wait(1).to({scaleX:0.2874,scaleY:0.2874,x:380.9578,y:286.2482},0).wait(1).to({scaleX:0.2787,scaleY:0.2787,x:382.25,y:287.3},0).wait(1).to({scaleX:0.9598,scaleY:0.9598,x:266.3,y:203.75},0).wait(1));

	// buttons_obj_
	this.buttons = new lib.Scene_1_buttons();
	this.buttons.name = "buttons";
	this.buttons.setTransform(267.3,171.6,0.9783,0.9783,0,0,0,269.5,174.3);
	this.buttons.depth = 0;
	this.buttons.isAttachedToCamera = 0
	this.buttons.isAttachedToMask = 0
	this.buttons.layerDepth = 0
	this.buttons.layerIndex = 0
	this.buttons.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.buttons).wait(1).to({regX:265.3,regY:-86.3,scaleX:1,scaleY:1,y:171.55},0).wait(509).to({regX:259,regY:176.4,scaleX:1.0419,scaleY:1.0419},0).wait(1));

	// embarrassment_obj_
	this.embarrassment = new lib.Scene_1_embarrassment();
	this.embarrassment.name = "embarrassment";
	this.embarrassment.setTransform(-0.05,0,0.9783,0.9783,0,0,0,-3.8,-1.1);
	this.embarrassment.depth = 0;
	this.embarrassment.isAttachedToCamera = 0
	this.embarrassment.isAttachedToMask = 0
	this.embarrassment.layerDepth = 0
	this.embarrassment.layerIndex = 1
	this.embarrassment.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.embarrassment).wait(101).to({regX:19.8,regY:28.4,scaleX:1.0413,scaleY:1.0413,x:0.05,y:-0.05},0).wait(327).to({regX:7.3,regY:5.5,scaleX:1.0177,scaleY:1.0177,x:0},0).to({_off:true},82).wait(1));

	// text_obj_
	this.text = new lib.Scene_1_text();
	this.text.name = "text";
	this.text.setTransform(-0.05,0,0.9783,0.9783,0,0,0,-3.8,-1.1);
	this.text.depth = 0;
	this.text.isAttachedToCamera = 0
	this.text.isAttachedToMask = 0
	this.text.layerDepth = 0
	this.text.layerIndex = 2
	this.text.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.text).wait(101).to({regX:19.8,regY:28.4,scaleX:1.0413,scaleY:1.0413,x:0.05,y:-0.05},0).wait(327).to({regX:7.3,regY:5.5,scaleX:1.0177,scaleY:1.0177,x:0},0).to({_off:true},82).wait(1));

	// bubble_obj_
	this.bubble = new lib.Scene_1_bubble();
	this.bubble.name = "bubble";
	this.bubble.setTransform(-0.05,0,0.9783,0.9783,0,0,0,-3.8,-1.1);
	this.bubble.depth = 0;
	this.bubble.isAttachedToCamera = 0
	this.bubble.isAttachedToMask = 0
	this.bubble.layerDepth = 0
	this.bubble.layerIndex = 3
	this.bubble.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.bubble).wait(101).to({regX:19.8,regY:28.4,scaleX:1.0413,scaleY:1.0413,x:0.05,y:-0.05},0).wait(327).to({regX:7.3,regY:5.5,scaleX:1.0177,scaleY:1.0177,x:0},0).to({_off:true},82).wait(1));

	// lips_cocava_obj_
	this.lips_cocava = new lib.Scene_1_lips_cocava();
	this.lips_cocava.name = "lips_cocava";
	this.lips_cocava.setTransform(-0.05,0,0.9783,0.9783,0,0,0,-3.8,-1.1);
	this.lips_cocava.depth = 0;
	this.lips_cocava.isAttachedToCamera = 0
	this.lips_cocava.isAttachedToMask = 0
	this.lips_cocava.layerDepth = 0
	this.lips_cocava.layerIndex = 4
	this.lips_cocava.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.lips_cocava).wait(101).to({regX:19.8,regY:28.4,scaleX:1.0413,scaleY:1.0413,x:0.05,y:-0.05},0).wait(202).to({regX:464.9,regY:308.2,scaleX:1,scaleY:1,x:445.2,y:279.8},0).wait(24).to({regX:19.8,regY:28.4,scaleX:1.0413,scaleY:1.0413,x:0.05,y:-0.05},0).wait(101).to({regX:7.3,regY:5.5,scaleX:1.0177,scaleY:1.0177,x:0},0).to({_off:true},82).wait(1));

	// cocava_obj_
	this.cocava = new lib.Scene_1_cocava();
	this.cocava.name = "cocava";
	this.cocava.setTransform(-0.05,0,0.9783,0.9783,0,0,0,-3.8,-1.1);
	this.cocava.depth = 0;
	this.cocava.isAttachedToCamera = 0
	this.cocava.isAttachedToMask = 0
	this.cocava.layerDepth = 0
	this.cocava.layerIndex = 5
	this.cocava.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.cocava).wait(101).to({regX:19.8,regY:28.4,scaleX:1.0413,scaleY:1.0413,x:0.05,y:-0.05},0).wait(202).to({regX:472.6,regY:280,scaleX:1,scaleY:1,x:452.9,y:251.6},0).wait(24).to({regX:19.8,regY:28.4,scaleX:1.0413,scaleY:1.0413,x:0.05,y:-0.05},0).to({_off:true},183).wait(1));

	// lips_star_obj_
	this.lips_star = new lib.Scene_1_lips_star();
	this.lips_star.name = "lips_star";
	this.lips_star.setTransform(-0.05,0,0.9783,0.9783,0,0,0,-3.8,-1.1);
	this.lips_star.depth = 0;
	this.lips_star.isAttachedToCamera = 0
	this.lips_star.isAttachedToMask = 0
	this.lips_star.layerDepth = 0
	this.lips_star.layerIndex = 6
	this.lips_star.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.lips_star).wait(101).to({regX:19.8,regY:28.4,scaleX:1.0413,scaleY:1.0413,x:0.05,y:-0.05},0).wait(202).to({regX:77.7,regY:315.3,scaleX:1,scaleY:1,x:58,y:286.9},0).wait(24).to({regX:19.8,regY:28.4,scaleX:1.0413,scaleY:1.0413,x:0.05,y:-0.05},0).wait(101).to({regX:7.3,regY:5.5,scaleX:1.0177,scaleY:1.0177,x:0},0).to({_off:true},82).wait(1));

	// star_obj_
	this.star = new lib.Scene_1_star();
	this.star.name = "star";
	this.star.setTransform(-0.05,0,0.9783,0.9783,0,0,0,-3.8,-1.1);
	this.star.depth = 0;
	this.star.isAttachedToCamera = 0
	this.star.isAttachedToMask = 0
	this.star.layerDepth = 0
	this.star.layerIndex = 7
	this.star.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.star).wait(101).to({regX:19.8,regY:28.4,scaleX:1.0413,scaleY:1.0413,x:0.05,y:-0.05},0).wait(202).to({regX:123.1,regY:284.1,scaleX:1,scaleY:1,x:103.4,y:255.7},0).wait(24).to({regX:19.8,regY:28.4,scaleX:1.0413,scaleY:1.0413,x:0.05,y:-0.05},0).to({_off:true},183).wait(1));

	// ים_2_obj_
	this.ים_2 = new lib.Scene_1_ים_2();
	this.ים_2.name = "ים_2";
	this.ים_2.setTransform(-0.05,0,0.9783,0.9783,0,0,0,-3.8,-1.1);
	this.ים_2.depth = 0;
	this.ים_2.isAttachedToCamera = 0
	this.ים_2.isAttachedToMask = 0
	this.ים_2.layerDepth = 0
	this.ים_2.layerIndex = 8
	this.ים_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.ים_2).wait(37).to({regX:-1,regY:-54.4,scaleX:1,scaleY:1,x:0,y:-0.05},0).wait(110).to({regX:19.8,regY:28.4,scaleX:1.0413,scaleY:1.0413,x:0.05},0).wait(156).to({regX:303.5,regY:283.9,scaleX:1,scaleY:1,x:283.8,y:255.5},0).wait(206).to({_off:true},1).wait(1));

	// ים_3_obj_
	this.ים_3 = new lib.Scene_1_ים_3();
	this.ים_3.name = "ים_3";
	this.ים_3.setTransform(-0.05,0,0.9783,0.9783,0,0,0,-3.8,-1.1);
	this.ים_3.depth = 0;
	this.ים_3.isAttachedToCamera = 0
	this.ים_3.isAttachedToMask = 0
	this.ים_3.layerDepth = 0
	this.ים_3.layerIndex = 9
	this.ים_3.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.ים_3).wait(37).to({regX:-1,regY:-54.4,scaleX:1,scaleY:1,x:0,y:-0.05},0).wait(110).to({regX:19.8,regY:28.4,scaleX:1.0413,scaleY:1.0413,x:0.05},0).wait(156).to({regX:287.3,regY:233.1,scaleX:1,scaleY:1,x:267.6,y:204.7},0).wait(206).to({_off:true},1).wait(1));

	// כוכבי_ים_obj_
	this.כוכבי_ים = new lib.Scene_1_כוכבי_ים();
	this.כוכבי_ים.name = "כוכבי_ים";
	this.כוכבי_ים.setTransform(-0.05,0,0.9783,0.9783,0,0,0,-3.8,-1.1);
	this.כוכבי_ים.depth = 0;
	this.כוכבי_ים.isAttachedToCamera = 0
	this.כוכבי_ים.isAttachedToMask = 0
	this.כוכבי_ים.layerDepth = 0
	this.כוכבי_ים.layerIndex = 10
	this.כוכבי_ים.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.כוכבי_ים).wait(37).to({regX:-1,regY:-54.4,scaleX:1,scaleY:1,x:0,y:-0.05},0).wait(110).to({regX:19.8,regY:28.4,scaleX:1.0413,scaleY:1.0413,x:0.05},0).wait(155).to({_off:true},208).wait(1));

	// רקע_חול_obj_
	this.רקע_חול = new lib.Scene_1_רקע_חול();
	this.רקע_חול.name = "רקע_חול";
	this.רקע_חול.setTransform(-0.05,0,0.9783,0.9783,0,0,0,-3.8,-1.1);
	this.רקע_חול.depth = 0;
	this.רקע_חול.isAttachedToCamera = 0
	this.רקע_חול.isAttachedToMask = 0
	this.רקע_חול.layerDepth = 0
	this.רקע_חול.layerIndex = 11
	this.רקע_חול.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.רקע_חול).wait(37).to({regX:-1,regY:-54.4,scaleX:1,scaleY:1,x:0,y:-0.05},0).wait(110).to({regX:19.8,regY:28.4,scaleX:1.0413,scaleY:1.0413,x:0.05},0).wait(155).to({_off:true},208).wait(1));

	// ירח_obj_
	this.ירח = new lib.Scene_1_ירח();
	this.ירח.name = "ירח";
	this.ירח.setTransform(-0.05,0,0.9783,0.9783,0,0,0,-3.8,-1.1);
	this.ירח.depth = 0;
	this.ירח.isAttachedToCamera = 0
	this.ירח.isAttachedToMask = 0
	this.ירח.layerDepth = 0
	this.ירח.layerIndex = 12
	this.ירח.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.ירח).wait(37).to({regX:-1,regY:-54.4,scaleX:1,scaleY:1,x:0,y:-0.05},0).wait(110).to({regX:19.8,regY:28.4,scaleX:1.0413,scaleY:1.0413,x:0.05},0).wait(155).to({_off:true},208).wait(1));

	// צוקים_obj_
	this.צוקים = new lib.Scene_1_צוקים();
	this.צוקים.name = "צוקים";
	this.צוקים.setTransform(-0.05,0,0.9783,0.9783,0,0,0,-3.8,-1.1);
	this.צוקים.depth = 0;
	this.צוקים.isAttachedToCamera = 0
	this.צוקים.isAttachedToMask = 0
	this.צוקים.layerDepth = 0
	this.צוקים.layerIndex = 13
	this.צוקים.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.צוקים).wait(110).to({regX:19.8,regY:28.4,scaleX:1.0413,scaleY:1.0413,x:0.05,y:-0.05},0).wait(192).to({_off:true},208).wait(1));

	// רקע_ים_לילה_obj_
	this.רקע_ים_לילה = new lib.Scene_1_רקע_ים_לילה();
	this.רקע_ים_לילה.name = "רקע_ים_לילה";
	this.רקע_ים_לילה.setTransform(-0.05,0,0.9783,0.9783,0,0,0,-3.8,-1.1);
	this.רקע_ים_לילה.depth = 0;
	this.רקע_ים_לילה.isAttachedToCamera = 0
	this.רקע_ים_לילה.isAttachedToMask = 0
	this.רקע_ים_לילה.layerDepth = 0
	this.רקע_ים_לילה.layerIndex = 14
	this.רקע_ים_לילה.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.רקע_ים_לילה).wait(37).to({regX:-1,regY:-54.4,scaleX:1,scaleY:1,x:0,y:-0.05},0).wait(110).to({regX:19.8,regY:28.4,scaleX:1.0413,scaleY:1.0413,x:0.05},0).wait(155).to({_off:true},208).wait(1));

	// text_obj_
	this.text_1 = new lib.Scene_1_text_1();
	this.text_1.name = "text_1";
	this.text_1.setTransform(-0.05,0,0.9783,0.9783,0,0,0,-3.8,-1.1);
	this.text_1.depth = 0;
	this.text_1.isAttachedToCamera = 0
	this.text_1.isAttachedToMask = 0
	this.text_1.layerDepth = 0
	this.text_1.layerIndex = 15
	this.text_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(37).to({regX:-1,regY:-54.4,scaleX:1,scaleY:1,x:0,y:-0.05},0).wait(58).to({regX:19.8,regY:28.4,scaleX:1.0413,scaleY:1.0413,x:0.05},0).wait(83).to({_off:true},124).wait(209));

	// bubble_obj_
	this.bubble_1 = new lib.Scene_1_bubble_1();
	this.bubble_1.name = "bubble_1";
	this.bubble_1.setTransform(-0.05,0,0.9783,0.9783,0,0,0,-3.8,-1.1);
	this.bubble_1.depth = 0;
	this.bubble_1.isAttachedToCamera = 0
	this.bubble_1.isAttachedToMask = 0
	this.bubble_1.layerDepth = 0
	this.bubble_1.layerIndex = 16
	this.bubble_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.bubble_1).wait(37).to({regX:-1,regY:-54.4,scaleX:1,scaleY:1,x:0,y:-0.05},0).wait(58).to({regX:19.8,regY:28.4,scaleX:1.0413,scaleY:1.0413,x:0.05},0).wait(83).to({_off:true},124).wait(209));

	// cocava_eyes_obj_
	this.cocava_eyes = new lib.Scene_1_cocava_eyes();
	this.cocava_eyes.name = "cocava_eyes";
	this.cocava_eyes.setTransform(-0.05,0,0.9783,0.9783,0,0,0,-3.8,-1.1);
	this.cocava_eyes.depth = 0;
	this.cocava_eyes.isAttachedToCamera = 0
	this.cocava_eyes.isAttachedToMask = 0
	this.cocava_eyes.layerDepth = 0
	this.cocava_eyes.layerIndex = 17
	this.cocava_eyes.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.cocava_eyes).wait(4).to({regX:-1.9,regY:-240.9,scaleX:1,scaleY:1,x:0.05},0).wait(4).to({regY:-218.3,x:-0.05},0).wait(37).to({regX:-0.8,regY:-9.1},0).wait(46).to({regX:19.8,regY:28.4,scaleX:1.0413,scaleY:1.0413,x:0.05,y:-0.05},0).wait(94).to({_off:true},125).wait(201));

	// cocava_lips_obj_
	this.cocava_lips = new lib.Scene_1_cocava_lips();
	this.cocava_lips.name = "cocava_lips";
	this.cocava_lips.setTransform(-0.05,0,0.9783,0.9783,0,0,0,-3.8,-1.1);
	this.cocava_lips.depth = 0;
	this.cocava_lips.isAttachedToCamera = 0
	this.cocava_lips.isAttachedToMask = 0
	this.cocava_lips.layerDepth = 0
	this.cocava_lips.layerIndex = 18
	this.cocava_lips.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.cocava_lips).wait(7).to({regX:-1.9,regY:-224,scaleX:1,scaleY:1,y:-0.05},0).wait(37).to({regX:-0.8,regY:-14.8,x:0},0).wait(47).to({regX:19.8,regY:28.4,scaleX:1.0413,scaleY:1.0413,x:0.05},0).wait(93).to({_off:true},130).wait(197));

	// star_eyes_obj_
	this.star_eyes = new lib.Scene_1_star_eyes();
	this.star_eyes.name = "star_eyes";
	this.star_eyes.setTransform(-0.05,0,0.9783,0.9783,0,0,0,-3.8,-1.1);
	this.star_eyes.depth = 0;
	this.star_eyes.isAttachedToCamera = 0
	this.star_eyes.isAttachedToMask = 0
	this.star_eyes.layerDepth = 0
	this.star_eyes.layerIndex = 19
	this.star_eyes.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.star_eyes).wait(37).to({regX:-1,regY:-54.4,scaleX:1,scaleY:1,x:0,y:-0.05},0).wait(54).to({regX:19.8,regY:28.4,scaleX:1.0413,scaleY:1.0413,x:0.05},0).wait(85).to({_off:true},126).wait(209));

	// star_eyes_obj_
	this.star_eyes_1 = new lib.Scene_1_star_eyes_1();
	this.star_eyes_1.name = "star_eyes_1";
	this.star_eyes_1.setTransform(-0.05,0,0.9783,0.9783,0,0,0,-3.8,-1.1);
	this.star_eyes_1.depth = 0;
	this.star_eyes_1.isAttachedToCamera = 0
	this.star_eyes_1.isAttachedToMask = 0
	this.star_eyes_1.layerDepth = 0
	this.star_eyes_1.layerIndex = 20
	this.star_eyes_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.star_eyes_1).wait(37).to({regX:-1,regY:-54.4,scaleX:1,scaleY:1,x:0,y:-0.05},0).wait(54).to({regX:19.8,regY:28.4,scaleX:1.0413,scaleY:1.0413,x:0.05},0).wait(86).to({_off:true},125).wait(209));

	// cocava_body_obj_
	this.cocava_body = new lib.Scene_1_cocava_body();
	this.cocava_body.name = "cocava_body";
	this.cocava_body.setTransform(-0.05,0,0.9783,0.9783,0,0,0,-3.8,-1.1);
	this.cocava_body.depth = 0;
	this.cocava_body.isAttachedToCamera = 0
	this.cocava_body.isAttachedToMask = 0
	this.cocava_body.layerDepth = 0
	this.cocava_body.layerIndex = 21
	this.cocava_body.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.cocava_body).wait(7).to({regX:-1.9,regY:-224,scaleX:1,scaleY:1,y:-0.05},0).wait(37).to({regX:-0.8,regY:-14.8,x:0},0).wait(47).to({regX:19.8,regY:28.4,scaleX:1.0413,scaleY:1.0413,x:0.05},0).to({_off:true},226).wait(194));

	// star_body_obj_
	this.star_body = new lib.Scene_1_star_body();
	this.star_body.name = "star_body";
	this.star_body.setTransform(-0.05,0,0.9783,0.9783,0,0,0,-3.8,-1.1);
	this.star_body.depth = 0;
	this.star_body.isAttachedToCamera = 0
	this.star_body.isAttachedToMask = 0
	this.star_body.layerDepth = 0
	this.star_body.layerIndex = 22
	this.star_body.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.star_body).wait(7).to({regX:-1.9,regY:-224,scaleX:1,scaleY:1,y:-0.05},0).wait(37).to({regX:-0.8,regY:-14.8,x:0},0).wait(47).to({regX:19.8,regY:28.4,scaleX:1.0413,scaleY:1.0413,x:0.05},0).to({_off:true},226).wait(194));

	// backgrond2_obj_
	this.backgrond2 = new lib.Scene_1_backgrond2();
	this.backgrond2.name = "backgrond2";
	this.backgrond2.setTransform(-0.05,0,0.9783,0.9783,0,0,0,-3.8,-1.1);
	this.backgrond2.depth = 0;
	this.backgrond2.isAttachedToCamera = 0
	this.backgrond2.isAttachedToMask = 0
	this.backgrond2.layerDepth = 0
	this.backgrond2.layerIndex = 23
	this.backgrond2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.backgrond2).wait(36).to({regX:-1.1,regY:-60,scaleX:1,scaleY:1},0).wait(46).to({regX:286.3,regY:433.8,scaleX:2.2493,scaleY:2.2493,x:0.1,y:0.15},0).wait(9).to({regX:19.8,regY:28.4,scaleX:1.0413,scaleY:1.0413,x:0.05,y:-0.05},0).wait(1).to({regX:280,regY:203.1,scaleX:1,scaleY:1,x:260.3,y:174.7},0).wait(222).to({_off:true},1).wait(196));

	// backgrond1_obj_
	this.backgrond1 = new lib.Scene_1_backgrond1();
	this.backgrond1.name = "backgrond1";
	this.backgrond1.setTransform(-0.05,0,0.9783,0.9783,0,0,0,-3.8,-1.1);
	this.backgrond1.depth = 0;
	this.backgrond1.isAttachedToCamera = 0
	this.backgrond1.isAttachedToMask = 0
	this.backgrond1.layerDepth = 0
	this.backgrond1.layerIndex = 24
	this.backgrond1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.backgrond1).wait(36).to({regX:-1.1,regY:-60,scaleX:1,scaleY:1},0).wait(46).to({regX:286.3,regY:433.8,scaleX:2.2493,scaleY:2.2493,x:0.1,y:0.15},0).wait(9).to({regX:19.8,regY:28.4,scaleX:1.0413,scaleY:1.0413,x:0.05,y:-0.05},0).to({_off:true},211).wait(209));

	// motion_backgrond_obj_
	this.motion_backgrond = new lib.Scene_1_motion_backgrond();
	this.motion_backgrond.name = "motion_backgrond";
	this.motion_backgrond.setTransform(261.7,-68.25,0.9783,0.9783,0,0,0,263.8,-70.9);
	this.motion_backgrond.depth = 0;
	this.motion_backgrond.isAttachedToCamera = 0
	this.motion_backgrond.isAttachedToMask = 0
	this.motion_backgrond.layerDepth = 0
	this.motion_backgrond.layerIndex = 25
	this.motion_backgrond.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.motion_backgrond).wait(1).to({regX:261.6,regY:201.8,scaleX:1,scaleY:1,x:259.55,y:204.4},0).wait(91).to({_off:true},1).wait(418));

	// backgrond_white_obj_
	this.backgrond_white = new lib.Scene_1_backgrond_white();
	this.backgrond_white.name = "backgrond_white";
	this.backgrond_white.setTransform(270.8,665.9,0.9783,0.9783,0,0,0,273.1,679.6);
	this.backgrond_white.depth = 0;
	this.backgrond_white.isAttachedToCamera = 0
	this.backgrond_white.isAttachedToMask = 0
	this.backgrond_white.layerDepth = 0
	this.backgrond_white.layerIndex = 26
	this.backgrond_white.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.backgrond_white).wait(1).to({regX:270.8,regY:260,scaleX:1,scaleY:1,x:268.55,y:246.35},0).wait(91).to({_off:true},1).wait(418));

	// backgrond_yellow_obj_
	this.backgrond_yellow = new lib.Scene_1_backgrond_yellow();
	this.backgrond_yellow.name = "backgrond_yellow";
	this.backgrond_yellow.setTransform(276.2,195.75,0.9783,0.9783,0,0,0,278.6,199);
	this.backgrond_yellow.depth = 0;
	this.backgrond_yellow.isAttachedToCamera = 0
	this.backgrond_yellow.isAttachedToMask = 0
	this.backgrond_yellow.layerDepth = 0
	this.backgrond_yellow.layerIndex = 27
	this.backgrond_yellow.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.backgrond_yellow).wait(92).to({regX:284.9,regY:216.5,scaleX:1.0413,scaleY:1.0413,x:276.1,y:195.85},0).to({_off:true},1).wait(418));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(147.8,-860.1,554,2440.4);
// library properties:
lib.properties = {
	id: 'D28E930893A26A42B1990CD9865439EA',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_174.png?1588664044379", id:"CachedBmp_174"},
		{src:"images/WISHtoFALL_atlas_1.png?1588664043440", id:"WISHtoFALL_atlas_1"},
		{src:"images/WISHtoFALL_atlas_2.png?1588664043440", id:"WISHtoFALL_atlas_2"},
		{src:"images/WISHtoFALL_atlas_3.png?1588664043441", id:"WISHtoFALL_atlas_3"},
		{src:"images/WISHtoFALL_atlas_4.png?1588664043449", id:"WISHtoFALL_atlas_4"},
		{src:"sounds/shooting_star.mp3?1588664044379", id:"shooting_star"},
		{src:"sounds/songmashina.mp3?1588664044379", id:"songmashina"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['D28E930893A26A42B1990CD9865439EA'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}

p._getProjectionMatrix = function(container, totalDepth) {	var focalLength = 528.25;
	var projectionCenter = { x : lib.properties.width/2, y : lib.properties.height/2 };
	var scale = (totalDepth + focalLength)/focalLength;
	var scaleMat = new createjs.Matrix2D;
	scaleMat.a = 1/scale;
	scaleMat.d = 1/scale;
	var projMat = new createjs.Matrix2D;
	projMat.tx = -projectionCenter.x;
	projMat.ty = -projectionCenter.y;
	projMat = projMat.prependMatrix(scaleMat);
	projMat.tx += projectionCenter.x;
	projMat.ty += projectionCenter.y;
	return projMat;
}
p._handleTick = function(event) {
	var cameraInstance = exportRoot.___camera___instance;
	if(cameraInstance !== undefined && cameraInstance.pinToObject !== undefined)
	{
		cameraInstance.x = cameraInstance.pinToObject.x + cameraInstance.pinToObject.pinOffsetX;
		cameraInstance.y = cameraInstance.pinToObject.y + cameraInstance.pinToObject.pinOffsetY;
		if(cameraInstance.pinToObject.parent !== undefined && cameraInstance.pinToObject.parent.depth !== undefined)
		cameraInstance.depth = cameraInstance.pinToObject.parent.depth + cameraInstance.pinToObject.pinOffsetZ;
	}
	stage._applyLayerZDepth(exportRoot);
}
p._applyLayerZDepth = function(parent)
{
	var cameraInstance = parent.___camera___instance;
	var focalLength = 528.25;
	var projectionCenter = { 'x' : 0, 'y' : 0};
	if(parent === exportRoot)
	{
		var stageCenter = { 'x' : lib.properties.width/2, 'y' : lib.properties.height/2 };
		projectionCenter.x = stageCenter.x;
		projectionCenter.y = stageCenter.y;
	}
	for(child in parent.children)
	{
		var layerObj = parent.children[child];
		if(layerObj == cameraInstance)
			continue;
		stage._applyLayerZDepth(layerObj, cameraInstance);
		if(layerObj.layerDepth === undefined)
			continue;
		if(layerObj.currentFrame != layerObj.parent.currentFrame)
		{
			layerObj.gotoAndPlay(layerObj.parent.currentFrame);
		}
		var matToApply = new createjs.Matrix2D;
		var cameraMat = new createjs.Matrix2D;
		var totalDepth = layerObj.layerDepth ? layerObj.layerDepth : 0;
		var cameraDepth = 0;
		if(cameraInstance && !layerObj.isAttachedToCamera)
		{
			var mat = cameraInstance.getMatrix();
			mat.tx -= projectionCenter.x;
			mat.ty -= projectionCenter.y;
			cameraMat = mat.invert();
			cameraMat.prependTransform(projectionCenter.x, projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			cameraMat.appendTransform(-projectionCenter.x, -projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			if(cameraInstance.depth)
				cameraDepth = cameraInstance.depth;
		}
		if(layerObj.depth)
		{
			totalDepth = layerObj.depth;
		}
		//Offset by camera depth
		totalDepth -= cameraDepth;
		if(totalDepth < -focalLength)
		{
			matToApply.a = 0;
			matToApply.d = 0;
		}
		else
		{
			if(layerObj.layerDepth)
			{
				var sizeLockedMat = stage._getProjectionMatrix(parent, layerObj.layerDepth);
				if(sizeLockedMat)
				{
					sizeLockedMat.invert();
					matToApply.prependMatrix(sizeLockedMat);
				}
			}
			matToApply.prependMatrix(cameraMat);
			var projMat = stage._getProjectionMatrix(parent, totalDepth);
			if(projMat)
			{
				matToApply.prependMatrix(projMat);
			}
		}
		layerObj.transformMatrix = matToApply;
	}
}
an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}

// Virtual camera API : 

an.VirtualCamera = new function() {
var _camera = new Object();
function VC(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined ) {
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VC.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VC.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VC.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VC.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VC.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VC.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VC.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VC.prototype.resetZoom = function() {
	this.setZoom(100);
};

VC.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VC.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VC.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VC.prototype.resetRotation = function() {
	this.setRotation(0);
};

VC.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VC.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VC.prototype.getZDepth = function() {
	return this.camera.depth;
}
VC.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VC.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VC.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
	if(this.camera.pinToObject != undefined) {
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
	}
};

VC.prototype.unpinCamera = function() {
	this.camera.pinToObject = undefined;
};
VC.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VC(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
}


// Layer depth API : 

an.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;