import mongoose from 'mongoose';

const quoteSchema = {
	quote: {
		type: String,
		required: true,
	},
	by: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
	},
};

const Quote = mongoose.model('Quote', quoteSchema);
export default Quote;
