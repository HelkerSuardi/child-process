process.on('message', async (totalLoops) => {
  blockingFunction(totalLoops);
  process.exit(1);
});

const blockingFunction = (totalLoops) => {
  for (let i = 0; i < totalLoops; i++) {
    console.log(i);
  }
};

module.exports = { blockingFunction };
