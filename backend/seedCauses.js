const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Cause = require('./models/Cause');

// Load env vars
dotenv.config();

// Connect to DB
const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/bharat-samartha-trust';
        console.log(`Connecting to: ${uri}`);
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected');
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

const causes = [
    {
        title: 'Flood Relief in Assam',
        description: 'Provide immediate relief kits containing food, water, and medicine to families displaced by floods in Assam. Thousands have lost their homes and livelihoods. Your support can bring them hope and essential supplies during this crisis.',
        category: 'Disaster Relief',
        goalAmount: 500000,
        raisedAmount: 120000,
        status: 'Urgent',
        image: 'https://images.unsplash.com/photo-1547625121-722a48b5947a?auto=format&fit=crop&w=800&q=80',
    },
    {
        title: 'Education for Rural Girls',
        description: 'Sponsor the education of girls in remote villages of Tamil Nadu. We provide textbooks, uniforms, and scholarships to ensure they complete their schooling and build a bright future. Education is the key to breaking the cycle of poverty.',
        category: 'Education',
        goalAmount: 500000,
        raisedAmount: 450000,
        status: 'Ongoing',
        image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
    },
    {
        title: 'Legal Aid for Laborers',
        description: 'Providing free legal representation and awareness workshops for daily wage laborers fighting for their rights. Help us ensure justice is accessible to everyone, regardless of their financial status.',
        category: 'Legal Aid',
        goalAmount: 200000,
        raisedAmount: 50000,
        status: 'Ongoing',
        image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80',
    },
    {
        title: 'Free Health Camps',
        description: 'Organizing weekly health check-up camps in underserved rural areas. We provide free consultations, basic medicines, and diagnostics for diabetes and hypertension to the elderly and women.',
        category: 'Health',
        goalAmount: 300000,
        raisedAmount: 75000,
        status: 'Ongoing',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    },
    {
        title: 'Sustainable Farming Workshops',
        description: 'Training farmers in organic farming techniques and water conservation. This initiative aims to improve crop yields and promote sustainable agricultural practices in drought-prone regions.',
        category: 'Education',
        goalAmount: 150000,
        raisedAmount: 30000,
        status: 'Ongoing',
        image: 'https://images.unsplash.com/photo-1625246333195-58197bd47d26?auto=format&fit=crop&w=800&q=80',
    }
];

const seedData = async () => {
    await connectDB();

    try {
        await Cause.deleteMany(); // Clear existing
        console.log('Causes cleared');

        await Cause.insertMany(causes);
        console.log('Causes imported');

        process.exit();
    } catch (error) {
        console.error(`Error: ${error}`);
        process.exit(1);
    }
};

seedData();
