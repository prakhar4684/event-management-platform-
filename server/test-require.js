try {
  require('./models/user');
  require('./models/user');
  console.log('SUCCESS: No OverwriteModelError');
  process.exit(0);
} catch(e) {
  console.log('FAILURE:', e.message);
  process.exit(1);
}
