const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

const Cat = mongoose.model('Cat', { name: String });

for(var i = 0; i < 100; i++){
	var kitty = new Cat({ name: 'Zildjian' + i });
	kitty.save().then(() => console.log('meow' + i));
}





