const adamoseed = require('./adamoSeed');
const agraleseed = require('./agraleSeed');
const alfaromeoseed = require('./alfaRomeoSeed');
const arielAsiaSeed = require('./arielAsiaSeed')
const runSeeds = async () => {
  try {
    console.log('Starting seed scripts...');

    await Promise.all([
      adamoseed(),
      agraleseed(),
      alfaromeoseed(),
      arielAsiaSeed()
    ]);

    console.log('All seeds executed successfully!');
  } catch (error) {
    console.error('Error executing seed scripts:', error);
  } finally {
    process.exit();
  }
};

runSeeds();