const {
  newSingle,
  eresBadBunny,
  areYouLil,
  mostViewsThreeVideos,
  mostViews,
  validateEmail,
  validateEmailWithMessage,
  getInitials,
  getInitialsOneName,
  getInitialsLongName,
  howRepetitiveAreYou,
  translateThis,
  getSingles,
  getUniqueArtists,
  getMostStreamedTrack
} = require('../code-challenges.js');
const assert = require('assert');


describe('Hype Machine', function() {

  it('hypes the new Drip single', function() {
    assert.strictEqual('New single Drip is dropping soon!', newSingle('Drip'));
  });

  it('hypes the new Body single', function() {
    assert.strictEqual('New single Body is dropping soon!', newSingle('Body'));
  });

  it('hypes the new Bandido single', function() {
    assert.strictEqual('New single Bandido is dropping soon!', newSingle('Bandido'));
  });

});


describe.skip('¿Are You Bad Bunny?', function() {

  it('is Bad Bunny', function() {
    assert.strictEqual(eresBadBunny('Bad Bunny'), true);
  });

  it('is not Bad Bunny (Bad Rabbit)', function() {
    assert.strictEqual(eresBadBunny('Bad Rabbit'), false);
  });

  it('is not Bad Bunny (Good Bunny)', function() {
    assert.strictEqual(eresBadBunny('Bad Rabbit'), false);
  });

});


describe.skip('¿Are You Bad Bunny? - Bonus (Case Insensitive)', function() {

  it('is BAD BUNNY', function() {
    assert.strictEqual(eresBadBunny('BAD BUNNY'), true);
  });

});


describe.skip('Lil Rapper', function() {

  it('is Lil (Lil Wayne)', function() {
    assert.strictEqual(areYouLil('Lil Wayne'), true);
  });

  it('is Lil (Lil Baby)', function() {
    assert.strictEqual(areYouLil('Lil Baby'), true);
  });

  it('is not Lil (DaBaby)', function() {
    assert.strictEqual(areYouLil('DaBaby'), false);
  });

  it('is not Lil (Young Thug)', function() {
    assert.strictEqual(areYouLil('Young Thug'), false);
  });

  it('is not Lil (Liler Wayne)', function() {
    assert.strictEqual(areYouLil('Liler Wayne'), false);
  });

});


describe.skip('Most YouTube Views - Part 1', function() {

  it('returns the most views - 555000', function() {
    assert.strictEqual(mostViewsThreeVideos(100, 555000, 2222), 555000);
  });

  it('returns the most views - 3', function() {
    assert.strictEqual(mostViewsThreeVideos(3, 2, 1), 3);
  });

  it('returns the most views - 222', function() {
    assert.strictEqual(mostViewsThreeVideos(99, 111, 222), 222);
  });

});


describe.skip('Most YouTube Views - Part 2', function() {

  it('returns the most views - 555000', function() {
    assert.strictEqual(mostViews([100, 555000, 2222]), 555000);
  });

  it('returns the most views - 1000', function() {
    assert.strictEqual(mostViews([1000, 800, 600, 400, 200]), 1000);
  });

  it('returns the most views - 999', function() {
    assert.strictEqual(mostViews([999]), 999);
  });

});


describe.skip('Validate Email - Part 1', function() {
  it('recognizes a valid email', function() {
    assert.strictEqual(validateEmail('notoriousbig@badboy.com').toLowerCase(), 'valid email');
  });

  it('recognizes an invalid email for a missing @', function() {
    assert.strictEqual(validateEmail('run.dmc.oldschool.edu').toLowerCase(), 'invalid email');
  });

  it('recognizes an invalid email for a wrong extension', function() {
    assert.strictEqual(validateEmail('tupac@death.row').toLowerCase(), 'invalid email');
  });

  it('recognizes an invalid email for a missing recipient before the @', function() {
    assert.strictEqual(validateEmail('@gmail.com').toLowerCase(), 'invalid email');
  });

});


describe.skip('Validate Email - Part 2', function() {

  it('recognizes a valid email', function() {
    assert.strictEqual(
      validateEmailWithMessage('notoriousbig@badboy.com').toLowerCase(),
      'valid email'
    );
  });

  it('returns the correct error message for a missing @', function() {
    assert.strictEqual(
      validateEmailWithMessage('run.dmc.oldschool.edu').toLowerCase(),
      'invalid email: missing @ symbol'
    );
  });

  it('returns the correct error message for the wrong extension type', function() {
    assert.strictEqual(
      validateEmailWithMessage('tupac@murder.inc').toLowerCase(),
      'invalid email: email address should end with .com, .edu, .net, or .org'
    );
  });

  it('returns the correct error message for a missing recipient', function() {
    assert.strictEqual(
      validateEmailWithMessage('@gmail.com').toLowerCase(),
      'invalid email: missing recipient name'
    );
  });

});


describe.skip('Display an Artist’s Initials - Part 1', function() {

  it('returns the correct initials: Jorja Smith', function() {
    assert.strictEqual(getInitials('Jorja Smith'), 'JS');
  });

  it('returns the correct initials: Billie Eilish', function() {
    assert.strictEqual(getInitials('Billie Eilish'), 'BE');
  });

  it('returns the correct initials: Daddy Yankee', function() {
    assert.strictEqual(getInitials('Daddy Yankee'), 'DY');
  });

});


describe.skip('Display an Artist’s Initials - Part 2 (One Name)', function() {

  it('returns the correct initials: Ozuna', function() {
    assert.strictEqual(getInitialsOneName('Ozuna'), 'OZ');
  });

  it('returns the correct initials: Lorde', function() {
    assert.strictEqual(getInitialsOneName('Lorde'), 'LO');
  });

  it('returns the correct initials: 24kgoldn', function() {
    assert.strictEqual(getInitialsOneName('24kgoldn'), '24');
  });

});


describe.skip('Display an Artist’s Initials - Part 3 (Long Name)', function() {

  it('returns the correct initials: Megan Thee Stallion', function() {
    assert.strictEqual(getInitialsLongName('Megan Thee Stallion'), 'MTS');
  });

  it('returns the correct initials: Lil Uzi Vert', function() {
    assert.strictEqual(getInitialsLongName('Lil Uzi Vert'), 'LUV');
  });

  it('returns the correct initials: Run The Jewels', function() {
    assert.strictEqual(getInitialsLongName('Run The Jewels'), 'RTJ');
  });

});


describe.skip('You’re Really Repeating Yourself... Part 1', function() {

  it('returns the correct number of lyrics: "drippin"', function() {
    const lyrics = `came through drippin' (drip drip)
      came through drippin' (drip drip)
      came through drippin' (drip drip)
      diamonds on my wrist, they drippin' (ice)
      came through drippin' (drip drip)
      came through drippin' (drip drip)
      came through drippin' (drip drip)
      diamonds on my wrist, they drippin' (ice)
      came through drippin' (drip drip)
      came through drippin' (drip drip)
      came through drippin' (drip drip)
      diamonds on my wrist, they drippin' (ice)
      came through drippin' (drip drip)
      came through drippin' (drip drip)
      came through drippin' (drip drip)
      diamonds on my wrist, they drippin' (ice)`
    assert.strictEqual(howRepetitiveAreYou(lyrics, 'drippin'), 16);
  });

  it('returns the correct number of lyrics: "happy"', function() {
    const lyrics = `huh, because i'm happy
      clap along if you feel like a room without a roof
      because i'm happy
      clap along if you feel like happiness is the truth
      because i'm happy
      clap along if you know what happiness is to you
      because i'm happy
      clap along if you feel like that's what you wanna do`
    assert.strictEqual(howRepetitiveAreYou(lyrics, 'happy'), 4);
  });

  it('returns the correct number of lyrics:: "work"', function() {
    const lyrics = `work, work, work, work, work, work
      you see me i be work, work, work, work, work, work
      you see me do me dirt, dirt, dirt, dirt, dirt, dirt
      there's something 'bout that work, work, work, work, work, work
      when you a gon' learn, learn, learn, learn, learn, learn
      me na care if me tired, tired, tired, tired, tired, tired
      `
    assert.strictEqual(howRepetitiveAreYou(lyrics, 'work'), 18);
  });

  it('returns the correct number of lyrics: "learn"', function() {
    const lyrics = `work, work, work, work, work, work
      you see me i be work, work, work, work, work, work
      you see me do me dirt, dirt, dirt, dirt, dirt, dirt
      there's something 'bout that work, work, work, work, work, work
      when you a gon' learn, learn, learn, learn, learn, learn
      me na care if me tired, tired, tired, tired, tired, tired
      `
    assert.strictEqual(howRepetitiveAreYou(lyrics, 'learn'), 6);
  });

});


describe.skip('You’re Really Repeating Yourself...Part 2 (Case Sensitive)', function() {

  it('returns the correct number of lyrics: "work"', function() {
    const lyrics = `Work, work, work, work, work, work
      You see me I be work, work, work, work, work, work
      You see me do me dirt, dirt, dirt, dirt, dirt, dirt
      There's something 'bout that work, work, work, work, work, work
      When you a gon' learn, learn, learn, learn, learn, learn
      Me na care if me tired, tired, tired, tired, tired, tired
      `
    assert.strictEqual(howRepetitiveAreYou(lyrics, 'work'), 17);
  });

});


describe.skip('Translate This', function() {

  it('translates the list of song titles', function() {
    const spanishTitles = ['un dia', 'soltera', 'vete', 'la canción'];
    const englishTitles = ['one day', 'single', 'go away', 'the song'];

    assert.deepStrictEqual(translateThis(spanishTitles), englishTitles);
  });

});


describe.skip('The Code is Totally Buggin - Part 1 (Singles)', function() {

  it('returns a string of comma-separated singles from the track list', function() {
    assert.strictEqual(getSingles(), 'Dynamite, Be Honest');
  });

});


describe.skip('The Code is Totally Buggin - Part 2 (Unique Artists)', function() {

  it('returns a list of unique artists from the track list', function() {
    assert.deepStrictEqual(getUniqueArtists(), ["Jorja Smith", "BTS", "Ozuna"]);
  });

});


describe.skip('The Code is Totally Buggin - Part 3 (Most Streamed Track)', function() {

  it('returns the most streamed track from the track list', function() {
    const expectation = { title: 'Dynamite', artist: 'BTS', type: 'single', numberOfStreams: 1000 };
    const result = getMostStreamedTrack();

    assert.strictEqual(expectation.title, result.title);
    assert.strictEqual(expectation.artist, result.artist);
    assert.strictEqual(expectation.type, result.type);
    assert.strictEqual(expectation.numberOfStreams, result.numberOfStreams);
    assert.strictEqual(result.numberOfStreams, 1000);
  });

});
